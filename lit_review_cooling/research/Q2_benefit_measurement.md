# Q2：三类降温措施（空调 / 电风扇 / 蒸发冷却）的健康与降温收益如何度量、如何归因

> 检索日期：2026-11-01。核实规则：DOI 仅在 Consensus 结果或出版商/PubMed/机构库页面逐字出现时标“已核实”；否则标“DOI未找到”。效应量一律按摘要/页面原文抄录；[直接估计] = 该文献自行估计，[引用自: X] = 该文献转引。
> 工具说明：Consensus 完成 9 次独立检索后触发月度配额上限（第 10–12 次检索被拒），其余条目改用 WebSearch（出版商/机构库页面）核实；pubmed.ncbi.nlm.nih.gov 与 mja.com.au 在本会话中无法直接抓取（WebFetch DNS 被拦），只能依赖搜索结果页面摘录。

---

## (a) 空调（AC）的流行病学归因：AC 普及率 / AC 拥有作为效应修饰因子

### a1. Barreca, Clay, Deschênes, Greenstone & Shapiro (2016). Adapting to Climate Change: The Remarkable Decline in the US Temperature-Mortality Relationship over the Twentieth Century. *Journal of Political Economy*.
- DOI: 10.1086/684582 | 核实: 已核实(Consensus)
- 收益度量: 日均温 >80°F 的日子对月度死亡率的边际影响（州×月面板，1900–2004）；AC 带来的消费者剩余（美元）。
- 归因方法: 计量经济学——用州级住宅 AC 普及率与高温日交互项解释高温–死亡率关系的时间衰减；对照电力普及、医疗可及性等其他候选解释（Dubin–McFadden 离散–连续模型做福利估值）。
- 关键数字: >80°F 日的死亡影响下降 75%，几乎全部发生于 1960 年后 [直接估计]；住宅 AC 扩散“解释了几乎全部”高温日死亡的下降 [直接估计]；AC 引入的美国消费者剩余现值 850–1850 亿美元（2012 美元）[直接估计]。工作论文版：若维持 1960 年前的关系，每年多 ~14,000 例死亡 [直接估计, SSRN 10.2139/ssrn.2586418]。
- 技术覆盖: AC（仅）
- 一句话: 经济学“金标准”式归因，把 20 世纪美国高温死亡率下降几乎整体归于住宅空调，但不提供风扇/蒸发冷却的平行估计。

### a2. Sera, Hashizume, Honda, Lavigne, Schwartz, Zanobetti, Tobias, Iñiguez, Vicedo-Cabrera, Blangiardo, Armstrong & Gasparrini (2020). Air Conditioning and Heat-related Mortality: A Multi-country Longitudinal Study. *Epidemiology*.
- DOI: 10.1097/ede.0000000000001241 | 核实: 已核实(Consensus)
- 收益度量: 高温归因超额死亡分数（%）；高温–死亡 RR 随 AC 普及率变化。
- 归因方法: 两阶段时间序列（quasi-Poisson + DLNM）→ 多层多变量时空 meta 回归，AC 普及率作为纵向效应修饰因子；在“观测 AC”与“固定 AC”反事实下计算归因分数（311 个城市，加拿大/日本/西班牙/美国，1972–2009）。
- 关键数字: 热超额死亡从 1.40%→0.80%（加拿大）、3.57%→1.10%（日本）、3.54%→2.78%（西班牙）、1.70%→0.53%（美国）[直接估计]；AC 增长仅解释其中 16.7%、20.0%、14.3%、16.7% [直接估计]。会议版 (ISEE 2018, DOI 10.1289/isesisee.2018.o04.01.11, 已核实 Consensus)：AC 普及 40%→70% 时 RR(99th vs MMT) 日本 1.114→1.102，美国 1.100→1.067 [直接估计]。
- 技术覆盖: AC
- 一句话: Gasparrini 型两阶段模型的代表作，结论与 Barreca 相反——AC 只解释约 1/6–1/5 的脆弱性下降，其他因素同等或更重要。

### a3. Bouchama, Dehbi, Mohamed, Matthies, Shoukri & Menne (2007). Prognostic factors in heat wave related deaths: a meta-analysis. *Archives of Internal Medicine*. 【2011 年前的经典文献】
- DOI: 10.1001/archinte.167.20.ira70009 | 核实: 已核实(Consensus)
- 收益度量: 热浪期死亡的合并 OR。
- 归因方法: 6 项病例对照研究（1065 例热浪死亡）的 meta 分析，暴露=家中有效空调、使用风扇、去凉爽场所等个人行为。
- 关键数字: 家中有效 AC OR 0.23 (95% CI 0.1–0.6)；去凉爽环境 OR 0.34 (0.2–0.5)；增加社交 OR 0.40 (0.2–0.8)；额外淋浴/洗澡 OR 0.32 (0.1–1.1)；使用风扇 OR 0.60 (0.4–1.1)，仅为“趋势” [均为直接估计（合并）]。
- 技术覆盖: AC；fans（唯一含风扇死亡 OR 的合并估计）
- 一句话: 全文献中唯一给出风扇死亡 OR 的 meta 分析，且置信区间跨 1，是“风扇无死亡效应证据”的根源。

### a4. Semenza, Rubin, Falter, Selanikio, Flanders, Howe & Wilhelm (1996). Heat-related deaths during the July 1995 heat wave in Chicago. *NEJM*. 【1996 经典】
- DOI: 10.1056/nejm199607113350203 | 核实: 已核实(Consensus)
- 收益度量: 热相关死亡 OR。
- 归因方法: 芝加哥 1995 热浪 339 例/339 匹配对照的病例对照研究。
- 关键数字: 有效空调 OR 0.3（多变量）；可获交通 OR 0.3；卧床 OR 8.2；独居 OR 2.3 [直接估计]。摘要未报告风扇 OR（风扇数值仅见于 Bouchama 合并）。
- 技术覆盖: AC
- 一句话: 病例对照“AC 保护”证据的原点，被后续所有 meta 分析引用。

### a5. Naughton, Henderson, Mirabelli, Kaiser, Wilhelm, Kieszak, Rubin & McGeehin (2002). Heat-related mortality during a 1999 heat wave in Chicago. *Am J Prev Med*. 【2002】
- DOI: 10.1016/s0749-3797(02)00421-x | 核实: 已核实(Consensus)
- 收益度量: 热相关死亡 OR。
- 归因方法: 63 例/77 匹配对照病例对照。
- 关键数字: 有效空调 OR 0.2 (95% CI 0.1–0.7)，“最强保护因素”；独居 OR 8.1；不每日出门 OR 5.8 [直接估计]。
- 技术覆盖: AC
- 一句话: 再次确认空调是热浪死亡最强保护因子，样本小、CI 宽。

### a6. Zhang, Nitschke, Krackowizer, Dear, Pisaniello, Weinstein, Tucker, Shakib & Bi (2016). Risk factors for deaths during the 2009 heat wave in Adelaide, Australia: a matched case-control study. *Int J Biometeorology*.
- DOI: 10.1007/s00484-016-1189-9 | 核实: 已核实(Consensus)
- 收益度量: 调整 OR。
- 归因方法: 82 例死亡/164 匹配社区对照，条件 logistic 回归。
- 关键数字: 卧室有空调 AOR 0.004 (95% CI 0.00006–0.28)；每周社交>1 次 AOR 0.011；独居 AOR 42.31 [直接估计]。
- 技术覆盖: AC
- 一句话: 澳大利亚病例对照，AC 保护效应极大但 CI 极宽，典型小样本问题。

### a7. Rogot, Sorlie & Backlund (1992). Air-conditioning and mortality in hot weather. *Am J Epidemiology*. 【1992，历史对照】
- DOI: 10.1093/oxfordjournals.aje.a116413 | 核实: 已核实(Consensus)
- 收益度量: 高温月份死亡 RR（有/无 AC 家庭）。
- 归因方法: 72,740 人队列（NDI 随访 1980–85），按州×AC 类型×月均温分层，Mantel–Haenszel。
- 关键数字: 中央空调 vs 无 RR 0.58（死亡率低 42%）；房间空调 vs 无 OR 0.96（无显著收益）[直接估计]。
- 技术覆盖: AC（区分中央 vs 房间）
- 一句话: 最早的队列证据，提示“中央 vs 窗机”差异，这一区分在 O'Neill 2005 中再次出现。

### a8. O'Neill, Zanobetti & Schwartz (2005). Disparities by race in heat-related mortality in four US cities: The role of air conditioning prevalence. *J Urban Health*.
- DOI: 10.1093/jurban/jti043 | 核实: 已核实(Consensus)
- 收益度量: 29°C vs 15°C 时死亡率的百分比变化，按种族分层。
- 归因方法: 城市×种族特异 Poisson 时间序列 → 二阶段把效应回归于种族特异 AC 普及率。
- 关键数字: 黑人家庭中央 AC 普及率不足白人一半；中央 AC 普及率可解释部分种族差异，房间 AC 不能 [直接估计，摘要无具体数值]。
- 技术覆盖: AC
- 一句话: AC 普及率作为“生态效应修饰因子”的早期范式，并指出设备类型（中央/房间）影响归因。

