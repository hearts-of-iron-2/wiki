---
title: Land_Combat_Efficiency
---
::: mw-parser-output
[Template:Anthology](/wiki/index.php?title=Template:Anthology&action=edit&redlink=1 "Template:Anthology (page does not exist)"){.new}

::: {#toc .toc aria-labelledby="mw-toc-heading" role="navigation"}
::: {.toctitle dir="ltr" lang="en"}
## Contents {#mw-toc-heading}

[ ]{.toctogglespan}
:::

-   [[ 1 ]{.tocnumber} [ Definitions ]{.toctext}](#Definitions)
-   [[ 2 ]{.tocnumber} [ Command Penalty Capacity (i.e. the -75%
    penalty)
    ]{.toctext}](#Command_Penalty_Capacity_.28i.e._the_-75.25_penalty.29)
-   [[ 3 ]{.tocnumber} [ Div list sequence
    ]{.toctext}](#Div_list_sequence)
-   [[ 4 ]{.tocnumber} [ Who commands? ]{.toctext}](#Who_commands.3F)
-   [[ 5 ]{.tocnumber} [ Leader and division experience
    ]{.toctext}](#Leader_and_division_experience)
-   [[ 6 ]{.tocnumber} [ HQ bonus / effects
    ]{.toctext}](#HQ_bonus_.2F_effects)
-   [[ 7 ]{.tocnumber} [ Skill bonuses ]{.toctext}](#Skill_bonuses)
-   [[ 8 ]{.tocnumber} [ Traits ]{.toctext}](#Traits)
-   [[ 9 ]{.tocnumber} [ Examples of how efficiency is calculated for
    traits and skill
    ]{.toctext}](#Examples_of_how_efficiency_is_calculated_for_traits_and_skill)
-   [[ 10 ]{.tocnumber} [ Other modifiers ]{.toctext}](#Other_modifiers)
-   [[ 11 ]{.tocnumber} [ Appendix ]{.toctext}](#Appendix)
-   [[ 12 ]{.tocnumber} [ Note ]{.toctext}](#Note)
:::

## [ Definitions ]{#Definitions .mw-headline}

-   Unit - The smallest element - a tank, infantry, motorized, mech..
    etc.
-   Formation - All the units grouped under a single leader. If the
    number of div is in red, you have a formation capacity problem which
    results in several kinds of penalties (loss of skills, loss of
    traits, and some divisions/units may get an additional -75
    overstacking penalty).
-   Stack - One or more formations located in the SAME province (zone).
    In battle, a stack of formations is commanded by their most senior
    leader. There are diffent capacities for attacking than for
    defending.
-   Div list - The list of divisons that appears in the combat window.

## [ ]{#Command_Penalty_Capacity_(i.e._the_-75%_penalty)} [ [Command Penalty Capacity](/wiki/Command_Penalty_Capacity "Command Penalty Capacity") (i.e. the -75% penalty) ]{#Command_Penalty_Capacity_.28i.e._the_-75.25_penalty.29 .mw-headline}

1.  When you group your armies its essential that you understand that
    each leader has a Command Penalty Capacity (CPC).
2.  This is a parameter for each stack. It is worked out separately for
    each stack. Stack is defined above as the number of units/divisions
    in a province.
3.  If the total number of units in the stack exceeds the Command
    Penalty Capacity when attacking, then the excess units in that stack
    receive a -75% penalty.
4.  For each attacking stack, it is the capacity of the most senior
    leader in the stack.
    -   if the most senior leader is an FM, then it is 12
    -   if the most senior leader is an GEN, then it is 9
    -   if the most senior leader is an LT, then it is 3
    -   if the most senior leader is an MJ, then it is 1
5.  For a defending stack it is the sum of all the leaders present in
    the stack. (Unless you are being attacked by aircraft- according to
    the manual defence from aircraft is handled as per attack- each
    stack is assessed individually)
6.  Thus if we have 13 units in an attacking formation commanded by a FM
    (display of 13/12), one unit will have a -75% penalty. If the units
    were defending the display would also read 13/12. If we have 13
    units units in a territory, but 12 of them will be under a FM and
    the 13th will be under a LT and the stack was attacking (from one
    territory) then the display would read 13/12 - the 13th unit would
    be at -75%. If the same units were defending then the CPC will be 15
    (FM 12 + LT 3 = display 13/15) thus no unit will get a -75% penalty,
    but ONLY if they are defending.
7.  The stack capacity for all the formations in a province may be
    doubled by an HQ adjacent or in the same province. The HQ does not
    have to be present at the start of the combat - as soon as the HQ
    becomes adjacent to or present at an existing combat, the combat
    efficiency values alter accordingly.
    -   if the most senior leader is an FM, stack capacity is doubled to
        24
    -   if the most senior leader is an GEN, stack capacity is doubled
        to 18
    -   if the most senior leader is an LT, stack capacity doubled to 6
    -   if the most senior leader is an MJ, stack capacity is doubled to
        2

    1.  Note that stack capacity and formation capacity are different
        things as explained below in the HQ, skills, and traits section.
8.  Thus in the same situation, but with a HQ present as one of those 13
    units, we would have a CPC of 24 if one formation was commanded by a
    FM, and a CPC of 30, if a second formation was commanded by a LT. No
    unit will get the -75% penalty command capacity penalty.
9.  The units receiving the penalty are the lowest ones in the formation
    list for a stack.
10. There is a limit to the number of ATTACKERS in one stack - 24 per
    territory (under an FM with a HQ present - 18 if the highest is a
    general with HQ and so on). If there is no HQ in the area then the
    CPC will be max 12/FM, 9/G, 3LT & 1MJ. So in the above example if 13
    units (12 for FM and 1 LT) attacked from one province with a HQ the
    display will read 13/24.
11. This means that if you attack with an FM+23 units from one
    direction, and an FM+25 units from another direction, the combat
    screen will show 48/48 (if a HQ is present/nearby province), but in
    fact one of your units will get a -75% penalty.
12. There is no limit to the amount of DEFENDERS in the stack as long as
    you have enough command capacity to cover all the units.
13. There is no extra benefit for NOT using the full CPC - i.e. placing
    9 units under a FM (9/12).

## [ Div list sequence ]{#Div_list_sequence .mw-headline}

1.  For attacks with a stack, which formation is on top (i.e. listed
    first thus is not eligible for the -75% if stack is overstacked)
    depends ONLY on which formation was \"on top\" of the stack when
    command to attack was issued.
2.  For a given formation, the sequence of units is the same as seen in
    the tooltip when the cursor is rested over the units. This is also
    the same as the sequence seen in the formation summary window by
    clicking on the formation (only viewable prior to combat).
3.  It is therefore perfectly possible for a unit in the middle of the
    div list to get a -75% penalty if:
    -   Its stack is over capacity.
    -   Its stack happens to be towards the top of the div list. Then
        the lowest units (i.e the ones in the lowest formationS) for
        that stack will get the penalty, but other divs for other stacks
        will be below it.

## [ ]{#Who_commands?} [ Who commands? ]{#Who_commands.3F .mw-headline}

1.  The highest ranking leader commands.
2.  Where there is more than one equal highest ranking leader, the
    leader shown in command is the one whose divs are randomly highest
    (of the equal ranking leaders) in the div list. See below for more
    detail on sequence.
3.  It doesn\'t make any difference which of equal ranking leaders is in
    command:
    -   Command Capacity Penalty (the -75% one) is set by rank only, and
        separately for each stack.
    -   Traits are passed by all leaders to units in their formation
        whose formations are smaller than their capacity, regardless of
        who commands the battle.
    -   Skills are passed by all leaders to units in their formation
        whose formations are smaller than their capacity, regardless of
        who commands the battle.

## [ Leader and division experience ]{#Leader_and_division_experience .mw-headline}

1.  Rank & skill also influence rate of accumulation of experience.
    -   Normally leaders add 1 exp point for every x hours elapsed.
    -   You get the 1st point after x/2 hours, the 2nd and thereafter
        after every x hours.
    -   FM\'s earn experience at the slowest rate, MJ at the fastest
        rate. However this is also dependant on the current number of
        skill points. A GEN with a skill of 2 will earn exp faster than
        a GEN with a skill of 4.
2.  Other Notes:
    -   EXP gain depends on the intensity of combat, leaders with the
        same characteristics can gain different amount of EXP in
        parallel combats.
    -   EXP is not affected by traits save the good Old Guard
    -   The promotion dates or the ideal rank in the leaderfiles also
        have no effect
    -   The only parameters effecting the rate of EXP growth are rank,
        skill and max skill level
    -   The rate of XP growth is in arbitraty units
        -   *Rate of EXP gain =
            (MaxSkill-Currentskill+1)\^2/max(Currentskill,1)\*RankFactor*
3.  Division experience:
    -   Each division also gains experience in battle. When reinforced,
        however, this experience drops. Division experience is
        calculated for each division in battle as 1/2 of the division\'s
        experience. The divisional stats page in the statistics folders
        shows each unit\'s experience.

## [ ]{#HQ_bonus_/_effects} [ HQ bonus / effects ]{#HQ_bonus_.2F_effects .mw-headline}

1.  HQ units act the same as FM\'s in HOI1. Leaders in the same province
    or in an adjacent one have a doubled Command Penalty Capacity (CPC)
    (as in par 1.5).
2.  All units that have a HQ unit next to them or in the stack can get a
    bigger ESE bonus.
3.  HQ do not have to be attached to formations to give bonuses. Their
    presence in the province or in an adjacent province is enough.
4.  HQ need to be commanded by an FM or a GEN to double the CPC of
    neighbouring units and to get other benefits such as ESE.
5.  It does not matter what leader (in terms of skills and traits) you
    put in charge of the HQ - there are no extra bonuses to any of the
    other formations from the traits or skills of the leader in charge
    of the HQ.
6.  Multiple HQ\'s do not cause any extra bonuses.
7.  HQ increase the CPC of the stack, but they do not increase the rank
    command capacity of the formation\'s leader. Example: You can give a
    Lt General 6 div with an HQ adjacent and you do not get the -75 over
    command capacity penalty; you lose, however, both the skills and
    traits of that leader when you do this. You would be better off to
    just assign 3 div to a Lt Gen and then have 3 separate single div
    formations. Note also that as soon as the HQ effect is not
    available, you would get the -75 over command penalty for 3 of the 6
    div under a Lt General.

## [ Skill bonuses ]{#Skill_bonuses .mw-headline}

1.  These may be granted by a leader to, and ONLY TO, the units in HIS
    formation.
2.  For skill purposes, the formation capacity of a leader is NOT
    doubled by the presence of HQs, in the same stack, in the same
    province, or adjacent.
3.  If the number of units in a formation is \<= capacity (undoubled) of
    the formation leader, then all the units in that formation receive
    the skill bonus.
4.  If the number of units in a formation \> capacity (undoubled) of the
    formation leader, NO units in that formation receive the skill
    bonus.
5.  If the number of divisions is in red, you lose the skills of the
    leader.
6.  Where granted, the bonus is 5% for each skill level
7.  It does not matter if the CPC of the STACK is exceeded as long as
    the CPC of the leader for his formation is not exceeded. In such a
    case the last units in the display box will get the -75% (however
    they will still get the skill and the trait bonus).

## [ Traits ]{#Traits .mw-headline}

1.  These are granted by each leader to, and ONLY TO, the units in HIS
    formation.
2.  If that leader has multiple traits, then all these traits are
    applied.
3.  All the units in the formation receive the leader trait unless the
    formation goes over the leaders UNDOUBLED CPC. If the number of
    divisions is in red, you lose the leader\'s traits.
4.  Trait bonuses (See [Leader
    Traits](/wiki/Leader_Traits "Leader Traits") for complete list):
    -   Defensive Doctrine
        -   Eff + 10% for defender.
    -   Offensive Doctrine
        -   Eff +10% for attacker.
    -   Panzer Leader
        -   Eff +10% for Armour/Mech,as both attacker and defender.
    -   Logistic Wizard
        -   Oil and supplies consumption are each reduced by 25% when
            stationary. When moving, however, oil consumption is not
            reduced by this trait though supply consumption stays
            reduced. Previously the Logistics Wizards trait worked even
            when that leader was over his command capacity, but this
            exploit was removed in later patches. This trait also saves
            on Transport Capacity (fuel and supplies for your units).
    -   Commando
        -   Eff +10% for Mountain, Marine and Paratroopers.
        -   Eff -5% for all other divisions when led by a Commando
            leader.
        -   When a non Commando leader has mountain, marine, or
            paratroopers in his formation, those div do not get a
            penalty.
    -   Engineer
        -   Removes all river crossing combat Eff effects (only).
            Changed in version 1.2 to - Engineer leader trait now gives
            20% when crossing a river instead of 30%. So it makes sense
            to additionally equip your units with an engineer brigade to
            get an additionally 20% bonus.
    -   Trickster
        -   Increases the chance of surprise. If the enemy unit is
            suprised it gets a -20% efficiency modifier. This is seldom
            or never seen in battle and is essentially replaced by the
            frequency of getting combat events. Trickster trait
            increases the chance of getting a combat event.
    -   Fortress Buster
        -   Reduces the efficiency of forts by 25%. Each full level of
            fort (land or sea)gives the attacker a - 9 % efficiency
            modifier.
    -   Old Guard reduces experience gain down to about 1/3 of the
        normal experience gain.
    -   Winter Specialist reduces attrition in winter conditions. Pause
        over the skull icon on a formation and review the tooltip which
        gives further details.

## [ Examples of how efficiency is calculated for traits and skill ]{#Examples_of_how_efficiency_is_calculated_for_traits_and_skill .mw-headline}

1.  If we have:
    -   stack 1, attacking from Province 1 in Direction 1
        -   FM, skill 3, with Offensive Doctrine and Panzer Leader, + 23
            divs
        -   LG, skill 2, with Offensive Doctrine, + 2 divs
    -   stack 2, attacking fom province 2 in Direction 2
        -   G, skill 4, no Traits, + 5 divs
        -   MG, skill 1, no Traits, + 10 divs
    -   Then there are 40 divs. No HQ penalties apply, as there is an HQ
        present.
    -   stack 1:
        -   Command Penalty:
            -   Capacity set by FM at 24 for this stack (with HQ).
            -   There are 25 units so 1 unit receives a -75% penalty.
            -   This will randomly be either the lowest of the FM divs,
                or the lowest of the LG divs.
        -   Skill:
            -   No FM divs get a skill bonus as he has 23 divs and an
                undoubled capacity of 12.
            -   Both the LG divs get a skill bonus 2x5 = 10%, because an
                LG has a capacity of 3.
        -   Traits:
            -   None of the 23 of FM\'s divs get applicable bonuses for
                both his traits.
                -   +10% for Offensive Doctrine.
                -   +10% for any armoured/mech divs in his 23, for
                    Panzer Leader.
            -   All 2 of LG\'s divs get bonuses for his one Trait.
    -   stack 2:
        -   Command Penalty:
            -   Capacity set by G at 18 (9 for a General, doubled by a
                HQ in the same province).
            -   There are 15 divs in the stack, so no divs get the -75%
                penalty.
        -   Skill:
            -   All 5 of G\'s divs get a skill bonus of 4x5 = 20%, as
                his capacity is 9.
            -   None of MG\'s divs get a skill bonus, as his capacity is
                1.
        -   Traits:
            -   None apply
2.  To calculate the efficiency we always start from the base of 100. We
    then multiply by all the modifiers in the following way:
    [![Effexample.jpg](/images/f/f6/Effexample.jpg){file-height="455"
    file-width="346" url="/images/f/f6/Effexample.jpg" decoding="async"
    height="455" loading="lazy"
    width="346"}](/wiki/File:Effexample.jpg){.image}
3.  In the above example we have
    -   100% base attack efficiency:
        -   1.1 - offensive leader
        -   1.0005 - exp
        -   1.04 - ESE
        -   0.9 - forest
        -   0.75 - frozen
        -   1.1 - leadership
    -   = 84.9844 %
    -   100% base defence efficiency
        -   1.1 - offensive leader
        -   1.0005 - exp
        -   1.04 - ESE
        -   0.9 - forest
        -   1.1 - leadership
    -   = 113.82 %
    -   So it seems with defence efficiency some modifiers do not have
        any effect. These are:
        -   frozen
        -   night

## [ Other modifiers ]{#Other_modifiers .mw-headline}

1.  [Combined Arms](/wiki/Combined_Arms "Combined Arms")
    -   when units number \<= CPC(not double),
    -   To get the Combined Arms bonus, the mix of hard vs soft
        divisions has to be within a range of 1/3 to 2/3. Typically that
        would be 1:2 or 2:1
    -   The hard divisions are armor, light armor, and mech. Soft
        divisions are everything else including HQ. Brigades are not a
        factor in the ratio.
        -   attacker: Eff+5%
        -   defender: Eff+15%
        -   The CA bonus is set in the \\db\\misc.txt file and can be
            modified. The designation of which div are hard and which
            are soft, however, is set up in the executable file and is
            not modifiable.
        -   To qualify for the combined arms bonus, it is not sufficient
            for hard and soft divisions to just be in the same province.
            The divisions must be in the same formation under one
            leader. Mech and armor in the same formation do not get the
            combined arms bonus since both are hard targets. Motor and
            armor, or infantry and armor, would qualify for the bonus.
        -   [This
            thread](https://forum.paradoxplaza.com/forum/index.php?threads/in-search-of-a-definitive-treatise-on-the-application-of-the-combined-arms-bonus.196932/){.external
            .text rel="nofollow"} discusses some testing done about
            this.
2.  Enveloped
    -   Eff-10% when simultaneously attacked from three directions.
        Furthermore, it is
    -   Eff-10% for every extra direction added.
3.  No Retreat Possible
    -   Eff-10% when attacked in a province that is surrounded. Only
        applicable to the defender.
4.  Lack of Supply
    -   Eff-20%, when lack of Supply.
        -   Fuel is not related to this Eff.
5.  River crossing, weather and terrain modifiers.
    -   These can be found on the 6th page of the statistics screen.
        Engineering brigades reduce the river crossing penalty by 20 so
        that for inf this becomes (-50+20) = -30. For pz motor and mech
        it\'s -66 without an eng bde and -46 with an eng bde. Marines
        improve their river crossing when each new model is researched.
        The best that river crossing can be is no effect but it is
        usually a large negative number.
6.  Landing troops (shore)
    -   -10% for each unit above the 3rd
7.  Multiple combat modifier (flanked - attacked when attacking)
    -   -50% Multiple Combat
8.  Paradropping
    -   Eff-15% if the formation is paradropping to enemy province.
9.  Dissent
    -   -dissent \*/2 %
10. Experience
    -   \+ experience of unit \* /2 %

## [ Appendix ]{#Appendix .mw-headline}

When trying to understand the Combat Eff you see, there are a variety of
factors you need to consider in addition to leaders:

1.  Weather and Terrain effects are summarized in your statistics folder
    in the modifiers section.
2.  Research can improve some of these combat modifiers. Ex.: each new
    mountain division model increases several combat and speed modifiers
    in some terrains. Marine division research increases amphibious
    assault effectiveness for all types of land units.
3.  Ministers
    -   Several minister types affect Eff.
    -   In general effects are shown on the minister screen.
    -   However \'Armoured Spearhead Doctrine\' (which is a Chief of
        Army type):
    -   Gives +10% eff to armour/mech (whether as attacker or defender)
    -   The screen text does not mention this.
4.  Difficulty
    -   Human player eff is adjusted:
        -   Very easy +10
        -   Easy +5
        -   Normal 0
        -   Hard -5
        -   Very Hard -10
        -   The enemy AI gets penalties or bonus depending upon
            difficulty levels. On very hard, the AI gets +20 difficulty
            combat modifier.
5.  [Dug-in](/wiki/Digging-in "Digging-in")
    -   Stationary troops dig in automatically when their country is at
        war. They do not dig in when at peace.
    -   Level increases by 1 per day, to a max of 20.
    -   Defending troops will NOT dig in during a battle.
    -   Each level gives eff +1%

## [ Note ]{#Note .mw-headline}

-   Combat begins after the first hr. You can stop combat at any time.
    After the 1st hr of combat breaking off an attack the formation will
    not be able to engage / move for the next 24hrs.
-   If a unit is able to defend itself it has a 80% chance to avoid each
    hit. If no defences are left it has a 60% chance to avoid each hit.
:::
