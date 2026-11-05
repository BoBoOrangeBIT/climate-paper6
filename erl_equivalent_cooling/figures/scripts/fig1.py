"""Fig. 1: equivalent temperature reduction surfaces (fan, evaporative, AC rules)."""
import sys, os
sys.path.insert(0, os.path.expanduser("~/.claude/paper-kit/scripts"))
import numpy as np
import pandas as pd
import matplotlib as mpl
import matplotlib.pyplot as plt
import paperstyle as ps

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.chdir(ROOT)
ps.apply(journal="iop")
COL = ps.load_project_colors("figures/style.yaml")

d = np.load("results/derived/lookup_tables.npz")
T, RH = d["T"], d["RH"]
mT = (T >= 24) & (T <= 46)
mR = (RH >= 10) & (RH <= 90)
Tg, RHg = T[mT], RH[mR]
sub = lambda k: d[k][np.ix_(mR, mT)]
fan12, fan08, fan20, fcore12 = sub("fan_1.2"), sub("fan_0.8"), sub("fan_2.0"), sub("fancore_1.2")
evap, rhs = sub("evap_0.75"), sub("evaprhs_0.75")
acdef = np.maximum(Tg - 23, 0)
acdls = np.maximum(Tg - 26, 0)
TT, RR = np.meshgrid(Tg, RHg)

fig, axs = plt.subplots(2, 2, figsize=(170 * ps.MM, 130 * ps.MM), constrained_layout=True)
(ax_a, ax_b), (ax_c, ax_d) = axs
rows = []

# (a) fan surface
lev_a = np.arange(-1, 5.01, 0.5)
cf = ax_a.contourf(Tg, RHg, fan12, levels=lev_a, cmap="viridis", extend="both")
ax_a.contour(Tg, RHg, fan12, levels=[0], colors="white", linewidths=0.8, linestyles="--")
cb = fig.colorbar(cf, ax=ax_a, pad=0.02, aspect=25)
cb.set_label("Fan equivalent $\\Delta T$ at 1.2 m s$^{-1}$ (K)")
cb.ax.tick_params(width=0.5, length=2)
for t, ls in zip([37, 38, 39], [":", "-", "--"]):
    ax_a.axvline(t, color="white", lw=0.8, ls=ls)
    ax_a.text(t, 91, f"{t}", ha="center", va="bottom", fontsize=5.5, color=COL["fan"])
ax_a.text(38, 95.5, "Morris window upper bound (°C)", ha="center", va="bottom", fontsize=5.5, color=COL["fan"])
ax_a.fill_between([35, 46], 10, 50, facecolor="none", edgecolor=COL["window"], hatch="////", lw=0)
ax_a.plot([35, 35, 46], [10, 50, 50], color=COL["window"], lw=0.8)
ax_a.text(40.5, 47, "Foster exclusion", ha="center", va="top", fontsize=5.5, color=COL["window"],
          bbox=dict(facecolor="white", edgecolor="none", pad=0.6, alpha=0.8))
ax_a.set_xlabel("Outdoor air temperature (°C)")
ax_a.set_ylabel("Relative humidity (%)")
ax_a.set_xlim(24, 46); ax_a.set_ylim(10, 90)

# (b) evaporative surface
lev_b = np.arange(0, 16.01, 1)
cf = ax_b.contourf(Tg, RHg, evap, levels=lev_b, cmap="viridis", extend="both")
cb = fig.colorbar(cf, ax=ax_b, pad=0.02, aspect=25)
cb.set_label("Evaporative equivalent $\\Delta T$ at $\\varepsilon$ = 0.75 (K)")
cb.ax.tick_params(width=0.5, length=2)
inwin = ((evap > 0) & (rhs <= 80)).astype(float)
ax_b.contour(Tg, RHg, inwin, levels=[0.5], colors=COL["window"], linewidths=1.0)
ax_b.contour(Tg, RHg, rhs, levels=[80], colors="white", linewidths=0.6, linestyles=":")
ax_b.text(26, 85, "window boundary\n($\\Delta T$ > 0, supply RH $\\leq$ 80 %)", fontsize=5.5, color=COL["window"],
          va="top", ha="left", bbox=dict(facecolor="white", edgecolor="none", pad=0.6, alpha=0.8))
ax_b.set_xlabel("Outdoor air temperature (°C)")
ax_b.set_ylabel("Relative humidity (%)")
ax_b.set_xlim(24, 46); ax_b.set_ylim(10, 90)

