---
title: Modding_ai_files
---

::: mw-parser-output

## [ ]{#Hints*&\_Warnings} [ Hints & Warnings ]{#Hints*.26_Warnings .mw-headline}

An ai file does not need to include all variables. Only the variables
included will modify whatever existing variable values are in usage.

A scenario will load the ai file with TAG_year.ai if no other file is
specified in the .INC file for that nation. In order to specify a custom
ai file in the .INC file of a nation, you have to add an

`ai = "nameoffile.ai"`

inside the \"country = {\...}\" section.

This can result in confusing problems. For example if you have a
GER_1936.ai file and a GER_1938.ai file by default the 1938 campaign
will load the GER_1938.ai file without ever having loaded the
GER_1936.ai file. So if the GER_1938.ai file is not a complete ai file
you might not realize that many variables won\'t be initialized. This
occurs in Paradox v1.2 1938 campaign where Spain and USA load partial
files without the base 1936 ai info thus leaving screwed up default
values (like neutrality!).

None of the existing ai files use the \"max_redeploying\" variable so
this is an easy one to overlook. All nations will have the default of
25%. Reducing this value may help avoid the strategic redeployment
shuffle issues that nations like Russia have.

## [ Paradox Docs ]{#Paradox_Docs .mw-headline}

Note: This is straight from the ai_file_doc.txt in the Docs folder in
the HoI2 directory. I\'m still playing around with these settings to get
a feel for them, but I figured I would post this here, if for nothing
more than for people to be able to reference them when they are not at
their normal computer (work or something). Feel free to comment and
discuss these things (all you guys at DAIM!)

From the beginning. I\'ll work my way through this as I get more
competent in modding AI files, but I\'m still working on it. Feel free
to comment or edit.

     switch = [yes/no]

As the note says next to this, if it is set to \"no\" then it will not
look for a new file at the beginning of each year. However, it will
still switch if an event causes it (ai_switches.txt events, for
example). For some countries, like the US, that would mean they would
never gear up for war, etc. Be careful. However, if you modify this and
you want it to stay this way, then use a no here and remove any switch
events from the ai_switches.txt event file to prevent it from change.

\

    # Inter-Agent distribution variables flags = {     testflag = yes  invade_albania = no     assist_finland = no } # Modifier to chance that country will accept a demand for territory. claim_acceptance = X # The countries we will demand territory from if we have claims on them. demand_claims = {     EST     LAT     ROM     LIT     FIN } # The countries we will set free if we control their territory. liberate = {  LIT     FIN } # Special resistance against "influence" by the listed nations. Value range = [0 - 10] resistance = {     ROM = 8 }

Here, as the note says, is how much harder it is for nations to
influence this nation. This setting is handy if you don\'t want the US
to get too friendly with Germany or Japan (or the Confederates, if they
exist). A setting of 0 means that there isn\'t any resistance, ie
treated normally (I believe).

    # Country tags listed with a value specifying how much we want to destroy them. combat = {  ENG = 60    FRA = 70 }

Again, as the note says, this is how much you want to destroy them.
After playing around with this, if you set it to 100, the nation will
basically avoid all others to try and destroy this. It also goes after
those nations in descending order. So, in this case, France will be the
first nation it targets, and after defeating France, it will face off
with England.

     # Countries listed here are considered withing our 'sphere of influence'. We will strive to guarantee their independence. protect = {     TUR = 100   DAN = 100 }

Now, if you look at the US ai file, you\'ll notice this is much longer.
This is the nations that the ai will guarantee. Also, I believe the
higher the value, the more likely the ai will actually intervene
militarily in the attack.

    # Countries listed here are considered our natural allies. We will try to influence them and ally with them. befriend = { TUR = 100  DAN = 100 }

Lets say you want Canada to not join the allies? Then remove the allied
tags from its ai file. Again, higher number means priority. I haven\'t
checked to see how the ai deals with a GER and FRA both at 100. I\'ll
report once I know.

    # Provinces with an assigned priority. These are strategic goals for the AI (it will try to take them in wars and demand them in peace treaties.) target = {    324 = 50 # 1 - 100 }

This is something that you can mess with and totally change the ai\'s
actions. If you change the province ID to one deep in their territory,
the ai will fight to that point. However, if only on the borders, the AI
might not continue the advance. Handy if you want the ai to only seize
sea provinces, etc.

    upgrading = 0.1       #max % of ic used on this slider. reinforcement = 0.1   #max % of ic used on this slider.

Basically self explainatory\...

    desperation = 0.3 #If more than this % of ic is occupied by enemy, panic and build militia hordes.

This is one of those thing that you can also do to set the ai to change
its actions. Be careful though. If too low, the AI will build militia
and it can very well be a death knell. However, too high and the AI
won\'t have enough time to build them (or the IC). Good for making a
small nation pull its population to fight (ie the Swiss, for example).
Can be very funny to watch suddenly 10 divisions pop up.

\

    # The ETA at which the AI uses strat. redeploy. strat_redeploy_threshold = [days] # Proportion of divisions that may be strategically redeploying at the same time. Default: 0.25 max_redeploying = X

Self explainatory\...

    # The "war monger" value affects the propensity of a country for declaring wars: war = 50

This is fun to play with. The higher, the more likely it will declare
war. This is something that the switches tend to change, as well as a
few others below. A setting of 100 means they are just itching for a
fight.

    # The tendency of a nation to create and accept alliances, and accept military access. # The higher the value, the more "neutral" the nation. # NOTE: this does not affect the tendency of a nation to start wars. neutrality = 0 # Total neutrality at about 100 to 150

