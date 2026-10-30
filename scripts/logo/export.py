"""Exporte les fichiers SVG du logo Wedicine dans out/."""
from build import make, svgd, moved, U, Path
import json

s = make()
allp = U(s["blue"], s["navy"])
x0, y0, x1, y1 = allp.bounds
k = 100.0 / (y1 - y0)                      # logo complet : 100 unités de haut
W = round((x1 - x0) * k, 1)
T = lambda p: svgd(moved(p, -x0, -y0, k))
BLUE, DEEP, NAVY = "#0065FF", "#0052CC", "#091E42"

def svg(vb, body, title="Wedicine"):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" role="img" aria-label="{title}"><title>{title}</title>{body}</svg>\n'

def logo(blue, deep, navy):
    return svg(f"0 0 {W} 100", f'<path fill="{blue}" d="{T(s["blue"])}"/><path fill="{deep}" d="{T(s["cross"])}"/><path fill="{navy}" d="{T(s["navy"])}"/>')

files = {
    "logo.svg": logo(BLUE, DEEP, NAVY),                      # fond clair
    "logo-blanc.svg": logo("#FFFFFF", "#B3D4FF", "#FFFFFF"),  # fond bleu
    "logo-sombre.svg": logo("#4C9AFF", "#2684FF", "#FFFFFF"), # fond marine
    "logo-noir.svg": logo(NAVY, NAVY, NAVY),                  # une couleur
}

# Symbole seul (le w), centré dans un carré
sx0, sy0, sx1, sy1 = s["sym"].bounds
side = max(sx1 - sx0, sy1 - sy0)
def sym_body(size, pad, fg, deep):
    kk = (size - 2 * pad) / side
    ox = -sx0 + (side - (sx1 - sx0)) / 2 + pad / kk
    oy = -sy0 + (side - (sy1 - sy0)) / 2 + pad / kk
    return f'<path fill="{fg}" d="{svgd(moved(s["sym"], ox, oy, kk))}"/><path fill="{deep}" d="{svgd(moved(s["sym_cross"], ox, oy, kk))}"/>'

files["symbole.svg"] = svg("0 0 100 100", sym_body(100, 4, BLUE, DEEP))
files["symbole-blanc.svg"] = svg("0 0 100 100", sym_body(100, 4, "#FFFFFF", "#B3D4FF"))
# Favicon / icônes : carré bleu arrondi, w blanc
files["favicon.svg"] = svg("0 0 32 32", f'<rect width="32" height="32" rx="8" fill="{BLUE}"/>' + sym_body(32, 5.5, "#FFFFFF", "#B3D4FF"))
files["icone-carre.svg"] = svg("0 0 100 100", f'<rect width="100" height="100" fill="{BLUE}"/>' + sym_body(100, 20, "#FFFFFF", "#B3D4FF"))
files["avatar-rond.svg"] = svg("0 0 100 100", f'<circle cx="50" cy="50" r="50" fill="{BLUE}"/>' + sym_body(100, 22, "#FFFFFF", "#B3D4FF"))

for name, body in files.items():
    open("out/" + name, "w").write(body)
print(json.dumps({"W": W, "files": {n: len(b) for n, b in files.items()}}))
