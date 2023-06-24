---
title: "Transport_Capacity_and_Supply_Efficiency_FAQ"
---

[Template:Anthology](/index.php?title=Template:Anthology&action=edit&redlink=1 "Template:Anthology (page does not exist)")

## Contents

-   [ 1 What is Transport Capacity? ](#What_is_Transport_Capacity.3F)
-   [ 2 What is Effective Supply Efficiency (ESE)?
    ](#What_is_Effective_Supply_Efficiency_.28ESE.29.3F)
    -   [ 2.1 How is ESE Calculated? ](#How_is_ESE_Calculated.3F)
    -   [ 2.2 How does ESE affect combat?
        ](#How_does_ESE_affect_combat.3F)
-   [ 3 What can I do if my divisions have low ESE?
    ](#What_can_I_do_if_my_divisions_have_low_ESE.3F)
    -   [ 3.1 Offensive Supply ](#Offensive_Supply)
        -   [ 3.1.1 How much does Offensive Supply Cost?
            ](#How_much_does_Offensive_Supply_Cost.3F)
        -   [ 3.1.2 Can Offensive Supply be useful in high
            infrastructure provinces when you do not exceed your TC?
            ](#Can_Offensive_Supply_be_useful_in_high_infrastructure_provinces_when_you_do_not_exceed_your_TC.3F)
        -   [ 3.1.3 Where else would Offensive Supply be useful?
            ](#Where_else_would_Offensive_Supply_be_useful.3F)
    -   [ 3.2 What other immediate steps can I take to increase my ESE?
        ](#What_other_immediate_steps_can_I_take_to_increase_my_ESE.3F)
-   [ 4 How does Fuel and Supply for your troops affect TC load?
    ](#How_does_Fuel_and_Supply_for_your_troops_affect_TC_load.3F)
-   [ 5 What are the strategic considerations for better TC and ESE?
    ](#What_are_the_strategic_considerations_for_better_TC_and_ESE.3F)
-   [ 6 What modifiers affect TC? ](#What_modifiers_affect_TC.3F)
    -   [ 6.1 Occupied Territory Maintenance calculations
        ](#Occupied_Territory_Maintenance_calculations)
    -   [ 6.2 Partisan Activities calculations and considerations
        ](#Partisan_Activities_calculations_and_considerations)
    -   [ 6.3 Reducing Base Partisan Levels with slider moves
        ](#Reducing_Base_Partisan_Levels_with_slider_moves)
-   [ 7 How do I deal with partisans and rebels?
    ](#How_do_I_deal_with_partisans_and_rebels.3F)
    -   [ 7.1 Suppressing Partisans ](#Suppressing_Partisans)
    -   [ 7.2 Garrison div usefulness for TC problems
        ](#Garrison_div_usefulness_for_TC_problems)
    -   [ 7.3 Garrison div placements: web pattern
        ](#Garrison_div_placements:_web_pattern)
    -   [ 7.4 Dissent increases TC problems
        ](#Dissent_increases_TC_problems)
    -   [ 7.5 Rebels ](#Rebels)
-   [ 8 How is ESE calculated for Allied Troops and Expeditionary
    Forces?
    ](#How_is_ESE_calculated_for_Allied_Troops_and_Expeditionary_Forces.3F)
-   [ 9 What is still unclear about TC?
    ](#What_is_still_unclear_about_TC.3F)

##    What is Transport Capacity? 

[Transport Capacity](/Transport_Capacity "Transport Capacity") (TC) is
described in the TC tooltip rollover as *trucks trains and river barges
which are used to supply your armed forces with fuel and supply.* TC is
an abstract number as it is primarily based upon Industrial Capacity.
The various modifiers that affect TC are shown in the tooltip:

*TC is a direct function of IC – each point of IC gives you 1.5 TC*

Note that IC for the TC calculation is overall IC - it is not base IC.
Multiply your overall IC by the two modifiers (technology and minister)
and then by your infantry supply techs to get your Transport Capacity
number. Ex.: multiply overall modified IC of 349 by 1.5 and then by 1.3
if you have the three infantry supply techs to get 681 TC.

The tooltip then repeats the overall TC status by displaying Used TC and
Available TC. That line is followed by a list of modifiers that affect
the TC calculation:

-   *Technology Modifier on IC -\> TC*
-   *Minister Modifier on IC -\>TC*
-   *Fuel and Supply Transportation*
-   *Occupied Territory Maintenance*
-   *Redeployment Load*
-   *Partisan Activity*
-   *Undeployed Bases*

  
The net effect of these modifiers are calculated and shown as:

*== Current supply efficiency:* 100.00%

Also note that convoys used for oversea resources and units are NOT part
of the TC calculation. TC is very abstract as it is primarily based upon
Industrial capacity. If convoys were used for countries like Japan, UK,
and USA as part of the TC calculation, that would also severely handicap
those countries that have to operate overseas and make a difficult
situation almost impossible to handle within the game.

##    What is Effective Supply Efficiency (ESE)? 

The **Supply Efficiency** number is calculated once a day at midnight
and is the base number for any supply efficiency calculations for that
day for your divisions. This **Average Supply Efficiency** number is
combined with the infrastructure value in each province for each
division to produce an **Effective Supply Efficiency** for that
corps/division. ESE has a combat effect and also potentially affects
unit speed, upgrading progress, organization gain and the reinforcement
rate. While your TC has some overall effects, each corps does it own
separate ESE calculation and this ESE calculation has direct effects.

Many postings are about TC when they should instead focus on ESE as
shown below. It is possible to have no TC problems by being under your
TC capacity while some of your divisions will still have ESE problems
due to being in low-infrastructure provinces.

ESE will be discussed first, and then TC, though mostly they are so
intertwined that discussing one means having to discuss the other as
well.

###    How is ESE Calculated? 

When you click on a corps, ESE is shown in the line between the province
name and the list of divisions in the corps. When you wait for the
tooltip rollover, you see a calculation that averages the overall Supply
Efficiency base number with the infrastructure of the province where the
division is deployed in. Any Headquarters’ ESE bonus is added to that
average.

Example of tooltip details showing an ESE of 93.03 percent:

    Average Division ESE: 100.00
    Infrastructure: 76.06
    HQ Bonus: 5
    (Average 100.00 + Infra 76.06)/2 = 88.03
                    + HQ Bonus          5.00
                    ------------------------
                      ESE              93.03   

###    How does ESE affect combat? 

ESE has a direct combat effect for land combat that is shown in the list
of combat modifiers for each div. when the div. is in combat. To
calculate the ESE combat effect:

    Subtract 100 from the division’s ESE then divide that by 2. 

Ex. with an ESE of 108.04: (108.04-100) = 8.04 = ESE +4.02 which is
shown in the combat modifiers.

Ex. with an ESE of 71.90: (71.90-100) = -28.10 = ESE –14.05 which is
shown in the combat modifiers.

  
ESE combat effects can be positive but are usually negative. Defenders
in their own countries can have negative ESE combat effects due
primarily to low infrastructure. ESE is calculated by using a friendly
province's infrastructure, not the province in which combat takes place.
ESE combat modifiers can often be the equivalent of subtracting several
skill levels from your Generals.

ESE lower than 100 has other unit effects. Unit with \<100 ESE will
recover organization slower and will get upgrades and reinforcements
slower. ESE also has a speed effect which reduces speed by up to 50%
that is proportional to the ESE: lower ESE means lower speed. The HQ’s
ESE effect is directly added to the speed so that an HQ which gives 5%
ESE will also given nearby corps a 5% speed boost. Speed calculations
including ESE effects are discussed in [this Paradox forum thread about
speed](https://forum.paradoxplaza.com/forum/index.php?threads/influences-on-movetime.191553/)

##    What can I do if my divisions have low ESE? 

###  Offensive Supply 

Put your corps on **Offensive Supply** . Offensive supply increases the
average Supply Efficiency for just that corps by +50 for one month. The
tooltip reads: *Assign fuel and supplies for an Offensive to the
selected units. This will increase their supply efficiency by 50% for 30
days.*

If your Average Supply Efficiency was 100 (you are under your Transport
Capacity), that corps gets an Average Division ESE of 150 for it’s
specific ESE calculation when given an Offensive Supply order. Ex.:

in an 80 infrastructure province, 150 and 80 average to 115 which with a
5 HQ effect nets 120 for that corps. Without offensive supply, the ESE
calculation would be to average 100+80 and then add the 5 HQ effect
netting 95. The Offensive Supply order results in +25 ESE. In combat
that would mean changing a –2.5 ESE combat modifier to a +10 ESE combat
modifier, which is the equivalent of adding more than 2 skill levels to
the leader of that corps.

If your are exceeding your Transport Capacity: If your average Supply
Efficiency was 80%, with an Offensive Supply order that becomes 130%
(shown in the ESE tooltip for that corps as Average Supply Efficiency:
130). That 130 would then be averaged with the infrastructure that the
province is in. If the infrastructure was 60, the before and after
Offensive Supply calculations would be (without any HQ effects):

BEFORE: 80+60 Average: 70

AFTER: 130+60 Average: 95

Example from screenshots: Motor Inf with ENG brigade fighting deep in
Russia June 1942 go from 57.4 ESE to 82.4 ESE after they get Offensive
Supply. ESE will increase by about 25 for each corps which gets
Offensive Supply Orders.

####    How much does Offensive Supply Cost? 

The supply and oil amount for each div and each brigade that is put on
offensive supply are shown in the Offensive Supply icon tooltip rollover
if you pause before giving the order. The Offensive Supply Icon is in
the bottom right of the Corps information window and has an --\> over a
supply graphic. Examples of the Offensive Supply order costs for one
month:

    3 Inf Eng Supply Cost: 217.2    Fuel Cost: 0.0
    9 Inf     Supply Cost: 492.5    Fuel Cost: 0.0
    9 Pz eng  Supply Cost: 2189.3   Fuel Cost: 3603.8

These supply and fuel costs are additional costs beyond the normal daily
costs. For the 9 inf div in the example above, that’s an additional
supply cost of 1.82 supplies a day for the offensive supply order. Each
inf div normally uses 1 supply each day.

-   Note that you can not add brigades to a division that has been given
    an offensive supply order as brigade are part of the supply and fuel
    cost calculations. If you could add them, this would be an exploit
    as the brigade fuel and supply costs would not be factored into the
    offensive supply calculation.
-   Offensive supply also decreases your TC capacity by a small
    percentage. If you put a lot of divisions on offensive supply at the
    same time for a major offensive, you can notice that effect on your
    TC tooltip.

####    Can Offensive Supply be useful in high infrastructure provinces when you do not exceed your TC? 

**Yes.** Your ESE combat effect would be +12.5 (150 + 100 infra average
to 125 from which 100 is subtracted with 25 cut in half for the combat
effect). Infrastructure in provinces can also temporarily decrease due
to combat. Example: German Pz take an open Amiens which is just north of
Paris. Infrastructure is 0.50/100 due to combat damage when you pause
over infrastructure in the province info screen. Without offensive
supply, those Panzer div attacking Paris would have an ESE of 75
(average of 100+50) and an ESE: -12.5 combat effect. With offensive
supply, their ESE is 100 (average of 150+50) which results in a neutral
ESE combat effect rather than a negative ESE combat modifier.

####    Where else would Offensive Supply be useful? 

Any place where province infra is below 100 (which is ¾ of the world)
and when your Transport Capacity is exceeded. It is particularly useful
where you need certain div to more quickly regain strength and
organization.

###    What other immediate steps can I take to increase my ESE? 

1.  Move an **HQ** next to your corps to get a small ESE boost. The
    amount of ESE boost from an HQ is determined by your land doctrines.
    Any ESE from an HQ is directly added to the ESE for that corps as
    shown above. The USA gets the most benefit from HQ for ESE from
    their land doctrine path, Germany starts high, and the Soviet Union
    has almost no HQ ESE effect early on (though it can eventually catch
    up to the Germans). See [the Land Doctrine FAQ on
    Wiki](http://hoi2.nsen.ch/wiki/index.php/Land_Doctrine_FAQ) for more
    details.
2.  Use **Logistics Generals** as much as possible especially in quieter
    areas. Each Logistics General reduces supply and fuel usage by 25%
    when the formation is stationary. That results in fewer supplies and
    oil having to be sent to your divisions and that will reduce the
    Fuel and Supply Transportation modifier to your TC.
3.  Put all div in non national provinces on **anti partisan duty** .
    Zoom and sweep the mouse to grab a lot of corps in an area. Then
    look at their mission list to make sure that these div are on anti
    partisan duty.
4.  When anything that uses fuel moves, that increases the strain on
    your TC as more fuel needs to be shipped and that decreases the
    average Supply Efficiency. Fuel [when moving is
    4x](http://forum.paradoxplaza.com/forum/showthread.php?t=215485) the
    fuel used when stationary.
    1.  Example.: I had most of my German Panzer and Motor Inf div
        stationary in Russia in 1942 and my overall Supply Efficiency
        was 64.06% I deliberately gave them all move commands and waited
        until midnight for the daily calculation and Supply Efficiency
        dropped down to 52.50% That's an 11.56% drop in average Supply
        Efficiency just because more oil was consumed when all the
        Panzer and Motor div started moving and using lots more fuel.
        While you can’t avoid moving your armor and other oil using div
        and brigade, movement affects your TC and ESE.
5.  You can **liberate occupied territory** . This reduces two major
    negative TC factors: Partisan Activity and Occupied Territory
    Maintenance. In 1.3, you get a dissent hit for liberating which is a
    direct read of the democratic/authoritarian slider; this ranges from
    0.5 for democracies to 5 for authoritarian government (in Doomsday
    for small countries with less than around 5 IC, the dissent hit is
    cut in half).
6.  Dissent also increases base partisan activity levels by about a 1.5x
    factor, so you will need to get rid of any dissent as soon as
    possible to improve both your IC and your TC.
7.  Don’t keep a lot of brigade or div or bases in your deployment pool.
    Deploy newly built brigade immediately as they cost as much as a
    division for the Redeployment Load (10 each) (in Doomsday undeployed
    brigade cost 3 TC due to a new parameter in \db\misc.txt).
    Undeployed Bases add 100 to the TC costs.
8.  Switch ministers to those that increase IC or to the guns and butter
    minister that reduces supplies used.

##    How does Fuel and Supply for your troops affect TC load? 

1.  The precise stats for the TC load for Fuel and Supply for your
    troops are given on the statistics page of each division (the screen
    where you add brigades). Just add the supplies used and the fuel
    used (the fuel number here is the extra fuel used when moving). For
    example, one Basic Armor III div with SPA-2 uses 3 supply and 7.4
    fuel when moving, and that counts against your TC load, meaning that
    one armor div uses more TC than 10 plain inf div use. Ships at sea
    use oil and planes use oil when in the air; that oil has to be
    shipped and also counts against your TC load.
2.  Due to the much higher fuel costs when moving, when you start a
    major operation with armor and motor div you will get a very large
    TC hit. Example for Barbarossa with 15 basic medium Panzer div with
    basic SPA brigades along with 12 improved motor inf div with
    improved AC brigade: Panzer+spa use 4.9 TC when stationary and 10.4
    when moving while motor+ac uses 2.6 TC when stationary and 5.4 TC
    when moving (TC costs approximately doubled). The TC differential
    with 15 Panzer and 12 motor is about 116 TC points which might be
    20% of your TC. A corps with 2 Panzer + 1 motor uses 27 TC points
    when moving while a corps with 1 Panzer + 2 motor div uses 21 TC
    points when moving: the same TC as either 27 inf div or 21 inf div!
3.  You can save on supplies and your TC load with a Guns and Butter
    minister (15%) or with logistics commanders (25%). Note that the
    division statistics do not show these savings as they are only
    displayed in the overall Fuel and Supply for your troops
    calculation.

##    What are the strategic considerations for better TC and ESE? 

-   The more IC that you have, the higher the TC you have due to the
    direct 1.5x factor (TC = 1.5x your net IC).
-   Keep a large supply surplus rather than building yet another unit.
    You need to balance whether having more divisions in the field is as
    effective as using Offensive Supply for your units that are already
    in action.
-   The fuel costs for oil using divisions and brigades such as Panzer
    divisions can be a big strain on your TC. Consider substituting air
    power or using infantry divisions rather than using Armored or
    Mechanised Infantry Divisions. Oil using divisions use 4x the oil
    when moving or in combat contrasted with just sitting there, which
    means that 4x the fuel has to be transported. You probably shouldn’t
    just use unbrigaded infantry, but the fuel and supply drain on your
    TC from a unit's fuel and supply requirements is yet another factor
    that you need to consider.
-   The biggest factors affecting your TC will likely be Fuel and Supply
    Transportation (FST) for your troops and Partisan Activity after you
    conquer some territory. You need to suppress partisans to improve
    your TC. Occupied Territory Maintenance (OTM) can also be a major
    problem if you have a lot of occupied territory. Air and navy bases
    are a big TC drain unless you deploy them immediately.
-   **Minister Effect** : the TC tooltip has a line for a minister
    effect. That minister is the Head of State Resigned Generalissimo
    who has a positive 15% TC modifier. Since head of states can not be
    easily changed, you might want to consider in advance whether or not
    it might be possible to select a Resigned Generalissimo head of
    state in an election or via an event. The minister file for each
    country is in \db\ministers and is a csv file which can be opened up
    any wordprocessor to see whether your country potentially has a
    Resigned Generalissimo who can be installed at some point. The RG
    entry looks like this in a csv file:

&nbsp;

    21001;Head of State;Miklós Horthy de Nagybánya;NA;FA;Resigned Generalissimo;High;M21001;x

##    What modifiers affect TC? 

The \db\misc.txt has these factors:

    TC Undeployed Division Load
    10.0

    TC Occupied Province Load
    1.0

    TC Land Division Load Multiplier
    1.0

    TC Air Division Load Multiplier
    1.0

    TC Naval Division Load Multiplier
    0.3333

    TC Load from partisans
    12.0

    TC load factor from offensives
    1.5

    TC Load from province dev
    5.0

    TC Load from bases in queue
    100.0

Notes:

-   Each undeployed brigade also seems to cost 10 (same as a division).
    The manual’s info about these costs is incorrect. Doomsday reduces
    the TC cost of brigades to 3 instead of 10.
-   There were several significant changes in version 1.3. Undeployed
    div, brigade and strategically redeployed div now cost 10 instead of
    5 TC points. Occupied Territory Maintenance was decreased by 1/3 but
    Partisan Activity increased by 4x.

###  Occupied Territory Maintenance calculations 

**Each occupied province costs 1 TC** *but that can be reduced by
inf/supply research* . The formula for each supply tech level uses the
TC_occupied_mod value = 20 found in each inf/supply tech. These are
cumulatively added which results in these factors:

-   (1/(1+0.2)) for one tech or 0.83 TC points
-   (1/(1+0.4)) for the second supply tech or 0.71 TC points
-   (1/(1+0.6)) for the third supply tech or 0.625 TC points

The importance of Occupied Territory Maintenance was greatly reduced in
version 1.3 Unsuppressed Partisan Activity is now the main concern.

###  Partisan Activities calculations and considerations 

-   The 12.0 TC Load from partisans adds up all the **partisan
    activities** and then multiplies them by 12. Since the partisan
    activity is displayed as 14%, 8%, etc., that means multiplying
    0.14\*12. If you just add up the partisan numbers for each province
    such as partisan activities in Poland after Germany annexes it, the
    numbers on the partisan activity line add up precisely to the sum of
    the partisan activity numbers multiplied by 12. To verify this, you
    would obviously need to focus on only a few provinces at a time.
-   The line on the tooltip summarizes all unsuppressed activity.
    Putting units on antipartisan duty will directly (though perhaps
    minutely) reduce this TC penalty. Putting units on **antipartisan
    duty** doubles the suppression in the province. There is also a
    small percentage of the suppression that is applied to adjacent
    provinces of around 20 to 25%. Due to rounding, it is difficult to
    be more precise than that.

Partisan activity was dramatically changed in 1.3 and is now a
significant factor for TC. The 12.0 TC load from partisans used to be 3,
so this is a 4x increase.

-   Partisan activity in 1.3 does not diminish over time like it did in
    previous versions of the game. Base partisan values will slowly
    increase in non-national provinces. This value, which was 0.2 thru
    version 1.2, is found in the misc.txt as

&nbsp;

    # Monthly Nationalism reduction 
        -0.002 

Partisan activity starts with a base value of 15 which can be increased
by several settings on the domestic policy slider factors. The primary
slider effect is the government slider where partisan levels range from
-5 to +5, meaning that base partisan activity differ by 10 when
contrasting democracies and authoritarian governments. Example: Germany
will usually get 25 as its base partisan value when it annexes territory
in Europe; without any suppression, that's 25\*.12 = negative 3 TC
points for each province. The base value for partisan activities in also
in misc.txt

    # Nationalism starting value 
        15

This value was 20 in previous versions of the game.

###  Reducing Base Partisan Levels with slider moves 

Reducing Base Revolt Risk with slider moves: your partisan tooltip in a
province tells you what the Base Revolt Risk (BRR) is in that province.
There can be a lot of variance for that BRR number. Factors such as
slider settings affect the BRR as do annexed vs controlled status. There
is also a regional variation for the BRR: some parts of the world have
no nationalism, others have some, while others have around 24% BRR.
Germany for example in Europe starts with 25% BRR for annexed provinces
and 33% for controlled while SOV get 25% for annexed and 24% for
controlled. Events seceding territory result in just 2% BRR. Note that
dissent will increase the BRR until the dissent is eliminated.

It is possible as a dictatorship to move your sliders to reduce the BRR,
meaning that you end up with fewer partisans that need to be suppressed.
If you move towards an Open Society, that reduces BRR, but as a
dictatorship you usually have to make other slider moves toward the
Political Center and towards Democracy to see some dramatic effects.
Germany or the Soviet Union, for example, with about 10 slider moves on
the democratic, political, and open society sliders, can dramatically
reduce their BRR. Consult [this
thread](http://forum.paradoxplaza.com/forum/showthread.php?t=279878) for
further details as the interactions of these sliders on BRR is very
complicated:

##    How do I deal with partisans and rebels? 

Unsuppressed Partisan Activity is calculated in each non national
province. All of the percentages are added up and then multiplied by 12
to give the Partisan Activity number on your TC tooltip. Unsuppressed
Partisan Activity can negatively and severely affect your TC. Improve
your TC by suppressing partisan activity. The more than you conquer, the
more that you need to garrison in order to suppress Partisan Activity.
Always remember that partisan activity will happen when you conquer more
territory (except in parts of Africa and Asia where nationalism is not a
factor).

###  Suppressing Partisans 

Suppression works in three ways:

-   1\) Any unit in a province uses its standard suppression value.
    Large numbers of units in a province automatically suppress some or
    all partisan activity. After the units move on to the next battle,
    however, you need to do something else to suppress partisans.
-   2\) Units put on antipartisan missions double their suppression
    value. Any units at full organization should be put on anti partisan
    missions.
-   3\) There is a spillover effect for suppression in adjacent
    provinces. A range of between 1/5 to 1/4 (20% to 25%) of the
    suppression in a province is applied to adjacent provinces. Due to
    the small percentages involved and rounding, it is not possible to
    be more precise than that.

To see the effects of suppression, pause over the partisan icon in a
province and review the tooltip. Base revolt risk is the first number
while Current Suppressing is the second number. The partisan icon
displays net unsuppressed partisan activity which becomes a penalty to
your Transport Capacity.

###  Garrison div usefulness for TC problems 

The best unit by far to suppress partisans is the garrison div,
especially the garrison div with a Police (MP) brigade. As your partisan
activity levels increase due to conquering, build garrison div and MP
bdes and put them on antipartisan missions. A 1939 garrison div has 8
suppression which is doubled to 16 when on antipartisan missions. In
just its own province, that would mean a reduction of 1.92 on the
Partisan Activity line of your TC tooltip and a net reduction of 3.84
from four adjacent provinces. 40 Garrison div could reduce Partisan
Activity by 150 or higher while 40 with MP bde could reduce Partisan
Activity by more than 200.

###  Garrison div placements: web pattern 

Because garrison div can not move but have to be strategically
redeployed, you need to figure out what suppression pattern you will set
up with them. A pattern of either every other province (one in between)
or two provinces apart will take best advantage of the spillover
adjacency effect. Also put garrison div in any high IC conquered
province as this seems to increase IC from that foreign province. High
partisan levels in a province seem to decrease industrial production,
but like non national IC, this effect is bundled into the base IC number
and is not displayed anywhere in the game.

Example of using adjacency suppression: donut hole pattern. Deploy one
garrison div with mp brigades on antipartisan duty around but not in a
province that has six adjacent provinces. Even with no units in a
province such as Kielce (Poland), the 1939 garrison div with MP bde in
the adjacent provinces will suppress 27% base partisan activity in
Kielce.

Generally aim for an overall web pattern that will reduce overall
partisan activity levels. You probably can not afford to build enough
garrison div to cover every non national province that has a high
partisan activity base level. Spread them around to take advantage of
the adjacency effect, add MP brigade, and remember to put the garrison
div on anti partisan missions.

###  Dissent increases TC problems 

Dissent increases base partisan activity levels (partisan activity -
base revolt risk). Because unsuppressed partisan activity % are
multiplied by 12, this can greatly impair your TC. The math seems to be
approximately: partisan base number + (dissent \* 1.5). With rounding,
that formula approximately matches these observed figures after a 5%
dissent hit. Partisan activity base goes from 2 to 7 after a 5% dissent
hit; partisan activity rises from base 24% to 33% after the same 5%
dissent hit. Reduce dissent immediately to improve your TC.

###  Rebels 

When rebels pop up, however, garrison div are not able to do anything
about that unless the rebels are in the same province as the garrison
div. The role of the garrison div is to suppress partisan activity - it
is not to fight rebels. Other units that can move have to fight rebels.
The best units for fighting rebels are allied units under your military
control because allied units do not count against your TC. If allied
units are not available, build a few cav units and scatter them around.
Cav move fast enough and have enough fighting power to defeat rebels.
Any land unit that moves except militia and HQ can move and defeat
rebels. In mountain territory or in other areas where movement is slow,
a pattern of inf with mp brigades set on antipartisan missions should be
able to cover enough territory to handle any rebels that pop up.

##    How is ESE calculated for Allied Troops and Expeditionary Forces? 

The TC/ESE rules for allied troops on your territory are somewhat
complicated. You provide supplies and oil for allied troops on your
territory, but your allies use their own TC to calculate their ESE.
Allied troops from minor countries might have very low ESE because they
either have too many divisions for their limited IC and TC or because
their IC and TC have declined due to lack of resources for industrial
production such as rare minerals.

When you are in an ally's territory, your ally provides you with
supplies and oil, but you use your own TC/ESE.

Expeditionary forces that you send to your ally use the TC calculations
of your ally rather than your own TC/ESE.

##    What is still unclear about TC? 

-   Each inf/supply tech shows the same effect: supply_dist_mod value
    = 10. It’s not clear to me whether the supply_dist\_ means supply
    distance or supply distribution. Since this is an inf/supply tech, I
    guess it has something to do with enhancing supply distribution
    rather than any TC effects. The information in the research screen,
    however, reads as Supply Distance Modifier: +10.0%. Where this is
    shown in the game and what it really is remains a mystery to me. A
    forum administrator says that this effects organization gain.
-   Distance factors: The unit load and province factors in the TC
    rollover seem to be straight forward and don’t show any discernible
    distance effects. The game calculates ESE for each corps by using
    only the infrastructure of the province that the corps is in rather
    than trying to calculate the infrastructure of each province along a
    supply chain (info from the manual). Whether one of your divisions
    is in the capital or thousands of km away from the capital on a
    different continent does not seem to be part of the TC calculations.
    Having to send supplies 89 km or 1438 km does not seem to be a
    factor in the game.
-   TC load factor from offensives: this is mentioned in the
    \db\misc.txt file. Using offensive supply will hurt your TC
    somewhat, but the precise math for that is yet unknown.

With assistance from several posters in [this Paradox forum
thread](https://forum.paradoxplaza.com/forum/index.php?threads/transport-capacity-and-supply-efficiency-draft-faq.191871/)
