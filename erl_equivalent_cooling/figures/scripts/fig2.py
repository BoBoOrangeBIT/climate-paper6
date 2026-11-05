"""Fig. 2: global maps of AC exposure reduction, fan window coverage and equivalence ratios (ERA5 2020, 0.5 deg)."""
import sys, os
sys.path.insert(0, os.path.expanduser("~/.claude/paper-kit/scripts"))
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap
import paperstyle as ps

ps.apply(journal="iop")
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
d = np.load(os.path.join(ROOT, "results", "derived", "global_maps_05deg.npz"))
lat, lon = d["lat"], d["lon"]
land = np.isfinite(d["Default_ac_dh"])  # land mask from the data itself

panels = [
    ("a", "Default_ac_dh", 1e-3, "AC exposure reduction (10$^3$ K h yr$^{-1}$)", "viridis", 0, None, "max"),
    ("b", "Default_fan_cov", 100.0, "AC hours inside fan window (%)", "viridis", 75, 100, "min"),
    ("c", "Default_fan_ratio", 1.0, "Fan equivalence ratio (fan 1.2 m s$^{-1}$ / AC)", "RdBu_r", 0, 2, "max"),
    ("d", "Default_evap_ratio", 1.0, "Evaporative equivalence ratio (ε 0.75 / AC)", "RdBu_r", 0, 2, "max"),
]
# cap panel a at the 99th percentile of land values
a99 = np.nanpercentile(d["Default_ac_dh"], 99) * 1e-3
a99 = float(np.ceil(a99 / 10) * 10)
panels[0] = panels[0][:6] + (a99,) + panels[0][7:]

W_MM, H_MM = 170, 110
fig, axes = plt.subplots(2, 2, figsize=(W_MM / 25.4, H_MM / 25.4))
extent = [lon.min() - 0.25, lon.max() + 0.25, lat.min() - 0.25, lat.max() + 0.25]
rows = []
for ax, (lab, key, scale, cblab, cmap, vmin, vmax, ext) in zip(axes.flat, panels):
    arr = d[key] * scale
    ax.imshow(np.where(land, 1.0, np.nan), extent=extent, origin="upper", cmap=ListedColormap(["#e6e6e6"]), aspect="auto", interpolation="nearest")
    im = ax.imshow(arr, extent=extent, origin="upper", cmap=cmap, vmin=vmin, vmax=vmax, aspect="auto", interpolation="nearest")
    ax.set_xlim(-180, 180); ax.set_ylim(-60, 85)
    ax.set_xticks([-120, -60, 0, 60, 120]); ax.set_yticks([-30, 0, 30, 60])
    ax.set_xticklabels(["120°W", "60°W", "0°", "60°E", "120°E"]); ax.set_yticklabels(["30°S", "0°", "30°N", "60°N"])
    ax.tick_params(length=1.5, pad=1)
    for s in ("top", "right"):
        ax.spines[s].set_visible(True)
    ax.text(-0.02, 1.03, lab, transform=ax.transAxes, fontweight="bold", fontsize=8, ha="right", va="bottom")
    cb = fig.colorbar(im, ax=ax, orientation="horizontal", fraction=0.06, pad=0.14, aspect=35, extend=ext)
    cb.set_label(cblab, labelpad=2)
    cb.ax.tick_params(length=1.5, pad=1)
    if lab in ("c", "d"):
        cb.set_ticks([0, 0.5, 1, 1.5, 2])
    ok = np.isfinite(arr)
    jj, ii = np.nonzero(ok)
    rows.append(np.column_stack([lat[jj], lon[ii], np.full(ok.sum(), key, dtype=object), np.round(arr[ok], 4)]))

fig.subplots_adjust(left=0.05, right=0.99, top=0.97, bottom=0.08, wspace=0.14, hspace=0.42)
out = os.path.join(ROOT, "figures", "output", "fig2")
fig.savefig(out + ".pdf"); fig.savefig(out + ".png", dpi=600)

import csv
with open(os.path.join(ROOT, "figures", "source-data", "fig2.csv"), "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["lat", "lon", "variable", "value"])
    w.writerow(["# units", "", "Default_ac_dh in 1e3 K h per year, Default_fan_cov in %, ratios dimensionless (AC Default = 1)", ""])
    for block in rows:
        w.writerows(block.tolist())
print("done, panel a vmax", a99)
