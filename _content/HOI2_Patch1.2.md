---
title: HOI2_Patch1.2
---
## Contents

-   [ 1 New Features ](#New_Features)
-   [ 2 Interface Enhancements ](#Interface_Enhancements)
    -   [ 2.1 Enhanced Interface ](#Enhanced_Interface)
    -   [ 2.2 Increased Information ](#Increased_Information)
    -   [ 2.3 Cheats ](#Cheats)
-   [ 3 Gameplay Balancing ](#Gameplay_Balancing)
    -   [ 3.1 Diplomatic ](#Diplomatic)
    -   [ 3.2 Common Military ](#Common_Military)
    -   [ 3.3 Land ](#Land)
    -   [ 3.4 Naval ](#Naval)
    -   [ 3.5 Air ](#Air)
    -   [ 3.6 Economical ](#Economical)
    -   [ 3.7 Convoys ](#Convoys)
-   [ 4 AI Improvements ](#AI_Improvements)
    -   [ 4.1 Misc ](#Misc)
    -   [ 4.2 Diplomatic AI ](#Diplomatic_AI)
    -   [ 4.3 Construction AI ](#Construction_AI)
    -   [ 4.4 Land AI ](#Land_AI)
    -   [ 4.5 Naval AI ](#Naval_AI)
    -   [ 4.6 Research AI ](#Research_AI)
-   [ 5 Modding Support ](#Modding_Support)
-   [ 6 Multiplayer Specific ](#Multiplayer_Specific)
-   [ 7 Bugfixes ](#Bugfixes)
-   [ 8 Events ](#Events)
-   [ 9 Scenario Setup ](#Scenario_Setup)
    -   [ 9.1 General ](#General)
    -   [ 9.2 Areas ](#Areas)
    -   [ 9.3 Terrains ](#Terrains)
    -   [ 9.4 Manpower ](#Manpower)
    -   [ 9.5 Connections ](#Connections)
    -   [ 9.6 Resources ](#Resources)
    -   [ 9.7 Misc. ](#Misc.)
    -   [ 9.8 1936: ](#1936:)
    -   [ 9.9 1939: ](#1939:)
    -   [ 9.10 1941: ](#1941:)
    -   [ 9.11 1944: ](#1944:)

##  New Features 

-   Implemented a new battlescenario for the 'Fall Blau' campaign.
-   Added a new campaign, starting in 1938 before the Munich agreement.
-   Added a large amount of more pictures to the game.
-   Added ministers, leaders & techteams to almost every nation.

##  Interface Enhancements 

###  Enhanced Interface 

-   Shift & ctrl-clicking now works fine on the negotiation screen as
    well.
-   Shift & ctrl-clicking now works fine on the production sliders as
    well.
-   You now get the option to "select" the unit of a leader that has
    just died.

###  Increased Information 

-   You can now always see what your allies and puppets are researching
    when clicking on one of their provinces.
-   It is now possible to see chances of couping, inviting to alliances
    and other such thing in the interface.
-   The current gearing bonus and max is now shown as a tooltip of a
    production run.
-   Added some fun little tooltips to the country-listing on the
    diplomatic screen.
-   Clarified the merge tooltip for airunits.
-   Added a screens/capitals tooltip to the naval unit selected
    interface.
-   Game now keeps tracks of which nations aircrafts have sunk a certain
    ship.
-   Separated the invasion beach penalty and the invasion stacking limit
    tooltip.
-   You can now see available and base IC of another nation.
-   You can now see brigades at the combat details screen.
-   Double-difficulty is now shown on tech-projects.
-   Divisions in strategic-redeploy now show up in the ledger screens.
-   You can now only see radar, rocket and nuclear sites in provinces
    that are not covered by FoW.
-   Changed the order of ships to be in the same order in tooltips and
    the ledger as when they are selected.

###  Cheats 

-   Added a "viewtech" cheatcode.
-   Changed some cheatcodes "rubber"-\>"rare",
    "robespierre"-\>"freedom", "neville"-\>"acceptall"

##  Gameplay Balancing 

###  Diplomatic 

-   Removed the hard-coded end of the game whenever two major alliances
    are gone.
-   The peacetime alliance leader is now always the alliance leader in a
    war, no matter who is attacked.
-   Ideology now affects trade-agreements/negotiations a bit more.
-   Favored stats now affects negotiations the same as trade agreements.
-   The probability to influence another nations sliders affects BASE ic
    instead of current modified one now.
-   Puppets will now leave their alliances if their master does
    automatically.
-   All on the attacking side should now get belligerence according when
    they declare war.
-   A puppet now have exactly the same beliggerence as its master.
-   Relations now affect trade-agreements much more.

###  Common Military 

-   Only leaders actually in combat or getting bombed will now have a
    chance to die.
-   Air and naval units now take 1% of regular fuel consumption when at
    bases and port to simulate practices and maintenance.
-   Autopromoted leaders no longer lose skill.
-   Tweaked org loss from lack of supplies.

###  Land 

-   Units will no longer auto-redeploy out of territory you just
    puppeted.
-   Airplanes over neutrally-occupied territory will no longer
    automatically redeploy back to capital.
-   A division after finishing a naval transport, arrives with 1/2 its
    organization.
-   An unloading unit can no longer move out that province immediately.
    They get the same delay as from an attack.
-   Removed the duplicate penalty on fuel-based units in bad terrain.
-   Tweaked landcombat to be slightly slower now.
-   Digged-in units now take a LOT less damage from ground-attacks.
-   Only landunits get affected by HQ's for ESE purposes now.
-   Engineer leader trait now gives 20% when crossing a river instead of
    30%.
-   Limited the synching option for attacks scheduled to start later as
    that is not supported.
-   Manpower lost through attrition now trickles back in same ratio as
    manpower lost to combat.
-   Fuelcosts for offensives are now the same, no longer depending on
    the unit moving or not.

###  Naval 

-   Navalcombat now have a minimum length of 4 hours again.
-   Ships now only repair in navalbases.
-   Navalunits more likely to retreat towards navalbases now.
-   Changed default from 20% to 50% for stop for naval-missions.
-   It is now possible to give flee orders to ships out of range.
-   Reduced a probability for submarines to evade being hit if out of
    range in a navalcombat.

###  Air 

-   Tweaked airplane targettting code in bombing missions, more likely
    to focus damage now.
-   Changed default from 20% to 50% for stop for air-missions.

###  Economical 

-   Peacetime modifier now affects resource gain.
-   Moved around some minister modifiers for Chief of Air.
-   Reinforcements now only use fractions of IC if they only need a
    fraction.
-   The Professional Army slider now affects upgrade cost. Drafted
    armies cost alot more to upgrade now.
-   Upgrade IC needed is now reduced immediately the day a unit has
    finished upgrading.
-   Reinforcement IC needed is now reduced immediately the day a unit
    has finished reinforcing.
-   Techteams lost cause of losing territory can now be used for other
    things and are not permanently stuck.
-   Tweaked the techresearch formula to allow greater impacts from
    research modifiers.
-   Researchcosts are now always recalculated immediately whenever a
    team is changed or a project started.
-   Increased effect from energy to oil conversion.
-   Conversion cap for oil-conversion can now be above 100% and still
    use all IC.
-   Fixed a loophole that allowed you to exploit a 0-supplies
    production.

###  Convoys 

-   Fleets on convoy raiding missions will no longer join other combats
    unless spotted.
-   Convoys are now automatically rerouted when attacked.
-   Changed the huge ASW spotting bonus on convoy raiders to only be
    when a raider has spotted a convoy.. Not when they had TRIED to spot
    a convoy.
-   Increased likelihood of submarines spotting convoys by 20%.
-   Slightly reduced the chance to detect convoy raiders immedialtely
    after hitting.
-   Trade Efficiency attempts to go through allies over land if possible
    now.
-   Revise TA efficiency calculations to focus more on blockades than
    actual wartime status.
-   Convoy raiders are now much better at escaping from ASW'ers the
    bigger the ASW'er's TF is compared to the convoyraiders.
-   Convoy paths are now reset if path is no longer accessible.
-   Technology & Units.
-   Rebalanced all techteams to create more choices.
-   For consistency reasons Basic Cav is now a prereq for researching SM
    Cav
-   Changed historical dates for certain naval secret weapons.
-   Upgraded Armored-Cars a tad bit.
-   Imp SP Art now scraps Early SP Art not Light Tank
-   Added missing fuelconsumption to Armored Cavalry model
-   Fixed problem that surface defense values had been switched between
    NAV and STR.

##  AI Improvements 

###  Misc 

-   Added more AI files for various countries and situations, including
    quite a bit more reactive systems.
-   Improved AI's management of leaders.

###  Diplomatic AI 

-   AI embargo settings now pretty much makes them demand a 20-1 cost
    for trading with you if you are on their embargo list.
-   Improved AI for trade-agreement negotiations.
-   AI is now more acceptable to giving blueprints to its allies when
    asked.
-   Vichy will now become non-neutral if somone attacks them.
-   Sweden is now much more neutral, and that only changes if they get
    involved in the winter war.
-   A large set of AI files and events now kick in if Soviets are the
    agressors instead of the Germans.
-   Revised Chinese theater diplomatic preferences-AI.
-   Rewrote AI logics of determening to go to war with a puppet to use
    evaluation for a puppets master instead of the puppet itself.
-   The USA, UK and France will be less interventionistic once Germany
    surrenders.
-   Improved trade preferences.
-   Revised neutrality ratings for several european nations.
-   Added more AI-logics for when to send expeditionary forces to help
    other AI's when in the same war.
-   Japan learned that declaring wars directly on Philippines is a bad
    idea.
-   Germany may now dislike potential enemies with fleets in the baltic.

###  Construction AI 

-   Recoded logics for supply-sliders to estimate need better.
-   The AI learned to not build bigger than max-batches of a building
    type.
-   AI will no longer consider to build AA in a province with 10 aa
    already.
-   Revised every AI preference for which brigades to build
-   Improved port-building AI.
-   Improved general building AI priorities severely for most nations.
-   Improved the absolute buildscheme to work more as desired by
    scripters.

###  Land AI 

-   Severe tweaks of the german/soviet land AI for the eastern-front
    war, with enhanced ai files and switches. Germany will avoid going
    on offensives in winter, while soviet tries to stall during german
    spring offensives the first years. There are also soviet counter
    offensives.
-   Soviet will protect the following cities more if the front hits them
    Leningrad, Kiev, Dnepropetrovsk, Stalingrad, Kharkov, Bryansk,
    Vladivostock, Murmansk, Sevastopool, Rostov, Smolensk, Moscow and
    Kursk
-   ALL Front AI Terrain and Weather modifier changed to 1.0 (AI Pulls
    it from the terrain itself to calculate exact odds making them
    obsolete).
-   Front odds-calculations now take proper values for rivers into
    account.
-   Improved AI's handling of determening whether a unit goes to
    garrison or front duty.
-   Helped the front odds evaluation AI to understand that a unit with
    ONE bad division is not an entirely crappy army.
-   Improved the management of the Maginot line for French and German
    AI's.
-   Both Japan and the Chinese nations have had lots of improvements to
    their AI's in their main war.
-   Improved AI's handling of garrisons.
-   Lots of tweaks to all combat sections of the AI's.

###  Naval AI 

-   The AI learned how to move fleets out of occupied ports even when at
    peace
-   Japan now attemps invasions at longer distances if possible.
-   Improved US D-day Ai.
-   UK may attack Norway if Germany does not garrison it.
-   GER Sealion AI should now be better at launching invasions into
    England.
-   Enhanced UK's targetting for invasions to adopt to various postures
    better.
-   Tweaked invasion staging and targetting algoritms.

###  Research AI 

-   Commonwealth nations will no longer focus on advanced research for
    special forces, improving the quality of the forces they use.
-   Originally landlocked nations will no longer spend anything on
    researching naval technologies.
-   Tweaked almost every nations technology research preferences.

##  Modding Support 

-   Fixed a mod-dir bug with saving games.
-   Added an event-command to change the offmap IC. 'free_ic'.
-   Expanded the divison-type triggers to allow this syntax as well.  
    \[div type\] = { country = TAG value = X } \# country TAG has X or
    more of that type of division
-   Expanded the technology trigger to allow this syntax as well.  
    technology = { country = TAG value = x } \# True if a certain tech
    is known by the given country.
-   Implemented support for model-based sprites.
-   Enabled the wakeleader command.
-   Added a system for scripted trade-deals that will not be cancelled
    if both nations are AI and not at war with each other.

##  Multiplayer Specific 

-   Expanded checksum checks to make sure more files are properly
    synced.
-   Revised logics for checksum on files for MP.
-   Password for vnet games are no longer case-sensitive.
-   Fixed a multiplayer sync problem with trade agreements and
    non-agression pacts.
-   The (!) indicator now works for clients as well.
-   Fixed a few bugs with the network protocol and joining the game.

##  Bugfixes 

-   All currently reported crashbugs have been tracked down and fixed.
-   Fixed a problem where serial production in provinces get all
    deployed at once.
-   Dormant divisions under military control are no longer automatically
    deployed.
-   Nukes are now properly saved.
-   Amphibious assaults will now cancel properly when the attackers
    retreat.
-   Militarycontrol is now cleared when you leave an alliance.
-   Fixed a major miscalculation when using multiple stacks to
    amphibious assault.
-   Fixed a problem with organisation being set to 0 when in occuppied
    territory and a new war is declared.
-   Fixed a problem which created multiple wars between the same
    nations.
-   Fixed a problem where leaving alliance and joining another would
    make a country return all occupied territories.
-   Fractional changes to unit buildcosts from techs now actually work.
-   Fixed a few problems with the offmap production stuff in
    non-battlescenarios.
-   Fixed a fun problem which made it possible to have a ship at
    multiple places.
-   Fixed a problem where strategically redeploying expeditionary forces
    lost track of who they belonged to.
-   Allied player nations in minor alliances will no longer auto-refuse
    when asked to another alliance in MP.
-   Fixed the sync of arrival estimation when having a garrison unit
    selected as well.
-   Infra is now also hurt when taking over provinces with less than 100
    infra.
-   Fixed the fun little exploit-loophole with convoys and puppets.
-   Fixed some reported speling errorrs and badd enlighs.
-   Fixed some calculation errors in the tooltips for effects on IC.
-   Fixed a mismatch in display of series end of a serial production due
    to low precision of floats.
-   Fixed a "\*100" display error in reinforcement tooltips.
-   Fixed a calculation display error on manpower needed for
    reinforcement.
-   Fixed a mismatch on manpower needs for reinforcements.
-   Fixed a disrepancy between detect count on map and in tooltip.
-   Correct modelnumber is now shown in statistics for brigades.
-   Fixed a broken connection in Siberia.
-   Fixed some seazone coordinate definitions in the Pacific.
-   Fuel-consuming units like armoured divisions no longer suffer from
    such severe movement penalties in badlands like the desert. They
    will now outpace infantry in such terrain and so can more
    effectively be used for deep thrusts, flanking moves and
    encirclements. To help fuel these units, the effectiveness of the
    oil conversion technologies has been improved so that the output of
    converted oil increases as the technology is developed.

##  Events 

-   Fixed missed ai chance for the USSR claim Bessarabia event
-   Fixed a few date errors in the GPW events.
-   USSR now leaves the Comintern in case of the Unholy Alliance so that
    it doesn't get reverted back to Comintern after reload
-   Fixed minister bug in event that installs Tiso in Slovakia
-   Fixed two missing SOV prov that should go to JAP and one FIN prov in
    the Bitter Peace event.
-   Failure to assassinate Hitler event now sleep Franz Halder
-   Fixed UK Defense Lobby in all GCs and for two important events
-   Fixed event error which made CRO become a puppet of itself.
-   Revised Fall of England event and added some US interventionism
    events.
-   The DDs for bases event tweaked
-   The DDs for bases event now give Britain some DDs
-   Added triggers to Soviet Moving of Industry events
-   US Lend-lease to UK events have been modified so that German
    occupation of parts of Britain does not benefit Germany.
-   Made some tweaks to SCW events
-   Changed a wrong command in the Treaty of Munich event
-   The Guarantee of Polish Independance will not trigger anymore if
    Germany does not exist or if POL is at war with (potential) Allies
-   Added a logical trigger to the BEL & HOL capital move events
-   Corrected two province ID triggers in the "Hess flees to UK" event
-   Event for West Germany added to grant good relations and access to
    the Western Powers.
-   Vichy events should make Marseilles Vichy owned correctly and GER
    will now guarentee VIC
-   Removed HUN,ROM,FIN from the event creating SOV satellites.
-   Fixed trigger problems regarding JAP involvement in Bitter Peace
    events
-   Fixed wrong ids in triggers for US event Oil Embargo against Japan
-   Japanese surprise is now doubled in duration
-   Implemented two events to simulate the peace between China and
    Guangxi
-   Removed two commands from japanese_fascist event
-   Operation Zet will no longer occur if Soviet and China is at war
-   Province Chiang Rai is now correctly ceded in the Japanese Pressure
    on Siam events
-   The extra USA IC in the Gearing Up event series is now properly
    added to a USA province, not an Asian one
-   Fixed US Defense Lobby in all GCs and for five important events
-   The dissent (-5) effect in US Election events has been changed to
    dissent (-2) effect.
-   US will not get Greenland/Iceland if allied with GER or SOV
-   Fixed Vice-President posistion in FDR dies event
-   Removed a double command from USA "Gearing up for War"
-   USA "Gearing up for War" event choice b no longer sleeps later
    "Gearing up for War" events
-   Removed a bunch of deathdates from leaders and exported them to
    random death events.
-   Revised, removed and edited some death events.
-   New election events for minor and major countries
-   New Reactive AI files

##  Scenario Setup 

###  General 

-   Made a complete revision of the possible revolters database.
-   Added event-files for revolters that gives some off-map resources &
    IC to revolter nations.
-   Added single-supply depots on US islands in all scenarios.
-   Corrected several unitnames that was wrong in various databases.
-   Added missing prerequisite techs in several battlescenarios.
-   Corrected CSA country colour.
-   Fixed CAN,AST,NZL,SAF Defense Lobby in all GCs
-   Corrected the land tech inconsistencies between YUG setups GC36 and
    GC39
-   Japanese resource deals are now set to non-cancel in 36/38/39/41.
-   The Liberian DD unit have been removed from GC36,GC39,GC41, and
    GC44.
-   Added a missing period in the Liberian Description Text.
-   Adjustment to CAG Costs in Build Queues for all GCs
-   Changed national provinces for CSX in GC36,C39,GC41
-   Tweaked Portuguese Convoy Pool in GC39 and GC44
-   Changed Professional Army bar for SOV in all GCs.
-   Changed BEL and HOL defense_lobby and interventionism sliders to
    more realistic levels in 36-39-41-44 (38 left to Hort)
-   Upgraded TUR and EIR when come to ICs and resources
-   Implemented the new setup and event series for Soviet military
    weaknesses before early 40's.
-   Italian Land Doctrine Path changed in all scenarios
-   Corrected missed techs in GC39, GC41
-   Purged Soviet generals are now dormant in all scenarios from 1938
    on, same for French Vichy-ists after 1940
-   Fixed tech inconsistencies for Yugoslavia in GC36 & GC39.
-   Fixed escort/convoy inconsistencies for Turkey in GC39 & GC44.
-   Soerabaia not Batavia is the largest NEI naval base in all relevant
    scenarios.
-   Added a few new ministers to a number of countries

###  Areas 

-   There are now two seperate Georgia areas
-   Attu Island is now considered a US national province in all GCs.
-   Fixed Santa Fe VP issue for all GCs
-   Turned Bahia Blanca into a major Argentine naval base in
    GC36,GC39,GC41,GC44, and Platinean War.

###  Terrains 

-   Moved glasgow port to the correct seazone.
-   Gave Kiska (Alaska) Hills terrain
-   Province 2357 changed to subtropical

###  Manpower 

-   There is no longer any manpower in the Dutch East Indies to simulate
    the incapability of recruitment there for the Dutch.
-   Toned down the provincial MP for capital provinces of Bhutan,
    Nepal,Yemen, and Oman.
-   Yemens manpower has been cut down to reasonable figures in all GCs.
-   Removed a bunch of US manpower from their 1936/1939/1941 pool and
    added it to events (gearing up, undeclared war, ...)

###  Connections 

-   Removed a land-connection between japan and soviet.
-   The connection between Copenhagen and Lübeck is now a river.

###  Resources 

-   Added some Rare ressources to Germany and Italy.

###  Misc. 

-   Brazil now have Great War Cavalry tech in Platinean War scenario
-   Modifications done to the tech setups of 15 battlescenarios

###  1936: 

-   UK starting MP in GC36 toned down considerable. Manpower is added
    with the gearing up event.
-   Removed two CHC national provinces in GC36
-   Removed two naval divisioons for Guangxi Clique (CGX) in GC 36.
-   Changed Australian Naval Bomber to tactical bomber in GC36, also
    removed nav bomber tech.
-   France more isolationist in GC36
-   Changed the name of a Austrian HQ div in GC36.
-   Removed redundant German convoy from GC36
-   More corrections to Aussie bomber unit in GC36.
-   Toned down the starting MP for CAN,AST,SAF,IRQ in GC36.
-   Fixed air-missions for China and Italy in 36.
-   Made two leaders dormant for CHI in GC36.
-   Revised Chinese OOB setup to strengthen warlords, and weaken central
    authority.
-   Fixed all 0 relations to 1 relations to init properly.
-   Fixed spelling errors in Italian shipnames in GC36/GC39.

###  1939: 

-   Changed the finish date form dec40 to dec39 for the GER Para in dev
    pool in GC39
-   Added Imp Nav Bomber (4200) and removed a navbomber from devpool for
    GER in GC39
-   Removed doublebooked Swedish cruiser in GC39.
-   Changed model on a stray escort fighter for Germany in GC39
-   Removed Early Airborne (1070) from ENG 1939
-   Fixed error with Kuwait belonging to Saudi-arabia in GC39.

###  1941: 

-   Tweaks to Swedish navy in GC41
-   Modified SOV/GER national provinces in GC41
-   Fixed a scripterror in Swedish OOB in GC41

###  1944: 

-   1944 USA Armaments Minister is now correctly Henry Morgenthau
-   USA in GC44 got may of their illegal artillery brigades upgraded to
    sp_artillery.
-   Tech setup correction in GC44
-   Changes to Japanese Secret Weapons in GC44
-   Changes made to US Nuclear Program in GC44
-   Corrected a Brazilian unit in Italy in GC44
-   V1/V2 Pool for Germany tweaked in GC44

**Special Note: The minister research bonus was not implemented with
this patch.**
