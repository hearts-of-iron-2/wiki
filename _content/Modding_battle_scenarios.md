## Contents

-   [ 1 Introduction ](#Introduction)
    -   [ 1.1 Getting Started ](#Getting_Started)
    -   [ 1.2 Global data ](#Global_data)
    -   [ 1.3 Map ](#Map)
    -   [ 1.4 .Inc files, Victory points, and events
        ](#.Inc_files.2C_Victory_points.2C_and_events)

##  Introduction 

As Battlescenarios tend to be different the normal .eug files, Here is a
guide to the differences and what they do.

###  Getting Started 

The first part of the Battlescenario .eug file is rather familar to a
normal .eug file.

Example:

    name = "fallweiss_name"
    panel = "scenarios/data/scenario_fallweiss.bmp"

    header = {
        name = "Grand Campaign"
        startyear = 1939
        endyear = 1939
       free = no
        combat = yes    #this is a battlescenario


        GER = {
                desc = FW_GER
                picture = "scenarios\data\poland.bmp"       

        }


        POL = {
                desc = FW_POL
                bottom = yes
                picture = "scenarios\data\poland.bmp"       
        }

The name and panels works the same way as a normal scenario. The name in
the header is dummied out and will never be seen ingame, The dates will
only be used in the little pop-up box upon loading a scenario.  
Now, **free = no** means the players cannot select countries other then
the ones allowed below. If this is removed, players can select freely.  
The **combat = yes** field adds the vs. to the middle of the country
selection that you see in most Battlescenarios.  
Now, next are the selectable countries, their descriptions( **desc =** )
can be exported to the cfg files or written in the file itself.  
The picture( **picture =** ) will be the little battlemap or propaganda
photo that appears in the nations information box upon clicking their
flag.  
Any country with **bottom = yes** will appear on far right of the
screen. This is used in most battle scenarios so the two/more countries
fighting are on opposite ends(See Below)
[![Scenarioheaderexample.gif](/images/d/d1/Scenarioheaderexample.gif)](/wiki/File:Scenarioheaderexample.gif)

  

###  Global data 

Next you should see something like this

Example:

    globaldata = {
         rules = {
            diplomacy = no
            production = no
            technology = no
            }
       startdate = {
           year = 1939
           month = september
            day = 0
           }
       enddate = {
           year = 1939
           month = october
           day = 30   ###Last large pocket destroyed on 5th Oct
           }
            allies = {
                id = { type = 15000 id = 1 }
                participant = { POL }
                    }
            axis =  {
                id = { type = 15000 id = 2 }
                participant = { GER }
            }

            comintern =     {
                id = { type = 15000 id = 3 }
                participant = { SOV }
            }

Almost all of this works the same way as a normal scenario file,
Creating wars also works the same way. Everything is the same except for
one header.

    rules = {
    diplomacy = no
    production = no
    technology = no
    }

*Diplomacy = no* Means that diplomacy tab may not be accessed or used by
the AI  
*Production = no* Means that the production tab may not be accessed or
used by the AI  
*Technology = no* Means that the technology tab may not be accessed or
used by the AI  

You can also allow any of these by changing their values to yes,
Commenting them out, or deleting the line.

###  Map 

This is the main radical difference between a battlescenario and a
normal scenario.

Example:

    map = {
    no = all
    #Poland
    yes = 303
    yes = 306
    yes = 307
    yes = 482
    yes = 479
    yes = 480
    yes = 481
    yes = 483
    yes = 484
    yes = 305
    yes = 485
    yes = 486
    yes = 487
    yes = 489
    yes = 488
    yes = 500
    yes = 501
    yes = 502
    yes = 503
    yes = 504
    yes = 505
    yes = 506
    yes = 507
    yes = 508
    yes = 509
    yes = 209
    yes = 208
    yes = 213
    yes = 211
    yes = 210
    yes = 222
    yes = 229
    yes = 562
    yes = 214
    #Slovakia
    yes = 475
    yes = 478
    yes = 477
    yes = 490
    yes = 476
    # Bohemia-Moravia
    yes = 471
    yes = 472
    yes = 466
    yes = 467
    yes = 470
    yes = 469
    yes = 468
    yes = 474
    #East Prussia
    yes = 206
    yes = 510
    yes = 304
    #Germany Proper
    yes = 302
    yes = 308
    yes = 301
    yes = 300
    yes = 309
    yes = 473
    #Soviet Union
    yes = 227
    yes = 226
    yes = 225
    yes = 221
    yes = 212
    yes = 218
    yes = 220
    yes = 272
    yes = 240
    yes =   1874
    yes =   228
    yes =   231

    # Sea Zones
    yes = 2477
    yes = 2478
    yes = 2480



    top = { x = 15556 y = 1712 }
    bottom = {  x = 17304 y = 2912 }

    }

Alright, The first part ( **map = { no = all** ) is the beginning of the
header and a field that is telling the scenario that all of the map will
be blacked out.  
yes = 303  
yes = 306  
yes = 307 etc. Are then telling which parts of the blacked out map can
be seen. Simply add **Yes = Province ID** for a province to be useable.
Seazones use province IDs too, so if you want seazones, do the same
thing.

The last part  
top = { x = 15556 y = 1712 }  
bottom = { x = 17304 y = 2912 }  
  
}

Marks the top left and bottom right. Together, these two form a sqaure
that can be used to limit the player's mapscrolling ability.

###    .Inc files, Victory points, and events 

Finally, the inc and event files.

Example:

    # Vp things
    include = "scenarios/fallweiss/vp.inc"

    include = "scenarios/fallweiss/germany.inc"
    include = "scenarios/fallweiss/poland.inc"
    include = "scenarios/fallweiss/soviet.inc"

    event = "scenarios/fallweiss/fall_weiss_events.txt"

The first .inc file is a victory points file, listing where victory
points are.  
The next three are the .inc files being used in this scenario.  
The last line is a direct link to the events file used for this
scenario. Since Battlescenarios only have a few events, they can usually
be stuffed into one or two files instead of needing a event directory.
