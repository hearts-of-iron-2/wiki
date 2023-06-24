---
title: Modding_misc.txt
---
 Economy
-------

**IC to TC ratio** \- how much TC you get for every point of IC; Paradox default is 1.5

**IC to Supplies ratio** \- how many supplies are made per IC allocated to supply production; Paradox default is 4

**IC to Consumer Goods Ratio** \- assumedly how many consumer goods are produced per IC allocated; Paradox default is 1

**IC to Money Ratio** \- how much money is generated for every IC allocated to CG production

**Max Gearing Bonus** \- The lowest percentage of build time that a unit may have due to gearing bonus. Example: if this value is 0.60 then at maximum gearing bonus each unit only takes 60% of the normal build time to produce. Lowering this value makes producing serial runs cheaper. Raising this value enough makes serial runs pointless.

**Gearing Bonus Increment** \- the amount of discount per unit of gearing. Example: if this value is 0.08 then your second unit produced serially will take 8% less time.

**IC Non-National Province Multiplier** \- Paradox default is 0.2; This is the percentage of actual IC you get from a province that you own (i.e. after annexing) without being one of your national provinces. Example: a Province has 10 IC in it but it isn't considered "national" for your nation thus you only get 2 IC.

**IC Non-Owned Province Multiplier** \- Paradox default is 0.2; This is the percentage of actual IC you get from a conquered province you control but not own (i.e. before annexing).

**TC Undeployed Division Load** \- the amount of TC load per division waiting to be deployed. Think of this as trains allocated to transport the unit to the desired location.

**TC Occupied Province Load** \- the TC load per conquered province.

**TC Land Division Load Multiplier** \- multiplier of the normal TC load for each land division.

**TC Air Division Load Multiplier** \- same as for land divisions

**TC Naval Division Load Multiplier** \- Paradox default for this is 0.333; i.e. each naval unit only uses one third of a TC point per supply and fuel point it uses.

**TC Load from partisans** \- how bad to partisans hurt your TC

**TC load factor from offensives** \- Paradox default is 1.5; not sure exactly what this does.

**TC Load from province dev** \- the TC load from a province improvement that hasn't been deployed.

**TC Load from bases in queue** \- TC load for air or naval bases built but not deployed. (Radar too???)

**National Province Manpower Multiplier** \- how many manpower points per day you receive per province manpower point (in National Provinces).

**Non-National Province Manpower Multiplier** \- how many manpower points per day you receive per province manpower point (in non-national provinces) (i.e. how much manpower you can recruit from foreign lands).

**Colonial Province Manpower Multiplier** \- believed to be like the other manpower multipliers but this applies to "colonies" (aka provinces not land connected to your capital).

**Requirement for "Influence Nation" to affect domestic sliders** \- at default value your IC/2 must be greater than the target nation's IC to have a slider moved.

**Trickle-back factor for manpower from losses in battle** \- at default half of your manpower losses are added back into your manpower pool.

**Upgrade cost** \- default value is 0.5; Note: the resulting value for a unit can never be less than 1.0 (above 1.0 fractional build costs are used).

Combat
------

**Base chance to avoid hit if defences left.** \- this is unused (as of v1.1)

Research
--------