// Condensed conclusions deck (<=10 slides)
const L = require("./deck_lib.js");
const T = L.THEME.colors;
const REFS = require("./refs.js");

(async () => {
  const { pres, C } = L.newPres();
  pres.title = "降温措施成本收益替代与组合：文献梳理精炼版";
  let s;
  const SEC = "精炼结论版";
  pres.addSection({ title: SEC });

  // 1 cover
  s = pres.addSlide({ masterName: "TITLE_DARK", sectionTitle: SEC });
  s.addText("空调、风扇与蒸发冷却：成本收益替代与组合关系 · 文献结论精炼版", { placeholder: "title" });
  s.addText([
    { text: "三个核心问题的结论、文献空白与研究建议 · 9 页", options: { breakLine: true } },
    { text: "基于 160 条文献/报告（130 条 DOI 经 Consensus 核实、17 条经出版社/机构库页面核实、11 条为无 DOI 报告、2 条待复核）· 2026 年 11 月", options: {} },
  ], { placeholder: "body" });

  // 2 one-page conclusion + coverage matrix
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("一页结论：三类技术的证据不对称，成本-收益替代分析缺乏共同口径", { placeholder: "title" });
  const ok = (t) => ({ text: t, options: { color: T.accent1, bold: true } });
  const part = (t) => ({ text: t, options: { color: T.accent2 } });
  const miss = (t) => ({ text: t, options: { color: T.accent5 } });
  L.addLitTable(pres, s, ["", "Q1 何时用哪种措施（判定方法）", "Q2 收益度量与健康归因", "Q3 成本度量与精细度"], [
    [{ text: "空调", options: { bold: true } }, part("经济模型中的\"有/无空调\"二元选择，驱动变量为收入与度日（Davis 2015；Pavanello 2021）"), ok("唯一有死亡效应量：OR 0.2–0.3；归因份额 14%–\"几乎全部\"；≈19 万例/年避免死亡"), ok("电费 +35–42%、碳社会成本、消费者剩余均有；价格基年多不透明")],
    [{ text: "风扇", options: { bold: true } }, ok("阈值最丰富：WHO 35→40°C；模型 39/38/37°C；青年实验 ~43°C；老年 36°C 无效"), part("无 RCT；唯一死亡 OR 0.60（CI 跨 1）；终点为核心温度、心率，正负随温湿与年龄反转"), part("功率 2–30 W、节能 17–76%；完整 CBA 仅 2 项；零售价靠行业报道")],
    [{ text: "蒸发冷却器", options: { bold: true } }, miss("仅 5–6 项研究作为独立选项，判别变量为湿度 + 收入（Agarwal 2026；Naderi 2020）"), miss("无任何死亡/住院研究；收益为室温 −2.8 K、WBGT 合规、舒适温度"), part("LCC、回收期齐全但单机尺度；水耗 ~250 L/d 仅 1 项货币化（$1.82/yr）")],
    [{ text: "组合/顺序规则", options: { bold: true } }, part("仅 Malik 2022（fan-first，空调节电 76%）、WHO 新版（27°C + 风扇）、UNEP 2025（混合 −30%）"), part("fan-first 把收益改写为\"舒适不变下的节电\"，健康收益由空调兜底（Bone 2025）"), miss("无组合策略的成本-收益评估")],
  ], { fontSize: 10.5, colW: [1.4, 3.6, 3.6, 3.5] });
  L.addCard(pres, s, { x: 0.6, y: 4.3, w: 12.1, h: 1.7, title: "总结论", color: T.accent2, fontSize: 11, titleSize: 12.5, lines: [
    "生理学文献产生阈值而不计成本，能源-经济学文献计算成本而不含生理阈值，健康经济学只评价空调与预警系统；三条路线互不调用。",
    "蒸发冷却在三条路线中都基本缺位；风扇有阈值与能耗证据但没有健康效应量；空调证据最全但\"空调份额\"相差一个数量级。",
  ] });
  L.addSummary(pres, s, "要回答\"什么条件下用哪种措施更划算\"，目前文献缺的不是单项证据，而是把生理阈值、健康效应量与分气候区成本接在一起的共同框架。");

  // 3 Q1 conclusions
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q1 结论：判据从单一气温走向温湿度 × 人群 × 暴露时长，但各路线各自为政", { placeholder: "title" });
  L.addLitTable(pres, s, ["路线", "判据变量", "关键阈值（原文数字）", "设定/引用", "出处（DOI 核实）"], [
    ["(a) 机构固定阈值", "干球温度；EPA 为热指数", "WHO 旧版 <35°C → 现行 <40°C；UKHSA <35°C；EPA 热指数 99°F (37.2°C)；CDC \"high 90s°F\"", "机构直接设定；学术文献转引并批评", "WHO/EPA/CDC/UKHSA 网页（无 DOI）；Gupta 2012 Cochrane 10.1002/14651858.CD009888.pub2"],
    ["(b) 温湿度阈值模型", "气温 × RH；UTCI；水汽压", "风扇使临界气温 +3–4°C（Jay 2015）；<39.0/38.0/37.0°C 按人群分档（Morris 2021）；≥35°C 且 RH<50% 有害（Foster 2021）", "直接设定", "10.1016/j.apergo.2014.07.013；10.1016/s2542-5196(21)00136-4；10.1007/s00484-021-02212-y"],
    ["(c) 生理热舱实验", "温度、湿度、暴露时长、年龄", "青年低湿上限 >43°C（Mihalcin 2025）；老年 36°C/45% RH 8 h 风扇核心温差 −0.1~0°C（O'Connor 2024）；47°C/15% RH 风扇 +0.60°C、喷水 −0.24°C（McKenna 2025）", "直接估计", "10.1016/j.buildenv.2025.113261；10.1001/jama.2024.19457；10.1152/japplphysiol.00390.2025"],
    ["(d) 能源/IAM 模型", "收入、CDD、湿度校正温度", "空调采用随收入每千美元 +2.7%（Davis 2015）；fan-first 1.2 m/s 使空调用电 5592→1344 GWh（Malik 2022）；EC vs AC 取决于湿度+气温+收入（Agarwal 2026）", "直接估计", "10.1073/pnas.1423558112；10.1016/S2542-5196(22)00042-0；10.1021/acs.est.6c05101"],
    ["(e) 舒适/职业标准", "操作温度、SET、WBGT", "ASHRAE 55 无人控风速上限 0.8 m/s；风扇使中性温度上限 +3 K、空调使用率 −15%（He 2019）；WBGT 不反映风扇效应", "ASHRAE/ISO 直接设定", "ASHRAE 55（无 DOI）；10.1016/j.enbuild.2019.04.015"],
  ], { fontSize: 10, colW: [1.7, 1.9, 4.3, 1.5, 2.7] });
  L.addSummary(pres, s, "同一问题结论相反：模型与青年实验支持放宽至 39–43°C，老年人实验与 Meade 2024 支持维持 35°C；差异来自人群、湿度与暴露时长，而这些生理阈值没有进入任何能源-经济模型。");

  // 4 Q2 conclusions with chart
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q2 结论：只有空调走完归因链，且\"空调份额\"相差一个数量级", { placeholder: "title" });
  s.addChart(pres.ChartType.bar, [{
    name: "空调解释的热死亡下降/可避免份额（%）",
    labels: ["Bobb 2014（城市层面，不显著）", "Sera 2020（4 国，14–20%，取中值）", "Achebak 2023（西班牙，28.6%）", "Chua 2023（日本 7 城，36–47%，取中值）", "Barreca 2016（美国，\"几乎全部\"，以 100 示意）"],
    values: [0, 17, 28.6, 41.5, 100],
  }], {
    x: 0.6, y: 1.3, w: 6.6, h: 4.0, barDir: "bar", chartColors: [T.accent1], showLegend: false,
    showTitle: true, title: "不同归因方法给出的\"空调份额\"（%）", titleFontSize: 12, titleColor: T.dk2, titleFontFace: "+mn-lt",
    showValue: true, dataLabelPosition: "outEnd", dataLabelFontSize: 9, dataLabelColor: T.dk1, dataLabelFontFace: "+mn-lt", dataLabelFormatCode: "0.#",
    catAxisLabelFontSize: 9, catAxisLabelColor: T.dk1, catAxisLabelFontFace: "+mn-lt", valAxisLabelFontSize: 9, valAxisLabelColor: T.accent6, valAxisLabelFontFace: "+mn-lt",
    valAxisMinVal: 0, valAxisMaxVal: 110, valGridLine: { color: "E3E9EC", size: 0.5 }, catGridLine: { style: "none" }, objectName: "AC share chart",
  });
  L.addCard(pres, s, { x: 7.5, y: 1.3, w: 5.2, h: 4.0, title: "三类技术的收益证据等级", color: T.accent2, fontSize: 10.5, titleSize: 12, lines: [
    "空调：病例对照 OR 0.2–0.3（Semenza 1996；Bouchama 2007 合并 0.23）；养老院/监狱准实验（Katz 2025 相对 OR 1.08；Skarha 2022）；指标法 ≈19 万例/年（Lancet Countdown/IEA）",
    "风扇：Cochrane 2012 无 RCT；合并 OR 0.60（0.4–1.1）；热舱终点湿热 ≤40°C 有益、极热干 45–47°C 有害、老年 36°C 全天无效；\"症状改善 ≠ 生理改善\"（O'Connor 2025）",
    "蒸发冷却器：无死亡/住院研究（Johnston 2022 明示空白）；仅室温 −2.8 K（Rugani 2026）、舒适温度 28.8°C（Tewari 2019）；皮肤湿润在干热下 −0.24°C 有效",
    "链式模型（建筑→室温→死亡→£/QALY）成熟（Taylor 2018；Ibbetson 2021）但只跑被动遮阳情景",
  ] });

  L.addSummary(pres, s, "空调的健康收益有多条独立证据线但方法间分歧巨大；风扇停在生理终点、蒸发冷却器停在物理降温量，无法在同一健康经济框架内与空调比较。", { y: 5.6, h: 0.8 });

  // 5 Q3 conclusions
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q3 结论：空调\"全而粗\"、风扇\"多而不货币化\"、蒸发冷却\"细而小\"", { placeholder: "title" });
  L.addLitTable(pres, s, ["成本组分", "空调", "风扇", "蒸发冷却器"], [
    ["购置", ok("价格/效率曲线（IEA 2018）；收入门槛"), part("增量成本仅 Shah 2015；零售价 Rs 1,000 vs 2,500–3,500 来自行业报道"), part("LCC 初投资（Gupta 2023）；购价 Rs 3,000–15,000 = 收入 2–8% 来自工作论文")],
    ["电费/能耗", ok("+35–42%（Randazzo 2020）；+36%（De Cian 2025）"), ok("2–30 W（Miller 2021）；<10 W/人（Zhai 2013）；节能 17–48%（Schiavon 2008）；76% GWh（Malik 2022）"), ok("PTAC 比 DEC 多耗电 234–265%（Naderi 2020）；EC 56 vs AC 178 kWh/人/年（Agarwal 2026）")],
    ["水费", part("仅发电间接用水（Pistochini 2011）"), miss("不适用"), part("~250 L/d = 户用水 15%（Karpiscak 1998）；总体为空调 5–8 倍（Ponnamperuma 2025）；货币化仅 $1.82/yr（Harby 2019）")],
    ["维护/安装/健康联带", miss("少见 / 未货币化"), miss("无"), miss("维护仅常数系数；湿度/霉菌（Johnston 2022）未货币化")],
    ["寿命/贴现/峰值/碳", ok("消费者剩余 $85–185 bn（2012 美元）；碳社会成本 $124–177 bn；外部成本高一量级（Deschênes 2022）"), part("cost of conserved electricity（Shah 2015）；峰时段节能 41%（Miller 2021）"), ok("回收期 1.2–3 年、利率 13%（Kousar 2021）；LCA 环境负荷低 29–70%")],
    ["时空精细度", "全球/国家/家庭；年度；基年多未见", "格网逐日（Malik 2022）、峰时段实测；无货币", "逐时模拟（Naderi、Chen）；单机/气候区代表城市；国家尺度仅沙特与印度区级"],
  ], { fontSize: 10, colW: [1.7, 3.3, 3.5, 3.6] });
  L.addSummary(pres, s, "三类技术的成本证据口径不统一：没有按气候区 × 收入的三技术购置+运行+水费+维护成本曲线，也没有小时电价或峰值容量视角的风扇/蒸发评估；健康经济 CBA 从未把风扇或蒸发冷却器作为独立干预。");

  // 6 cross-cutting: three silos
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("跨问题总结：三条研究路线互不调用，蒸发冷却在三条路线中都缺位", { placeholder: "title" });
  const silo = [
    { t: "生理学 / 公共卫生", c: T.accent2, l: ["产出：人群分层的温湿度阈值、核心温度响应", "缺：成本、能耗、规模化", "代表：Jay/Kenny 团队 2015–2025；Meade 2024"] },
    { t: "能源 / 经济学模型", c: T.accent1, l: ["产出：空调采用、用电、排放、电网投资", "缺：生理阈值、人群脆弱性、风扇/蒸发冷却器作为选项", "代表：IEA 2018；Davis 2015；Pavanello 2021；Falchetta 2024"] },
    { t: "健康经济学 / HIA", c: T.accent3, l: ["产出：空调死亡 OR、避免死亡数、£/QALY（被动措施）", "缺：风扇与蒸发冷却器的效应量与成本", "代表：Sera 2020；Barreca 2016；Taylor 2018；Sabater-Mezquita 2026"] },
  ];
  silo.forEach((c, i) => L.addCard(pres, s, { x: 0.6 + i * 4.1, y: 1.3, w: 3.9, h: 2.3, title: c.t, lines: c.l, color: c.c, fontSize: 10.5, titleSize: 12.5 }));
  L.addLitTable(pres, s, ["接口", "现状", "少数例外（可作为起点）"], [
    ["生理阈值 → 经济模型", "无模型内生人群阈值", "Malik 2022 用舒适上限触发空调；Parsons 2023 把阈值转为\"不安全小时数\""],
    ["效应量 → 风扇/蒸发冷却", "无死亡/住院效应量", "Pavanello & Sue Wing 工作论文（印度，AC vs EC 对热死亡）；Smallcombe 2025 同舱比较风扇/屋顶/空调"],
    ["成本 → 健康经济评价", "CBA 只评价预警系统与\"机械制冷\"", "Bao 2025 养老院便携空调 vs 被动措施的 QALY 成本效益；Knudsen 2023 风扇办公楼 CBA"],
    ["蒸发冷却 → 任一路线", "几乎缺位", "Agarwal 2026（印度区级 AC/EC 选择）；Naderi 2020（伊朗气候区 DEC vs PTAC）；Johnston 2022（健康面综述）"],
  ], { y: 3.8, fontSize: 10, colW: [2.4, 3.2, 6.5] });
  L.addSummary(pres, s, "三条路线之间的接口几乎为空，仅有的例外多为 2022 年后的单篇研究或尚未正式发表的工作论文，说明这是一个刚刚开始被填补的空白。");

  // 7 gaps + agenda
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("文献空白与研究建议", { placeholder: "title" });
  L.addLitTable(pres, s, ["#", "空白", "依据"], [
    ["1", "生理阈值未进入能源-经济模型；组合/顺序规则极少被形式化", "Morris 2021 / Mihalcin 2025 阈值未进入 IEA、MESSAGEix、Falchetta 2024；顺序规则仅 Malik 2022、UNEP 2025、WHO 新版"],
    ["2", "风扇与蒸发冷却器没有死亡率层面效应量；热舱实验从未测试真正的蒸发冷却器", "Gupta 2012；Bouchama 2007 风扇 OR 0.60（CI 跨 1）；Johnston 2022；(c) 类实验只测风扇与皮肤湿润"],
    ["3", "链式 HIA 只跑被动措施，未评估\"安装空调/风扇/蒸发冷却器\"情景", "Taylor 2018/2021；Ibbetson 2021；Bao 2025 无数值；Moreno-Pestaña 2026 仅参数化 HVAC"],
    ["4", "无按气候区 × 收入统一口径的三技术成本曲线；水费、维护、健康联带不入账", "水费仅 Harby 2019；维护仅 Gupta 2023 常数；Johnston 2022 湿度副作用未货币化"],
    ["5", "健康经济评价从未把风扇或蒸发冷却器作为独立干预；无小时电价/峰值视角", "Sabater-Mezquita 2026 综述 17 项均为预警或\"机械制冷\"；逐时仅工程模拟"],
    ["6", "\"空调份额\"相差一个数量级未被调和；机构阈值内部不一致", "Sera 1/6、Achebak 29%、Barreca \"几乎全部\"、Bobb 阴性；WHO 35 vs 40°C"],
  ], { fontSize: 10, colW: [0.4, 5.0, 6.7] });
  L.addCard(pres, s, { x: 0.6, y: 4.45, w: 12.1, h: 1.55, title: "研究建议", color: T.accent2, fontSize: 10.5, titleSize: 12.5, lines: [
    "① 把人群分层温湿度阈值（Morris 2021；Foster 2021 UTCI 矩阵）作为约束写入家庭技术选择模型，输出逐时\"风扇可用 / 需空调 / 蒸发冷却可用\"小时数。",
    "② 在 Taylor/Ibbetson 链式框架中增加三技术安装情景，以热舱核心温度响应为中介，产出可比的死亡、YLL 与货币化收益。",
    "③ 建立含购置、电费、水费、维护与贴现的三技术成本数据库，按 Köppen 气候区 × 收入分位报告，用 Agarwal 2026 类区级数据校准蒸发冷却器采用。",
  ] });
  L.addSummary(pres, s, "填补路径是一个接口框架：生理阈值约束技术选择、链式健康模型提供可比收益、分气候区成本数据库提供可比成本。");

  // 8 verification status
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("核实状态与局限", { placeholder: "title" });
  L.addLitTable(pres, s, ["DOI 核实状态", "条数", "说明"], [
    ["已核实（Consensus 结果中逐字出现）", String(REFS.filter(r => r[2] === "C").length), "最高置信度；Consensus 月度额度在 29 次检索后耗尽"],
    ["已核实（WebSearch 出版社/PubMed/机构库页面）", String(REFS.filter(r => r[2] === "W").length), "正在进行独立二次复核（结果见 research/DOI_recheck.md）"],
    ["报告/标准/机构网页，无 DOI", String(REFS.filter(r => r[2] === "R").length), "IEA、WHO、UNEP、EPA、CDC、UKHSA、ASHRAE、ISO；原文因域名阻断依赖搜索摘要"],
    ["DOI 未找到或待复核", String(REFS.filter(r => r[2] === "N").length), "Pavanello & Sue Wing 工作论文；Bao et al. 2025（检索工具所列 DOI 前缀与期刊不符）"],
  ], { fontSize: 10.5, colW: [4.3, 1.0, 6.8] });
  L.addCard(pres, s, { x: 0.6, y: 3.6, w: 5.9, h: 2.4, title: "本会话被网络策略阻断的域名", color: T.accent5, fontSize: 10.5, titleSize: 12.5, lines: [
    "doi.org、api.crossref.org、api.openalex.org、api.semanticscholar.org、pubmed.ncbi.nlm.nih.gov",
    "who.int、iea.org、epa.gov、seforall.org、pure.iiasa.ac.at、mja.com.au",
    "放行方式：云环境设置 → Network access → Allowed domains 添加上述域名后可批量解析 160 条 DOI",
  ] });
  L.addCard(pres, s, { x: 6.8, y: 3.6, w: 5.9, h: 2.4, title: "明示\"未核实\"而未沿用的数字", color: T.accent6, fontSize: 10.5, titleSize: 12.5, lines: [
    "Malik 2022 的 28°C 空调启动阈值（摘要未出现）",
    "Jay 2021 Lancet 的\"风扇耗电为空调 1/30–1/50\"（仅见新闻稿）",
    "Aynsley 2005 的\"空调运行成本是吊扇 11 倍\"（转引自不明来源）",
    "IEA 2018 中风扇单独的存量、用电与价格（仅得风扇+空调合并的 10% 全球用电）",
  ] });
  L.addSummary(pres, s, "所有数字均按摘要或页面原文抄录并区分\"直接设定\"与\"引用自\"；凡无法核实者在页面明示，不以推测补足。");

  // 9 key references
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("关键参考文献（20 条；完整 160 条见完整版附录）", { placeholder: "title" });
  const keys = ["Jay O., Cramer", "Morris N.B. et al. (2021)", "Tartarini F., Schiavon", "Foster J. et al. (2021). Quantifying", "Mihalcin", "O'Connor F.K. et al. (2024)", "McKenna", "Meade", "Gupta S. et al. (2012)", "Bouchama", "Sera F.", "Barreca", "Achebak", "Taylor J. et al. (2018). Comparison", "Ibbetson", "Johnston", "Malik", "Agarwal", "Naderi", "Harby"];
  const sel = keys.map(k => REFS.find(r => r[0].startsWith(k) || r[0].includes(k))).filter(Boolean);
  const status = { C: "Consensus", W: "WebSearch", N: "待复核", R: "无 DOI" };
  [0, 1].forEach(col => {
    const items = sel.slice(col * 10, col * 10 + 10);
    const runs = [];
    items.forEach((r, j) => {
      runs.push({ text: `${r[0]} `, options: { color: T.dk1 } });
      runs.push({ text: `DOI: ${r[1]}`, options: { color: T.dk2, bold: true } });
      runs.push({ text: ` （${status[r[2]]}）`, options: { color: T.accent6, breakLine: j < items.length - 1 } });
    });
    s.addText(runs, { x: 0.6 + col * 6.15, y: 1.3, w: 5.95, h: 5.6, fontSize: 10, valign: "top", margin: 0, isTextBox: true, paraSpaceAfter: 3, objectName: `key refs ${col}` });
  });

  const out = process.argv[2] || "brief.pptx";
  await pres.writeFile({ fileName: out });
  await L.applyTheme(out, L.THEME);
  console.log("written", out, "slides:", pres.slides ? pres.slides.length : "?");
})().catch(e => { console.error(e); process.exit(1); });
