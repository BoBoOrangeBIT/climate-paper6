// Q2 slides: how benefits are measured and attributed
const L = require("./deck_lib.js");
const T = L.THEME.colors;

module.exports = function addQ2(pres) {
  const SEC = "Q2 降温/健康收益的度量与归因";
  pres.addSection({ title: SEC });
  let s;

  s = pres.addSlide({ masterName: "SECTION_DARK", sectionTitle: SEC });
  s.addText("核心问题 2：文献用什么方式衡量各措施的降温 / 健康收益，健康效应如何归因到每种措施", { placeholder: "title" });
  s.addText([
    { text: "归因链：措施 → 暴露变化（室温 / 核心温度）→ 暴露-反应函数 → 死亡 / 住院 / 生产率 → 货币化", options: { breakLine: true } },
    { text: "重点比较：效应量来源（病例对照、效应修饰、热舱实验、模拟链、指标法）与三类技术证据的不对称", options: {} },
  ], { placeholder: "body" });

  // Overview: attribution chain diagram
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q2 总览：归因链的五个环节与三类技术的证据覆盖", { placeholder: "title" });
  const steps = [
    { t: "① 措施", d: "空调 / 风扇 / 蒸发冷却器 / 皮肤湿润" },
    { t: "② 暴露变化", d: "室内温度、湿度；核心温度、心率" },
    { t: "③ 暴露-反应", d: "DLNM、病例对照 OR、效应修饰" },
    { t: "④ 健康结局", d: "死亡、住院、生产率、舒适、症状" },
    { t: "⑤ 货币化", d: "VSL、YLL、QALY、消费者剩余" },
  ];
  const sw = 2.25, sg = 0.21, sy = 1.35;
  steps.forEach((st, i) => {
    const x = 0.6 + i * (sw + sg);
    s.addShape(pres.ShapeType.roundRect, { x, y: sy, w: sw, h: 1.05, fill: { color: T.dk2 }, line: { color: T.dk2 }, rectRadius: 0.08, objectName: "step " + st.t });
    s.addText([{ text: st.t, options: { bold: true, fontSize: 13, color: "FFFFFF", breakLine: true } }, { text: st.d, options: { fontSize: 10, color: T.lt2 } }], { x: x + 0.1, y: sy, w: sw - 0.2, h: 1.05, valign: "middle", align: "center", margin: 0, isTextBox: true, objectName: "step text " + st.t });
    if (i < steps.length - 1) s.addShape(pres.ShapeType.rightArrow, { x: x + sw + 0.02, y: sy + 0.4, w: sg - 0.04, h: 0.25, fill: { color: T.accent2 }, line: { color: T.accent2 }, objectName: "arrow " + i });
  });
  const ok = (t) => ({ text: t, options: { color: T.accent1, bold: true } });
  const part = (t) => ({ text: t, options: { color: T.accent2 } });
  const miss = (t) => ({ text: t, options: { color: T.accent5 } });
  L.addLitTable(pres, s, ["技术", "① → ② 暴露变化", "② → ④ 健康结局证据", "④ → ⑤ 货币化", "代表文献"], [
    ["空调", ok("室温设定点；AC 普及率作为暴露代理"), ok("死亡 OR 0.2–0.3（病例对照）；归因份额 14–100%（meta 回归/经济学）；住院 RR；养老院/监狱准实验"), ok("消费者剩余 $85–185 bn（Barreca 2016）；避免死亡 ≈19 万/年（Lancet Countdown/IEA）"), "Semenza 1996; Bouchama 2007; Sera 2020; Barreca 2016; Katz 2025"],
    ["风扇", ok("核心温度、心率、出汗、速率-压力积（热舱）"), part("无 RCT/前瞻对照（Cochrane 2012）；唯一死亡 OR 0.60（CI 0.4–1.1）；生理终点随温湿与年龄正负反转"), miss("无；\"风扇优先\"把收益改写为空调节电 70–76%"), "Gupta 2012; Ravanelli 2015; O'Connor 2024; Meade 2024; Malik 2022"],
    ["蒸发冷却器", part("室温 −2.8 K、RH 升至 52%（气候舱）；WBGT 合规；舒适温度 28.8°C"), miss("无死亡/住院研究；综述明确指出健康结局数据缺失；仅皮肤湿润有核心温度收益"), miss("无"), "Rugani 2026; Tewari 2019; Johnston 2022; McKenna 2025"],
  ], { y: 2.7, fontSize: 10, colW: [1.3, 2.7, 3.7, 2.6, 1.8] });
  L.addSummary(pres, s, "只有空调走完了从暴露到货币化的整条归因链；风扇停在生理终点，蒸发冷却器停在物理降温量，三类技术的健康收益在证据等级上不可比。", { y: 5.95, h: 0.85 });

  // (a-1) AC: case-control & quasi-experiments
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q2-a 空调（一）：个体暴露与机构准实验给出的效应量", { placeholder: "title" });
  L.addLitTable(pres, s, ["文献 / DOI（核实）", "设计与归因方法", "收益度量", "效应量（原文）"], [
    ["Semenza et al. (1996) NEJM【经典】\n10.1056/nejm199607113350203（Consensus）", "芝加哥 1995 热浪 339 例/339 匹配对照", "热相关死亡 OR", "有效空调 OR 0.3（多变量）；卧床 OR 8.2；独居 OR 2.3 [直接估计]；摘要未报告风扇 OR"],
    ["Naughton et al. (2002) Am J Prev Med\n10.1016/s0749-3797(02)00421-x（Consensus）", "芝加哥 1999 热浪 63 例/77 对照", "热相关死亡 OR", "有效空调 OR 0.2 (95% CI 0.1–0.7)，\"最强保护因素\" [直接估计]"],
    ["Bouchama et al. (2007) Arch Intern Med【经典】\n10.1001/archinte.167.20.ira70009（Consensus）", "6 项病例对照（1065 例热浪死亡）meta 分析", "合并 OR", "家中有效 AC OR 0.23 (0.1–0.6)；去凉爽环境 0.34；使用风扇 OR 0.60 (0.4–1.1)，仅\"趋势\" [直接估计（合并）]"],
    ["Zhang et al. (2016) Int J Biometeorol\n10.1007/s00484-016-1189-9（Consensus）", "阿德莱德 2009 热浪 82 例/164 对照，条件 logistic", "调整 OR", "卧室有空调 AOR 0.004 (0.00006–0.28)；独居 AOR 42.31 [直接估计]；CI 极宽"],
    ["Katz et al. (2025) JAMA Intern Med\n10.1001/jamainternmed.2025.6595（Consensus）", "安大略养老院 2010–2023 病例交叉（73,578 例死亡），按设施 AC 分层", "极端高温日全因死亡 OR", "无 AC 院 OR 1.11 (1.06–1.16)；有 AC 院 1.03 (0.98–1.07)；相对 OR 1.08 (1.01–1.15) [直接估计]"],
    ["Skarha et al. (2022) JAMA Netw Open\n10.1001/jamanetworkopen.2022.39849（Consensus）", "德州监狱 2001–2019 病例交叉，按 AC 状态分层", "热指数每 +1°F 死亡增幅；归因死亡数", "无 AC：每 +1°F +0.7%，极端高温日 +15.1%，约 13%/271 例归因；有 AC −0.6%；P=.05 [直接估计]"],
    ["Romitti et al. (2025) Environ Int\n10.1016/j.envint.2025.109659（Consensus）", "加州 1,582 邮编 AC 拥有率 + 时空分层病例交叉", "极端高温–住院 RR", "全因住院 RR 1.04 (1.03–1.05) 低 AC vs 1.01 (1.00–1.02) 高 AC；热病 1.42 vs 1.21 [直接估计]"],
  ], { fontSize: 10, colW: [3.4, 3.1, 1.9, 3.7] });
  L.addSummary(pres, s, "空调的死亡效应量来自病例对照（OR 0.2–0.3）与近年的机构准实验（养老院、监狱），是三类技术中唯一能直接写进健康经济模型的效应量；风扇的唯一合并 OR（0.60）置信区间跨 1。");

  // (a-2) AC: effect modification, meta-regression, economics
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q2-a 空调（二）：效应修饰、meta 回归与经济学面板给出的\"空调份额\"", { placeholder: "title" });
  L.addLitTable(pres, s, ["文献 / DOI（核实）", "归因方法", "收益度量", "效应量（原文）"], [
    ["Barreca et al. (2016) J Polit Econ\n10.1086/684582（Consensus）", "美国州×月面板 1900–2004；州级住宅 AC 普及率 × 高温日交互", ">80°F 日的死亡边际影响；消费者剩余", ">80°F 日死亡影响下降 75%，住宅 AC \"解释了几乎全部\"；消费者剩余 $85–185 bn（2012 美元）[直接估计]"],
    ["Sera et al. (2020) Epidemiology\n10.1097/ede.0000000000001241（Consensus）", "311 城市两阶段 DLNM → 多层 meta 回归，AC 普及率为纵向效应修饰因子", "热超额死亡分数（%）", "美国 1.70%→0.53%，日本 3.57%→1.10%；AC 增长仅解释 16.7%、20.0%、14.3%、16.7% [直接估计]"],
    ["Achebak et al. (2023) Environ Int\n10.1016/j.envint.2023.108284（Consensus）", "西班牙 48 省 1980–2018 DLNM + 14 项情境指标 meta 回归", "热死亡下降中 AC 份额", "AC 解释热（极端热）死亡下降的 28.6%（31.5%）[直接估计]"],
    ["Bobb et al. (2014) EHP；Nordio et al. (2015) Environ Int\n10.1289/ehp.1307392；10.1016/j.envint.2015.04.009（Consensus）", "105/211 城市时变系数 + 贝叶斯层级 / meta 平滑，AC 增幅为解释变量", "每 +10°F 归因死亡；27°C 超额死亡 %", "归因死亡 51→19/千例；\"未发现 AC 增幅更大的城市下降更多\"（阴性）；27°C 超额死亡 10.6%→0.9%，受 AC 使用率影响 [直接估计]"],
    ["Chua et al. (2023) Environ Int\n10.1016/j.envint.2023.108310（Consensus）", "WRF+BEP/BEM 城市气候 × \"有/无 AC\" 两套风险函数（日本 7 城）", "AC 可避免热死亡 % 减去排热致死", "AC 可避免 36–47% 热死亡；排热升温 0.046–0.181°C，归因 3.1–3.5% 热死亡 [直接估计]"],
    ["Chen et al. (2016) EHP；Ji et al. (2026) Clim Risk Manag\n10.1289/EHP204（WebSearch: PubMed）；10.1016/j.crm.2026.100789（Consensus）", "江苏 102 县 / 中国 2,219 区县两阶段，AC 普及率为效应修饰或驱动因素", "热死亡 RR；超额风险 ER 变化", "RR 1.43 vs 1.26；呼吸热死亡 ER 9.46%→3.51%，AC 普及率为前三驱动因素之一 [直接估计]"],
    ["Deschênes & Greenstone (2011) AEJ Applied；Gallo et al. (2024) Nat Med\n10.1257/app.3.4.152（WebSearch: AEA）；10.1038/s41591-024-03186-1（Consensus）", "县级年际天气面板，能耗作为\"补偿性反应\"；823 区域反事实（固定早期暴露-反应）", "死亡率变化 + 住宅能耗；无适应反事实死亡", "期末死亡 +3%、住宅能耗 +11%；2023 欧洲 47,690 例热死亡，无适应则 +80.0% [直接估计]；均不拆分到设备"],
  ], { fontSize: 10, colW: [3.5, 3.3, 1.9, 3.4] });
  L.addSummary(pres, s, "同为空调，不同归因方法给出的\"空调份额\"从约 1/6（Sera 2020）到约 29%（Achebak 2023）再到\"几乎全部\"（Barreca 2016），还有城市层面的阴性结果（Bobb 2014）；经济学的\"揭示性适应\"框架则不拆分到任何设备。");

  // (b) fans
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q2-b 风扇：收益只以生理与舒适终点度量，且正负随温湿和年龄反转", { placeholder: "title" });
  L.addLitTable(pres, s, ["文献 / DOI（核实）", "设计", "收益度量", "效应量（原文）"], [
    ["Gupta et al. (2012) Cochrane CD009888\n10.1002/14651858.CD009888.pub2（WebSearch: Cochrane）", "系统综述（计划纳入 RCT、间断时序、前后对照）", "死亡 / 发病", "未检出任何 RCT 或前瞻对照；\"不支持也不反驳\" [综述结论]；无合并效应量"],
    ["Ravanelli et al. (2015) JAMA；Gagnon et al. (2016) JAMA\n10.1001/jama.2015.153；10.1001/jama.2016.10550（Consensus）", "热舱湿度爬坡，青年 / 老年（42°C）", "心率、核心温度、皮温", "老年：风扇使 HR +5 bpm (0–10)、Tcore +0.20°C (0.00–0.41)；青年：HR −2 bpm、Tcore +0.05°C [直接估计]"],
    ["Morris et al. (2019) Ann Intern Med\n10.7326/m19-0512（Consensus）", "12 名青年随机交叉，极热干（HI 46°C）vs 热湿（HI 56°C）", "直肠温、速率-压力积、出汗、舒适 VAS", "热湿改善、极热干全部恶化；直肠温差在极热干超过 0.3°C 临床阈值 [直接估计]"],
    ["O'Connor et al. (2024) JAMA；(2025) J Am Geriatr Soc\n10.1001/jama.2024.19457；10.1111/jgs.70109（Consensus）", "老年 8 h 暴露：36°C/45% RH（0/2/4 m/s）；31°C/45% RH 吊扇", "峰值直肠温", "36°C：2 m/s −0.1°C (−0.2–0.0)，4 m/s 0°C，均不显著（预设 ≥0.2°C）；31°C：−0.2°C (0.1–0.3) 显著 [直接估计]"],
    ["Mihalcin et al. (2025) Build Environ；McKenna et al. (2025) J Appl Physiol\n10.1016/j.buildenv.2025.113261；10.1152/japplphysiol.00390.2025（Consensus）", "青年 38→47°C 升温爬坡；老年 47°C/15% RH 四臂", "HR、Tcore 转折点；Tcore 增幅", "青年 HR/Tcore 在 ≥44/≥45°C 更高，上限 >43°C；老年风扇 Tcore +0.60°C，喷水 −0.24°C [直接估计]"],
    ["Smallcombe et al. (2025) Lancet Planet Health\n10.1016/j.lanplh.2025.101317（Consensus）", "孟加拉制衣厂情景 40°C/38% RH，42 人六条件交叉", "末期 Tcore、HR", "男性 Tcore：风扇+饮水 −0.27°C，屋顶改造 −0.35°C，AC −0.71°C；女性仅 AC 显著 −0.42°C [直接估计]"],
  ], { fontSize: 10, colW: [3.6, 3.0, 2.0, 3.5] });
  L.addSummary(pres, s, "风扇从未以死亡率被评价；2014 年后终点转为核心温度与心率，结果在湿热 ≤40°C 有益、极热干 45–47°C 有害、老年人 36°C 全天暴露无效；Meade 2024 据此认为 >35°C 的核心温度收益\"不具意义\"。");

  // (c) evaporative
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q2-c 蒸发冷却：没有任何以死亡或住院为终点的设备研究", { placeholder: "title" });
  L.addLitTable(pres, s, ["文献 / DOI（核实）", "设计", "收益度量", "效应量（原文）与性质"], [
    ["Rugani et al. (2026) Build Environ\n10.1016/j.buildenv.2026.115149（Consensus）", "5×5 m 气候舱（32°C）整室 EC 与个人 EC，热人体模型", "室温/RH 偏移、模型冷却效应 CE", "整室 EC 降温最多 2.8 K，RH 15–20%→52%；CE 平均 3 K，叠加个人 EC 后 6 K；功率 220 W/10 W，耗水 2.6 L/h [直接估计]"],
    ["Tewari, Mathur & Mathur (2019) Energy Build\n10.1016/j.enbuild.2019.06.049（Consensus）", "斋浦尔 10 栋蒸发冷却办公楼 18 个月问卷（1554 条）", "Griffiths 舒适温度、SET*、可接受范围", "舒适温度 28.8°C (SD ±1.9)；可接受 RH 35–85%，风速 0.75–1.5 m/s [直接估计]；无健康终点"],
    ["Johnston et al. (2022) Indoor Air\n10.1111/ina.13082（Consensus）", "家用蒸发冷却器生物气溶胶与健康综述", "内毒素、真菌葡聚糖、军团菌（潜在负收益）", "\"缺乏与蒸发冷却器使用相关健康效应的数据\" [综述判断]——明确的文献空白声明"],
    ["Miranda et al. (2024) Rev Bras Eng Agríc Ambient；Farnham et al. (2025) Clean Technol\n10.1590/1807-1929/agriambi.v29n3e280973；10.3390/cleantechnol7010009（Consensus）", "葡萄包装车间冷却器开/关；室外雾化风扇 vs 风扇，热人体模型", "WBGT 是否超职业限值；热通量、可接受 WBGT 提升", "冷却器开启时 WBGT 不超 NR15 限值；雾化风扇多散热 18.3–20.3 W/m²，可接受 WBGT 提高 >0.6°C [直接估计]"],
    ["Fukuzawa et al. (2025) Saf Health Work；Benyamine et al. (2024) Int J Low-Carbon Technol\n10.1016/j.shaw.2025.05.003；10.1093/ijlct/ctae191（Consensus）", "无风环境上身喷雾（9 人运动）；阿尔及利亚 EC 房 vs 分体空调房 + 300 人症状问卷", "直肠温峰值；室温/RH、自报症状", "热干喷雾组峰值 38.32 vs 38.14°C（p=0.074），无益；EC 房温湿均高于空调房，依赖通风 [直接估计]"],
    ["Parkes et al. (2022) Int J Biometeorol\n10.1007/s00484-022-02295-1（Consensus）", "非洲高分辨率气候模型 + 冷却器效率假设", "把热应激事件转为非热应激所需降温量", "蒸发冷却器历史上可预防热应激，热带效果低于副热带；高变暖下不足以恢复当前水平 [模型]"],
    ["Pavanello & Sue Wing 印度工作论文（2023）；Cramer et al. (2020) J Appl Physiol\nDOI 未找到；10.1152/japplphysiol.00786.2019（Consensus）", "CPHS 面板分别估计 AC 与 EC 对热死亡的缓解；老年湿 T 恤实验 42.4°C/34% RH", "热死亡下降 %；Tcore 增幅", "适应技术合计降热死亡 21%，\"若 AC 普及达 EC 水平可避免 47%\"（WP 摘要，待正式发表）；湿 T 恤降低 Tcore 增幅，加风扇反增出汗 [直接估计]"],
  ], { fontSize: 10, colW: [3.7, 3.0, 2.0, 3.4] });
  L.addSummary(pres, s, "蒸发冷却器的\"收益\"全部是物理量（−2.8 K、WBGT 合规、舒适温度）或模拟，综述明确指出健康结局数据缺失；唯一把 EC 与 AC 放进同一死亡率框架的是尚未正式发表的印度工作论文，而\"皮肤湿润\"这种个人蒸发冷却在干热下有一致的核心温度收益。");

  // (d) modelling chains
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q2-d 建模归因链与指标法：成熟的方法，却很少跑\"安装设备\"的情景", { placeholder: "title" });
  L.addLitTable(pres, s, ["文献 / DOI（核实）", "归因链", "收益度量", "效应量（原文）", "技术覆盖"], [
    ["Taylor et al. (2018) Environ Int；(2018) Atmosphere；(2021) Energy Build\n10.1016/j.envint.2017.11.005；10.3390/atmos9050190；10.1016/j.enbuild.2021.111233（均 Consensus）", "EnergyPlus 住宅原型 → UHI → 年龄结构 → 区域热-死亡暴露-反应函数", "热死亡变化 %", "外窗百叶 −30–60%；节能改造使热死亡 +3–4%；未来夏季百叶可避免 38–73% [直接估计]", "仅被动措施"],
    ["Ibbetson et al. (2021) Clim Risk Manag\n10.1016/j.crm.2021.100307（Consensus）", "建筑物理 → 室内均温 → 死亡 → YLL → £（20 年 3.5% 折现）", "避免死亡、YLL、货币", "外遮阳降均温 0.9°C；50 人养老院避免热死亡 0.07/0.47/0.28 例，收益约 £90,000/£230,000/£44,000（三种寿命假设）[直接估计]", "被动（遮阳）"],
    ["Bao et al. (2025) Environ Res Health\nDOI 待复核（Consensus 所列前缀与期刊不符）", "建筑物理 + 暴露-反应 + 生命表 → QALY vs 资本/能耗/维护成本", "QALY 货币价值 vs 成本", "小型低保温院\"休息室便携式空调\"最具成本效益；大型高保温院\"热质+开窗规则\"最优 [摘要无数值]", "便携 AC / 被动 / 行为"],
    ["Moreno-Pestaña et al. (2026) Build Environ\n10.1016/j.buildenv.2025.114094（Consensus）", "模拟室温累积热过载 IATO → 超额死亡，纳入区域 HVAC 普及率，与西班牙 MoMo 校准", "累积超额死亡", "平均误差 13%，R² 0.5–0.9；敏感性分析确认 HVAC 可及性重要 [直接估计]", "AC 作为参数"],
    ["Kouis et al. (2021) Environ Res\n10.1016/j.envres.2021.111285（Consensus）", "SSP 情景 HIA + AC 用电污染反事实（塞萨洛尼基）", "避免热死亡 vs 污染额外死亡", "2080–99 超额热死亡 2.4（SSP1-2.6）–433.7（SSP5-8.5）；AC 收益可能被污染死亡抵消 [直接估计]", "AC"],
    ["Lancet Countdown（Romanello et al. 2021）；IEA (2023) Sustainable, Affordable Cooling\n10.1016/S0140-6736(21)01787-6（WebSearch，指标年份待复核）；IEA 报告无 DOI", "国家 AC 普及率 × 65+ 热死亡暴露-反应（指标法）", "65+ 因 AC 可及避免的热死亡数", "2019 年避免约 195,000 例；IEA：2019–2021 年均约 190,000 例 [引用 / IEA 分析]", "AC"],
  ], { fontSize: 10, colW: [3.6, 2.9, 1.5, 3.0, 1.1] });
  L.addSummary(pres, s, "\"建筑物理 → 室温 → 暴露-反应 → 死亡 → YLL/QALY → 货币\"的链条已成熟，但几乎只用于被动遮阳；空调只以普及率参数或指标法进入，没有一项研究把\"安装空调 / 风扇 / 蒸发冷却器\"作为情景跑完整条链。");

  // (e) other metrics
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q2-e 非死亡收益指标：劳动能力、舒适、症状与电力代理", { placeholder: "title" });
  L.addLitTable(pres, s, ["指标", "文献 / DOI（核实）", "方法", "效应量（原文）", "技术覆盖"], [
    ["体力劳动能力 PWC", "Foster et al. (2021) Int J Biometeorol I & II\n10.1007/s00484-021-02105-0（WebSearch）；10.1007/s00484-021-02212-y（Consensus）", "338/300 次热舱工作试验 + 传热模型温湿矩阵", "WBGT 18°C 时 PWC −10%，40°C 时 −78%；风扇在 ≥35°C 且 RH<50% \"无效且可能有害\" [直接估计]", "风扇（基线+干预）"],
    ["生理 + 产出", "Bach et al. (2024) Am J Ind Med\n10.1002/ajim.23589（Consensus）", "泰国锯木厂 12 人 3 日交叉 RCT：降温\"绿洲\"（补水+冷毛巾+风扇+淋水）/ 相变背心", "OASIS Tcore −0.25°C、HR −7 bpm；产量差异不确定 MD 2.5 [−0.2, 5.2] [直接估计]", "风扇 + 淋水（组合）"],
    ["多准则评分", "Morris et al. (2020) Environ Health（伞状综述）\n10.1186/s12940-020-00641-7（Consensus）", "36 篇系统综述；有效性/成本/可行性/环境影响 4 分制", "AC 与降温服装\"有效性最高分\"但成本与环境影响差；通风、遮阳、休息为可持续替代 [作者评分]", "AC / 风扇（通风）/ 被动"],
    ["热舒适 / 症状", "Kenny et al. (2025) MSSE 摘要；O'Connor et al. (2025) APNM\n10.1249/01.mss.0001157796.62684.db；10.1139/apnm-2024-0461（Consensus）", "老年人吊扇 / 座地扇试验的感知终点", "热不适评分 −9 [4, 14] 而直肠温增幅仅 −0.1°C；症状总分 0.89 倍，生理 AUC 无差异 [直接估计]", "风扇"],
    ["舒适约束下的能耗", "Malik et al. (2022) Lancet Planet Health；Bone et al. (2025) MJA\n10.1016/s2542-5196(22)00042-0；10.5694/mja2.52662（Consensus）", "澳大利亚国家情景：舒适上限不变，风扇优先、超阈值开 AC", "AC 用电 5592→1344 GWh（−76%）；\"fan-first 可减 70% 以上\" [直接估计 / 引用自 Malik 2022]", "风扇 + AC"],
    ["电力代理", "Deschênes & Greenstone (2011)；Deschênes (2022) NBER；Rode et al. (2021) Nature\n10.1257/app.3.4.152；10.3386/w30282；10.1038/s41586-021-03883-8", "\"适应性用电\"视作已购买的健康保护", "住宅能耗 +11%；适应外部成本比私人电费高一个数量级；+1°C 用电 +4.5 EJ [直接估计]", "AC（隐含）"],
    ["住院 / 睡眠", "住院：Ostro 2010、Gronlund 2016、Romitti 2025（见 Q2-a）；睡眠：未检出", "—", "住院终点仅有 AC 效应修饰证据；以睡眠质量为终点比较三类技术的研究未检出 [检索结论]", "AC / 空白"],
  ], { fontSize: 10, colW: [1.5, 3.4, 2.7, 3.3, 1.2] });
  L.addSummary(pres, s, "非死亡指标中，劳动能力与舒适是风扇和蒸发冷却最常用的收益度量，但与健康终点脱钩；经济学把\"适应性用电\"当作收益代理，风扇文献则把\"节省的空调用电\"当作收益，二者方向相反。");

  // Q2 synthesis
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q2 小结：归因方法决定\"空调份额\"，风扇与蒸发冷却尚无健康效应量", { placeholder: "title" });
  L.addLitTable(pres, s, ["归因方法", "典型文献", "空调份额 / 效应", "能否推广到风扇、蒸发冷却"], [
    ["个体暴露病例对照", "Semenza 1996；Naughton 2002；Bouchama 2007", "OR 0.2–0.3；合并 0.23", "风扇 OR 0.60（CI 跨 1）；蒸发冷却器无"],
    ["机构准实验（病例交叉）", "Katz 2025；Skarha 2022", "相对 OR 1.08；无 AC 监狱 13% 死亡归因极端热", "无类似设计"],
    ["生态效应修饰 / 纵向 meta 回归", "Sera 2020；Achebak 2023；Bobb 2014（阴性）", "解释脆弱性下降 14–20%；28.6%；不显著", "需要风扇/EC 普及率的时空面板，目前缺失（印度 Agarwal 2026 刚提供 EC 拥有率）"],
    ["经济学面板交互", "Barreca 2016", "\"几乎全部\"", "无"],
    ["HIA / 城市气候耦合", "Chua 2023；Kouis 2021", "可避免 36–47%，减排热 3.1–3.5%", "原则上可行，尚无"],
    ["指标法", "Lancet Countdown；IEA 2023", "≈19 万例/年（65+）", "无风扇/EC 指标"],
    ["热舱生理终点", "Jay / Kenny 团队 2015–2025", "—", "风扇：丰富但正负反转；EC 设备：无；皮肤湿润：有"],
  ], { fontSize: 10, colW: [2.6, 3.0, 3.0, 3.5] });
  L.addSummary(pres, s, "空调的健康收益有多条独立证据线但份额估计相差一个数量级；风扇与蒸发冷却的收益停留在生理与物理终点，无法与空调在同一健康经济框架内比较——这是替代/组合分析的核心瓶颈。", { y: 5.9, h: 0.85 });
};
