import math
import os

HERE = os.path.dirname(os.path.abspath(__file__))

S = 52.0          # px per metre
OX, OY = 150.0, 96.0

def X(m): return OX + m * S
def Y(m): return OY + m * S
def f(v): return f"{v:.1f}"

out = []
def add(s): out.append(s)

# ---------- walls ----------
def wall(x1, y1, x2, y2, t, openings=(), cls="wall"):
    """axis-aligned wall on centreline, openings as (a,b) along the axis"""
    horiz = y1 == y2
    a0, a1 = (x1, x2) if horiz else (y1, y2)
    cuts = sorted(openings)
    segs, cur = [], a0
    for a, b in cuts:
        if a > cur: segs.append((cur, a))
        cur = max(cur, b)
    if cur < a1: segs.append((cur, a1))
    for a, b in segs:
        if horiz:
            ext = t / 2 if a == a0 else 0
            ext2 = t / 2 if b == a1 else 0
            add(f'<rect class="{cls}" x="{f(X(a-ext))}" y="{f(Y(y1-t/2))}" width="{f((b-a+ext+ext2)*S)}" height="{f(t*S)}"/>')
        else:
            ext = t / 2 if a == a0 else 0
            ext2 = t / 2 if b == a1 else 0
            add(f'<rect class="{cls}" x="{f(X(x1-t/2))}" y="{f(Y(a-ext))}" width="{f(t*S)}" height="{f((b-a+ext+ext2)*S)}"/>')

def window(axis, c, a, b, t):
    if axis == "v":
        add(f'<rect class="thin" x="{f(X(c-t/2))}" y="{f(Y(a))}" width="{f(t*S)}" height="{f((b-a)*S)}"/>')
        add(f'<line class="thin" x1="{f(X(c))}" y1="{f(Y(a))}" x2="{f(X(c))}" y2="{f(Y(b))}"/>')
    else:
        add(f'<rect class="thin" x="{f(X(a))}" y="{f(Y(c-t/2))}" width="{f((b-a)*S)}" height="{f(t*S)}"/>')
        add(f'<line class="thin" x1="{f(X(a))}" y1="{f(Y(c))}" x2="{f(X(b))}" y2="{f(Y(c))}"/>')

def door(axis, c, a, b, hinge, side):
    """hinge: 'a' or 'b'; side: +1 swings to +x/+y, -1 to -x/-y"""
    w = b - a
    h = a if hinge == "a" else b
    o = b if hinge == "a" else a
    if axis == "v":
        H = (c, h); P1 = (c + side * w, h); P2 = (c, o)
    else:
        H = (h, c); P1 = (h, c + side * w); P2 = (o, c)
    ang1 = math.atan2(P1[1] - H[1], P1[0] - H[0])
    ang2 = math.atan2(P2[1] - H[1], P2[0] - H[0])
    d = (ang2 - ang1 + math.pi) % (2 * math.pi) - math.pi
    sweep = 1 if d > 0 else 0
    add(f'<line class="leaf" x1="{f(X(H[0]))}" y1="{f(Y(H[1]))}" x2="{f(X(P1[0]))}" y2="{f(Y(P1[1]))}"/>')
    add(f'<path class="swing" d="M{f(X(P1[0]))} {f(Y(P1[1]))} A{f(w*S)} {f(w*S)} 0 0 {sweep} {f(X(P2[0]))} {f(Y(P2[1]))}"/>')

def slider(axis, c, a, b, t):
    m = (a + b) / 2
    off = t * 0.22
    if axis == "h":
        add(f'<rect class="panel" x="{f(X(a))}" y="{f(Y(c-off-0.03))}" width="{f((m-a+0.1)*S)}" height="{f(0.06*S)}"/>')
        add(f'<rect class="panel" x="{f(X(m-0.1))}" y="{f(Y(c+off-0.03))}" width="{f((b-m+0.1)*S)}" height="{f(0.06*S)}"/>')
    else:
        add(f'<rect class="panel" x="{f(X(c-off-0.03))}" y="{f(Y(a))}" width="{f(0.06*S)}" height="{f((m-a+0.1)*S)}"/>')
        add(f'<rect class="panel" x="{f(X(c+off-0.03))}" y="{f(Y(m-0.1))}" width="{f(0.06*S)}" height="{f((b-m+0.1)*S)}"/>')