# (c) lines by technology, style by RH
rh_styles = {20: "-", 50: "--", 80: ":"}
ax_c.plot(Tg, acdef, color=COL["AC Default"], lw=1.0, label="AC Default (max(T $-$ 23, 0))")
ax_c.plot(Tg, acdls, color=COL["AC DLS"], lw=1.0, label="AC DLS (max(T $-$ 26, 0))")
for rh, ls in rh_styles.items():
    j = np.argmin(np.abs(RHg - rh))
    ax_c.plot(Tg, fan12[j], color=COL["fan"], ls=ls, lw=1.0)
    ax_c.plot(Tg, evap[j], color=COL["evaporative"], ls=ls, lw=1.0)
    for name, arr in [("AC Default", acdef), ("AC DLS", acdls), ("fan 1.2 m/s", fan12[j]), ("evaporative eps 0.75", evap[j])]:
        for t, v in zip(Tg, arr):
            rows.append(dict(panel="c", technology=name, RH_pct=rh, T_C=t, dT_K=round(float(v), 3)))
ax_c.axhline(0, color="0.6", lw=0.5)
h_tech = [mpl.lines.Line2D([], [], color=COL["AC Default"], lw=1), mpl.lines.Line2D([], [], color=COL["AC DLS"], lw=1),
          mpl.lines.Line2D([], [], color=COL["fan"], lw=1), mpl.lines.Line2D([], [], color=COL["evaporative"], lw=1)]
l1 = ax_c.legend(h_tech, ["AC Default", "AC DLS", "Fan 1.2 m s$^{-1}$", "Evaporative $\\varepsilon$ = 0.75"],
                 loc="upper left", title="Technology", handlelength=1.8)
ax_c.add_artist(l1)
h_rh = [mpl.lines.Line2D([], [], color="0.3", ls=ls, lw=1) for ls in rh_styles.values()]
ax_c.legend(h_rh, [f"RH {rh} %" for rh in rh_styles], loc="upper left", bbox_to_anchor=(0.36, 1.0), title="Humidity", handlelength=2.2)
ax_c.set_xlabel("Outdoor air temperature (°C)")
ax_c.set_ylabel("Equivalent temperature reduction $\\Delta T$ (K)")
ax_c.set_xlim(24, 46); ax_c.set_ylim(-2, 24)

# (d) fan speeds at RH 50 % and negative-dT sensitivity
j50 = np.argmin(np.abs(RHg - 50))
for arr, v, lw, alpha in [(fan08, 0.8, 0.8, 0.6), (fan12, 1.2, 1.2, 1.0), (fan20, 2.0, 0.8, 0.6)]:
    ax_d.plot(Tg, arr[j50], color=COL["fan"], lw=lw, alpha=alpha, label=f"Fan {v} m s$^{{-1}}$")
    for t, val in zip(Tg, arr[j50]):
        rows.append(dict(panel="d", technology=f"fan {v} m/s (SET)", RH_pct=50, T_C=t, dT_K=round(float(val), 3)))
ax_d.plot(Tg, fcore12[j50], color=COL["fan"], lw=1.0, ls="--", label="Fan 1.2 m s$^{-1}$, core temperature variant")
for t, val in zip(Tg, fcore12[j50]):
    rows.append(dict(panel="d", technology="fan 1.2 m/s (core temperature variant)", RH_pct=50, T_C=t, dT_K=round(float(val), 3)))
ax_d.fill_between(Tg, 0, -2, color="0.9", zorder=0)
ax_d.text(45.5, -1.2, "negative $\\Delta T$\n(fan heats the body)", ha="right", va="center", fontsize=5.5, color="0.35")
ax_d.axhline(0, color="0.6", lw=0.5)
for t, ls in zip([37, 38, 39], [":", "-", "--"]):
    ax_d.axvline(t, color="0.7", lw=0.6, ls=ls)
ax_d.legend(loc="lower left", handlelength=2.2)
ax_d.set_xlabel("Outdoor air temperature (°C)")
ax_d.set_ylabel("Fan equivalent $\\Delta T$ at RH 50 % (K)")
ax_d.set_xlim(24, 46); ax_d.set_ylim(-2, 5)

ps.panel_labels(axs, style="nature", x=-0.14, y=1.02)
for ax in axs.flat:
    ax.tick_params(width=0.5, length=2.5)
ps.save(fig, "fig1")

# source data
for name, arr in [("fan 1.2 m/s", fan12), ("evaporative eps 0.75", evap), ("evaporative supply RH (%)", rhs)]:
    pnl = "a" if name.startswith("fan") else "b"
    for i, rh in enumerate(RHg):
        for k, t in enumerate(Tg):
            rows.append(dict(panel=pnl, technology=name, RH_pct=rh, T_C=t, dT_K=round(float(arr[i, k]), 3)))
pd.DataFrame(rows).to_csv("figures/source-data/fig1.csv", index=False)
print("done")
