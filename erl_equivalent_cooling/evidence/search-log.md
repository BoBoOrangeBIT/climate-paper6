# Search log (append only)

<!-- One block per query, written by lit-scout:
## 2026-11-01 | OpenAlex | C03
query: "..."  filters: from 2015, articles
hits 30, approved 6, rejected 20 (off-topic 14, different metric 6), maybe 4
-->

<!-- ===== lit-scout 批次 2026-11-05（P6EQ，C01–C22 全覆盖）===== -->
<!-- 环境说明：无 Zotero API，refs.bib 由 lit-scout 直接从 Crossref 元数据生成；OpenAlex 匿名检索全程 HTTP 429（搜索集群限流），Consensus 本月配额已用尽；因此结构化检索改用 Crossref bibliographic 查询 + WebSearch，所有 DOI 均经 api.crossref.org/works/<DOI> 逐条解析。 -->

## 2026-11-05 | 种子清单 | C01–C22
query: evidence/seed_refs_from_lit_review.txt（70 条，早先文献综述已核 DOI）
hits 70, approved 50（写入 refs.bib，含 7 条无 DOI 的报告/标准/网页：Gagge 1986, Arens 2009, ASHRAE 55-2020, IEA 2018, UNEP 2023, WHO 2024, Pavanello & Sue Wing 2025）, maybe 13（与 claim 关系间接，见 candidates.csv）, rejected 11（无 claim 对应 5：Ebi 2004, Randazzo 2020, De Cian 2019, van Ruijven 2019, Bouchama 2007；重复/版本 3：Carmichael 2012 转载、Cochrane protocol 版、IEA 2019/2023 区域或评论版；度量不同 2：Morris 2020 职业伞状综述、Foster 2021 Part I 无风速项；WMO/WHO 2015 指南被 2024 事实页取代 1）
备注：Deschênes 2022 采用期刊版 DOI 10.1111/caje.12609 而非 NBER 工作论文 DOI；Gupta 2012 采用 .pub2（综述正文）DOI；年份字段按作者引用习惯取在线发表年（Biardeau 2020、Tartarini 2021、Foster 2021、Wang 2022、O'Connor 2025 与 Crossref 印刷卷年份不同，已核对）。

## 2026-11-05 | OpenAlex | C09
query: "direct evaporative cooler saturation effectiveness cooling pad experimental"  filters: from 2005, articles
hits 0（HTTP 429 限流，重试 3 次均失败）, approved 0, rejected 0 — 改用 Crossref/WebSearch 完成（见下）

## 2026-11-05 | OpenAlex | C07
query: "Standard Effective Temperature SET validity high humidity limitations two-node model"  filters: from 2010
hits 0（HTTP 429）

## 2026-11-05 | OpenAlex | C04
query: "elevated air speed cooling effect SET ASHRAE 55 equivalent temperature"  filters: from 2008
hits 0（HTTP 429）

## 2026-11-05 | OpenAlex | C03（反证）
query: "electric fan heat wave harmful increase core temperature older adults"  filters: from 2012
hits 0（HTTP 429）

## 2026-11-05 | OpenAlex | C20（反证）
query: "evaporative cooler humidity indoor health risk"  filters: from 2010
hits 0（HTTP 429）

## 2026-11-05 | Consensus | C09 / C07 / C02
query: "direct evaporative cooler pad saturation effectiveness measured range"; "Standard Effective Temperature SET two-node model limitations validity high humidity elevated air speed"; "evaporative cooler ownership household survey Pakistan Iran India heat"
hits 0（本月免费额度已用尽，12 月 1 日重置）

## 2026-11-05 | Crossref works API | C11 / C06 / C07
query: 直接解析 DOI：10.1002/qj.3803 (Hersbach 2020, The ERA5 global reanalysis); 10.1016/j.softx.2020.100578 (Tartarini & Schiavon 2020, pythermalcomfort); 10.1175/JAMC-D-11-0143.1 (Stull 2011, Wet-bulb temperature from relative humidity and air temperature); 10.1175/1520-0450(1996)035<0601:IMFAOS>2.0.CO;2 (Alduchov & Eskridge 1996, Improved Magnus form approximation)
hits 4, approved 4（hersbach2020era5, tartarini2020pythermalcomfort, stull2011wet, alduchov1996improved）
附：Davies-Jones 2008 (10.1175/2007MWR2224.1) 解析成功但 rejected（伪绝热湿球，本文不用）

