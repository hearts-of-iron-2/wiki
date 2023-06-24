---
title: Modding_eug_files
---
## Contents

-   [ 1 Introduction ](#Introduction)
    -   [ 1.1 Name, panel and header ](#Name.2C_panel_and_header)
    -   [ 1.2 Global Data ](#Global_Data)
    -   [ 1.3 Treaties of all flavours ](#Treaties_of_all_flavours)
    -   [ 1.4 Map visibility ](#Map_visibility)
    -   [ 1.5 Including files, victory points, and events
        ](#Including_files.2C_victory_points.2C_and_events)

##  Introduction 

The .eug file in the \scenarios subdirectory is the first stop to
modding scenarios. It contains information such as the start date, the
countries that are selectable, and which files to include in the
scenario.

###    Name, panel and header 

The first part of the .eug file consists of the name, the graphic panel,
and the headers.

    name = "1936_SCENARIO"
    panel = "scenarios/data/scenario_1936.bmp"
     
    header = {
           name = "Grand Campaign"
           startdate = 1936
           enddate = 1948

The *name* (name = "1936_SCENARIO") will be the name of the scenario.
This can be exported to a .csv file (in the \config directory) or just
written in. The panel (panel = "...") will be the little graphical panel
that will appear under the name.

The *header* field contains the information that will pop upon starting
a campaign and checking victory points(F1). Note that the actual
startdate is determined in the global data field, not here.

Next you should see something like this:

    selectable = {
       ENG FRA GER HOL POR ITA SOV SWE TUR JAP CHI POL NOR BEL DEN SCH CUB GRE BUL YUG HUN
       ROM AUS CZE IRE EST LAT LIT FIN PER AFG BRA ARG MEX COL VEN PRU ECU URU PAR BOL CHL
       NZL CAN AST MAN USA ETH SPR CHC ALB SIA SAU MON GUA COS NIC DOM PHI BHU SAL HAI HON
       IRQ LIB LUX NEP OMN PAN SIK SAF TAN TIB YEM CGX CSX CXB CYN EGY
       }
    ENG = { }
    FRA = { }
    ITA = { }
    GER = { }
    SOV = { }
    POL = { }
    CHI = { }
    JAP = { }
    CAN = { }
    USA = { }
    }

The first part - the *selectable* field - contains tags for the
countries that can be selected in this scenario. If you want to make a
country unplayable then you can remove its tag from this list. If you
added a new country and you want to make them playable, you should add
the new tag here.

The second part consists of a number of tags listed horizontally. These
are the nations that have been "pre-selected" by the scenario designer
and will be selectable without having to right click and change the flag
in order to play. You can add as few as one tag, and as many as would be
visually appealing.

Between the brackets behind the country tag, additional information can
be added for the countries. For example:

    instead of:
    FRA = { }

    you could type:
    FRA = { picture = "scenarios\data\propaganda_fra_1939.bmp" }

    or:
    FRA = { desc = "blablabla" }

    or both:
    FRA = { picture = "scenarios\data\propaganda_fra_1939.bmp" desc = "blablabla" }

More fields that can be defined are

    set_ai_aggresive = [0...x]
    set_difficulty   = [0...x]
    set_gamespeed    = [0...x]
    share_country    = 0/1
    optionmode       = 0/?
    combat           = yes/no
    free             = yes/no

and probably lots more

###  Global Data 

Here comes the main stuff, determining what parties belong to the
alliances, and when the scenario starts and finishes.

    globaldata = {

        startdate = { year = 1936 month = january day = 0 }

        enddate =   { year = 1947 month = january day = 0 } 

        allies =    {
                 id = { type = 15000 id = 1 }
                 participant = { ENG IRQ FRA AST NZL CAN SAF NEP BHU YEM OMN }
                 }
        axis =      {
                 id = { type = 15000 id = 2 }
             participant = { GER }
                 }
        comintern = {
                 id = { type = 15000 id = 3 }
             participant = { SOV MON TAN }
             }
        alliance =  {
             id = { type = 15000 id = 4 }
             participant = { CHI CXB }
             }
        alliance =  {
             id = { type = 15000 id = 5 }
             participant = { EST LAT }
             }
                 }

The *startdate* field defines when the scenario begins and the *enddate*
field when the scenario ends. Unless you have installed a [no-time limit
patch](/wiki/Utilities "Utilities") , these can only be between January
1st 1936 and December 30th 1947.

Below those you should see the *allies* , *axis* , and *comintern*
fields. By adding tags inbetween the sets or brackets, you can add new
members to the specific alliance. For instance, you could add ITA in the
axis participant brackets after GER so that upon loading the scenario
Italy is a member of the Axis powers. The first tag in the list will be
the leader of the alliance.

Beside the main three alliances, there can also be other alliances.
There is no limit to the amount of these alliances, but each one must
have a unique id.

        # Little entente
        alliance =  {
             id = { type = 15000 id = 13 }
                    participant = { CZE POL YUG ROM }
                    }

Note that in this example the first line is commented out (with a \#)
and will not be read by the game.

In the same way, you can also add ongoing wars into this *globaldata*
field.

              war = {
                 id = { type = 9430 id = 1 }

                 date = { year = 1935 month = october day = 3 }
                 enddate = { year = 1936 month = january day = 0 }
     
                 attackers = {
                              id = { type = 9430 id = 2 }
                              participant = { ITA }
                      }
                 defenders = {
                       id = { type = 9430 id = 3 }
                       participant = { ETH }
                      }
                    }

In this example, Italy starts off at war with Ethopia. Italy is the
attacker (the one who will gain monthly belligerence), and Ethopia is
the poor defender. Both the attacker group and defender group require a
unique ID. As with alliances, there is no limit to the amount of ongoing
wars you can have, but they all need a unique ID. These ID's are not
connected to any other ID's in the file. You can have multiple attackers
or defenders; just put putting multiple tags in the brackets.

Don't forget to add a final bracket ( **}** ) to finish off the
*globaldata* field when finished.

Other fields that may be included in the *globaldata* field are:

    flags     = { }

where in-game flags can be defined and set,

    rules     = { diplomacy = no }

which eliminates the possibility to use the diplomacy screen. Similarly,
you can disable the production and research screens.

###  Treaties of all flavours 

Here you can create different treaties between the different countries.

    treaty = {
         id = { type = 16384 id = 1 }
         type = non_aggression
         country = USA
         country = ARG
         startdate = { year = 1935 month = december day = 30 }
         expirydate = { year = 1948 month = december day = 30 }
         }

First off, the ID. Keep in mind that all treaties share the same ID
field, whether it concerns trade, peace, or non agression treaties.

         id = { type = 16384 id = 1 }

Next, the code lists what kind of a treaty it is. Usually it's just a
non aggression ( *non_aggression* ) or a trade treaty, but you can
create pre-made peace treaties as well.

The *startdate* is when the treaty has started to be effective, and
*expirydate* defines when the treaty will end. Setting a start date
before the campaign end date is a waste of CPU.

When you need to create a trade agreement, almost the same method is
used. Observe:

    treaty = {
         id = { type = 16384 id = 317 }
         type = trade
         country = "HOL"
         country = "MEX"
         startdate = { year = 1935 month = december day = 30 }
         expirydate = { year = 1948 month = december day = 30 }
         rare_materials = -4
         supplies = 2
         }

The order of those resources at the bottom corresponds to the order of
the countries under type = trade. In this case the Netherlands (HOL) is
trading Mexico (MEX) four rare meterials in exchange for two supplies a
day.

###  Map visibility 

You might wish to make parts of the map not visible (and therefore
usable). This can also be used to eliminate certain portions of the map,
such as the Suez Canal.

    map = {
      no = all
      yes = 3
      yes = 4
      (... etc)
      yes = 2608
      }

or

    map = {
      no = 100
      }

###    Including files, victory points, and events 

Finally, at the bottom of the file, you will see this.

    # Vp things
    include = "scenarios/1936/vp.inc"
     
    # Countries
    include = "scenarios/1936/cyn_36.inc"
    include = "scenarios/1936/cgx_36.inc"
    include = "scenarios/1936/cxb_36.inc"
    include = "scenarios/1936/csx_36.inc"
    include = "scenarios/1936/germany.inc"
    include = "scenarios/1936/holland.inc"
         (... etc etc etc ...)
    include = "scenarios/1936/sik.inc"

    include = "db\events.txt"
    event = "db\events\newevents.txt"
    event = "db\events\AI_switches.txt"

These lines tell the scenario what files it should include when the
scenario loads (although you may just as well give them another
extension such as .txt). You need to include every .inc file for that
scenario for it to be used (although you might combine several
countries).

You can combine as much as you want into fewer files (for instance you
can combine all balkan countries into one file), if you think this would
be more practical, or you could split information into separate files
(for instance if you want a separate file provinces.inc with all
information about naval bases, ic, etc.). In this way, usually, the
victory point distribution in the scenario has it's own .inc file.

There are two ways to link event files. The easy though less flexible
way is to link the events files directly:

    event = "db\events\newevents.txt"

Alternatively, include a link to an event database that lists multiple
event files:

    include = "db\events.txt"

Here, you can see that a text file is linked to, which is located in the
\db subfolder and called events.txt. This file in turn lists the events
files that should be loaded.

The generic event database does not list the ai_switches file because
each scenario uses a different file, so you could link an AI switch file
here.

**Important Note:** Be careful to include the final ending bracket where
required.
