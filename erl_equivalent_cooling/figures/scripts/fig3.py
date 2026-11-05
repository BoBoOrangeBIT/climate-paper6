"""Fig. 3: cities and the fan plus air-conditioning combination (ERL, double column 170 mm)."""
import sys, os
sys.path.insert(0, os.path.expanduser("~/.claude/paper-kit/scripts"))
import paperstyle as ps
ps.apply(journal="iop")
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec
from matplotlib.lines import Line2D
from matplotlib.patches import Patch

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.chdir(ROOT)
COL = ps.load_project_colors("figures/style.yaml")
C_ACD, C_ACL, C_FAN, C_EVAP, C_FANAC = (COL["AC Default"], COL["AC DLS"], COL["fan"],
                                        COL["evaporative"], COL["fan plus AC"])

cities = pd.read_csv("results/derived/cities.csv")
sens = pd.read_csv("results/derived/sensitivity.csv")
sens = sens[sens["rule"] == "Default"].set_index("variant")

n = len(cities)
y = np.arange(n)[::-1]          # first city at top
names = cities["city"].tolist()

MM = 1 / 25.4
fig = plt.figure(figsize=(170 * MM, 100 * MM), constrained_layout=True)
gs = gridspec.GridSpec(1, 3, figure=fig, width_ratios=[1.25, 1.0, 1.05])
axa = fig.add_subplot(gs[0, 0])
axb = fig.add_subplot(gs[0, 1], sharey=axa)
axc = fig.add_subplot(gs[0, 2])

# ---------- (a) exposure degree hours removed ----------
k = 1e-3   # K h -> thousand K h
acd = cities["Default_ac_dh"].values
series = [
    ("AC Default", cities["Default_ac_dh"].values, C_ACD, None, None),
    ("AC DLS", cities["DLS_ac_dh"].values, C_ACL, None, None),
    ("fan 1.2 m/s", cities["Default_fan_dh"].values, C_FAN,
     cities["Default_fan_ratio_v0.8"].values * acd, cities["Default_fan_ratio_v2.0"].values * acd),
    ("evaporative ε 0.75", cities["Default_evap_dh"].values, C_EVAP,
     cities["Default_evap_ratio_eps0.6"].values * acd, cities["Default_evap_ratio_eps0.85"].values * acd),
]
h = 0.2
offs = [1.5 * h, 0.5 * h, -0.5 * h, -1.5 * h]
rows = []
for (lab, val, c, lo, hi), o in zip(series, offs):
    axa.barh(y + o, val * k, height=h, color=c, edgecolor="none", label=lab)
    if lo is not None:
        lo_ = np.minimum(np.minimum(lo, hi), val); hi_ = np.maximum(np.maximum(lo, hi), val)
        axa.errorbar(val * k, y + o, xerr=[(val - lo_) * k, (hi_ - val) * k], fmt="none",
                     ecolor="0.25", elinewidth=0.5, capsize=1.2, capthick=0.5)
    for i, city in enumerate(names):
        rows.append(dict(panel="a", city=city, series=lab, value_Kh=round(float(val[i]), 1),
                         whisker_low_Kh=None if lo is None else round(float(min(lo[i], hi[i], val[i])), 1),
                         whisker_high_Kh=None if lo is None else round(float(max(lo[i], hi[i], val[i])), 1)))
axa.set_yticks(y); axa.set_yticklabels(names)
axa.set_ylim(-0.6, n - 0.4)
axa.set_xlabel("Exposure removed (10$^3$ K h)")
axa.legend(loc="lower right", frameon=False, handlelength=1.0, borderaxespad=0.2)
axa.grid(axis="x", lw=0.3, color="0.85"); axa.set_axisbelow(True)

# ---------- (b) AC operating hours with and without the 3 K fan shift ----------
for rule, c, o, mk in [("Default", C_ACD, 0.18, "o"), ("DLS", C_ACL, -0.18, "s")]:
    a0 = cities[f"{rule}_ac_h"].values; a1 = cities[f"{rule}_acshift_h"].values
    axb.hlines(y + o, a1, a0, color=c, lw=1.0)
    axb.plot(a0, y + o, mk, color=c, ms=3.2, mec="none")
    axb.plot(a1, y + o, mk, mfc=C_FANAC, mec=C_FANAC, ms=3.2, ls="none")
    for i, city in enumerate(names):
        rows.append(dict(panel="b", city=city, series=f"AC {rule} hours", value_Kh=None,
                         ac_hours=int(a0[i]), ac_hours_with_3K_fan_shift=int(a1[i]),
                         hours_avoided_frac=round(float(cities[f"{rule}_ac_hours_avoided_frac"].values[i]), 4)))
