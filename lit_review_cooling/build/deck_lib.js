// Shared helpers for the literature-review deck
const pptxgen = require("pptxgenjs");
const path = require("path");
const { applyTheme } = require(path.join(process.env.PPTX_SKILL, "scripts/apply_theme.js"));

const THEME = {
  name: "CoolingReview",
  headFontFace: "Microsoft YaHei",
  bodyFontFace: "Microsoft YaHei",
  colors: {
    dk1: "1B2A33",   // near-black text
    lt1: "FFFFFF",
    dk2: "0F4C5C",   // deep teal (primary)
    lt2: "E8F1F2",   // ice tint
    accent1: "0F4C5C", // teal
    accent2: "E36414", // heat orange
    accent3: "5B8E7D", // sage
    accent4: "F4A261", // light orange
    accent5: "9A3B2E", // brick
    accent6: "8DA9B5", // grey-blue
    hlink: "0F4C5C",
    folHlink: "5B8E7D",
  },
};
const W = 13.333, H = 7.5;

function newPres() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE";
  pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
  pres.author = "文献综述助手";
  pres.title = "降温措施（空调/风扇/蒸发冷却）成本收益替代与组合：文献梳理";
  const C = pres.SchemeColor;

  pres.defineSlideMaster({
    title: "TITLE_DARK", background: { color: THEME.colors.dk2 },
    objects: [
      { placeholder: { options: { name: "title", type: "title", x: 0.8, y: 2.2, w: 11.7, h: 1.6, fontSize: 36, bold: true, color: C.background1, align: "left", valign: "bottom", margin: 0 }, text: "" } },
      { placeholder: { options: { name: "body", type: "body", x: 0.8, y: 4.0, w: 11.7, h: 1.8, fontSize: 18, color: C.background2, align: "left", valign: "top", margin: 0 }, text: "" } },
    ],
  });
  pres.defineSlideMaster({
    title: "SECTION_DARK", background: { color: THEME.colors.dk2 },
    objects: [
      { placeholder: { options: { name: "title", type: "title", x: 0.8, y: 2.6, w: 11.7, h: 1.3, fontSize: 34, bold: true, color: C.background1, align: "left", valign: "bottom", margin: 0 }, text: "" } },
      { placeholder: { options: { name: "body", type: "body", x: 0.8, y: 4.05, w: 11.7, h: 1.6, fontSize: 16, color: C.background2, align: "left", valign: "top", margin: 0 }, text: "" } },
    ],
  });
  pres.defineSlideMaster({
    title: "CONTENT", background: { color: THEME.colors.lt1 },
    objects: [
      { placeholder: { options: { name: "title", type: "title", x: 0.6, y: 0.35, w: 12.1, h: 0.8, fontSize: 24, bold: true, color: C.text2, align: "left", valign: "middle", margin: 0 }, text: "" } },
      { text: { text: "降温措施成本收益替代与组合 · 文献梳理", options: { x: 0.6, y: 7.05, w: 8, h: 0.3, fontSize: 9, color: THEME.colors.accent6, margin: 0 } } },
    ],
    slideNumber: { x: 12.3, y: 7.05, w: 0.6, h: 0.3, fontSize: 9, color: THEME.colors.accent6 },
  });
  return { pres, C };
}

// Bottom summary box ("小结") — tinted rounded rectangle, no edge stripe
function addSummary(pres, slide, text, opts = {}) {
  const C = pres.SchemeColor;
  const y = opts.y ?? 6.2, h = opts.h ?? 0.72;
  slide.addShape(pres.ShapeType.roundRect, { x: 0.6, y, w: 12.1, h, fill: { color: THEME.colors.lt2 }, line: { color: THEME.colors.lt2 }, rectRadius: 0.08, objectName: "summary box" });
  slide.addText("小结", { x: 0.75, y, w: 0.7, h, fontSize: 13, bold: true, color: C.accent2, valign: "middle", margin: 0, isTextBox: true, objectName: "summary label" });
  slide.addText(text, { x: 1.5, y, w: 11.05, h, fontSize: opts.fontSize ?? 12.5, color: C.text1, valign: "middle", margin: 0, isTextBox: true, objectName: "summary text" });
}

// Compact literature table. rows: array of arrays of strings (or {text, options})
function addLitTable(pres, slide, header, rows, opts = {}) {
  const C = pres.SchemeColor;
  const fs = opts.fontSize ?? 9.5;
  const headRow = header.map(h => ({ text: h, options: { bold: true, color: THEME.colors.lt1, fill: { color: THEME.colors.dk2 }, fontSize: fs, valign: "middle" } }));
  const body = rows.map((r, i) => r.map(c => {
    const cell = typeof c === "string" ? { text: c, options: {} } : { text: c.text, options: { ...(c.options || {}) } };
    cell.options = { fontSize: fs, color: THEME.colors.dk1, valign: "top", fill: { color: i % 2 === 0 ? "FFFFFF" : "F5F8F9" }, ...cell.options };
    return cell;
  }));
  slide.addTable([headRow, ...body], {
    x: opts.x ?? 0.6, y: opts.y ?? 1.3, w: opts.w ?? 12.1, colW: opts.colW,
    border: { type: "solid", pt: 0.5, color: "D5DEE2" }, margin: 0.05, fontFace: THEME.bodyFontFace,
    rowH: opts.rowH, autoPage: false, objectName: opts.name || "literature table",
  });
}

// Small tag pill
function addPill(pres, slide, text, x, y, w, color, textColor = "FFFFFF", h = 0.32, fontSize = 10) {
  slide.addShape(pres.ShapeType.roundRect, { x, y, w, h, fill: { color }, line: { color }, rectRadius: 0.16, objectName: "pill " + text });
  slide.addText(text, { x, y, w, h, fontSize, bold: true, color: textColor, align: "center", valign: "middle", margin: 0, isTextBox: true, objectName: "pill text " + text });
}

// Card with heading and bullet lines
function addCard(pres, slide, { x, y, w, h, title, lines, color, fontSize = 11, titleSize = 13, titleColor }) {
  slide.addShape(pres.ShapeType.roundRect, { x, y, w, h, fill: { color: "FFFFFF" }, line: { color: "D5DEE2", width: 0.75 }, rectRadius: 0.08, shadow: { type: "outer", blur: 4, offset: 1.5, angle: 90, color: "000000", opacity: 0.12 }, objectName: "card " + title });
  slide.addShape(pres.ShapeType.ellipse, { x: x + 0.18, y: y + 0.17, w: 0.22, h: 0.22, fill: { color: color || THEME.colors.accent1 }, line: { color: color || THEME.colors.accent1 }, objectName: "card dot " + title });
  slide.addText(title, { x: x + 0.5, y: y + 0.08, w: w - 0.65, h: 0.4, fontSize: titleSize, bold: true, color: titleColor || THEME.colors.dk2, valign: "middle", margin: 0, isTextBox: true, objectName: "card title " + title });
  const items = lines.map((t, i) => (typeof t === "string" ? { text: t, options: { bullet: { code: "25AA" }, breakLine: i < lines.length - 1, paraSpaceAfter: 4 } } : { ...t, options: { breakLine: i < lines.length - 1, paraSpaceAfter: 4, ...(t.options || {}) } }));
  slide.addText(items, { x: x + 0.18, y: y + 0.5, w: w - 0.36, h: h - 0.6, fontSize, color: THEME.colors.dk1, valign: "top", margin: 0, isTextBox: true, objectName: "card body " + title });
}

module.exports = { THEME, W, H, newPres, addSummary, addLitTable, addPill, addCard, applyTheme };
