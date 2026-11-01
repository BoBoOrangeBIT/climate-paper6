const L = require("./deck_lib.js");
const { addFront, addGaps, addRefs } = require("./front_gaps_refs.js");
(async () => {
  const { pres } = L.newPres();
  addFront(pres);
  require("./q1_slides.js")(pres);
  require("./q2_slides.js")(pres);
  require("./q3_slides.js")(pres);
  addGaps(pres);
  addRefs(pres);
  const out = process.argv[2] || "deck.pptx";
  await pres.writeFile({ fileName: out });
  await L.applyTheme(out, L.THEME);
  console.log("written", out);
})().catch(e => { console.error(e); process.exit(1); });
