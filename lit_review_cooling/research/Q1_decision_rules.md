# Q1：文献用什么方法决定"在何种条件下使用哪种降温措施"（空调 / 电风扇 / 蒸发冷却）

> 检索日期：2026-11-01。核实规则：DOI 仅在 Consensus 结果中逐字出现、或在 WebSearch 返回的出版社/PubMed/机构库页面中出现时才标"已核实"；否则写"DOI未找到"。数字一律按摘要/页面原文抄录，并标注 [直接设定]（该文献自身模型/实验给出）或 [引用自: X]（转引机构或他人）。
>
> **检索工具限制说明**：本会话中 doi.org / api.crossref.org 被屏蔽；Consensus 在完成 5 次有效检索后触发"本月免费额度已用尽（12 月 1 日重置）"，无法再调用（原计划 12–15 次），其余条目改用 WebSearch 核实。WebFetch 对 who.int、iea.org、epa.gov、seforall.org、pure.iiasa.ac.at、cbe-berkeley.gitbook.io、fpavanello.github.io、iea.blob.core.windows.net 均因域名不在白名单而失败，机构报告原文只能通过搜索摘要间接核实（已在条目中标注）。

---

## (a) 固定气温阈值：谁设定、谁转引

### a1. 机构指南（阈值的"源头"）

**WHO – Fact sheet "Heat and health"（现行版）**
- 引用: World Health Organization. Heat and health (fact sheet). who.int/news-room/fact-sheets/detail/climate-change-heat-and-health
- DOI: 无（机构网页） | 核实: 已核实(WebSearch: who.int 摘要片段；网页本体因域名限制未能抓取)
- 方法: 固定干球气温阈值；另给出"空调设 27°C + 开风扇"的组合规则。
- 关键数字: "Use electric fans only when temperatures are below 40°C / 104°F"；"In temperatures above 40˚C / 104˚F, fans will heat the body" [直接设定: WHO]；空调设定 27°C 并开风扇"will make the room feel 4˚C cooler" [直接设定: WHO]。
- 技术覆盖: AC / fans（无蒸发冷却）
- 一句话: WHO 现行版把风扇上限提高到 40°C，并首次给出"空调 27°C + 风扇"的组合规则；较早的 WHO Q&A/公众信息单仍写 35°C。

**WHO – Q&A "Heatwaves: how to stay cool" 与 WHO/Europe 公众信息单（旧版）**
- 引用: WHO. Heatwaves: How to stay cool (Q&A); WHO. Information for the general public during heat-waves (PDF).
- DOI: 无 | 核实: 已核实(WebSearch: who.int 摘要片段)
- 方法: 固定气温阈值。
- 关键数字: 风扇在"temperatures above 35°C"时"may not prevent heat-related illness" [直接设定: WHO 旧版]。
- 技术覆盖: fans（辅以到空调场所避暑）
- 一句话: 文献中反复批评的"35°C 规则"的 WHO 出处；WHO 内部新旧版本不一致（35 vs 40°C）。

