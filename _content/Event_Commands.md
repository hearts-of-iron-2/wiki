---
title: "Event_Commands"
---

[TABLE]

  

## Contents

-   [ 1 Triggers ](#Triggers)
    -   [ 1.1 Operators ](#Operators)
    -   [ 1.2 Basic Event Parameters ](#Basic_Event_Parameters)
    -   [ 1.3 Trigger Conditions ](#Trigger_Conditions)
        -   [ 1.3.1 Generic ](#Generic)
        -   [ 1.3.2 Tags related to people ](#Tags_related_to_people)
        -   [ 1.3.3 Tags related to governments
            ](#Tags_related_to_governments)
        -   [ 1.3.4 Diplomatic condition checks
            ](#Diplomatic_condition_checks)
        -   [ 1.3.5 Technology condition checks
            ](#Technology_condition_checks)
        -   [ 1.3.6 Condition flags ](#Condition_flags)
        -   [ 1.3.7 Province checks ](#Province_checks)
        -   [ 1.3.8 Resource & Game values ](#Resource_.26_Game_values)
        -   [ 1.3.9 Victory Points ](#Victory_Points)
        -   [ 1.3.10 Military unit condition checks
            ](#Military_unit_condition_checks)
-   [ 2 Commands ](#Commands)
    -   [ 2.1 Diplomatic commands ](#Diplomatic_commands)
    -   [ 2.2 Domestic ](#Domestic)
        -   [ 2.2.1 Resources ](#Resources)
    -   [ 2.3 Tech ](#Tech)
    -   [ 2.4 Event-connected ](#Event-connected)
    -   [ 2.5 Victory commands ](#Victory_commands)
    -   [ 2.6 Warfare ](#Warfare)
    -   [ 2.7 AI event commands (no effect for human controlled nations)
        ](#AI_event_commands_.28no_effect_for_human_controlled_nations.29)

##  Triggers 

###  Operators 

-   **AND** - this operator tests whether *all* of the trigger
    conditions within { }s after it are satisfied. This is the default
    operator used by the *trigger* statement, and is therefore not
    necessary to include.
-   **OR** - this operator tests whether *one or more* of the trigger
    conditions within { }s after it are satisfied.
-   **NOT** - this operator *inverts* the evaluation of the trigger
    conditions within { }s after it.
    -   *NOT* with multiple trigger conditions acts as **NOR** (NOT OR),
        there is no need to place multiple conditions inside a separate
        OR trigger. A single of the multiple trigger conditions met
        would result in a *False* , preventing an event from firing.
    -   *NOT* with multiple trigger conditions inside an additional
        *AND* trigger acts as **NAND** (NOT AND). All of the multiple
        trigger conditions have to be met to prevent an event from
        firing.

###  Basic Event Parameters 

-   **id = \[event id\]** - this event has a unique identification
    number \[event id\], which is used by the game and which may be
    referred to by other events.
-   **country = \[country tag\]** - this event applies to the country
    specified. Unless specified below, all events must have country
    tags.
-   **name = X / "X"** - if X is a quoted string ("like this"), the text
    between the quotes will be used as the event title. Otherwise, the
    game will search in the file "/config/\*.csv" for a match, scan for
    the string corresponding to the correct language, and use this
    string as the event title. This method allows translations to
    multiple languages and is recommended for finished work. Be careful
    not to make this string too long.
-   **desc = X / "X"** - same rules, except that the smaller text below
    the title is affected. There are various text formatting commands
    that you may use; see the file "/db/events/event commands.txt" and
    usage examples in "/config/event_text.csv".
-   **date = { day = 0 month = january year = 1937 }** - this event
    cannot fire before January 1st (days start at zero), 1937.
-   **deathdate = { day = 29 month = december year = 1960 }** - This
    event cannot fire after December 30th, 1960.
-   **offset = X** - the trigger conditions will be tested every X days.
    More precisely, the game keeps a time passed clock (which appears to
    be randomly reset on a reload): if the time "passed" value divided
    by "offset" equals one, the trigger conditions will be tested.
-   **persistent = yes \[/no\]** - this event is not slept after firing.
    If the trigger conditions continue to be satisfied it will fire
    repeatedly.
-   **random = yes \[/no\]** - this event uses a hard-coded randomized
    event system. It applies to all nations - you need not use a
    "country = X" line. As of HOI2 1.3b / DD 1.2, this condition is not
    recommended for use because it is reset every time the game is
    reloaded (you cannot control true frequency) and also because there
    is no information on how it works precisely or how frequently events
    using it are supposed to happen in theory.
-   **invention = yes \[/no\]** - this event uses a different hard-coded
    randomized event system, which should (probably) not be used for
    anything other than inventions. It applies to all nations: you need
    not use a "country = X" line. Frequency is controlled by the "mean
    number of "invention" events occuring per year" line at the end of
    "/db/misc.txt". Frequency is also (probably)
    save-and-reload-dependent.
-   **picture = "\[picture name without .bmp\]"** - include the
    specified picture from the "/gfx/event_pics/" directory.
-   **style = 0** - this is used by other paradox games based on the eu2
    system, but apparently makes no difference for HoI2. It is still
    included in most events for some reason.

###  Trigger Conditions 

####  Generic 

-   **event = X** - tests whether the event with the id X has fired.
-   **random = X** - has an X percentage chance of being satisfied each
    time it is tested.
-   **exists = \[country tag\]** - tests if the country tag given
    currently exists.
-   **intel_diff = X** - tests the relative difference between the
    source country's intelligence value and the target country's
    intelligence value. This is the value that is adjusted when the
    Encryption and Decryption Technologies are researched. If the actual
    intelligence difference is greater than the value given in X, the
    trigger evaluates to true.
-   **ai = \[yes/no/country tag\]** - evaluates if either the country
    running the trigger, or the country given in \[country tag\] is
    controlled by the AI.
-   **difficulty = X** - tests if the difficulty level is set at level X
    or harder. Possible values are from 0 to 4, where 0 is "very easy".

####  Tags related to people 

-   **leader = X** - tests if the leader given as X exists.
-   **minister = \[minister id\]** - tests whether the minister in
    \[minister id\] is alive.
-   **headofstate = \[minister id\]** - tests whether the country's
    current Head of State is the person in \[minister id\].
-   **headofgovernment = \[minister id\]** - tests whether the country's
    current Head of Government is the person in \[minister id\].
-   **foreignminister = \[minister id\]** - tests whether the country's
    current Foreign Minister is the person in \[minister id\].
-   **armamentminister = \[minister id\]** - tests whether the country's
    current Armament Minister is the person in \[minister id\].
-   **ministerofsecurity = \[minister id\]** - tests whether the
    country's current Minister of Security is the person in \[minister
    id\].
-   **ministerofintelligence = \[minister id\]** - tests whether the
    country's current Minister of Intelligence is the person in
    \[minister id\].
-   **chiefofstaff = \[minister id\]** - tests whether the country's
    current Chief of Staff is the person in \[minister id\].
-   **chiefofarmy = \[minister id\]** - tests whether the country's
    current Chief of Army is the person in \[minister id\].
-   **chiefofnavy = \[minister id\]** - tests whether the country's
    current Chief of Navy is the person in \[minister id\].
-   **chiefofair = \[minister id\]** - tests whether the country's
    current Chief of Air is the person in \[minister id\].

####  Tags related to governments 

-   **government = \[government\]** \# tests if the country running the
    event has the type of government given.

Valid government types are "communist", "fascist" or "democratic".

-   **ideology = \[ideology\]** \# tests if the country running the
    event has the ideology given.

Valid ideologies in are "nazi", "fascist", "paternal_autocrat",
"social_conservative", "market_liberal", "social_liberal",
"social_democrat", "left_wing_radical", "leninist" or "stalinist".

-   **domestic = { type = \[domestic policy slider\] value = \[value\]
    }** \# tests whether the domestic policy slider is of the value
    given.

Valid domestic policy sliders to specify include "democratic",
"political_left", "free_market", "freedom", "professional_army",
"defense_lobby" or "interventionism". Values can range from 1 through 10
(not 0 through 9 as stated elsewhere). A higher values means that the
slider is further to the left.

-   **can_change_policy = { type = \[domestic policy slider\] value =
    \[delta\] }** \# true if the policy can be changed by delta

Armageddon 1.3 Beta 2, unlike **domestic** checks if a domestic policy
can be changed normally and not by a specific value

####  Diplomatic condition checks 

-   **major = \[yes/no\]** - is true if the country that it is tested is
    either the UK (ENG), France (FRA), Germany (GER), Japan (JAP), the
    US (USA), Italy (ITA), or the USSR (SOV).
-   **atwar = \[yes/no/country tag\]** - tests if either the country
    that is testing the trigger is currently at war, or whether another
    country \[country tag\] is at war.
-   **war = { country = \[country tag\] country = \[country tag\] }** -
    tests if both countries given in the \[country tag\] parameters are
    at war.
-   **guarantee = { country = \[country tag\] country = \[country tag\]
    }** - tests if the country given in the first \[country tag\] is
    guaranteeing the independence of the country in the second \[country
    tag\].
-   **ispuppet = \[country tag\]** - tests whether the country in
    \[country tag\] is the puppet of any other nation.
-   **puppet = { country = \[country tag\] country = \[country tag\]
    }** - will evaluate to true if the first \[country tag\] given is a
    puppet of the second \[country tag\].
-   **alliance = { country = \[country tag\] country = \[country tag\]
    }** - checks if both \[country tag\] countries are part of the same
    military alliance.
-   **access = { country = \[country tag\] country = \[country tag\]
    }** - checks if the first \[country tag\] is granting military
    access to the second \[country tag\].
-   **non_aggression = { country = \[country tag\] country = \[country
    tag\] }** - checks if both \[country tag\]'s have signed a
    non-aggression pact.
-   **trade = { country = \[country tag\] country = \[country tag\]
    }** - checks if both \[country tag\]'s have at least one active
    trade agreement.
-   **belligerence = { country = \[tag\] value = X }** - is true if
    \[country tag\]'s belligerence \>= X. If no "country = \[tag\]"
    field is provided it means "this country".

####  Technology condition checks 

-   **technology = \[tech id\]** - tests if the country evaluating the
    trigger has researched the technology given in \[tech id\].
-   **is_tech_active = \[tech id\]** - tests if the technology given in
    \[tech id\] is currently researchable.

####  Condition flags 

-   **flag = \[name\]** - tests if the \[name\] *global flag* has been
    defined and is set to true. A global flag if a flag that has been
    set earlier in the scenario file or as a trigger, and is visible to
    all nations in the game. NOTE: the \[name\] cannot include
    non-alphanumeric characters (like an exclamation mark).
-   **local_flag = \[name\]** - tests if the \[name\] *local flag* has
    been defined and is set to true. A local flag is a flag that has
    been set eariler in the scenario file or as a trigger, and is
    visible only to the nation receiving this event. NOTE: the \[name\]
    cannot include non-alphanumeric characters (like an exclamation
    mark).

####  Province checks 

-   **owned = { province = \[province id\] data = \[country tag/-1\]
    }** - checks if the province given, is owned by the country given.
    If -1 is used as the tag parameter to data, then the condition is
    evaluated for whichever country is receiving the event.
-   **control = { province = a data = \[country tag/-1\] }** - checks if
    the province given is controlled or occupied by the country given.
    If -1 is used as the tag parameter to data, then the condition is
    evaluated for whichever country is receiving the event.

####    Resource & Game values 

-   **year = \[value\]** - tests whether the game year is equal or
    greater than \[value\].
-   **month = \[value\]** - tests whether the game month is equal or
    greater than \[value\].
-   **day = \[value\]** - tests whether the game day is equal or greater
    than \[value\]. The first day of the month is day 0.
-   **dissent = \[amount\]** - tests if the country has at least the
    amount of dissent in \[amount\].
-   **manpower = \[amount\]** - tests if the country has at least the
    amount of manpower in \[amount\].
-   **energy = \[amount\]** - tests if the country has at least the
    amount of energy in \[amount\].
-   **oil = \[amount\]** - tests if the country has at least the amount
    of oil in \[amount\].
-   **rare_materials = \[amount\]** - tests if the country has at least
    the amount of rare materials in \[amount\].
-   **metal = \[amount\]** - tests if the country has at least the
    amount of metal in \[amount\].
-   **supplies = \[amount\]** - tests if the country has at least the
    amount of supplies in \[amount\].

####  Victory Points 

-   **lost_VP = { country = \[country tag\] value = \[value\] }** -
    evaluates whether \[country tag\] no longer controls greater than
    \[value\] percent of all the victory points from the provinces that
    the country currently has ownership of.
-   **lost_national = { country = \[country tag\] value = \[value\]
    }** - evaluates whether \[country tag\] has lost control of
    \[value\] percent of its national (or core) provinces.
-   **lost_IC = { country = \[country tag\] value = \[value\] }** -
    evaluates whether \[country tag\] has lost control of \[value\]
    percent of the IC in the provinces that it currently has ownership
    of.
-   **axis = X** - tests if axis powers hold at least X victory points.
-   **allies = X** - tests if allied powers hold at least X victory
    points.
-   **comintern = X** - tests if comintern powers hold at least X
    victory points.
-   **vp = X** - tests if currently held key points plus extra victory
    points is equal to or more than X.
-   **range = { min = X max = X }** - is true if the current victory
    points lies within the specified range).

####  Military unit condition checks 

-   **under_attack = \[country tag\]** - tests if \[country tag\] is
    under attack.
-   **division_exists = { type = \[unit type\] id = \[unit id\] }** -
    tests whether the division \[unit type\], with the id \[unit id\] is
    currently active in the game.
-   **division_in_province = { id = { type = \[id type\] id = \[id id\]
    } province = \[province id\] }** - tests whether the province
    \[provence id\] contains division \[unit type\] with id \[unit id\].
-   **\[div type\] = X** *or* **\[div type\] = { country = \[country
    tag\] value = X }** - tests if X or more of the specified type of
    division exists, for \[country tag\]. The second formulation is
    preferred.
-   **garrison = { country = \[country tag\] province = \[province id\]
    type = \[air/land/naval\] size = \[number of divisions\] area =
    \[yes/no\] }** - tests if \[country tag\] has divisions equal or
    above \[size\] in the specified \[province id\]. If no type is
    specified, this means "all division types". "Size" is the number of
    divisions, and "area = yes" means that divisions in all provinces in
    this controlled area are counted.
    -   Do not use "area = yes" for sea provinces. Do not use *size = 0*
        if you are looking for non-guarded provinces, invert the command
        by looking for the province to be *not* guarded with one
        division ( *size = 1* ).

##  Commands 

type = endgame value = \[value\]  
The valid values that can be used in the \[value\] parameter include:

-   0 = quit
-   1 = eliminated
-   2 = draw
-   3 = axis victory
-   4 = axis total vic
-   5 = allies-victory
-   6 = alliestotal
-   7 = commie
-   8 = commietotal

&nbsp;

type = extra_tc value = \[value\]  
Adds "off map" transport capacity to the nation which the event targets.

  

###  Diplomatic commands 

type = alliance which = \[ [Nation Tag](/Tag_List "Tag List") \]  
Creates an alliance between the nation that the event targets and the
nation signified in the \[ [Nation Tag](/Tag_List "Tag List") \]
parameter. if -1 is used, an alliance will be formed with a random
nation.

&nbsp;

type = inherit which = \[ [Nation Tag](/Tag_List "Tag List") \]  
Causes the nation that is triggering the event to completely take over
the nation specified in the \[ [Nation Tag](/Tag_List "Tag List") \]
parameter. if -1 is used, the nation triggering the event will inherit a
random nation.

&nbsp;

type = country which = \[ [Nation Tag](/Tag_List "Tag List") \]  
Changes the tag of the country.

&nbsp;

type = addcore which = \[province id\]  
Adds the province specified to the core provinces of the nation that the
event is running against.

&nbsp;

type = removecore which = \[province id\]  
Removes the claim that the country running the event has on the provence
specified in \[provence id\].

&nbsp;

type = secedeprovince which = \[ [Nation Tag](/Tag_List "Tag List") \] value = \[province id\]  
The nation which is running the event secedes a province specified in
the [province id](/Provinces_by_ID,_part_1 "Provinces by ID, part 1") to
the nation specified in the [Nation Tag](/Tag_List "Tag List")
parameter.

type = control which = \[tag\] value = \[province id\]

type = belligerence which = \[country\] value = X  
No which field means "this country".

&nbsp;

type = relation which = \[country\] value = X  
Add X to the relation

&nbsp;

type = set_relation which = \[country\] value = X  
Set relation to X

&nbsp;

type = peace which = \[country tag\] value = \[0/1\]  
1 means separate peace - i.e. pull out of alliance. 0 is full peace, for
the whole alliance.

&nbsp;

type = war which = \[country tag\]  
Create a war between the objective nation and the trigger one.

&nbsp;

type = make_puppet which = \[country tag\]  
Armageddon 1.3 Beta 2, changes cabinet and policy settings to match
master

&nbsp;

type = coup_nation which = \[country tag\]  
The target nation suffers a coup of state

&nbsp;

type = access which = \[country tag\]  
Grant military access \_to\_ a country

&nbsp;

type = independence which = \[country tag\] value = \[0/1\] when = \[0/1\]  
value 0 - units in the area change allegiance, 1 - they don't. , when
0=normal, 1= force them to be democratic

&nbsp;

type = end_access which = \[country tag\]  
Revoke military access for nation

&nbsp;

type = leave_alliance  
The Nation that the event targets leaves the alliance.

&nbsp;

type = end_non_aggression which = \[country\] where = \[country\]  
End a non aggression pact between these countries

&nbsp;

type = non_aggression which = \[country\] where = \[country\]  
Create a non aggression pact between these countries

&nbsp;

type = end_trades which = \[country\] where = \[country\]  
End all trade agreements between these countries

&nbsp;

type = end_guarantee which = \[country\] where = \[country\]  
Country 1 no longer guarantees independence of country 2

&nbsp;

type = guarantee which = \[country\] where = \[country\]  
Country 1 now guarantees independence of country 2

Armageddon 1.3 Beta 2, costs/substracts money in commands

&nbsp;

type = end_puppet  
End puppet status

&nbsp;

type = end_mastery which = \[country tag\]  
End puppet mastery over another nation

Armageddon 1.3 Beta 2, does not cost/substract money in commands

  

###  Domestic 

type = capital which = \[province id\]  
Change the capital province of the nation that is running the event.

type = regime_falls

type = civil_war  
Civil war with any possible revolter that has shared national provinces

&nbsp;

type = civil_war which = \[rebel country tag\]  
NOTE: This MUST be a tag which has regular_id set to this country, or
vice versa. This can be seen in the scenario file.

&nbsp;

type = dissent value = \[value to add\]  
Positives values adds national dissent, and negatives subtracts it.

&nbsp;

type = domestic which = \[democratic/political_left/free_market/freedom/professional_army/defense_lobby/interventionism\] value = X  
Change a domestic policy by X

&nbsp;

type = set_domestic which = \[democratic/political_left/free_market/freedom/professional_army/defense_lobby/interventionism\] value = X  
Set a domestic policy to X

&nbsp;

type = change_policy which = \[democratic/political_left/free_market/freedom/professional_army/defense_lobby/interventionism\] value = \[+/- 1\]  
Change a domestic policy when it is possible

Armageddon 1.3 Beta 2, only changes policy when they are not locked,
also sets new cooldown

  

####  Resources 

type = resource which =\[resource type\] value = X  
% of theoretical maximum daily production added to national resource
pool.

&nbsp;

type = supplies value = \[value to add\] where = \[prov\]  
If no "where" field is used, it goes to the national pool.

&nbsp;

type = \[oilpool/metalpool/energypool/rarematerialspool\] value = \[value to add\] where = \[prov\]  
If no "where" field is used, it goes to the national pool.

&nbsp;

type = money value = \[value to add\]  
Take care with negative value for the AI, as the AI cannot annex
countries while overdrafted, possibly disturbing the AI.

In Armageddon 1.3 Beta 2, exist a limit of 65,000 in a single command

  

###  Tech 

type = steal_tech which = \[country tag/-1 for random non-ally\]  
Steals a random tech. Results in a blueprint.

&nbsp;

type = gain_tech which = \[tech id/-1 for random tech/-2 for a random tech currently being researched\]  
Results in a blueprint, not a technology.

type = research_sabotaged

type = sleepteam which = \[tech team id\]  
Makes this team unavailable (sets "start year" to 2001. Will complete
current project though.)

&nbsp;

type = waketeam which = \[tech team id\]  
Makes this team available (sets "start year" to previous year.)

  

###  Event-connected 

type = trigger which = \[event id\]  
Immediately trigger the event specified by \[event id\]

&nbsp;

type = sleepevent which = \[event id\]  
This event is not going to happen (again in case of the persistent
ones). Still can be triggered via console and sometimes by other events.

&nbsp;

type = setflag which = \[keyname\]  
Global flag, visible for all countries. (Visible means valid in event
terms)

&nbsp;

type = clrflag which = \[keyname\]  
Global flag, visible for all countries.

&nbsp;

type = local_setflag which = \[keyname\]  
Local flag, visible only for this country.

&nbsp;

type = local_clrflag which = \[keyname\]  
Local flag, visible only for this country.

  

###  Victory commands 

type = vp value = X  
Offmap Victory Points

&nbsp;

type = province_keypoints which = \[province id/-1\] value = \[keypoints to add\]  
Adds value victory points to the selected province. Negatives values
reduce it.

  

###  Warfare 

type = ground_def_eff which = \[value to add\]  
Affects defense capabilities of all units. The default value is 0.80

Armageddon 1.3 Beta 2, cannot be incremented in easy steps (+/- 0.01),
has to be set as a complete value e.g. 0.97

&nbsp;

type = set_leader_skill which = \[leader id/-1\] value = \[new value\]  
Gives to the selected general the value skill.

&nbsp;

type = manpowerpool value = \[value to add\]  
Adds value manpower

&nbsp;

type = relative_manpower value = \[%\]  
Add a percentage of \[yearly national manpower income ; 50\] to the pool

&nbsp;

type = allow_dig_in  
Troops may now dig in

type = sleepminister which = \[minister id/-1\]

type = sleepleader which = \[leader id/-1\]

type = switch_allegiance which = \[unit id type/-1\] value = \[unit id id\]where = \[country tag\]  
-1 is a random unit (value will be ignored).

&nbsp;

type = delete_unit which = \[unit id type/-1/-2/-3\] value = \[unit id id\]  
-1 is a random land unit (value will be ignored).

-2 is a random naval unit (value will be ignored).

-3 is a random air unit (value will be ignored).

&nbsp;

type = ai which = \[file name\]  
Switches the ai file of a country.

type = build_division which = \[division type\] value = \[brigade type\]

type = construct which = \[building type\] where = \[prov id/-1/-4\] value = \[additional size\]  
-1 is random valid province.

-4 is random national province that already has a building of the same
type of at least size 1.

type = add_corps which = \[name\] value = \[land/air/naval\] when =
\[leader ID\] where = \[province_ID\]

type = activate_division which = \[div id type\] value = \[div id id\] \[where = province\] when = \[0/1\]  
Activates a dormant division. If "when = 0" the division will deploy to
the force pool if the target province is enemy controlled. If a
preceding add_corps command has been used, the division will go to that
unit, ignoring the 'when' and 'where' directives.

&nbsp;

type = add_division which = \[name\] value = \[div type\] when = model where = \[brigade type\]  
Brigade model is always the latest. If a preceding add_corps command has
been used, the division will go to that unit, otherwise to the force
pool.

&nbsp;

type = remove_division which = \[div id type/-1\] value = \[div id id\]  
Remove a division from the scenario. -1 is a random division (the value
field will be ignored).

&nbsp;

type = remove_division which = "Exact Name" value = \[country tag\]  
Remove a named division from the scenario (for a certain country.)

&nbsp;

type = damage_division which = \[div id type/-1\] value = \[div id id\] where = X  
where = Percent of Max Strength. Negative value is strength gain.

&nbsp;

type = disorg_division which = \[div id type/-1\] value = \[div id id\] where = X  
where = Percent of Max Strength. Negative value is org gain.

type = allow_convoy_escorts

type = transport_pool which = \[country\] value = X  
Adds/removes transports from pool

&nbsp;

type = escort_pool which = \[country\] value = X  
Adds/removes escorts from pool

&nbsp;

type = peacetime_ic_mod value = X(%)  
Additive, and ONLY applied when a country is at peace. Default base
value is 100%.

type = convoy which = \[startprov\] value = \[endprov\] when =
\[resource_bits\] 1=oil, 2=metal, 4=energy, 8=rare_materials,
16=supplies

type = deactivate which = \[tech id\]  
Make this technology permanently unavailable for the country.

&nbsp;

type = tc_mod value = X(%)  
Modify National Transport Capacity. Positive value = good.

&nbsp;

type = tc_occupied_mod value = X(%)  
Modify Occupied Province Transport Capacity Drain. Positive value =
good.

&nbsp;

type = attrition_mod value = X(%)  
Modify the Attrition Penalty. Positive value = good.

&nbsp;

type = supply_dist_mod value = X(%)  
Modify the Supply Distance Penalty. Positive value = good.

&nbsp;

type = repair_mod value = X(%)  
Modify Reinforcement Efficiency. Positive value = good.

&nbsp;

type = research_mod value = X(%)  
Modify research efficiency. Positive value = good.

&nbsp;

type = scrap_model which = \[div type\] value = \[model\]  
Make a model obsolete (no longer possible to build).

&nbsp;

type = allow_building which = \[building type\]  
Allow the construction of a certain building type.

&nbsp;

type = building_prod_mod which = \[building type\] value = X%  
Bonus to production time. Additive. NOTE: Positive value = reduced time.

&nbsp;

type = convoy_prod_mod which = \[escorts/transports\] value = X%  
Bonus to production time. Additive. NOTE: Positive value = reduced time.

&nbsp;

type = radar_eff value = X(%)  
Modify the efficiency of radar stations (bonus to friendly aircraft in
the province.) Positive value = good.

&nbsp;

type = info_may_cause which = \[tech id\]  
No effect, but informs player that this tech/event can open up new
avenues of research.

&nbsp;

type = gas_attack  
Enable gas attacks (was in Victoria - has no effect)

&nbsp;

type = gas_protection  
Enable gas protection (was in Victoria - has no effect)

&nbsp;

type = activate which = \[tech id\]  
Will be used in Random events

Made available the research of the desire tech.

&nbsp;

type = task_efficiency which = \[task type\] value = X  
Additive: 0.1 - 1.0

&nbsp;

type = add_prov_resource which = \[prov id/-1/-4\] value = X where = \[energy/metal/oil/rare_materials\]  
-1 is random province, -4 is province with nuclear reactor.

&nbsp;

type = max_positioning which = \[div type\] value = X  
sets the value 0.1-1.0

&nbsp;

type = min_positioning which = \[div type\] value = X  
sets the value 0.1-1.0

&nbsp;

type = max_reactor_size value = X  
Set the max size of nuclear reactor buildings.

&nbsp;

type = abomb_production  
Allow A-Bombs

&nbsp;

type = double_nuke_prod  
Double A-Bomb production rate.

type = songs

type = lock_division which = \[id type\] value = \[id id\]  
Lock this division (it may no longer move.)

&nbsp;

type = unlock_division which = \[id type\] value = \[id id\]  
Unlock this division (it may now move.)

&nbsp;

type = free_oil/free_supplies/free_money/free_metal/free_energy/free_rare_materials/free_transport/free_convoy  
Change offmap daily production

  

###    AI event commands (no effect for human controlled nations) 

ai_chance = x  
Show the probability of the Ai of select this option.

type = ai_prepare_warwhich = \[tag\]  
Tells the AI to move troops to the border with a country.

[Weather](/Weather "Weather") event commands

type = start_pattern which = \[id type\] value = \[id id\] where = \[provence id\] when = \[raining/snowing/storm/blizzard\]  
Start a new weather pattern centered on a given province

&nbsp;

type = add_to_pattern which = \[id type\] value = \[id id\] where = \[provence id\] when = \[raining/snowing/storm/blizzard\]  
Add a province to an existing weather pattern.

&nbsp;

type = end_pattern which = \[id type\] value = \[id id\]  
This weather pattern will begin to dissipate

type = set_ground which = \[provence id\] value = \[clear/muddy/winter\]

Commands to affect the chance of "combat events" occurring. Additive
(%).

type = counterattack value = x

type = assault value = x

type = encirclement value = x

type = ambush value = x

type = delay value = x

type = tactical_withdrawal value = x

type = breakthrough value = x

HQ effects

type = hq_supply_eff value = X(%)  
Additive

type = sce_frequency value = X  
Combat event chance multiplier. Default: 1.0

Enable a certain type of mission

type = enable_task which = \[task type\]

New models updates the current template for a division or brigade type.

command = { type = \[new_model\] which = \[division or brigade type\]
value = \[The model number\] }

Make a division or brigade type available for construction.

command = { type = activate_unit_type which = \[division or brigade
type\] }

Make a division or brigade type unavailable for construction.

command = { type = deactivate_unit_type which = \[division or brigade
type\] }

ACTIVATE NUCLEAR CAPABILITY OF MISSILES

command = { type = nuclear_carrier which = \[flying_bomb/flying_rocket\]
}

ACTIVATE MISSILE CAPABILITY OF SUBMARINES

command = { type = missile_carrier which = \[submarine\] }

UNIT VALUES

\[unit value\] =
soft_attack/hard_attack/ground_defense/air_attack/air_defense/build_cost/build_time/manpower/speed/max_organization/transport_weight/supply_consumption/fuel_consumption/speed_cap_art/speed_cap_eng/speed_cap_at/speed_cap_aa

Land unit bonuses

    command = { type = [unit value]
        which = [land/division type/brigade type]
        value = [additive value modifier]
    }

Air unit bonuses

    command = { type = [air_attack/strategic_attack/tactical_attack/naval_attack/air_defense/build_cost/build_time/manpower/speed/surface_detection/air detection/transport_capacity/supply_consumption/fuel_consumption/range]
        which = [air/division type/brigade type]
        value = [additive value modifier]
    }

Naval unit bonuses

    command = { type = [naval_attack/air_attack/shore_attack/naval_defense/air_defense/build_cost/build_time/manpower/speed/surface_detection/air detection/visibility/transport_capacity/supply_consumption/fuel_consumption/range]
        which = [naval/division type/brigade type]
        value = [additive value modifier]
    }

NOTE: For "build_time" and "build_cost", it is possible to add the field
"where = relative".

This means that the value is parsed as a relative modifier (%) instead
of an absolute addition.

When doing this, THE BASE VALUE OF MODEL 0 IS USED FOR \_ALL\_ MODELS.
So "value = -10" means

"-10% of the value of model 0".

  
UNIT COMBAT MODIFIERS (In percents : +10 = 10%)

Terrain combat modifiers

    command = { type = [jungle_defense/jungle_attack/desert_attack/desert_defense/mountain_attack/mountain_defense/hill_attack/hill_defense/forest_attack/forest_defense/swamp_attack/swamp_defense/urban_attack/urban_defense/river_attack/shore_attack/paradrop_attack]
        which = [division type/brigade type]
        value = [X]
    }

Terrain movement modifiers

    command = { type = [jungle_move/desert_move/mountain_move/hill_move/forest_move/swamp_move/urban_move/river_crossing]
        which = [division type/brigade type]
        value = [X]
    }

Weather land-combat modifiers

    command = { type = [frozen_attack/frozen_defense/snow_attack/snow_defense/blizzard_attack/blizzard_defense/rain_attack/rain_defense/storm_attack/storm_defense/muddy_attack/muddy_defense]
        which = [division type/brigade type]
        value = [X]
    }

Weather land-movement modifiers

    command = { type = [frozen_move/snow_move/blizzard_move/rain_move/storm_move/muddy_move]
        which = [division type/brigade type]
        value = [X]
    }

Weather air-combat modifiers

    command = { type = [snow_attack/rain_attack]
        which = [interceptor/escort/multi_role/strategic_bomber/tactical_bomber/torpedo_plane]
        value = [X]
    }

Weather air-movement modifiers

    command = { type = [snow_move/blizzard_move/rain_move/storm_move]
        which = [interceptor/escort/multi_role/strategic_bomber/tactical_bomber/torpedo_plane/transport_plane]
        value = [X]
    }

Weather naval-combat modifiers

    command = { type = [snow_attack/rain_attack]
    which = [battleship/cruiser/destroyer/carrier/submarine/transports]
    value = [X]
    }

Weather naval-movement modifiers

    command = { type = [snow_move/blizzard_move/rain_move/storm_move]
        which = [battleship/cruiser/destroyer/carrier/submarine/transports]
        value = [X]
    }

Night modifiers

    command = { type = night_move/night_attack/night_defense
        which = [division type/brigade type]
        value = [X]
    }

  
SPECIAL UNIT BONUSES

Minisubs (BBs and CVs attack ships in harbors with this bonus added to
their sea attack value)

    command = { type = minisub_bonus
        value = [X]
    }

This value is NOT INCREMENTAL, it is the new value.

  
GLOBAL MODIFIERS

The following modifiers are in percents:

Surprise modifiers

    command = { type = surprise
        which = [naval/land/air]
        value = [X]
    }

Intelligence Operation modifiers

    command = { type = intelligence
        which = [us/them]
        value = [X]
    }

Army Detection modifiers

    command = { type = army_detection
        which = [us/them]
        value = [X]
    }

Provincial AA batteries

    command = { type = AA_batteries
        value = [X]
    }

  
INDUSTRIAL MODIFIERS

Industrial multipliers

E.g. energy_to_oil 4 means four energy are needed to produce one oil.
0.5 means 1 energy produces 2 oil.

    command = { type = industrial_multiplier
        which = [energy_to_oil/oil_to_rare_materials] 
         value = [X]
    }

Industrial modifiers (additive)

'total' is the conversion factor from every built industry point into
Industrial Capacity.

'supplies' is a modifier for the amount of supplies produced by every
reserved IC unit.

    command = { type = industrial_modifier
        which = [total/supplies] # Percents 
        value = [X]
    }

Building Types:

\[ic, coastal_fort, land_fort, flak, infrastructure, air_base, naval_base, radar_station, nuclear_reactor, rocket_test\]  
Self explanatory

Task Types:

\[attack, rebase, strat_redeploy, support_attack, support_defense,
reserves, anti_partisan_duty, air_superiority, ground_attack,
runway_cratering, installation_strike, interdiction, naval_strike,
port_strike, logistical_strike, strategic_bombardment, air_supply,
airborne_assault, convoy_raiding, asw, naval_interdiction,
shore_bombardment, amphibous_assault, sea_transport,
naval_combat_patrol\]

  
Resource Types:

\[oil, metal, energy, rare_materials, supplies, money\]
