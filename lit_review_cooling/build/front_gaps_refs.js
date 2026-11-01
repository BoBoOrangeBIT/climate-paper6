const L = require("./deck_lib.js");
const T = L.THEME.colors;
const REFS = require("./refs.js");

function addFront(pres) {
  const SEC = "引言";
  pres.addSection({ title: SEC });
  let s = pres.addSlide({ masterName: "TITLE_DARK", sectionTitle: SEC });
  s.addText("空调、风扇与蒸发冷却：成本收益替代与组合关系的文献梳理", { placeholder: "title" });
  s.addText([
    { text: "围绕三个核心问题：① 什么条件下用哪种措施的判定方法  ② 降温/健康收益的度量与归因  ③ 风扇与蒸发冷却设备的成本度量", options: { breakLine: true } },
    { text: "气候适应与健康经济学文献综述 · 2026 年 11 月 · 约 160 条文献与报告，DOI 逐条标注核实状态", options: {} },
  ], { placeholder: "body" });

  // Scope & method
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("综述范围、检索与核实规则", { placeholder: "title" });
  L.addCard(pres, s, { x: 0.6, y: 1.3, w: 3.9, h: 2.45, title: "范围", color: T.accent1, fontSize: 10.5, titleSize: 12.5, lines: [
    "三类措施：空调（AC）、电风扇、蒸发冷却（沙漠/沼泽冷却器、直接/间接蒸发、喷雾与皮肤湿润）",
    "三个问题：判定条件的方法；收益度量与归因；成本度量与时空精细度",
    "优先近 15 年同行评审文献，兼顾 IEA、WHO/WMO、UNEP、CLASP、LBNL 报告；1992–2008 的奠基文献单独标注",
  ] });
  L.addCard(pres, s, { x: 4.7, y: 1.3, w: 3.9, h: 2.45, title: "检索", color: T.accent2, fontSize: 10.5, titleSize: 12.5, lines: [
    "Consensus 学术检索（29 次有效检索后触发月度额度上限）+ 约 60 次 WebSearch（出版社、PubMed、机构库页面）",
    "按三个问题分别检索，再交叉去重；共纳入约 160 条文献/报告，其中约 200 个条目级信息点",
    "蒸发冷却为检索重点之一，专门检索印度、巴基斯坦、伊朗、美国西南部文献",
  ] });
  L.addCard(pres, s, { x: 8.8, y: 1.3, w: 3.9, h: 2.45, title: "核实规则", color: T.accent3, fontSize: 10.5, titleSize: 12.5, lines: [
    "DOI 仅在 Consensus 结果或出版社/机构库页面逐字出现时标\"已核实\"；否则标\"DOI 未找到\"；机构报告标\"报告无 DOI\"",
    "数字一律抄录摘要/页面原文，并区分 [直接设定/直接估计] 与 [引用自: X]",
    "doi.org、Crossref、who.int、iea.org 等在本会话被网络策略阻断，机构报告原文依赖搜索摘要（已标注）",
  ] });
  L.addLitTable(pres, s, ["DOI 核实状态", "条数", "说明"], [
    ["已核实（Consensus 结果中逐字出现）", String(REFS.filter(r => r[2] === "C").length), "最高置信度"],
    ["已核实（WebSearch 出版社/PubMed/机构库页面）", String(REFS.filter(r => r[2] === "W").length), "17 条经独立二次复核全部确认；Ibbetson 2025 由错误记录更正后归入"],
    ["报告/标准/机构网页，无 DOI", String(REFS.filter(r => r[2] === "R").length), "IEA、WHO、UNEP、EPA、CDC、UKHSA、ASHRAE、ISO"],
    ["无 DOI 的工作论文", String(REFS.filter(r => r[2] === "N").length), "Pavanello & Sue Wing CESifo WP 12365；另 Agarwal 2026、Sabater-Mezquita 2026 的 DOI 二次复核未见页面，待 doi.org 核验"],
  ], { y: 3.95, fontSize: 10, colW: [4.3, 1.0, 6.8] });
  L.addSummary(pres, s, "本综述对每条信息标注了出处与 DOI 核实状态，并对 31 条做了独立二次复核（25 条确认、1 条更正、5 条待 doi.org 核验）；凡未能核实的数字（如 Jay 2021 的\"1/50 电耗\"）均明示\"未核实\"而非沿用。", { y: 6.2 });

  // Executive summary
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("执行摘要：三类技术的证据不对称，使成本-收益替代分析缺乏共同口径", { placeholder: "title" });
  const cw = 3.9, gx = 0.2;
  L.addCard(pres, s, { x: 0.6, y: 1.3, w: cw, h: 3.35, title: "Q1 判定方法：五条路线各自为政", color: T.accent1, fontSize: 10.5, titleSize: 12.5, lines: [
    "机构固定阈值（WHO 35→40°C、EPA 热指数 37.2°C）无原始实验支撑",
    "热平衡模型与热舱实验把阈值改写为温湿度 × 年龄 × 暴露时长（39/38/37°C；青年 ~43°C；老年 36°C 无效）",
    "能源-经济模型以收入与度日预测\"有/无空调\"，顺序规则仅 Malik 2022 形式化",
    "蒸发冷却仅在 5–6 项研究中作为独立选项，判别变量为湿度与收入",
  ] });
  L.addCard(pres, s, { x: 0.6 + cw + gx, y: 1.3, w: cw, h: 3.35, title: "Q2 收益归因：只有空调走完整条链", color: T.accent2, fontSize: 10.5, titleSize: 12.5, lines: [
    "空调有死亡 OR（0.2–0.3）、归因份额（14%–100%）、避免死亡数（≈19 万/年），但不同方法差一个数量级",
    "风扇唯一死亡 OR 0.60（CI 跨 1）；2014 年后终点转为核心温度与心率，正负随温湿、年龄反转",
    "蒸发冷却器无任何死亡/住院研究，收益停留在室温降幅与舒适",
    "建筑→室温→死亡→货币的链式模型成熟，却只用于被动遮阳",
  ] });
  L.addCard(pres, s, { x: 0.6 + 2 * (cw + gx), y: 1.3, w: cw, h: 3.35, title: "Q3 成本度量：全而粗 / 多而不货币 / 细而小", color: T.accent3, fontSize: 10.5, titleSize: 12.5, lines: [
    "全球/IAM 成本参数只为空调设定；风扇最多并入\"10% 全球用电\"",
    "风扇证据是功率（2–30 W）与节能百分比（17–76%），完整 CBA 仅 2 项",
    "蒸发冷却器有 LCC、回收期、水耗，但单机尺度、水费仅 1 项货币化（$1.82/yr）",
    "维护、健康联带、小时电价在三类技术中均缺位；价格基年普遍不透明",
  ] });
  L.addSummary(pres, s, "核心结论：生理学产生阈值而不计成本，能源-经济学计算成本而不含生理阈值，健康经济学只评价空调与预警系统；三者之间以及蒸发冷却在三者中的缺位，构成本领域的主要文献空白。", { y: 4.95, h: 1.0, fontSize: 12.5 });
  L.addText = null;
}

