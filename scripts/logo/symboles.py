"""Symboles Wedicine (pistes du 30/10/2026) et export du logo « symbole + wedicine ».

Trois symboles dans un repère 100 x 100 (y vers le bas) :
  waw     : le « و », tête ronde = bulle de dialogue, creux = croix du soin, queue effilée
  bubbles : deux bulles (question couchée, réponse debout) qui se croisent en croix
  stetho  : un stéthoscope qui dessine une bulle
Le mot « wedicine » reprend les lettres de build.py avec un « w » simple.

Export : cd scripts/logo && mkdir -p out && python3 symboles.py waw
puis copier out/*.svg dans public/brand/ (favicon.svg dans public/). Dépendances : pip install skia-pathops fonttools
"""
import json, math, sys
from pathops import LineCap, LineJoin, op, PathOp
from build import make, svgd, moved, U, D, I, ellipse, stroke, Path

BLUE, DEEP, NAVY, SKY, PALE, ICE = "#0065FF", "#0052CC", "#091E42", "#4C9AFF", "#B3D4FF", "#A9CBFF"

def bez(p0, p1, p2, p3, t):
    a = (1 - t) ** 3; b = 3 * (1 - t) ** 2 * t; c = 3 * (1 - t) * t * t; d = t ** 3
    return (a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0], a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1])

def dbez(p0, p1, p2, p3, t):
    a = 3 * (1 - t) ** 2; b = 6 * (1 - t) * t; c = 3 * t * t
    return (a * (p1[0] - p0[0]) + b * (p2[0] - p1[0]) + c * (p3[0] - p2[0]), a * (p1[1] - p0[1]) + b * (p2[1] - p1[1]) + c * (p3[1] - p2[1]))

def var_stroke(pts, w0, w1, n=160, ease=1.0):
    """Trait d'épaisseur variable (w0 vers w1) le long d'une Bézier cubique, bout rond à la fin."""
    L, R = [], []
    for i in range(n + 1):
        t = i / n
        x, y = bez(*pts, t); dx, dy = dbez(*pts, t)
        l = math.hypot(dx, dy) or 1
        nx, ny = -dy / l, dx / l
        w = (w0 + (w1 - w0) * (t ** ease)) / 2
        L.append((x + nx * w, y + ny * w)); R.append((x - nx * w, y - ny * w))
    p = Path(); p.moveTo(*L[0])
    for q in L[1:]: p.lineTo(*q)
    x, y = bez(*pts, 1); dx, dy = dbez(*pts, 1); l = math.hypot(dx, dy); ux, uy = dx / l, dy / l
    r = w1 / 2
    for k in range(1, 24):                     # demi-cercle de L vers R en passant par l'avant
        a = math.pi * k / 24
        p.lineTo(x + (-uy * math.cos(a) + ux * math.sin(a)) * r, y + (ux * math.cos(a) + uy * math.sin(a)) * r)
    for q in reversed(R): p.lineTo(*q)
    p.close()
    return op(p, p, PathOp.UNION)

def plus(cx, cy, arm, th):
    return U(stroke([(cx - arm, cy), (cx + arm, cy)], th), stroke([(cx, cy - arm), (cx, cy + arm)], th))

def rrect(x0, y0, x1, y1, r):
    k = 0.5522847498 * r
    p = Path()
    p.moveTo(x0 + r, y0); p.lineTo(x1 - r, y0); p.cubicTo(x1 - r + k, y0, x1, y0 + r - k, x1, y0 + r)
    p.lineTo(x1, y1 - r); p.cubicTo(x1, y1 - r + k, x1 - r + k, y1, x1 - r, y1)
    p.lineTo(x0 + r, y1); p.cubicTo(x0 + r - k, y1, x0, y1 - r + k, x0, y1 - r)
    p.lineTo(x0, y0 + r); p.cubicTo(x0, y0 + r - k, x0 + r - k, y0, x0 + r, y0); p.close()
    return p