def rect(x, y, w, h, cls="furn", rx=0):
    add(f'<rect class="{cls}" x="{f(X(x))}" y="{f(Y(y))}" width="{f(w*S)}" height="{f(h*S)}" rx="{f(rx*S)}"/>')

def line(x1, y1, x2, y2, cls="furn"):
    add(f'<line class="{cls}" x1="{f(X(x1))}" y1="{f(Y(y1))}" x2="{f(X(x2))}" y2="{f(Y(y2))}"/>')

def circle(x, y, r, cls="furn"):
    add(f'<circle class="{cls}" cx="{f(X(x))}" cy="{f(Y(y))}" r="{f(r*S)}"/>')

def text(x, y, s, cls="lbl", anchor="middle", rot=None):
    tr = f' transform="rotate({rot} {f(X(x))} {f(Y(y))})"' if rot is not None else ""
    add(f'<text class="{cls}" x="{f(X(x))}" y="{f(Y(y))}" text-anchor="{anchor}"{tr}>{s}</text>')

def room(x, y, name, area):
    text(x, y, name, "room")
    text(x, y + 0.36, area, "area")

def cam(x, y, dx, dy, label):
    n = math.hypot(dx, dy); dx, dy = dx / n, dy / n
    r = 0.2
    x1, y1 = x + dx * r, y + dy * r
    x2, y2 = x + dx * 0.62, y + dy * 0.62
    add(f'<line class="camray" x1="{f(X(x1))}" y1="{f(Y(y1))}" x2="{f(X(x2))}" y2="{f(Y(y2))}" marker-end="url(#camhead)"/>')
    hw = max(r * S, 3.0 + 2.6 * len(label))
    add(f'<rect class="cam" x="{f(X(x)-hw)}" y="{f(Y(y)-r*S)}" width="{f(2*hw)}" height="{f(2*r*S)}" rx="{f(r*S)}"/>')
    add(f'<text class="camtxt" x="{f(X(x))}" y="{f(Y(y)+3.6)}" text-anchor="middle">{label}</text>')

# =====================================================================
EXT, INT = 0.30, 0.12
BED = 4.0        # bedroom depth / south edge of hall
KIT = 6.3        # south edge of kitchen
WB = 5.0         # south end of west balcony
WL = 6.4         # east wall of living room (south facade width)
WF = 8.4         # east wall of hall
BW = 1.6         # depth of bath / WC strip
D = 10.8         # south wall

# --- balconies ---
rect(-1.62, 0.12, 1.47, WB - 0.12, "deck")
line(-1.62, 0.12, -1.62, WB, "rail")
line(-1.62, WB, -0.15, WB, "rail")
rect(-1.62, -0.15, 1.47, 0.27, "brick")
rect(0.15, D + 0.15, WL - 0.15, 1.85, "deck")
line(0.15, D + 2.0, WL + 0.15, D + 2.0, "rail")
line(WL + 0.15, D + 0.15, WL + 0.15, D + 2.0, "rail")
rect(-0.15, D, 0.3, 2.0, "brick")
add(f'<rect class="awning" x="{f(X(0.25))}" y="{f(Y(D+0.2))}" width="{f(4.6*S)}" height="{f(1.45*S)}"/>')

# --- exterior walls (stepped outline) ---
wall(0, 0, 7.0, 0, EXT)
wall(7.0, 0, 7.0, BW, EXT)
wall(7.0, BW, WF, BW, EXT, [(7.1, 8.1)])
wall(WF, BW, WF, BED, EXT)
wall(WL, BED, WF, BED, EXT)
wall(WL, BED, WL, D, EXT)
wall(0, D, WL, D, EXT, [(0.3, 3.1), (3.1, 5.3)])
wall(0, 0, 0, D, EXT, [(0.9, 1.5), (1.6, 3.1), (5.3, 6.1), (8.3, 10.4)])

# --- interior walls ---
wall(0, BED, 3.6, BED, INT)
wall(3.6, 0, 3.6, BED, INT, [(1.75, 2.55)])
wall(3.6, BW, 7.0, BW, INT, [(4.75, 5.5), (6.05, 6.75)])
wall(5.6, 0, 5.6, BW, INT)
wall(3.6, BED, WL, BED, INT, [(3.7, 4.95), (5.1, 6.3)])

# --- windows ---
for a, b in [(0.9, 1.5), (5.3, 6.1), (8.3, 10.4)]:
    window("v", 0, a, b, EXT)