function addGaps(pres) {
  const SEC = "文献空白与研究建议";
  pres.addSection({ title: SEC });
  let s = pres.addSlide({ masterName: "SECTION_DARK", sectionTitle: SEC });
  s.addText("文献空白与研究建议", { placeholder: "title" });
  s.addText("基于三个核心问题的梳理，归纳方法、证据与数据三个层面的空白，并提出可操作的研究方向", { placeholder: "body" });

  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("文献空白（一）：判定规则与收益证据", { placeholder: "title" });
  const mk = (t) => ({ text: t, options: {} });
  L.addLitTable(pres, s, ["#", "空白", "证据（本综述依据）", "影响"], [
    ["1", "生理阈值与能源-经济模型互不调用", "Morris 2021/Mihalcin 2025 的人群阈值未进入 IEA、MESSAGEix、Falchetta 2024、De Cian 2025 任何模型；后者技术选择仍是二元\"有/无空调\"", "无法回答\"在何温湿、何人群下风扇可替代空调\"的成本问题"],
    ["2", "\"先风扇后空调\"等顺序/组合规则极少被形式化", "仅 Malik 2022（澳大利亚）、UNEP 2025（混合系统 −30%）、O'Connor 2025（fan-first + 环境降温）、WHO 新版（27°C + 风扇）", "组合策略的能耗与健康收益缺乏可复用的建模范式"],
    ["3", "风扇与蒸发冷却器没有死亡率层面的效应量", "Gupta 2012 Cochrane 无 RCT；Bouchama 2007 风扇 OR 0.60（CI 0.4–1.1）；Johnston 2022 指出蒸发冷却器健康结局数据缺失", "健康经济模型无法为两者赋值，只能假定\"舒适不变\""],
    ["4", "热舱实验从未测试真正的蒸发冷却器", "(c) 类 20 余项实验只测风扇与皮肤湿润/喷水（McKenna 2025、Chaseling 2024、Cramer 2020）；Rugani 2026 仅用热人体模型", "蒸发冷却器的安全上限（湿度副作用）与人群分层完全未知"],
    ["5", "链式 HIA 只跑被动措施情景", "Taylor 2018/2021、Ibbetson 2021 评估遮阳与保温；Ibbetson 2025 纳入便携空调但摘要无数值；Moreno-Pestaña 2026 仅把 HVAC 普及率作参数", "没有\"安装空调/风扇/蒸发冷却器\"的室温→死亡→货币完整估计"],
    ["6", "\"空调份额\"估计相差一个数量级且未被调和", "Sera 2020 约 1/6、Achebak 2023 28.6%、Barreca 2016\"几乎全部\"、Bobb 2014 阴性", "任何以空调为基准的替代分析都继承这一不确定性"],
    ["7", "机构阈值内部不一致，且被文献并列转引", "WHO 35°C（旧）与 40°C（新）并存；CDC 从\"high 90s°F\"改为模糊表述；EPA 沿用 2006 年热指数 99°F", "政策与模型采用的\"安全条件\"彼此矛盾"],
  ], { fontSize: 10, colW: [0.4, 2.9, 5.2, 3.6] });
  L.addSummary(pres, s, "判定规则与收益证据的空白集中在三点：生理阈值未进入经济模型、组合规则未被形式化、风扇与蒸发冷却器没有可用于健康经济学的效应量。");

  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("文献空白（二）：成本参数与整合框架，及研究建议", { placeholder: "title" });
  L.addLitTable(pres, s, ["#", "空白", "证据（本综述依据）", "影响"], [
    ["8", "无按气候区 × 收入统一口径的三技术成本曲线", "空调：Randazzo 2020、De Cian 2025（国家/家庭）；风扇：Shah 2015（国家均值）、Knudsen 2023（单栋）；蒸发：Harby 2019、Gupta 2023（单机）", "成本输入不可比，替代/组合的成本有效性无法计算"],
    ["9", "水费、维护/垫片、安装、健康联带成本不入账", "水费仅 Harby 2019（$1.82/yr）；维护仅 Gupta 2023 常数；湿度/霉菌/生物气溶胶（Johnston 2022）从未货币化", "蒸发冷却器的真实成本被低估或无法比较"],
    ["10", "无小时电价 / 峰值容量视角的风扇与蒸发评估", "逐时仅见工程模拟（Naderi 2020、Chen 2022）与电表研究（Miller 2021、Jones 2023）；健康经济 CBA 一律年度", "忽略了风扇/蒸发在削峰上的潜在价值"],
    ["11", "健康经济评价从未把风扇或蒸发冷却器作为独立干预", "Sabater-Mezquita 2026 综述 17 项研究均为预警系统或\"机械制冷\"；Hyyrynen 2025 评价区域供冷", "政策无法据此在三类技术间分配补贴"],
    ["12", "蒸发冷却器的拥有、使用与价格数据极少进入同行评审", "Agarwal 2026 是唯一区级拥有率研究；购价与收入占比见工作论文与智库（Pavanello WP、Prayas 2019）", "经济模型无法内生蒸发冷却器采用"],
  ], { fontSize: 10, colW: [0.4, 2.9, 5.2, 3.6] });
  L.addCard(pres, s, { x: 0.6, y: 4.3, w: 12.1, h: 1.7, title: "研究建议（可操作方向）", color: T.accent2, fontSize: 10.5, titleSize: 12.5, lines: [
    "① 把人群分层的温湿度阈值（Morris 2021、Foster 2021 的 UTCI 矩阵）作为约束写入家庭技术选择模型，输出\"风扇可用小时 / 需空调小时 / 蒸发冷却可用小时\"的逐时判据（Parsons 2023 的思路扩展到三技术）。",
    "② 在 Taylor/Ibbetson 链式框架中增加\"安装风扇 / 蒸发冷却器 / 空调\"情景，以热舱实验的核心温度响应作为中介，产出可比较的死亡、YLL 与货币化收益。",
    "③ 建立含购置、电费、水费、维护与贴现的三技术成本数据库，按 Köppen 气候区 × 收入分位报告，并用 Agarwal 2026 类的区级数据校准蒸发冷却器采用。",
  ] });
  L.addSummary(pres, s, "成本侧空白在于口径不统一与组分缺失；填补路径是把生理阈值、链式健康模型与分气候区成本数据库接成一个可比较三类技术的框架。");
}

