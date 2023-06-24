---
title: "Technical_issues"
---

## Contents

-   [ 1 Updates ](#Updates)
-   [ 2 Bugs and Bug Reporting ](#Bugs_and_Bug_Reporting)
-   [ 3 Configuring Routers for Multiplayer Games
    ](#Configuring_Routers_for_Multiplayer_Games)
-   [ 4 Screen Issues ](#Screen_Issues)
    -   [ 4.1 Screen Flicker ](#Screen_Flicker)
    -   [ 4.2 Screen Resolution ](#Screen_Resolution)
    -   [ 4.3 Windowed Mode ](#Windowed_Mode)
-   [ 5 Game Slow downs ](#Game_Slow_downs)
    -   [ 5.1 Helpful Fixes ](#Helpful_Fixes)
        -   [ 5.1.1 Sprites ](#Sprites)
        -   [ 5.1.2 Ghost Fleets ](#Ghost_Fleets)
        -   [ 5.1.3 Event History ](#Event_History)
        -   [ 5.1.4 Delete all units ](#Delete_all_units)
        -   [ 5.1.5 Movies ](#Movies)
-   [ 6 General problem Solving ](#General_problem_Solving)

##  Updates 

The following updates are the most recent updates released for the
Hearts of Iron II series (as of September 30, 2009):

-   Original Hearts of Iron 2 (HoI2): [Update 1.3b (Apr,
    2006)](https://forum.paradoxplaza.com/forum/index.php?threads/226786 "forum:226786")
    Checksum: JLQC
-   Hearts of Iron 2, Doomsday (HoI2:DD): [Update 1.3a (March,
    2007)](https://forum.paradoxplaza.com/forum/index.php?threads/293247 "forum:293247")
    Checksum: JCJS
-   Hearts of Iron 2, Armageddon (HoI2:ARMA): [Update 1.3 beta2 (April,
    2009)](https://forum.paradoxplaza.com/forum/index.php?threads/402220 "forum:402220")
    Checksum: PHVR

Note that Paradox has officially confirmed that HOI2 and HOI2:DD updates
are the final updates for those games. The last one for Arma was not
officially confirmed but given the time that has now passed, it can be
taken as final.

##  Bugs and Bug Reporting 

There are no further updates being made to any version of HoI2. Any
found bugs will need to be corrected yourself using the modding tools if
possible.

##  Configuring Routers for Multiplayer Games 

The first suggestion is to check the [Router configuration
library](https://forum.paradoxplaza.com/forum/index.php?threads/163998 "forum:163998")
, hosted at the Paradox forums. It covers all of Paradox's games, and is
a repository for **successful** router configurations.

If you are unsuccessful there, ask your questions in [this forum
thread](https://forum.paradoxplaza.com/forum/index.php?threads/187623 "forum:187623")
. Many experts that lurk about the forums subscribe to the threads
above, so your questions will be seen.

Even with v1.2 the "moddir" feature is still **broken** for multiplayer
play. Thus if you try and play a mod in multiplayer it will fail. The
only work around is to modify the main game itself.

##  Screen Issues 

###  Screen Flicker 

If you are experiencing screen flicker at seemingly random intervals
while playing the came, the following steps may be of use, as prescribed
by Castellon:

1.  Rename the AVI folder to AVI_back
2.  Set the color depth to 16BIT
3.  If you're using the auto-hide feature of the task bar, disable it.  
4.  If you have an Explorer window searching for a file or displaying
    search results, close it.
5.  Turn off everything in the background like E-mail/ICQ/Messenger,
    Virus protection and everything in the system tray beside the clock.
6.  Update your Windows, update your Video card drivers and audio card
    drivers. Then repeat steps 1-3.

**98% of flicker problems are caused by other programs running in the
background.**

Also, alt+tabbing tends to increase screen flicker.

[How to run Windows with minimal load of background
services](http://support.microsoft.com/?scid=kb;en-us;331796)

###  Screen Resolution 

According to developer Johan, the screen resolution for the game is
locked at 1024x768. There is [an unofficial
patch](http://www.geocities.jp/soukan_n/f/index.html) that can alter the
value, though. You can also take a look at [screen related
utilities](/Utilities#Screen_Related "Utilities") . If you have
difficulty playing HoI2 with the "offical" resolution, it might help you
solve the problem.

###  Windowed Mode 

If you want to play Hearts of Iron 2 in window, you must apply some
unofficial "patch" first. Look at [screen related
utilities](/Utilities#Screen_Related "Utilities") for concrete one. For
Doomsday, there is new command line parameter WINDOWED, which activated
windowed mode without need of any hacking. You must also set your screen
color depth to 16bit (applies to both Hearts of Iron 2 and Doomsday)
prior to running game in a window. If you don't do that, you'll get
error message and game won't run.

##  Game Slow downs 

The game gradually slows down as time progresses. This is especially
true of a 1936 campaign, and generally starts around 1942 or later,
depending on your CPU speed. Generally, this occurs due to the large
number of units that have been created, and the amount of work the AI
must perform every game hour to determine what should be done with
units. [Testing this
issue](https://forum.paradoxplaza.com/forum/index.php?threads/360988 "forum:360988")
has led to the conclusion that CPU speed has a significant effect on
game speed.

The Doomsday scenario is a good test for these slowdowns due to the
large number of units. Each test was conducted by choosing the nation of
Tibet, setting game speed to maximum, and timing how long it takes for
one month of game time to elapse. Testing produced the following
results:

|           |       |            |         |        |        |               |
|-----------|-------|------------|---------|--------|--------|---------------|
| User      | Brand | Type       | Speed   | Cache  | RAM    | Scenario time |
| Lennartos | Intel | Quad Core  | 3.7 Ghz | 12MB   | 4 GB   | 1 min, 25 s.  |
| SBR       | Intel | Core 2 Duo | 2.4 Ghz | 8MB    | 2 GB   | 2 min, 26 s.  |
| Bholstege | Intel | Core 2     | 3.0 Ghz | 1 MB   | 4 GB   | 2 min, 30 s.  |
| BBasgen   | AMD   | Athlon 64  | 2.2 Ghz | 0.5 MB | 2 GB   | 3 min, 28 s.  |
| forlath   | Intel | Pentium M  | 2.0 Ghz | 0.5 MB | 1 GB   | 3 min, 30 s.  |
| The RC    | Intel | Pentium 4  | 2.6 Ghz | 0.5 MB | 1.5 GB | 5 min, 50 s.  |
| MacLeod   | Intel | Pentium 4  | 2.4 Ghz | 0.5 MB | 1 GB   | 8 min, 18 s.  |
| forlath   | Intel | Pentium 4  | 3.4 Ghz | 0.5 MB | 1 GB   | 9 min, 30 s.  |

###  Helpful Fixes 

####  Sprites 

This change will allow you to both load and play the game much faster,
but it only works if you use counters instead of sprite. Note that the
file to be left alone in those folders do not have to be the one
mentioned. Any of the other files will do as long as their file name
match.

1.  Open HoI 2 directory\GFX\map\units.
2.  Backup this folder and its subfolder just in case you want to play
    with sprite again later or if anything wrong happens.
3.  Delete all files in HoI 2 directory\GFX\map\units except
    "T-BATTLESHIP A-WALK C-MIN L-1 D-NW.spr".
4.  Open HoI 2 directory\GFX\map\units\bmp.
5.  Delete all files in HoI 2 directory\GFX\map\units\bmp except
    "T-BATTLESHIP A-WALK C-MIN L-1 D-NW.bmp".
6.  Start the game and feel the speed.

####  Ghost Fleets 

Ghost fleets began as a problem in the HOI2 DD expansion pack and
continued until ARMA version 1.3, when the problem was finally fixed.
The net result of a Ghost fleet can be tens of thousands of non-existent
ships in a port. The sheer number of units involved creates enormous lag
on the game engine: the main symptom being a delay at a certain hour of
the day for seconds or even minutes.

-   [Download the Ghost Fleet save game
    fixer](http://www.modhoi.com/index.php?option=com_content&task=view&id=54&Itemid=37)

####  Event History 

Save games grow very large over time, depending on your event logging
settings. In a default installation, the size of the game file will
double in less than 10 years. Minor speed improvements can be made by
deleting the event history.

####  Delete all units 

While late game slow down is not really caused by a large number of
units, deleting all units does help. Lord Finnish created this event:
[Kill all AI
units](https://forum.paradoxplaza.com/forum/index.php?threads/360988/#post-8560061 "forum:360988/")

####  Movies 

If you find the movies annoying, and prefer to open the game and go
somewhere else while it loads (thus not being there to skip over the
movies), there's a simple way to get rid of them. The only movies in the
game are the ones at the start. Just rename (or delete) the avi
directory where you installed HoI2 and the game will just skip over
them.

##  General problem Solving 

It is difficult to track problems effectively in current jungle of
software products and their versions. When problem pups up, it is best
to go from simple to more complex solutions. Here is recommended
procedure for solving problems (it may work with problems related to
other games/programs too):

1.  Refer to
    [forum](https://forum.paradoxplaza.com/forum/index.php?forums/hearts-of-iron-2.255/)
    first. Your problem may have been addressed already. If you don't
    succeed there, try following procedure.
2.  If problem showed up recently and you were able to play before
    without problems (in same conditions), try to remember what has
    changed since then and focus on it.
3.  End all programs and tasks which are not really necessary. Use
    CTRL+ALT+DEL and 'Task Manager' to end tasks.
4.  In Windows 2000 or XP Professional you may also want to stop
    unnecessary 'Services' running on backgound. Type 'services.msc /s'
    in 'Run' (Start -\> Run) to run console to view and manage services
    on your system. You require administrator's right to do so. It may
    help improve performace and limit possible problems. List of
    services you must have running may vary from system to system. Be
    careful when stopping services! ( [How to run Windows with minimal
    load of background
    services](http://support.microsoft.com/?scid=kb;en-us;331796) )
5.  Installing other games with different (and sometimes problematic)
    version of DirectX may be cause of problems. In this case
    uninstalling DirectX ( [DirectX
    Uninstaller](http://fileforum.betanews.com/detail/DirectX_Uninstaller/978209241/1)
    ) first. Then download latest version of DirectX (if you don't have
    it already,
    [here](http://www.microsoft.com/downloads/results.aspx?sortCriteria=date&OSID=&productID=&CategoryID=&freetext=directX+runtime&DisplayLang=en&DisplayEnglishAlso=)
    ) and install it.
6.  Reinstall game. If you want to preserve your data (savegames),
    archive them first (by copying/moving them to non game folder).
    Saves are stored in '\scenarios\save games' subfolder of directory
    where you installed HoI2. Then uninstall game by using uninstaller
    and delete remaining data manually (delete your HoI2 installation
    directory). Then install game with all patches and restore your
    archived savegames.
7.  If problem is still there, post in
    [forum](https://forum.paradoxplaza.com/forum/index.php?forums/hearts-of-iron-2.255/)
    and pay attention to [How to Report a
    Bug](https://forum.paradoxplaza.com/forum/index.php?threads/how-to-report-a-bug.179636/)
    .
8.  In-game speed increasing trough message logging : Whenever possible
    disable evens from game log : for example another nation trade with
    third nation, another nation influenced/failed to influence third
    nation, another nation diplomatic deal with third nation, any
    logging of player aggreeing/refusing trade or diplomatic action
    suggested by AI is by default also written to game log. One has to
    be careful what is doing and if one needs any log evidence. It is
    always useful to go carefuly trough message settings in game menu
    and select what should be logged an how (4 levels of notification -
    none - log - window - pause game with window). Consider events that
    are not necessary for your gameplay and set them not to be displayed
    at all. Exclude all duplicate messages pointing to one occasion for
    example do not log demand territory but log give-in/refuse of demand
    territory.
## Contents

-   [ 1 Updates ](#Updates)
-   [ 2 Bugs and Bug Reporting ](#Bugs_and_Bug_Reporting)
-   [ 3 Configuring Routers for Multiplayer Games
    ](#Configuring_Routers_for_Multiplayer_Games)
-   [ 4 Screen Issues ](#Screen_Issues)
    -   [ 4.1 Screen Flicker ](#Screen_Flicker)
    -   [ 4.2 Screen Resolution ](#Screen_Resolution)
    -   [ 4.3 Windowed Mode ](#Windowed_Mode)
-   [ 5 Game Slow downs ](#Game_Slow_downs)
    -   [ 5.1 Helpful Fixes ](#Helpful_Fixes)
        -   [ 5.1.1 Sprites ](#Sprites)
        -   [ 5.1.2 Ghost Fleets ](#Ghost_Fleets)
        -   [ 5.1.3 Event History ](#Event_History)
        -   [ 5.1.4 Delete all units ](#Delete_all_units)
        -   [ 5.1.5 Movies ](#Movies)
-   [ 6 General problem Solving ](#General_problem_Solving)

##  Updates 

The following updates are the most recent updates released for the
Hearts of Iron II series (as of September 30, 2009):

-   Original Hearts of Iron 2 (HoI2): [Update 1.3b (Apr,
    2006)](https://forum.paradoxplaza.com/forum/index.php?threads/226786 "forum:226786")
    Checksum: JLQC
-   Hearts of Iron 2, Doomsday (HoI2:DD): [Update 1.3a (March,
    2007)](https://forum.paradoxplaza.com/forum/index.php?threads/293247 "forum:293247")
    Checksum: JCJS
-   Hearts of Iron 2, Armageddon (HoI2:ARMA): [Update 1.3 beta2 (April,
    2009)](https://forum.paradoxplaza.com/forum/index.php?threads/402220 "forum:402220")
    Checksum: PHVR

Note that Paradox has officially confirmed that HOI2 and HOI2:DD updates
are the final updates for those games. The last one for Arma was not
officially confirmed but given the time that has now passed, it can be
taken as final.

##  Bugs and Bug Reporting 

There are no further updates being made to any version of HoI2. Any
found bugs will need to be corrected yourself using the modding tools if
possible.

##  Configuring Routers for Multiplayer Games 

The first suggestion is to check the [Router configuration
library](https://forum.paradoxplaza.com/forum/index.php?threads/163998 "forum:163998")
, hosted at the Paradox forums. It covers all of Paradox's games, and is
a repository for **successful** router configurations.

If you are unsuccessful there, ask your questions in [this forum
thread](https://forum.paradoxplaza.com/forum/index.php?threads/187623 "forum:187623")
. Many experts that lurk about the forums subscribe to the threads
above, so your questions will be seen.

Even with v1.2 the "moddir" feature is still **broken** for multiplayer
play. Thus if you try and play a mod in multiplayer it will fail. The
only work around is to modify the main game itself.

##  Screen Issues 

###  Screen Flicker 

If you are experiencing screen flicker at seemingly random intervals
while playing the came, the following steps may be of use, as prescribed
by Castellon:

1.  Rename the AVI folder to AVI_back
2.  Set the color depth to 16BIT
3.  If you're using the auto-hide feature of the task bar, disable it.  
4.  If you have an Explorer window searching for a file or displaying
    search results, close it.
5.  Turn off everything in the background like E-mail/ICQ/Messenger,
    Virus protection and everything in the system tray beside the clock.
6.  Update your Windows, update your Video card drivers and audio card
    drivers. Then repeat steps 1-3.

**98% of flicker problems are caused by other programs running in the
background.**

Also, alt+tabbing tends to increase screen flicker.

[How to run Windows with minimal load of background
services](http://support.microsoft.com/?scid=kb;en-us;331796)

###  Screen Resolution 

According to developer Johan, the screen resolution for the game is
locked at 1024x768. There is [an unofficial
patch](http://www.geocities.jp/soukan_n/f/index.html) that can alter the
value, though. You can also take a look at [screen related
utilities](/Utilities#Screen_Related "Utilities") . If you have
difficulty playing HoI2 with the "offical" resolution, it might help you
solve the problem.

###  Windowed Mode 

If you want to play Hearts of Iron 2 in window, you must apply some
unofficial "patch" first. Look at [screen related
utilities](/Utilities#Screen_Related "Utilities") for concrete one. For
Doomsday, there is new command line parameter WINDOWED, which activated
windowed mode without need of any hacking. You must also set your screen
color depth to 16bit (applies to both Hearts of Iron 2 and Doomsday)
prior to running game in a window. If you don't do that, you'll get
error message and game won't run.

##  Game Slow downs 

The game gradually slows down as time progresses. This is especially
true of a 1936 campaign, and generally starts around 1942 or later,
depending on your CPU speed. Generally, this occurs due to the large
number of units that have been created, and the amount of work the AI
must perform every game hour to determine what should be done with
units. [Testing this
issue](https://forum.paradoxplaza.com/forum/index.php?threads/360988 "forum:360988")
has led to the conclusion that CPU speed has a significant effect on
game speed.

The Doomsday scenario is a good test for these slowdowns due to the
large number of units. Each test was conducted by choosing the nation of
Tibet, setting game speed to maximum, and timing how long it takes for
one month of game time to elapse. Testing produced the following
results:

|           |       |            |         |        |        |               |
|-----------|-------|------------|---------|--------|--------|---------------|
| User      | Brand | Type       | Speed   | Cache  | RAM    | Scenario time |
| Lennartos | Intel | Quad Core  | 3.7 Ghz | 12MB   | 4 GB   | 1 min, 25 s.  |
| SBR       | Intel | Core 2 Duo | 2.4 Ghz | 8MB    | 2 GB   | 2 min, 26 s.  |
| Bholstege | Intel | Core 2     | 3.0 Ghz | 1 MB   | 4 GB   | 2 min, 30 s.  |
| BBasgen   | AMD   | Athlon 64  | 2.2 Ghz | 0.5 MB | 2 GB   | 3 min, 28 s.  |
| forlath   | Intel | Pentium M  | 2.0 Ghz | 0.5 MB | 1 GB   | 3 min, 30 s.  |
| The RC    | Intel | Pentium 4  | 2.6 Ghz | 0.5 MB | 1.5 GB | 5 min, 50 s.  |
| MacLeod   | Intel | Pentium 4  | 2.4 Ghz | 0.5 MB | 1 GB   | 8 min, 18 s.  |
| forlath   | Intel | Pentium 4  | 3.4 Ghz | 0.5 MB | 1 GB   | 9 min, 30 s.  |

###  Helpful Fixes 

####  Sprites 

This change will allow you to both load and play the game much faster,
but it only works if you use counters instead of sprite. Note that the
file to be left alone in those folders do not have to be the one
mentioned. Any of the other files will do as long as their file name
match.

1.  Open HoI 2 directory\GFX\map\units.
2.  Backup this folder and its subfolder just in case you want to play
    with sprite again later or if anything wrong happens.
3.  Delete all files in HoI 2 directory\GFX\map\units except
    "T-BATTLESHIP A-WALK C-MIN L-1 D-NW.spr".
4.  Open HoI 2 directory\GFX\map\units\bmp.
5.  Delete all files in HoI 2 directory\GFX\map\units\bmp except
    "T-BATTLESHIP A-WALK C-MIN L-1 D-NW.bmp".
6.  Start the game and feel the speed.

####  Ghost Fleets 

Ghost fleets began as a problem in the HOI2 DD expansion pack and
continued until ARMA version 1.3, when the problem was finally fixed.
The net result of a Ghost fleet can be tens of thousands of non-existent
ships in a port. The sheer number of units involved creates enormous lag
on the game engine: the main symptom being a delay at a certain hour of
the day for seconds or even minutes.

-   [Download the Ghost Fleet save game
    fixer](http://www.modhoi.com/index.php?option=com_content&task=view&id=54&Itemid=37)

####  Event History 

Save games grow very large over time, depending on your event logging
settings. In a default installation, the size of the game file will
double in less than 10 years. Minor speed improvements can be made by
deleting the event history.

####  Delete all units 

While late game slow down is not really caused by a large number of
units, deleting all units does help. Lord Finnish created this event:
[Kill all AI
units](https://forum.paradoxplaza.com/forum/index.php?threads/360988/#post-8560061 "forum:360988/")

####  Movies 

If you find the movies annoying, and prefer to open the game and go
somewhere else while it loads (thus not being there to skip over the
movies), there's a simple way to get rid of them. The only movies in the
game are the ones at the start. Just rename (or delete) the avi
directory where you installed HoI2 and the game will just skip over
them.

##  General problem Solving 

It is difficult to track problems effectively in current jungle of
software products and their versions. When problem pups up, it is best
to go from simple to more complex solutions. Here is recommended
procedure for solving problems (it may work with problems related to
other games/programs too):

1.  Refer to
    [forum](https://forum.paradoxplaza.com/forum/index.php?forums/hearts-of-iron-2.255/)
    first. Your problem may have been addressed already. If you don't
    succeed there, try following procedure.
2.  If problem showed up recently and you were able to play before
    without problems (in same conditions), try to remember what has
    changed since then and focus on it.
3.  End all programs and tasks which are not really necessary. Use
    CTRL+ALT+DEL and 'Task Manager' to end tasks.
4.  In Windows 2000 or XP Professional you may also want to stop
    unnecessary 'Services' running on backgound. Type 'services.msc /s'
    in 'Run' (Start -\> Run) to run console to view and manage services
    on your system. You require administrator's right to do so. It may
    help improve performace and limit possible problems. List of
    services you must have running may vary from system to system. Be
    careful when stopping services! ( [How to run Windows with minimal
    load of background
    services](http://support.microsoft.com/?scid=kb;en-us;331796) )
5.  Installing other games with different (and sometimes problematic)
    version of DirectX may be cause of problems. In this case
    uninstalling DirectX ( [DirectX
    Uninstaller](http://fileforum.betanews.com/detail/DirectX_Uninstaller/978209241/1)
    ) first. Then download latest version of DirectX (if you don't have
    it already,
    [here](http://www.microsoft.com/downloads/results.aspx?sortCriteria=date&OSID=&productID=&CategoryID=&freetext=directX+runtime&DisplayLang=en&DisplayEnglishAlso=)
    ) and install it.
6.  Reinstall game. If you want to preserve your data (savegames),
    archive them first (by copying/moving them to non game folder).
    Saves are stored in '\scenarios\save games' subfolder of directory
    where you installed HoI2. Then uninstall game by using uninstaller
    and delete remaining data manually (delete your HoI2 installation
    directory). Then install game with all patches and restore your
    archived savegames.
7.  If problem is still there, post in
    [forum](https://forum.paradoxplaza.com/forum/index.php?forums/hearts-of-iron-2.255/)
    and pay attention to [How to Report a
    Bug](https://forum.paradoxplaza.com/forum/index.php?threads/how-to-report-a-bug.179636/)
    .
8.  In-game speed increasing trough message logging : Whenever possible
    disable evens from game log : for example another nation trade with
    third nation, another nation influenced/failed to influence third
    nation, another nation diplomatic deal with third nation, any
    logging of player aggreeing/refusing trade or diplomatic action
    suggested by AI is by default also written to game log. One has to
    be careful what is doing and if one needs any log evidence. It is
    always useful to go carefuly trough message settings in game menu
    and select what should be logged an how (4 levels of notification -
    none - log - window - pause game with window). Consider events that
    are not necessary for your gameplay and set them not to be displayed
    at all. Exclude all duplicate messages pointing to one occasion for
    example do not log demand territory but log give-in/refuse of demand
    territory.
