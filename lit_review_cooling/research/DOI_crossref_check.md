# DOI 批量核验（Crossref API，2026-11-01，网络放行后）

方法：对参考文献表 160 条逐条调用 `https://api.crossref.org/works/<DOI>`，比对返回题名与本表题名（difflib 相似度；人工复核低分项 Foster 2021 与 Jay 2015 均为题名截取差异，实为一致）。

结果：**147 条 DOI 解析成功且题名一致**；12 条为无 DOI 的报告/标准/工作论文；**1 条无法解析**（Aynsley 2005, 10.1080/14733315.2005.11683708 → Crossref 404，题名检索亦无结果，改标"DOI 未能核实"）。

补充核验：
- Agarwal et al. 2026, 10.1021/acs.est.6c05101 → Crossref 返回 "Spatializing Air Conditioner and Evaporative Cooler Ownership, Use, and Inequality…", Environmental Science & Technology, 2026, Agarwal, Ramaswami（确认）。
- Sabater-Mezquita et al. 2026, 10.1186/s13561-026-00840-x → Health Economics Review 2026（确认）。
- Ibbetson et al. 2025, 10.1088/2752-5309/ae25c8 → Environmental Research: Health 2025, Ibbetson, Cairns, Oikonomou（确认；原误记为 Bao 2025）。
- Deschênes 2022, 10.3386/w30282 → NBER 2022（确认）。
- Pavanello & Sue Wing：Crossref 未见期刊版；存在 EGU 2024 会议摘要 DOI 10.5194/egusphere-egu24-1254（题为 "Adapting to Heat Extremes with Unequal Access to Cooling: Evidence from India"）；最新版本为 CESifo WP 12365（无 DOI）。
- IEA 2018 PDF（iea.blob.core.windows.net 已可访问）原文：风扇 "2.3 billion residential electric fans were in use in 2016"、"55% of all households globally owning at least one fan"、"more than 80 TWh in 2016, or nearly 1.5% of residential electricity consumption"、"increased 3.6 times since 2000"、存量 "from 2.3 billion to 3.9 billion over 2016-50"；蒸发冷却器仅定性提及（"In some countries, evaporative coolers or misting fans are also common … effectiveness depends on relative humidity"）；**风扇价格未见**。
- 仍被阻断：doi.org 跳转链（指向出版社域名）、www.iea.org（403）。