def waw():
    hx, hy, hr = 50.0, 40.0, 30.0
    w0 = 18.5
    head = ellipse(hx, hy, hr, hr)
    sx = hx + hr - w0 / 2                      # la queue part au ras de la tête, vers le bas
    tail = var_stroke([(sx, hy), (sx, hy + 21), (hx - 2, hy + 35), (hx - 30, hy + 33)], w0, 3.0, ease=1.4)
    return [D(U(head, tail), plus(hx, hy, 12, 9.5))]

def bubbles():
    th, ln, tl = 30.0, 80.0, 10.0
    a, b = 50 - ln / 2, 50 + ln / 2
    q = rrect(a, 50 - th / 2, b, 50 + th / 2, th / 2)      # question, couchée
    r = rrect(50 - th / 2, a, 50 + th / 2, b, th / 2)      # réponse, debout
    yb, xb = 50 + th / 2, 50 + th / 2
    q = U(q, var_stroke([(a + 16, yb - 8), (a + 14, yb + 2), (a + 9, yb + 7), (a + 1, yb + tl)], 15, 2.2))
    r = U(r, var_stroke([(xb - 8, b - 16), (xb + 2, b - 14), (xb + 7, b - 9), (xb + tl, b - 1)], 15, 2.2))
    return [q, r, I(q, r)]

def stetho():
    t, gap, cr, drop = 10.5, 13.0, 10.5, 15.0
    x0, y0, x1, y1, r = 12.0, 14.0, 88.0, 66.0, 22.0
    k = 0.5522847498 * r
    left = Path(); left.moveTo(50 - gap, y0); left.lineTo(x0 + r, y0); left.cubicTo(x0 + r - k, y0, x0, y0 + r - k, x0, y0 + r)
    left.lineTo(x0, y1 - r); left.cubicTo(x0, y1 - r + k, x0 + r - k, y1, x0 + r, y1)
    right = Path(); right.moveTo(50 + gap, y0); right.lineTo(x1 - r, y0); right.cubicTo(x1 - r + k, y0, x1, y0 + r - k, x1, y0 + r)
    right.lineTo(x1, y1 - r); right.cubicTo(x1, y1 - r + k, x1 - r + k, y1, x1 - r, y1); right.lineTo(x0 + r, y1)
    hang = Path(); hang.moveTo(x0 + r, y1); hang.cubicTo(x0 + 8, y1 + 4, x0 + 2, y1 + 10, x0 + 4, y1 + drop)
    for p in (left, right, hang):
        p.stroke(t, LineCap.ROUND_CAP, LineJoin.ROUND_JOIN, 4); p.convertConicsToQuads()
    tips = U(ellipse(50 - gap, y0, t * 0.85, t * 0.85), ellipse(50 + gap, y0, t * 0.85, t * 0.85))
    cx, cy = x0 + 4, y1 + drop + 8
    return [U(left, right, hang, tips), D(ellipse(cx, cy, cr, cr), ellipse(cx, cy, cr * 0.45, cr * 0.45))]

# Couleurs des couches de chaque symbole : fond clair, fond bleu, fond marine.
COLORS = {
    "waw":     ([BLUE], ["#FFFFFF"], [SKY]),
    "bubbles": ([BLUE, SKY, DEEP], ["#FFFFFF", PALE, "#FFFFFF"], [SKY, ICE, "#2684FF"]),
    "stetho":  ([BLUE, NAVY], ["#FFFFFF", "#FFFFFF"], [SKY, "#FFFFFF"]),
}
SYMBOLS = {"waw": waw, "bubbles": bubbles, "stetho": stetho}

def wordmark():
    """Le mot « wedicine » avec un w simple, de la même graisse que les autres lettres."""
    SV, X, B = 53.0, 283.0, 486.0
    step, x0 = 66.0, 300.0
    top, bot = X + SV / 2 - 3, B - SV / 2 + 3
    xs = [x0 + i * step for i in range(5)]
    w = stroke([(xs[0], top), (xs[1], bot), (xs[2], top), (xs[3], bot), (xs[4], top)], SV)
    dlt = xs[4] + SV / 2 + 20.0 + 108.5 - 748.0          # le premier e suit le w
    pr = {k: v + dlt for k, v in dict(E1X=748.0, DBX=972.5, DSX=1064.0, I1X=1139.5, CX=1285.5, I2X=1414.5, NLX=1489.5, NRX=1675.0, E2X=1796.5).items()}
    pr["GAP"] = 0
    s = make(pr)
    return U(w, s["e1"]), s["navy"]