axb.set_xlabel("AC operating hours (h yr$^{-1}$)")
axb.set_xlim(0, 9200)
axb.set_xticks([0, 2000, 4000, 6000, 8000])
axb.tick_params(axis="y", labelleft=False)
axb.grid(axis="x", lw=0.3, color="0.85"); axb.set_axisbelow(True)
hb = [Line2D([], [], marker="o", color=C_ACD, ls="none", ms=3.2, label="AC Default"),
      Line2D([], [], marker="s", color=C_ACL, ls="none", ms=3.2, label="AC DLS"),
      Line2D([], [], marker="o", color=C_FANAC, ls="none", ms=3.2, label="with 3 K fan shift")]
axb.legend(handles=hb, loc="lower right", frameon=False, handlelength=1.0, borderaxespad=0.2)

# ---------- (c) global sensitivity of coverage and equivalence ratio ----------
fan_vars = [("window 38 °C (primary)", "fan 1.2 m/s, window 38 C (primary)"),
            ("window 35 °C", "fan 1.2 m/s, window 35 C"),
            ("window 37 °C", "fan 1.2 m/s, window 37 C"),
            ("window 39 °C", "fan 1.2 m/s, window 39 C"),
            ("Foster rule", "fan 1.2 m/s, Foster rule"),
            ("negative ΔT outside window", "fan 1.2 m/s, negative dT outside 38 C window"),
            ("0.8 m/s", "fan 0.8 m/s, window 38 C"),
            ("2.0 m/s", "fan 2.0 m/s, window 38 C")]
ev_vars = [("RH$_s$ ≤ 80 % (primary)", "evaporative eps 0.75, RH_s <= 80 % (primary)"),
           ("RH$_s$ ≤ 70 %", "evaporative eps 0.75, RH_s <= 70 %"),
           ("no RH cap", "evaporative eps 0.75, no RH cap"),
           ("T$_{wb}$ ≤ 24 °C", "evaporative eps 0.75, T_wb <= 24 C rule"),
           ("ε 0.6", "evaporative eps 0.6, RH_s <= 80 %"),
           ("ε 0.85", "evaporative eps 0.85, RH_s <= 80 %"),
           ("airstream 0.5 m/s", "evaporative eps 0.75, airstream 0.5 m/s")]
labels, yc, cols, covs, rats = [], [], [], [], []
pos = 0
for group, vars_, c in [("fan 1.2 m/s", fan_vars, C_FAN), ("evaporative ε 0.75", ev_vars, C_EVAP)]:
    for lab, key in vars_:
        labels.append(lab); yc.append(pos); cols.append(c)
        covs.append(float(sens.loc[key, "coverage"])); rats.append(float(sens.loc[key, "equivalence_ratio"]))
        rows.append(dict(panel="c", city="global land", series=f"{group}: {lab}", value_Kh=None,
                         coverage=covs[-1], equivalence_ratio=rats[-1]))
        pos -= 1
    pos -= 0.8
yc = np.array(yc); covs = np.array(covs); rats = np.array(rats)
for yy, cv, rt, c in zip(yc, covs, rats, cols):
    axc.hlines(yy, min(cv, rt), max(cv, rt), color=c, lw=0.6, alpha=0.6)
    axc.plot(cv, yy, "o", mfc="white", mec=c, mew=0.9, ms=3.4)
    axc.plot(rt, yy, "o", mfc=c, mec=c, ms=3.4)
axc.set_yticks(yc); axc.set_yticklabels(labels)
for t, c in zip(axc.get_yticklabels(), cols):
    t.set_color(c)
axc.set_ylim(yc.min() - 0.8, yc.max() + 0.8)
axc.set_xlim(0, 1.05)
axc.set_xlabel("Fraction (global land, Default rule)")
axc.axvline(1.0, color="0.6", lw=0.4, ls=":")
axc.grid(axis="x", lw=0.3, color="0.85"); axc.set_axisbelow(True)
axc.text(0.02, yc[0] + 0.75, "Fan variants", color=C_FAN, fontsize=6, va="bottom")
axc.text(0.02, yc[len(fan_vars)] + 0.75, "Evaporative variants", color=C_EVAP, fontsize=6, va="bottom")
hc = [Line2D([], [], marker="o", mfc="white", mec="0.3", ls="none", ms=3.4, label="coverage"),
      Line2D([], [], marker="o", color="0.3", ls="none", ms=3.4, label="equivalence ratio")]
axc.legend(handles=hc, loc="lower left", frameon=False, handlelength=1.0, borderaxespad=0.2)

for ax in (axa, axb, axc):
    ax.spines[["top", "right"]].set_visible(False)
for ax, lab, x in [(axa, "(a)", -0.30), (axb, "(b)", -0.06), (axc, "(c)", -0.62)]:
    ax.text(x, 1.01, lab, transform=ax.transAxes, fontweight="bold", fontsize=8, va="bottom", ha="left")

ps.save(fig, "fig3")
pd.DataFrame(rows).to_csv("figures/source-data/fig3.csv", index=False)
print("done")