Self explainatory, expect for one thing. If the neutrality is over 100,
the nation basically will never join alliances. This effect can be seen
directly if you change it and then reload the scenario and ask for an
alliance (the chance of acceptance, ie).

_Actual neutrality is a combination of this value and the value of the
Interventionism vs Isolationism government slider and the current
\"relations\". I recommend in general neutrality should never be less
than 100 or it will be too easy to form alliances. At neutrality = 150
all other factors are ignored and you have guaranteed neutrality. For
more details see my webpage
[\[1\]](http://www.mnstarfire.com/ww2/hoi/documentation/alliances.html){.external
.autonumber rel="nofollow"} on creating alliances. Some nations like
Argentina have government leaders that create exceptional situations. -
Mithel_

    max_front_ratio           = X     # The max wanted friendly-to-enemy division ratio along the front. Default is 4.0. max_front_ratios = {             # Override the default against specific countries. Ignored against humans.  FIN = 2.0   ... }

This is very handy for creating a good front. I tend to prefer (as a
human player) at least 2:1 over my enemies, but if there is a higher
tech nation on the border, you might want to change the specific front
(the second section) to 6:1 or even higher. One big note, this doesn\'t
mean that the AI will build divisions, but rather try to deploy them in
this fashion.

    # Proportion of our land divisions that we are prepared to relinquish control over. # NOTE: Do not set too low - the AI must be allowed to give over control of its forces in "allied war zones". Default: 0.75. exp_force_ratio           = 0.75

    # Will never send exp. forces _overseas_ to these countries: # NOTE: May still give some to neighboring allies though. no_exp_forces_to = {  TAG     ... }

This setting will modify how likely they are to send troops to allies.
As the note says, don\'t set to low. The second section is just as
important, because if they can\'t get transports over there to get them
back\... well, you can see what would be wrong with that.

    max_garrison_prop       = [0.0-1.0]     # The war-time desired proportion of troops allocated to garrison duty min_garrison_prop        = [0.0-1.0]     # The war-time minimum proportion of troops allocated to garrison duty # NOTE: In areas without fronts, _all_ land units are controlled by the Garrison AI (except forces preparing for an invasion.)