### a9. Ostro, Rauch, Green, Malig & Basu (2010). The Effects of Temperature and Use of Air Conditioning on Hospitalizations. *Am J Epidemiology* 172(9):1053–1061.
- DOI: 10.1093/aje/kwq231 | 核实: 已核实(WebSearch: https://escholarship.org/uc/item/3pp9r4wh ; https://scilit.net/publications/915149b792a0d6a745274480aafd774b)
- 收益度量: 住院（多病因）与气温关联的减弱幅度。
- 归因方法: 加州 1999–2005 住院时间序列；邮编级 AC 拥有/使用率作为效应修饰因子，并控制家庭收入等 SES。
- 关键数字: “AC 拥有与使用降低了温度对住院的效应，即使控制收入与其他社会经济因素后仍成立” [直接估计；搜索页面未给出点估计值]。
- 技术覆盖: AC
- 一句话: 把 AC 效应修饰从死亡扩展到住院，并首次区分“拥有”与“使用”。

### a10. Gronlund, Zanobetti, Wellenius, Schwartz & O'Neill (2016). Vulnerability to renal, heat and respiratory hospitalizations during extreme heat among U.S. elderly. *Climatic Change* 136(3):631–645.
- DOI: 10.1007/s10584-016-1638-9 | 核实: 已核实(WebSearch: https://pmc.ncbi.nlm.nih.gov/articles/PMC4956383 ; https://stacks.cdc.gov/view/cdc/42137)
- 收益度量: 极端高温日 vs 非高温日 ≥65 岁肾脏/热病/呼吸系统住院的增幅。
- 归因方法: 109 个美国城市、8,200 个邮编（1992–2006），社区 AC 普及率（1999 年数据）作为效应修饰因子。
- 关键数字: AC 普及率低的城市极端高温–住院关联更强 [直接估计]；老旧住宅比例高的邮编增幅 15% (95% CI 11–19%) vs 9% (6–12%) [直接估计]。
- 技术覆盖: AC
- 一句话: Gronlund 系列将 AC 普及率与住房年龄同时作为脆弱性修饰因子，收益以住院增幅差表示。

### a11. Bobb, Peng, Bell & Dominici (2014). Heat-Related Mortality and Adaptation to Heat in the United States. *Environmental Health Perspectives*.
- DOI: 10.1289/ehp.1307392 | 核实: 已核实(Consensus)
- 收益度量: 每升高 10°F 的归因死亡数（每 1000 例死亡）。
- 归因方法: 105 城市 1987–2005，时变系数回归 + 贝叶斯层级模型；城市 AC 增幅作为解释变量。
- 关键数字: 归因死亡 51 (95% PI 42–61)→19 (12–27) [直接估计]；“未发现 AC 增幅更大的城市下降更多的统计显著证据” [直接估计]。
- 技术覆盖: AC（阴性结果）
- 一句话: 重要的阴性结果——适应确实发生，但无法在城市层面归因于 AC。

### a12. Nordio, Zanobetti, Colicino, Kloog & Schwartz (2015). Changing patterns of the temperature-mortality association by time and location in the US, and implications for climate change. *Environment International*.
- DOI: 10.1016/j.envint.2015.04.009 | 核实: 已核实(Consensus)
- 收益度量: 27°C 日的超额死亡率（%）。
- 归因方法: 211 城市×6 个 7 年期，B 样条 + meta 平滑 + meta 回归，AC 使用率为预测变量。
- 关键数字: 27°C 的超额死亡从 10.6% 降至 0.9% [直接估计]；热效应“显著受夏季均温与 AC 使用率影响” [直接估计]。
- 技术覆盖: AC
- 一句话: 支持 AC 作为效应修饰因子，并建议在气候情景中用 AC 使用率预测未来风险。

### a13. Achebak, Petetin, Quijal-Zamorano, Bowdalo, Pérez García-Pando & Ballester (2023). Drivers of the time-varying heat-cold-mortality association in Spain: A longitudinal observational study. *Environment International*.
- DOI: 10.1016/j.envint.2023.108284 | 核实: 已核实(Consensus)
- 收益度量: 热/极端热死亡下降中可归因于 AC 的份额（%）。
- 归因方法: 48 省 1980–2018，DLNM → 多层时空 meta 回归，14 项情境指标（含 AC、供暖、老龄化等）。
- 关键数字: AC 解释 1989–93 到 2009–13 热（极端热）死亡下降的 28.6%（31.5%）；供暖解释冷死亡下降的 38.3%（50.8%）[直接估计]。
- 技术覆盖: AC
- 一句话: Sera 方法在西班牙的延伸，给出比 Sera 更高的 AC 归因份额（~29%）。

### a14. Chua, Ng, Madaniyazi, Seposo, Salazar, Huber & Hashizume (2023). Net impact of air conditioning on heat-related mortality in Japanese cities. *Environment International*.
- DOI: 10.1016/j.envint.2023.108310 | 核实: 已核实(Consensus)
- 收益度量: AC 使用可避免的热死亡比例（%）减去 AC 排热导致的额外死亡。
- 归因方法: WRF+BEP/BEM 城市气候模拟 ×“有/无 AC”两套两阶段风险函数 → 避免死亡与不可避免死亡（7 城市，8 月 2000–2010 及 3°C 变暖情景）。
- 关键数字: AC 可避免 36–47% 的热死亡 [直接估计]；AC 排热使城市升温 0.046°C（现在）至 0.181°C（+3°C），归因 3.1–3.5% 热死亡 [直接估计]。
- 技术覆盖: AC
- 一句话: 第一篇同时量化 AC “保护”与“外部性排热”的净效应研究。

### a15. Katz et al. (2025). Air Conditioning in Nursing Homes and Mortality During Extreme Heat. *JAMA Internal Medicine*.
- DOI: 10.1001/jamainternmed.2025.6595 | 核实: 已核实(Consensus)
- 收益度量: 极端高温日全因死亡 OR（有/无 AC 养老院）。
- 归因方法: 安大略 2010–2023 病例交叉设计（73,578 例死亡），条件 logistic；设施级 AC 状态分层。
- 关键数字: 无 AC 院 OR 1.11 (95% CI 1.06–1.16)；有 AC 院 OR 1.03 (0.98–1.07)；相对 OR 1.08 (1.01–1.15)；滞后效应持续 3 天 [直接估计]。
- 技术覆盖: AC
- 一句话: 机构级 AC 的准实验证据，收益表现为高温日死亡 OR 从显著变为不显著。

### a16. Skarha, Spangler, Dosa, Rich, Savitz & Zanobetti (2022). Provision of Air Conditioning and Heat-Related Mortality in Texas Prisons. *JAMA Network Open*.
- DOI: 10.1001/jamanetworkopen.2022.39849 | 核实: 已核实(Consensus)
- 收益度量: 热指数每升 1°F（>85°F）及极端高温日的死亡风险增幅；归因死亡数。
- 归因方法: 2001–2019 病例交叉，按监狱 AC 状态分层比较。
- 关键数字: 无 AC 监狱：每 +1°F 死亡 +0.7% (0.1–1.3%)，极端高温日 +15.1% (1.3–30.8%)，约 13%/271 例死亡归因于极端热；有 AC 监狱 −0.6% (−1.6%–0.5%)；组间差异 P=.05 [直接估计]。
- 技术覆盖: AC
- 一句话: “每年 14 例热相关死亡 vs 0 例”的对照性机构研究。

### a17. Romitti, Sue Wing, Spangler & Wellenius (2025). The effects of residential air conditioning and social vulnerability on heat-related hospitalizations in California. *Environment International*.
- DOI: 10.1016/j.envint.2025.109659 | 核实: 已核实(Consensus)
- 收益度量: 极端高温–住院 RR（低 vs 高 AC 普及率 ZCTA）。
- 归因方法: 1,582 个邮编区 AC 拥有率估计 + 时空分层病例交叉（2012–2019 暖季）。
- 关键数字: 全因住院 RR 1.04 (1.03–1.05) 低 AC vs 1.01 (1.00–1.02) 高 AC；热病住院 RR 1.42 (1.32–1.52) vs 1.21 (1.11–1.32) [直接估计]。
- 技术覆盖: AC
- 一句话: 高分辨率 AC 普及率显示 AC “降低但不消除”高温住院风险。

### a18. Chen, Zhou, Chen, Ma, Liu, Huang, Bi & Kinney (2016). Urbanization Level and Vulnerability to Heat-Related Mortality in Jiangsu Province, China. *Environmental Health Perspectives* 124(12):1863–1869.
- DOI: 10.1289/EHP204 | 核实: 已核实(WebSearch: https://pubmed.ncbi.nlm.nih.gov/27152420/ ; https://zendy.io/pdf-viewer/10.1289/ehp204)
- 收益度量: 99th vs 75th 百分位气温的死亡 RR，县级 meta 回归。
- 归因方法: 102 县 2009–2013，两阶段；县级 AC 普及率、教育、老龄比例为效应修饰因子。
- 关键数字: RR 1.43（欠城市化县）vs 1.26（更城市化县）；更高的教育水平与 AC 普及率与更低风险显著相关 [直接估计]。
- 技术覆盖: AC
- 一句话: 中国省级证据：AC 普及率作为生态层面保护因子，但无 AC 份额估计。

### a19. Ji et al. (2026). The shift of heat-related respiratory mortality from 2005 to 2019 in China and its socioeconomic determinants. *Climate Risk Management*.
- DOI: 10.1016/j.crm.2026.100789 | 核实: 已核实(Consensus)
- 收益度量: 极端热的超额风险 ER（%）与归因分数 AF（%）的时间变化。
- 归因方法: 2,219 区县呼吸死亡 2005–2019；MMT 漂移 + 社会经济驱动因素排序。
- 关键数字: ER 9.46% (4.81–14.32)→3.51% (2.12–4.92)，降 62.88%；AF 1.26%→0.38%，降 69.84%；城市化率、AC 普及率、绿地为前三驱动因素 [直接估计]。
- 技术覆盖: AC
- 一句话: 中国全国层面，AC 普及率是热死亡率下降的前三驱动因素之一。

### a20. Maksimenko (2026). Temperature exposures and mortality: evidence from Russia. *Population and Environment*.
- DOI: 10.1007/s11111-026-00533-x | 核实: 已核实(Consensus)
- 收益度量: 热 RR 的区域异质性。
- 归因方法: 两阶段 meta 分析，家庭调查微数据得到区域 AC 普及率作为预测因子。
- 关键数字: 合并热 RR 1.08 (1.07–1.09)，冷 RR 1.25；AC 普及率更高的地区热风险更低 [直接估计]。
- 技术覆盖: AC
- 一句话: 中纬度（俄罗斯）证据，AC 作为“有效但分布不均”的适应手段。

### a21. Deschênes & Greenstone (2011). Climate Change, Mortality, and Adaptation: Evidence from Annual Fluctuations in Weather in the US. *AEJ: Applied Economics* 3(4):152–185.
- DOI: 10.1257/app.3.4.152 | 核实: 已核实(WebSearch: https://swlb1.aeaweb.org/articles/pdf/doi/10.1257/app.3.4.152 ; https://econpapers.repec.org/RePEc:aea:aejapp:v:3:y:2011:i:4:p:152-85)；工作论文版 DOI 10.2139/ssrn.995830 已核实(Consensus)
- 收益度量: 年死亡率变化；住宅能耗（AC 使用）作为“补偿性反应”的支出。
- 归因方法: 县级年际天气随机变动的面板回归；把能源消费增加解释为居民为保护健康所购买的适应（AC），但不直接把死亡减少归因于 AC。
- 关键数字: 期末死亡率 +3%，住宅能耗 +11%（期刊版）[直接估计]；工作论文版：能耗 +15%–30%（150–350 亿美元 2006 美元）[直接估计]。
- 技术覆盖: AC（隐含）
- 一句话: 把 AC 收益用“能耗支出”间接度量的 Becker–Grossman 健康生产框架原型。

### a22. Heutel, Miller & Molitor (2021, 在线 2017). Adaptation and the Mortality Effects of Temperature Across U.S. Climate Regions. *Review of Economics and Statistics*.
- DOI: 10.1162/rest_a_00936 | 核实: 已核实(Consensus)
- 收益度量: Medicare 22 年数据的日温度–死亡率，按气候区异质性。
- 归因方法: 用“热地区热日致死性更低”作为长期适应（含 AC 等）的揭示性证据，再投射到世纪末。
- 关键数字: 允许地区适应“显著降低”气候变化死亡估计 [直接估计；摘要无数值]。
- 技术覆盖: AC（隐含，未分设备）
- 一句话: 经济学上把适应收益当作“已实现的区域差异”，不拆分到具体设备。

### a23. Deschênes (2022). The Impact of Climate Change on Mortality in the United States: Benefits and Costs of Adaptation. *NBER WP 30282*.
- DOI: 10.3386/w30282 | 核实: 已核实(Consensus)
- 收益度量: 热死亡风险持续下降（至 2019）；用电量作为适应服务消费的代理；外部成本。
- 归因方法: 延伸 Barreca 面板；高温对住宅用电的响应作为适应消费；外部成本（污染）核算。
- 关键数字: 适应的外部成本比电费私人成本“高一个数量级” [直接估计]。
- 技术覆盖: AC
- 一句话: 把“电力代理”收益度量与外部成本并置，是成本–收益替代分析的直接素材。

### a24. Arbuthnott, Hajat, Heaviside & Vardoulakis (2016). Changes in population susceptibility to heat and cold over time: assessing adaptation to climate change. *Environmental Health*.
- DOI: 10.1186/s12940-016-0102-7 | 核实: 已核实(Consensus)
- 收益度量: 系统综述——热死亡易感性随时间下降的研究。
- 归因方法: 综述 11 项时序研究 + 6 项热浪比较。
- 关键数字: 10/11 项研究发现易感性下降；“仅 2 项试图定量归因于具体适应措施，且未发现与 AC 普及率显著关联” [直接估计（综述结论）]。
- 技术覆盖: AC
- 一句话: 综述指出：适应已发生，但能把它归因到 AC 的研究极少且多为阴性。

### a25. Gallo et al. (2024). Heat-related mortality in Europe during 2023 and the role of adaptation in protecting health. *Nature Medicine*.
- DOI: 10.1038/s41591-024-03186-1 | 核实: 已核实(Consensus)
- 收益度量: 若无 2000 年以来“社会适应”，2023 年热死亡会高出多少。
- 归因方法: 823 区域流行病模型，比较固定早期暴露–反应曲线的反事实；不拆分 AC。
- 关键数字: 2023 年 47,690 (28,853–66,525) 例热死亡；无适应则 +80.0%（80+ 岁 +100.7%）[直接估计]。
- 技术覆盖: 未分技术（总体适应）
- 一句话: “适应总收益”的度量范例，但不能分摊到 AC/风扇/蒸发冷却。

### a26. Lenzer, Rupprecht, Hoffmann, Hoffmann & Liebers (2020). Health effects of heating, ventilation and air conditioning on hospital patients: a scoping review. *BMC Public Health*.
- DOI: 10.1186/s12889-020-09358-1 | 核实: 已核实(Consensus)
- 收益度量: 住院患者健康结局（综述）。
- 归因方法: 范围综述。
- 关键数字: “安装 AC 被证明可改善经历高温的住院患者死亡率”，但中介因素与结局大多未知 [引用自: 综述纳入文献，摘要未列具体值]。
- 技术覆盖: AC
- 一句话: 医院场景 AC 的健康证据被确认存在但零散。

---

## (b) 电风扇：无死亡证据、病例对照 OR、生理学替代终点、“风扇优先”框架

### b1. Gupta, Carmichael, Simpson, Clarke, Allen, Gao, Chan & Murray (2012). Electric fans for reducing adverse health impacts in heatwaves. *Cochrane Database of Systematic Reviews* CD009888.
- DOI: 10.1002/14651858.CD009888.pub2 | 核实: 已核实(WebSearch: https://cochranelibrary.com/cdsr/doi/10.1002/14651858.CD009888/information ; https://www.cochrane.org/evidence/CD009888_electric-fans-reducing-health-effects-heatwaves)；J Evidence-Based Medicine 转载版 DOI 10.1111/j.1756-5391.2012.01196_1.x 已核实(Consensus)
- 收益度量: 死亡/发病（计划纳入 RCT、间断时间序列、前后对照）。
- 归因方法: 系统综述——未检出任何 RCT 或前瞻性对照；仅回顾性病例对照，结果方向不一。
- 关键数字: “不支持也不反驳热浪期间使用电风扇” [直接估计（综述结论）]；无合并效应量。
- 技术覆盖: fans
- 一句话: 风扇死亡/发病证据的“真空声明”，成为 Jay 团队 2014 年后生理学路线的出发点。

### b2. Jay, Cramer, Ravanelli & Hodder (2014). Should electric fans be used during a heat wave? *Applied Ergonomics*.
- DOI: 10.1016/j.apergo.2014.07.013 | 核实: 已核实(Consensus)
- 收益度量: 热平衡模型的临界环境极限（可代偿温度、心血管应激起点）、预测出汗率。
- 归因方法: 概念性人体热平衡模型（E_req / E_max），假设性比较有/无风扇。
- 关键数字: 风扇把两类临界极限提高约 3–4°C（与 RH 无关，青年与老人）；边际收益可至 51.1°C@10%RH（青年）/48.1°C@10%RH（老人）；>40°C 且 <10%RH 时出汗仅多 ~20–30 mL/h [直接估计（模型）]。
- 技术覆盖: fans
- 一句话: 风扇“收益”第一次用生物物理模型阈值表达，而非死亡率。

### b3. Ravanelli, Hodder, Havenith & Jay (2015). Heart rate and body temperature responses to extreme heat and humidity with and without electric fans. *JAMA*.
- DOI: 10.1001/jama.2015.153 | 核实: 已核实(Consensus)
- 收益度量: 心率与核心温度开始快速上升的“临界湿度”。
- 归因方法: 气候舱内青年受试者，固定气温、阶梯升湿，有/无风扇对照。
- 关键数字: 摘要未给数值（正文：风扇在 42°C 下延后 HR/Tcore 上升；见 Ravanelli 2017 IJB DOI 10.1007/s00484-016-1213-0 已核实(Consensus)，36°C 时 Emax 343 vs 153 W/m²，42°C 时 376 vs 161 W/m² [直接估计]）。
- 技术覆盖: fans
- 一句话: 奠定“风扇提高蒸发效率、延迟心血管应激”的实验范式。

### b4. Gagnon, Romero, Cramer, Jay & Crandall (2016). Cardiac and Thermal Strain of Elderly Adults Exposed to Extreme Heat and Humidity With and Without Electric Fan Use. *JAMA*；Gagnon et al. (2017). Age Modulates Physiological Responses during Fan Use under Extreme Heat and Humidity. *MSSE*.
- DOI: 10.1001/jama.2016.10550；10.1249/mss.0000000000001348 | 核实: 两者均已核实(Consensus)
- 收益度量: HR、核心温度、皮温、全身出汗量（42°C，RH 30→70%）。
- 归因方法: 随机交叉气候舱实验，9 青年 vs 9 老年。
- 关键数字: 老年：风扇使 HR +5 bpm (0–10)、Tcore +0.20°C (0.00–0.41)、Tsk +0.47°C；青年：HR −2 bpm (−8–3)、Tcore +0.05°C [直接估计]。
- 技术覆盖: fans
- 一句话: 首次显示风扇在极端湿热下对老年人反而增加生理应激。

### b5. Morris, English, Hospers, Capon & Jay (2019). The Effects of Electric Fan Use Under Differing Resting Heat Index Conditions: A Clinical Trial. *Annals of Internal Medicine*.
- DOI: 10.7326/m19-0512 | 核实: 已核实(Consensus)
- 收益度量: 直肠温、HR、速率–压力积、全身出汗率、热舒适 VAS。
- 归因方法: 12 名青年男性随机交叉，2 小时，极热干（HI 46°C）vs 热湿（HI 56°C），风扇 2.0 m/s。
- 关键数字: 热湿条件下风扇改善核心温度、心血管应激、舒适（除出汗率）；极热干条件下所有指标恶化；直肠温差在 VHD 超过 0.3°C 的临床意义阈值 [直接估计]。
- 技术覆盖: fans
- 一句话: 揭示 Heat Index 不适合作为风扇指引阈值，收益取决于温湿组合。

### b6. Morris, Chaseling, English, Gruss, Maideen, Capon & Jay (2021). Electric fan use for cooling during hot weather: a biophysical modelling study. *Lancet Planetary Health*.
- DOI: 10.1016/s2542-5196(21)00136-4 | 核实: 已核实(Consensus)
- 收益度量: 风扇“有益天数”占 31 天热月的比例；湿度依赖的温度阈值。
- 归因方法: 生物物理模型 + 108 城市 2007–2019 小时气象数据。
- 关键数字: 风扇在 30.0/31 天（96.6%，青年）与 29.4/31（94.9%，老人）有益；简化阈值 <39.0°C（青年）、<38.0°C（老人）、<37.0°C（服抗胆碱药老人）[直接估计（模型）]；WHO 35°C 规则下仅 27.2 天（87.7%）。
- 技术覆盖: fans
- 一句话: 风扇收益用“可安全使用的天数”度量，推动 2021 年后多国指引上调阈值至 ~40°C。

### b7. Tartarini, Schiavon, Jay, Arens & Huizenga (2021). Application of Gagge's energy balance model to determine humidity-dependent temperature thresholds for healthy adults using electric fans during heatwaves. *Building and Environment*.
- DOI: 10.1016/j.buildenv.2021.108437 | 核实: 已核实(Consensus)
- 收益度量: 预期出现热应激的临界操作温度。
- 归因方法: Gagge 两节点能量平衡模型 + 115 城市 1990–2014 极端事件回溯。
- 关键数字: 0.8 m/s 风速在 RH>22% 时平均提高临界操作温度 14°C；115 城市中 93 个风扇有益 [直接估计（模型）]。
- 技术覆盖: fans
- 一句话: 建筑环境学界的平行模型，结论与 Jay 团队一致。

### b8. Meade, Notley, Akerman, McCormick, King, Sigal & Kenny (2024). A critical review of the effectiveness of electric fans as a personal cooling intervention in hot weather and heatwaves. *Lancet Planetary Health*.
- DOI: 10.1016/s2542-5196(24)00030-5 | 核实: 已核实(Consensus)
- 收益度量: 核心温度降幅是否“有意义”。
- 归因方法: 对 2021 年后支持“40°C 以下可用风扇”所引用报告的批判性再分析。
- 关键数字: 风扇虽提高汗液蒸发，但在气温 >35°C 时“不足以产生有意义的核心温度下降” [直接估计（综述判断）]；建议对 ≥65 岁继续维持 35°C 以上禁用，并把 AC 或蒸发冷却器列为环境降温替代。
- 技术覆盖: fans；提及 evaporative coolers 作为替代
- 一句话: 风扇收益争论的反方核心文献，强调核心温度而非舒适才是健康终点。

### b9. O'Connor et al. (2024). Effect of Electric Fans on Body Core Temperature in Older Adults Exposed to Extreme Indoor Heat. *JAMA*.
- DOI: 10.1001/jama.2024.19457 | 核实: 已核实(Consensus)；数值来源 https://jamanetwork.com/journals/jama/fullarticle/2825091 (WebSearch)
- 收益度量: 8 小时暴露峰值直肠温（36°C、45%RH）。
- 归因方法: 18 名 65–85 岁随机交叉，无风扇 / 2 m/s / 4 m/s。
- 关键数字: 三条件峰值 Tcore 均为 38.3°C；2 m/s 差值 −0.1°C (95% CI −0.2–0.0)，4 m/s 0°C (−0.1–0.1)，均不显著；预设最小临床意义 ≥0.2°C [直接估计]。
- 技术覆盖: fans
- 一句话: 老年人在 36°C 室内风扇对核心温度无临床意义影响，直接支撑 Meade 批评。

### b10. O'Connor et al. (2025). Effect of Ceiling Fans on Core Temperature in Bed-Resting Older Adults Exposed to Indoor Overheating. *J Am Geriatrics Society*.
- DOI: 10.1111/jgs.70109 | 核实: 已核实(Consensus)
- 收益度量: 峰值核心温度、HR、热不适（31°C，45%RH，8 h）。
- 归因方法: 20 名老年（中位 71 岁）随机交叉，吊扇 0 vs ~1.5 m/s。
- 关键数字: 峰值 Tcore 降低 0.2°C (95% CI 0.1–0.3)：37.6 vs 37.8°C；HR、不适亦显著降低，但“未完全消除应激” [直接估计]。
- 技术覆盖: fans
- 一句话: 在较温和的 31°C 下吊扇有小但显著的核心温度收益，被作者归入“fan-first + 环境降温”组合框架。

### b11. Lee et al. (2025). Effect of pedestal fan use on serum stress biomarkers in older adults exposed to simulated daylong indoor overheating. *Physiological Reports*.
- DOI: 10.14814/phy2.70390 | 核实: 已核实(Consensus)
- 收益度量: 肠损伤/免疫/肾缺血/炎症生物标志物（IFABP、LBP、IL-6、NGAL 等）+ Tcore/HR。
- 归因方法: 18 名老年 3 次随机 8 h 暴露（36°C/45%RH），0/2/4 m/s。
- 关键数字: 所有条件末期 Tcore 升高 ~1.0°C；IFABP +364 pg/mL、LBP +3.06 ng/mL，风扇与对照无差异（p≥0.15）[直接估计]。
- 技术覆盖: fans
- 一句话: 把风扇收益终点延伸到血清应激标志物，结果仍为阴性。

### b12. Mihalcin, Barrett, Wells, Ravanelli et al. (2025). Examining the Physiological Strain with Electric Fans During High Indoor Heat Stress. *Building and Environment*.
- DOI: 10.1016/j.buildenv.2025.113261 | 核实: 已核实(Consensus)
- 收益度量: HR、Tcore、皮温、皮肤血流、全身出汗率，随气温 38→47°C 线性上升。
- 归因方法: 10 名青年随机交叉，风扇 ~5.5 m/s vs 静止空气。
- 关键数字: HR 与 Tcore 分别在 ≥44°C、≥45°C 时风扇组显著更高；结论阈值 >43°C；43°C 时补液 ~250 mL/h 可抵消脱水 [直接估计]。
- 技术覆盖: fans
- 一句话: 给出青年健康人风扇“转为有害”的上限（~43°C），比多国指引高 3–11°C。

### b13. McKenna, Cottle, Wolf, Kenney et al. (2025). Evaluating low energy cooling strategies on thermal and cardiac strain in older adults exposed to very hot-dry heat with accompanying activities of daily living. *J Applied Physiology*.
- DOI: 10.1152/japplphysiol.00390.2025 | 核实: 已核实(Consensus)
- 收益度量: Tcore 增幅、皮温、出汗率、HR、速率–压力积（47°C/15%RH，3 h）。
- 归因方法: 23 名 66–84 岁随机四条件：喷水、风扇、喷水+风扇、无干预。
- 关键数字: 喷水：Tcore −0.24°C (−0.42–−0.06)、HR −5 bpm；风扇：Tcore +0.60°C (0.36–0.84)、HR +15 bpm (8–23)；喷水+风扇对 Tcore 无影响 [直接估计]。
- 技术覆盖: fans；evaporative（皮肤喷水=个人蒸发冷却）
- 一句话: 极热干条件下“皮肤湿润”这种个人蒸发冷却优于风扇，风扇有害。

### b14. Chaseling et al. (2024). Simple Strategies to Reduce Cardiac Strain in Older Adults in Extreme Heat. *NEJM*；Chaseling et al. (2025). Thermal and Perceptual Responses of Older Adults With Fan Use in Heat Extremes. *JAMA Network Open*.
- DOI: 10.1056/nejmc2407812；10.1001/jamanetworkopen.2025.23810 | 核实: 两者均已核实(Consensus)
- 收益度量: 心脏应激（速率–压力积）、体温、出汗、热感知。
- 归因方法: 老年（含冠心病）交叉试验：38°C/60%RH（热湿）与 45°C/15%RH（热干），风扇/皮肤湿润/两者。
- 关键数字: 热湿：风扇、湿润或两者均降低心脏应激；热干：风扇使心脏应激增幅“增至三倍”，单独湿润有效 [直接估计；数值来自 WebSearch 新闻稿 https://www.sydney.edu.au/news-opinion/news/2024/11/07/using-a-fan-and-wetting-the-skin-reduces-risk-of-deadly-cardiac-.html]。
- 技术覆盖: fans；evaporative（皮肤湿润）
- 一句话: 风扇收益在心血管终点上同样呈“湿热有益、干热有害”的二分。

### b15. Bhuvad, Rawal et al. (2024). Evaluation of physiological and thermal comfort effectiveness of ceiling fan and table fan during a heat wave. *Energy and Buildings*.
- DOI: 10.1016/j.enbuild.2024.114706 | 核实: 已核实(Consensus)
- 收益度量: 体温调节与心血管应激变化、感知舒适（41.0°C/35%RH，2 h）。
- 归因方法: 16 名印度青年，无风扇/台扇/吊扇三条件实验。
- 关键数字: 台扇与吊扇均延缓应激变化；台扇应激更小、舒适更高 [直接估计；摘要无数值]。
- 技术覆盖: fans
- 一句话: 印度情境下首次对比吊扇与台扇的生理收益。

### b16. Wang, Ke, Song, Sun & Jay? (2022). Biophysical modelling predicts unreliable core temperature responses on healthy older adults using electric fans at residential homes during heatwaves. *Building and Environment*.
- DOI: 10.1016/j.buildenv.2022.109888 | 核实: 已核实(Consensus)
- 收益度量: 模型预测核心温度与老年心血管调整的偏差。
- 归因方法: 生物物理模型敏感性分析。
- 关键数字: 仅考虑出汗调节“严重低估”老年人实际热应激；不建议用生物物理模型确定老年人风扇阈值 [直接估计]。
- 技术覆盖: fans
- 一句话: 对 Morris 2021 / Tartarini 2021 模型方法的方法学批评。

### b17. Bone, Tartarini & Jay (2025). Fan-first heat-health protection. *Medical Journal of Australia*.
- DOI: 10.5694/mja2.52662 | 核实: 已核实(Consensus)；内容来自 https://www.mja.com.au/journal/2025/222/11/fan-first-heat-health-protection 与 https://insightplus.mja.com.au/2025/22/electric-fans-can-prevent-extreme-heat-related-illness-research-shows (WebSearch 摘录)
- 收益度量: 维持热舒适 + 年度 AC 电力/温室气体节省；并非死亡率。
- 归因方法: 观点/政策文章，综合 Jay 团队实验与 Malik 2022 建模。
- 关键数字: 室内约 27°C 以上再开 AC；“fan-first 可使全年 AC 电力需求与温室气体排放减少 70% 以上” [引用自: Malik et al. 2022]；45°C/<15%RH 时风扇加重热应激 [引用自: Morris 2019 / Chaseling 2024]；把 AC 作为首要应对“可视为对气候变化的适应不良”。
- 技术覆盖: fans；AC（作为后备）
- 一句话: “风扇优先”把收益重新定义为“在舒适不变下节能减排”，把健康收益交给 AC 兜底。

### b18. Malik, Bongers, McBain, Rey-Lescure, de Dear, Capon, Lenzen & Jay (2022). The potential for indoor fans to change air conditioning use while maintaining human thermal comfort. *Lancet Planetary Health* 6(4):e301–e309.
- DOI: 10.1016/S2542-5196(22)00042-0 | 核实: 已核实(WebSearch: https://www.sciencedaily.com/releases/2022/04/220408083858.htm ; https://nova.newcastle.edu.au/vital/access/manager/Repository/uon:50774 — DOI 出现于搜索摘录，未能打开出版商页)
- 收益度量: 维持热舒适（舒适上限温度）前提下的 AC 用电量与排放。
- 归因方法: 澳大利亚全国情景模型：AC-only vs 风扇 0.1/0.3/0.8/1.2 m/s “风扇优先”情景。
- 关键数字: 1.2 m/s 风扇 + 偶尔 AC：用电 5592→1344 GWh，降 76% [直接估计；数值来自新闻稿转述]。
- 技术覆盖: fans；AC（替代关系）
- 一句话: 风扇与 AC 的“替代–组合”收益被直接写成能耗差，健康收益假定为“舒适不变”。

### b19. Smallcombe et al. (2025). Sustainable cooling strategies for workers in the ready-made garment factory industry in Bangladesh under simulated extreme heat: a randomised crossover trial. *Lancet Planetary Health*.
- DOI: 10.1016/j.lanplh.2025.101317 | 核实: 已核实(Consensus)
- 收益度量: 末期 Tcore、HR、出汗液体亏损（40°C/38%RH 工厂情景）。
- 归因方法: 42 人随机交叉六条件：对照 / 风扇 / 风扇+饮水 / 屋顶改造(37.5°C) / 屋顶+风扇 / AC(24°C)。
- 关键数字: 男性 Tcore：FAN+HYD −0.27°C (99% CI −0.44–−0.09)，ROOF −0.35°C，ROOF+FAN −0.28°C，AC −0.71°C；女性仅 AC 显著 −0.42°C；男性 HR：FAN −6 bpm，AC −34 bpm [直接估计]。
- 技术覆盖: fans；AC；被动（屋顶）——同一试验中直接比较
- 一句话: 少见的把风扇、被动改造与 AC 放在同一舱内按同一生理终点比较的试验，且提示性别差异。

### b20. O'Connor et al. (2025). Effects of pedestal-mounted electric fans on self-reported symptoms and mood-state in older adults… *Appl Physiol Nutr Metab*.
- DOI: 10.1139/apnm-2024-0461 | 核实: 已核实(Consensus)
- 收益度量: 环境症状问卷总分、POMS 能量指数（感知终点）。
- 归因方法: 同 b9 试验的探索性分析。
- 关键数字: Tcore/皮温/HR AUC 无差异（p≥0.087）；症状总分 0.89 倍 [0.81, 0.97]；能量指数 +2.4 分 [直接估计]。
- 技术覆盖: fans
- 一句话: 风扇可改善主观症状而不改变生理应激——“舒适收益 ≠ 健康收益”的实证。

### b21. Xu et al. (2025). Electric fan-based cooling strategies to mitigate heat strain during prolonged heat exposure in young males. *J Thermal Biology*.
- DOI: 10.1016/j.jtherbio.2025.104166 | 核实: 已核实(Consensus)
- 收益度量: 体温、HR、血压、出汗、免疫细胞计数、热感知（36.5°C/57%RH，8 h）。
- 归因方法: 14 名青年男性四条件（含风扇+足量补液、风扇+冰浆）。
- 关键数字: 风扇显著降低 Tcore、心血管应激与免疫细胞计数（p<0.05），但脱水率更高；风扇+补液优于风扇 [直接估计；摘要无数值]。
- 技术覆盖: fans
- 一句话: 湿热下青年人风扇有益且与补液形成组合收益。

---

## (c) 蒸发冷却（沼泽/沙漠冷却器、喷雾、直接/间接蒸发）：健康或生理收益证据

> 检索结论：未找到任何以死亡或住院为终点、把家用蒸发冷却器作为暴露/干预的流行病学研究。可得证据为室温/湿度降幅、热舒适、WBGT、人体模型或少数生理实验，以及一则回顾性临床记录。

### c1. Rugani et al. (2026). Creating thermal refuges with low-energy cooling: effectiveness of evaporative coolers. *Building and Environment*.
- DOI: 10.1016/j.buildenv.2026.115149 | 核实: 已核实(Consensus)
- 收益度量: 室内气温/RH 偏移、人体模型冷却效应（CE, K）、能耗、耗水。
- 归因方法: 5×5×2.53 m 气候舱（32°C）内测试整室 EC 与个人 EC，热人体模型。
- 关键数字: 整室 EC 降温最多 2.8 K，RH 从 15–20% 升至 52%，模型 CE 平均 3 K（上身 >5 K）；叠加个人 EC 后 CE 6 K；功率 220 W / 10 W；耗水 2.6 L/h [直接估计]。
- 技术覆盖: evaporative
- 一句话: 蒸发冷却“应急热避难所”的实验证据，收益仍是物理/模型量而非人体结局。

### c2. Tewari, Mathur & Mathur (2019). Field study on indoor thermal comfort of office buildings using evaporative cooling in the composite climate of India. *Energy and Buildings*.
- DOI: 10.1016/j.enbuild.2019.06.049 | 核实: 已核实(Consensus)
- 收益度量: Griffiths 舒适温度、SET*、80%/90% 可接受范围、湿度/风速可接受区间。
- 归因方法: 斋浦尔 10 栋蒸发冷却办公楼 18 个月现场问卷（1554 条）。
- 关键数字: 舒适温度 28.8°C (SD ±1.9)；可接受 RH 35–85%，风速 0.75–1.5 m/s [直接估计]。
- 技术覆盖: evaporative
- 一句话: 印度蒸发冷却建筑的适应性舒适模型基础，无健康终点。

### c3. Johnston et al. (2022). Bioaerosol and microbial exposures from residential evaporative coolers and their potential health outcomes: A review. *Indoor Air*.
- DOI: 10.1111/ina.13082 | 核实: 已核实(Consensus)
- 收益度量: 室内内毒素、真菌葡聚糖、尘螨抗原、军团菌（潜在负收益）。
- 归因方法: 文献综述。
- 关键数字: “缺乏与蒸发冷却器使用相关健康效应的数据”——文献空白 [直接估计（综述判断）]。
- 技术覆盖: evaporative
- 一句话: 唯一专门讨论家用蒸发冷却器健康面的综述，结论是健康结局数据缺失，且湿度副作用（生物气溶胶）值得关注。

### c4. Miranda et al. (2024). Climatized packing house with evaporative coolers – part 1: Occupational heat exposure. *Rev Bras Eng Agríc Ambiental*.
- DOI: 10.1590/1807-1929/agriambi.v29n3e280973 | 核实: 已核实(Consensus)
- 收益度量: WBGT 是否超过巴西 NR15 职业暴露限值；NR17 舒适指标。
- 归因方法: 葡萄包装车间旱季/雨季，冷却器开/关对比。
- 关键数字: 冷却器开启时 WBGT 不超过 NR15 容许限；但不满足 NR17 舒适指标 [直接估计；摘要无数值]。
- 技术覆盖: evaporative
- 一句话: 工作场所蒸发冷却器的收益用“合规的 WBGT”表达。

### c5. Farnham et al. (2025). Evaluation of the Cooling Effect of an Outdoor Misting Fan for Workers in Hot Environments Wearing PPE. *Clean Technologies*.
- DOI: 10.3390/cleantechnol7010009 | 核实: 已核实(Consensus)
- 收益度量: 热人体模型热通量（W/m²、met）；ISO 7243 可接受 WBGT 提升。
- 归因方法: 室外雾化风扇 vs 风扇 vs 自然对流，8 部位热通量传感器。
- 关键数字: 雾化风扇较自然对流多 18.3 W/m²（0.31 met，湿工作服）/20.3 W/m²（0.35 met，干服）；可接受 WBGT 提高 >0.6°C [直接估计]。
- 技术覆盖: evaporative（喷雾）+ fans
- 一句话: 喷雾风扇收益折算为“等效代谢负荷下降”和 WBGT 限值提升。

### c6. Fukuzawa et al. (2025). Ineffectiveness of Water Mist Spray to the Upper Body of Healthy Adults in Suppressing Core Temperature Under Windless Environment. *Safety and Health at Work*.
- DOI: 10.1016/j.shaw.2025.05.003 | 核实: 已核实(Consensus)
- 收益度量: 直肠温峰值、估计出汗量。
- 归因方法: 9 名男性 60 min 4 MET 运动，30°C/85%RH 与 40°C/30%RH，有/无喷雾。
- 关键数字: 热干条件下喷雾组峰值 38.32°C vs 对照 38.14°C（p=0.074），喷雾无益 [直接估计]。
- 技术覆盖: evaporative（喷雾）
- 一句话: 无风环境喷雾不能抑制核心温度上升——蒸发冷却必须配合气流。

### c7. Parkes, Cronin, Dessens & Sultan (2022). Heat stress in Africa under high intensity climate change. *Int J Biometeorology*.
- DOI: 10.1007/s00484-022-02295-1 | 核实: 已核实(Consensus)
- 收益度量: 把热应激事件转为非热应激所需的降温量（表观温度、不适指数）。
- 归因方法: 高时间分辩气候模型 + 冷却器效率假设。
- 关键数字: 蒸发冷却器在历史时期可预防热应激，热带效果低于副热带；高/低效率冷却器均不足以在气候变化下恢复当前水平 [直接估计（模型）]。
- 技术覆盖: evaporative；AC（作为必需替代）
- 一句话: 蒸发冷却收益随湿度与变暖递减的宏观模型证据。

### c8. Sharma et al. (2024). Evaluation of Thermal Discomfort and Non-refrigerant-based Cooling Methods as Mitigation Measures in Indian School Buildings. *Proc. ENERGISE 2023*.
- DOI: 10.62576/xwct4594 | 核实: 已核实(Consensus)
- 收益度量: 学生热舒适、室内温度（阿杰梅尔，热干气候）。
- 归因方法: 部署蒸发冷却器前后实测 + 模拟。
- 关键数字: 蒸发冷却器可把室温降至学生“热舒适范围” [直接估计；摘要无数值]。
- 技术覆盖: evaporative；fans（吊扇）
- 一句话: 学校场景蒸发冷却干预的前后对比，终点为舒适而非健康。

### c9. Benyamine et al. (2024). Assessing indoor air quality and health risks of air conditioner usage in residential buildings under hot and arid climatic conditions… *Int J Low-Carbon Technologies*.
- DOI: 10.1093/ijlct/ctae191 | 核实: 已核实(Consensus)
- 收益度量: 室温/RH 对比；自报症状问卷（300 人）。
- 归因方法: 阿尔及利亚现场测量：一间蒸发冷却器房 vs 一间分体空调房。
- 关键数字: 蒸发冷却器房温度与湿度均高于分体 AC 房，效果依赖通风 [直接估计]。
- 技术覆盖: evaporative vs AC
- 一句话: 热干气候下蒸发冷却 vs AC 的直接室内对比，突出湿度副作用。

### c10. Noor et al. (2020). Evaporative Cooling Options for Building Air-Conditioning: A Comprehensive Study for Climatic Conditions of Multan (Pakistan). *Energies*.
- DOI: 10.3390/en13123061 | 核实: 已核实(Consensus)
- 收益度量: PMV/PPD 热舒适、冷却能力、COP、CO₂。
- 归因方法: DesignBuilder/EnergyPlus 模拟 7 种 DEC/IEC/VCAC 组合。
- 关键数字: 单独 DEC COP 最高 4.5；IEC-DEC-VCAC 混合温差 21°C、PMV 0 至 −1、PPD 30% [直接估计（模拟）]。
- 技术覆盖: evaporative；AC；组合
- 一句话: 巴基斯坦“蒸发冷却 + AC 混合”的舒适/能耗权衡模拟，无健康终点。

### c11. 卡拉奇 2015 热浪私立医院急诊回顾（作者/期刊未能从搜索页确认）。
- DOI: DOI未找到 | 核实: 仅 WebSearch 摘录（https://rcastoragev2.blob.core.windows.net/8b54db991f33c83ed09ce8b1489d17f6/IJPVM-14-30.PMC10284238.pdf 为相关搜索命中，具体来源待确认）
- 收益度量: 热射病患者院内死亡率。
- 归因方法: 单中心回顾（2015-06-20 至 27），治疗流程改为“蒸发冷却 + 室温 22–24°C 空调”前后对比。
- 关键数字: 死亡率 24.35%→15.9% [据搜索摘录；临床治疗性蒸发冷却，非家用降温设备；证据弱]。
- 技术覆盖: evaporative（临床） + AC
- 一句话: 唯一检索到的“蒸发冷却 + 死亡率”数据，但属临床治疗，不能外推到家庭降温。

### c12. 交叉引用：McKenna 2025 (b13)、Chaseling 2024 (b14)、Cramer 2020 (JAP, DOI 10.1152/japplphysiol.00786.2019, 已核实 Consensus：湿 T 恤无风扇时在 42.4°C/34%RH 下降低老年人 Tcore 增幅并减少出汗，湿 T 恤+风扇反而增加出汗 [直接估计])、O'Connor 2026 系统综述 (Temperature, DOI 10.1080/23328940.2026.2623743, 已核实 Consensus：145 项研究，雾化/喷淋列入低成本降温，冷水全身浸泡 0.13°C·min⁻¹，AC 内静息 0.03°C·min⁻¹ [直接估计（合并）])。
- 一句话: “个人蒸发冷却”（皮肤湿润/喷雾）在生理实验中有一致的核心温度收益（干热尤甚），但设备型蒸发冷却器几乎没有任何人体结局研究。

---

## (d) 建模归因链：建筑模拟 → 暴露–反应 → 死亡；健康影响评估与综合模型中的“降温可及 → 避免死亡”

### d1. Taylor, Wilkinson, Picetti, Symonds, Heaviside, Macintyre, Davies, Mavrogianni & Hutchinson (2018; online 2017). Comparison of built environment adaptations to heat exposure and mortality during hot weather, West Midlands region, UK. *Environment International*.
- DOI: 10.1016/j.envint.2017.11.005 | 核实: 已核实(Consensus)
- 收益度量: 室内温度（EnergyPlus 住宅原型）→ 区域热–死亡暴露–反应函数 → 人群死亡风险变化（%）。
- 归因方法: 建筑物理模型 + UHI 模型 + 居民年龄结构 + 流行病学 RR 的链式 HIA。
- 关键数字: UHI 占热死亡 21%；外窗百叶可减热死亡 30–60%；百叶+节能改造最多 −52% [直接估计]。
- 技术覆盖: 被动措施（百叶/保温）；无 AC/风扇情景
- 一句话: 室内暴露链式归因的标杆，但只评估被动措施，不含空调或风扇。

### d2. Taylor, Symonds, Wilkinson, Heaviside, Macintyre, Davies, Mavrogianni & Hutchinson (2018). Estimating the Influence of Housing Energy Efficiency and Overheating Adaptations on Heat-Related Mortality in the West Midlands, UK. *Atmosphere*.
- DOI: 10.3390/atmos9050190 | 核实: 已核实(Consensus)
- 收益度量: 2030s/2050s/2080s 热死亡率变化（%）与供暖能耗。
- 归因方法: EHS 住房存量模型 + 建筑物理 + 健康模型。
- 关键数字: 全面节能改造供暖能耗 −26% 但夏季热死亡 +3–4%；降低外墙吸收率 −12–15% 热死亡；外窗百叶 −37–43%；关窗 +29–64% [直接估计]。
- 技术覆盖: 被动措施；居住者行为
- 一句话: 同一链式框架对多种被动措施给出死亡率百分比，可作为 AC/风扇情景的方法参照。

### d3. Taylor et al. (2021). Projecting the impacts of housing on temperature-related mortality in London during typical future years. *Energy and Buildings*.
- DOI: 10.1016/j.enbuild.2021.111233 | 核实: 已核实(Consensus)
- 收益度量: 每百万人口年热/冷死亡数；可避免死亡比例。
- 归因方法: 同上链式框架 + 人口与住房存量预测（2030s/2050s）。
- 关键数字: 典型未来夏季外窗百叶可避免 38–73% 热死亡；高速改造下热死亡 +12–13/百万/年 [直接估计]。
- 技术覆盖: 被动
- 一句话: 再次显示被动遮阳的巨大模型收益，AC 仍缺席。

### d4. Ibbetson, Milojevic, Mavrogianni, Oikonomou, Jain, Tsoulou, Petrou, Gupta, Davies & Wilkinson (2021). Mortality benefit of building adaptations to protect care home residents against heat risks… *Climate Risk Management*.
- DOI: 10.1016/j.crm.2021.100307 | 核实: 已核实(Consensus)
- 收益度量: 室内均温降幅 → 热死亡数与寿命损失年（YLL）→ 货币化（£）。
- 归因方法: 建筑物理 + 三种寿命损失假设的生命表法。
- 关键数字: 外遮阳降均温 0.9°C（暖夏）/0.6°C（普通夏）；50 人养老院避免热死亡 0.07/0.47/0.28 例、YLL 0.29/0.76/0.14（暖年）；20 年 3.5% 折现收益约 £90,000/£230,000/£44,000 [直接估计]。
- 技术覆盖: 被动（遮阳）
- 一句话: 展示“死亡→YLL→货币”的完整收益链及寿命假设的巨大不确定性。

### d5. Bao et al. (2025). Cost-benefit analysis of interventions to protect care home residents in England against heat risks. *Environmental Research: Health*.
- DOI: 10.1088/1402-4896/ae26e9 | 核实: 已核实(Consensus)（注：Consensus 所列 DOI 前缀与期刊常规不符，建议复核）
- 收益度量: QALY 货币价值 vs 资本/能耗/维护成本。
- 归因方法: 建筑物理 + 养老院人群暴露–反应 + 生命表 + 敏感性分析。
- 关键数字: 小型低保温高热质养老院中“休息室便携式空调”最具成本效益；大型高保温低热质院中“热质+开窗规则”最优 [直接估计；摘要无数值]。
- 技术覆盖: AC（便携）；被动；行为
- 一句话: 少数把便携 AC 纳入链式成本–收益比较并得出场景依赖结论的研究。

### d6. Oikonomou et al. (2026). Adapting care homes to heat: A comparison of building retrofit interventions in London, UK. *Energy and Buildings*.
- DOI: 10.1016/j.enbuild.2025.116928 | 核实: 已核实(Consensus)
- 收益度量: 过热小时数与冬季供暖惩罚（EnergyPlus，2°C/4°C 情景）。
- 归因方法: 建筑模拟（遮阳/热质/主动冷却/行为四类）。
- 关键数字: 夜间通风稳定降低过热不增供暖；遮阳+玻璃膜使冬季供暖 +6–45%；高风险区分区 AC 比整楼更节能 [直接估计]。
- 技术覆盖: AC（分区）；被动
- 一句话: 提出“被动优先 + 高风险区分区 AC”的组合逻辑，但终点是过热小时而非健康。

### d7. Moreno-Pestaña et al. (2026). Interior accumulated thermal overload (IATO): A novel indoor temperature-based metric for assessing heat-related mortality through building simulations. *Building and Environment*.
- DOI: 10.1016/j.buildenv.2025.114094 | 核实: 已核实(Consensus)
- 收益度量: 基于模拟室内温度的累积热过载 → 超额死亡，显式纳入区域 HVAC 普及率。
- 归因方法: 与西班牙 MoMo 死亡监测系统校准。
- 关键数字: 累积超额死亡平均误差 13%，R² 0.5–0.9；敏感性分析确认 HVAC 可及性的重要性 [直接估计]。
- 技术覆盖: AC（作为模型参数）
- 一句话: 第一个把 AC 普及率嵌入“室内温度→死亡”模型并经国家监测数据校准的工具。

### d8. Picetti, Taylor, Symonds et al. (2016). Estimating the health impact of housing adaptations on heat-related risks in the West Midlands region (UK). *ISEE 会议摘要*.
- DOI: 10.1289/isee.2016.4324 | 核实: 已核实(Consensus)
- 收益度量: 室内中位温度与热死亡变化。
- 归因方法: EnergyPlus 元模型 + 区域温度–死亡关系。
- 关键数字: 外百叶使中位室温 27.2→24.3°C，热死亡最多 −90%（暖夏）；节能改造 +2.6% [直接估计]。
- 技术覆盖: 被动
- 一句话: 链式方法的早期版本，极端乐观的遮阳收益。

### d9. Lomas & Porritt (2017). Overheating in buildings: lessons from research. *Building Research & Information* 45(1–2):1–18.
- DOI: 10.1080/09613218.2017.1256136 | 核实: 已核实(WebSearch: https://repository.lboro.ac.uk/articles/journal_contribution/Overheating_in_buildings_lessons_from_research/9451775 ; https://structurae.net/en/literature/journal-article/overheating-in-buildings-lessons-from-research)
- 收益度量: 室内过热指标（综述/专刊导言）。
- 归因方法: 综述。
- 关键数字: 无效应量。
- 技术覆盖: 被动为主
- 一句话: 室内过热研究框架性综述，为“室内暴露”作为归因中介提供背景。

### d10. Petrou, Symonds, Mavrogianni, Mylona & Davies (2019). The summer indoor temperatures of the English housing stock: Exploring the influence of dwelling and household characteristics. *BSER&T* 40(4):492–511.
- DOI: 10.1177/0143624419847621 | 核实: 已核实(WebSearch: https://discovery.ucl.ac.uk/id/eprint/10074855/)
- 收益度量: 室内温度超过 CIBSE 标准的住宅比例。
- 归因方法: 2011 EFUS 823 户实测统计分析。
- 关键数字: 约 2.5% 住宅超 CIBSE 准则 1，约 26% 超准则 2 [直接估计]。
- 技术覆盖: 无（暴露基线）
- 一句话: 提供链式模型所需的室内暴露分布实测基线。

### d11. Mavrogianni, Wilkinson, Davies, Biddulph & Oikonomou (2012). Building characteristics as determinants of propensity to high indoor summer temperatures in London dwellings. *Building and Environment*.
- DOI: 10.1016/j.buildenv.2011.12.003 | 核实: 已核实(Consensus)
- 收益度量: 最热 5 日日间客厅均温/峰温变化（°C）。
- 归因方法: EnergyPlus 3456 种住宅组合。
- 关键数字: 屋顶保温+窗改造使均温 −0.76°C (0.63–0.89)、峰温 −1.30°C；内保温墙/地板 +0.46°C/+0.71°C [直接估计]。
- 技术覆盖: 被动
- 一句话: 链式模型“建筑→室温”环节的参数来源。

### d12. Taylor, Wilkinson, Davies, Armstrong, Chalabi, Mavrogianni & Oikonomou (2015). Mapping the effects of urban heat island, housing, and age on excess heat-related mortality in London. *Urban Climate* 14:517–528.
- DOI: DOI未找到 | 核实: 仅引文信息（https://www.ucl.ac.uk/bartlett/environmental-design/publications/2015/sep/mapping-estimated-heat-related-mortality-london-due-population-age-urban-heat）
- 收益度量: 伦敦空间分布的超额热死亡。
- 归因方法: UHI + 住房 + 年龄 → 死亡映射。
- 关键数字: 未获取。
- 技术覆盖: 被动/暴露
- 一句话: 链式框架的空间化前身。

### d13. Edwards et al. (2025). Residential indoor temperatures and health: A scoping review of observational studies. *Science of the Total Environment*.
- DOI: 10.1016/j.scitotenv.2025.179377 | 核实: 已核实(Consensus)
- 收益度量: 室内温度与死亡/发病/舒适的观察性关联；安全上限阈值。
- 归因方法: 29 篇观察研究范围综述。
- 关键数字: 经验安全阈值 18–35°C，随结局而异 [直接估计（综述）]。
- 技术覆盖: 无（暴露–反应环节）
- 一句话: 指出“室内温度→健康”环节的实证基础薄弱、阈值跨度大。

### d14. Kouis et al. (2021). Heat-related mortality under climate change and the impact of adaptation through air conditioning: A case study from Thessaloniki, Greece. *Environmental Research*.
- DOI: 10.1016/j.envres.2021.111285 | 核实: 已核实(Consensus)
- 收益度量: 避免的热心肺死亡 vs AC 用电污染引起的额外心肺死亡。
- 归因方法: SSP 情景 HIA + 反事实燃料（黑碳/天然气）。
- 关键数字: 2080–99 年超额热死亡 2.4 (0.0–20.9, SSP1-2.6)–433.7 (66.9–1070, SSP5-8.5)；AC 适应可能被污染死亡抵消（尤其燃煤） [直接估计]。
- 技术覆盖: AC
- 一句话: AC 收益与其排放外部性在 HIA 中的首次对冲。

### d15. Falchetta, De Cian, Sue Wing & Carr (2024). Global projections of heat exposure of older adults. *Nature Communications* 15:3678.
- DOI: 10.1038/s41467-024-47197-5 | 核实: 已核实(WebSearch: https://pure.iiasa.ac.at/id/eprint/19729/ ; https://open.bu.edu/items/75fb7c35-f5f3-4fcf-854b-056e91ea7263)
- 收益度量: 老年人慢性/急性热暴露人数（非死亡）。
- 归因方法: 年龄分层人口预测 × 降尺度温度预测。
- 关键数字: 慢性热暴露在所有情景下翻倍；69+ 岁人口中居于 95th 日最高温 >37.5°C 气候者从 14% 升至 >23%，新增 1.77–2.46 亿 [直接估计]。
- 技术覆盖: 无（暴露侧）；指出亚非适应能力最低
- 一句话: 为“降温可及”收益估计提供全球老年暴露分母，但不计算避免死亡。

### d16. Rode, Carleton, Delgado, Greenstone, Houser, Hsiang, Hultgren, Jina, Kopp, McCusker, Nath, Rising & Yuan (2021). Estimating a social cost of carbon for global energy consumption. *Nature* 598:308–314.
- DOI: 10.1038/s41586-021-03883-8 | 核实: 已核实(WebSearch: https://impactlab.org/wp-content/uploads/2021/10/Rode_et_al-2021-Nature-1.pdf ; https://pesquisa.bvsalud.org/ses/resource/es/mdl-34646000)
- 收益度量: 能源支出的 SCC 分量（美元/吨 CO₂），用电（含制冷）响应。
- 归因方法: 全球面板的能耗–气温响应函数 + 收入/气候外推。
- 关键数字: 2099 年全球用电每 +1°C 增加约 4.5 EJ（现消费 7%），燃料 −11.3 EJ；SCC 能源分量 −3 至 −1 美元 [直接估计]。
- 技术覆盖: AC（隐含于用电）
- 一句话: 制冷“适应支出”在气候损害账中的全球量化，但不含健康收益。

### d17. Carleton, Jina, Delgado, Greenstone, Houser, Hsiang, Hultgren, Kopp, McCusker, Nath, Rising, Rode, Seo, Viaene, Yuan & Zhang (2022). Valuing the Global Mortality Consequences of Climate Change Accounting for Adaptation Costs and Benefits. *QJE*.
- DOI: 10.1093/qje/qjac020 | 核实: 已核实(WebSearch: https://udspace.udel.edu/handle/19716/31155 ; https://epic.uchicago.edu/research/valuing-the-global-mortality-consequences-of-climate-change-accounting-for-adaptation-costs-and-benefits)
- 收益度量: 全球死亡风险 + 适应成本（由收入与气候异质性揭示的“适应收益”）。
- 归因方法: 40 国死亡面板的温度–死亡函数随收入/长期气候变化 → 揭示性偏好推断适应成本。
- 关键数字: 搜索页未给出可引用数值。
- 技术覆盖: 未分技术（适应总体）
- 一句话: 适应收益按“收入与气候揭示”的降低死亡敏感度计量，AC 被隐含在内但不单独识别。

### d18. Pavanello, De Cian, Davide, Mistry, Cruz, Bezerra, Jagu, Renner, Schaeffer & Lucena (2021). Air-conditioning and the adaptation cooling deficit in emerging economies. *Nature Communications* 12:6460.
- DOI: 10.1038/s41467-021-26592-2 | 核实: 已核实(WebSearch: https://pmc.ncbi.nlm.nih.gov/articles/PMC8578436)
- 收益度量: AC 采用率、用电、“适应制冷赤字”人数（非健康）。
- 归因方法: 家户微观数据 AC 采用模型 + 气候情景。
- 关键数字: 搜索页未给可引用数值。
- 技术覆盖: AC
- 一句话: 量化 AC 采用与赤字，但未把采用转化为死亡收益。
- 补充：Pavanello 印度工作论文（2014–2019；WebSearch https://dse.unibo.it/en/events/internal-seminar-antonio-schiavone-1，DOI未找到）称“热适应技术合计减少热死亡 21%”，“若 AC 普及达到蒸发冷却器水平可避免 47% 热死亡” [直接估计；工作论文摘要]——是极少数把 AC 与蒸发冷却器置于同一死亡率框架的研究，待正式发表后复核。

### d19. Andrijevic, Byers, Mastrucci, Smits & Fuss (2021). Future cooling gap in shared socioeconomic pathways. *Environmental Research Letters* 16:094053.
- DOI: 10.1088/1748-9326/ac2195 | 核实: 已核实(WebSearch: https://zendy.io/title/10.1088/1748-9326/ac2195 ; https://pure.iiasa.ac.at/id/eprint/17411/)
- 收益度量: “制冷缺口”人数 = 热应激暴露人口 − 可用 AC 保护人口。
- 归因方法: 67 国 AC 采用的收入/城市化/不平等驱动模型 × SSP。
- 关键数字: 2050 年受影响人口 20–50 亿 [直接估计]。
- 技术覆盖: AC
- 一句话: 把“AC 可及”当作保护的二元代理，无死亡转换。

### d20. Mastrucci, Byers, Pachauri & Rao (2019). Improving the SDG energy poverty targets: Residential cooling needs in the Global South. *Energy and Buildings* 186:405–415.
- DOI: 10.1016/j.enbuild.2019.01.015 | 核实: 已核实(WebSearch: https://pure.iiasa.ac.at/id/eprint/15739/)
- 收益度量: 热应激人口与填补“制冷缺口”所需能耗。
- 归因方法: 建筑能耗模型 + 人口/气候栅格。
- 关键数字: 填补缺口将使全球住宅电力需求增加约 14%，主要为 AC [直接估计]。
- 技术覆盖: AC（兼含风扇等低能耗假设）
- 一句话: 收益用“覆盖热应激人口”计，再折算能耗。

### d21. Romanello et al. (2021). The 2021 report of the Lancet Countdown on health and climate change: code red for a healthy future. *Lancet*；及 IEA (2023) *Sustainable, Affordable Cooling Can Save Tens of Thousands of Lives Each Year*.
- DOI: 10.1016/S0140-6736(21)01787-6 | 核实: 已核实(WebSearch: https://iifiir.org/en/news/access-to-air-conditioning-saved-over-190-000-lives-in-2019 — 该页引用此 DOI，但标注为 2022 报告，年份归属待复核)；IEA 报告 URL https://www.iea.org/reports/sustainable-affordable-cooling-can-save-tens-of-thousands-of-lives-each-year（无 DOI）
- 收益度量: 65+ 岁人群因 AC 可及而避免的热死亡数。
- 归因方法: 指标法——把国家 AC 普及率与热死亡暴露–反应结合（方法细节未能从页面核实）。
- 关键数字: 2019 年 AC 避免约 195,000 例 65+ 热死亡 [引用自: Lancet Countdown 2021/2022 指标]；IEA/Yale：2019–2021 年均避免约 190,000 例，为早期 3 倍；65+ 热死亡 2002–04 至 2019–21 增 61% 至 ≥300,000 [直接估计（IEA 分析）]。
- 技术覆盖: AC
- 一句话: 唯一把“AC 可及 → 全球避免死亡数”做成年度指标的权威来源；风扇/蒸发冷却无对应指标。

### d22. UNEP (2023). *Global Cooling Watch 2023: Keeping it Chill — How to meet cooling demands while cutting emissions*.
- DOI: 无 | 核实: 已核实(WebSearch: https://www.unep.org/resources/global-cooling-watch-2023 ; https://www.oxfordmartin.ox.ac.uk/publications/global-cooling-watch-2023)
- 收益度量: 制冷可及人数、装机容量、排放削减；健康仅定性表述。
- 归因方法: 情景分析（被动冷却、效率标准、Kigali 制冷剂）。
- 关键数字: 至 2050 年可使额外 35 亿人获得冰箱/AC/被动冷却；装机容量 2050 年翻三倍、用电翻倍以上；措施可削减 2050 年行业排放 ≥60% [直接估计（报告）]；未见量化健康收益。
- 技术覆盖: AC；被动；（风扇/蒸发冷却归入“被动/低能耗”）
- 一句话: 权威报告以“可及人数”度量收益，健康收益未定量。

### d23. WMO & WHO (2015). *Heatwaves and Health: Guidance on Warning-System Development* (WMO-No. 1142)；WHO 热与健康 fact sheet（https://www.who.int/news-room/fact-sheets/detail/climate-change-heat-and-health）。
- DOI: 无 | 核实: 已核实(WebSearch: https://www.who.int/publications/m/item/heatwaves-and-health--guidance-on-warning-system-development ; https://community.wmo.int/en/product/873)；fact sheet 页面未能打开，仅二手转述
- 收益度量: 无效应量；为预警系统与干预策略框架。
- 归因方法: 指南。
- 关键数字: 二手转述的 WHO 建议：气温 >35°C 时风扇“可能无法预防热病”；较新转述改为 <40°C 可用 [引用自: 新闻转述，未核实原文]。
- 技术覆盖: AC；fans（指引阈值）
- 一句话: 指南层面只给“风扇温度阈值”，没有任何收益量化。

### d24. Lay, Sarofim, Vodonos Zilberg, Mills, Jones, Schwartz & Kinney (2021). City-level vulnerability to temperature-related mortality in the USA and future projections. *Lancet Planetary Health*.
- DOI: 10.1016/s2542-5196(21)00058-9 | 核实: 已核实(Consensus)
- 收益度量: 2°C/6°C 升温下的预计死亡，按不同历史时期脆弱性。
- 归因方法: 208 城市地理聚类 meta 回归。
- 关键数字: 用 2003–13 vs 1973–82 数据，2°C 升温的预计死亡下降 >97%；6°C 时仅降 84%；“即使 AC 覆盖高的地区仍需额外缓解” [直接估计]。
- 技术覆盖: AC（讨论）
- 一句话: 展示“脆弱性下降”在投影中的巨大杠杆，但同样不分设备。

### d25. Kenny et al. (2024). Indoor overheating: A review of vulnerabilities, causes, and strategies to prevent adverse human health outcomes during extreme heat events. *Temperature*.
- DOI: 10.1080/23328940.2024.2361223 | 核实: 已核实(Consensus)
- 收益度量: 叙述性综述（室内暴露、建筑、个人降温）。
- 归因方法: 综述。
- 关键数字: 无。
- 技术覆盖: AC；fans；被动
- 一句话: 把“建筑→室内暴露→生理应激”与“个人降温策略有效性”整合，呼吁 EHE 模拟研究。

---

## (e) 非死亡收益指标：劳动能力、睡眠、热舒适（SET/PMV）、住院、电力代理

### e1. Foster, Smallcombe, Hodder, Jay, Flouris, Nybo & Havenith (2021). An advanced empirical model for quantifying the impact of heat and climate change on human physical work capacity. *Int J Biometeorology* 65(7):1215–1229.
- DOI: 10.1007/s00484-021-02105-0 | 核实: 已核实(WebSearch: https://agris.fao.org/search/ru/records/65df75597c7033e84bedb642 ; https://ouci.dntb.gov.ua/works/4KYXzQo9)
- 收益度量: 体力工作能力 PWC（%）。
- 归因方法: 338 次气候舱工作试验的经验模型。
- 关键数字: 皮温预测 PWC R²=0.88；WBGT 18°C 时 PWC −10%，40°C 时 −78% [直接估计]。
- 技术覆盖: 基线（无干预）
- 一句话: 劳动生产率收益的暴露–反应函数来源。

### e2. Foster, Smallcombe, Hodder, Jay, Flouris & Havenith (2021). Quantifying the impact of heat on human physical work capacity; part II: the observed interaction of air velocity with temperature, humidity, sweat rate, and clothing… *Int J Biometeorology*.
- DOI: 10.1007/s00484-021-02212-y | 核实: 已核实(Consensus)
- 收益度量: PWC 随风速（风扇 3.5 vs 0.2 m/s）在 35–50°C、20–80%RH 的变化。
- 归因方法: 300 次 1 小时工作试验 + 人体传热模型矩阵。
- 关键数字: 气温 ≥35°C 且 RH <50% 时风扇“无效且可能有害”；UTCI 能捕捉风速效应而 WBGT 不能 [直接估计]。
- 技术覆盖: fans
- 一句话: 风扇对劳动生产率的收益同样是温湿依赖的，并给出可供经济学模型使用的 PWC 矩阵。

### e3. Bach et al. (2024). Practical cooling interventions for preventing heat strain in indoor factory workers in Thailand. *Am J Industrial Medicine*.
- DOI: 10.1002/ajim.23589 | 核实: 已核实(Consensus)
- 收益度量: Tcore、HR 与计件产量（托盘数）。
- 归因方法: 12 名锯木厂工人 3 日交叉 RCT：降温“绿洲”（补水+冷毛巾+风扇+淋水）/ 相变背心 / 对照。
- 关键数字: OASIS Tcore −0.25°C [0.24, 0.25]、HR −7 bpm；VEST −0.17°C、−10 bpm；产量差异不确定（MD 2.5 [−0.2, 5.2]）[直接估计]。
- 技术覆盖: fans（组合中）；evaporative（淋水）
- 一句话: 少数同时测量生理与产出的现场试验，生产率收益未能确认。

### e4. Ioannou et al. (2022). Occupational heat strain in outdoor workers: A comprehensive review and meta-analysis. *Temperature*.
- DOI: 10.1080/23328940.2022.2030634 | 核实: 已核实(Consensus)
- 收益度量: 核心/皮温、HR、尿比重、体力劳动能力的相关系数。
- 归因方法: 38 项现场研究、2,409 名工人 meta 分析。
- 关键数字: 热应激与 Tcore r=0.44、HR r=0.38、劳动能力 r=−0.82 [直接估计（合并）]。
- 技术覆盖: 基线
- 一句话: 劳动能力作为收益终点的全球基线。

### e5. Morris, Jay, Flouris, Casanueva, Gao, Foster, Havenith & Nybo (2020). Sustainable solutions to mitigate occupational heat strain – an umbrella review… *Environmental Health*.
- DOI: 10.1186/s12940-020-00641-7 | 核实: 已核实(Consensus)
- 收益度量: 热舒适、HR、Tcore、体力/认知表现（36 篇系统综述）；4 分制的有效性/成本/可行性/环境影响评分。
- 归因方法: 伞状综述 + 作者评分。
- 关键数字: AC 与降温服装“有效性最高分”但成本与环境影响差；通风、遮阳、休息等为可持续替代 [直接估计（评分）]。
- 技术覆盖: AC；fans（通风）；被动
- 一句话: 职业场景“有效性 vs 成本 vs 环境”的多准则比较框架。

### e6. 热舒适类：Tewari 2019 (SET*，见 c2)；Noor 2020 (PMV/PPD，见 c10)；Kenny et al. (2025) MSSE 摘要 (DOI 10.1249/01.mss.0001157796.62684.db, 已核实 Consensus)：吊扇使老年人热不适评分 −9 [4, 14]，直肠温增幅仅 −0.1°C [直接估计]；Malik 2022 (b18) 以“舒适上限”为约束。
- 一句话: 舒适指标是风扇与蒸发冷却最常用的收益度量，与健康终点脱钩。

### e7. 住院类：Ostro 2010 (a9)、Gronlund 2016 (a10)、Romitti 2025 (a17)、Lenzer 2020 (a26)。
- 一句话: 住院终点的 AC 效应修饰证据充足；风扇与蒸发冷却无住院研究。

### e8. 电力/能耗代理：Deschênes & Greenstone 2011 (a21)、Deschênes 2022 (a23)、Rode 2021 (d16)、Malik 2022 (b18)、Bone 2025 (b17)。
- 一句话: 经济学文献把“适应性用电”视作已购买的健康保护代理；风扇文献则把“节省的 AC 用电”视作收益。

### e9. 睡眠：本轮检索（Consensus 9 次 + WebSearch）未检出以睡眠质量为终点比较 AC/风扇/蒸发冷却的研究——记为空白。

---

## Q2 小结

- **AC 是唯一拥有死亡率层面效应量的技术**：病例对照 OR 0.2–0.3（Semenza 1996、Naughton 2002，Bouchama 2007 合并 0.23）、机构准实验（Katz 2025 相对 OR 1.08；Skarha 2022 无 AC 监狱 13% 死亡归因于极端热）、两阶段 meta 回归中的归因份额（Sera 2020：AC 解释 14–20% 的脆弱性下降；Achebak 2023：28.6%；Barreca 2016：“几乎全部”），以及 HIA/指标法的避免死亡数（Chua 2023：36–47%；Lancet Countdown/IEA：≈19 万例/年）。不同方法给出的“AC 份额”差异极大（1/6 到 100%），本身就是幻灯片应强调的方法学分歧。
- **AC 归因方法谱**：个体暴露（病例对照）→ 生态效应修饰（城市/邮编 AC 普及率，O'Neill 2005、Bobb 2014 阴性、Nordio 2015、Gronlund 2016、Romitti 2025、Chen 2016 江苏、Ji 2026 中国）→ 纵向 meta 回归（Sera/Achebak）→ 经济学面板交互（Barreca）→ 带反事实的 HIA/城市气候耦合（Chua、Kouis）→ 经济学的“揭示性适应”（Deschênes & Greenstone、Heutel/Miller/Molitor、Carleton）——后者不拆分设备，只把能耗或区域异质性当作适应代理。
- **风扇的收益从未以死亡率度量**：Gupta 2012 Cochrane 确认无 RCT/前瞻性对照；唯一的死亡 OR（Bouchama 合并 0.60，CI 0.4–1.1）跨 1。2014 年后 Jay 团队与 Kenny 团队把终点改为核心温度、HR、速率–压力积、出汗、生物标志物与舒适；结果高度依赖温湿组合与年龄：湿热（≤~40°C）有益，极热干（45–47°C）有害（Morris 2019、McKenna 2025 +0.60°C、Chaseling 2024）；老年人在 36°C 下核心温度差仅 −0.1~0°C（O'Connor 2024），31°C 下 −0.2°C（O'Connor 2025）。Meade 2024 的批评核心正是“蒸发增益不足以在 >35°C 产生有意义的核心温度下降”。
- **“风扇优先”框架重新定义收益**：Malik 2022 与 Bone 2025 把收益写成“舒适不变前提下 AC 用电/排放减少 70–76%”，健康保护由 AC 在 ~27°C 以上兜底；即风扇与 AC 的关系被建模为“替代–组合”而非竞争，但健康收益被假定（舒适阈值）而非估计。
- **蒸发冷却器几乎完全缺席健康文献**：检索到的全部是室温/湿度降幅（Rugani 2026：−2.8 K，RH 升至 52%）、舒适（Tewari 2019）、WBGT 合规（Miranda 2024、Farnham 2025）、模拟（Noor 2020、Parkes 2022）与潜在负收益（Johnston 2022 生物气溶胶综述——并明确指出健康结局数据空白）。唯一的死亡率数字来自卡拉奇急诊回顾（临床治疗性蒸发冷却，24.35%→15.9%），不可外推；Pavanello 印度工作论文提出“AC 若普及到蒸发冷却器水平可避免 47% 热死亡”，是极少数把二者置于同一死亡框架的尝试，尚未正式发表。相对而言，“个人蒸发冷却”（皮肤湿润/喷水）在干热条件下有一致的核心温度收益（McKenna 2025 −0.24°C；Cramer 2020）。
- **建模归因链（建筑物理→室内温度→暴露–反应→死亡→YLL→货币）已成熟但只用于被动措施**：Taylor 2017/2018/2021 给出遮阳 −30%~−73% 热死亡，Ibbetson 2021 与 Bao 2025 完成到 £/QALY 的转换，Moreno-Pestaña 2026 开始把 HVAC 普及率嵌入模型；但没有一项把“安装 AC/风扇/蒸发冷却器”作为情景跑完整条链，是明显可填补的空白。
- **非死亡指标**：劳动能力（Foster 2021 I/II：风扇在 ≥35°C 且 RH<50% 无效）、舒适（SET*/PMV/VAS）、住院（仅 AC）、电力代理（经济学）、生物标志物（Lee 2025）；睡眠终点未检出。
- **全球/权威报告**：Lancet Countdown 是唯一给出“AC 可及→避免死亡数”年度指标的来源；UNEP Global Cooling Watch 2023 与 WHO/WMO 2015 仅以“可及人数”或温度阈值表述，无健康效应量。

### 未产出有用结果或未能完成的检索
- Consensus：第 10–12 次检索（Falchetta 老年暴露 / 中国印度 AC 拥有率×热死亡 / Malik 风扇-AC 能耗）因月度配额用尽未执行，改用 WebSearch 补齐。
- Consensus “misting evaporative cooling intervention workers heat strain”：结果几乎全为降温背心/PCM，与蒸发冷却器无关。
- WebSearch “evaporative cooler + heat illness/mortality, Arizona/Maricopa”：无任何以蒸发冷却器为暴露的健康研究。
- WebSearch “evaporative/air cooler + heat stroke, Pakistan/Iran households”：仅卡拉奇单中心急诊回顾与 AKU 注册中试验（无结果）。
- WebSearch “China multi-city AC effect modification Environment International”：未命中目标文献，仅江苏 EHP 2016。
- WebSearch “Lancet Countdown 2024 cooling indicator”：未检出 2024 版 AC 指标数值，只有 2021/2022 的 195,000。
- WHO 2018 fact sheet 原页、PubMed、MJA 页面在本会话无法抓取（DNS 受限），相关数值均为二手转述。
- Taylor 2015 *Urban Climate* DOI 未找到；Semenza 1996 摘要未报告风扇 OR；睡眠终点未检出任何研究。
