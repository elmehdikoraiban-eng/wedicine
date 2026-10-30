"""Construction géométrique du logo Wedicine (redessiné d'après le logo fourni par El Mehdi, 2026-10-30).

Cotes en pixels de l'image de référence (2172x724). make(params) renvoie les formes (pip install skia-pathops fonttools).
Export : cd scripts/logo && mkdir -p out && python3 export.py, puis copier out/*.svg dans public/brand/.
"""
import json, math, sys
from pathops import Path, PathOp, LineCap, LineJoin, op
from fontTools.pens.svgPathPen import SVGPathPen

K = 0.5522847498

def ellipse(cx, cy, rx, ry):
    p = Path()
    p.moveTo(cx + rx, cy)
    p.cubicTo(cx + rx, cy + K * ry, cx + K * rx, cy + ry, cx, cy + ry)
    p.cubicTo(cx - K * rx, cy + ry, cx - rx, cy + K * ry, cx - rx, cy)
    p.cubicTo(cx - rx, cy - K * ry, cx - K * rx, cy - ry, cx, cy - ry)
    p.cubicTo(cx + K * rx, cy - ry, cx + rx, cy - K * ry, cx + rx, cy)
    p.close()
    return p

def poly(pts):
    p = Path(); p.moveTo(*pts[0])
    for q in pts[1:]: p.lineTo(*q)
    p.close(); return p

def stroke(pts, w, cap=LineCap.ROUND_CAP, join=LineJoin.ROUND_JOIN):
    p = Path(); p.moveTo(*pts[0])
    for q in pts[1:]: p.lineTo(*q)
    p.stroke(w, cap, join, 4)
    p.convertConicsToQuads()
    return p

def U(*ps):
    out = ps[0]
    for q in ps[1:]: out = op(out, q, PathOp.UNION)
    return out
def D(a, b): return op(a, b, PathOp.DIFFERENCE)
def I(a, b): return op(a, b, PathOp.INTERSECTION)

def moved(p, dx, dy, s=1.0):
    """Translation puis mise à l'échelle : (x + dx) * s."""
    return p.transform(s, 0, 0, s, dx * s, dy * s)

def svgd(p, nd=1):
    def ntos(v):
        t = ("%." + str(nd) + "f") % v
        t = t.rstrip("0").rstrip(".")
        return "0" if t in ("-0", "") else t
    pen = SVGPathPen(None, ntos=ntos)
    p.draw(pen)
    return pen.getCommands()

DEFAULTS = dict(B=486.0, X=283.0, OV=4.0, SV=53.0, SH=47.0, BAR=42.0, ASC=198.0, SW=70.0,
                E_ANG=42.0, C_ANG=40.0, C_SH=49.0, D_WALL=51.0, DOT_CY=230.0, DOT_R=31.0,
                HEART=28.0, WSPAN=328.0, WX0=302.0, WT=313.0, WB=452.0, GAP=7.0,
                E1X=748.0, DBX=972.5, DSX=1064.0, I1X=1139.5, CX=1285.5, I2X=1414.5, NLX=1489.5, NRX=1675.0, E2X=1796.5)

