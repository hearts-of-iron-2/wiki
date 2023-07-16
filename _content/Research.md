---
title: Research
---

[Template:Anthology](/wiki/index.php?title=Template:Anthology&action=edit&redlink=1 "Template:Anthology (page does not exist)")

## Contents

- [1 Research Basics](#Research_Basics)
- [2 Examples](#Examples)
- [3 General things to learn](#General_things_to_learn)
- [4 Researching ahead of time](#Researching_ahead_of_time)
- [5 Effect of Rocket Test Sites](#Effect_of_Rocket_Test_Sites)
- [6 Effect of Nuclear Reactors](#Effect_of_Nuclear_Reactors)
- [7 Research Strategy](#Research_Strategy)
- [8 Research Assistant Time Calculator](#Research_Assistant_Time_Calculator)

## Research Basics

Each technology consists of 5 parts which have to be researched one after the other. Each of these parts is linked to a certain field of science (chemistry, electronics, rocketry, etc.) and has a difficulty (usually from 3 to 10). Sometimes the last of the 5 parts is called “….Test” or “….Process Development” or something similar. This will often have a very high difficulty number, double that of the other components. (In 1.1 and earlier, the doubled number shows as being the same as all the other components, leaving you to guess whether it is there or not).

Each tech team has a skill level and one or more fields of expertise matching the fields of science from the technologies. Both (skill level and matching fields of expertise) have an influence on the speed of research.

**Matching fields of expertise:** Each match halves the research time for this particular part of the technology.

**Blueprints:** Each blueprint halves the research time for the whole technology (standard setting, moddable via misc.txt). If you have matched fields of expertise AND blueprints, the research time for the parts having a match is quartered.

Researching a Technology is displayed as having five partial techs accounting for 20% each. The game engine internally counts each part separately with 100% (or 200% if _double_time = yes_ is specified in the tech file). Each part of the technology is first fully completed before the next part starts. So any excess research progress in the day which finishes a part (to 20%, 40%, 60%, 80% and of course 100%) is lost. This is important to mention, since it is the cause of rounding errors and probably some mismatch between the formula (which I don’t know) and the effective research time. It is also the cause for some minor inconsistencies in the tables below. If anybody has the time to come up with something more precise, he/she is highly welcome. However I believe for the normal gaming the tables below should give enough info.

Research time (in days) with matching skill level (i.e. a skill level 5 team researches a part of a technology with difficulty 5) And WITHOUT matching field of expertise.

Lvl 3: 37 Lvl 4: 40 Lvl 5: 42 Lvl 6: 44 Lvl 7: 46 Lvl 8: 47 Lvl 9: 49 Lvl10: 50

This base time is modified by the difference between difficulty and skill level (=skill level-difficulty) as follows in cumulative days (so -3 would be an effective +12); (I’m pretty sure there is a formula behind it with some integers, so there are rounding errors when giving full days, but as already mentioned it should suffice for planning research):

\-7: +9 -6: +8 -5: +7 -4: +6 -3: +5 -2: +4 -1: +3 0: 0 +1: -3 +2: -3 +3: -2 +4: -2 +5: -2 +6: -2

Research efficiency modifier due to techs is a corresponding time modifier (i.e.: + 5% means each part takes 5% less time to research, so a part of a tech which really takes 30 days without the 5%, takes 29 days with the modifier (since the 0,5 days are lost, however it is not very exact with my table, so it can be +/- 1 day). The modifier applies to each part separately. Btw. I didn’t find an effect for the ministers giving research bonus (I just checked Todt of Germany).

## Examples

An example calculation for Germany in ’36 (they have a +5% Research modifier due to tech) and Basic Machine tools (a ’36 tech):

Chemistry 5 Industrial Engineering 5 Industrial Engineering 5 Industrial Engineering 6 Industrial Engineering 7 (doubled)

Now let’s IG Farben do the job: Skill 9 and all fields of expertise match:

1.Part: 42 days base, –10 days for higher skill level = 32 days, halved for matching fields = 16 days, -5% = 15 days (could also be 16 for other cases, depends on the rounding)

2.Part: 42 days base, –10 days for higher skill level = 32 days, halved for matching fields = 16 days, -5% = 15 days (could also be 16 for other cases, depends on the rounding)

3.Part: 42 days base, –10 days for higher skill level = 32 days, halved for matching fields = 16 days, -5% = 15 days (could also be 16 for other cases, depends on the rounding)

4.Part: 44 days base, –8 days for higher skill level = 36 days, halved for matching fields = 19 days, -5% = 17 days (could also be 18 for other cases, depends on the rounding)

5.Part: 46 days base, –6 days for higher skill level = 40 days, doubled for being a “…Process” tech and than again halved for matching fields = 40 days, -5% = 38 days (could also be 39 for other cases, depends on the rounding)

Total time: 100 days (so when starting on 01.01.36, you will be finished on 11.04.36

Now let’s have this done by Rheinmetal: Skill 7, only chemistry matches: 1.Part: 42 days base, –6 days for higher skill level = 36 days, halved for matching fields = 18 days, -5% = 17 days (could also be 18 for other cases, depends on the rounding)

2.Part: 42 days base, –6 days for higher skill level = 36 days, -5% = 34 days (could also be 35 for other cases, depends on the rounding)

3.Part: 42 days base, –6 days for higher skill level = 36 days, -5% = 34 days (could also be 35 for other cases, depends on the rounding)

4.Part: 44 days base, –3 days for higher skill level = 41 days, -5% = 39 days

5.Part: 46 days base, +/–0 days for matching skill level = 46 days, doubled for being a “…Process” tech = 92 days, -5% = 87 days (could also be 88 for other cases, depends on the rounding)

Total time: 211 days (so when starting on 01.01.36, you will be finished on 02.08.36

## General things to learn

1.) First look for as many matching fields as possible. It's usually better to have more matching fields than to have high skill level (but not always - a Skill-8 team with 4 matching fields is usually faster than a Skill-6 team with 5 fields, for example).

2.) Consider that sometimes the last part of a tech counts double when looking for the absolute number of matching fields.

3.) Then look at skill levels; the higher the better.

4.) It is always nice to have [blueprints](/wiki/Blueprints "Blueprints") .

## Researching ahead of time

You get a cumulative 0.15% or 0.125% penalty (the latter is correct in Doomsday V. 1.3a) penalty per day for researching ahead of time. The relevant time for a tech is always January 1 of the corresponding year. So a 1938 technology started at 01.01.37 would get a 360\*0.15% = 54% penalty for the first day, a 53.85% penalty for the second day and so on until you reach 01.01.38 when you don’t get any penalty for the remaining research of this tech anymore. The cap for the penalty is at 90%. This cap is reached by researching 600 days ahead of time if the penalty is 0.15%, 720 (or exactly two years, HoI years being exactly 360 days) if the penalty is 0.125%. Thus, starting to research a 1938 technology in April of 1936 would have the maximum 90% penalty. For these reasons, it is generally recommended not to "tech rush" more than 1 year early, and wherever possible to stay with current year technologies. There is no bonus for researching old technologies.

## Effect of Rocket Test Sites

Rocket test sites dramatically reduce the research times for any tech that has a rocket component. This would include the rocketry component of an inf div tech such as the Tube-launched Rocket for the advanced 1943 inf div as well as the rocket techs themselves.

The size of the test site has an influence at the reduction. It also reduces considerably the effects of skills (in the below example, at site size 6, a skill level 3 team only takes 1 day longer than a lvl. 8 team) and also the effect of the rocketry field of expertise. As an example, I have researched a difficulty 8 tech (without any other research modifiers) with skill lvl. 8 teams (results in days):

rocketry site size / without rocketry field of expertise / with rocketry field of expertise

size 0 / 47d / 24d size 1 / 28d / 18d size 2 / 20d / 14d size 3 / 16d / 12d size 4 / 13d / 10d size 5 / 11d / 9d size 6 / 9d / 8d size 7 / 8d / 7d

What we can see is, that starting from size 5 onwards, the differences are rather small. Blueprints will further cut these reduced times in half.

## Effect of Nuclear Reactors

Nuclear Reactors also dramatically reduce the research times for the nuclear techs (both). The size of the reactor has an influence at the reduction. It also reduces considerably the effects of skills (in the example below, at site size 5, a skill level 3 team only takes 1 day longer than a lvl. 9 team) and also the effect of the nuclear fields of expertise. As an example, I have researched a difficulty 10 tech (without any other research modifiers) with skill lvl. 9 teams (results in days):

nuclear reactor size / without nuclear field of expertise / with nuclear field of expertise

size 0 / 53d / 27d size 1 / 32d / 20d size 2 / 23d / 16d size 3 / 18d / 14d size 4 / 15d / 12d size 5 / 13d / 10d size 6 / 11d / 9d size 7 / 10d / 8d

What we can see is the same as for rocketry test sites, that starting from size 5 onwards, the differences are rather small. Blueprints will again halve the time.

As a summary for both, we can say, that the biggest differences are until lvl.3, effectively removing two thirds of the research time without matching fields of expertise or halve the research time with matching fields of expertise.

## Research Strategy

- The number of tech teams you can use at once is determined by your IC. You get one extra at each of 20, 40, 60 and 80 base IC.

- Many technologies, particularly Industrial techs, give immediate bonuses across your entire economy. The sooner you research them the more you will be able to produce before war breaks out and you should have no hesitation in trying to push them before their historical years.

- Try to match your tech advances with your current spare IC. If you have spare IC (in times of relative peace), you can consider researching new and improved weapons, because you have the IC for the upgrades. If you are in a costly war that chews up IC in re-inforcements, consider researching doctrines or unit types you don't have yet because there is nothing to upgrade. Look at the unit charts to see which upgrades are most worthwhile for your situation.

- Doctrine techs give instant combat bonuses with no IC cost. If you are currently at war, these are very high priority. If you are at peace, you might consider developing new units that require time to build, and then move on to the doctrines later - just in time for the war to start.

- Some ministers give bonuses to some research areas. For instance, Resource Industrialist Armamanents ministers give a bonus to Industrial research as well as to IC. At the start of a campaign you may well be investing heavily in Industrial research and find this worthwhile.

- Plan. This is one of the areas where really long term thinking pays off.

  - If you need to project power overseas (even in the far future), you need aircraft carriers, marines and paratroopers and you have to research them before you can build them (which will also take time).
  - Control of the skies started important and became more important as the war went on, so consider air research whatever your situation; in particular the Air Doctrine tree requires you to research many easy techs, and to develop your bombers' organisation and morale before your fighters.
  - If you are likely to have land conflicts, pay close attention to your Land Doctrine Tree and its attributes. Your doctrine will give you discounts on production of some units; do you want to research these first to maximise the advantages?

- Consider what you have. This has been mentioned elsewhere, but you will probably start with a bunch of vanilla infantry, and you won't be able to replace them overnight with mechanised infantry. If you are heading for war quickly you you really don't want to be fighting with 1918-model infantry and upgrading is your best bet. If war is further away, your best bet may be to replace the divisions entirely rather than upgrade.

- Plan your construction to match your tech level. If you are about to advance to a new level of tanks, wait until you get them before putting in that monster tank order to make the most of the [gearing bonus](/wiki/Gearing_Bonus "Gearing Bonus") ; however if major operations are around the corner you may not be able to wait.

- If you need cash for research, and have no dissent, trade for cash. It is often more economical to spend a few ICs on making supplies and trading those for cash than to put IC into excess consumer goods to make cash. However, if you have dissent, you're pouring IC into consumer goods anyway, so it's not really an issue. As with other resources, make friends and trade early for a stockpile of cash before the shooting war starts and then stop worring about it.

- A potential approach to planning your research strategy is to use a process of elimination. For instance, few nations will build large numbers of Battleships AND Carriers, or Strat Bombers AND Close Air Support. If you make such decisions early on you can remove whole chunks of research that would be pointless and lets you focus on what is most important for your forces.

- Consider holding off upgrades if you have the time. Upgrading twice obsolete units is 1/2 the time and 1/2 the cost for the first upgrade. Upgrading Inf '18 once you have researched Inf '39 will cost you 1.25 the normal cost. Upgrading immediately twice will cost the full upgrade amount twice. This is especially apparent with really obsolete [artillery brigades](/wiki/Artillery_brigade "Artillery brigade") . Wait until you have researched the models you want to upgrade the units you have.

## Research Assistant Time Calculator

Executor made an excellent program to calculate research times, best team for tech etc. An updated version for Armageddon and Doomsday is available in [this thread](http://www.europa-universalis.com/forum/showthread.php?t=355277&page=1&pp=20) . It can be made to work with Arsenal of Democracy if you create a file called HoI2.exe in the AoD install directory and point the program to that folder.