window("h", D, 3.1, 5.3, EXT)

# --- doors ---
door("h", BW, 7.1, 8.1, "b", +1)       # apartment door (north wall of hall)
door("v", 3.6, 1.75, 2.55, "a", -1)    # bedroom
door("h", BW, 4.75, 5.5, "b", +1)      # bath
door("h", BW, 6.05, 6.75, "a", +1)     # WC
slider("v", 0, 1.6, 3.1, EXT)          # bedroom -> west balcony
slider("h", D, 0.3, 3.1, EXT)          # dining -> south balcony
slider("h", BED, 3.7, 4.95, INT)       # room divider hall / living, left leaf
slider("h", BED, 5.1, 6.3, INT)        # room divider hall / living, right leaf

# --- bedroom ---
for yy in (0.12, BED - 0.98):
    rect(0.15, yy, 2.0, 0.86, "furn")
    rect(0.2, yy + 0.08, 0.35, 0.7, "furn2", 0.06)
rect(3.0, BED - 1.05, 0.54, 0.96, "furn")     # wardrobe
line(3.0, BED - 0.57, 3.54, BED - 0.57, "furn2")
rect(3.28, 0.1, 0.26, 0.82, "furn2")          # shelf
text(1.15, 0.63, "90 × 200", "tiny")
text(1.15, BED - 0.47, "90 × 200", "tiny")

# --- kitchen ---
rect(0.18, BED + 0.08, 2.85, 0.6, "furn")     # north counter along the bedroom wall
for cx, cy in [(1.5, 0.25), (1.8, 0.25), (1.5, 0.52), (1.8, 0.52)]:
    circle(cx, BED + cy, 0.09, "furn2")
text(2.45, BED + 0.46, "KS", "tiny")
line(2.15, BED + 0.08, 2.15, BED + 0.68, "furn2")
# counter with sink, running along the south side and sweeping round the south-east corner
add(f'<path class="furn" d="M{f(X(0.8))} {f(Y(6.3))} L{f(X(2.2))} {f(Y(6.3))} '
    f'Q{f(X(3.55))} {f(Y(6.3))} {f(X(3.55))} {f(Y(4.95))} '
    f'L{f(X(3.0))} {f(Y(4.95))} Q{f(X(3.0))} {f(Y(5.72))} {f(X(2.2))} {f(Y(5.72))} '
    f'L{f(X(0.8))} {f(Y(5.72))} Z"/>')
add(f'<path class="furn2" d="M{f(X(0.65))} {f(Y(6.55))} L{f(X(2.2))} {f(Y(6.55))} '
    f'Q{f(X(3.8))} {f(Y(6.55))} {f(X(3.8))} {f(Y(4.95))}"/>')   # bar top overhang
rect(1.3, 5.8, 0.55, 0.4, "furn2", 0.05)      # sink
for cx, cy in [(1.05, 6.88), (1.8, 6.88), (2.7, 6.8), (3.6, 6.2), (4.05, 5.35)]:
    circle(cx, cy, 0.16, "furn")              # bar stools

# --- living / dining ---
add(f'<ellipse class="furn" cx="{f(X(1.35))}" cy="{f(Y(9.4))}" rx="{f(0.82*S)}" ry="{f(0.46*S)}"/>')
for cx, cy in [(0.95, 8.72), (1.75, 8.72), (0.95, 10.08), (1.75, 10.08), (2.4, 9.4)]:
    rect(cx - 0.24, cy - 0.22, 0.48, 0.44, "furn", 0.12)
rect(1.2, 7.35, 1.6, 0.75, "furn", 0.25)      # leather sofa
add(f'<rect class="grille" x="{f(X(0.3))}" y="{f(Y(D-0.37))}" width="{f(3.6*S)}" height="{f(0.2*S)}"/>')
# seating pit in the south-east corner
rect(4.0, 8.3, 2.35, 2.25, "pit")
rect(5.65, 8.3, 0.7, 2.25, "furn")
rect(4.35, 8.3, 1.3, 0.7, "furn")
rect(4.35, 9.85, 1.3, 0.7, "furn")
line(4.0, 9.0, 4.0, 9.85, "furn")
line(4.18, 9.0, 4.18, 9.85, "furn2")
line(4.35, 9.0, 4.35, 9.85, "furn2")
text(5.0, 9.52, "Sitzgrube", "note2")
# pull-out beds, drawn pulled out towards the kitchen
rect(4.65, 6.3, 0.8, 2.0, "bedout")
rect(5.55, 6.3, 0.8, 2.0, "bedout")
text(5.5, 7.2, "Ausziehbetten", "tiny")
text(5.5, 7.45, "2 × 80 × 200", "tiny")
text(5.5, 7.7, "ausgezogen", "tiny")

