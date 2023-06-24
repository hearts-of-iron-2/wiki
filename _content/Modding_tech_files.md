---
title: Modding_tech_files
---
 Contents
--------

*   [1 Introduction](#Introduction)
*   [2 Basic Structure](#Basic_Structure)
    *   [2.1 ID](#ID)
    *   [2.2 Name](#Name)
    *   [2.3 Position](#Position)
    *   [2.4 Historical Year](#Historical_Year)
    *   [2.5 Components](#Components)
        *   [2.5.1 Component ID](#Component_ID)
        *   [2.5.2 Component Name](#Component_Name)
        *   [2.5.3 Component Type](#Component_Type)
        *   [2.5.4 Component Difficulty](#Component_Difficulty)
        *   [2.5.5 Double Time](#Double_Time)
    *   [2.6 Prerequisites](#Prerequisites)
    *   [2.7 Effects](#Effects)
        *   [2.7.1 Chance of Combat Events](#Chance_of_Combat_Events)
        *   [2.7.2 HQ effects](#HQ_effects)
            *   [2.7.2.1 HQ Supply Efficiency Modifier](#HQ_Supply_Efficiency_Modifier)

Introduction
------------

The structure of the tech files has changed quite a bit from HoI to HoI2 as the tech system has undergone big changes. However, the tech files are still quite easy to mod.

  

Basic Structure
---------------

The main structure of a tech file is a single tech application, like "Early Infantry Division".

application = { # Early Infantry Division 	**id** = 1020								[ID](#ID) 	**name** = TECH\_APP\_INFANTRY\_2\_NAME						[Name](#Name) 	desc = TECH\_APP\_INFANTRY\_2\_DESC 	**position** = { x = 24 y = 48 }						[Position](#Position) 	**year** = 1936								[Year](#Historical_Year) 	**component** = { # Service Rifle						[Components](#Components) 		id = 1021 		name = TECH\_CMP\_INFANTRY\_2\_1\_NAME 		type = general\_equipment 		difficulty = 5 	} 	_##four more components_ 	**required** = { 1010 }							[Prerequisites](/wiki/Modding_tech_files#Prerequisites "Modding tech files") 	**effects** = {								[Effects](/wiki/Modding_tech_files#Effects "Modding tech files") 	 	command = { type = new\_model which = infantry value = 1 } 		command = { type = scrap\_model which = infantry value = 0 } 		command = { type = activate\_unit\_type which = police } 	} } 

  

### ID

Each tech has an ID which must be unique. It's convienent to use the IDs the same way Paradox uses them. All IDs should have the following structure:

The first digit should be a number between 1 and 9 to notify which tech tree this tech belongs to. (1 = infantry, 2 = armor, 3 = naval, 4 = aircraft, 5 = industry, 6 = land doctrines, 7 = secret weapons, 8 = naval doctrines, 9 = air doctrines)

The next two digits should just be an integer counting the techs in the file, e.g. "Early Infantry Division" is the second tech in the _infantry\_tech.txt_ file and has 02 there.

The last digit should be a 0 for the application.

  

### Name

This specifies the tech name that appears ingame. This is language specific and found in the _config/tech\_names.csv_ file.

Example:

 name = "TECH\_APP\_INFANTRY\_2\_NAME" 

The name can also be inserted right into the file. However, there is also a short name for each tech found in _config/tech\_names.csv_ and that is the one that'll be displayed on the buttons. It has the same string name as the complete description prefixed with a "SHORT\_"

Example:

 name = "Basic Infantry Division" 

The description is not used and is a relic from HoI1.

  

### Position

Position of the button in the tech tree measured in pixels from the upper left corner of the tech tree graphic.

Example:

 position = { x = 24 y = 48 } 

[Position measured in pixels](/wiki/index.php?title=Special:Upload&wpDestFile=Techfiles_upperleftcorner_small.png "File:Techfiles upperleftcorner small.png")

You can define more than one position for each tech as is seen in the Naval Doctrines screen. You just have to add another position clause for each position.

  

### Historical Year

The historical year factors heavily into research if you try to get a tech ahead of its historical date. Your research speed will be divided by _(1 + d × m)_ with _d_ being the number of days you are away from January 1st of the historical year and _m_ being the multiplier in _misc.txt_ . Researching one year ahead of time will give you a penalty of 54%. Note however that this is calculated component-wise, so the later components suffer less penalty than the earlier ones.

  

### Components

Each tech has five components.

Example:

component = { # Great War Tank Prototype Tests 	**id** = 2015				[ID](#Component_ID) 	**name** = TECH\_CMP\_ARMOR\_1\_5\_NAME		[Name](#Component_Name) 	**type** = technical\_efficiency		[Type](#Component_Type) 	**difficulty** = 5				[Difficulty](#Component_Difficulty) 	**double\_time** = yes			[Double Time](#Double_Time) } 

#### Component ID

Each tech component has an ID. The first three digits should be the same as with the application the tech belongs to and the last digit should count the components from 1 to 5.

#### Component Name

This specifies the component name that appears ingame. This is language specific and found in the _config/tech\_names.csv_ file.

Example:

 name = TECH\_CMP\_ARMOR\_1\_5\_NAME 

The name can also be inserted right into the file.

Example:

 name = "Great War Tank Prototype Tests" 

Note quotes are only needed if you are inserting the text directly. Strings should be quote-free (or so my testing has shown).

#### Component Type

Each component has one of 34 different types. If a research team has this [component type](/wiki/List_of_Component_Types "List of Component Types") as speciality, they'll research that component 50% faster than a team without it.

#### Component Difficulty

Each component has a difficulty. This is a positive integer. While the game out of the box only uses difficulties between 3 and 10, it is possible to assign difficulties outside this interval. Note however that difficulties are not linear so that difficulty 8 doesn't take twice as much time as difficulty 4.

#### Double Time

Double time does exactly what you would expect from its name. It doubles the research time for the respective component. This is mainly used for the prototypes of vehicles, ships and aircraft in the game out of the box. If you don't want to double the time, just don't use this line.

### Prerequisites

The required clause lists the techs needed to research the tech in question. These can be an empty set or you can list as many techs as you want. However, as the game does not show tech interlinks between the different pages and the indicator for needed techs on the same page is easily overseen, you should modify the background picture for the tech tree you are working in to show the dependencies.

Example: (Tech 1010 is required to research the tech in question)

required = { 1010 } 

You can also use a second type of this clause which will allow you to make a set of prerequisites of which only one is needed. Note that this can combined with necessary prerequisites. The required clause must always be in, even if it is empty.

Example: (Tech 8160 is required and **one** of 8180 and 8080 is also required)

OR\_required = { 8180 8080 } required = { 8160 } 

  

### Effects

Each tech can have one or more effects.

Copy & Paste from _event commands.txt_ (will format it later)

#### Chance of Combat Events

There are seven commands (breakthrough, ambush, assault, counterattack, delay, encirclement, tactical\_withdrawal) to affect the chance of combat events occurring. The value is additive.

Example:

type = counterattack value = 4 

This will increase the probability for a counterattack by 4%.

#### HQ effects

##### HQ Supply Efficiency Modifier

The HQ divisions give a bonus on Supply Efficiency for all units in adjactant provinces. This bonus can be changed by techs.

Example:

type = hq\_supply\_eff value = X 

Increases the Supply Efficiency bonus of HQs by X percent points.

type = sce\_frequency value = X # Combat event chance multiplier. Default: 1.0

1.  Enable a certain type of mission

type = enable\_task which = \[task type\]

1.  New models updates the current template for a division or brigade type.

command = { type = \[new\_model\] which = \[division or brigade type\] value = \[The model number\] }

1.  Make a division or brigade type available for construction.

command = { type = activate\_unit\_type which = \[division or brigade type\] }

1.  Make a division or brigade type unavailable for construction.

command = { type = deactivate\_unit\_type which = \[division or brigade type\] }

1.  ACTIVATE NUCLEAR CAPABILITY OF MISSILES

command = { type = nuclear\_carrier which = \[flying\_bomb/flying\_rocket\] }

1.  ACTIVATE MISSILE CAPABILITY OF SUBMARINES

command = { type = missile\_carrier which = \[submarine\] }

1.  UNIT VALUES
2.  \[unit value\] = soft\_attack/hard\_attack/ground\_defense/air\_attack/air\_defense/build\_cost/build\_time/manpower/speed/max\_organization/transport\_weight/supply\_consumption/fuel\_consumption/speed\_cap\_art/speed\_cap\_eng/speed\_cap\_at/speed\_cap\_aa

NOTE: I think some of these are out of date, I was modding around today and "ground\_defense" seems to have changed to "defensiveness". Others might have changes aswell.

1.  Land unit bonuses

command = { type = \[unit value\] which = \[land/division type/brigade type\] value = \[additive value modifier\] }

1.  Air unit bonuses

command = { type = \[air\_attack/strategic\_attack/tactical\_attack/naval\_attack/air\_defense/build\_cost/build\_time/manpower/speed/surface\_detection/air detection/transport\_capacity/supply\_consumption/fuel\_consumption/range\] which = \[air/division type/brigade type\] value = \[additive value modifier\] }

1.  Naval unit bonuses

command = { type = \[naval\_attack/air\_attack/shore\_attack/naval\_defense/air\_defense/build\_cost/build\_time/manpower/speed/surface\_detection/air detection/visibility/transport\_capacity/supply\_consumption/fuel\_consumption/range\] which = \[naval/division type/brigade type\] value = \[additive value modifier\] }

1.  NOTE: For "build\_time" and "build\_cost", it is possible to add the field "where = relative".
2.  This means that the value is parsed as a relative modifier (%) instead of an absolute addition.
3.  When doing this, THE BASE VALUE OF MODEL 0 IS USED FOR \_ALL\_ MODELS. So "value = -10" means
4.  "-10% of the value of model 0".

2.  UNIT COMBAT MODIFIERS

4.  Terrain combat modifiers

command = { type = \[desert\_attack/desert\_defense/mountain\_attack/mountain\_defense/hill\_attack/hill\_defense/forest\_attack/forest\_defense/swamp\_attack/swamp\_defense/urban\_attack/urban\_defense/river\_attack/shore\_attack/paradrop\_attack\] which = \[division type/brigade type\] value = \[X\] # Modifier in percent (+10 = 10%) }

1.  Terrain movement modifiers

command = { type = \[desert\_move/mountain\_move/hill\_move/forest\_move/swamp\_move/urban\_move/river\_crossing\] which = \[division type/brigade type\] value = \[X\] # Modifier in percent (+10 = 10%) }

1.  [Weather](/wiki/Weather "Weather") land-combat modifiers

command = { type = \[frozen\_attack/frozen\_defense/snow\_attack/snow\_defense/blizzard\_attack/blizzard\_defense/rain\_attack/rain\_defense/storm\_attack/storm\_defense/muddy\_attack/muddy\_defense\] which = \[division type/brigade type\] value = \[X\] # Modifier in percent (+10 = 10%) }

1.  [Weather](/wiki/Weather "Weather") land-movement modifiers

command = { type = \[frozen\_move/snow\_move/blizzard\_move/rain\_move/storm\_move/muddy\_move\] which = \[division type/brigade type\] value = \[X\] # Modifier in percent (+10 = 10%) }

1.  [Weather](/wiki/Weather "Weather") air-combat modifiers

command = { type = \[snow\_attack/rain\_attack\] which = \[interceptor/escort/multi\_role/strategic\_bomber/tactical\_bomber/torpedo\_plane\] value = \[X\] # Modifier in percent (+10 = 10%) }

1.  [Weather](/wiki/Weather "Weather") air-movement modifiers

command = { type = \[snow\_move/blizzard\_move/rain\_move/storm\_move\] which = \[interceptor/escort/multi\_role/strategic\_bomber/tactical\_bomber/torpedo\_plane/transport\_plane\] value = \[X\] # Modifier in percent (+10 = 10%) }

1.  [Weather](/wiki/Weather "Weather") naval-combat modifiers

command = { type = \[snow\_attack/rain\_attack\] which = \[battleship/cruiser/destroyer/carrier/submarine/transports\] value = \[X\] # Modifier in percent (+10 = 10%) }

1.  [Weather](/wiki/Weather "Weather") naval-movement modifiers

command = { type = \[snow\_move/blizzard\_move/rain\_move/storm\_move\] which = \[battleship/cruiser/destroyer/carrier/submarine/transports\] value = \[X\] # Modifier in percent (+10 = 10%) }

1.  Night modifiers

command = { type = night\_move/night\_attack/night\_defense which = \[division type/brigade type\] value = \[X\] # Modifier in percent (+10 = 10%) }

2.  GLOBAL MODIFIERS

4.  Surprise modifiers

command = { type = surprise which = \[naval/land/air\] value = \[X\] # Modifier in percents }

1.  Intelligence Operation modifiers

command = { type = intelligence which = \[us/them\] value = \[X\] # Modifier in percents }

1.  Army Detection modifiers

command = { type = army\_detection which = \[us/them\] value = \[X\] # Modifier in percents }

1.  Provincial AA batteries

command = { type = AA\_batteries value = \[X\] # Modifier in percents }

2.  INDUSTRIAL MODIFIERS

1.  Industrial multipliers
2.  E.g. energy\_to\_oil 4 means four energy are needed to produce one oil. 0.5 means 1 energy produces 2 oil.

command = { type = industrial\_multiplier which = \[energy\_to\_oil/oil\_to\_rare\_materials\] value = \[X\] }

1.  Industrial modifiers (additive)
2.  'total' is the conversion factor from every built industry point into Industrial Capacity.
3.  'supplies' is a modifier for the amount of supplies produced by every reserved IC unit.

command = { type = industrial\_modifer which = \[total/supplies\] value = \[X\] # Percents }

Building Types: \[ic, coastal\_fort, land\_fort, flak, infrastructure, air\_base, naval\_base, radar\_station, nuclear\_reactor, rocket\_test\]

Task Types: \[attack, rebase, strat\_redeploy, support\_attack, support\_defense, reserves, anti\_partisan\_duty, air\_superiority, ground\_attack, runway\_cratering, installation\_strike, interdiction, naval\_strike, port\_strike, logistical\_strike, strategic\_bombardment, air\_supply, airborne\_assault, convoy\_raiding, asw, naval\_interdiction, shore\_bombardment, amphibous\_assault, sea\_transport, naval\_combat\_patrol\] Resource Types: \[oil, metal, energy, rare\_materials, supplies, money\]