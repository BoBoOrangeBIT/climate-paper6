// Q3 slides: how costs of fans / evaporative coolers are measured
const L = require("./deck_lib.js");
const T = L.THEME.colors;

module.exports = function addQ3(pres) {
  const SEC = "Q3 风扇与蒸发冷却的成本度量";
  pres.addSection({ title: SEC });
  let s;

  s = pres.addSlide({ masterName: "SECTION_DARK", sectionTitle: SEC });
  s.addText("核心问题 3：文献用什么方法衡量风扇与蒸发冷却设备的成本", { placeholder: "title" });
  s.addText([
    { text: "成本组分：购置 / 电费 / 水费 / 维护与垫片 / 安装 / 寿命与贴现 / 电网与峰值容量 / 碳与外部性 / 健康联带成本", options: { breakLine: true } },
    { text: "时空精细度：全球–国家–城市–家庭；年度–月度–逐日–逐时；价格基年与贴现率是否透明", options: {} },
  ], { placeholder: "body" });

  // Overview matrix: components x technology
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q3 总览：哪些成本组分被哪类文献计入", { placeholder: "title" });
  const ok = (t) => ({ text: t, options: { color: T.accent1, bold: true } });
  const part = (t) => ({ text: t, options: { color: T.accent2 } });
  const miss = (t) => ({ text: t, options: { color: T.accent5 } });
  L.addLitTable(pres, s, ["成本组分", "空调（对照）", "风扇", "蒸发冷却器", "代表文献"], [
    ["购置成本 capex", ok("IEA 2018 价格/效率曲线；采用模型隐含收入门槛"), part("仅 LBNL/Shah 2015 增量成本；零售价见行业报道（Rs 1,000 vs 2,500–3,500）"), part("工程 LCC 中有初投资（Gupta 2023、Sohani 2018）；印度购价见工作论文（Rs 3,000–15,000）"), "Shah 2015; Gupta 2023; Pavanello WP"],
    ["电费 / 能耗 elec", ok("电费支出 +35–42%（Randazzo 2020）；+36%（De Cian 2025）"), ok("功率 2–30 W（Miller 2021）、<10 W/人（Zhai 2013）；节能 17–48%（Schiavon 2008）、76% GWh（Malik 2022）"), ok("PTAC 比 DEC 多耗电 234–265%（Naderi 2020）；EC 56 vs AC 178 kWh/人/年（Agarwal 2026）"), "Randazzo 2020; Malik 2022; Naderi 2020"],
    ["水费 water", part("仅发电间接用水（Pistochini 2011）"), miss("不适用"), part("实测 ~250 L/d = 户用水 15%（Karpiscak 1998）；货币化仅 Harby 2019（$1.82/yr）"), "Karpiscak 1998; Ponnamperuma 2025; Harby 2019"],
    ["维护 / 垫片 maint", miss("少见"), miss("无"), part("Gupta 2023 用\"maintenance factor\"常数；垫材耗水实验（Khond 2011）但无更换成本"), "Gupta 2023; Khond 2011"],
    ["寿命 / 贴现 life", part("Barreca 2016 消费者剩余（2012 美元）"), part("Shah 2015 cost of conserved electricity；Knudsen 2023 办公楼 CBA"), ok("LCC、回收期、利率（Kousar 2021 13%；Harby 2019；Alsilbi 2026）"), "Kousar 2021; Knudsen 2023"],
    ["电网 / 峰值 grid", ok("IEA 峰荷；Falchetta & Mistry 2021 投资 +65.5%"), part("峰时段压缩机节能 41%（Miller 2021）"), part("Pistochini 2011 峰荷削减（定性）"), "Falchetta & Mistry 2021; Miller 2021"],
    ["碳 / 外部性 carbon", ok("社会成本 $124–177 bn（De Cian 2025）；污染外部成本高一量级（Deschênes 2022）"), part("Malik 2022 kt；Yan 2025 印度制冷排放增量主要来自风扇"), part("LCA 环境负荷低 29–70%（Marcinkowski 2025）"), "De Cian 2025; Yan 2025"],
    ["健康联带 health", miss("未货币化"), miss("无"), miss("Naderi 2020 仅以室内 RH 舒适小时作指标；霉菌/湿度未货币化"), "Naderi 2020"],
  ], { fontSize: 10, colW: [1.7, 3.0, 2.9, 3.0, 1.5] });
  L.addSummary(pres, s, "空调的成本参数覆盖最全；风扇证据集中在功率与节能百分比、几乎无货币化；蒸发冷却器的工程 LCC 框架最完整但尺度极小，水费、维护与健康联带成本在三类技术中都基本缺位。");

  // (a) IEA / IAM
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q3-a 全球 / IAM / 能源经济文献：成本参数只为空调而设", { placeholder: "title" });
  L.addLitTable(pres, s, ["文献 / DOI（核实）", "成本组分", "时空精细度", "关键数字（原文）"], [
    ["IEA (2018) The Future of Cooling\n报告无 DOI；iea.org 报告页（PDF 被域名限制）", "电费（主体）、空调价格/效率、峰荷、排放；风扇有存量与用电、无价格", "全球+大区；年度至 2050；价格基年未见", "风扇 \"2.3 billion … in use in 2016\"、\"more than 80 TWh in 2016, or nearly 1.5% of residential electricity\"、\"2.3 billion to 3.9 billion over 2016-50\" [直接设定，PDF 原文]；蒸发冷却器仅定性提及；风扇价格未见"],
    ["IEA (2019) SE Asia；IEA (2023) Keeping cool 评论\n报告无 DOI；iea.org", "电费、峰荷、MEPS 对价格（定性）", "ASEAN 10 国/全球；年度", "\"Only 15% of households in Southeast Asia have an air conditioner\"；夏季电力需求可升 \"more than 50%\" [直接设定]"],
    ["Mastrucci et al. (2019) Energy Build；(2022) MASGC\n10.1016/j.enbuild.2019.01.015；10.1007/s11027-022-10032-7（Consensus）", "能耗（kWh，非货币）", "全球南方格网 / 22 特大城市；年度 VDD", "缺口能耗 \"14% of current global residential electricity\"；城市缺口人口 \"33% (SSP1) to 86% (SSP3)\" [直接设定]"],
    ["Randazzo, De Cian, Mistry (2020) Econ Model；De Cian et al. (2025) JEEM\n10.1016/j.econmod.2020.05.001；10.1016/j.jeem.2025.103122（Consensus）", "家庭电费支出；碳社会成本", "8 国 / 25 国家庭微观；年度（2011 调查）", "\"spend 35%–42% more on electricity when they adopt air conditioning\"；2050 \"social costs of $124–177 billion\" [直接设定]"],
    ["Colelli, Wing, De Cian (2023) Sci Rep\n10.1038/s41598-023-31469-z（Consensus）", "每单位暴露减少的 kWh / kgCO2", "欧洲国家 vs 印度邦；日度暴露聚合到年", "\"0.53 kWh vs 0.1 kWh\" 与 \"0.16 vs 0.09 kgCO2\" per person-degree-day [直接设定]"],
    ["Falchetta & Mistry (2021) Energy Econ\n10.1016/j.eneco.2021.105307（Consensus）", "电气化投资（电网侧 capex）", "撒哈拉以南非洲格网；年度投资", "计入降温需求后投资 \"65.5% more\"；气候变化再加 \"4%\" [直接设定]；风扇并入 \"air circulation\""],
    ["Rode et al. (2021) Nature；Carleton et al. (2022) QJE\n10.1038/s41586-021-03883-8；10.1093/qje/qjac020（Consensus）", "能源支出 / 显示性偏好反推的适应成本", "全球 24,378 区域；年度至 2100；贴现敏感", "+1°C 使 2099 用电增 \"about 4.5 exajoules\"；死亡风险价值 \"3.2% of global GDP in 2100\" [直接设定]"],
  ], { fontSize: 10, colW: [3.4, 2.5, 2.5, 3.7] });
  L.addSummary(pres, s, "全球与 IAM 文献能解释成本的异质性来源（度日、收入分位、城乡），但技术维度只有\"有/无空调\"；IEA 2018 给出风扇存量与用电（2.3 billion 台、>80 TWh）却无价格或成本曲线，蒸发冷却器仅被定性提及。");

  // (b) fan energy/power
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q3-b 风扇成本（一）：以功率与节能百分比为主的证据", { placeholder: "title" });
  L.addLitTable(pres, s, ["文献 / DOI（核实）", "成本组分", "时空精细度", "关键数字（原文）"], [
    ["Malik et al. (2022) Lancet Planet Health\n10.1016/s2542-5196(22)00042-0（Consensus）", "电量 GWh、排放 kt；无货币、无 capex", "澳大利亚 GIS 格网 + 人口普查；逐日", "1.2 m/s 风扇优先 \"76% reduction in energy use (from 5592 GWh to 1344 GWh)\"；排放 5091→1208 kt [直接设定]"],
    ["Schiavon & Melikov (2008) Energy Build\n10.1016/j.enbuild.2008.05.001（WebSearch: ScienceDirect）", "制冷能耗、峰值功率、风扇输入功率", "建筑模拟，多气候；年度", "\"cooling energy saving of 17% to 48% and a 10% to 28% reduction in peak cooling power\" [直接设定]"],
    ["Miller et al. (2021) Energy Build\n10.1016/j.enbuild.2021.111319（Consensus）", "压缩机能耗、峰时段、风扇功率", "加州 10 栋建筑 29 个月实测；制冷季/峰时段", "吊扇 \"2–4 °C cooling effect … (2–30 W)\"；压缩机节能 \"36% … (41% during summer peak billing hours)\" [直接设定]"],
    ["Zhai et al. (2013)；Lipczynska et al. (2018) Build Environ\n10.1016/j.buildenv.2013.03.022；10.1016/j.buildenv.2018.03.013（Consensus）", "风扇人均功率；单位面积年节电", "气候室 / 新加坡办公室", "\"lower than 10 W per person\"；设定点 23→26°C \"44 kWh/m2yr savings\" [直接设定]"],
    ["Gokarakonda et al. (2023) Energies；He et al. (2019) Energy Build\n10.3390/en16196807；10.1016/j.enbuild.2019.04.015（Consensus）", "住宅电耗；空调使用率", "印度 15 户实测 / 现场研究综述", "28/30°C 设定点节能 \"44 and 67%\"；风扇使空调使用率减 \"about 15%\" [直接设定]"],
    ["Reddy et al. (2021) IEEE；Kumar et al. (2024) IEEE TCE\n10.1109/mysurucon52639.2021.9641617；10.1109/tce.2024.3476472（Consensus）", "功率（W）", "印度市场 / 实验室", "感应吊扇 \"70W to 90W\"，BLDC \"approx. to 35W\"；市售 BLDC \"around 30W to 35W\" [行业数据]"],
  ], { fontSize: 10, colW: [3.5, 2.3, 2.6, 3.7] });
  L.addSummary(pres, s, "风扇运行成本的证据是功率（2–30 W 吊扇、<10 W/人、印度 70–90 W vs BLDC ~30 W）与节能比例（17–48%、76%；Hoyt 2015 按气候区 32–73%），多为建筑模拟或实测，极少乘以电价折算为货币。");

  // (b-cont) fan capex and CBA
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q3-b 风扇成本（二）：购置成本与完整成本效益分析极少", { placeholder: "title" });
  L.addLitTable(pres, s, ["文献 / DOI（核实）", "成本组分", "时空精细度", "关键数字（原文）与出处性质"], [
    ["Sathaye, Phadke, Shah, Letschert (2012) LBNL-5980E；Shah et al. (2015) Energy Efficiency\n10.2172/1172246；10.1007/s12053-014-9274-6（Consensus）", "增量购置成本、节电、碳、cost of conserved electricity（含贴现）", "全球 + 印度/美国（BUENAS 模型）；年度；国家均值", "\"ceiling fan efficiency can be cost-effectively improved by at least 50%\"；全球可省 \"70 TWh/year\"、\"25 million metric tons of CO2\" [直接设定]"],
    ["Knudsen et al. (2023) Buildings\n10.3390/buildings13030589（Consensus）", "风扇投资、运行、生产率损失货币化（完整 CBA）", "德国单栋办公楼模拟；年度", "不舒适小时减 \"up to 50%\"，但 \"the initial investment of the fan is not compensated by savings in productivity losses\" [直接设定]"],
    ["Bone, Tartarini, Jay (2025) Med J Aust\n10.5694/mja2.52662（Consensus）", "电量、排放、成本曲线（定性引述）", "澳大利亚；典型年", "节电 \"more than 70%\" [引用自 Malik 2022]；净效益比 \"incandescent to LED\" 更强 [经 MJA Insight+ 转述]；座地扇 \"A$20 to $150\" [新闻报道，未核实]"],
    ["Jay et al. (2021) Lancet\n10.1016/S0140-6736(21)01209-5（WebSearch: LSHTM/PubMed）", "定性：空调 \"high capital and operational costs\"", "全球综述", "\"风扇耗电为空调 1/30–1/50\" 仅见悉尼大学新闻稿（\"30 to 50 times less energy\"）；论文原文未能核实"],
    ["Aynsley (2005) Int J Ventilation（较旧）\n10.1080/14733315.2005.11683708（Crossref 无法解析，DOI 未能核实）", "运行成本比", "—", "\"a residential air conditioner costs 11 times more to operate than ceiling fans\" [引用自 \"Another study\"，原始出处不明]"],
    ["BEE 印度吊扇星级标准 / CLASP / CEEW（灰色文献）\n报告无 DOI；clasp.ngo、consumeraffairs.nic.in", "零售价、功率/service value", "印度全国单一标准；2023 强制标签", "5 星 BLDC \"roughly 27–35 W\"；价格 \"Rs 2,500–3,500\" vs 1 星 \"roughly Rs 1,000\" [行业报道]"],
  ], { fontSize: 10, colW: [3.6, 2.6, 2.3, 3.6] });
  L.addSummary(pres, s, "同行评审文献中只有 LBNL/Shah 2015 与 Knudsen 2023 真正包含购置+运行+贴现；风扇零售价依赖行业报道，\"空调运行成本是风扇 11 倍\"\"耗电 1/30–1/50\"等常被转引的比值均为二手或新闻稿表述。");

  // (c) evaporative water & energy
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q3-c 蒸发冷却器成本（一）：水耗是独有组分，但单位混乱、几乎不货币化", { placeholder: "title" });
  L.addLitTable(pres, s, ["文献 / DOI（核实）", "成本组分", "时空精细度", "关键数字（原文）"], [
    ["Karpiscak et al. (1998) J AWWA（较旧）\n10.1002/j.1551-8833.1998.tb08415.x（WebSearch: 图书馆目录）", "现场用水（L/d，未货币化）", "凤凰城 46 户两季实测；日度/小时", "\"averaged 66 gpd (250 L/d), or 15 percent of total household water use, during the 214-day cooling season\" [直接设定]"],
    ["Pistochini & Modera (2011) Energy Build\n10.1016/j.enbuild.2010.11.004（Consensus）", "现场 + 电厂间接用水、电量、峰荷", "美国干旱气候技术层级；年度", "\"evaporative systems that significantly reduce peak electricity demand … need not consume any more water than conventional systems\"（计入发电用水）[直接设定]"],
    ["Ponnamperuma et al. (2025) Environ Sci Technol\n10.1021/acs.est.4c09452（Consensus）", "现场 + 区域发电用水、电量", "美国大陆 9 类商业建筑原型 × 区域电网；年度", "\"EC systems consume around 5-8 times as much water overall\"，尽管间接用水比压缩式少约 50% [直接设定]"],
    ["Pirouz et al. (2018) JSDEWES\n10.13044/j.sdewes.d6.0202（Consensus）", "直接/间接用水", "140 m² 住宅；月度", "蒸发式直接用水 \"about 40 m3/month … about 10% of the total annual water use\"；压缩式间接取水 \"up to 102 m3/month\" [直接设定]"],
    ["Naderi et al. (2020) J Build Eng\n10.1016/j.jobe.2020.101514（Consensus）", "电量、水量（未货币化）、室内 RH 舒适小时", "伊朗 4 气候区典型公寓；EnergyPlus 逐时", "\"PTAC … consumes 234%–265% more electricity than the DEC\"；风量加倍电耗降 \"43.4%–55.2%\" 但耗水增 \"20.5%–58.8%\" [直接设定]"],
    ["Khond (2011) AJSIR；Vaisi et al. (2023) Water-Energy Nexus\n10.5251/ajsir.2011.2.3.418.421；10.1016/j.wen.2023.11.002（Consensus）", "垫材耗水（L/min）；水 L/day、电 W", "印度实验 / 伊朗两年实验 + 城市外推", "木丝垫 \"0.24 Lit/min\"、椰棕 \"0.134\"、不锈钢网 \"0.066\"；改进样机耗水减 \"23.8 liters/day (about 56%)\" [直接设定]"],
    ["CLIMAS, Univ. Arizona（灰色文献）Tucson 模拟\n报告无 DOI；climas.arizona.edu", "月电费（$0.10/kWh）、现场+发电用水", "Tucson 2,000 ft² 住宅；5–9 月逐月", "蒸发冷却器 \"about 250 kWh a month\" vs 空调 \"about 850 kWh\"；用水 \"4,620 gallons a month … and 425\"；电费 \"$25 versus $85\" [直接设定]"],
  ], { fontSize: 10, colW: [3.5, 2.4, 2.6, 3.6] });
  L.addSummary(pres, s, "蒸发冷却器的水耗有实测基准（约 250 L/d，占户用水 15%）并被放到\"现场+发电间接用水\"的统一尺度，但单位在 L/min、L/hr、m³/月、gal/h 之间并存，且几乎没有研究把水折算成费用。");

  // (c-cont) evaporative LCC
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q3-c 蒸发冷却器成本（二）：工程 LCC 框架最完整，但尺度极小", { placeholder: "title" });
  L.addLitTable(pres, s, ["文献 / DOI（核实）", "成本组分", "时空精细度", "关键数字（原文）"], [
    ["Harby & Al-Amri (2019) Energy\n10.1016/j.energy.2019.06.031（Consensus）", "年电费节省、年水费、生命周期成本节省、回收期", "单机实验 + 多气候条件；年度", "\"savings in the overall energy cost is $21.6/year. The cost of water consumption is $ 1.82/year … payback … less than three years … life-cycle cost saving … 242 and $ 400\" [直接设定]"],
    ["Gupta et al. (2023) Int J Refrig\n10.1016/j.ijrefrig.2023.11.021（Consensus）", "初投资、电费、维护系数、寿命与利率、水（L/kWh）", "5.25 kW 分体机模型；制冷季逐月", "\"water consumption to energy saving ratio varies from 5.5 to 9.8 L/kWh\"；回收期 \"1.21 to 2.99 years\" [直接设定]"],
    ["Alsilbi et al. (2026) Int Commun Heat Mass；Kousar et al. (2021) J Build Eng\n10.1016/j.icheatmasstransfer.2026.111507；10.1016/j.jobe.2021.103466", "年电费、LCC 节省、回收期；4E 含利率 13%", "伊拉克单机实测 / 巴基斯坦实验；年度/月度", "年电费节省 \"about USD 20.45\"，LCC 节省 \"USD 220 and USD 365\"；回收期 \"1.3 years and 1.96 years\" [直接设定]"],
    ["Sohani, Sayyaadi (2018a,b) Energy Convers Manag\n10.1016/j.enconman.2017.12.042；10.1016/j.enconman.2018.07.008（Consensus）", "LCC、年耗水、COP；\"水电价比\"作为经济维度", "Köppen 四类气候代表城市 / 全球多种水电价比；年度", "LCC、年耗水、COP 改善 \"64.4, 86.4, and 1039.0%\" [直接设定]；水价重要性取决于地区"],
    ["Rao & Datta (2020) Appl Therm Eng；Chen et al. (2022) Front Built Environ；Krarti et al. (2023) J Build Eng\n10.1016/j.applthermaleng.2019.114813；10.3389/fbuil.2022.1032961；10.1016/j.jobe.2023.106344", "LCC、CO2、回收期；IEC 水耗 L/hr；国家存量 TWh", "印度 21 城 / 沙特多城 / 沙特全国存量；逐时→年", "IEC-DEC-DX 节能 \"up to 25%\"；IEC 水耗 \"4–12 L/hr\"，混合成本 \"15%–35% lower\"；沙特存量 \"51 TWh\"，回收期 \"less than one year\" [直接设定]"],
    ["印度蒸发冷却器购价：Pavanello & Sue Wing CESifo WP 12365；Prayas 2019；NSS 2020\n无 DOI", "购置价占收入比；拥有率", "印度全国 / 北方邦与马哈拉施特拉邦；2019–2020", "均价 \"between 3,000 and 15,000 rupees … about 2%-8% of annual household income in 2019\" [WP]；NSS 2020 空调 5%、空气冷却器 14% [转述]"],
  ], { fontSize: 10, colW: [3.5, 2.6, 2.5, 3.5] });
  L.addSummary(pres, s, "蒸发冷却器文献有完整的 LCC、回收期与利率设定，甚至把\"水电价比\"作为维度，但对象多为单机或单栋建筑，国家尺度仅沙特（Krarti 2023）与印度区级，购置价依赖工作论文与智库调查。");

  // (d) health-economic CBA
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q3-d 健康经济评价：成本对象是预警系统与\"机械制冷\"总称", { placeholder: "title" });
  L.addLitTable(pres, s, ["文献 / DOI（核实）", "评价对象与成本组分", "时空精细度", "关键数字（原文）"], [
    ["Ebi et al. (2004) BAMS（较旧）；Hunt et al. (2017) Clim Serv；Chiabai et al. (2018) MASGC\n10.1175/bams-85-8-1067；10.1016/j.cliser.2016.10.004；10.1007/s11027-017-9778-4", "热浪预警系统运行成本 vs VSL/VOLY 效益", "费城 / 伦敦·马德里·布拉格 / 马德里；城市级", "每预警日挽救 \"2.6 lives\"；\"no/low regret\"；BCR \"from 12 to 3700\"（随估值方案）[直接设定]"],
    ["Williams et al. (2021) ANZJPH；Takacs et al. (2025) npj Urban Sustain\n10.1111/1753-6405.13194；10.1038/s42949-025-00271-3（Consensus）", "预警激活成本；多措施（绿化、冷屋顶、工时）BCA", "南澳州一周激活 / 印度三城到 2050", "激活成本 \"AU$593,000\"，BCR \"2.0-3.3\"；预警 ROI \"50:1\"，绿化 BCR \"3:1\" [直接设定]；无单项设备"],
    ["Hyyrynen et al. (2025) Climatic Change\n10.1007/s10584-025-03913-8（Consensus）", "区域供冷接入 capex vs VSL", "芬兰南部城市；蒙特卡洛温度模拟", "\"costs are 38 200 – 416 000 €/life saved, and benefits exceed the costs by 1.8 to 18 times\" [直接设定]"],
    ["Sabater-Mezquita et al. (2026) Health Econ Rev（系统综述）\n10.1186/s13561-026-00840-x（Consensus）", "17 项热适应经济评价的综述", "2010 年起", "\"Mechanical cooling and air conditioning interventions also generally produced favourable results, although … sensitive to assumptions regarding discounting, targeting, and cost scope\"；无风扇/蒸发专项"],
    ["Barreca et al. (2016) J Polit Econ；Deschênes & Greenstone (2011) AEJ Applied；Deschênes (2022) NBER\n10.1086/684582；SSRN 10.2139/ssrn.995830；10.3386/w30282（Consensus）", "空调消费者剩余；能源支出作为适应成本；私人电费 vs 污染外部成本", "美国州级 1900–2004 / 县级年度面板", "消费者剩余 \"$85–$185 billion (2012 dollars)\"；能耗增 \"15% to 30% ($15 to $35 billion in 2006 dollars)\"；外部成本 \"one order of magnitude larger\" [直接设定]"],
  ], { fontSize: 10, colW: [3.9, 2.5, 2.2, 3.5] });
  L.addSummary(pres, s, "热健康经济评价的成本对象是预警系统、区域供冷或\"机械制冷\"总称；最新系统综述的 17 项研究中没有一项把风扇或蒸发冷却器作为独立干预做完整经济评价；制冷能源贫困研究（Torres 2024、Bienvenido-Huertas 2021）以收入门槛界定可负担性。");

  // (e) resolution matrix
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q3-e 成本参数的时空精细度：工程逐时与健康经济年度没有交集", { placeholder: "title" });
  L.addLitTable(pres, s, ["研究群", "空间尺度", "时间分辨率", "价格基年 / 贴现", "成本随什么变化", "风扇 / 蒸发单独参数"], [
    ["IEA 2018/2019/2023；Mastrucci 2019–2022", "全球 / 大区 / 格网 / 22 城", "年度至 2050（VDD）", "未见", "CDD、区域、收入×城乡", miss("否（风扇并入 10%）")],
    ["Pavanello 2021；Randazzo 2020；De Cian 2019/2025；Davis 2015/2021", "国家 × 家庭微观", "年度（调查年）", "2011 调查；2025 文含社会成本美元", "湿度校正 CDD、收入分位", miss("否")],
    ["Rode 2021；Carleton 2022", "全球 24,378 区域", "年度，贴现敏感", "美元（基年摘要未明）", "收入、气候", miss("否，不分技术")],
    ["Waite 2017；Jones 2023", "城市 / 家庭智能电表", "小时 → 年", "—", "W/°C/人；族裔收入", miss("否")],
    ["Malik 2022；Schiavon 2008；Hoyt 2015；Miller 2021", "国家格网 / 建筑模拟 / 实测", "逐日 / 年度 / 峰时段", "无货币", "舒适阈值、7 个 ASHRAE 气候区", part("风扇：GWh、W、%，无货币")],
    ["LBNL/Shah 2015；Phadke 2019；BEE/CLASP", "全球 / 印度国家均值", "年度（固定使用小时）", "美元/卢比，基年未见", "国家", ok("风扇 capex + 电费：是")],
    ["Karpiscak 1998；Pistochini 2011；Ponnamperuma 2025；Pirouz 2018", "城市 / 建筑原型 / 区域电网", "小时 / 日 / 月", "无货币", "区域电网结构", part("蒸发水耗：是，未货币化")],
    ["Harby 2019；Gupta 2023；Alsilbi 2026；Kousar 2021；Sohani 2018", "单机实验 / 气候区代表城市", "年度（Gupta 逐月）", "美元，基年未明；利率 13%（Kousar）", "多气候条件、水电价比", ok("蒸发 capex+电+水+LCC：是（水 $1.82/yr）")],
    ["Agarwal 2026；Krarti 2023", "印度 400+ 区 / 沙特全国存量", "年度", "2022 / —", "收入 × 湿度 / 气候", ok("蒸发 kWh/人、TWh：是")],
    ["Hunt 2017；Chiabai 2018；Williams 2021；Hyyrynen 2025；Sabater-Mezquita 2026", "城市 / 州 / 综述", "事件 / 年度", "当地货币、€", "VSL 估值方案", miss("否（预警系统、区域供冷）")],
  ], { fontSize: 10, colW: [3.1, 2.1, 1.7, 1.8, 1.8, 1.6] });
  L.addSummary(pres, s, "逐时分辨率只存在于工程模拟与电表研究，健康经济评价一律用年度或\"每次激活\"成本；没有任何研究把小时电价或峰值容量成本与风扇或蒸发冷却器结合，价格基年与贴现率也普遍不透明。");

  // Q3 synthesis
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SEC });
  s.addText("Q3 小结：三类技术的成本证据处于三种不同的\"成熟度\"", { placeholder: "title" });
  const cw = 3.9, gx = 0.2;
  L.addCard(pres, s, { x: 0.6, y: 1.3, w: cw, h: 3.0, title: "空调：参数全，但只在\"有/无\"维度", color: T.accent1, fontSize: 10.5, titleSize: 12.5, lines: [
    "电费支出 +35–42%（Randazzo 2020）、+36%（De Cian 2025）；消费者剩余 $85–185 bn（Barreca 2016，2012 美元）",
    "电网投资、碳社会成本、污染外部成本均有估计",
    "价格基年多数不透明；无与风扇/蒸发的替代弹性",
  ] });
  L.addCard(pres, s, { x: 0.6 + cw + gx, y: 1.3, w: cw, h: 3.0, title: "风扇：功率与百分比多，货币少", color: T.accent2, fontSize: 10.5, titleSize: 12.5, lines: [
    "功率 2–30 W（Miller 2021）、<10 W/人（Zhai 2013）、印度 70–90 W vs BLDC ~30 W",
    "节能 17–48%（Schiavon 2008）、空调使用率 −15%（He 2019）、76% GWh（Malik 2022）",
    "完整 CBA 仅 LBNL/Shah 2015 与 Knudsen 2023；零售价靠行业报道",
  ] });
  L.addCard(pres, s, { x: 0.6 + 2 * (cw + gx), y: 1.3, w: cw, h: 3.0, title: "蒸发冷却器：LCC 框架全，尺度小", color: T.accent3, fontSize: 10.5, titleSize: 12.5, lines: [
    "LCC、回收期（1.2–3 年）、利率、水电价比均有（Harby 2019；Gupta 2023；Sohani 2018）",
    "水耗 ~250 L/d = 户用水 15%（Karpiscak 1998），总体为空调 5–8 倍（Ponnamperuma 2025），货币化仅 $1.82/yr",
    "国家尺度仅 Krarti 2023、Agarwal 2026；购价来自工作论文",
  ] });
  L.addCard(pres, s, { x: 0.6, y: 4.5, w: 12.1, h: 1.5, title: "跨技术共同缺口", color: T.accent5, fontSize: 10.5, titleSize: 12.5, lines: [
    "维护/垫片更换、安装、健康联带成本（湿度、霉菌、噪声）在三类技术中都未入账；小时电价与峰值容量成本从未与风扇/蒸发冷却器结合。",
    "没有按\"气候区 × 收入\"统一口径的三技术 capex + 运行 + 水费 + 维护成本曲线，健康经济 CBA 也从未把风扇或蒸发冷却器当作独立干预。",
  ] });
  L.addSummary(pres, s, "空调成本证据\"全而粗\"、风扇\"多而不货币化\"、蒸发冷却\"细而小尺度\"，三者没有统一口径，使成本-收益替代分析缺乏可比的成本输入。");
};