Self explainitory\...

    construction = {    max_factor          = [0.0-1.0]     # Proportion of Production IC that should be used for province buildings.   AA_batteries        = [yes/no/atwar/not_atwar]  # yes = all the time, no = none, atwar = build during wars, not_atwar = build during peace  max_AA_level        = X             # Don't improve beyond this level.  AA_provs            = { ... }       # List of prioritized provinces     coastal_fort        = [yes/no/atwar/not_atwar]  max_coastal_level   = X             # Don't improve beyond this level.  coastal_fort_provs  = { ... }       # List of prioritized provinces     radar_station       = [yes/no/atwar/not_atwar]  max_radar           = X             # Don't improve beyond this level.  radar_provs         = { ... }       # List of prioritized provinces     air_base            = [yes/no/atwar/not_atwar]  max_air_base        = X             # Don't improve beyond this level.  air_base_provs      = { ... }       # List of prioritized provinces     naval_base          = [yes/no/atwar/not_atwar]  max_naval_base      = X             # Don't improve beyond this level.  naval_base_provs        = { ... }   # List of prioritized provinces     land_fort           = [yes/no/atwar/not_atwar]  max_land_level      = X             # Don't improve land forts beyond this level.   fort_borders = {                    # Build land forts along these borders      GER,        ITA,        ...     }   fort_provs      = { ... }   # List of prioritized provinces     ic_at_war           = [yes/no]      # Normally, we always build IC if there is a large resource surplus. The exception could be during wars.    force_ic_until      = X             # Ignore presence of a resource surplus and build IC anyway, until year X. (Useful for countries anticipating expansion.)   ic_end_year         = X             # Stop building IC at the end of year X.    IC_provs            = { ... }       # List of prioritized provinces }

These control settings control how the AI builds province buildings.
Most of the comments are pretty self-explanitory.\
In the \_provs sections, you should put province IDs in the field.

    garrison = {  # OVERSEAS GARRISONING:     defend_overseas_beaches = [yes/no] # "no" is default    # Basic need is X divisions per area where X is: number of provinces - attrition provinces  home_multiplier = X # In home area, multiply basic need by X. Default: 0.5  overseas_multiplier = X # In other area, multiply basic need by X. Default: 0.3333  home_peace_cap = X # If at peace, we need at most X divisions in our capital area.  war_zone_odds = X # Default: 2.0 (strive to transport in 2x enemy nr of divisions)  area_multiplier = { # If an area contains a specific province, multiply the basic need by value (overrides overseas_multiplier, but if it is the home area it is ignored.)      155 = 1.5       ....    }

These control the AI defense priority. Once again, Pretty
Self-explainitory.\
Incase you\'re wondering how the area multiplier works, you just place
**ProvinceID = Multiplier** Inbetween the brackets. You can place
multiple province multiplies in the same area multiplier, It\'s not
limited to just one.\
These settings can really make or break an AI, If this is your first
time modding an AI file, It is recommended to go with the default
values, lest the AI can really get screwed up.

     # PRIORITIES:   beach = 50                  # Beach prio    capital = 100               # Our capital   human_border = 210          # Ignored for allied human players  war_target = 100            # The next country targeted for attack by this AI   reserves = 20   # bonus for provinces just behind a frontline.  opposing_alliance = 100     # For neutrals, all alliances are "opposing"    claim_threat = 100          # If we are neutral, countries with claims on us get this   unstable_border = 50        # Bordering countries at war with someone else get this     # Borders with specific countries   country_priorities = {      ENG = 30        FRA = -1     # Override "opposing_alliance", "claim_threat" and "unstable_border" values and set to 0.      ...         ...     }   # Specific provinces    province_priorities = {         527 = 50    # Province 527 has prio 50      1123 = -1   # Negative value will override _all_ other priorities and set to 0.         ...     }       ignore = {      1123    #Will set prio to 0...  }   key_point_prio_mult     = [Value]   # Value * key point value in a province = prio for that province }

These are also deciding factors in AI priorities. For fields mentioning
provinces, you place **Province ID = Priority** . The only difference
between most of these and the garrison priority is that these also
affect AI offensives.

    front = {   river =         x   (What to multiply attacking power with if crossing a river. < 1.0 is an advantage..)     # the following modifies the odds-strength for defender. (1.0 = no difference.)     largefort   = x #for forts above level 6.   smallfort   = x #for forts 6 and below  occupied    = x #for surrounded pocket at enemy territory   owned       = x #for surrounded pocket at own territory     #Odds modifiying variables  # the following is to reduce odds-strength for attacker.    frozen_attack   = 0.50  snow_attack     = 0.50  blizzard_attack = 0.25  storm_attack    = 0.60  muddy_attack    = 0.75  #reduces the size of odds in total.. (1.0 = no difference, 0.5 = halved.)   jungle_attack   = 0.85  mountain_attack = 0.60  swamp_attack    = 0.60  forest_attack   = 0.85  hill_attack     = 0.75  urban_attack    = 0.40      # Proportion of divisions in a front province that may be used to support the defense of neighboring provinces. Default 0.33

As of 1.2, these particular fields are all outdated and no longer have
any effect.

       support_defense_prop = X    recklessness        =   [0-3]       # Even - Distribute forces evenly along the whole front.    # Reactive - Try to match enemy troop concentrations.   # Defensive - More troops in strategically important provinces (IC, Victory Points, Oil, etc)   # Offensive - Concentrate more troops where the enemy us weak   # Operational Defensive - The fewer avenues of escape, the less troops (to avoid encirclement.)     distrib_vs_ai       =   [even/reactive/defensive/offensive/op_defensive]    distrib_vs_human    =   [even/reactive/defensive/offensive/op_defensive]

Support defense determines how many troops the AI will send to try to
support a province under attack\
Recklessness determines how many risky attacks the AI will try to pull
off, Settting it low will mean that the AI won\'t take any risks,
Setting it too high makes the AI suicidal.\
\
The distribution fields must have said values in them.
_even/reactive/defensive/offensive/op_defensive_ . You can look at the
above comments to see what each does.

        # Countries we do not counter-attack for a certain number of days   enemy_handicap = {      # NOTE: These values are ignored for human-controlled enemies.      # CAUTION: Values apply for _every_new_ war with a set nation.      ENG = 100       FRA = 120       ...         ...     }   passivity = { # Against specified enemies.      # Valid values: 0-100 (%)       ENG = 0         FRA = 50        ...         ...     }       province_priorities = {         527 = 0.2   #Only assign 20% of desired forces to cover the province 527        ...     }

The first field is pretty self-explanitory, just a note for those of you
wondering. Those values aren\'t the actual amount of days before another
attack :P.\
The next field, Passivity, automatically makes the AI stop conducting
attacks against that country unless they have good odds. The higher this
value is, the slower the AI will tend to advance. As an example, once
Japan has taken most of northeastern china, Their passivity for all the
chinas is set to 90+.\
The last line is another province priority modifier(Getting kinda
redundant huh?). This one can be used to set values for certain
provinces lower then normal(IE 0.X)

        reserve_prop            =   [0.0-1.0]   # Maximum proportion of total divisions in a front allowed to remain behind the front line ( HQs and divisions needing to recover.)     panic_ratio_vs_ai       =   X   # Front requests more troops if outnumbered by this factor. NOTE: this results in troops being drawn from garrison duties, etc, so set HIGH.    panic_ratio_vs_human    =   X   # Front requests more troops if outnumbered by this factor. NOTE: this results in troops being drawn from garrison duties, etc, so set HIGH.    enemy_reinf_days        =   X   # Count enemy units less than X days from a target province in odds calculations    base_attack_odds        =   X   # Will attack at X odds or better   min_attack_odds         =   X   # If stalemated for a long period, may go as low as these attack odds   max_attack_odds         =   X   # Don't use more force than necessary to reach these odds   reinforce_odds          =   X   # Send in more troops if the attacking force is at these odds   withdraw_odds           =   X   # Break off attacks and withdraw at these odds  # NOTE: the calculations for retreating from _defensive_ positions are too complex to condense to a few variables   # NOTE: will _also_ retreat if the average organization is too low }

These are used to determine the AI\'s actual combat priority. All of
these use the stand proportion values (0.5/1.0/2.0) and not word values
(Low/High) incase the _panic_ratio_vs\__ confused you.\
For _enemy_reinf_days_ the AI will look behind the frontline and look
for enemy units that are coming to reinforce the front line, then move
it\'s troops accordingly. Example: Setting this value at double(2.0)
will have the AI try to bring twice as many troops as the enemy is
bringing in reinforcements.\
withdraw_odds,base_attack_odds,min_attack_odds,max_attack_odds, and
reinforce_odds are based on combat effectiveness. Example: If you set
withdraw_odds to 2.0, when the AI comes under attack and the enemy has
twice as much combat effectiveness, the AI order a retreat.

    military = {     relative_build_scheme   = [yes/no]  # Should the AI strive to maintain a relative balance between unit types [yes] or simply allocate percentages (see below) of the total production [no]. Default: yes    max_batch_peace = 800                   # Max production run length in DAYS while at peace  max_batch_war = 500                     # Max production run length in DAYS while at war with no home front     max_batch_home_front = 190              # Max production run length in DAYS while at war with home fronts   # NOTE: AI production run size is also limited by other factors, such as Total IC capacity, days until end of scenario, and desperation. # Example Build scheme:    infantry =      3   cavalry =       0   motorized =     5   mechanized =    6   light_armor =   0   armor =         10  paratrooper =   0   marine =        6   bergsjaeger =   3   garrison =      0   hq =            2   militia =       0                   # 35 %  escort =        5   multi_role =    7   interceptor =   3   strategic_bomber = 4    tactical_bomber = 6     naval_bomber =  5   cas =           5   transport_plane = 0     flying_bomb =   0   flying_rocket = 0                   # 35 %  battleship =    2   light_cruiser = 4   heavy_cruiser = 3   battlecruiser = 0   destroyer =     6   carrier =       6   submarine =     4   transport =     5                   # 30 % # NOTE: The sum _must_ be exactly 100%! # Brigade preferences: # (% of eligible division types that should be built with a certain brigade type) # Land types:   artillery           =   15  sp_artillery        =   5   rocket_artillery    =   0   sp_rocket_artillery =   2   anti_tank           =   3   tank_destroyer      =   5   light_armor_brigade =   0   heavy_armor         =   0   super_heavy_armor   =   0   armored_car         =   0   anti_air            =   5   police              =   0   engineer            =   5 # Sum of these should be <= 100 # Naval types:     cag             =   100 # Sum of these should be <= 100 }

First off, Paradox made a mistake. While the default for
_relative_build_scheme_ is yes, it should always be No. (per Phil K
\"relative_build_scheme = no\" is known to be broken and was supposed to
be fixed in 1.2 but did **not** get fixed! Hopefully it will be fixed in
v1.3. - Mithel) Not a single AI file has it set to yes, and for good
reason, an AI with relative_build_scheme set to yes is a very bad idea.
It will try to produce the same amount of everything! Can you imagine
the USSR building a battleship for every single infantry divison?

Well, Enough of that, Let\'s get down to business.\
Max_batch refers the the longest amount of time the AI will set
something serial run, the number being the maximum amount of days.\
Home_front refers to times when the AI has been pushed into their core
territories(IE: When the soviets are pushing into german homeland).\
\
Now, The actual build scheme. These are very important for making a good
AI, try to gauge how much of each unit the AI would actually need. One
of the main reasons that the 1.1 AI was so bad was that Lothos(Creator
of the hoi2 AI files) had most of the Major powers overproducing
garrison units(This was fixed in 1.2). So be careful of what you do
here.\
\
Also, These are not the actual amount of units the AI will produce, but
merely the proportion of their industry they will assign to making that
unit type.\
As stated, together the values for all land, air, and sea units must
equal 100.

Brigades work the same way as unit build schemes, except the total value
is not limited, but merely suggested.

I disagree, relative_build_scheme = yes has some valuable usage. Prior
to war it really doesn\'t matter much (depending on the state of the
initial OOBs!) but once war breaks out then relative_build_scheme = yes
allows the AI to react to losses. If it\'s navy is wiped out then it
will concentrate on rebuilding the navy, etc. This can be a **bad**
thing in some situations! For example if the Italian navy is wiped out
in 1942 we do **not** want Italy to spend the next two to four years
building nothing but navy! Another example of where relative = yes will
mess you up is if the initial OOB doesn\'t match the desired balance of
units specified in the AI file. For example England may start off with a
large navy but due to the AI file may build only ground units (and air)
to achieve the specified balance before it starts building navy again.
With relative = no the AI is _braindead_ and unable to react to losses -
Mithel

I don\'t want to delete the comments of whomever is suggesting to use
relative_build_scheme = no but I\'ve done over a dozen tests and as far
as I can determine it does **not** work (v1.2). You should only use
relative_build_scheme = **yes** . - Mithel

    # bomber is now obsolete and NOT USED AT ALL replace and use Air Marshal instead air_marshal = {  icxdayscostfactor = 10.0        # How to value true industrial cost when calculating expect causalties  manpowercostfactor = 100.0      # How to value manpower cost when calculating expect causalties     destructionriskthreashold = 0.2     # when to fear a divisiopn might be destroyed   airsuperioritydesirability = 10.0   # desirability is a multiplier used when calcualting the mission desirability   airsuperioritylosstolerance = 1.0   # tolerance is the required kill:loss ration expected to do mission, 2.0 accept twice the losses of your enemy, 0.5 accept half     groundattacklosstolerance = 1.0     groundattackdesirability = 1.0  interdictionlosstolerance = 1.5     inderdictiondesirability = 1.0  logisticalstrikelosstolerance = 4.5     logisticalstrikeefficency = 0.01    # efficency is a tweakable param to adjust according to how much actual damage comes from doing this mission (not to be confused with desirability)     logisticalstrikedesirability = 100000.0     runwaycrateringlosstolerance = 1.5  runwaycrateringefficency = 0.01     runwaycrateringdesirability = 20000.0   strategicstriketolerance = 4.5  strategicstrikeefficency = 0.01     strategicstrikedesirability = 1000000.0     installationstriketolerance = 1.5   installationstrikeefficency = 0.01  installationstrikedesirability = 10.0   navalstriketolerance = 1.0  navalstrikedesirability = 10.0  portstriketolerance = 1.0   portstrikedesirability = 9.0

Placeholder

      # You can have any number of task forces, but if you add one you must add ALL the kinds you want    # as then the defaults aren't set.      # The defaults currently are:   taskforcetype = {       name = "Air Superiority" # Name can be anything and is only used to ease debugging              desiredratio = 0.400 # What ratio taskforces of this type should a nation try to form?                      rangeweight = 10.000 # How important the range for an air divisions in this taskforce-type?         airkillpowerweight = 2000.000 # How important is an air divisions ability to kill air in this taskforce-type?       hardkillpowerweight = 0.000         softkillpowerweight = 0.000         navalkillpowerweight = 0.000        strategickillpowerweight = 0.000                transportcapacityweight = -1000000.000 # A huge negative number here keeps transports out of this taskforce-type                airvulnurabilityweight = -1.000 # How bad is being vulnurable to enemy air (vulnurable is a mix of cost and defence value)      surfacevulnurabilityweight = 0.000              # What AI missions should this task force consider?         # Idle is the "mission" the AI is on when doing nothing,        # Reorganize is the "mission" the AI is on when trying to reform its        # air OOB to be more optimal. The other missions listed here correspond         # to the standard tactical missions AND a rebase to the best airbase.               # Possible missions are:                    idle = yes      reorganize = yes        air_superiority = yes       #Others not supported by the "Air Superiority" default taskforce type       #interdiction       #ground_attack      #logistical_strike      #runway_cratering       #strategic_bombardment      #installation_strike        #naval_strike       #port_strike        #convoy_air_raiding         #airborne_assault       #air_supply     }       # the other defaults taskforcetype = { name = "Soft Bombing" desiredratio = 0.200 rangeweight = 10.000 airkillpowerweight = 0.000 hardkillpowerweight = 0.000 softkillpowerweight = 2000.000 navalkillpowerweight = 0.000 strategickillpowerweight = 0.000 transportcapacityweight = - 1000000.000 airvulnurabilityweight = 0.000 surfacevulnurabilityweight = -1.000 idle = yes reorganize = yes interdiction = yes ground_attack = yes } taskforcetype = { name = "Hard Bombing" desiredratio = 0.100 rangeweight = 10.000 airkillpowerweight = 0.000 hardkillpowerweight = 2000.000 softkillpowerweight = 0.000 navalkillpowerweight = 0.000 strategickillpowerweight = 0.000 transportcapacityweight = - 1000000.000 airvulnurabilityweight = 0.000 surfacevulnurabilityweight = -1.000 idle = yes reorganize = yes interdiction = yes ground_attack = yes } taskforcetype = { name = "Strategic Bombing" desiredratio = 0.100 rangeweight = 10.000 airkillpowerweight = 0.000 hardkillpowerweight = 0.000 softkillpowerweight = 0.000 navalkillpowerweight = 0.000 strategickillpowerweight = 2000.000 transportcapacityweight = - 1000000.000 airvulnurabilityweight = -0.500 surfacevulnurabilityweight = -0.500 idle = yes reorganize = yes logistical_strike = yes runway_cratering = yes strategic_bombardment = yes installation_strike = yes } taskforcetype = { name = "Naval Bombing" desiredratio = 0.100 rangeweight = 10.000 airkillpowerweight = 0.000 hardkillpowerweight = 0.000 softkillpowerweight = 0.000 navalkillpowerweight = 2000.000 strategickillpowerweight = 0.000 transportcapacityweight = - 1000000.000 airvulnurabilityweight = 0.000 surfacevulnurabilityweight = -1.000 idle = yes reorganize = yes naval_strike = yes port_strike = yes convoy_air_raiding = yes } taskforcetype = { name = "Airlift" desiredratio = 0.100 rangeweight = 10.000 airkillpowerweight = 0.000 hardkillpowerweight = -2000.000 softkillpowerweight = -2000.000 navalkillpowerweight = 0.000 strategickillpowerweight = -2000.000 transportcapacityweight = 1000000.000 airvulnurabilityweight = -1.000 surfacevulnurabilityweight = 0.000 idle = yes reorganize = yes airborne_assault = yes air_supply = yes } }

Placeholder

\

    #The number of leaders of a given type is equal to the number of units multiplied with the leader_rartio. #For example if you have 101 land units and land_field_marsal = 0.02 you will have two field marshals. #For example if you have 101 sea units and sea_admiral = 0.06 you will have six admirals. leader_ratio = {     land_field_marshal =0.02    land_general =0.031     land_lt_general =0.41   sea_grand_admiral =0.02     sea_admiral =0.061  sea_vice_admiral =0.401     air_marshal =0.02   air_general =0.091  air_lt_General =0.11 }

Placeholder

    #Factors regarding amphibious invasions by ai. invasion = {     #for evaluating specific province target.   base = 1.0                      # Relative modifier. (lower = specific targets much more important.)    random = 1.0                    # How big a random range. (1.0 = 1%)    coastal = 1.0 # increase to avoid coastal forts more.   beach = 1.0 # higher, avoid worst beaches.  distance = 1.0 # higher = avoid long distance.  max_distance = 20.0     # ignore distances at higher distance than this.. 1 = 100km ingame.     pocket = 1.0 # prioritise pockets, ie provinces with no adjacent controlled by same.    island = 1.0 # prioritise taking pure islands.  enemy = 1.0 # higher = much more wary of troops in province.    adjacentenemy = 1.0 # higher = much more wary of troops nearby  air_base    = 0.1           # add this priority for air bases within adjacentenemy  naval_base  = 0.1               # add this priority for naval bases within adjacentenemy    air_support = 0.1           # add this priority for beaches within reach of air_bases   ignore = [yes/no]               # Launch invasions even if we have a home front. Default: no.   redirect     = priority/nearest/home # priority refers to targets in the AI file,                                       # nearest is the closest enemy beach where the AI has                                       # good attack odds and home is to return back to port   #specific provinces can be targetted to get special bonuses..   target = {      898 = 1000 # Invasion of South Sicily (898) has super high priority. Negative values preclude invasions there.  } }

Placeholder

    #Factors controlling the naval AI admiral = {  #specific provinces can be targetted to get special bonuses..   target = {      592 = 200 # patrolling the south north sea have a big priority.         ...     }   #This is used to determine that it's a core seazone and its control is important.   core = {        592         ...     }       #Which provinces to use as bases..  base = {        592         ...     }       #Which areas to ignore.     ignore = {      #PLEASE NOTE THAT ITS AREAS.. Not province-names        "northern baltic"       "southern baltic"   }   min_org     = 95%   # NEW: Percent of org gained back before the unit can leave port    min_dmg     = 95% # NEW: Percent of dmg gained back before the unit can leave port  return_org  = 60%   # NEW: PERCENT OF ORG LOST BEFORE RETURNING TO PORT applies to all fleets/ships     return_dmg  = 50%   # NEW: PERCENT OF DMG LOST BEFORE RETURNING TO PORT for repairs applies to all fleets/ships }

Placeholder

    # Factors to modify for technological development. technology = {    endgoal = { ... }           #list of endgoals to achieve.   preference = { ... }        # list of techs to give bonus too.  ignore = { ... }            # Techs we will never research  #preference to weight importance of research in these field.s   armor = 2.0     infantry = 3.0  industry = 2.5  aircraft = 0.6  naval = 0.1     land_doctrines = 4.0    air_doctrines = 0.9     naval_doctrines = 0.1   secret_weapons = 0.4 }

Placeholder

    # Factors to modify Trade Agreements. trade = {     favored = {         TAG = X     # Preferred Countries to trade resources with.  }   embargo = {         TAG         # Will not trade resources with these countries.    }       # A threshold for when the AI should cancel trade agreements. Default is 4.0. A lower value means the AI will be more eager to cancel bad deals.    cancel_deal_threshold = X           # These override the resource values in "db\resource_values.csv" for this AI unless set to -1 (default.)    energy =            -1  rare_materials =    -1  metal =             -1  oil =               -1  supplies =          -1  money =             -1 }

Placeholder

    # Factors to modify Tech Sharing tech_sharing = {     favored = {         TAG = X     # Preferred Countries to trade techs with. Higher value also means better techs.        ...     }   embargo = {         TAG         # Will not trade techs with these countries.        ...     }   not = {         ID      # List of techs never to trade.         ...     }   prioritized         ID = X  # Priority to accepting trades with these techs.        ...     } }

Placeholder

## [ Default AI Settings ]{#Default_AI_Settings .mw-headline}

In case you ommit something the AI will use default settings. The
contents below were prepared by supplying an empty .ai file for a
selected country and saving the game on the very first hour of 1936 GC
in **HOI2:DD+Arm 1.1** . This is also a good reference for the proper
structure of an ai file. Bear in mind that the result is not complete as
some variables and lists are ommited by the game if they have their
default value or are empty, so I have added them manually and marked
that by using italics.

I hope this will help you as the ai_file_doc.txt (and the notes above)
are outdated and contain some spelling and number format errors (like
sp_rct_artillery/sp_rocket_artillery). On the other hand we can be sure
that all the game writes is 100% correct.

    switch = no flags = { } max_front_ratio = 4.0000 max_front_ratios = { } max_garrison_prop = 0.2000 min_garrison_prop = 0.1000 evac_islands = yes use_offensive_supply = yes neutrality = 0.0000 war = 50 ferocity = no reinforcement = 0.1000 upgrading = 0.1000 desperation = 0.3000 spyprefs = { percentage_on_spies = 0.0000 percentage_foreign_mission = 0.0000 spyprefsdata = { country_priorities = 0.0000 NumberOfSpies = 0.0000 min_number_of_spies = 0.0000 steal_blueprint = 0.0000 minister_assassination = 0.0000 smear_campaign = 0.0000 coup = 0.0000 sabotage_industry = 0.0000 nuclear_sabotage = 0.0000 found_partisans = 0.0000 massmedia = 0.0000 counter_espionage = 0.0000 disrupt_techteam = 0.0000 country = NONE } } strat_redeploy_threshold = 5 max_redeploying = 0.2500 max_fuel_offensive = 100.0000 combat = { } resistance = { } protect = { } befriend = { } demand_claims = { } claim_acceptance = 0 liberate = { } target = { } exp_force_ratio = 0.6600 exp_force_ratios = { } no_exp_forces_to = { } admiral = { target = { } core = { } base = { } ignore = { } min_org = 100.0000 min_dmg = 100.0000 return_org = 25.0000 return_dmg = 25.0000 min_core_attack_fleets = 0.0000 } trade = { embargo = { } favored = { } cancel_deal_threshold = 4.0000 oil = -1 energy = -1 metal = -1 rare_materials = -1 money = -1 supplies = -1 } tech_sharing = { embargo = { } favored = { } prioritized = { } not = { } } invasion = { base = 1.0000 random = 1.0000 coastal = 1.0000 beach = 1.0000 distance = 1.0000 max_distance = 99999.0000 max_staging_distance = 10.0000 pocket = 1.0000 island = 1.0000 enemy = 1.0000 adjacentenemy = 1.0000 air_base = 0.1000 naval_base = 0.1000 air_support = 0.1000 ignore = no invasion = yes help_allies = yes redirect = nearest target = { } } air_marshal = { icxdayscostfactor = 10.0000 manpowercostfactor = 100.0000 destructionriskthreashold = 0.2000 airsuperioritydesirability = 3.0000 airsuperioritylosstolerance = 0.8000 groundattacklosstolerance = 1.0000 groundattackdesirability = 2.0000 interdictionlosstolerance = 1.5000 inderdictiondesirability = 1.0000 logisticalstrikelosstolerance = 1.5000 logisticalstrikeefficency = 0.0100 logisticalstrikedesirability = 4.0000 runwaycrateringlosstolerance = 1.0000 runwaycrateringefficency = 0.0100 runwaycrateringdesirability = 1.0000 strategicstriketolerance = 1.0000 strategicstrikeefficency = 0.0100 strategicstrikedesirability = 5.0000 nukestriketolerance = 1.0000 nukestrikedesirability = 5.0000 installationstriketolerance = 1.0000 installationstrikeefficency = 0.0100 installationstrikedesirability = 1.0000 navalstriketolerance = 1.0000 navalstrikedesirability = 10.0000 portstriketolerance = 1.0000 portstrikedesirability = 9.0000 convoyraidtolerance = 1.0000 convoyraiddesirability = 0.0000 min_mission_strength_org = 0.5000 taskforcetype = { name = "Air Superiority" desiredratio = 0.4000 rangeweight = 10.0000 airkillpowerweight = 2000.0000 hardkillpowerweight = 0.0000 softkillpowerweight = 0.0000 navalkillpowerweight = 0.0000 strategickillpowerweight = 0.0000 transportcapacityweight = -1000000.0000 airvulnurabilityweight = -1.0000 surfacevulnurabilityweight = 0.0000 idle = yes reorganize = yes air_superiority = yes } taskforcetype = { name = "Soft Bombing" desiredratio = 0.2000 rangeweight = 10.0000 airkillpowerweight = 0.0000 hardkillpowerweight = 0.0000 softkillpowerweight = 2000.0000 navalkillpowerweight = 0.0000 strategickillpowerweight = 0.0000 transportcapacityweight = -1000000.0000 airvulnurabilityweight = 0.0000 surfacevulnurabilityweight = -1.0000 idle = yes reorganize = yes interdiction = yes ground_attack = yes } taskforcetype = { name = "Hard Bombing" desiredratio = 0.1000 rangeweight = 10.0000 airkillpowerweight = 0.0000 hardkillpowerweight = 2000.0000 softkillpowerweight = 0.0000 navalkillpowerweight = 0.0000 strategickillpowerweight = 0.0000 transportcapacityweight = -1000000.0000 airvulnurabilityweight = 0.0000 surfacevulnurabilityweight = -1.0000 idle = yes reorganize = yes interdiction = yes ground_attack = yes } taskforcetype = { name = "Strategic Bombing" desiredratio = 0.1000 rangeweight = 10.0000 airkillpowerweight = 0.0000 hardkillpowerweight = 0.0000 softkillpowerweight = 0.0000 navalkillpowerweight = 0.0000 strategickillpowerweight = 2000.0000 transportcapacityweight = -1000000.0000 airvulnurabilityweight = -0.5000 surfacevulnurabilityweight = -0.5000 idle = yes reorganize = yes logistical_strike = yes runway_cratering = yes strategic_bombardment = yes installation_strike = yes } taskforcetype = { name = "Naval Bombing" desiredratio = 0.1000 rangeweight = 10.0000 airkillpowerweight = 0.0000 hardkillpowerweight = 0.0000 softkillpowerweight = 0.0000 navalkillpowerweight = 2000.0000 strategickillpowerweight = 0.0000 transportcapacityweight = -1000000.0000 airvulnurabilityweight = 0.0000 surfacevulnurabilityweight = -1.0000 idle = yes reorganize = yes naval_strike = yes port_strike = yes convoy_air_raiding = yes } taskforcetype = { name = "Airlift" desiredratio = 0.1000 rangeweight = 10.0000 airkillpowerweight = 0.0000 hardkillpowerweight = -2000.0000 softkillpowerweight = -2000.0000 navalkillpowerweight = 0.0000 strategickillpowerweight = -2000.0000 transportcapacityweight = 1000000.0000 airvulnurabilityweight = -1.0000 surfacevulnurabilityweight = 0.0000 idle = yes reorganize = yes airborne_assault = yes air_supply = yes } } garrison = { defend_overseas_beaches = no key_point_prio_mult = 0.0000 revolt_risk_mult = 0.0000 beach = 50 reserves = 20 capital = 100 human_border = 200 war_target = 100 opposing_alliance = 100 claim_threat = 100 unstable_border = 50 war_zone_odds = 2.0000 home_multiplier = 0.5000 overseas_multiplier = 0.3333 home_peace_cap = 10000 country_priorities = { } province_priorities = { } area_multiplier = { } ignore = { } } military = { relative_build_scheme = yes max_batch_peace = 800 max_batch_war = 500 max_batch_home_front = 190 extra_convoys_war = 0.0500 extra_convoys_peace = 0.0500 infantry = 30.0000 cavalry = 5.0000 motorized = 10.0000 mechanized = 5.0000 light_armor = 0.0000 armor = 10.0000 paratrooper = 0.0000 marine = 0.0000 bergsjaeger = 0.0000 garrison = 0.0000 hq = 0.0000 militia = 0.0000 multi_role = 7.0000 interceptor = 10.0000 strategic_bomber = 0.0000 tactical_bomber = 2.0000 naval_bomber = 0.0000 cas = 0.0000 transport_plane = 0.0000 flying_bomb = 0.0000 flying_rocket = 0.0000 battleship = 0.0000 light_cruiser = 2.0000 heavy_cruiser = 0.0000 battlecruiser = 0.0000 destroyer = 5.0000 carrier = 0.0000 escort_carrier = 0.0000 submarine = 5.0000 nuclear_submarine = 0.0000 transport = 8.0000 artillery = 15.0000 sp_artillery = 5.0000 rocket_artillery = 0.0000 sp_rct_artillery = 2.0000 anti_tank = 3.0000 tank_destroyer = 5.0000 light_armor_brigade = 0.0000 heavy_armor = 0.0000 super_heavy_armor = 0.0000 armored_car = 0.0000 anti_air = 5.0000 police = 0.0000 engineer = 5.0000 cag = 100.0000 escort = 100.0000 naval_asw = 20.0000 naval_anti_air_s = 20.0000 naval_radar_s = 20.0000 naval_fire_controll_s = 20.0000 naval_improved_hull_s = 10.0000 naval_torpedoes_s = 10.0000 naval_anti_air_l = 0.0000 naval_radar_l = 0.0000 naval_fire_controll_l = 0.0000 naval_improved_hull_l = 0.0000 naval_torpedoes_l = 0.0000 } front = { strength = 1.0000 organisation = 1.0000 dig_in = 1.0000 soft_attack = 1.0000 hard_attack = 1.0000 ground_defense = 1.0000 support_defense_prop = 0.3300 river = 1.0000 frozen_attack = 1.0000 snow_attack = 1.0000 blizzard_attack = 1.0000 storm_attack = 1.0000 muddy_attack = 1.0000 largefort = 1.0000 smallfort = 1.0000 occupied = 0.8000 owned = 0.5000 jungle_attack = 1.0000 mountain_attack = 1.0000 swamp_attack = 1.0000 forest_attack = 1.0000 hill_attack = 1.0000 urban_attack = 1.0000 recklessness = 1 enemy_reinf_days = 6 reserve_prop = 0.2000 panic_ratio_vs_ai = 3.0000 panic_ratio_vs_human = 2.0000 base_attack_odds = 2.5000 min_attack_odds = 1.0000 max_attack_odds = 3.0000 reinforce_odds = 1.0000 withdraw_odds = 0.5000 distrib_vs_ai = op_defensive distrib_vs_human = op_defensive enemy_handicap = { } passivity = { } province_priorities = { } } construction = { max_factor = 0.2000 transports = -1 escorts = -1 AA_batteries = no max_AA_level = 10 AA_provs = { } coastal_fort = no max_coastal_level = 5 coastal_fort_provs = { } radar_station = no max_radar = 5 radar_provs = { } air_base = no max_air_base = 5 air_base_provs = { } naval_base = no max_naval_base = 5 naval_base_provs = { } land_fort = no max_land_level = 5 fort_borders = { } fort_provs = { } nuclear_reactor = no max_nuclear = 10 nuclear_reactor_prov = -1 rocket_test = no max_rocket = 10 rocket_test_prov = -1 ic_at_war = yes force_ic_until = 1900 ic_end_year = 1946 IC_provs = { } } technology = { endgoal = { } preference = { } ignore = { } armor = 1.0000 infantry = 1.0000 industry = 1.0000 aircraft = 1.0000 naval = 1.0000 land_doctrines = 1.0000 secret_weapons = 1.0000 air_doctrines = 1.0000 naval_doctrines = 1.0000 } leader_ratio = { land_field_marshal = 0.0300 land_general = 0.0500 land_lt_general = 0.2000 sea_grand_admiral = 0.0300 sea_admiral = 0.0500 sea_vice_admiral = 0.2000 air_marshal = 0.0300 air_general = 0.0500 air_lt_General = 0.2000 }

I have reformatted the taskforcetype and spyprefs sections so they would
fit nicely on the screen. Also, the spyprefsdata sections are of course
not needed at all if you don\'t plan to tell the AI how to use it\'s
spies but I have listed it here so you could see the proper order of
variables etc. Note: don\'t use the home_defence switch, it seems that
it\'s not working (the section is not stored back into the savegame
file).
:::
