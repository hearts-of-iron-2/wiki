---
title: Games_Exported_from_Victoria
---

Note: the Following is a Copy-pasting of the page on exporting games from the Victoria: Empire Under the Sun wiki.

## Contents

- [1 Basics](#Basics)
  - [1.1 What is an exported game?](#What_is_an_exported_game.3F)
  - [1.2 How do I export a game (from Victoria to HoI2)?](#How_do_I_export_a_game_.28from_Victoria_to_HoI2.29.3F)
  - [1.3 Will the exported game look the same as it did on Victoria?](#Will_the_exported_game_look_the_same_as_it_did_on_Victoria.3F)
- [2 Changes, conversions, differences and so on](#Changes.2C_conversions.2C_differences_and_so_on)
  - [2.1 Provincial Division](#Provincial_Division)
  - [2.2 Countries](#Countries)
  - [2.3 Technology](#Technology)
  - [2.4 Units](#Units)

## Basics

### What is an exported game?

An "exported game" is a finished Victoria:Revolutions game that has been converted into a Hearts of Iron II one. It begins where the Victoria game ended; the started date is always January 1st, 1936 unless the file has been manually edited by the user.

### How do I export a game (from Victoria to HoI2)?

Once you finish your Vicky game, you will see that there's an "export" option at the end game pop-up (not the screen after that). Click on that button and proceed to save the game. Then, go to your exported games folder (scenarios -> save games). Each exported file will begin with the name of the nation you were playing with when the game ended, along with HoI2 start date (01/01/1936). Copy the desired file and paste it in your Hearts of Iron II save games folder.

### Will the exported game look the same as it did on Victoria?

Naturally, no. Because Hearts of Iron uses very different units, settings, province positioning (and so on) then many conversions will take place. Outlining the differences is what this article will mostly focus on. Knowing them beforehand can make your life much more tranquil when you decide to carry on that Victoria game within the realms of Hearts of Iron II.

## Changes, conversions, differences and so on

### Provincial Division

Because Hearts of Iron's provinces are divided differently than those in Victoria, your borders may look slightly different in HoI2. Some provinces are larger, others are smaller, and a few are inexistent in a game or the other. Per instance, if A owns province X and B owns province Y and Z; and XYZ is one sole province in HoI2, then B will control it completely. Or, if B owns K, and in HoI2 K is divided into L, M and N, B will have control over them all.

Claimed territories (with a colonial building) will go to whoever claimed it during the Victoria game.

You can check the exact information about provincial conversion from Vicky to HoI2 in the "vic2hoiprovince.csv" file, located in Victoria's database folder. Each line in the file will contain the following information:

Victoria Province ID;HoI2 Province ID

### Countries

Because some countries present in Victoria do not exist in Hearts of Iron and vice-versa, those are converted into other nations present in HoI2. At times, more than a Vicky nation will be converted into the same Hearts of Iron nation (as it happens with the minor Indian states, all of them become India). At other times, a nation will emerge as another (e.g. Tripoli in Vicky turns into Libya).

Custom made nations will not appear in the exported game (an error may bar one from loading the game). The user must modify vic2hoicountry.csv at Victoria's database folder in order to add a proper country conversion. The same folder may be modified as well to alter other countries' conversions. Each line in the file will contain the following information:

Victoria Country Tag;HoI2 Country Tag; Victoria Country Name; HoI2 Country Name;x

### Technology

Doctrines in HoI2 correspond to inventions in Victoria. See [Army Inventions](/wiki/index.php?title=Army_Inventions&action=edit&redlink=1 "Army Inventions (page does not exist)") and [Navy Inventions](/wiki/index.php?title=Navy_Inventions&action=edit&redlink=1 "Navy Inventions (page does not exist)") .

### Units

[forum thread on unit conversions](http://forum.paradoxplaza.com/forum/showthread.php?406223-What-does-a-engineers-brigade-convert-to-in-Hearts-of-Iron)

- Infantry divisions remain Infantry divisions while it's brigades convert as follows:

  - Artillery and Engineer Brigades remain Artillery and Engineer Attachments.
  - Regulars brigades become a Military Police attachment.
  - Guard Brigades become an Armored Car attachment.
  - "barrel" attachments become Light Tank divisions.
  - Fighter attachments become Interceptors
  - Bomber attachments become Tactical Bombers
  - an Infantry division with the HQ brigade will trasform into an HQ unit. this is the one case where the Infantry division does not become a seperete unit.

- Cavalry divisions remain Cavalry, attached brigades are simply deleted.
- Dragoons, bizarrely, turn into '36 Mountain Divisions!

Note: Infantry and cavalry are converted to the '18 Infantry and '18 cavalry,respectively, unless the own has researched "Modern divisional structure" which makes them the more advanced '36 versions

- Air bases appear in Provinces where planes initially stationed, possibly also in areas of high infrastructure? (more investigation required)
- Forts and naval bases mostly carry over but interact strangely with areas where multiple provinces were merged together in the conversion.
- dreadnoughts, battleships, cruisers, and carriers are converted to their namesake units in HOI2
- Steam transports are converted to Transports
- Minelayer, Minesweeper, and Destroyer Flotilla attachements all convert into Destroyers
- all other naval units are discarded.
- province Infrastructure is determined by the province rail level.
- a nation's Industry rating determines their total starting Industrial Capacity, which is then distributed among their provinces by a formula in which relative population of the province and and number of factories in the state are known to be factors.
- HOI2 Government type is determined by Vicky Government type and Party in power.
- Other position sliders are determined by factors not yet known to this writer.
- A nations Tech Teams are generated semi-randomly, apparently being specialized economically is supposed to give you Tech Teams better suited to certain research (more tank factories give tech teams more suited to tank design, more officers better for doctrine research, etc.) then named after the tech teams in the HOI2 base campaign From the same country and with similar specialties.