**US EPA – Excessive Heat Events Guidebook (2006, EPA 430-B-06-005)**
- 引用: US Environmental Protection Agency (2006). Excessive Heat Events Guidebook.
- DOI: 无 | 核实: 已核实(WebSearch: epa.gov PDF 链接 https://www.epa.gov/sites/default/files/2016-03/documents/eheguide_final.pdf；正文经二手转述)
- 方法: 热指数（温度+湿度合成）阈值——严格说属 (b) 类，但在文献中被当作"固定数字"转引。
- 关键数字: "using a portable electric fan alone when heat index temperatures exceed 99°F actually increases the heat stress the body must respond to"（99°F = 37.2°C）[直接设定: EPA]；公众简版另提"room temperature hotter than 90°F"时把风扇对着自己（二手来源，待核）。
- 技术覆盖: fans / AC（建议到空调场所）
- 一句话: 37.2°C 热指数阈值的源头，被 Morris et al. 2019 等直接点名批评。

**US CDC – Extreme heat guidance（历年版本）**
- 引用: CDC. Extreme Heat: tips for preventing heat-related illness / Extreme heat and low income (cdc.gov)
- DOI: 无 | 核实: 已核实(WebSearch: cdc.gov 及 UNT 网页存档)
- 方法: 模糊气温描述而非精确阈值。
- 关键数字: "when the temperature is in the high 90s, fans will not prevent heat-related illness"（2000 年新闻稿；high 90s °F ≈ 35.6–37.2°C）[直接设定: CDC]；现行页改为 "when temperatures are really hot, they won't prevent heat-related illness"。CDC 2019 年回应称其建议基于"limited peer-reviewed evidence"。
- 技术覆盖: fans / AC
- 一句话: CDC 是"high 90s°F"说法的来源，并承认证据薄弱。

**UK Health Security Agency (原 Public Health England) – "Beat the heat" / Adverse Weather and Health Plan (2023–)**
- 引用: UKHSA. Beat the heat: staying safe in hot weather; Adverse Weather and Health Plan (2023, 取代 Heatwave Plan for England).
- DOI: 无 | 核实: 已核实(WebSearch: gov.uk 相关页面及地方政府转载)
- 方法: 固定气温阈值 + 使用方式限制。
- 关键数字: "use electric fans if the air temperature is below 35°C, but do not aim the fan directly at your body" [直接设定: UKHSA/PHE]。
- 技术覆盖: fans
- 一句话: 英国延续 35°C 规则并附加"不要直吹"。

### a2. 转引/批评这些阈值的学术文献

**Ravanelli, Jay et al. (2015). Heart rate and body temperature responses to extreme heat and humidity with and without electric fans. JAMA.**
- DOI: 10.1001/jama.2015.153 | 核实: 已核实(Consensus)
- 方法: 热舱内湿度递增（humidity ramp）实验，寻找"临界湿度"；同时整理各机构阈值。
- 关键数字: 机构建议上限 "range from 32.3°C (90°F) at 35% RH to the high 90s (96–99°F; 35.6–37.2°C, no RH stated)" [引用自: 公共卫生机构，经 Cochrane 综述]；实验气温 36°C 与 42°C [直接设定]。
- 技术覆盖: fans
- 一句话: 首次系统列出各机构风扇阈值并用实验挑战之。

**Ravanelli & Jay (2016). Electric fan use in heat waves: Turn on or turn off? Temperature.**
- DOI: 10.1080/23328940.2016.1211073 | 核实: 已核实(Consensus)
- 方法: 评论；对比风扇与空调能耗。
- 关键数字: WHO/CDC 称 ">≈35°C" 时风扇加剧脱水 [引用自: WHO, CDC]；风扇 55–100 W vs 空调 1500–5000 W（"50-fold lower"）[直接设定]。
- 技术覆盖: AC / fans
- 一句话: 把风扇-空调之争框定为"35°C 规则 vs 50 倍能耗差"。

**Gupta et al. (2012). Electric fans for reducing adverse health impacts in heatwaves (Cochrane review). J Evidence-Based Medicine.**
- DOI: 10.1111/j.1756-5391.2012.01196_1.x | 核实: 已核实(Consensus)
- 方法: 系统综述（Cochrane）。
- 关键数字: 未找到任何合格研究；"does not support or refute the use of electric fans" [直接设定]。
- 技术覆盖: fans
- 一句话: 机构阈值缺乏试验证据的权威出处。

**Meade, Kenny et al. (2024). A critical review of the effectiveness of electric fans as a personal cooling intervention in hot weather and heatwaves. Lancet Planetary Health.**
- DOI: 10.1016/s2542-5196(24)00030-5 | 核实: 已核实(Consensus)
- 方法: 批判性综述，重新审视 2021 年后"风扇可用到 40°C"的证据。
- 关键数字: 机构历史阈值 "≥35°C" [引用自: 各国卫生机构]；2021 年后指南 "up to 40°C" [引用自: WHO 等]；结论"continue to advise against fan use in air temperatures higher than 35°C"，尤其 ≥65 岁 [直接设定]；明确提出改善"ambient cooling（air conditioning or evaporative coolers）"的可及性，并与"skin wetting or fan use"组合 [直接设定]。
- 技术覆盖: AC / fans / **evaporative**（作为环境降温选项被点名）
- 一句话: 少数把蒸发冷却器与空调并列为"环境降温"、把风扇/湿皮肤列为"个人降温"的层级式论述。

**Hospers, Jay et al. (2020). Electric fans: a potential stay-at-home cooling strategy during the COVID-19 pandemic this summer? Science of the Total Environment.**
- DOI: 10.1016/j.scitotenv.2020.141180 | 核实: 已核实(Consensus)
- 方法: 用生物物理模型界定美国夏季风扇使用的环境极限。
- 关键数字: 摘要未给出数值。
- 技术覆盖: fans
- 一句话: 把风扇阈值问题与疫情期间"居家降温"政策相联系。

---

## (b) 温度 + 湿度阈值（热平衡模型、热指数、UTCI/WBGT、ASHRAE 55 气流）

**Jay, Cramer, Ravanelli, Hodder (2015; online 2014). Should electric fans be used during a heat wave? Applied Ergonomics.**
- DOI: 10.1016/j.apergo.2014.07.013 | 核实: 已核实(Consensus)
- 方法: 概念性人体热平衡模型（蒸发需求 Ereq、最大蒸发潜力 Emax、预测出汗率），有/无风扇对比，叠加历史十次重大热浪峰值条件。
- 关键数字: 风扇使生理代偿与心血管应激的临界气温提高 "∼3–4 °C, irrespective of RH"；边际收益可至 "51.1 °C at 10%RH (young)", "48.1 °C at 10%RH (elderly)"；脱水担忧仅在 ">40 °C and <10%RH" 成立，且多出汗仅 "∼20–30 mL/h" [均为直接设定]。
- 技术覆盖: fans
- 一句话: 风扇"湿度依赖阈值"范式的奠基模型，结论是现行指南低估风扇保护作用。

**Morris, Jay et al. (2021). Electric fan use for cooling during hot weather: a biophysical modelling study. Lancet Planetary Health.**
- DOI: 10.1016/s2542-5196(21)00136-4 | 核实: 已核实(Consensus)
- 方法: 生物物理模型给出三类人群的湿度依赖上限，再用 108 城市 2007–2019 逐时数据折算"简化阈值"。
- 关键数字: 简化阈值 "<39.0°C（健康青年）、<38.0°C（健康老年）、<37.0°C（服用抗胆碱药老年）" [直接设定]；现行 WHO "35°C" [引用自: WHO]；按模型风扇有益天数 30.0/31（96.6%）青年、29.4/31 老年。
- 技术覆盖: AC（作为对照成本）/ fans
- 一句话: 把湿度依赖曲线"折叠"为按人群分级的单一气温数字，是目前被政策引用最多的新阈值。

**Tartarini, Schiavon, Jay, Arens, Huizenga (2021). Application of Gagge's energy balance model to determine humidity-dependent temperature thresholds for healthy adults using electric fans during heatwaves. Building and Environment.**
- DOI: 10.1016/j.buildenv.2021.108437 | 核实: 已核实(Consensus)
- 方法: Gagge 两节点模型 + 开源在线工具（CBE），输入气温、RH、风速、MRT、代谢率、服装。
- 关键数字: 现行指南 "approximately 35 °C" [引用自: 各国指南]；风速 0.8 m/s 使出现热应激的临界操作温度平均提高 "14 °C for RH above 22%" [直接设定]；115 大城市 1990–2014 极端事件中 93 个风扇有益 [直接设定]。
- 技术覆盖: fans（空调作为"最贵"对照）
- 一句话: 把 ASHRAE 55 的 SET/两节点方法移植到热浪安全判定，并产品化为政策工具。

**Foster, Smallcombe, Hodder, Jay, Flouris, Havenith (2021). Quantifying the impact of heat on human physical work capacity; part II … International Journal of Biometeorology.**
- DOI: 10.1007/s00484-021-02212-y | 核实: 已核实(Consensus)
- 方法: 300 次 1 小时劳动试验（35/40/45/50°C × 20–80% RH；3.5 vs 0.2 m/s）+ 人体传热物理模型生成温湿矩阵。
- 关键数字: "When air temperature is ≥ 35 °C, fans are ineffective and potentially harmful when relative humidity is below 50%" [直接设定]；风效应"well captured by UTCI, but not by WBGT and aspirated wet-bulb" [直接设定]。
- 技术覆盖: fans
- 一句话: 职业场景的温湿矩阵，同时裁定 UTCI 优于 WBGT 作为风扇判定指数。

**Morris, Jay et al. (2019). The Effects of Electric Fan Use Under Differing Resting Heat Index Conditions: A Clinical Trial. Annals of Internal Medicine.**
- DOI: 10.7326/m19-0512 | 核实: 已核实(Consensus)
- 方法: 随机交叉热舱试验（12 名青年男性，2 h，2.0 m/s），专门构造"热指数更高但更湿"与"热指数更低但极干"两种条件以检验热指数的适用性。
- 关键数字: EPA 阈值 "HI of 37.2°C" [引用自: US EPA]；湿热条件 "HI of 56°C" 风扇有益、极干条件 "HI of 46°C" 风扇有害 [直接设定]；"very hot (45°C) but arid (RH <10%)" 地区不宜用风扇 [直接设定]。
- 技术覆盖: fans / AC（作为更贵替代）
- 一句话: 实证证明单一热指数不能作为风扇判据，必须温湿分开。

**Bröde, Fiala, Kampmann (2023). Temperature–Humidity-Dependent Wind Effects on Physiological Heat Strain … Reproduced by UTCI. Biology.**
- DOI: 10.3390/biology12060802 | 核实: 已核实(Consensus)
- 方法: 198 次实验（中等运动，3 h），GAM 拟合风速 0.3→2 m/s 的效应，与 UTCI 比较。
- 关键数字: >35°C 时风仍有益的条件：水汽压 ">2 kPa"（心率、核心温）、">3 kPa"（皮温、出汗）[直接设定]；UTCI 与观测相关 r = 0.9 [直接设定]。
- 技术覆盖: fans
- 一句话: 用绝对湿度（kPa）而非 RH 给出风扇有益边界，并为 UTCI 做工具背书。

**Parsons et al. (2023). Higher Temperatures in Socially Vulnerable US Communities Increasingly Limit Safe Use of Electric Fans for Cooling. GeoHealth.**
- DOI: 10.1029/2023gh000809 | 核实: 已核实(Consensus)
- 方法: 1950–2021 逐时再分析数据 × 既有安全阈值 × 社会脆弱性指数。
- 关键数字: 阈值 [引用自: "recent research"，即 Morris et al. 2021 等]；不安全小时数增加 "∼70%"；高 SVI 地区暴露概率 "1.5–2 times" [直接设定]。
- 技术覆盖: fans（隐含"需要替代降温策略"）
- 一句话: 把人群阈值转化为空间-时间"风扇不可用小时数"，指向替代技术需求。

**ASHRAE Standard 55 (2010/2013 addenda, 2017/2020) – 提高风速部分 + Arens, Turner, Zhang, Paliaga (2009). Moving air for comfort. ASHRAE Journal.**
- DOI: 无（标准/杂志） | 核实: 已核实(WebSearch: ashrae.org addenda PDF)
- 方法: 用 SET（Gagge 两节点）折算"等效降温"，允许在更高操作温度下保持舒适；无人控时限 0.8 m/s。
- 关键数字: 风速 >0.2 m/s（40 fpm）时须用 SET 法；无人控且操作温度 >25.5°C 时风速上限 "0.8 m/s (160 fpm)" [直接设定: ASHRAE]。
- 技术覆盖: fans（与空调设定点联动）
- 一句话: 舒适范围内"风扇换空调设定点"的工程标准依据，也是 Tartarini 2021 方法的来源。

---

## (c) 生理热舱实验设定风扇安全上限

**Gagnon, Romero, Cramer, Jay, Crandall (2016). Cardiac and Thermal Strain of Elderly Adults Exposed to Extreme Heat and Humidity With and Without Electric Fan Use. JAMA.**
- DOI: 10.1001/jama.2016.10550 | 核实: 已核实(Consensus)
- 方法: 老年人（61–71 岁）42°C 热舱、RH 30→70% 阶梯递增、≈4 m/s。
- 关键数字: 机构阈值 "approximately 35°C" [引用自: 公共卫生机构]；42°C 条件下风扇使老年人心率与核心温更高 [直接设定]。
- 技术覆盖: fans
- 一句话: 首个显示风扇在极端湿热下对老年人有害的实验。

**Gagnon et al. (2017). Age Modulates Physiological Responses during Fan Use under Extreme Heat and Humidity. MSSE.** — DOI: 10.1249/mss.0000000000001348 | 已核实(Consensus)。42°C、RH 30→70%：老年 HR +5 bpm、Tcore +0.20°C、Tsk +0.47°C；青年无害 [直接设定]。
**Gagnon et al. (2017). Electric fan use during heat waves: Turn off for the elderly? Temperature.** — DOI: 10.1080/23328940.2017.1295833 | 已核实(Consensus)。评论，重申机构 "≈35°C (95°F)" [引用自: 机构]。

**Ravanelli et al. (2017). The biophysical and physiological basis for mitigated elevations in heart rate with electric fan use … Int J Biometeorol.**
- DOI: 10.1007/s00484-016-1213-0 | 核实: 已核实(Consensus)
- 关键数字: 36°C 与 42°C、4.2 m/s；42°C 时风扇使干热增益更大（C+R −78 vs −27 W/m²）但 Emax 更高（376 vs 161 W/m²）[直接设定]。
- 一句话: 给出风扇"增加干热增益 vs 提升蒸发效率"的定量机制。

**Mihalcin, Ravanelli et al. (2025). Examining the Physiological Strain with Electric Fans During High Indoor Heat Stress. Building and Environment.**
- DOI: 10.1016/j.buildenv.2025.113261 | 核实: 已核实(Consensus)
- 方法: 10 名健康成人，38→47°C 3 小时线性升温，风扇 ∼5.5 m/s vs 静风 <0.2 m/s。
- 关键数字: 心率/核心温在 "≥44°C / ≥45°C" 时风扇组显著更高；结论 ">43°C" 为安全上限，"∼3–11°C greater than guidance" [直接设定]；补水 "∼250 mL/h at 43°C" [直接设定]；机构 "≥35°C" [引用自: 各卫生机构]。
- 技术覆盖: fans
- 一句话: 目前最直接的"升温爬坡"实验上限（~43°C，青年、低湿）。
- （会议摘要前身：Mihalcin et al. 2024, Physiology, DOI 10.1152/physiol.2024.39.s1.2561，已核实(Consensus)，25% RH，同样得 43°C。）

**O'Connor, Kenny et al. (2024). Effect of Electric Fans on Body Core Temperature in Older Adults Exposed to Extreme Indoor Heat. JAMA.**
- DOI: 10.1001/jama.2024.19457 | 核实: 已核实(Consensus)
- 方法: 65–85 岁，模拟北美家庭热浪室内条件（同一试验 NCT05695079 的配套论文给出：36°C、45% RH、8 h、风速 0/2/4 m/s）。
- 关键数字: 摘要未给数值；配套论文 Lee et al. 2025 称风扇 "failed to meaningfully mitigate" 核心温升高 [直接设定]。
- 技术覆盖: fans
- 一句话: 全天候 8 小时暴露下风扇对老年人核心温几乎无效，支持 Meade 2024 的保守立场。

**Lee, Kenny et al. (2025). Effect of pedestal fan use on serum stress biomarkers in older adults … Physiological Reports.** — DOI: 10.14814/phy2.70390 | 已核实(Consensus)。36°C/45% RH、8 h、0/2/4 m/s（4 m/s 为"biophysical modeling 所用风速"）；核心温升 ~1.0°C 各组相同 [直接设定]。
**King, Kenny et al. (2025). The Efficacy of Fan Use on Autophagy … APNM.** — DOI: 10.1139/apnm-2025-0250 | 已核实(Consensus)。4 m/s 风扇使凋亡蛋白升高，"fan use at high settings … may incur greater cellular stress" [直接设定]。

**O'Connor, Kenny et al. (2025). Effect of Ceiling Fans on Core Temperature in Bed-Resting Older Adults Exposed to Indoor Overheating. J Am Geriatr Soc.**
- DOI: 10.1111/jgs.70109 | 核实: 已核实(Consensus)
- 方法: 20 名老年人，31°C/45% RH、8 h，吊扇 ~1.5 m/s vs 0。
- 关键数字: 峰值核心温降低 "0.2 [0.1–0.3]°C" [直接设定]；"fans are recommended for cooling at temperatures up to 40°C" [引用自: 近期指南]；提出 "combined 'fan-first' approach, integrating fans with ambient cooling" [直接设定]。
- 技术覆盖: fans + AC（组合）
- 一句话: 实验层面首次明确提出"风扇优先、再叠加环境降温"的组合规则。

**McKenna, Crandall et al. (2025). Evaluating low energy cooling strategies on thermal and cardiac strain in older adults exposed to very hot-dry heat … J Appl Physiol.**
- DOI: 10.1152/japplphysiol.00390.2025 | 核实: 已核实(Consensus)
- 方法: 23 名老年人（66–84 岁），47°C/15% RH、3 h，四臂：喷水、风扇、喷水+风扇、无。
- 关键数字: 风扇使核心温升高 "+0.60°C [0.36, 0.84]"，喷水降低 "−0.24°C [−0.42, −0.06]"；喷水+风扇对核心温无影响 [直接设定]。
- 技术覆盖: fans / **evaporative（皮肤湿润=个人蒸发冷却）**
- 一句话: 极干极热下"风扇有害、湿皮肤有益、二者叠加抵消"，是蒸发冷却替代风扇的最直接生理证据。

**Chaseling, Gagnon, Jay et al. (2025). Thermal and Perceptual Responses of Older Adults With Fan Use in Heat Extremes. JAMA Network Open.**
- DOI: 10.1001/jamanetworkopen.2025.23810 | 核实: 已核实(Consensus)
- 关键数字（二手转述，待核）: 38°C/60% RH 风扇使老年人核心温略降、舒适改善；45°C/15% RH 风扇使核心温 +0.3°C。
- 一句话: 同一人群在湿热 vs 干热下结论相反，支持"湿度决定风扇可用性"。

**Graham, Jay et al. (2025). Electric Fan Use With Dehydration in Extreme Heat and Humidity. JAMA Network Open.** — DOI: 10.1001/jamanetworkopen.2025.26701 | 已核实(Consensus)。随机交叉 3 h，检验补水状态是否改变风扇效应（摘要无数值）。
**Xu et al. (2025). Electric fan-based cooling strategies … young males. J Thermal Biology.** — DOI: 10.1016/j.jtherbio.2025.104166 | 已核实(Consensus)。36.5°C/57% RH、8 h；风扇+足量补水效果最佳 [直接设定]。

**Wang, F. et al. (2022). Biophysical modelling predicts unreliable core temperature responses on healthy older adults using electric fans at residential homes during heatwaves. Building and Environment.**
- DOI: 10.1016/j.buildenv.2022.109888 | 核实: 已核实(Consensus)
- 方法: 在生物物理模型中加入心血管调节，与仅考虑出汗调节的模型对比。
- 关键数字: 摘要无数值；结论"not recommended to use biophysical models to determine the threshold temperature of electric fan use for older adults" [直接设定]。
- 技术覆盖: fans
- 一句话: 方法学批评——(b) 类模型阈值不适用于老年人。

**Bhuvad et al. (2024). Evaluation of physiological and thermal comfort effectiveness of ceiling fan and table fan during a heat wave. Energy and Buildings.**
- DOI: 10.1016/j.enbuild.2024.114706 | 核实: 已核实(Consensus)
- 关键数字: 16 名青年，41.0±0.5°C、35±2% RH、2 h；台扇优于吊扇 [直接设定]。
- 一句话: 在风扇内部再分"台扇 vs 吊扇"的选择规则。

---

## (d) 能源系统 / 综合评估 / 建筑存量模型中的技术组合与成本最优选择

**IEA (2018). The Future of Cooling: Opportunities for energy-efficient air conditioning.**
- DOI: 无 | 核实: 已核实(WebSearch: iea.org 报告页；PDF 因域名限制未抓取)
- 方法: 全球建筑存量-能耗情景模型（Baseline vs Efficient Cooling Scenario）。
- 关键数字: 空调存量 "1.6 billion → 5.6 billion by 2050"；空调+风扇占建筑用电 "about a fifth"（≈全球用电 10%）；"8% of the 2.8 billion people living in the hottest parts of the world" 有空调 [直接设定: IEA]。搜索结果中未见蒸发冷却器单独存量/情景数字。
- 技术覆盖: AC / fans（蒸发冷却未在可见摘要中出现）
- 一句话: 最常被引用的空调扩张基准，但其技术组合基本只有"空调 vs 效率"，风扇是背景、蒸发冷却缺位。

**Mastrucci, Byers, Pachauri, Rao (2019). Improving the SDG energy poverty targets: Residential cooling needs in the Global South. Energy and Buildings.**
- DOI: 10.1016/j.enbuild.2019.01.015 | 核实: 已核实(Consensus)
- 方法: 全球格网 variable degree days (VDD) 方法，结合气候、住房类型、电力接入、空调拥有率估算"基本降温缺口"及能耗。
- 关键数字: "Between 1.8 to 4.1 billion … may need AC"（取决于室内目标温度与暴露天数）；弥补缺口 "median energy demand growth of 14% of current global residential electricity consumption, primarily for AC" [直接设定]；IIASA 海报称该 14% 为"用风扇与空调弥补缺口"（原文中风扇/空调的分配规则未能核实——PDF 域名被屏蔽）。
- 技术覆盖: AC / fans（蒸发冷却仅以"innovative cooling technologies"笼统提及）
- 一句话: 把"是否需要空调"定义为室内温度阈值+暴露天数的函数，是降温缺口文献的方法原点。

**Kikstra, Mastrucci, Min, Riahi, Rao (2021). Decent living gaps and energy needs around the world. Environmental Research Letters.** — DOI: 10.1088/1748-9326/ac1c27 | 已核实(WebSearch: pure.iiasa.ac.at 条目)。体面生活标准（DLS）能耗核算，降温作为住房服务的一项；搜索可见摘要未给出风扇/空调分配规则。
**Mastrucci, van Ruijven, Byers, Poblete-Cazenave, Pachauri (2021). Global scenarios of residential heating and cooling energy demand and CO2 emissions. Climatic Change.** — DOI: 10.1007/s10584-021-03229-3 | 已核实(Consensus)。MESSAGEix-Buildings：自下而上能耗 + 存量更替 + 离散选择模型；制冷 CO2 2050 年增 "58.2 (SSP1)–85.2% (SSP3)" [直接设定]。
**Mastrucci et al. (2022). Cooling access and energy requirements for adaptation to heat stress in megacities. Mitig Adapt Strateg Glob Change.** — DOI: 10.1007/s11027-022-10032-7 | 已核实(Consensus)。22 个全球南方特大城市；缺口人口 "33% (SSP1) to 86% (SSP3)"；能耗随 2.0→3.0°C 升温增 "7 to 23%" [直接设定]。

**Falchetta & Mistry (2021). The role of residential air circulation and cooling demand for electrification planning: Implications of climate change in sub-Saharan Africa. Energy Economics.**
- DOI: 10.1016/j.eneco.2021.105307 | 核实: 已核实(Consensus)
- 方法: 把无电家庭的"空气流通与降温需求"（风扇/空调情景）接入撒哈拉以南非洲自下而上电气化成本最优模型。
- 关键数字: 计入降温后电气化投资平均增 "65.5%"；气候变化再增 "4%"；分散式系统作为最低成本选项的份额下降 "4.5 percentage points" [直接设定]。
- 技术覆盖: fans / AC（"cooling appliances"情景）
- 一句话: 少数把风扇与空调的采用情景作为电力规划内生变量的成本最优模型。

**Falchetta, De Cian, Pavanello, Sue Wing (2024). Inequalities in global residential cooling energy use to 2050. Nature Communications.**
- DOI: 10.1038/s41467-024-52028-8 | 核实: 已核实(Consensus)
- 方法: 67 万户多国家庭调查训练统计模型，格网化预测空调采用与用电。
- 关键数字: 空调家庭比例 "27% → 41% (33–48%)"；用电 "1220 → 1940 (1590–2377) TWh/yr"；"Up to 4 billion people may lack AC in 2050" [直接设定]。
- 技术覆盖: AC（仅）
- 一句话: 全球格网空调采用预测的最新基准，但技术选择仅"有/无空调"。

**Pavanello, De Cian, Davide, Mistry, Cruz, Bezerra, Jagu, Renner, Schaeffer, Lucena (2021). Air-conditioning and the adaptation cooling deficit in emerging economies. Nature Communications.**
- DOI: 10.1038/s41467-021-26592-2 | 核实: 已核实(Consensus)
- 方法: 巴西/印度/印尼/墨西哥家庭微观数据，离散选择；驱动变量为收入与"humidity-adjusted temperature"。
- 关键数字: 2040 年空调采用增 "twofold to sixteen-fold"；"64 to 100 million families with access to electricity will not be able to adequately satisfy their demand for thermal comfort" [直接设定]；正文指出风扇比空调更普及、更适合低收入户（能耗低、不依赖稳定电网）。
- 技术覆盖: AC / fans（描述性）
- 一句话: 用湿度校正温度作采用驱动，是 (b) 类思想进入经济学模型的代表。

**Davis & Gertler (2015). Contribution of air conditioning adoption to future energy use under global warming. PNAS.**
- DOI: 10.1073/pnas.1423558112 | 核实: 已核实(Consensus)
- 方法: 墨西哥 2.7 万户微观数据；采用（extensive margin）与使用（intensive margin）分开估计，与世纪末升温叠加。
- 关键数字: 暖区空调采用随收入每 1000 美元增 "2.7%"，饱和近 "80%"（新闻稿）；预测暖区"near-universal saturation … within just a few decades" [直接设定]。
- 技术覆盖: AC
- 一句话: 空调采用经济学的奠基文；风扇/蒸发冷却不在模型中。

**Davis, Gertler, Jarvis, Wolfram (2021). Air conditioning and global inequality. Global Environmental Change.** — DOI: 10.1016/j.gloenvcha.2021.102299 | 已核实(Consensus)。16 国微观数据；采用集中在高收入户，巴基斯坦 2050 年前新增采用集中在最高收入三分位 [直接设定]。AC only。
**Biardeau, Davis, Gertler, Wolfram (2020). Heat exposure and global air conditioning. Nature Sustainability.** — DOI: 10.1038/s41893-019-0441-9 | 已核实(WebSearch: nature.com)。1.45 万气象站 10 年日数据算 219 国 CDD [直接设定]。AC only。
**van Ruijven, De Cian, Sue Wing (2019). Amplification of future energy demand growth due to climate change. Nature Communications.** — DOI: 10.1038/s41467-019-10399-3 | 已核实(WebSearch: pure.iiasa.ac.at/PCHES)。210 个情景；强升温下 2050 年前后气候暴露能源需求增 "25–58%" [直接设定]。技术不区分。
**Colelli, Emmerling, Marangoni, Mistry, De Cian (2022). Increased energy use for adaptation significantly impacts mitigation pathways. Nature Communications.** — DOI: 10.1038/s41467-022-32471-1 | 已核实(WebSearch: CORDIS)。IAM 中内生化适应能耗。（注：任务提到的 "Colelli 2023 Nature Sustainability" 未找到；2023 年同作者论文发表于 Scientific Reports，见下。）
**Colelli, Wing, De Cian (2023). Air-conditioning adoption and electricity demand highlight climate change mitigation–adaptation tradeoffs. Scientific Reports.** — DOI: 10.1038/s41598-023-31469-z | 已核实(Consensus)。欧洲/印度空调普及率 2050 年达 "around 40%"；每减 1 人·度日暴露，欧洲需 "0.53 kWh" vs 印度 "0.1 kWh" [直接设定]。AC only。
**Colelli & Mistry (2020). Cooling demand in integrated assessment models: a methodological review. ERL.** — DOI: 10.1088/1748-9326/abb90a | 已核实(Consensus)。88 个情景综述；指出 IAM 对"提供热适应服务的能耗设备的采用"刻画不足 [直接设定]。
**Andrijevic, Byers, Mastrucci, Smits, Fuss (2021). Future cooling gap in shared socioeconomic pathways. ERL.** — DOI: 10.1088/1748-9326/ac2195 | 已核实(Consensus)。（注：任务写作 Nat Commun，实际为 ERL。）缺口人口 2050 年 "2 billion–5 billion" [直接设定]；适应能力仅以空调度量。
**De Cian et al. (2025). The impact of air conditioning on residential electricity consumption across world countries. JEEM.** — DOI: 10.1016/j.jeem.2025.103122 | 已核实(Consensus)。25 国离散-连续选择框架；空调使家庭用电增 "36%"；2050 年制冷用电 "976–1393 TWh" [直接设定]。AC only。
**Crassier et al. (2026). Inequalities in the cooling gap and energy implications of adaptation. Environ Res: Climate.** — DOI: 10.1088/2752-5295/ae81db | 已核实(Consensus)。当前缺口 "3.6 billion"；2100 基线仍 "3.4 billion" [直接设定]。
**Sherman, Lin, McElroy (2022). Projected global demand for air conditioning associated with extreme heat and implications for electricity grids in poorer countries. Energy and Buildings.** — DOI: 10.1016/j.enbuild.2022.112198 | 已核实(WebSearch: peeref/ouci 条目)。CMIP6 集合；印度/印尼制冷用电可达现有总用电 "75%"；高排放下城市人口 "99%" 需空调 [直接设定]。AC only。

**Malik, Bongers, McBain, Rey-Lescure, de Dear, Capon, Lenzen, Jay (2022). The potential for indoor fans to change air conditioning use while maintaining human thermal comfort. Lancet Planetary Health.**
- DOI: 10.1016/S2542-5196(22)00042-0 | 核实: 已核实(WebSearch: 纽卡斯尔大学机构库/Lancet 链接)
- 方法: 澳大利亚全国逐时气候 × 舒适模型：5 个情景——仅空调、以及风速 0.1/0.3/0.6/1.2 m/s 的"fan-first"情景，"air conditioning was used only once the upper temperature threshold for thermal discomfort was exceeded"。
- 关键数字: 1.2 m/s 情景年能耗 "5592 GWh → 1344 GWh (≈76% 减少)"，排放 "5091 → 1208 kilotonnes" [直接设定]。任务中提到的 28°C 启动阈值未在摘要中核实。
- 技术覆盖: AC + fans（顺序组合）
- 一句话: 目前最明确的"风扇优先、超阈值再开空调"的国家尺度能耗-排放模型。

**Jay, Capon, Berry, Broderick, de Dear, Havenith, Honda, Kovats, Ma, Malik, Morris, Nybo, Seneviratne, Vanos, Ebi (2021). Reducing the health effects of hot weather and heat extremes: from personal cooling strategies to green cities. Lancet.**
- DOI: 10.1016/S0140-6736(21)01209-5 | 核实: 已核实(WebSearch: thelancet.com)
- 方法: 叙述性综述，按景观-城市-建筑-个人四个尺度排列降温策略，评估各策略利弊，并针对养老院、贫民区、工作场所、难民营等场景给出建议。
- 关键数字: 摘要无数值；核心论点"relying on air conditioning in the future is not sustainable"。
- 技术覆盖: AC / fans / 其他个人与被动策略
- 一句话: 政策层面"降温策略层级"的代表性框架，是 fan-first 论述的理论来源。

**Bone, Jay et al. (2025). Fan-first heat-health protection. Medical Journal of Australia.** — DOI: 10.5694/mja2.52662 | 已核实(Consensus)。评论/观点（无摘要）；明确提出"fan-first"原则。

**Yan et al. (2024/2025). India's residential space cooling transition: Decarbonization ambitions since the turn of millennium. Applied Energy.** — DOI: 10.1016/j.apenergy.2025.125929 | 已核实(Consensus)。自下而上需求-资源模型 + 分解；"increase in carbon emissions from space cooling can be primarily attributed to the use of fans"；风扇在城市户近饱和、将长期是农村主要方式 [直接设定]。AC / fans。

**Agarwal, N. et al. (2026). Spatializing Air Conditioner and Evaporative Cooler Ownership, Use, and Inequality across 400+ Districts Pan-India. Environmental Science & Technology.**
- DOI: 10.1021/acs.est.6c05101 | 核实: 已核实(Consensus)
- 方法: 大样本家庭调查 + 随机森林 + 倾向得分匹配，建立"空调 vs 蒸发冷却器"选择模型并空间化到 400+ 区。
- 关键数字: 2022 年全国户均拥有率 "EC-only 18%, AC-plus-EC 3%, AC-only 4%"；AC-vs-EC 模型"dependence on both local humidity and air temperature in addition to income"，kappa = 0.76；最高收入户空调 "178 kWh/capita/year" vs 蒸发冷却器 "56 kWh/capita/year" [直接设定]。
- 技术覆盖: AC / **evaporative**（风扇未单列）
- 一句话: 检索到的唯一把蒸发冷却器与空调作为并列选项、以温湿+收入做判别的实证选择模型。

**Pavanello & Sue Wing (2023, working paper). Adapting to Heat Extremes with Unequal Access to Cooling: Evidence from India.**
- DOI: DOI未找到（工作论文，fpavanello.github.io） | 核实: 已核实(WebSearch: 作者主页/SIE 摘要；PDF 因域名限制未抓取)
- 方法: CPHS 18 轮面板，分别估计空调与蒸发冷却器拥有/使用对高温死亡率的缓解作用；按湿度校正后发现冷却器集中在干燥地区。
- 关键数字: 适应技术合计使高温死亡降 "21%"，年福利 "$32 billion"（SIE 摘要）；"subsidising air-conditioning is a cost-effective way" [直接设定]；蒸发冷却器的保护效果 "reduced"。
- 技术覆盖: AC / **evaporative**
- 一句话: 少见的把蒸发冷却器作为与空调竞争的健康-经济学选项并给出成本有效性结论的研究（尚未见期刊版）。

**Naderi, Sajadi, Naderi, Bakhti (2020). Simulation-based performance analysis of residential direct evaporative coolers in four climate regions of Iran. Journal of Building Engineering.**
- DOI: 10.1016/j.jobe.2020.101514 | 核实: 已核实(WebSearch: structurae/x-mol 条目)
- 方法: EnergyPlus 模拟典型公寓在伊朗四个柯本气候区的直接蒸发冷却器（DEC）与 PTAC 空调对比。
- 关键数字: 湿帘饱和效率提高 30% 可减电 "up to 50.0%"、减水 "29.6%"；24/26°C 设定点下 PTAC 比 80% 效率 DEC 多耗电 "234%–265%" [直接设定]。
- 技术覆盖: AC / **evaporative**
- 一句话: 以气候区（湿球温度）作为蒸发冷却 vs 空调的判别变量的建筑模拟代表。

**Al-Jubainawi et al. (2026). Sustainable thermal comfort assessment of evaporative cooling systems in hot and arid climates. Scientific Reports.**
- DOI: 10.1038/s41598-026-43175-7 | 核实: 已核实(Consensus)
- 方法: 柯本分类 + 本地舒适指数，逐时模拟伊拉克三城 5–9 月直接蒸发冷却 vs 机械通风。
- 关键数字: 舒适小时增加 "41.28% (Baghdad), 54.48% (Basrah), 30.55% (Mosul)" [直接设定]。
- 技术覆盖: **evaporative**（对照为通风，未含空调）
- 一句话: 用"舒适小时占比"判断蒸发冷却在干热气候的适用性。

**SEforALL. Chilling Prospects (2019–2026 年度报告) & CLASP (2022). Cooling Needs Assessment (Pakistan).**
- DOI: 无 | 核实: 已核实(WebSearch: seforall.org / clasp.ngo 页面；PDF 因域名限制未抓取)
- 方法: 按收入与电力接入层级（Tier）划分"降温可及性风险"人群；效率情景比较。
- 关键数字: 2019 年 "1.05 billion" 高风险人口（52 国）；2022 年最佳技术情景下可及性 "+19%"、用电 "−32%"（覆盖冰箱、舒适风扇、空调）；巴基斯坦 "nearly all households own an electric fan, but only 11% own an air conditioner"（CLASP 2022）[直接设定: 报告]。蒸发冷却仅在 SEforALL 技术手册中描述为"works particularly well in dry climates"，未进入分层指标。
- 技术覆盖: AC / fans（蒸发冷却仅描述）
- 一句话: 可及性框架以"风扇→空调"的电力层级为轴，蒸发冷却未被纳入量化。

**UNEP Cool Coalition. Global Cooling Watch 2023 ("Keeping it Chill") / 2025.**
- DOI: 无 | 核实: 已核实(WebSearch: unep.org 报告页)
- 方法: 情景路径（Sustainable Cooling Pathway）：被动优先 → 低能耗/混合方案 → 高效设备 → 制冷剂。
- 关键数字: 设备装机 2050 年前 "triple"；2025 版列出 "fans, evaporative coolers, hybrid fan-AC systems, and off-grid appliances"；"hybrid systems combining fans and AC can cut energy use by 30 per cent" [直接设定: UNEP]。
- 技术覆盖: AC / fans / **evaporative**
- 一句话: 少数在路径层面同时点名三种技术并给出"风扇+空调混合省电 30%"数字的机构报告。

---

## (e) 其他方法：舒适/自适应标准、职业标准、家庭离散选择、成本有效性

**de Dear & Brager (2002). Thermal comfort in naturally ventilated buildings: revisions to ASHRAE Standard 55. Energy and Buildings.** [较早的奠基文]
- DOI: 10.1016/S0378-7788(02)00005-1 | 核实: 已核实(WebSearch: structurae/麦考瑞大学条目)
- 方法: 自适应舒适模型（室外月均温→可接受室内操作温度），为自然通风建筑放宽空调需求。
- 技术覆盖: AC（何时"不需要"）/ 隐含风扇与通风
- 一句话: "自适应舒适"路线决定空调启用阈值的标准依据。

**Hoyt, Arens, Zhang (2015). Extending air temperature setpoints: Simulated energy savings and design considerations for new and retrofit buildings. Building and Environment.** — DOI: 10.1016/j.buildenv.2014.09.010 | 已核实(WebSearch: structurae/eScholarship)。模拟放宽空调设定点（配合气流）节能；具体百分比未在可见摘要中核实。AC + fans。
**Schiavon & Melikov (2008). Energy saving and improved comfort by increasing air movement. Energy and Buildings 40(10):1954–1960.** — DOI未找到（DTU Orbit 条目未显示 DOI）。提高风速允许更高室温：制冷能耗节省 "17–48%"、峰值功率降 "10–28%"；风扇功率超过 "about 20 W" 时节能可能消失 [直接设定]。AC + fans。
**Zhai et al. (2013). Comfort under personally controlled air movement in warm and humid environments. Building and Environment.** — DOI: 10.1016/j.buildenv.2013.03.022 | 已核实(Consensus)。舒适可维持到 "30 °C and 60% RH"；风扇功耗 "<10 W per person"；建议标准 80% 可接受限扩展至 30°C/60% RH [直接设定]。
**Zhai et al. (2017). Selecting air speeds for cooling at sedentary and non-sedentary office activity levels. Building and Environment.** — DOI: 10.1016/j.buildenv.2017.06.027 | 已核实(Consensus)。24–30°C 下受试者自选风速。
**Zhou et al. (2023). Effects of elevated air speed on thermal comfort in hot-humid climate and the extended summer comfort zone. Energy and Buildings.** — DOI: 10.1016/j.enbuild.2023.112953 | 已核实(Consensus)。最高可接受操作温度 "31.3 (RH 40–60%)" 与 "28.6 °C (RH 70–90%)"，比 ASHRAE 55 扩展 "1.3 and 0.1 °C"；2.0 m/s 仍不能消除 32°C/85% 的不适 [直接设定]。
**He, Y.-D. et al. (2019). Review of fan-use rates in field studies … Energy and Buildings.** — DOI: 10.1016/j.enbuild.2019.04.015 | 已核实(Consensus)。Probit 风扇使用率模型；风扇使中性温度上限提高约 "3 K"（27.5→30.7°C）；混合模式建筑夏季空调使用率可减 "about 15%" [直接设定]。AC + fans。
**He, Y.-D. et al. (2018). Control behaviors and thermal comfort in a shared room with desk fans and adjustable thermostat. Building and Environment.** — DOI: 10.1016/j.buildenv.2018.03.049 | 已核实(Consensus)。28/30°C 下桌扇显著改善舒适；可调温时受试者少用风扇；"always-on"风扇策略使双方接受更高温度 [直接设定]。

**ISO 7243:2017. Ergonomics of the thermal environment — Assessment of heat stress using the WBGT index.**
- DOI: 无（标准） | 核实: 已核实(WebSearch: ANSI/DIN/NSAI 标准页)
- 方法: WBGT 参考值按代谢率与是否热适应分级，服装调整值（CAV）得 WBGTeff；风速只隐含在自然湿球中。
- 关键数字: 标准工作服 "Icl = 0.6 clo, im = 0.38"；参考线 "WBGTref = 59.9 − 14.1·log10(M)"（二手来源，未对照标准原文）。
- 技术覆盖: 无技术选择；但 Foster 2021 证明 WBGT 不能反映风扇效应。
- 一句话: 职业标准以 WBGT 为判据，却无法对"开风扇"给出一致判断，是 UTCI 替代论的靶子。

**Deng, H. et al. (2020). Household income inequality aggravates high-temperature exposure inequality in urban China. J Environmental Management.** — DOI: 10.1016/j.jenvman.2020.111224 | 已核实(Consensus)。中国城镇家庭空调与风扇使用随高温暴露增加；极端高温日数（日均温 ">80 °F"）促使购买/使用空调；富户更可能用空调 [直接设定]。AC + fans。
**Randazzo, De Cian, Mistry (2020). Air conditioning and electricity expenditure: The role of climate in temperate countries. Economic Modelling.** — DOI: 10.1016/j.econmod.2020.05.001 | 已核实(Consensus)。8 个温带国家；采用空调后电费增 "35%–42%" [直接设定]。AC only。
**Finnish cost–benefit study (2025). "Cooling is a cost-efficient way to adapt to heatwaves even in high-latitude cities."** — DOI未找到（仅 AGRIS 索引，作者/期刊未核实）。每条生命成本 "€38,200–416,000"，收益/成本 "1.8–18 倍"（二手）；对象为建筑级降温，不区分风扇/空调。
**Cost-effectiveness / QALY 比较风扇 vs 空调：** 本次检索未找到任何直接以 QALY/ICER 比较三种技术的研究（见小结）。

---

## Q1 小结

- **四条方法路线并存且互相争论**：(1) 机构固定气温阈值（WHO 旧版/UKHSA 35°C、CDC "high 90s °F"、EPA 热指数 37.2°C、WHO 新版 40°C）——源头是机构，几乎无原始实验支撑（Cochrane 2012）；(2) 温湿度依赖的热平衡模型（Jay 2015 → Morris 2021 的 39/38/37°C → Tartarini 2021 的 CBE 工具），其结论是"指南过严"；(3) 热舱实验（Ravanelli 2015、Gagnon 2016/17、Morris 2019、Mihalcin 2025 的 ~43°C、Kenny 组 2024–25 的 8 小时老年人试验），青年人支持放宽，老年人/干热条件支持收紧；(4) 能源-经济模型（IEA、IIASA/MESSAGEix、Davis、De Cian/Pavanello/Falchetta）以收入+CDD/湿度校正温度预测"有/无空调"。
- **判据变量在演化**：从干球温度 → 热指数 → (气温, RH) 矩阵 → 绝对湿度 kPa（Bröde 2023）→ UTCI 被证明优于 WBGT（Foster 2021）；经济模型侧则从 CDD 走向"humidity-adjusted temperature"（Pavanello 2021）和"湿度+气温共同决定 AC vs 蒸发冷却器"（Agarwal 2026）。
- **人群分层成为阈值的一部分**：Morris 2021 按年龄/用药分三档；Wang 2022 指出生物物理模型对老年人失效；Meade 2024 建议对 ≥65 岁维持 35°C。
- **组合/顺序规则（fan-first → AC）只在少数文献中被形式化**：Malik 2022（风速 0.1–1.2 m/s、超过舒适上限才开空调、省电 76%）、WHO 新版（空调 27°C + 风扇 "感觉凉 4°C"）、UNEP 2025（风扇+空调混合省 30%）、O'Connor 2025/McGarr 2026 的"fan-first + ambient cooling"、He 2019 的"风扇使空调使用率减 15%"。能源-经济主流模型（IEA、Falchetta 2024、Davis、Colelli、Andrijevic）仍是二元"有/无空调"，没有顺序或混合规则。
- **蒸发冷却是明显空白**：在 (a)(b)(c) 中几乎只以"皮肤湿润/喷水"（McKenna 2025、Chaseling 2025、Meade 2024）形式出现，无一项热舱实验测试真正的蒸发冷却器；在 (d) 中仅 Agarwal 2026（印度 AC vs EC 选择模型）、Pavanello & Sue Wing 工作论文、Naderi 2020（伊朗 DEC vs PTAC 模拟）、Al-Jubainawi 2026（伊拉克）和 UNEP 2025 路径把它作为独立选项；IEA 2018、SEforALL、CLASP 的可见摘要中蒸发冷却未被量化。巴基斯坦未找到同行评审的蒸发冷却器家庭研究。
- **"成本-收益替代"的经济学证据薄弱**：除 Pavanello & Sue Wing（空调补贴成本有效、蒸发冷却器保护较弱）和 Ravanelli 2016 的"50 倍电耗差"外，没有找到以 QALY/ICER 直接比较三种技术的研究；芬兰 2025 成本-收益研究仅在建筑级别讨论"降温"。
- **机构阈值内部不一致**：WHO 同时存在 35°C（Q&A/旧信息单）与 40°C（现行 fact sheet）；CDC 从 "high 90s" 改为模糊表述；EPA 沿用 2006 年热指数 99°F。文献多把它们并列转引（Ravanelli 2015 列出 32.3°C@35%RH 至 35.6–37.2°C 的区间）。

### 未产生有用结果的检索
- Consensus: "evaporative cooler desert cooler household ownership choice India Pakistan Iran energy"（触发额度耗尽，未返回）。
- WebSearch: "Pakistan evaporative air cooler households … peer-reviewed"（仅新闻与 CLASP 报告，无期刊论文）；"evaporative cooler/swamp cooler older adults heat chamber"（仅找到喷水与芬兰局部冷却装置研究）；"cost-effectiveness … electric fans versus air conditioning QALY"（无直接比较）；"global climate suitability map direct evaporative cooling vs AC"（仅零散技术论文，无全球图谱）；"Sherman 2022 … Jay Lenzen"（任务描述的作者组合不存在，实为 Sherman, Lin & McElroy）；"Colelli 2023 Nature Sustainability"（不存在，实为 Sci Rep 2023 / Nat Commun 2022）；"Andrijevic 2021 Nature Communications"（实为 ERL）；"Malik 2022 28°C"（摘要未出现该数字）。
- WebFetch 被域名白名单阻断：who.int、iea.org、iea.blob.core.windows.net、epa.gov、seforall.org、pure.iiasa.ac.at、cbe-berkeley.gitbook.io、fpavanello.github.io。