def make(params=None):
    P = dict(DEFAULTS); P.update(params or {})
    B, X, OV, SV, SH, BAR, ASC, SW = (P[k] for k in ("B", "X", "OV", "SV", "SH", "BAR", "ASC", "SW"))
    CY = (B + X) / 2
    R = (B - X) / 2 + OV
    H = SV / 2

    def stem(x, top, bot):
        return stroke([(x, top + H), (x, bot - H)], SV)

    def cap_at(cx, cy, R_out, a_in, b_in, ang):
        """Bout rond d'un anneau coupé radialement à l'angle ang (radians, y vers le bas)."""
        ux, uy = math.cos(ang), math.sin(ang)
        ox, oy = cx + R_out * ux, cy + R_out * uy
        ri = a_in * b_in / math.hypot(b_in * ux, a_in * uy)
        ix, iy = cx + ri * ux, cy + ri * uy
        r = math.hypot(ox - ix, oy - iy) / 2
        return ellipse((ox + ix) / 2, (oy + iy) / 2, r, r)

    def letter_e(ex):
        rx, ry = R + 3, R
        a, b = rx - SV, ry - SH
        ring = D(ellipse(ex, CY, rx, ry), ellipse(ex, CY, a, b))
        bar = I(poly([(ex - rx, CY - BAR / 2), (ex + rx + 5, CY - BAR / 2), (ex + rx + 5, CY + BAR / 2), (ex - rx, CY + BAR / 2)]), ellipse(ex, CY, rx, ry))
        t = math.radians(P["E_ANG"])
        yb = CY + BAR / 2
        wedge = poly([(ex + (BAR / 2) / math.tan(t), yb), (ex + 400, yb), (ex + 400, CY + 400 * math.tan(t))])
        rr = rx * ry / math.hypot(ry * math.cos(t), rx * math.sin(t))
        return U(D(U(ring, bar), wedge), cap_at(ex, CY, rr, a, b, t))

    def letter_c(cx):
        a, b = R - SV, R - P["C_SH"]
        ring = D(ellipse(cx, CY, R, R), ellipse(cx, CY, a, b))
        t = math.radians(P["C_ANG"])
        wedge = poly([(cx, CY), (cx + 400, CY - 400 * math.tan(t)), (cx + 400, CY + 400 * math.tan(t))])
        return U(D(ring, wedge), cap_at(cx, CY, R, a, b, -t), cap_at(cx, CY, R, a, b, t))

    def letter_d(bx, sx):
        left, right = bx - R + P["D_WALL"], sx - H
        inner = ellipse((left + right) / 2, CY, (right - left) / 2, R - SH)
        return U(D(ellipse(bx, CY, R, R), inner), stem(sx, ASC, B))

    def letter_i(sx):
        return U(stem(sx, X, B), ellipse(sx, P["DOT_CY"], P["DOT_R"], P["DOT_R"]))

    def letter_n(lx, rx_edge):
        ax, leg_x = rx_edge - R, rx_edge - H
        top_half = poly([(ax - R - 60, CY), (ax - R - 60, CY - R - 60), (rx_edge + 60, CY - R - 60), (rx_edge + 60, CY)])
        left_in, right_in = lx + H, rx_edge - SV
        inner = ellipse((left_in + right_in) / 2, CY, (right_in - left_in) / 2, R - SH)
        arch = I(D(ellipse(ax, CY, R, R), inner), top_half)
        leg = U(stroke([(leg_x, CY), (leg_x, B - H)], SV), poly([(leg_x - H, CY - 1), (leg_x + H, CY - 1), (leg_x + H, CY + 2), (leg_x - H, CY + 2)]))
        return U(stem(lx, X, B), arch, leg)

    # « w » : deux rubans en V qui se croisent ; les deux bouts du milieu dessinent un cœur.
    hd = P["HEART"]
    Dx = (P["WSPAN"] + 2 * hd) / 4           # même pente pour les quatre bras
    x0 = P["WX0"]; x1 = x0 + Dx; x2r = x1 + Dx; x2l = x2r - 2 * hd; x3 = x2l + Dx; x4 = x3 + Dx
    WT, WB = P["WT"], P["WB"]
    sv1 = stroke([(x0, WT), (x1, WB), (x2r, WT)], SW)
    sv2 = stroke([(x2l, WT), (x3, WB), (x4, WT)], SW)
    e1 = letter_e(P["E1X"])
    v1, v2 = sv1, sv2
    if P["GAP"] > 0:  # le ruban passe derrière le e : liseré blanc autour du e
        halo = Path(); halo.addPath(e1); halo.stroke(2 * P["GAP"], LineCap.ROUND_CAP, LineJoin.ROUND_JOIN, 4); halo.convertConicsToQuads()
        halo = U(halo, e1)
        v1, v2 = D(sv1, halo), D(sv2, halo)
    w = U(v1, v2)
    navy = U(letter_d(P["DBX"], P["DSX"]), letter_i(P["I1X"]), letter_c(P["CX"]), letter_i(P["I2X"]), letter_n(P["NLX"], P["NRX"]), letter_e(P["E2X"]))
    return dict(w=w, cross=I(v1, v2), e1=e1, blue=U(w, e1), navy=navy,
                sym=U(sv1, sv2), sym_cross=I(sv1, sv2), metrics=dict(B=B, X=X, CY=CY, R=R, ASC=ASC))

if __name__ == "__main__":
    params = json.loads(sys.argv[1]) if len(sys.argv) > 1 else {}
    s = make(params)
    allp = U(s["blue"], s["navy"])
    print(json.dumps({"blue": svgd(s["blue"]), "cross": svgd(s["cross"]), "navy": svgd(s["navy"]),
                      "w": svgd(s["w"]), "bounds": allp.bounds}))
