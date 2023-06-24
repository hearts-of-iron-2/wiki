---
title: "Upgrading_calculations"
---

[Template:Anthology](/index.php?title=Template:Anthology&action=edit&redlink=1 "Template:Anthology (page does not exist)")

## Contents

-   [ 1 The base cost for upgrades is 1/2 and the base time is 1/4
    ](#The_base_cost_for_upgrades_is_1.2F2_and_the_base_time_is_1.2F4)
-   [ 2 **EXAMPLE** ](#EXAMPLE)
-   [ 3 Table comparing displayed with actual upgrade cost %
    ](#Table_comparing_displayed_with_actual_upgrade_cost_.25)
-   [ 4 Upgrading Twice Obsolete Models
    ](#Upgrading_Twice_Obsolete_Models)
-   [ 5 Upgrading an old serial run vs starting a new run
    ](#Upgrading_an_old_serial_run_vs_starting_a_new_run)
    -   [ 5.1 General rules of thumb contrasting keeping an old serial
        run going vs starting a new serial run with a new model:
        ](#General_rules_of_thumb_contrasting_keeping_an_old_serial_run_going_vs_starting_a_new_serial_run_with_a_new_model:)
    -   [ 5.2 Light armor exception ](#Light_armor_exception)

##    The base cost for upgrades is 1/2 and the base time is 1/4 

There are two parameters for upgrading: one in \db\misc.txt and the
other for each unit or bde in your \db\units files which is almost
uniformly the same unless modified. This typically looks like:

    upgrade_time_factor = 0.5
    upgrade_cost_factor = 1.0

From misc.txt:

    # Upgrade cost 
    0.5
    # Upgrade time
    0.5

Then calculate the upgrade percentages from the standing/drafted army
slider and the free_trade/central_planning slider. These sliders
determine [Gearing Bonus](/Gearing_Bonus "Gearing Bonus") , in addition
to upgrade time. Use decimal format rather than percentages (85% means
.85)

    Multiply the .5 * (1+upgrade) for cost
    Multiply the .25 * (1+upgrade) for time

So if your upgrade total was .8,

    cost would be .5 * 1.8 * IC cost for the new model
    time would be .25 * 1.8 * time needed for the new model

Upgrades can be done for land and air units and most brigades. Naval
units can not be upgraded.

##  **EXAMPLE** 

Soviet Union upgrades 1936 mountain div to 1939 mountain div. SU has 90%
upgrade from army slider and 25% upgrade from the economy slider netting
115%. New 1939 mountain div costs 6.4 IC for 96 days (upgrades are based
upon your current model and all minister, slider, and tech effects apply
to the upgrade cost and time).

    Cost = 6.4 * .5 * (1+1.15) = 6.88
    Time = 96 * .25 * (1+1.15) = 51.6 days

***Cost comparisons*** : Total cost for new units and for upgrading is
IC cost per day \* total numbers of days. Ignoring the rounding factor
for days (51.6 would mean 52 days), the comparative costs are:

    New model = 6.4 * 96 = 614.4 IC days
    Upgrading = 6.88 * 51.6 = 355.008 IC costs
    Comparative upgrade percentage = 355.008/614.4 = 57.78%

Basically the percentages you see on the diplomatic screen slider
section are higher than the actual calculated upgrade cost. Upgrades are
not as expensive as they seem until you do the math. Note that the army
slider upgrade percentages are cut in half in Doomsday which ranges from
5% to 50% while in HOI2 the upgrade percentages range from 10% to 100%.

##    Table comparing displayed with actual upgrade cost % 

Here is a table of the actual upgrading costs for the displayed
upgrading percentages:

    display % cost
    125 63.28%
    115 57.78%
    105 52.53%
    95  47.53%
    85  42.78%
    80  40.50%
    75  38.28%
    70  36.13%
    65  34.03%
    60  32.00%
    55  30.03%
    50  28.13%
    45  26.28%
    40  24.50%
    35  22.78%
    30  21.13%

##  Upgrading Twice Obsolete Models 

In version 1.3, upgrading twice obsolete models is very fast due to a
second 1/4 time reduction. By twice obsolete, that means first finishing
the research on model 3 and then upgrading model 1 to model 2. It takes
only around 14 days to upgrade Int-1 to Int-2 if you already have Basic
Interceptors (Int-3) researched. It takes only around 18 days to upgrade
Tac-1 to Tac-2 if you have Basic Tactical Bombers (Tac-3) already
researched.

*More details can be found in [this
thread](http://forum.paradoxplaza.com/forum/showthread.php?t=228288) .*

##  Upgrading an old serial run vs starting a new run 

The math for this is complicated. Slider positions influence this
somewhat, but gearing is more important than your slider positions.
Generally it can be cheaper if you keep an old run going if you do not
build much of a new run. *More details can be found in [this
thread](http://forum.paradoxplaza.com/forum/showthread.php?t=299726) and
[or a thread which shows the
math](http://forum.paradoxplaza.com/forum/showthread.php?p=9651733#post9651733)
."*

###  General rules of thumb contrasting keeping an old serial run going vs starting a new serial run with a new model: 

1\) By the 5th or 6th new model, the new model is cheaper than keeping
the old run going with it's production + upgrade costs. This is
primarily due to gearing costs equalizing.

2\) If you consider the average cost, however, it takes until the 9th or
10th production of the new model to be better on average than continuing
the old model.

3\) If the production costs of the old model are cheaper than the new
model \[ex. armor or bombers\], it is even more advantageous to continue
the old model.

4\) Slider positions do NOT influence this a lot compared with gearing.
Gearing is more important, which is why continuing an old model that has
lots of gearing is usually preferable.

###  Light armor exception 

There is one exception to the general rules on upgrading: light armor
divisions. Light armor crosses model category since light armor upgrades
to armor. Due to this crossover, light armor upgrades have 2 rather than
1 full time and cost upgrades: first to the improved light armor
division model and then another full time and cost upgrade to armor
\[basic medium armor III\]. If you want to build up armor with a long
serial run, do this with armor-II, not with light armor such as the
tankette.
[Template:Anthology](/index.php?title=Template:Anthology&action=edit&redlink=1 "Template:Anthology (page does not exist)")

## Contents

-   [ 1 The base cost for upgrades is 1/2 and the base time is 1/4
    ](#The_base_cost_for_upgrades_is_1.2F2_and_the_base_time_is_1.2F4)
-   [ 2 **EXAMPLE** ](#EXAMPLE)
-   [ 3 Table comparing displayed with actual upgrade cost %
    ](#Table_comparing_displayed_with_actual_upgrade_cost_.25)
-   [ 4 Upgrading Twice Obsolete Models
    ](#Upgrading_Twice_Obsolete_Models)
-   [ 5 Upgrading an old serial run vs starting a new run
    ](#Upgrading_an_old_serial_run_vs_starting_a_new_run)
    -   [ 5.1 General rules of thumb contrasting keeping an old serial
        run going vs starting a new serial run with a new model:
        ](#General_rules_of_thumb_contrasting_keeping_an_old_serial_run_going_vs_starting_a_new_serial_run_with_a_new_model:)
    -   [ 5.2 Light armor exception ](#Light_armor_exception)

##    The base cost for upgrades is 1/2 and the base time is 1/4 

There are two parameters for upgrading: one in \db\misc.txt and the
other for each unit or bde in your \db\units files which is almost
uniformly the same unless modified. This typically looks like:

    upgrade_time_factor = 0.5
    upgrade_cost_factor = 1.0

From misc.txt:

    # Upgrade cost 
    0.5
    # Upgrade time
    0.5

Then calculate the upgrade percentages from the standing/drafted army
slider and the free_trade/central_planning slider. These sliders
determine [Gearing Bonus](/Gearing_Bonus "Gearing Bonus") , in addition
to upgrade time. Use decimal format rather than percentages (85% means
.85)

    Multiply the .5 * (1+upgrade) for cost
    Multiply the .25 * (1+upgrade) for time

So if your upgrade total was .8,

    cost would be .5 * 1.8 * IC cost for the new model
    time would be .25 * 1.8 * time needed for the new model

Upgrades can be done for land and air units and most brigades. Naval
units can not be upgraded.

##  **EXAMPLE** 

Soviet Union upgrades 1936 mountain div to 1939 mountain div. SU has 90%
upgrade from army slider and 25% upgrade from the economy slider netting
115%. New 1939 mountain div costs 6.4 IC for 96 days (upgrades are based
upon your current model and all minister, slider, and tech effects apply
to the upgrade cost and time).

    Cost = 6.4 * .5 * (1+1.15) = 6.88
    Time = 96 * .25 * (1+1.15) = 51.6 days

***Cost comparisons*** : Total cost for new units and for upgrading is
IC cost per day \* total numbers of days. Ignoring the rounding factor
for days (51.6 would mean 52 days), the comparative costs are:

    New model = 6.4 * 96 = 614.4 IC days
    Upgrading = 6.88 * 51.6 = 355.008 IC costs
    Comparative upgrade percentage = 355.008/614.4 = 57.78%

Basically the percentages you see on the diplomatic screen slider
section are higher than the actual calculated upgrade cost. Upgrades are
not as expensive as they seem until you do the math. Note that the army
slider upgrade percentages are cut in half in Doomsday which ranges from
5% to 50% while in HOI2 the upgrade percentages range from 10% to 100%.

##    Table comparing displayed with actual upgrade cost % 

Here is a table of the actual upgrading costs for the displayed
upgrading percentages:

    display % cost
    125 63.28%
    115 57.78%
    105 52.53%
    95  47.53%
    85  42.78%
    80  40.50%
    75  38.28%
    70  36.13%
    65  34.03%
    60  32.00%
    55  30.03%
    50  28.13%
    45  26.28%
    40  24.50%
    35  22.78%
    30  21.13%

##  Upgrading Twice Obsolete Models 

In version 1.3, upgrading twice obsolete models is very fast due to a
second 1/4 time reduction. By twice obsolete, that means first finishing
the research on model 3 and then upgrading model 1 to model 2. It takes
only around 14 days to upgrade Int-1 to Int-2 if you already have Basic
Interceptors (Int-3) researched. It takes only around 18 days to upgrade
Tac-1 to Tac-2 if you have Basic Tactical Bombers (Tac-3) already
researched.

*More details can be found in [this
thread](http://forum.paradoxplaza.com/forum/showthread.php?t=228288) .*

##  Upgrading an old serial run vs starting a new run 

The math for this is complicated. Slider positions influence this
somewhat, but gearing is more important than your slider positions.
Generally it can be cheaper if you keep an old run going if you do not
build much of a new run. *More details can be found in [this
thread](http://forum.paradoxplaza.com/forum/showthread.php?t=299726) and
[or a thread which shows the
math](http://forum.paradoxplaza.com/forum/showthread.php?p=9651733#post9651733)
."*

###  General rules of thumb contrasting keeping an old serial run going vs starting a new serial run with a new model: 

1\) By the 5th or 6th new model, the new model is cheaper than keeping
the old run going with it's production + upgrade costs. This is
primarily due to gearing costs equalizing.

2\) If you consider the average cost, however, it takes until the 9th or
10th production of the new model to be better on average than continuing
the old model.

3\) If the production costs of the old model are cheaper than the new
model \[ex. armor or bombers\], it is even more advantageous to continue
the old model.

4\) Slider positions do NOT influence this a lot compared with gearing.
Gearing is more important, which is why continuing an old model that has
lots of gearing is usually preferable.

###  Light armor exception 

There is one exception to the general rules on upgrading: light armor
divisions. Light armor crosses model category since light armor upgrades
to armor. Due to this crossover, light armor upgrades have 2 rather than
1 full time and cost upgrades: first to the improved light armor
division model and then another full time and cost upgrade to armor
\[basic medium armor III\]. If you want to build up armor with a long
serial run, do this with armor-II, not with light armor such as the
tankette.
