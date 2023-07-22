---
title: Reinforcements,_Reorganization_and_Bases
---
::: mw-parser-output
::: {#toc .toc aria-labelledby="mw-toc-heading" role="navigation"}
::: {.toctitle dir="ltr" lang="en"}
## Contents {#mw-toc-heading}

[ ]{.toctogglespan}
:::

-   [[ 1 ]{.tocnumber} [ Reinforcements ]{.toctext}](#Reinforcements)
    -   [[ 1.1 ]{.tocnumber} [ When do units reinforce?
        ]{.toctext}](#When_do_units_reinforce.3F)
    -   [[ 1.2 ]{.tocnumber} [ How fast do units reinforce?
        ]{.toctext}](#How_fast_do_units_reinforce.3F)
    -   [[ 1.3 ]{.tocnumber} [ How much does reinforcement cost?
        ]{.toctext}](#How_much_does_reinforcement_cost.3F)
-   [[ 2 ]{.tocnumber} [ Reorganization ]{.toctext}](#Reorganization)
    -   [[ 2.1 ]{.tocnumber} [ Land units ]{.toctext}](#Land_units)
    -   [[ 2.2 ]{.tocnumber} [ Naval units ]{.toctext}](#Naval_units)
    -   [[ 2.3 ]{.tocnumber} [ Air units ]{.toctext}](#Air_units)
    -   [[ 2.4 ]{.tocnumber} [ The School of Psychology Chief of Staff
        ]{.toctext}](#The_School_of_Psychology_Chief_of_Staff)
-   [[ 3 ]{.tocnumber} [ The influence of Bases
    ]{.toctext}](#The_influence_of_Bases)
    -   [[ 3.1 ]{.tocnumber} [ Naval base ]{.toctext}](#Naval_base)
    -   [[ 3.2 ]{.tocnumber} [ Air base ]{.toctext}](#Air_base)
-   [[ 4 ]{.tocnumber} [ Example Tables ]{.toctext}](#Example_Tables)
    -   [[ 4.1 ]{.tocnumber} [ Basic reorganization
        ]{.toctext}](#Basic_reorganization)
    -   [[ 4.2 ]{.tocnumber} [ Land units ]{.toctext}](#Land_units_2)
        -   [[ 4.2.1 ]{.tocnumber} [ Effect of infrastructure
            ]{.toctext}](#Effect_of_infrastructure)
    -   [[ 4.3 ]{.tocnumber} [ Air units ]{.toctext}](#Air_units_2)
        -   [[ 4.3.1 ]{.tocnumber} [ Effect of infrastructure
            ]{.toctext}](#Effect_of_infrastructure_2)
    -   [[ 4.4 ]{.tocnumber} [ Naval units ]{.toctext}](#Naval_units_2)
:::

## [ Reinforcements ]{#Reinforcements .mw-headline}

### [ ]{#When_do_units_reinforce?} [ When do units reinforce? ]{#When_do_units_reinforce.3F .mw-headline}

Land units reinforce at midnight during movement (including into enemy
territory), strategic redeployment, or standing still. They do not
reinforce, if they\'re out of supply.

Air units reinforce if they\'re in their base at midnight.

Naval units reinforce if they\'re in a friendly naval base. They do not
reinforce in small ports.

However, the value of the reinforcement slider is only updated once a
day, so units which stop during the day will not have a budget allocated
and therefore overall repair speed will be slower.

### [ ]{#How_fast_do_units_reinforce?} [ How fast do units reinforce? ]{#How_fast_do_units_reinforce.3F .mw-headline}

Contrary to common belief, reinforcement speed is pretty constant with
the only factors being build time, the tech dependant repair modifier
and the reinforcement time parameter in db/misc.txt.

Repair speed is **not** influenced by terrain, infrastructure, ESE,
airbase or naval base level. Modifiers on build time like the domestic
sliders, ministers and technologies will also decrease repair time by
the same percentage.

Repair time for a unit is
damage_percentage\*build_time\*(1/(1+repair_modifier))\*reinforcement_time

### [ ]{#How_much_does_reinforcement_cost?} [ How much does reinforcement cost? ]{#How_much_does_reinforcement_cost.3F .mw-headline}

Daily IC cost is build_cost \* reinforce_cost \* damage_percentage

This makes reinforcing lightly damaged units much cheaper than heavily
damageded units, and is also the reason why repair costs will get
cheaper every day.

## [ Reorganization ]{#Reorganization .mw-headline}

Disclaimer: To keep the formulas as simple as possible, organisation
will be a value between 0 and 100. Morale, Infrastructure and ESE will
be a value between 0 and 1, with 1 = 100%.

As a general rule, weather, terrain and unit type (apart from their Base
Morale value) have no influence on reorganization.

### [ Land units ]{#Land_units .mw-headline}

Land units reorganize whenever they don\'t move or fight. Daily
organization increase is the sum of two parts: The base value influenced
by morale. Its value is 2.4\*(Morale-0.3)

The second part is influenced by morale, current organization,
infrastructure and ESE, so infrastructure is doubled in importance.

The exact value is 8.64\*(1+(Morale-0.3))\*ESE.

If infrastructure is below 60, this will be multiplied by
Infrastructure/0.6.

A final multiplier depends on the ratio between current organization and
max organization. The exact multiplier is as follows:

    percentage of max org | multiplier 0-25% : 1 25%-50% : 2/3 50%-75% : 1/3 75%-100% : 1/6 

While moving, land units lose 0.48 org/day.

### [ Naval units ]{#Naval_units .mw-headline}

Naval units always reorganize unless in battle. In contrast to land
units, their reorganization speed is constant, no matter what the
current organization is.

Their daily reorganization value too is composed of two parts.

The base value influenced by morale. Its value is 2.4\*(Morale-0.3)

The second part only applies when in port. That value is 1,2 +
1,2\*(Morale-0.3)\*ESE + 0.48\*Naval_Base_Level

### [ Air units ]{#Air_units .mw-headline}

Air units always reorganize unless in battle. Again like naval units,
their reorganization speed is constant, and composed of two parts.

A base value of 0.024\*(morale-30) which applies on the ground and while
flying.

The second part only occurs when landed. Its value is
2.4\*(1+(Morale-0.3)\*ESE\*Infra. This value is then multiplied with the
overcrowding factor.

The overcrowding factor is the ratio between airbase level and planes
based there. This also counts planes which are currently in the air and
planes with full organization. (So a level 3 base with 8 planes based
will have an overcrowding factor of 3/8, even if all but one plane have
full org and are in the air)

The overcrowding factor can never get bigger than 1 so having a larger
airbase than is needed doesn\'t have any effect.

### [ The School of Psychology Chief of Staff ]{#The_School_of_Psychology_Chief_of_Staff .mw-headline}

This minister will apply his +20% reorg bonus to whatever reorganization
value is calculated with the formulas above.

## [ The influence of Bases ]{#The_influence_of_Bases .mw-headline}

### [ Naval base ]{#Naval_base .mw-headline}

-   A Naval base provides a 0.48 org per level (daily) for any ship
    located at the base. It doesn\'t depend on the number of ships
    currently based or located at the base. It also doesn\'t depend on
    the province the base is located in or on your current TC.
-   A Naval base can only provide repairs to ships in dock based on the
    naval base level. Thus, a level five base can provide repairs for 5
    ships each day, while the sixth ship will have to wait.
-   A Naval base provides a way to expand the range of your navy.

### [ Air base ]{#Air_base .mw-headline}

Like with Naval bases, air bases help with reorganization, repairs, and
range. However, their effect is a bit more complicated. Air base Level
is a part (as part of the overcrowding factor) in the second part of the
air reorganization formula. However, since ESE and Infrastructure are
also factors in that formula, the location of an airbase is also
important. One particular effect of this formula is that an air base in
a 0 infrastructure province doesn\'t help reorganize at all. This also
means that air bases are susceptible to logistical strikes and even
strategic bombardment (via IC/TC reduction).

The optimal size of an air base is equal to the number of planes to be
based there. Less is bad, more is a waste. So in keeping with usual
stack sizes, recommended sizes would be 4, 8 or 10.

## [ Example Tables ]{#Example_Tables .mw-headline}

### [ Basic reorganization ]{#Basic_reorganization .mw-headline}

  --------------------------- -------------
  Base reorganization value   
  Morale                      Daily Reorg
  30%                         0
  40%                         0.24
  60%                         0.72
  80%                         1.2
  100%                        1.68
  --------------------------- -------------

This is the basic reorganization value that all units get, even under
the worst possible circumstances. If a unit for any reason has a morale
value of below 30, this will be negative.

### [ Land units ]{#Land_units_2 .mw-headline}

#### [ Effect of infrastructure ]{#Effect_of_infrastructure .mw-headline}

Land units are very much affected by the infrastructure of the province
they\'re in. Once infrastructure falls under 60, reorganization drops
quickly. On the other hand, as long as infrastructure stays above 60 the
differences are rather small.

  -------------------------------------------------------- -------------------- -------------------- ---------------------
  Reorganization for different Morale values and 100% TC                                             
  Infrastructure                                           Reorg (Morale 30%)   Reorg (Morale 60%)   Reorg (Morale 100%)
  0%                                                       0                    0.72                 1.68
  20%                                                      1.73                 2.97                 4.62
  40%                                                      4.03                 5.96                 8.53
  60%                                                      6.91                 9.71                 13.43
  80%                                                      7.78                 10.83                14.90
  100%                                                     8.64                 11.95                16.37
  -------------------------------------------------------- -------------------- -------------------- ---------------------

### [ Air units ]{#Air_units_2 .mw-headline}

#### [ Effect of infrastructure ]{#Effect_of_infrastructure_2 .mw-headline}

  ------------------------------------------------------------------------------- -------------------- -------------------- ---------------------
  Reorganization for different Morale values with adequate air base and 100% TC                                             
  Infrastructure                                                                  Reorg (Morale 30%)   Reorg (Morale 60%)   Reorg (Morale 100%)
  0%                                                                              0                    0.72                 1.68
  20%                                                                             0.29                 1.09                 2.17
  40%                                                                             0.67                 1.59                 2.82
  60%                                                                             1.15                 2.22                 3.64
  80%                                                                             1.73                 2.97                 4.62
  100%                                                                            2.4                  3.84                 5.76
  ------------------------------------------------------------------------------- -------------------- -------------------- ---------------------

### [ Naval units ]{#Naval_units_2 .mw-headline}
:::
