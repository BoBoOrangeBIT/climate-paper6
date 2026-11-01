// Q1 slides: how literature decides which measure to use under which conditions
const L = require("./deck_lib.js");
const T = L.THEME.colors;

module.exports = function addQ1(pres) {
  const SEC = "Q1 决定\"何时用哪种措施\"的方法";
  pres.addSection({ title: SEC });
  let s;

  // Section divider
  s = pres.addSlide({ masterName: "SECTION_DARK", sectionTitle: SEC });
  s.addText("核心问题 1：文献用什么方法决定\"什么条件下用哪种措施\"", { placeholder: "title" });
  s.addText([
    { text: "五条方法路线：(a) 机构固定气温阈值  (b) 温度+湿度阈值模型  (c) 生理热舱实验  (d) 能源系统/IAM 技术组合  (e) 舒适标准、职业标准与家庭计量", options: { breakLine: true } },
    { text: "共梳理约 60 条文献/报告；DOI 核实渠道：Consensus 检索结果或出版社/机构库页面；未核实者标\"未找到\"", options: {} },
  ], { placeholder: "body" });

  // Q1 overview: five routes as cards
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q1 总览：五条并存且互相争论的方法路线", { placeholder: "title" });
  const cards = [
    { t: "(a) 机构固定气温阈值", c: T.accent5, l: ["WHO 旧版/UKHSA：风扇 <35°C；WHO 现行：<40°C", "CDC：\"high 90s °F\"；US EPA 2006：热指数 99°F (37.2°C)", "Cochrane 2012：无任何合格试验支持或反驳"] },
    { t: "(b) 温度+湿度阈值模型", c: T.accent2, l: ["人体热平衡模型（Jay 2015）→ 人群分档阈值（Morris 2021）", "Gagge 两节点/SET（Tartarini 2021，ASHRAE 55）", "指数之争：热指数失效（Morris 2019）、UTCI 优于 WBGT（Foster 2021）"] },
    { t: "(c) 生理热舱实验", c: T.accent4, l: ["湿度爬坡/升温爬坡找临界点（Ravanelli 2015；Mihalcin 2025 ≈43°C）", "老年人 8 小时暴露：风扇基本无效（O'Connor 2024 JAMA）", "极干极热：风扇有害、湿皮肤有益（McKenna 2025）"] },
    { t: "(d) 能源系统 / IAM / 建筑存量模型", c: T.accent1, l: ["收入 + 度日/湿度校正温度 → 有/无空调（Davis 2015；Pavanello 2021）", "降温缺口 = 室内温度阈值 × 暴露天数（Mastrucci 2019）", "顺序规则仅见 Malik 2022（fan-first，省电 76%）"] },
    { t: "(e) 其他：舒适/职业标准与家庭计量", c: T.accent3, l: ["ASHRAE 55 提高风速换设定点；自适应舒适（de Dear 2002）", "ISO 7243 WBGT 无法反映风扇效应", "家庭离散选择：空调采用随收入与高温日数（Deng 2020）"] },
  ];
  const cw = 3.9, ch = 2.15, gx = 0.2;
  cards.forEach((c, i) => {
    const col = i % 3, row = Math.floor(i / 3);
    L.addCard(pres, s, { x: 0.6 + col * (cw + gx), y: 1.3 + row * (ch + 0.25), w: cw, h: ch, title: c.t, lines: c.l, color: c.c, fontSize: 10.5, titleSize: 12 });
  });
  // Right-bottom: technology coverage note in last grid cell
  L.addCard(pres, s, { x: 0.6 + 2 * (cw + gx), y: 1.3 + (ch + 0.25), w: cw, h: ch, title: "三类技术在各路线中的覆盖", color: T.accent6, fontSize: 10.5, titleSize: 12, lines: [
    "空调：(a)(b)(c) 仅作\"更贵的对照\"；(d)(e) 的主角",
    "风扇：(a)(b)(c) 的主角；(d) 多为背景变量",
    "蒸发冷却：各路线几乎缺位，仅 5–6 项研究将其作为独立选项",
  ] });
  L.addSummary(pres, s, "判据变量正从干球温度演化到温湿度矩阵/UTCI，再到经济模型中的湿度校正温度；但\"先风扇后空调\"等组合规则仅在少数文献被形式化，蒸发冷却几乎缺位。");

  // (a) fixed thresholds
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q1-a 固定气温阈值：谁设定、谁转引", { placeholder: "title" });
  L.addLitTable(pres, s, ["出处（机构/文献）", "阈值原文", "设定 / 引用", "DOI 与核实状态"], [
    ["WHO Fact sheet \"Heat and health\"（现行版）", "\"Use electric fans only when temperatures are below 40°C\"；空调设 27°C + 风扇 \"feel 4°C cooler\"", "直接设定（WHO）", "机构网页，无 DOI；已核实（WebSearch 摘要片段，网页本体被域名限制）"],
    ["WHO Q&A / WHO-Europe 公众信息单（旧版）", "风扇在 \"temperatures above 35°C\" 时 \"may not prevent heat-related illness\"", "直接设定（WHO 旧版）", "机构网页，无 DOI；已核实（WebSearch）"],
    ["US EPA (2006) Excessive Heat Events Guidebook", "\"fan alone when heat index temperatures exceed 99°F actually increases the heat stress\"（=37.2°C）", "直接设定（EPA；属温湿合成指数）", "报告无 DOI；已核实（epa.gov PDF 链接）"],
    ["US CDC（2000 年新闻稿及历年页面）", "\"when the temperature is in the high 90s, fans will not prevent heat-related illness\"；现行页改为模糊表述", "直接设定（CDC）；2019 年承认证据有限", "机构网页，无 DOI；已核实（WebSearch）"],
    ["UKHSA / PHE \"Beat the heat\"", "\"use electric fans if the air temperature is below 35°C, but do not aim the fan directly at your body\"", "直接设定（UKHSA）", "机构网页，无 DOI；已核实（gov.uk）"],
    ["Ravanelli et al. (2015) JAMA", "机构上限 \"range from 32.3°C (90°F) at 35% RH to … 35.6–37.2°C\"", "引用自：各公共卫生机构（经 Cochrane 综述）", "10.1001/jama.2015.153；已核实（Consensus）"],
    ["Gupta et al. (2012) Cochrane 综述", "\"does not support or refute the use of electric fans\"", "直接设定（系统综述结论）", "10.1111/j.1756-5391.2012.01196_1.x；已核实（Consensus）"],
    ["Meade et al. (2024) Lancet Planet Health", "历史阈值 \"≥35°C\"；2021 后指南 \"up to 40°C\"；建议维持 35°C，尤其 ≥65 岁", "前两者引用自机构；建议为直接设定", "10.1016/s2542-5196(24)00030-5；已核实（Consensus）"],
  ], { fontSize: 10, colW: [2.9, 4.4, 2.3, 2.5] });
  L.addSummary(pres, s, "固定阈值的源头全部是机构指南（35°C、热指数 37.2°C、\"high 90s°F\"），几乎没有原始实验支撑；WHO 自身存在 35°C 与 40°C 两个版本，学术文献多为转引并提出批评。");

  // (b) T+humidity models
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q1-b 温度+湿度阈值：热平衡模型与指数选择", { placeholder: "title" });
  L.addLitTable(pres, s, ["文献 / DOI（核实）", "方法", "关键阈值（原文）", "设定 / 引用"], [
    ["Jay, Cramer, Ravanelli, Hodder (2015) Appl Ergon\n10.1016/j.apergo.2014.07.013（Consensus）", "概念性人体热平衡模型（Ereq、Emax、预测出汗率）叠加十次历史热浪峰值", "风扇使临界气温提高 \"∼3–4 °C, irrespective of RH\"；边际收益可至 \"51.1 °C at 10%RH\"（青年）/\"48.1 °C\"（老年）；脱水仅 \">40 °C and <10%RH\"", "直接设定"],
    ["Morris et al. (2021) Lancet Planet Health\n10.1016/s2542-5196(21)00136-4（Consensus）", "生物物理模型 + 108 城市 2007–2019 逐时数据折算简化阈值", "\"<39.0°C\" 健康青年、\"<38.0°C\" 健康老年、\"<37.0°C\" 服抗胆碱药老年；对照 WHO \"35°C\"", "阈值直接设定；35°C 引用自 WHO"],
    ["Tartarini et al. (2021) Build Environ\n10.1016/j.buildenv.2021.108437（Consensus）", "Gagge 两节点模型 + CBE 开源在线工具", "0.8 m/s 使临界操作温度平均提高 \"14 °C for RH above 22%\"；115 大城市极端事件中 93 个风扇有益", "直接设定；\"≈35 °C\" 引用自各国指南"],
    ["Foster et al. (2021) Int J Biometeorol\n10.1007/s00484-021-02212-y（Consensus）", "300 次 1 h 劳动试验（35–50°C × 20–80% RH）+ 物理模型温湿矩阵", "\"≥ 35 °C … ineffective and potentially harmful when RH is below 50%\"；风效应 \"well captured by UTCI, but not by WBGT\"", "直接设定"],
    ["Morris et al. (2019) Ann Intern Med\n10.7326/m19-0512（Consensus）", "随机交叉热舱试验，专门构造\"热指数高但湿\"与\"热指数低但极干\"", "HI 56°C（湿热）风扇有益；HI 46°C（极干）风扇有害；\"45°C but arid (RH <10%)\" 不宜用扇", "直接设定；EPA HI 37.2°C 引用自 EPA"],
    ["Bröde, Fiala, Kampmann (2023) Biology\n10.3390/biology12060802（Consensus）", "198 次实验 + GAM 拟合风速效应，与 UTCI 比较", ">35°C 时风仍有益需水汽压 \">2 kPa\"（HR、核心温）/\">3 kPa\"（皮温、出汗）；UTCI r = 0.9", "直接设定"],
    ["Parsons et al. (2023) GeoHealth\n10.1029/2023gh000809（Consensus）", "1950–2021 逐时再分析 × 安全阈值 × 社会脆弱性指数", "不安全小时数增 \"∼70%\"；高 SVI 地区暴露概率 \"1.5–2 times\"", "阈值引用自 Morris 2021 等；小时数直接估计"],
  ], { fontSize: 10, colW: [3.3, 3.0, 4.0, 1.8] });
  L.addSummary(pres, s, "模型路线把 35°C 单一上限改写为随湿度、年龄与用药变化的阈值（39/38/37°C），并证明热指数与 WBGT 不能反映风扇效应，UTCI 或绝对湿度（kPa）更合适。");

  // (c) chamber experiments
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q1-c 生理热舱实验：实证设定风扇安全上限", { placeholder: "title" });
  L.addLitTable(pres, s, ["文献 / DOI（核实）", "人群与条件", "主要发现（原文数字）", "对判据的含义"], [
    ["Ravanelli et al. (2015) JAMA\n10.1001/jama.2015.153（Consensus）", "青年；36°C 与 42°C，湿度递增", "风扇延迟心率与核心温上升；寻找\"临界湿度\"", "判据应为温度×湿度，而非单一气温"],
    ["Gagnon et al. (2016) JAMA；(2017) MSSE\n10.1001/jama.2016.10550；10.1249/mss.0000000000001348（Consensus）", "老年 61–71 岁；42°C，RH 30→70%，≈4 m/s", "老年 HR +5 bpm、核心温 +0.20°C、皮温 +0.47°C；青年无害", "阈值需按年龄分层"],
    ["Mihalcin et al. (2025) Build Environ\n10.1016/j.buildenv.2025.113261（Consensus）", "10 名健康成人；38→47°C 线性升温 3 h，∼5.5 m/s", "HR/核心温在 \"≥44°C / ≥45°C\" 显著更高；安全上限 \">43°C\"，比指南高 \"∼3–11°C\"；补水 \"∼250 mL/h at 43°C\"", "青年低湿条件下上限远高于 35°C"],
    ["O'Connor et al. (2024) JAMA；Lee et al. (2025) Physiol Rep\n10.1001/jama.2024.19457；10.14814/phy2.70390（Consensus）", "65–85 岁；36°C/45% RH、8 h，0/2/4 m/s", "核心温升 ~1.0°C 各组相同；风扇 \"failed to meaningfully mitigate\"", "老年人全天暴露下风扇不是替代方案"],
    ["O'Connor et al. (2025) J Am Geriatr Soc\n10.1111/jgs.70109（Consensus）", "20 名老年人；31°C/45% RH、8 h，吊扇 ~1.5 m/s", "峰值核心温降低 \"0.2 [0.1–0.3]°C\"；提出 \"fan-first … integrating fans with ambient cooling\"", "实验层面首次形式化\"风扇优先+环境降温\""],
    ["McKenna et al. (2025) J Appl Physiol\n10.1152/japplphysiol.00390.2025（Consensus）", "23 名老年人；47°C/15% RH、3 h，四臂", "风扇核心温 \"+0.60°C\"；喷水 \"−0.24°C\"；喷水+风扇无变化", "极干极热下个人蒸发冷却优于风扇"],
    ["Wang et al. (2022) Build Environ\n10.1016/j.buildenv.2022.109888（Consensus）", "模型方法学：加入心血管调节", "\"not recommended to use biophysical models … for older adults\"", "对 (b) 类模型阈值的方法学批评"],
  ], { fontSize: 10, colW: [3.5, 2.6, 3.9, 2.1] });
  L.addSummary(pres, s, "热舱实验把阈值推向两端：健康青年在低湿下可用到约 43°C，而老年人在 36°C/45% RH 全天暴露下风扇几乎无效；判据因此必须同时写入温度、湿度、年龄与暴露时长。");

  // (d) energy/IAM models
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q1-d 能源系统 / IAM / 建筑存量模型：技术组合如何被决定", { placeholder: "title" });
  L.addLitTable(pres, s, ["文献 / DOI（核实）", "决定机制", "关键数字（原文）", "技术覆盖"], [
    ["IEA (2018) The Future of Cooling\n报告无 DOI；已核实（iea.org 报告页）", "全球建筑存量-能耗情景（Baseline vs Efficient Cooling）", "空调存量 \"1.6 billion → 5.6 billion by 2050\"；空调+风扇占建筑用电 \"about a fifth\"", "AC / 风扇为背景；蒸发冷却未见"],
    ["Mastrucci et al. (2019) Energy Build\n10.1016/j.enbuild.2019.01.015（Consensus）", "格网 variable degree days：室内目标温度 × 暴露天数 → \"需要空调\"", "\"1.8 to 4.1 billion … may need AC\"；弥补缺口能耗 \"14% of current global residential electricity\"", "AC / 风扇（分配规则未能核实）"],
    ["Pavanello et al. (2021) Nat Commun\n10.1038/s41467-021-26592-2（Consensus）", "离散选择：收入 + \"humidity-adjusted temperature\"", "2040 年采用增 \"twofold to sixteen-fold\"；\"64 to 100 million families\" 无法满足舒适", "AC（风扇描述性）"],
    ["Davis & Gertler (2015) PNAS；Davis et al. (2021) Glob Environ Change\n10.1073/pnas.1423558112；10.1016/j.gloenvcha.2021.102299（Consensus）", "采用（extensive）与使用（intensive）边际分开估计", "暖区采用随收入每千美元增 \"2.7%\"；饱和近 \"80%\"", "仅 AC"],
    ["Falchetta & Mistry (2021) Energy Econ\n10.1016/j.eneco.2021.105307（Consensus）", "风扇/空调需求情景内生于撒哈拉以南非洲电气化成本最优模型", "计入降温后投资平均增 \"65.5%\"；气候变化再增 \"4%\"", "风扇 / AC 情景"],
    ["Colelli, Wing, De Cian (2023) Sci Rep；Andrijevic et al. (2021) ERL\n10.1038/s41598-023-31469-z；10.1088/1748-9326/ac2195（Consensus）", "空调普及率外推；缺口人口 = 高温暴露 − 空调可及", "欧洲/印度普及率 2050 \"around 40%\"；缺口 \"2 billion–5 billion\"", "仅 AC（适应能力只用空调度量）"],
    ["Malik et al. (2022) Lancet Planet Health\n10.1016/S2542-5196(22)00042-0（WebSearch: Lancet/机构库）", "逐时气候 × 舒适模型：风扇 0.1–1.2 m/s 优先，\"AC used only once the upper temperature threshold for thermal discomfort was exceeded\"", "1.2 m/s 情景年能耗 \"5592 → 1344 GWh\"（≈−76%）；排放 \"5091 → 1208 kt\"", "AC + 风扇（顺序组合）"],
  ], { fontSize: 10, colW: [3.6, 3.4, 3.3, 1.8] });
  L.addSummary(pres, s, "能源-经济模型以收入和度日（或湿度校正温度）预测\"有/无空调\"，技术选择基本是二元的；只有 Malik 2022 把\"先风扇、超舒适阈值再开空调\"的顺序规则写进国家尺度模型。");

  // (d-cont) evaporative cooling as an option
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q1-d 续：蒸发冷却何时被当作独立选项（少数文献）", { placeholder: "title" });
  L.addLitTable(pres, s, ["文献 / DOI（核实）", "判别变量与方法", "关键数字（原文）", "说明"], [
    ["Agarwal et al. (2026) Environ Sci Technol\n10.1021/acs.est.6c05101（Consensus）", "印度 400+ 区家庭调查 + 随机森林 + 倾向得分匹配；AC vs 蒸发冷却器（EC）选择取决于 \"local humidity and air temperature in addition to income\"", "2022 年户均拥有率 \"EC-only 18%, AC-plus-EC 3%, AC-only 4%\"；最高收入户 AC \"178 kWh/capita/year\" vs EC \"56\"", "检索到的唯一把 EC 与 AC 并列、以温湿+收入判别的实证模型"],
    ["Pavanello & Sue Wing (2023) 工作论文\nDOI 未找到；已核实（作者主页/SIE 摘要）", "印度 CPHS 面板，分别估计空调与蒸发冷却器对高温死亡率的缓解", "适应技术合计使高温死亡降 \"21%\"，年福利 \"$32 billion\"；\"subsidising air-conditioning is a cost-effective way\"；EC 保护效果 \"reduced\"", "尚未见期刊版；蒸发冷却器集中于干燥地区"],
    ["Naderi et al. (2020) J Build Eng\n10.1016/j.jobe.2020.101514（WebSearch）", "EnergyPlus 模拟伊朗四个柯本气候区的直接蒸发冷却器（DEC）vs PTAC 空调", "PTAC 比 80% 效率 DEC 多耗电 \"234%–265%\"；湿帘效率 +30% 可减电 \"up to 50.0%\"、减水 \"29.6%\"", "以气候区（湿球温度）作判别变量"],
    ["Al-Jubainawi et al. (2026) Sci Rep\n10.1038/s41598-026-43175-7（Consensus）", "柯本分类 + 本地舒适指数，逐时模拟伊拉克三城 DEC vs 机械通风", "舒适小时增加 \"41.28% (Baghdad), 54.48% (Basrah), 30.55% (Mosul)\"", "对照为通风，不含空调"],
    ["Meade et al. (2024) Lancet Planet Health\n10.1016/s2542-5196(24)00030-5（Consensus）", "批判性综述：把 \"air conditioning or evaporative coolers\" 列为环境降温，\"skin wetting or fan use\" 列为个人降温", "无数值", "层级式论述，非定量判别"],
    ["UNEP Cool Coalition. Global Cooling Watch 2023/2025\n报告无 DOI；已核实（unep.org）", "可持续降温路径：被动优先 → 低能耗/混合 → 高效设备", "2025 版点名 \"fans, evaporative coolers, hybrid fan-AC systems\"；\"hybrid systems combining fans and AC can cut energy use by 30 per cent\"", "路径层面同时点名三种技术"],
  ], { fontSize: 10, colW: [3.3, 3.6, 3.4, 1.8] });
  L.addSummary(pres, s, "蒸发冷却仅在 5–6 项研究中成为独立选项，判别变量一致指向湿度/湿球温度与收入；无一项热舱实验测试真正的蒸发冷却器，IEA、SEforALL、CLASP 的可见摘要中也未将其量化。");

  // (e) other approaches
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q1-e 其他路线：舒适标准、职业标准与家庭计量", { placeholder: "title" });
  L.addLitTable(pres, s, ["文献 / DOI（核实）", "方法", "关键数字（原文）", "设定 / 引用"], [
    ["ASHRAE Standard 55（提高风速条款）；Arens et al. (2009) ASHRAE J\n标准无 DOI；已核实（ashrae.org addenda）", "用 SET 折算等效降温，允许更高操作温度", "无人控且操作温度 >25.5°C 时风速上限 \"0.8 m/s (160 fpm)\"", "直接设定（ASHRAE）"],
    ["de Dear & Brager (2002) Energy Build\n10.1016/S0378-7788(02)00005-1（WebSearch）", "自适应舒适模型：室外月均温 → 可接受室内温度", "（奠基文，早于 15 年窗口）", "直接设定"],
    ["Schiavon & Melikov (2008) Energy Build\nDOI 未找到（DTU Orbit 无 DOI）", "提高风速允许更高室温，评估制冷节能", "制冷节能 \"17–48%\"、峰值功率降 \"10–28%\"；风扇功率 >\"about 20 W\" 时节能可能消失", "直接设定"],
    ["Zhai et al. (2013) Build Environ；Zhou et al. (2023) Energy Build\n10.1016/j.buildenv.2013.03.022；10.1016/j.enbuild.2023.112953（Consensus）", "受试者可控气流舒适实验", "舒适可维持到 \"30 °C and 60% RH\"，风扇 \"<10 W per person\"；最高可接受操作温度 \"31.3 (RH 40–60%)\"/\"28.6 °C (RH 70–90%)\"", "直接设定"],
    ["He et al. (2019) Energy Build；He et al. (2018) Build Environ\n10.1016/j.enbuild.2019.04.015；10.1016/j.buildenv.2018.03.049（Consensus）", "Probit 风扇使用率模型；桌扇 + 可调温控实验", "风扇使中性温度上限提高约 \"3 K\"（27.5→30.7°C）；混合模式建筑空调使用率可减 \"about 15%\"", "直接设定"],
    ["ISO 7243:2017 WBGT 热应激评估\n标准无 DOI；已核实（标准机构页面）", "WBGT 参考值按代谢率与热适应分级", "风速只隐含在自然湿球中；Foster 2021 证明 WBGT 不反映风扇效应", "直接设定（ISO）"],
    ["Deng et al. (2020) J Environ Manage；Randazzo et al. (2020) Econ Model\n10.1016/j.jenvman.2020.111224；10.1016/j.econmod.2020.05.001（Consensus）", "家庭微观计量：高温暴露与收入驱动空调/风扇使用", "日均温 \">80 °F\" 日数促使购买空调；8 国采用空调后电费增 \"35%–42%\"", "直接估计"],
  ], { fontSize: 10, colW: [3.6, 3.0, 3.7, 1.8] });
  L.addSummary(pres, s, "舒适与职业标准把\"风扇换空调设定点\"的规则写成工程参数（0.8 m/s、+3 K、节能 17–48%），家庭计量则用收入与高温日数解释采用；两者都不涉及蒸发冷却，也不与健康结局挂钩。");

  // Q1 synthesis matrix
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q1 小结矩阵：五条路线的判据变量、人群分层、组合规则与技术覆盖", { placeholder: "title" });
  const yes = (t) => ({ text: t, options: { color: T.accent1, bold: true } });
  const no = (t) => ({ text: t, options: { color: T.accent5 } });
  L.addLitTable(pres, s, ["方法路线", "判据变量", "人群分层", "组合 / 顺序规则", "AC", "风扇", "蒸发冷却"], [
    ["(a) 机构固定阈值", "干球温度（或热指数 37.2°C）", no("无（WHO 新版对老人略有提示）"), yes("WHO 新版：空调 27°C + 风扇"), "作为避暑去处", yes("主角"), no("缺位")],
    ["(b) 温湿度阈值模型", "气温 × RH；UTCI；水汽压 kPa", yes("年龄、用药（Morris 2021）"), no("无"), "作为高成本对照", yes("主角"), no("缺位")],
    ["(c) 生理热舱实验", "气温、湿度、暴露时长、风速", yes("青年 vs 老年；补水状态"), yes("fan-first + 环境降温（O'Connor 2025）"), "作为对照", yes("主角"), no("仅皮肤湿润/喷水（McKenna 2025）")],
    ["(d) 能源 / IAM 模型", "收入、CDD、湿度校正温度", no("按收入分位，不按生理脆弱性"), yes("仅 Malik 2022；UNEP 2025 混合系统 −30%"), yes("主角"), "背景或情景变量", no("仅 Agarwal 2026 等 5–6 项")],
    ["(e) 舒适 / 职业标准与计量", "操作温度、SET、WBGT；收入与高温日数", no("无"), yes("风扇使空调使用率 −15%（He 2019）"), yes("主角"), yes("主角"), no("缺位")],
  ], { fontSize: 10, colW: [2.0, 2.4, 1.9, 2.6, 0.9, 0.8, 1.5] });
  L.addCard(pres, s, { x: 0.6, y: 4.55, w: 12.1, h: 1.45, title: "跨路线观察", color: T.accent2, fontSize: 10.5, titleSize: 12, lines: [
    "同一问题得出相反结论：模型与青年实验支持放宽至 39–43°C，老年人实验与 Meade 2024 支持维持 35°C；差异来自人群、湿度与暴露时长。",
    "四条路线几乎不互相调用：生理阈值没有进入 IEA/IIASA/经济学模型，经济学模型也不输出人群分层的安全条件。",
  ] });
  L.addSummary(pres, s, "判据从单一气温走向多变量，但各路线各自为政：生理学产生阈值而不计成本，能源-经济学计算成本而不含生理阈值，蒸发冷却在两边都缺位。", { y: 6.2 });
};