function addRefs(pres) {
  const SEC = "参考文献";
  pres.addSection({ title: SEC });
  const status = { C: "已核实·Consensus", W: "已核实·WebSearch", N: "未找到/待复核", R: "报告/标准无 DOI" };
  const perSlide = 22; // 11 per column
  const total = Math.ceil(REFS.length / perSlide);
  for (let i = 0; i < total; i++) {
    const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
    s.addText(`参考文献（${i + 1}/${total}）· 按第一作者字母序 · 括注为 DOI 核实状态`, { placeholder: "title" });
    const chunk = REFS.slice(i * perSlide, (i + 1) * perSlide);
    [0, 1].forEach(col => {
      const items = chunk.slice(col * 11, col * 11 + 11);
      if (!items.length) return;
      const runs = [];
      items.forEach((r, j) => {
        const n = i * perSlide + col * 11 + j + 1;
        runs.push({ text: `[${n}] ${r[0]} `, options: { color: T.dk1 } });
        runs.push({ text: `DOI: ${r[1]}`, options: { color: T.dk2, bold: true } });
        runs.push({ text: ` （${status[r[2]]}）`, options: { color: r[2] === "N" ? T.accent5 : T.accent6, breakLine: j < items.length - 1 } });
      });
      s.addText(runs, { x: 0.6 + col * 6.15, y: 1.3, w: 5.95, h: 5.6, fontSize: 10, valign: "top", margin: 0, isTextBox: true, paraSpaceAfter: 3, objectName: `refs col ${col}` });
    });
  }
}

module.exports = { addFront, addGaps, addRefs };
