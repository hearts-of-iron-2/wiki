---
title: Leader_Traits
---
 [Template:Anthology](/wiki/index.php?title=Template:Anthology&action=edit&redlink=1 "Template:Anthology (page does not exist)")

Generals can have distinct traits that offer various benefits on the units he commands.

The bitvalue is used for modding and is contained in the leaders\\country.csv file. It used used to flag which traits a leader has. If a leader has multiple traits, simply add the bitvalues together. For example, if a leader has both winter specialist and panzer leader traits, the value would be 136 (8+128).

It is possible to modify leaders names to include details of their traits so a sort on names brings all of a type together. [Here](/wiki/index.php?title=Special:Upload&wpDestFile=Soviet.rar "Soviet.rar") a sample file for the Soviets with [an explanation](/wiki/index.php?title=File:Soviet.rar&action=edit&redlink=1 "File:Soviet.rar (page does not exist)") on how to do it.

Contents
--------

*   [1 Land Unit Leader Traits](#Land_Unit_Leader_Traits)
    *   [1.1 Logistics Wizard](#Logistics_Wizard)
    *   [1.2 Defensive Doctrine](#Defensive_Doctrine)
    *   [1.3 Offensive Doctrine](#Offensive_Doctrine)
    *   [1.4 Winter Specialist](#Winter_Specialist)
    *   [1.5 Trickster](#Trickster)
    *   [1.6 Engineer](#Engineer)
    *   [1.7 Fortress Buster](#Fortress_Buster)
    *   [1.8 Panzer Leader](#Panzer_Leader)
    *   [1.9 Commando](#Commando)
    *   [1.10 Old Guard](#Old_Guard)
*   [2 Naval Unit Leader Traits](#Naval_Unit_Leader_Traits)
*   [3 Air Unit Leader Traits](#Air_Unit_Leader_Traits)
*   [4 Hearts Of Iron II - Doomsday](#Hearts_Of_Iron_II_-_Doomsday)
    *   [4.1 New Land Unit Leader Traits](#New_Land_Unit_Leader_Traits)
        *   [4.1.1 Traits with bonus in certain terrains](#Traits_with_bonus_in_certain_terrains)
        *   [4.1.2 Traits with increased chance for combat events](#Traits_with_increased_chance_for_combat_events)
    *   [4.2 New Naval Unit Leader Traits](#New_Naval_Unit_Leader_Traits)
    *   [4.3 New Air Unit Leader Traits](#New_Air_Unit_Leader_Traits)

Land Unit Leader Traits
-----------------------

### Logistics Wizard

Reduces fuel and supply consumption of non-moving units commanded by a leader with this trait (by -25%).

Bitvalue: 1

### Defensive Doctrine

Increases defensive effectiveness of units commanded by a leader with this trait (by +10%).

Bitvalue: 2

### Offensive Doctrine

Increases offensive effectiveness of units commanded by a leader with this trait (by +10%).

Bitvalue: 4

### Winter Specialist

Increases the effectiveness of troops fighting in snow by +25% and Frozen terrain by +20%.

Bitvalue: 8

### Trickster

The effects of this trait are, well... somewhat tricky: It **increases** the chance that the combat event Surprise will occur, on offense as well as on defense. This chance is **further** influenced by how advanced your own industrial research of Encryption and Decryption (E&D) technologies is relative to your opponent. Exact figures, however, apparently are unknown (at least for HoI2 version 1.2). I also do not know whether **Skill Level** of the Trickster leader is having an influence on the probability of a Surprise occurring.

When a successful Surprise has occured, combat efficiency of the opposing forces is reduced by 20% and it will read "Surprise" in their combat details pane. From gaming experience it has been my observation that Surprise is a rare event (in HoI2 version 1.2), probably not more than once in 20 battles, even with E&D fully researched.

A Trickster will also hide the exact **division strength** of his formation. In practical terms this means that when playing with counters on, the opponent will keep guessing whether there are 2 or 3 divisions in a "XXX" formation, and will never know how many there are in a "XXXX" formation (although four divisions is the minimum for "XXXX", while "XX" obviously is always one division only).

Bitvalue: 16

(last edited by Thomas Haegin on 20.09.2005, based on discussion in the HoI2 forums)

### Engineer

Reduces river-crossing penalties during attacks by -20% for all units in the formation under a leader with this trait. The standard penalty for an infantry division is reduced from -50% to -30%, for an armored division (e.g. tanks) from -66% to -46% (in HoI version 1.2)

Bitvalue: 32

### Fortress Buster

Reduces penalty inflicted by fortifications (by 25%).

Bitvalue: 64

### Panzer Leader

Increases combat effectiveness of armoured and mechanized infantry divisions commanded by leader with this trait (by 10%).

Bitvalue: 128

### Commando

Increases combat effectiveness of commando troops (mountaineers, marines and paratroopers) commanded by a leader with this trait by 10%. Effectiveness of any **non** \-commando troops under a commando leader is **reduced** by 5%.

Bitvalue: 256

### Old Guard

Leader gains experience at 1/3 of normal rate, units are not affected by this reduction

Bitvalue: 512

Naval Unit Leader Traits
------------------------

Sea Wolf

Increases combat effectiveness of submarines (by 10%).

Bitvalue: 1024

Blockade-Runner

Decreases chance of being detected by enemy vessels.

Bitvalue: 2048

Superior Tactician

Increases combat effectiveness (by 10%).

Bitvalue: 4096

Spotter

Increases chance of detecting enemy vessels.

Bitvalue: 8192

Old Guard

Leader gains experience at 1/3 of normal rate, units are not affected by this reduction

Air Unit Leader Traits
----------------------

Superior Tactician

Increases combat effectiveness in airborne fights (by 10%).

Bitvalue: 4096

Spotter

Increases chance of detecting enemy planes.

Bitvalue: 8192

Tank Buster

Increases combat effectiveness of tactical bombing missions (by 10%).

Bitvalue: 16384

Carpet Bomber

Increases combat effectiveness of strategic bombing missions (by 10%).

Bitvalue: 32768

Night Flyer

Reduces penalties when flying at night. +20 during night combat.

Bitvalue: 65536

Fleet Destroyer

Increases combat effectiveness of naval bombing missions (by 10%).

Bitvalue: 131072

Old Guard

Leader gains experience at 1/3 of normal rate, units are not affected by this reduction

Hearts Of Iron II - Doomsday
============================

There are some differences. The terrain traits add 10% efficiency to that type of terrain which also results in a speed bonus for that terrain. You need to contrast the same kind of units under leaders with or with the trait to see the differences. Inf under a normal leader might have 93% efficiency in a battle in hill terrain, but the same units under a hills fighter could have 102% efficiency.

Another major difference to Hears of Iron II is that leader traits are ignored if land/air/naval units are over their leader's command limit. Thus a land unit with two Infantry divisions commanded by a Major General with Logistic Wizard and Offensive Doctrine as trait will not see a reduction in oil/supply consumption nor will it receive a combat bonus if in combat.

New Land Unit Leader Traits
---------------------------

### Traits with bonus in certain terrains

Desert Fox

Bonus in Desert

*   **+10%** Combat in [deserts](/wiki/index.php?title=Desert&action=edit&redlink=1 "Desert (page does not exist)")
*   +5% movement speed in [deserts](/wiki/index.php?title=Desert&action=edit&redlink=1 "Desert (page does not exist)") (this is for the 1.3beta Armageddon patch)

Bitvalue: 262144

Jungle Rat

Bonus in [Jungle](/wiki/index.php?title=Jungle&action=edit&redlink=1 "Jungle (page does not exist)")

*   **+10%** Combat in [jungles](/wiki/index.php?title=Jungle&action=edit&redlink=1 "Jungle (page does not exist)")
*   +5% movement speed in [jungles](/wiki/index.php?title=Jungle&action=edit&redlink=1 "Jungle (page does not exist)") (this is for the 1.3beta Armageddon patch)

Bitvalue: 524288

Urban Warfare Specialist

Bonus in [Urban](/wiki/index.php?title=Urban&action=edit&redlink=1 "Urban (page does not exist)") Areas

Bitvalue: 1048576

Ranger

Bonus in Forests

*   **+10%** Combat in [forest](/wiki/index.php?title=Forest&action=edit&redlink=1 "Forest (page does not exist)")
*   +5% movement speed in [forests](/wiki/index.php?title=Forest&action=edit&redlink=1 "Forest (page does not exist)") (this is for the 1.3beta Armageddon patch)

Bitvalue: 2097152

Mountaineer

Bonus in [Mountains](/wiki/index.php?title=Mountain&action=edit&redlink=1 "Mountain (page does not exist)")

*   **+10%** Combat in [mountains](/wiki/index.php?title=Mountain&action=edit&redlink=1 "Mountain (page does not exist)")
*   +5% movement speed in [mountains](/wiki/index.php?title=Mountain&action=edit&redlink=1 "Mountain (page does not exist)") (this is for the 1.3beta Armageddon patch)

Bitvalue: 4194304

Hills Fighter

Bonus in [Hills](/wiki/index.php?title=Hill&action=edit&redlink=1 "Hill (page does not exist)")

*   **+10%** Combat in [hills](/wiki/index.php?title=Hill&action=edit&redlink=1 "Hill (page does not exist)")
*   +5% movement speed in [hills](/wiki/index.php?title=Hill&action=edit&redlink=1 "Hill (page does not exist)") (this is for the 1.3beta Armageddon patch)

  
Bitvalue: 8388608

### Traits with increased chance for [combat events](/wiki/Combat_event "Combat event")

Counter Attacker

Increased Chance for Counter Attack combat event

Bitvalue: 16777216

Assaulter

Increased Chance for Assault combat event

Bitvalue: 33554432

Encircler

Increased Chance for Encirclement combat event

Bitvalue: 67108864

Ambusher

Increased Chance for Ambush combat event

Bitvalue: 134217728

Disciplined

Increased Chance for Delay combat event

Bitvalue: 268435456

Elastic Defence Specialist

Increased Chance for Tactical Withdrawal combat event

Bitvalue: 536870912

Blitzer

Increased Chance for Breakthrough combat event

Bitvalue: 1073741824

New Naval Unit Leader Traits
----------------------------

New Air Unit Leader Traits
--------------------------