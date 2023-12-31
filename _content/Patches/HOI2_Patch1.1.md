---
title: HOI2_Patch1.1
---
::: mw-parser-output
+-----------------------------------+-----------------------------------+
| ::: {style="width: 52px;"}        | **This article may need to be     |
| [![Wikitext.png](https://c        | formatted [following an           |
| entral.paradoxwikis.com/images/2/ | encyclopedic                      |
| 2f/Wikitext.png){file-height="20" | style](/wiki/T                    |
| file-width="50"                   | emplate:Wikify "Template:Wikify") |
| url="https://central.paradoxwi    | .**\                              |
| kis.com/images/2/2f/Wikitext.png" | [Please help improve              |
| decoding="async" height="20"      | [this](https://hoi2.par           |
| loading="lazy"                    | adoxwikis.com/index.php?title=HOI |
| width="50"}]                      | 2_Patch1.1&action=edit){.external |
| (/wiki/File:Wikitext.png){.image} | .text rel="nofollow"} article if  |
| :::                               | you can.]{.small}                 |
+-----------------------------------+-----------------------------------+

\

::: {#toc .toc aria-labelledby="mw-toc-heading" role="navigation"}
::: {.toctitle dir="ltr" lang="en"}
## Contents {#mw-toc-heading}

[ ]{.toctogglespan}
:::

-   [[ 1 ]{.tocnumber} [ Interface Enhancements
    ]{.toctext}](#Interface_Enhancements)
-   [[ 2 ]{.tocnumber} [ Gameplay Changes
    ]{.toctext}](#Gameplay_Changes)
-   [[ 3 ]{.tocnumber} [ AI Improvements ]{.toctext}](#AI_Improvements)
-   [[ 4 ]{.tocnumber} [ Modding Support ]{.toctext}](#Modding_Support)
-   [[ 5 ]{.tocnumber} [ Multiplayer Specific
    ]{.toctext}](#Multiplayer_Specific)
-   [[ 6 ]{.tocnumber} [ Bugfixes ]{.toctext}](#Bugfixes)
-   [[ 7 ]{.tocnumber} [ Events ]{.toctext}](#Events)
-   [[ 8 ]{.tocnumber} [ Scenario Setup ]{.toctext}](#Scenario_Setup)
:::

## [ Interface Enhancements ]{#Interface_Enhancements .mw-headline}

\- The maximum organisation can now always be seen. In the detail
screen, in tooltips, and as small graphical markers.

\- Added an indicator to show the current speed of a corps in the
interface.

\- Improved several tooltips with even further information and/or
clarifications.

\- Added information in colorcoding to the convoy interface.

\- Added a small indicator to the combatlist interface to show which
have a combat event.

\- Added the option to switch between sprites/counters when
rightclicking on the pause-button.

\- Added an option to set a synchronized arrival time for landunit
stacks when moving/attacking.

\- Due to popular demand, detect numbers are now shown instead of
\"fieldmarshal\" names on counters.

\- Improved the shown \"detected sizes\" for stacks. Seperate values for
air/surface stacks.

\- Colorcoded unitsizes on screens to be red if over command-limit.

\- Added support for national names for armies, fleets and airfleets.

\- \"goto\" on a combat-started popupbox now actually selects that
combat, instead of just centering on that province.

\- Added the \"mission finished\" message after a sea transport mission
is done.

\- Added a message for \"Leader has died\".

\- There is now information in the cancelled trade agreement message,
about which was cancelled.

## [ Gameplay Changes ]{#Gameplay_Changes .mw-headline}

\- Changed logics of when its possible to attach brigades, to reduce
some exploits.

\- Rewrote combat algoritms to not always give guaranteed hits when
dogpiling.

\- Weather and Night affects in landcombat now only affects attacking
efficiency for both sides.

\- Envelopment in landcombat now requires 3 provinces rather than 2.

\- Fortressbuster trait now only reduces fort penalty by 25%.

\- Org regain is now significantly higher when low. (\<25% of max x3, \<
50% x2, \> 75% /2 )

\- Convoy paths will now attempt to avoid seazones with subs on convoy
raiding missions.

\- Convoy paths now get reevaluated everytime they get attacked.

\- Airplanes should now attempt to move immediately after a combat.

\- Added some terrain penalties to bomb-missions for planes.

\- Province buildings now only increases max-capacity when they are
deployed, and slowly grow to the new one.

\- Modified HQ unit speeds and fuelconsumptions, and removed cap on
engineers attached.

\- The \"repair/construct\" speed from infrastructure is now never lower
than 10%.

\- A carrier now always have at least 1 in subattack to avoid endless
battles.

\- Halved the belligerence impact from annexing countries.

\- Improved the efficiency at night for submarines.

\- Its now possible to rebase ships with troops on them, if within
sea-transport range.

\- There is now a hard-cap on how big an airforce taskforce can be.
Maximum 4 airwings in it.

\- Tweaked air command limits to be 2, 4, 8, 16 to fit the new stack
rules.

\- Increased penalties for attacking in bad weather and through mud.

\- Puppets can no longer invite someone to an alliance.

\- Tweaked transport planes to be cheaper and better at later techs to
simulate the need of lesser amount of planes.

\- Severly decreased the techeffects on airbase building speed.

\- Based and other undeployed provincial developments now cause a severe
drain on TC.

\- Halved the speed of landcombat & air v land bombs.

\- Average speed of fleets now modify closing speed in naval combats.

\- Tweaked weathercode for battlescenarios to make sure weather patterns
are started in the active map.

\- Winters are now longer.

\- Anyone with a guarantee will get +1 on interventionism whenever
anyone else declares war on it, if on the same continent.

\- Creating a puppet nolonger gives it a large part of your manpower.

\- Isolationists that can not ally with anyone can neither guarantee
another nations independence.

\- Dissent now affects IC.

\- Tweaked effects from strategic bombing missions.

\- Increased strategic attack of SBs, TACs, Flying bombs and rockets
significantly.

\- Decreased cost of rockets and bombs siginifcantly.

\- Decreased visibility of submarines.

\- Tweaked up effect of submarines versus convoys.

\- Moved 5 org from Elastic Defence & Spearhead and added them to Fire
Brigade & Spearhead HQs.

\- Autoconvoy creation now takes blocked seazones into account if
possible.

\- Experience is now applied in bombruns as well.

\- Infra is now damaged when a province is taken over.

\- Increase the range of transports to 3000.

\- A unit out of supply can no longer strat-redeploy.

\- Units loaded on ships will now clear their orders properly whenever
the ship moves.

\- Airunits now fight with lesser effectivity if they lack supplies.

\- No missions are valid except for rebase for an airunit without oil.

\- You can only trade provinces between allies now.

\- 0 infra provinces surrounded by only enemy territory with any infra
now automatically change control to the enemies.

\- Carriers doing port-strike are now slightly less lethal.

\- Tactical bombers are now slightly more lethal.

\- Reduced IC from non-national even further.

\- It is no longer a linear return on bombing infrastructure. The less
there is left the less can be damaged now.

\- Rebasing now works with multiple airunits selected.

\- Newly built units can now only be deployed in owned provinces (on the
same continent as the capital).

\- Conquering territory out from a puppets territory will now give the
occupation to the puppetmaster if the puppetmaster is conquering.

\- Puppetstatus now override ai-prefs for ignores in tech/resource
trades.

\- Provinceimprovements in progress are now cancelled when a province
becomes occupied.

\- Units now only go to pool when owners change if they are enemies with
the new owners.

\- Techteams are now properly removed at the end of a project if they
are no longer active.

\- Rockets can no longer rebase, but instead they can be strategically
redeployed.

\- Units retreating to something that is cut-off should no longer
automatically be deleted if they got at least 50% of their maximum org.

\- Neutrals can no longer spot other neutral ships automatically at sea.

\- Its no longer possible to attack, then break off the attack after 1
hour and attack again. - There is now a 5% dissent hit for cancelling a
non-agression pact.

\- Units in enemy territory when peace is signed is now strat-redeployed
back to the capital (using civilian ships if needed.)

\- Relations no longer drop if an alliance partner or puppet/master
cancels an agreement between them.

## [ AI Improvements ]{#AI_Improvements .mw-headline}

\- Worked alot on the front AI to teach it to evaluate attack and defend
odds better, also improved its

\- Improved the AI\'s evaluation of when to break off attacks.

\- Improved the AI\'s understanding of establishing reserves.

\- AI now tries to group motorized infantry with mechs and armor if
possible.

\- The AI now synchronizes attacks smarter.

\- Now the front AI reacts quicker to the players and other nations
actions.

\- Air AI taskforce composition has been improved.

\- Air AI is now better att evaluating when to evacuate bases.

\- Wolfpack AI now spreads out attacks more.

\- Convoy AI now adapts better to hostilities, and also attempts to
bring home stockpiles more efficiently.

\- Improved the cooperation between AIR and Naval AI.

\- The AI is now a lot smarter about using its serial runs.

\- Improved the AI for researching technologies.

\- Pathfing AI is now much smarter and tries to avoid danger if
possible.

\- The AI for accpeting nations asking to join their alliance was
rewritten.

\- Diplomatic AI now cancels non-agression pacts in attempts to honor
guarantees, and is also more likely to honor guarantees they have given.

\- Loads and loads more of AI code and scripts written for various cases
of when circumstances change.

## [ Modding Support ]{#Modding_Support .mw-headline}

\- A lot more factors have been exported to the db\\misc.txt file, so
that modders can tweak.

\- Enchanced the scripting capabilites for the AI, see the
docs/ai_file_doc.txt for details.

\- Fixed a few problems with eventcommands that manipulate the weather.

## [ Multiplayer Specific ]{#Multiplayer_Specific .mw-headline}

\- Added a little indicator to show who has not yet pressed
\"startgame\" in the chat listing.

\- Added support for up to 20 different countries in the lobby now.

\- Fixed a problem with people timing out in the lobby.

## [ Bugfixes ]{#Bugfixes .mw-headline}

\- Ships are now properly flagged as retreating when they are given the
order even while moving.

\- Oil status is now properly reset for ships in port.

\- Ships will no longer target subs if they lack subattack.

\- Bases constructed from events now always arrive, even if target
country lacks the tech.

\- Ships will no longer have the target indicator in the interface if
too disorganised to shoot.

\- Fixed a problem with asking to join alliance led by a player.

\- Fixed a miscalculation to determine valid distance in a navalcombat.

\- Fixed so terrain names are properly localised as well.

\- Fixed the inversed gearing bonus. Its now capped at 35% bonus.

\- Fixed a major problem with the weather system which left loads of
\"static weather blocks\" all over the map.

\- Weather is now cleared properly when a scenario is restarted.

\- Fixed a problem which caused airplanes to hover indefinitely
retreating.

\- Fixed a major problem with allied area for supply checking not
working if there are oilpools around.

\- Time should now be cleared entirely between scenarios.

\- Fixed a bug where oil was not shipped home from areas if auto convoy
options where not on.

\- Fixed a problem with the Warsaw Uprising and the Soviet support
option not working.

\- Fixed the \"dissappearing plane\" bug.

\- Fixed a problem with being out supply when a supplydepot lacked oil.

\- Fixed the case where developments from aborted serial runs did not
get a name shown.

\- Fixed a problem with convoys not being displayed properly if blocked.

## [ Events ]{#Events .mw-headline}

\- New Eventseries:

-   \"Soviet-Romanian War\" (over Bessarabia with a limited peace offer)

```{=html}
<!-- -->
```
-   \"Lin Sen\" (death event)

```{=html}
<!-- -->
```
-   \"Alternative US Elections\" (if US is Paternal Authocratic)

```{=html}
<!-- -->
```
-   \"Democracy Defended\" (Republican boost if Franco get no foreign
    help)

```{=html}
<!-- -->
```
-   \"Great War Demonstration\" (might happen if GER doesn\'t occupy
    Rhineland)

```{=html}
<!-- -->
```
-   \"Independent Croatia\" (Croatia become German puppet)

```{=html}
<!-- -->
```
-   \"Germany Surrender\" (if the Soviets can take a bath in the Eng
    Channel)

\
- Modified triggers for the following events:

-   \"The Undeclared War\"

```{=html}
<!-- -->
```
-   \"US Lend-Lease Events\"

```{=html}
<!-- -->
```
-   \"Oil Embargo against Japan\"

```{=html}
<!-- -->
```
-   \"Vichy France\"

```{=html}
<!-- -->
```
-   \"Marco Polo Bridge\"

```{=html}
<!-- -->
```
-   \"Molotov-Ribbentrop Pact\"

```{=html}
<!-- -->
```
-   \"Bitter Peace\"

```{=html}
<!-- -->
```
-   \"Destroyers for bases\"

```{=html}
<!-- -->
```
-   \"Denmark folds\"

```{=html}
<!-- -->
```
-   \"US Elections\"

```{=html}
<!-- -->
```
-   \"Jose Antonio\"

```{=html}
<!-- -->
```
-   \"Victory events for Coral Sea\"

```{=html}
<!-- -->
```
-   \"Victory events for Desert Fox\"

```{=html}
<!-- -->
```
-   \"Vichy leader defection\"

```{=html}
<!-- -->
```
-   \"Hess\' flight to Scotland\"

```{=html}
<!-- -->
```
-   \"US Gearing Up events\"

\
- Modified effects in the following events:

-   \"Destroyers for bases\" (USA get access to UK)

```{=html}
<!-- -->
```
-   \"Lean on Siam\"/\"Pressure on Siam\" (many effects in all events in
    the serie)

```{=html}
<!-- -->
```
-   \"ROM/HUN switches side\" (will ally the USSR)

```{=html}
<!-- -->
```
-   \"Bitter Peace-2nd Version\" (seccedes Romanian provinces)

```{=html}
<!-- -->
```
-   \"Spanish Civil War\" (supply costs decreased)

```{=html}
<!-- -->
```
-   \"Wilkie\"

```{=html}
<!-- -->
```
-   \"US Lendlease to USSR\"

```{=html}
<!-- -->
```
-   \"Creation of Vichy\"

```{=html}
<!-- -->
```
-   \"Treaty of Munich/End of Czech\"

```{=html}
<!-- -->
```
-   \"Warsaw Uprising\"

\
- New event commands:

-   new trigger \"attack\" which lets the event check if the country is
    attacked by another given country.

```{=html}
<!-- -->
```
-   command reformulated to allow partisan-controlled provinces to
    secede.

## [ Scenario Setup ]{#Scenario_Setup .mw-headline}

\- Modifications to the 1936 campaign

-   Switched Manchurian for Korean provinces as nationals for Japan.

```{=html}
<!-- -->
```
-   Added missing static anti-air guns in Southern Part of Maginot line
    for France.

```{=html}
<!-- -->
```
-   Decreased Manchurian supply at start from 10000 to 100.

```{=html}
<!-- -->
```
-   Added Southern Sakhalin as nationalprovinces for Japan.

```{=html}
<!-- -->
```
-   US force at Philippines is now locked in position.

```{=html}
<!-- -->
```
-   Added some Australian bases.

```{=html}
<!-- -->
```
-   Modifications to Communist and Nationalist unit setups.

```{=html}
<!-- -->
```
-   Added Home defense units to the UK and removed all the extra IC.

```{=html}
<!-- -->
```
-   Lowered Italian belligerence to 0.

\- Modifications to the 1939 campaign

-   Switched Manchurian for Korean provinces as nationals for Japan.

```{=html}
<!-- -->
```
-   Removed Italian navalbase from inland Turin.

```{=html}
<!-- -->
```
-   Added missing static anti-air guns in Southern Part of Maginot line
    for France.

```{=html}
<!-- -->
```
-   Communist China is now allied with Nationalist China.

```{=html}
<!-- -->
```
-   US force at Philippines is now locked in position.

```{=html}
<!-- -->
```
-   Added some Australian bases.

```{=html}
<!-- -->
```
-   Added an airbase for Nationalist China.

```{=html}
<!-- -->
```
-   Switched a province from Siam to France.

\- Modifications to the 1941 campaign

-   Switched Manchurian for Korean provinces as nationals for Japan.

```{=html}
<!-- -->
```
-   Communist China is now allied with Nationalist China.

```{=html}
<!-- -->
```
-   Switched ownership of a few provinces between Japan and Nationalist
    China.

```{=html}
<!-- -->
```
-   Added Southern Sakhalin as nationalprovinces for Japan.

```{=html}
<!-- -->
```
-   Added some Australian bases.

```{=html}
<!-- -->
```
-   Modifications to German unit names.

```{=html}
<!-- -->
```
-   Moved a Turkish unit from Tblisi to Turkish territory.

\- Modifications to the 1944 campaign

-   Switched Manchurian for Korean provinces as nationals for Japan.

```{=html}
<!-- -->
```
-   Switched ownership of a few provinces between Japan and Nationalist
    China.

```{=html}
<!-- -->
```
-   Modifications to German unit names.

```{=html}
<!-- -->
```
-   Moved some German V-rockets from Ghent to Lille, and gave Lille an
    airbase for them.

```{=html}
<!-- -->
```
-   Three provinces added as nationalprovinces for Siam.

\- Modifications to Ardennes:

-   Modifications to event triggers, dates and effects.

```{=html}
<!-- -->
```
-   Tweaked down the offmap supplies/oil to make the supply events more
    useful.

```{=html}
<!-- -->
```
-   Removed static weather, snowstorms will now come and go in the
    scenario.

```{=html}
<!-- -->
```
-   Modifications to German unit names.

```{=html}
<!-- -->
```
-   Added a supplypool in Dunkirk and added a German technology.

```{=html}
<!-- -->
```
-   Added offensives to many German units.

```{=html}
<!-- -->
```
-   Reduced allied oil/supply pool significantly and doubled effect of
    oil/supply events.

```{=html}
<!-- -->
```
-   Changed many artillery brigades to self-propelled artillery.

\
- Modifications to D-Day:

-   Two GER divs will be activated properly in D-Day.

```{=html}
<!-- -->
```
-   Panzer Reserve is unlocked if Allies launches Operation Dragoon.

\
- Terrain Modifications:

-   Rearranged some areas in Far East Russia.

```{=html}
<!-- -->
```
-   Added two Chinese beaches.

```{=html}
<!-- -->
```
-   Modifications to climate for seazones, lakes and provinces.

```{=html}
<!-- -->
```
-   Modifications to terrain for provinces.

```{=html}
<!-- -->
```
-   Åmål no longer has a port nor a beach.

\- Added river connections

-   Lille - Mons

```{=html}
<!-- -->
```
-   Amsterdam - Leeuwarden

\- Modifications to setup technologies

-   Added Adv Machine Tools to British setup in GC41.

```{=html}
<!-- -->
```
-   Added Air Superiority Doctrine to Nationalist Chinese setup in GC36,
    GC39 and GC41.

```{=html}
<!-- -->
```
-   Added Mobility Focus doctrine to Nationalist Chinese setup in GC39.

```{=html}
<!-- -->
```
-   Communist China can now dig-in in GC36.

```{=html}
<!-- -->
```
-   Removed the two oil refinery techs from, and added Basic Naval
    Bomber to the USA in GC36.

```{=html}
<!-- -->
```
-   Added air superiority doctrine to Yugoslavia in GC36 and GC39, and
    to Bulgaria in GC39.

```{=html}
<!-- -->
```
-   Modified Finnish land techs in GC39,GC41 and GC44.

\- Modifications to Ministers and Leaders.

-   RSI now defaults to Fascist state ideology.

```{=html}
<!-- -->
```
-   Sweden starts with a Socialdemocratic government in GC36.

```{=html}
<!-- -->
```
-   Added Dutch, New Zeelander and Australian leaders to Southern
    Conquest scenario.

```{=html}
<!-- -->
```
-   Modified traits for a number of leaders.

```{=html}
<!-- -->
```
-   California,Texas, and Scotland will be fascist if the are released.

```{=html}
<!-- -->
```
-   Added US Ministers.

```{=html}
<!-- -->
```
-   British land leader \"Bourne of Atherstone\" should now be
    Commando + Logistics Wizard.

```{=html}
<!-- -->
```
-   Changed death date for a German leader/tech team used by Germany and
    Nationalist China.
:::