## 2026-11-05 | Crossref works API + WebSearch | C09（蒸发冷却饱和效率 0.6–0.85）
query: "direct evaporative cooling pad saturation effectiveness typical range ASHRAE handbook evaporative air-cooling equipment"; DOI 解析 10.1016/j.rser.2012.07.007, 10.1016/j.energy.2019.06.031, 10.1016/j.ijrefrig.2004.12.011, 10.1016/j.rser.2012.01.052
hits 4 + 10 网页, approved 3（duan2012indirect 综述；harby2019investigation 商用湿帘实测；camargo2005experimental 直接蒸发冷却器夏季实测效率）, rejected 1（xuan2012research 与 Duan 重复）；网页结果（Trane 50–80 %、IES VE 50–99 %、ASHRAE Handbook 第 41 章定义）均为软件手册/非同行评审，不收录。另见 Lo 2023（见 C20 块）正文给出 "typical swamp cooler efficiency between 65 % and 80 %"。

## 2026-11-05 | Crossref works API | C18 / C20（暴露–反应函数与湿度）
query: DOI 解析 10.1016/S0140-6736(14)62114-0 (Gasparrini 2015); 10.1038/s41558-021-01058-x (Vicedo-Cabrera 2021); 10.1289/EHP5430 (Armstrong 2019, The role of humidity in associations of high temperature with mortality); 10.1289/EHP11807 (Baldwin 2023, Humidity's role in heat-related health outcomes: a heated debate)
hits 4, approved 4

## 2026-11-05 | WebSearch + Crossref bibliographic | C20（反证：湿度在 ERF 中的作用；蒸发冷却器与健康）
query: "evaporative cooler heat mortality epidemiology protective OR risk humidity study Arizona OR India OR Iran"; Crossref: "Optimal heat stress metric for modelling heat-related mortality varies from country to country Lo 2023"
hits 10 网页 + 3, approved 1（lo2023optimal, Int J Climatol 43:5553–5568：8 种热应激指标 604 地点，干球温度与含湿度指标表现相近；以 65–80 % 效率的 swamp cooler 表示蒸发冷却潜力）, rejected 2（Guo 2024 739 城市湿度指标研究 Crossref 未命中确切 DOI，不收录；Sivaraj 2023 EGU 摘要）
结论：未找到任何以蒸发冷却器为暴露的流行病学研究——C03 "evaporative coolers nearly absent from the health literature" 得到支持。

## 2026-11-05 | WebSearch + Crossref bibliographic | C07 / C20（反证：SET 在高湿下的有效性）
query: "standard effective temperature SET* limitations high humidity overestimate underestimate evaluation hot humid study"; Crossref: "humidity thermal comfort hot humid standard effective temperature humidity correction coefficient Li 2018 Energy and Buildings"
hits 10 网页 + 3, approved 1（li2018modified, Energy and Buildings 158:393–405：SET 在湿热环境下未考虑湿度适应而有偏，提出湿度修正系数）, rejected 2（UCL 2025 瞬态响应研究未取得 DOI；Abdel-Ghany 2014 户外指标比较，不同情境）

## 2026-11-05 | WebSearch + Crossref bibliographic | C04 / C07 / C12（SET 当量降温、风速舒适）
query: "Arens Turner Zhang Paliaga 2009 Moving air for comfort ASHRAE Journal"; Crossref: "Comfort under personally controlled air movement in warm and humid environments Zhang Arens 2010"; DOI 解析 10.1016/j.buildenv.2015.03.013 (Zhang 2015 corrective power review)
hits 10 网页 + 3 + 1, approved 3（arens2009moving 无 DOI，ASHRAE Journal 51(5):18–28 经扫描目录确认；zhai2013comfort 10.1016/j.buildenv.2013.03.022；zhang2015review）, rejected 1（猜测 DOI 10.1016/j.buildenv.2009.06.016 实为 Berrouk 2010 飞沫扩散，弃用）
附：Gagge, Fobelets & Berglund 1986 (ASHRAE Transactions 92(2B):709–731) Crossref 无记录，以无 DOI 的 @article 收录；ASHRAE 55-2020 以 @misc + URL 收录。

## 2026-11-05 | WebSearch + Crossref bibliographic | C03 / C08（反证：风扇有害、老年人）
query: "Bröde 2023 electric fan heat stress threshold air velocity UTCI paper"; Crossref: "Electric fan use during heat waves biophysical modelling older adults core temperature Lee 2025 JAMA Network Open"
hits 10 网页 + 3, approved 3（brode2023temperature 10.3390/biology12060802：风在 >35 °C 干热下加重热应激、湿热下仍减轻；graham2025electric 10.1001/jamanetworkopen.2025.26701：脱水状态下风扇；gagnon2017electric 10.1080/23328940.2017.1295833：老年人应关风扇的评论）, rejected 1（Kim 2026 Medicaid 家访，无关）
附：种子清单中的反证已收录：Gupta 2012（Cochrane 无试验证据）、O'Connor 2024（38 °C/60 % 无效、45 °C/15 % 有害）、Chaseling 2025、Meade 2024（仍建议 >35 °C 不用风扇）、Wang 2022（生物物理模型对老年人不可靠）、Mihalcin 2025。

## 2026-11-05 | Crossref works API | C02 / C10 / C19
query: Crossref bibliographic "Fanning as an alternative to air conditioning Jay 2019"; DOI 解析 10.1016/j.scitotenv.2020.141180 (Hospers 2020)
hits 3 + 1, approved 2（jay2019fanning, Energy and Buildings 193:92–98；hospers2020electric）

## 2026-11-05 | WebSearch (who.int) | C03 / C21（WHO 指南）
query: 'WHO Europe "stay cool" heat advice "27" thermostat electric fan "70" electricity' (allowed_domains who.int); 'WHO fact sheet "heat and health" 2024 fans temperature advice'
hits 10, approved 1（who2024heat：https://www.who.int/news-room/fact-sheets/detail/climate-change-heat-and-health，2024-05-28，原文 "If using air conditioning, set the thermostat to 27˚C / 81˚F and turn on an electric fan – this will make the room feel 4˚C cooler. It can also save up to 70% on your electricity bill for cooling"）, rejected 2（WHO Q&A "Heatwaves: how to stay cool" 无日期，提及 >35 °C 风扇可能无效；WHO "Tips for keeping cool"（workplaces and major events initiative）称风扇仅在 <40 °C 使用——二者无稳定日期，未入库，可由作者决定是否补充）

## 2026-11-05 | WebSearch | C02（巴基斯坦/伊朗蒸发冷却器拥有率，可选）
query: 'household survey evaporative cooler ownership Pakistan Punjab percent households "evaporative cooler" OR "air cooler"'
hits 10, approved 0（MICS 2017-18 旁遮普把 "air cooler/fan" 合并为一项（94.4 %），空调 7.8 %；PBS 2020-21 表格未显示数值；均为数据库条目非文献），结论：巴基斯坦仍以种子中的 Noor 2020、伊朗以 Naderi 2020、印度以 Agarwal 2026 为据。

## 2026-11-05 | Crossref bibliographic | C06（DLS 规则来源）
query: "Improving the SDG energy poverty targets Residential cooling needs in the Global South Mastrucci"
hits 2, approved 1（mastrucci2019improving 10.1016/j.enbuild.2019.01.015，Energy and Buildings 186:405–415）, 另种子 kikstra2021decent 保留。[[AUTHOR TO CONFIRM: DLS 规则 26 °C / 60 % RH 的具体出处]]

## 2026-11-05 | Crossref works API | 其余新增
query: DOI 解析 10.1038/s41467-023-43121-5 (Vanos 2023 survivability); 10.1097/EDE.0000000000001241 (Sera 2020 AC and heat mortality); 10.1111/caje.12609 (Deschênes 2022 期刊版); 10.1088/2752-5309/ae25c8 (Ibbetson 2025)
hits 4, approved 3（vanos2023physiological, sera2020air, deschenes2022impact）, maybe 1（ibbetson2025cost 仅政策背景）
