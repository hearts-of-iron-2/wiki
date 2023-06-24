---
title: Nuclear_Weapons
---


[Template:Anthology](/wiki/index.php?title=Template:Anthology&action=edit&redlink=1 "Template:Anthology (page does not exist)")

Nuclear weapons have been available in HOI2 since the game was first
released. In the Doomsday expansion, Nukes became very noticeable in the
"Doomsday Scenario" which begins with a US nuclear strike on the Soviet
Union. Being nuked is the worst thing that can happen to your nation.
The only thing worse than being nuked, however, is being nuked twice. It
will completely disrupt everything you do, and severely challenge your
ability to wage war. Any sustained series of five or more nuclear
strikes will render your nation completely helpless.

## Contents

-   [ 1 Creation ](#Creation)
-   [ 2 Delivery ](#Delivery)
-   [ 3 Effects ](#Effects)
    -   [ 3.1 Units ](#Units)
    -   [ 3.2 Province ](#Province)
    -   [ 3.3 Economic ](#Economic)
        -   [ 3.3.1 Top Targets ](#Top_Targets)
        -   [ 3.3.2 Damage ](#Damage)
-   [ 4 Defense against nuclear strikes
    ](#Defense_against_nuclear_strikes)
-   [ 5 Game shortfalls ](#Game_shortfalls)
-   [ 6 Details ](#Details)
    -   [ 6.1 Build Time ](#Build_Time)
    -   [ 6.2 Technology Teams ](#Technology_Teams)
    -   [ 6.3 Version Changes ](#Version_Changes)
-   [ 7 Use of Nukes in Mods ](#Use_of_Nukes_in_Mods)
-   [ 8 Enable Nukes manually ](#Enable_Nukes_manually)

##  Creation 

Nuclear research contains 8 industrial technologies, and five secret
weapon technologies. After researching the "Isotope Separation Facility"
technology, it is possible to begin building nuclear reactors. In order
to produce nuclear weapons, you need **one** province containing at
least **six reactor levels** . To help you with that, reactors can be
built in only one province: so be sure to place your first reactor in
the proper place. Each successive technology allows building one
additional reactor level. More advanced reactors provide [research
bonuses](/wiki/Research#Effect_of_Nuclear_Reactors "Research") . The
"Nuclear Waste Bomb" secret technology enables a reactor size of 6,
which is the minimum reactor size necessary for the production of
nuclear weapons. This technology also enables the strategic bombardment
mission "nuke". Reaching this stage requires an investment of 54,000
IC-days in reactor building.

Once your reactor has reached level six, nuclear bombs will be produced
automatically. Hover the mouse cursor over the "Atom" symbol in the
middle of the top status bar to get a tooltip about when your next nuke
will be ready.

##  Delivery 

Nukes can initially be delivered via strategic bombers. After research
of the "Miniaturized Fission Bomb" (1948), in conjunction with all
rocketry Industrial technologies, and all four rocketry secret weapons,
it is possible to attach nukes to rockets. In order to attach a nuke to
any of those delivery devices, select the latter and click the "attach
nuke" button at the bottom of the unit's info screen. It's very similar
to attaching regular brigades.

Once there is a nuke attached, the whole formation (e.g. the strategic
bomber group) has a new mission available: "nuke".

##  Effects 

The damage caused by a nuclear weapon varies based on the technology
level researched. The first, "Nuclear Waste Bomb" technology is the
default level, while the "Semi-Fission Bomb" increases damage by 30%,
the Fission bomb by an additional 50%, and the Hydrogen bomb another
50%.

Nuclear weapons act as a kind of *permanent* strategic bombardment,
multiplied by several orders of magnitude. Several well-placed nukes can
severely hamper the infrastructure of any nation and make the target
nation incapable of fighting war. They have several serious effects to
the province that was struck:

###  Units 

In the original HOI2 game, nuclear weapons had one effect: complete
destruction of all units in the province nuked.

Starting in HOI2 DD, nuclear weapons reduce the strength of all existing
units, and wipe out organization. In addition, since the nuked province
has 0% infrastructure, the soldiers are effectively trapped in that
province, and will not regain organization. Therefore, strategic
redeployment is necessary to properly "recover" the use of the effected
units.

###  Province 

A successful nuclear strike against a province will permanently reduce
IC, infrastructure, and manpower in province. It will "temporarily"
reduce AA, land forts, airbases, ports, and resources.

For example, in the Doomsday scenario, before the nuke, Moscow has: 27
IC, 4 AA, 5 Fort; 13 MP, 31 Metal, 82 energy, 17 rare, 5 airbase, 70%
infrastructure. After the nuke, 0 of 9.6 IC, 0.8 of 4 AA, 0/5 Fort, 4
MP, 1.57 Airbase, 0.1% infrastructure. Meanwhile resources are all
temporarily reduced: metal was reduced by 83%, energy by 78%, and rares
by 83%.

The "temporary" reductions are a bit misleading. With 0.1%
infrastructure, these will take **years** to come back at full strength.
While the player can rebuild infrastructure in the affected province,
each level of infrastructure takes 1 year to build. Thus, in all
practical warfare terms, even the "temporary" damage is essentially
permanent.

###  Economic 

A successful nuclear strike against your nation will increase national
dissent. Based on the Doomsday scenario (Fission Bomb technology), the
following results were produced:

|            |                |                |             |                   |
|------------|----------------|----------------|-------------|-------------------|
| Target     | Dissent Caused | Victory Points | Original IC | Original Manpower |
| Moscow     | 23.85%         | 50             | 27          | 13                |
| Leningrad  | 10.8%          | 30             | 18          | 3                 |
| Stalingrad | 8.1%           | 30             | 16          | 1                 |
| Kiev       | 2.7%           | 5              | 2           | 2                 |
| Kuybyshev  | 2.7%           | 0              | 2           | 2                 |
| Moyz       | 0%             | 0              | 0           | 0                 |

This means that dissent caused is a function of IC and manpower: Victory
points are not involved. In order to determine dissent lost, the
equation is:

    D = (I * 0.45) + (M * 0.9)

Where D = Dissent; I = IC; and M = manpower. Thus, manpower has twice
the weight of IC in determining dissent caused.

|                    |                              |
|--------------------|------------------------------|
| Technology         | Formula                      |
| Nuclear Waste Bomb | D = (I \* 0.25) + (M \* 0.5) |
| Semi-Fission Bomb  | D = (I \* 0.30) + (M \* 0.7) |
| Fission Bomb       | D = (I \* 0.45) + (M \* 0.9) |
| Hydrogen Bomb      |                              |

Huge dissent, together with the other effects of nuclear weapons, spells
disaster during wartime. For example, in the Doomsday scenario, after
the nuclear strike, the Soviet Union's transport capacity skyrockets to
almost 40% over the limit, while total effective industrial capacity
drops by an incredible 30%. The problems in transport capacity have a
ripple effect throughout the military, with unit combat effectiveness
dropping by 20%. Meanwhile, the IC reduction makes it nearly impossible
to lower the massive dissent while maintaining production, supplies, and
reinforcements. Since the prospects of lowering dissent are unrealistic,
in practical terms, the 30% IC loss is permanent.

Calling the effects of a nuclear strike devastating are an
understatement. Again, the only thing worse than one nuclear strike is a
second nuclear strike.

####  Top Targets 

The most strategically important target for a nuclear weapon are the
nuclear reactors of your adversaries. Since the game only allows
building a single reactor of varying levels (at tremendous cost), the
first nuclear power that can launch a weapon against the opponent's
reactor ensures nuclear supremacy. A reactor hit by a nuclear weapon
will be "temporarily" reduced to 0. Due to the 0% infrastructure in the
province hit, however, it would take years for that reactor to fully
recover. Moreover, expanding that reactor will be extremely delayed. In
this sense -- nations with nuclear ambitions that have not yet reached
the critical threshold can be permanently prevented from attaining nukes
with recurring strikes once every few years.

The following image shows the top ten nuclear targets that would cause
the most dissent, based on data from the 1936 scenario. Note that this
does not account for any new IC built during the course of the game. Due
to the weight of manpower in determining dissent, Nationalist China is
the most susceptible to the adverse effects of dissent caused by nuclear
warfare. Nationalist China predictably has 4 of the top 10 targets, and
in the event of a successive strike, Nationalist China would suffer
72.5% dissent from just 4 targets. No other major or minor nation would
exceed 40% dissent after 4 nuclear strikes, making it exceedingly
difficult to cause 100% dissent (thus triggering civil war) through
nuclear strikes.

[Top Ten Nuclear
Targets](/wiki/index.php?title=Special:Upload&wpDestFile=Nuke-targets.png "File:Nuke-targets.png")

  

####  Damage 

Nuclear Research technologies confer different damage ratings for
nuclear devices. The following table was made from in-game testing with
a target of Berlin (20 IC, 10 MP, 100% Infrastructure). Note that damage
from nuclear devices is not consistent, and there are variances in
damage rates (around 25% margin of error). Since a nuclear weapon both
temporarily and permanently reduces IC and infrastructure, these values
have been listed separately:

|                    |              |              |                 |                 |                    |
|--------------------|--------------|--------------|-----------------|-----------------|--------------------|
| Technology Level   | Temporary IC | Permanent IC | Temporary Infra | Permanent Infra | Manpower remaining |
| Nuclear Waste Bomb | 5            | 13           | 45%             | 70%             | 5                  |
| Semi-Fission Bomb  | 2            | 10           | 20%             | 55%             | 5                  |
| Fission Bomb       | 0            | 6            | 0.1%            | 33%             | 1                  |
| Hydrogen Bomb      | 0            | 0            | 0.1%            | 0.23%           | 0                  |

##  Defense against nuclear strikes 

Nukes that are delivered by Strategic Bombers can be defended against
with air superiority:

-   Constant flights of interceptors/fighters in a perimeter around your
    nation
-   Strong air defense installations in a perimeter around your nation,
    or you most valuable core provinces
-   Strong infrastructure of radar and airbases to improve
    interceptor/fighter efficiency
-   Focus on enemy airbases within range of your nation

Nukes based on rockets such as the ICBM *cannot be defended against* .

##  Game shortfalls 

HOI2 modeling of nuclear weapons is not perfect, and it is one of
several notable [AI flaws](/wiki/AI_Behaviour#Weaknesses "AI Behaviour")
. In particular, the AI reacts so poorly to the use of nuclear weapons
that many consider their use gamey:

-   Non-use: The AI usually will not research/build nuclear weapons.
    This is particularly ahistorical. The AI will only use them in the
    Doomsday scenario, because they are already researched/built.
-   Surrender: The AI will not surrender, no matter how many times it is
    nuked. This defect includes the Japanese AI. The use of nuclear
    weapons is not a factor in peace negotiations.
-   Deterrence: The AI does not fear complete nuclear devastation nor
    does it have any deterrence mechanism, resulting in highly
    irrational decisions (e.g. if the player is capable of launching a
    massive nuclear strike against the AI, the AI will still launch a
    single nuke that does little damage to the player, while retaliation
    from the player completely destroys the AI).

The following potential failings are debatable, but often mentioned in
discussions:

-   Diplomatic consequences: The game does not model negative diplomatic
    consequences of sustained nuclear warfare (relations with all
    nations dropping, raising belligerence, and even dissent at home,
    etc)
-   Fallout: There is no nuclear fallout. This is historically
    reasonable with early nukes, whose most devastating effects were
    mostly thermal and radiation exposure was limited.
-   Nuclear Winter: The game does not model the cumulative effects of
    massive nuclear warfare on the environment (e.g. resource drops
    around the world).

Finally, one error/bug in the game design is that nuclear reactors *do
not* produce energy: this was incorrectly stated in the game manual, and
is incorrectly stated in the "Nuclear Power Production" technology.

  

##  Details 

###  Build Time 

|              |            |
|--------------|------------|
| Reactor Size | Build Time |
| 6            | 400 days   |
| 7            | 320 days   |
| 8            | 270 days   |
| 9            | 160 days   |

###  Technology Teams 

Only a limited number of countries have a technology team capable of
researching nuclear technology:

-   Austria
-   Canada (past 1943)
-   Communist China (past 1950)
-   Nationalist China (past 1950)
-   Denmark
-   France
-   Germany
-   Holland
-   Hungary
-   Ireland
-   Italy
-   Japan
-   Luxembourg
-   Poland
-   Switzerland
-   Soviet Union
-   Nationalist Spain
-   Republican Spain
-   Sweden
-   United Kingdom
-   United States

The following nations are special, break-away nations that can only
exist in special circumstances, but who will have nuclear technology
teams:

-   California
-   Congo
-   Confederate States of America (past 1943)
-   East Germany (past 1954)
-   West Germany
-   India (past 1943)
-   Russia (RUS)
-   Scandinavia
-   Slovenia
-   Transural Republic (past 1942)
-   Wallonia

###  Version Changes 

In HOI2 DD, nuclear weapons underwent a complete change: there role was
modified to have several strategic consequences, listed below. In the
original HOI2 game, nuclear weapons only destroyed all units in a
province. In DD version 1.1, minor changes were that the AI began
targeting nuclear reactors for installation strike missions, where
previously they had been ignored. In DD version 1.3, nuclear reactors
cost an additional 5 manpower.

  

##  Use of Nukes in Mods 

The AI in the following mods will develop and use nuclear weapons:

-   TRP
-   Compendium
-   Confederate Armageddon

In DAIM, the AI will research and build nuclear weapons. The AI will
"not", however, launch nuclear weapons. Typically this is because the AI
will not build rockets or strategic aircraft which are necessary to
deliver the weapons.

##  Enable Nukes manually 

Following advice from Gen.Schuermann, you can edit the game files of the
vanilla game or any mod to enable nukes:

1.  Open up the specific savegame you want to mod.
2.  Look for the country to edit, by searching country = {
3.  Scroll down, to the part of construction.
4.  Look at max_factor = x. Standard is max_factor = 0.020 (this means,
    afaik, that Ger will use 2% of their total available IC for
    construction of either IC, AA, Airports, ports, rocket facilities,
    infra, and finally, nukes. Say, Germany has 300 effective IC. a nuke
    facility costs 50 IC.
5.  Change max_factor = 0.200 (ensure to lower all other infrastructure
    priorities)
6.  Then look for nuclear_reactor = no. Switch no to yes.
7.  Next, look for technology. Technology = { is the search entry.
8.  There should be a spot "ignore techs". Identify the nuke tech
    numbers in order to ensure the AI will research them.

-   Industrial Tech IDs: 5470 5480 5490 5500 5510 5520 5530 5540
-   Secret Tech IDs: 7170 7180 7190 16010 16020