# --- hall ---
rect(7.9, 1.85, 0.42, 1.3, "furn")            # built-in cupboard
line(7.9, 2.5, 8.32, 2.5, "furn2")
rect(6.75, 3.66, 0.85, 0.26, "furn2")         # spiral shelf
circle(8.0, 3.55, 0.13, "furn2")              # coat stand

# --- bath (shower) ---
add(f'<path class="furn" d="M{f(X(3.72))} {f(Y(0.15))} L{f(X(4.62))} {f(Y(0.15))} '
    f'A{f(0.9*S)} {f(0.9*S)} 0 0 1 {f(X(3.72))} {f(Y(1.05))} Z"/>')
circle(3.95, 0.38, 0.04, "furn2")
add(f'<path class="furn" d="M{f(X(4.95))} {f(Y(0.15))} A{f(0.25*S)} {f(0.32*S)} 0 0 0 {f(X(5.45))} {f(Y(0.15))} Z"/>')

# --- WC ---
rect(6.1, 0.12, 0.42, 0.2, "furn")
add(f'<ellipse class="furn" cx="{f(X(6.31))}" cy="{f(Y(0.6))}" rx="{f(0.19*S)}" ry="{f(0.27*S)}"/>')

# --- room labels ---
room(1.55, 2.1, "Schlafzimmer", "ca. 14 m²")
room(1.0, 5.28, "Küche", "ca. 8 m²")
room(3.0, 8.45, "Wohnen · Essen", "ca. 35 m²")
room(5.6, 3.25, "Flur", "ca. 11,5 m²")
text(5.05, 1.1, "Bad", "room")
text(6.62, 1.25, "WC", "room")
text(-0.9, 2.5, "Westbalkon", "room", rot=-90)
text(-0.52, 2.5, "ca. 7,5 m²", "area", rot=-90)
room(3.2, D + 0.92, "Südbalkon", "ca. 13 m²")
text(2.4, D + 1.62, "Markise elektr.", "tiny")

# --- remaining uncertainty ---
add(f'<rect class="unsure" x="{f(X(-0.3))}" y="{f(Y(5.25))}" width="{f(0.6*S)}" height="{f(0.9*S)}" rx="5"/>')
text(-0.42, 5.6, "Fenster:", "note", "end")
text(-0.42, 5.95, "Lage geschätzt", "note", "end")

# --- route from the front door: WC first, then bath ---
add(f'<path class="route" d="M{f(X(7.6))} {f(Y(1.8))} L{f(X(7.6))} {f(Y(2.2))} '
    f'Q{f(X(7.6))} {f(Y(2.55))} {f(X(7.2))} {f(Y(2.55))} L{f(X(4.1))} {f(Y(2.55))}" marker-end="url(#camhead)"/>')

# --- photo standpoints ---
cam(3.0, 9.3, -1, 0.7, "3·5")
cam(1.9, 5.25, 0, 1, "2")
cam(1.4, 10.35, 1, -1, "4")
cam(4.25, 4.75, -1, 0, "1")
cam(2.6, 2.9, -1, 0, "8")
cam(0.38, 2.35, 1, 0, "9")
cam(7.6, 2.95, -1, 0.5, "13")
cam(4.3, 3.45, 1, -0.8, "14")
cam(4.35, 1.3, -0.3, -1, "10·12")
cam(6.4, 2.95, 0, -1, "11")
cam(4.3, D + 0.65, -0.35, 1, "6·7")

# --- dimensions ---
def dim_h(x1, x2, y, label):
    line(x1, y, x2, y, "dim")
    for xx in (x1, x2):
        line(xx, y - 0.14, xx, y + 0.14, "dim")
        line(xx - 0.08, y + 0.08, xx + 0.08, y - 0.08, "dimtick")
    text((x1 + x2) / 2, y - 0.14, label, "dimtxt")

def dim_v(x, y1, y2, label):
    line(x, y1, x, y2, "dim")
    for yy in (y1, y2):
        line(x - 0.14, yy, x + 0.14, yy, "dim")
        line(x - 0.08, yy + 0.08, x + 0.08, yy - 0.08, "dimtick")
    text(x + 0.2, (y1 + y2) / 2, label, "dimtxt", rot=90)