def place(layers, box, pad):
    """Centre un groupe de couches dans un carré de côté box, avec une marge pad."""
    x0, y0, x1, y1 = U(*layers).bounds
    side = max(x1 - x0, y1 - y0); k = (box - 2 * pad) / side
    ox = -x0 + (side - (x1 - x0)) / 2 + pad / k; oy = -y0 + (side - (y1 - y0)) / 2 + pad / k
    return [moved(p, ox, oy, k) for p in layers]

def lockup(layers, sym_h=1.2, gap=0.38):
    """Symbole + mot : symbole haut de sym_h fois le mot, centré sur lui, écart gap ; hauteur totale 100."""
    blue, navy = wordmark()
    x0, y0, x1, y1 = U(blue, navy).bounds
    hw = y1 - y0
    sx0, sy0, sx1, sy1 = U(*layers).bounds
    k = sym_h * hw / (sy1 - sy0)
    sym = [moved(p, -sx0, -sy0, k) for p in layers]
    sw = (sx1 - sx0) * k
    dy = (sym_h * hw - hw) / 2                               # le mot est centré sur le symbole
    word = [p.transform(1, 0, 0, 1, -x0 + sw + gap * hw, -y0 + dy) for p in (blue, navy)]
    s = 100.0 / (sym_h * hw)
    out = [moved(p, 0, 0, s) for p in sym + word]
    W = round((sw + gap * hw + (x1 - x0)) * s, 1)
    return out, W

def svg(vb, body, title="Wedicine"):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" role="img" aria-label="{title}"><title>{title}</title>{body}</svg>\n'

def paths(layers, fills, nd=1):
    return "".join(f'<path fill="{f}" d="{svgd(p, nd)}"/>' for p, f in zip(layers, fills))

def export(key):
    layers = SYMBOLS[key]()
    light, on_blue, on_navy = COLORS[key]
    lk, W = lockup(layers)
    n = len(layers)
    def logo(sym_fills, blue, navy):
        return svg(f"0 0 {W} 100", paths(lk, list(sym_fills) + [blue, navy]))
    files = {
        "logo.svg": logo(light, BLUE, NAVY),                     # fond clair
        "logo-blanc.svg": logo(on_blue, "#FFFFFF", "#FFFFFF"),   # fond bleu
        "logo-sombre.svg": logo(on_navy, SKY, "#FFFFFF"),        # fond marine (pied de page)
        "logo-noir.svg": logo([NAVY] * n, NAVY, NAVY),           # une couleur
        "symbole.svg": svg("0 0 100 100", paths(place(layers, 100, 4), light, 2)),
        "symbole-blanc.svg": svg("0 0 100 100", paths(place(layers, 100, 4), on_blue, 2)),
        "favicon.svg": svg("0 0 32 32", f'<rect width="32" height="32" rx="7.5" fill="{BLUE}"/>' + paths(place(layers, 32, 3.6), on_blue, 2)),
        "icone-carre.svg": svg("0 0 100 100", f'<rect width="100" height="100" fill="{BLUE}"/>' + paths(place(layers, 100, 20), on_blue, 2)),
        "avatar-rond.svg": svg("0 0 100 100", f'<circle cx="50" cy="50" r="50" fill="{BLUE}"/>' + paths(place(layers, 100, 22), on_blue, 2)),
    }
    for name, body in files.items():
        open("out/" + name, "w").write(body)
    return {"W": W, "files": {k: len(v) for k, v in files.items()}}

if __name__ == "__main__":
    print(json.dumps(export(sys.argv[1] if len(sys.argv) > 1 else "waw")))