| # | 文献 | DOI | 核验结果 |
|---|---|---|---|
| 1 | Achebak H. et al. (2023). Drivers of the time-varying heat-cold-mortality association in Spain. Environment In | 10.1016/j.envint.2023.108284 | Crossref 解析成功，题名一致 |
| 2 | Agarwal N. et al. (2026). Spatializing air conditioner and evaporative cooler ownership, use, and inequality a | 10.1021/acs.est.6c05101 | Crossref 解析成功，题名一致 |
| 3 | Al-Jubainawi A. et al. (2026). Sustainable thermal comfort assessment of evaporative cooling systems in hot an | 10.1038/s41598-026-43175-7 | Crossref 解析成功，题名一致 |
| 4 | Alsilbi M.M. et al. (2026). Experimental study on performance improvement and energy savings of split-type AC  | 10.1016/j.icheatmasstransfer.2026.111507 | Crossref 解析成功，题名一致 |
| 5 | Andrijevic M. et al. (2021). Future cooling gap in shared socioeconomic pathways. Environmental Research Lette | 10.1088/1748-9326/ac2195 | Crossref 解析成功，题名一致 |
| 6 | ASHRAE Standard 55 (2010/2013 addenda; 2017/2020). Thermal environmental conditions for human occupancy — elev | 标准无 DOI（ashrae.org） | 无 DOI（报告/标准/工作论文） |
| 7 | Aynsley R. (2005). Saving energy with indoor air movement. International Journal of Ventilation. | 10.1080/14733315.2005.11683708 | Crossref 404：DOI 无法解析 |
| 8 | Bach A. et al. (2024). Practical cooling interventions for preventing heat strain in indoor factory workers in | 10.1002/ajim.23589 | Crossref 解析成功，题名一致 |
| 9 | Barreca A. et al. (2016). Adapting to climate change: the remarkable decline in the US temperature-mortality r | 10.1086/684582 | Crossref 解析成功，题名一致 |
| 10 | Benyamine A. et al. (2024). Assessing indoor air quality and health risks of air conditioner usage in resident | 10.1093/ijlct/ctae191 | Crossref 解析成功，题名一致 |
| 11 | Bhuvad S.S. et al. (2024). Evaluation of physiological and thermal comfort effectiveness of ceiling fan and ta | 10.1016/j.enbuild.2024.114706 | Crossref 解析成功，题名一致 |
| 12 | Biardeau L.T. et al. (2020). Heat exposure and global air conditioning. Nature Sustainability. | 10.1038/s41893-019-0441-9 | Crossref 解析成功，题名一致 |
| 13 | Bienvenido-Huertas D. et al. (2021). Applying the mixed-mode with an adaptive approach to reduce the energy po | 10.1016/j.energy.2021.121636 | Crossref 解析成功，题名一致 |
| 14 | Bobb J.F. et al. (2014). Heat-related mortality and adaptation to heat in the United States. Environmental Hea | 10.1289/ehp.1307392 | Crossref 解析成功，题名一致 |
| 15 | Bone A., Tartarini F., Jay O. (2025). Fan-first heat-health protection. Medical Journal of Australia. | 10.5694/mja2.52662 | Crossref 解析成功，题名一致 |
| 16 | Bouchama A. et al. (2007). Prognostic factors in heat wave related deaths: a meta-analysis. Archives of Intern | 10.1001/archinte.167.20.ira70009 | Crossref 解析成功，题名一致 |
| 17 | Bröde P., Fiala D., Kampmann B. (2023). Temperature–humidity-dependent wind effects on physiological heat stra | 10.3390/biology12060802 | Crossref 解析成功，题名一致 |
| 18 | Carleton T. et al. (2022). Valuing the global mortality consequences of climate change accounting for adaptati | 10.1093/qje/qjac020 | Crossref 解析成功，题名一致 |
| 19 | Chaseling G.K. et al. (2024). Simple strategies to reduce cardiac strain in older adults in extreme heat. NEJM | 10.1056/nejmc2407812 | Crossref 解析成功，题名一致 |
| 20 | Chaseling G.K. et al. (2025). Thermal and perceptual responses of older adults with fan use in heat extremes.  | 10.1001/jamanetworkopen.2025.23810 | Crossref 解析成功，题名一致 |
| 21 | Chen K. et al. (2016). Urbanization level and vulnerability to heat-related mortality in Jiangsu Province, Chi | 10.1289/EHP204 | Crossref 解析成功，题名一致 |
| 22 | Chen Q. et al. (2022). Long-term performance of a hybrid indirect evaporative cooling-mechanical vapor compres | 10.3389/fbuil.2022.1032961 | Crossref 解析成功，题名一致 |
| 23 | Chiabai A., Spadaro J.V., Neumann M.B. (2018). Valuing deaths or years of life lost? Economic benefits of avoi | 10.1007/s11027-017-9778-4 | Crossref 解析成功，题名一致 |
| 24 | Chua P.L.C. et al. (2023). Net impact of air conditioning on heat-related mortality in Japanese cities. Enviro | 10.1016/j.envint.2023.108310 | Crossref 解析成功，题名一致 |
| 25 | Colelli F.P., Mistry M.N. (2020). Cooling demand in integrated assessment models: a methodological review. Env | 10.1088/1748-9326/abb90a | Crossref 解析成功，题名一致 |
| 26 | Colelli F.P., Wing I.S., De Cian E. (2023). Air-conditioning adoption and electricity demand highlight climate | 10.1038/s41598-023-31469-z | Crossref 解析成功，题名一致 |
| 27 | Cramer M.N. et al. (2020). Keeping older individuals cool in hot and moderately humid conditions: wetted cloth | 10.1152/japplphysiol.00786.2019 | Crossref 解析成功，题名一致 |
| 28 | Crassier L. et al. (2026). Inequalities in the cooling gap and energy implications of adaptation. Environmenta | 10.1088/2752-5295/ae81db | Crossref 解析成功，题名一致 |
| 29 | Davis L.W., Gertler P.J. (2015). Contribution of air conditioning adoption to future energy use under global w | 10.1073/pnas.1423558112 | Crossref 解析成功，题名一致 |
| 30 | Davis L.W. et al. (2021). Air conditioning and global inequality. Global Environmental Change. | 10.1016/j.gloenvcha.2021.102299 | Crossref 解析成功，题名一致 |
| 31 | de Dear R.J., Brager G.S. (2002). Thermal comfort in naturally ventilated buildings: revisions to ASHRAE Stand | 10.1016/S0378-7788 | Crossref 解析成功，题名一致 |
| 32 | De Cian E. et al. (2019). Households' adaptation in a warming climate: air conditioning and thermal insulation | 10.1016/j.envsci.2019.06.015 | Crossref 解析成功，题名一致 |
| 33 | De Cian E. et al. (2025). The impact of air conditioning on residential electricity consumption across world c | 10.1016/j.jeem.2025.103122 | Crossref 解析成功，题名一致 |
| 34 | Deng H. et al. (2020). Household income inequality aggravates high-temperature exposure inequality in urban Ch | 10.1016/j.jenvman.2020.111224 | Crossref 解析成功，题名一致 |
| 35 | Deschênes O. (2022). The impact of climate change on mortality in the United States: benefits and costs of ada | 10.3386/w30282 | Crossref 解析成功，题名一致 |
| 36 | Deschênes O., Greenstone M. (2011). Climate change, mortality, and adaptation: evidence from annual fluctuatio | 10.1257/app.3.4.152 | Crossref 解析成功，题名一致 |
| 37 | Duan Z. et al. (2012). Indirect evaporative cooling: past, present and future potentials. Renewable and Sustai | 10.1016/j.rser.2012.07.007 | Crossref 解析成功，题名一致 |
| 38 | Ebi K.L. et al. (2004). Heat watch/warning systems save lives: estimated costs and benefits for Philadelphia 1 | 10.1175/bams-85-8-1067 | Crossref 解析成功，题名一致 |
| 39 | Edwards L. et al. (2025). Residential indoor temperatures and health: a scoping review of observational studie | 10.1016/j.scitotenv.2025.179377 | Crossref 解析成功，题名一致 |
| 40 | Falchetta G., Mistry M.N. (2021). The role of residential air circulation and cooling demand for electrificati | 10.1016/j.eneco.2021.105307 | Crossref 解析成功，题名一致 |
| 41 | Falchetta G. et al. (2024). Global projections of heat exposure of older adults. Nature Communications. | 10.1038/s41467-024-47197-5 | Crossref 解析成功，题名一致 |
| 42 | Falchetta G. et al. (2024). Inequalities in global residential cooling energy use to 2050. Nature Communicatio | 10.1038/s41467-024-52028-8 | Crossref 解析成功，题名一致 |
| 43 | Farnham C. et al. (2025). Evaluation of the cooling effect of an outdoor misting fan for workers in hot enviro | 10.3390/cleantechnol7010009 | Crossref 解析成功，题名一致 |
| 44 | Foster J. et al. (2021). An advanced empirical model for quantifying the impact of heat and climate change on  | 10.1007/s00484-021-02105-0 | Crossref 解析成功，题名一致 |
| 45 | Foster J. et al. (2021). Quantifying the impact of heat on human physical work capacity; part II: air velocity | 10.1007/s00484-021-02212-y | Crossref 解析成功，题名一致 |
| 46 | Fukuzawa T. et al. (2025). Ineffectiveness of water mist spray to the upper body in suppressing core temperatu | 10.1016/j.shaw.2025.05.003 | Crossref 解析成功，题名一致 |
| 47 | Gagnon D. et al. (2016). Cardiac and thermal strain of elderly adults exposed to extreme heat and humidity wit | 10.1001/jama.2016.10550 | Crossref 解析成功，题名一致 |
| 48 | Gagnon D. et al. (2017). Age modulates physiological responses during fan use under extreme heat and humidity. | 10.1249/mss.0000000000001348 | Crossref 解析成功，题名一致 |
| 49 | Gallo E. et al. (2024). Heat-related mortality in Europe during 2023 and the role of adaptation in protecting  | 10.1038/s41591-024-03186-1 | Crossref 解析成功，题名一致 |
| 50 | Gokarakonda S. et al. (2023). Energy performance of room air-conditioners and ceiling fans in mixed-mode build | 10.3390/en16196807 | Crossref 解析成功，题名一致 |
| 51 | Gronlund C.J. et al. (2016). Vulnerability to renal, heat and respiratory hospitalizations during extreme heat | 10.1007/s10584-016-1638-9 | Crossref 解析成功，题名一致 |
| 52 | Gupta S. et al. (2012). Electric fans for reducing adverse health impacts in heatwaves. Cochrane Database Syst | 10.1002/14651858.CD009888.pub2 | Crossref 解析成功，题名一致 |
| 53 | Gupta S.K. et al. (2023). Thermo-economic assessment of air conditioner utilizing direct evaporative cooling.  | 10.1016/j.ijrefrig.2023.11.021 | Crossref 解析成功，题名一致 |
| 54 | Harby K., Al-Amri F. (2019). An investigation on energy savings of a split air-conditioning using different co | 10.1016/j.energy.2019.06.031 | Crossref 解析成功，题名一致 |
| 55 | He Y. et al. (2018). Control behaviors and thermal comfort in a shared room with desk fans and adjustable ther | 10.1016/j.buildenv.2018.03.049 | Crossref 解析成功，题名一致 |
| 56 | He Y. et al. (2019). Review of fan-use rates in field studies and their effects on thermal comfort, energy con | 10.1016/j.enbuild.2019.04.015 | Crossref 解析成功，题名一致 |
| 57 | Hoyt T., Arens E., Zhang H. (2015). Extending air temperature setpoints: simulated energy savings and design c | 10.1016/j.buildenv.2014.09.010 | Crossref 解析成功，题名一致 |
| 58 | Hunt A. et al. (2017). Climate and weather service provision: economic appraisal of adaptation to health impac | 10.1016/j.cliser.2016.10.004 | Crossref 解析成功，题名一致 |
| 59 | Hyyrynen M. et al. (2025). Cooling is a cost-efficient way to adapt to heatwaves even in high-latitude cities. | 10.1007/s10584-025-03913-8 | Crossref 解析成功，题名一致 |
| 60 | Ibbetson A. et al. (2025). Cost-benefit analysis of interventions to protect care home residents in England ag | 10.1088/2752-5309/ae25c8 | Crossref 解析成功，题名一致 |
| 61 | Ibbetson A. et al. (2021). Mortality benefit of building adaptations to protect care home residents against he | 10.1016/j.crm.2021.100307 | Crossref 解析成功，题名一致 |
| 62 | IEA (2018). The Future of Cooling: opportunities for energy-efficient air conditioning. IEA, Paris. | 报告无 DOI（iea.org/reports/the-future-of-cooling） | 无 DOI（报告/标准/工作论文） |
| 63 | IEA (2019). The Future of Cooling in Southeast Asia. IEA, Paris. | 报告无 DOI（iea.org） | 无 DOI（报告/标准/工作论文） |
| 64 | IEA (2023). Keeping cool in a hotter world is using more energy, making efficiency more important than ever. I | 报告无 DOI（iea.org/commentaries） | 无 DOI（报告/标准/工作论文） |
| 65 | IEA (2023). Sustainable, affordable cooling can save tens of thousands of lives each year. IEA, Paris. | 报告无 DOI（iea.org/reports） | 无 DOI（报告/标准/工作论文） |
| 66 | ISO 7243:2017. Ergonomics of the thermal environment — assessment of heat stress using the WBGT index. | 标准无 DOI | 无 DOI（报告/标准/工作论文） |
| 67 | Jay O., Cramer M.N., Ravanelli N.M., Hodder S.G. (2015). Should electric fans be used during a heat wave? Appl | 10.1016/j.apergo.2014.07.013 | Crossref 解析成功，题名一致 |
| 68 | Jay O. et al. (2021). Reducing the health effects of hot weather and heat extremes: from personal cooling stra | 10.1016/S0140-6736 | Crossref 解析成功，题名一致 |
| 69 | Ji Y. et al. (2026). The shift of heat-related respiratory mortality from 2005 to 2019 in China and its socioe | 10.1016/j.crm.2026.100789 | Crossref 解析成功，题名一致 |
| 70 | Johnston J.D. et al. (2022). Bioaerosol and microbial exposures from residential evaporative coolers and their | 10.1111/ina.13082 | Crossref 解析成功，题名一致 |
| 71 | Jones A.J. et al. (2023). Climate change impacts on future residential electricity consumption and energy burd | 10.1016/j.enpol.2023.113811 | Crossref 解析成功，题名一致 |
| 72 | Karpiscak M.M. et al. (1998). Evaporative cooler water use in Phoenix. Journal AWWA. | 10.1002/j.1551-8833.1998.tb08415.x | Crossref 解析成功，题名一致 |
| 73 | Katz et al. (2025). Air conditioning in nursing homes and mortality during extreme heat. JAMA Internal Medicin | 10.1001/jamainternmed.2025.6595 | Crossref 解析成功，题名一致 |
| 74 | Kenny G.P. et al. (2024). Indoor overheating: a review of vulnerabilities, causes, and strategies to prevent a | 10.1080/23328940.2024.2361223 | Crossref 解析成功，题名一致 |
| 75 | Khond V.W. (2011). Experimental investigation of desert cooler performance using four different cooling pad ma | 10.5251/ajsir.2011.2.3.418.421 | Crossref 解析成功，题名一致 |
| 76 | Kikstra J.S. et al. (2021). Decent living gaps and energy needs around the world. Environmental Research Lette | 10.1088/1748-9326/ac1c27 | Crossref 解析成功，题名一致 |
| 77 | Knudsen M. et al. (2023). Comfort and economic viability of personal ceiling fans assisted by night ventilatio | 10.3390/buildings13030589 | Crossref 解析成功，题名一致 |
| 78 | Kouis P. et al. (2021). Heat-related mortality under climate change and the impact of adaptation through air c | 10.1016/j.envres.2021.111285 | Crossref 解析成功，题名一致 |
| 79 | Kousar R. et al. (2021). Energy, exergy, economic, environmental (4Es) comparative performance evaluation of d | 10.1016/j.jobe.2021.103466 | Crossref 解析成功，题名一致 |
| 80 | Krarti M. et al. (2023). Energy performance of hybrid evaporative-vapor compression air conditioning systems f | 10.1016/j.jobe.2023.106344 | Crossref 解析成功，题名一致 |
| 81 | Kumar A. et al. (2024). Energy-efficient brushless DC motor ceiling fans for AC and DC applications for consum | 10.1109/tce.2024.3476472 | Crossref 解析成功，题名一致 |
| 82 | Lee B.J. et al. (2025). Effect of pedestal fan use on serum stress biomarkers in older adults exposed to simul | 10.14814/phy2.70390 | Crossref 解析成功，题名一致 |
| 83 | Lipczynska A., Schiavon S., Graham L.T. (2018). Thermal comfort and self-reported productivity in an office wi | 10.1016/j.buildenv.2018.03.013 | Crossref 解析成功，题名一致 |
| 84 | Malik A. et al. (2022). The potential for indoor fans to change air conditioning use while maintaining human t | 10.1016/S2542-5196 | Crossref 解析成功，题名一致 |
| 85 | Marcinkowski A. et al. (2025). Comparative life cycle analysis for duct air conditioning systems based on evap | 10.3390/en18133475 | Crossref 解析成功，题名一致 |
| 86 | Mastrucci A., Byers E., Pachauri S., Rao N.D. (2019). Improving the SDG energy poverty targets: residential co | 10.1016/j.enbuild.2019.01.015 | Crossref 解析成功，题名一致 |
| 87 | Mastrucci A. et al. (2021). Global scenarios of residential heating and cooling energy demand and CO2 emission | 10.1007/s10584-021-03229-3 | Crossref 解析成功，题名一致 |
| 88 | Mastrucci A. et al. (2022). Cooling access and energy requirements for adaptation to heat stress in megacities | 10.1007/s11027-022-10032-7 | Crossref 解析成功，题名一致 |
| 89 | Mavrogianni A. et al. (2012). Building characteristics as determinants of propensity to high indoor summer tem | 10.1016/j.buildenv.2011.12.003 | Crossref 解析成功，题名一致 |
| 90 | McKenna Z.J. et al. (2025). Evaluating low energy cooling strategies on thermal and cardiac strain in older ad | 10.1152/japplphysiol.00390.2025 | Crossref 解析成功，题名一致 |
| 91 | Meade R.D. et al. (2024). A critical review of the effectiveness of electric fans as a personal cooling interv | 10.1016/s2542-5196 | Crossref 解析成功，题名一致 |
| 92 | Mihalcin E. et al. (2025). Examining the physiological strain with electric fans during high indoor heat stres | 10.1016/j.buildenv.2025.113261 | Crossref 解析成功，题名一致 |
| 93 | Miller D. et al. (2021). Cooling energy savings and occupant feedback in a two year retrofit evaluation of 99  | 10.1016/j.enbuild.2021.111319 | Crossref 解析成功，题名一致 |
| 94 | Miranda et al. (2024). Climatized packing house with evaporative coolers – part 1: occupational heat exposure. | 10.1590/1807-1929/agriambi.v29n3e280973 | Crossref 解析成功，题名一致 |
| 95 | Moreno-Pestaña et al. (2026). Interior accumulated thermal overload (IATO): a novel indoor temperature-based m | 10.1016/j.buildenv.2025.114094 | Crossref 解析成功，题名一致 |
| 96 | Morris N.B. et al. (2019). The effects of electric fan use under differing resting heat index conditions: a cl | 10.7326/m19-0512 | Crossref 解析成功，题名一致 |
| 97 | Morris N.B. et al. (2020). Sustainable solutions to mitigate occupational heat strain – an umbrella review. En | 10.1186/s12940-020-00641-7 | Crossref 解析成功，题名一致 |
| 98 | Morris N.B. et al. (2021). Electric fan use for cooling during hot weather: a biophysical modelling study. Lan | 10.1016/s2542-5196 | Crossref 解析成功，题名一致 |
| 99 | Naderi E. et al. (2020). Simulation-based performance analysis of residential direct evaporative coolers in fo | 10.1016/j.jobe.2020.101514 | Crossref 解析成功，题名一致 |
| 100 | Naughton M.P. et al. (2002). Heat-related mortality during a 1999 heat wave in Chicago. Am J Preventive Medici | 10.1016/s0749-3797 | Crossref 解析成功，题名一致 |
| 101 | Noor S. et al. (2020). Evaporative cooling options for building air-conditioning: Multan (Pakistan). Energies. | 10.3390/en13123061 | Crossref 解析成功，题名一致 |
| 102 | Nordio F. et al. (2015). Changing patterns of the temperature-mortality association by time and location in th | 10.1016/j.envint.2015.04.009 | Crossref 解析成功，题名一致 |
| 103 | O'Connor F.K. et al. (2024). Effect of electric fans on body core temperature in older adults exposed to extre | 10.1001/jama.2024.19457 | Crossref 解析成功，题名一致 |
| 104 | O'Connor F.K. et al. (2025). Effect of ceiling fans on core temperature in bed-resting older adults exposed to | 10.1111/jgs.70109 | Crossref 解析成功，题名一致 |
| 105 | O'Connor F.K. et al. (2025). Effects of pedestal-mounted electric fans on self-reported symptoms and mood-stat | 10.1139/apnm-2024-0461 | Crossref 解析成功，题名一致 |
| 106 | Ostro B. et al. (2010). The effects of temperature and use of air conditioning on hospitalizations. Am J Epide | 10.1093/aje/kwq231 | Crossref 解析成功，题名一致 |
| 107 | Parkes B. et al. (2022). Heat stress in Africa under high intensity climate change. Int J Biometeorology. | 10.1007/s00484-022-02295-1 | Crossref 解析成功，题名一致 |
| 108 | Parsons L.A. et al. (2023). Higher temperatures in socially vulnerable US communities increasingly limit safe  | 10.1029/2023gh000809 | Crossref 解析成功，题名一致 |
| 109 | Pavanello F. et al. (2021). Air-conditioning and the adaptation cooling deficit in emerging economies. Nature  | 10.1038/s41467-021-26592-2 | Crossref 解析成功，题名一致 |
| 110 | Pavanello F., Sue Wing I. (2025). Adaptation technology choice and implications for heat-related health risk.  | 无 DOI（RePEc:ces:ceswps:_12365） | 无 DOI（报告/标准/工作论文） |
| 111 | Phadke A. et al. (2019). Providing reliable and financially sustainable electricity access in India using supe | 10.1016/j.enpol.2019.06.015 | Crossref 解析成功，题名一致 |
| 112 | Pirouz B. et al. (2018). The role of power consumption and type of air conditioner in direct and indirect wate | 10.13044/j.sdewes.d6.0202 | Crossref 解析成功，题名一致 |
| 113 | Pistochini T., Modera M. (2011). Water-use efficiency for alternative cooling technologies in arid climates. E | 10.1016/j.enbuild.2010.11.004 | Crossref 解析成功，题名一致 |
| 114 | Ponnamperuma N. et al. (2025). Spatially-resolved analysis of water use for vapor compression and evaporative  | 10.1021/acs.est.4c09452 | Crossref 解析成功，题名一致 |
| 115 | Randazzo T., De Cian E., Mistry M.N. (2020). Air conditioning and electricity expenditure: the role of climate | 10.1016/j.econmod.2020.05.001 | Crossref 解析成功，题名一致 |
| 116 | Rao V.V., Datta S.P. (2020). A feasibility assessment of single to multi/hybrid evaporative coolers for buildi | 10.1016/j.applthermaleng.2019.114813 | Crossref 解析成功，题名一致 |
| 117 | Ravanelli N.M. et al. (2015). Heart rate and body temperature responses to extreme heat and humidity with and  | 10.1001/jama.2015.153 | Crossref 解析成功，题名一致 |
| 118 | Ravanelli N.M., Jay O. (2016). Electric fan use in heat waves: turn on or turn off? Temperature. | 10.1080/23328940.2016.1211073 | Crossref 解析成功，题名一致 |
| 119 | Ravanelli N.M. et al. (2017). The biophysical and physiological basis for mitigated elevations in heart rate w | 10.1007/s00484-016-1213-0 | Crossref 解析成功，题名一致 |
| 120 | Reddy K. et al. (2021). Development of speed control for high voltage BLDC ceiling fan using regulator. IEEE M | 10.1109/mysurucon52639.2021.9641617 | Crossref 解析成功，题名一致 |
| 121 | Rode A. et al. (2021). Estimating a social cost of carbon for global energy consumption. Nature. | 10.1038/s41586-021-03883-8 | Crossref 解析成功，题名一致 |
| 122 | Romanello M. et al. (2021). The 2021 report of the Lancet Countdown on health and climate change. The Lancet. | 10.1016/S0140-6736 | Crossref 解析成功，题名一致 |
| 123 | Romitti Y. et al. (2025). The effects of residential air conditioning and social vulnerability on heat-related | 10.1016/j.envint.2025.109659 | Crossref 解析成功，题名一致 |
| 124 | Rugani R. et al. (2026). Creating thermal refuges with low-energy cooling: effectiveness of evaporative cooler | 10.1016/j.buildenv.2026.115149 | Crossref 解析成功，题名一致 |
| 125 | Sabater-Mezquita R. et al. (2026). Economic evaluation of adaptation interventions to reduce the adverse healt | 10.1186/s13561-026-00840-x | Crossref 解析成功，题名一致 |
| 126 | Sathaye N., Phadke A., Shah N., Letschert V. (2012). Potential global benefits of improved ceiling fan energy  | 10.2172/1172246 | Crossref 解析成功，题名一致 |
| 127 | Schiavon S., Melikov A.K. (2008). Energy saving and improved comfort by increased air movement. Energy and Bui | 10.1016/j.enbuild.2008.05.001 | Crossref 解析成功，题名一致 |
| 128 | Semenza J.C. et al. (1996). Heat-related deaths during the July 1995 heat wave in Chicago. NEJM. | 10.1056/nejm199607113350203 | Crossref 解析成功，题名一致 |
| 129 | Sera F. et al. (2020). Air conditioning and heat-related mortality: a multi-country longitudinal study. Epidem | 10.1097/ede.0000000000001241 | Crossref 解析成功，题名一致 |
| 130 | Shah N., Sathaye N., Phadke A., Letschert V. (2015). Efficiency improvement opportunities for ceiling fans. En | 10.1007/s12053-014-9274-6 | Crossref 解析成功，题名一致 |
| 131 | Sherman P., Lin H., McElroy M.B. (2022). Projected global demand for air conditioning associated with extreme  | 10.1016/j.enbuild.2022.112198 | Crossref 解析成功，题名一致 |
| 132 | Skarha J. et al. (2022). Provision of air conditioning and heat-related mortality in Texas prisons. JAMA Netwo | 10.1001/jamanetworkopen.2022.39849 | Crossref 解析成功，题名一致 |
| 133 | Smallcombe J.W. et al. (2025). Sustainable cooling strategies for workers in the ready-made garment factory in | 10.1016/j.lanplh.2025.101317 | Crossref 解析成功，题名一致 |
| 134 | Sohani A., Sayyaadi H., Mohammadhosseini N. (2018). Comparative study of heat and mass exchangers for dew poin | 10.1016/j.enconman.2017.12.042 | Crossref 解析成功，题名一致 |
| 135 | Sohani A., Sayyaadi H. (2018). Thermal comfort based resources consumption and economic analysis of a two-stag | 10.1016/j.enconman.2018.07.008 | Crossref 解析成功，题名一致 |
| 136 | Stefaniak Ł. et al. (2026). Performance evidence and regulatory gaps in evaporative cooling across institution | 10.3390/en19184288 | Crossref 解析成功，题名一致 |
| 137 | Takacs S. et al. (2025). Prioritizing heat adaptation measures across Indian cities: a benefit-cost analysis.  | 10.1038/s42949-025-00271-3 | Crossref 解析成功，题名一致 |
| 138 | Tartarini F., Schiavon S., Jay O., Arens E., Huizenga C. (2021). Application of Gagge's energy balance model t | 10.1016/j.buildenv.2021.108437 | Crossref 解析成功，题名一致 |
| 139 | Taylor J. et al. (2018). Comparison of built environment adaptations to heat exposure and mortality during hot | 10.1016/j.envint.2017.11.005 | Crossref 解析成功，题名一致 |
| 140 | Taylor J. et al. (2018). Estimating the influence of housing energy efficiency and overheating adaptations on  | 10.3390/atmos9050190 | Crossref 解析成功，题名一致 |
| 141 | Taylor J. et al. (2021). Projecting the impacts of housing on temperature-related mortality in London during t | 10.1016/j.enbuild.2021.111233 | Crossref 解析成功，题名一致 |
| 142 | Tewari P., Mathur S., Mathur J. (2019). Field study on indoor thermal comfort of office buildings using evapor | 10.1016/j.enbuild.2019.06.049 | Crossref 解析成功，题名一致 |
| 143 | Thomson H. et al. (2019). Energy poverty and indoor cooling: an overlooked issue in Europe. Energy and Buildin | 10.1016/j.enbuild.2019.05.014 | Crossref 解析成功，题名一致 |
| 144 | Torres M. et al. (2024). Energy poverty under 2M indicator: feasibility of decrease by using passive technique | 10.1016/j.enbuild.2024.114761 | Crossref 解析成功，题名一致 |
| 145 | Troja B. (2016). A quantitative and qualitative analysis of the super-efficient equipment program subsidy in I | 10.1007/s12053-016-9429-8 | Crossref 解析成功，题名一致 |
| 146 | UK Health Security Agency. Beat the heat: staying safe in hot weather; Adverse Weather and Health Plan (2023–) | 机构网页，无 DOI（gov.uk） | 无 DOI（报告/标准/工作论文） |
| 147 | UNEP / Cool Coalition (2023). Global Cooling Watch 2023: Keeping it Chill. UNEP, Nairobi；(2025) Global Cooling | 报告无 DOI（unep.org） | 无 DOI（报告/标准/工作论文） |
| 148 | US CDC. Extreme heat: tips for preventing heat-related illness（2000 年新闻稿及历年页面）. | 机构网页，无 DOI（cdc.gov） | 无 DOI（报告/标准/工作论文） |
| 149 | US EPA (2006). Excessive Heat Events Guidebook. EPA 430-B-06-005. | 报告无 DOI（epa.gov） | 无 DOI（报告/标准/工作论文） |
| 150 | Vaisi S. et al. (2023). Developing the water-energy nexus performance of direct evaporative coolers in a hot a | 10.1016/j.wen.2023.11.002 | Crossref 解析成功，题名一致 |
| 151 | van Ruijven B.J., De Cian E., Sue Wing I. (2019). Amplification of future energy demand growth due to climate  | 10.1038/s41467-019-10399-3 | Crossref 解析成功，题名一致 |
| 152 | Waite M. et al. (2017). Global trends in urban electricity demands for cooling and heating. Energy. | 10.1016/j.energy.2017.03.095 | Crossref 解析成功，题名一致 |
| 153 | Wang F. et al. (2022). Biophysical modelling predicts unreliable core temperature responses on healthy older a | 10.1016/j.buildenv.2022.109888 | Crossref 解析成功，题名一致 |
| 154 | WHO. Heat and health (fact sheet, 现行版)；WHO. Heatwaves: how to stay cool (Q&A, 旧版)；WMO & WHO (2015). Heatwaves  | 机构网页/报告，无 DOI（who.int） | 无 DOI（报告/标准/工作论文） |
| 155 | Williams S. et al. (2021). Evaluating cost benefits from a heat health warning system in Adelaide, South Austr | 10.1111/1753-6405.13194 | Crossref 解析成功，题名一致 |
| 156 | Xu H. et al. (2025). Electric fan-based cooling strategies to mitigate heat strain during prolonged heat expos | 10.1016/j.jtherbio.2025.104166 | Crossref 解析成功，题名一致 |
| 157 | Yan R. et al. (2025). India's residential space cooling transition: decarbonization ambitions since the turn o | 10.1016/j.apenergy.2025.125929 | Crossref 解析成功，题名一致 |
| 158 | Zhai Y. et al. (2013). Comfort under personally controlled air movement in warm and humid environments. Buildi | 10.1016/j.buildenv.2013.03.022 | Crossref 解析成功，题名一致 |
| 159 | Zhang Y. et al. (2016). Risk factors for deaths during the 2009 heat wave in Adelaide, Australia: a matched ca | 10.1007/s00484-016-1189-9 | Crossref 解析成功，题名一致 |
| 160 | Zhou X. et al. (2023). Effects of elevated air speed on thermal comfort in hot-humid climate and the extended  | 10.1016/j.enbuild.2023.112953 | Crossref 解析成功，题名一致 |