dim_h(0, WF, -0.72, "ca. 8,4 m")
dim_h(0, 3.6, -0.36, "ca. 3,6 m")
dim_h(0, WL, D + 2.45, "ca. 6,4 m")
dim_v(WF + 0.6, 0, BED, "ca. 4 m")
dim_v(WL + 0.6, BED, D, "ca. 6,8 m")
dim_v(WL + 0.6, D, D + 2.0, "ca. 2 m")

for (cx, cy) in [(0, 0), (7.0, 0), (WF, BW), (WF, BED), (WL, BED), (WL, D), (0, D)]:
    line(cx - 0.45, cy, cx + 0.45, cy, "constr")
    line(cx, cy - 0.45, cx, cy + 0.45, "constr")

# --- surroundings ---
text(-2.55, 7.6, "NORDSEE · STRAND  →  Westen", "surround", rot=-90)
text(3.2, D + 3.1, "Dünen  ·  Süden", "surround")
text(7.25, 0.85, "Zugang vom", "tiny", "start")
text(7.25, 1.1, "Treppenhaus", "tiny", "start")

drawing = "\n".join(out)
out.clear()

# --- north arrow & scale bar ---
nx, ny = X(9.6), Y(-0.5)
add(f'<g class="north"><circle cx="{f(nx)}" cy="{f(ny)}" r="20" class="thin"/>'
    f'<path d="M{f(nx)} {f(ny-24)} L{f(nx+7)} {f(ny+8)} L{f(nx)} {f(ny+3)} Z" class="solid"/>'
    f'<path d="M{f(nx)} {f(ny-24)} L{f(nx-7)} {f(ny+8)} L{f(nx)} {f(ny+3)} Z" class="hollow"/>'
    f'<text x="{f(nx)}" y="{f(ny+38)}" text-anchor="middle" class="room">N</text></g>')
sx, sy = X(6.9), Y(D + 3.05)
for i in range(3):
    cls = "solid" if i % 2 == 0 else "hollow"
    add(f'<rect class="{cls}" x="{f(sx+i*S)}" y="{f(sy)}" width="{f(S)}" height="6"/>')
for i in range(4):
    add(f'<text class="tiny" x="{f(sx+i*S)}" y="{f(sy-5)}" text-anchor="middle">{i}</text>')
add(f'<text class="tiny" x="{f(sx+3*S+8)}" y="{f(sy+6)}" text-anchor="start">m</text>')
extras = "\n".join(out)

VBW, VBH = 680, int(Y(D + 3.5))
svg = f'''<svg viewBox="0 0 {VBW} {VBH}" role="img" aria-label="Grundriss-Skizze der Ferienwohnung: Schlafzimmer mit Westbalkon im Nordwesten, östlich davon Bad, WC und der Flur mit Wohnungstür, darunter Küche mit geschwungenem Tresen und der Wohn- und Essraum mit Sitzgrube und Südbalkon.">
<defs>
  <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
    <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" result="n"/>
    <feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <pattern id="poche" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
    <rect width="5" height="5" class="pocheBg"/>
    <line x1="0" y1="0" x2="0" y2="5" class="pocheLn"/>
  </pattern>
  <pattern id="deck" width="6" height="6" patternUnits="userSpaceOnUse">
    <line x1="0" y1="0" x2="0" y2="6" class="deckLn"/>
  </pattern>
  <pattern id="dots" width="7" height="7" patternUnits="userSpaceOnUse">
    <circle cx="3.5" cy="3.5" r="0.8" class="dotFill"/>
  </pattern>
  <pattern id="grill" width="3" height="3" patternUnits="userSpaceOnUse">
    <line x1="0" y1="0" x2="0" y2="3" class="deckLn"/>
  </pattern>
  <marker id="camhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
    <path d="M0 0 L10 5 L0 10 Z" class="camHeadFill"/>
  </marker>
</defs>
<g filter="url(#rough)">
{drawing}
</g>
{extras}
</svg>'''

tpl = open(os.path.join(HERE, "template.html"), encoding="utf-8").read()
html = tpl.replace("<!--SVG-->", svg)
open(os.path.join(HERE, "grundriss-egmond.html"), "w", encoding="utf-8").write(html)
print("ok", VBW, VBH)
