---
title: Conquering_-_What_do_I_gain?
---

[Template:Anthology](/wiki/index.php?title=Template:Anthology&action=edit&redlink=1 "Template:Anthology (page does not exist)")

## Contents

- [1 Importance of National Provinces](#Importance_of_National_Provinces)
- [2 How Do You See What Your National Provinces Are](#How_Do_You_See_What_Your_National_Provinces_Are)
- [3 Industrial Capacity](#Industrial_Capacity)
- [4 Resources](#Resources)
- [5 Manpower](#Manpower)
- [6 Partisans](#Partisans)
- [7 Puppets](#Puppets)
- [8 Colonies](#Colonies)
- [9 \\db\\misc.txt](#.5Cdb.5Cmisc.txt)

## Importance of National Provinces

The game makes an important distinction between national and foreign provinces. In national provinces, you get full use of the manpower, resources, and industrial capacity. In foreign non-national provinces, however, you only get fractional use of the manpower, resources, and industrial capacity, plus you often get partisan problems that affect your Transportation Capacity:

Industrial Capacity in foreign provinces: you get 20% plus any % added by a minister that increases foreign IC. So a Prince of Terror would add his 15% foreign IC to the base of 20% giving you 35% of foreign IC.

Resources in foreign provinces: you get about half the resources in a foreign province.

Manpower in foreign provinces: there is a difference between the two games. In HOI2 you get zero foreign manpower unless you have a minister who has a foreign manpower trait. In Doomsday you get 10% of the manpower plus more for a minister that has the foreign manpower trait.

## How Do You See What Your National Provinces Are

Use the diplomatic map mode. Then click on your country or on any country. National provinces are displayed in green with a dark red filled in bullet/circle. Some countries start some scenarios with national provinces being owned by foreign countries: France owns Metz but Germany has claims on it, so Metz is a national province for both France and Germany. National provinces can also be created by events: both Germany and the Soviet Union get a lot of national claims via the historic events leading up to war.

## Industrial Capacity

The % gain that you get (20%) is controlled by a parameter in \\db\\misc.txt This can be modified. Ministers with a foreign IC trait add their percentage to this base. Note that foreign IC, however, is not broken out and displayed anywhere in the game. In both the province and the statistics folder page, you will see the number of factories in a foreign province, not the actual amount of IC that you get. Foreign IC is instead bundled into your base IC number. What you see is not what is get!

## Resources

The amount of resources that you get is NOT set in \\db\\misc.txt The % that you get is determined by the executable file and can not be modified. The game also makes a distinction between controlled and annexed provinces: you get 25% more resources when you own a province rather than simply controlling a province. Typically you get about 50% of resources in a normal difficulty level game from a foreign province (the exact formula is described in this thread: [http://forum.paradoxplaza.com/forum/showthread.php?209413-Formula-for-resources-from-non-national-provinces](http://forum.paradoxplaza.com/forum/showthread.php?209413-Formula-for-resources-from-non-national-provinces) ) Note that resources unlike IC is WYSIWYG: what you see is what you get. Difficulty setting also affects the amount of resources that you get when you control provinces.

## Manpower

This parameter is also set in \\db\\misc.txt In HOI2 you get zero manpower from foreign provinces while in Doomsday you get 10% manpower. This parameter in HOI2 is:

\# Non-National Province Manpower Multiplier (income per day.) Note: Some types of ministers can affect this value.

0.0

In Doomsday, however, you get 10% manpower from this parameter:

\# Non-National Province Manpower Multiplier (income per day.) Note: Some types of ministers can affect this value.

0.001

In both games, any foreign manpower % from a minister is added. Foreign manpower like IC is not directly shown in the game: what you see is not what you get.

In both games, there is an odd rule with capitals. When you have provinces that are not directly connected back to your capital, you lose all non connected manpower when you are at war. This would typically be a situation where your capital is on an island or on a separate continent: Japan, UK, USA, Australia, etc. are affected by this rule. For the UK, this rule overrides the national manpower rule for provinces in India: the UK loses the manpower in India when at war as does Japan with the provinces it own on mainland Asia (such as Korea). Note that if a country is somehow broken up in parts, manpower is lost from any province when at war that does not a direct connection back to the capital (allies or puppets break up a direct connection); one liberated country that is affected by this is the Arab Federation because the default liberated provinces leave Suez in control of the puppet master and this cuts off a large part of this liberated country from it's capital.

## Partisans

When you conquer provinces, you often get partisan problems that affect your Transportation Capacity (TC)and which can have a small effect on your base IC. The base number for partisans is affected by your slider settings with open societies having fewer base partisans while closed societies have more base partisan activity. Annexed versus occupied is another parameter. Different parts of the world also have different partisan settings: most of Africa and parts of Asia and the Pacific islands have zero partisans while other areas have less than the standard number of 25% partisan levels when annexed for a dictatorship. The best ways to control partisan levels are garrison divisions on anti partisan missions or by liberation. Partisan levels are also affected by the partisan and nationalism parameters in \\db\\misc.txt

## Puppets

One way that you can get rid of long term partisan activity is to liberate a puppet (diplomatic menu). Liberating a puppet usually lowers your IC, which lowers your TC, but getting rid of partisans might improve your TC when base partisan levels in conquered provinces are high. Liberating a country gives you a dissent hit which is a direct read from your democratic to authoritarian slider; note that in Doomsday only, liberating a small country gives you 1/2 of the normal dissent.

If a puppet is liberated, it becomes part of your alliance and you can military control their units via the diplomatic menu.

Countries that can be liberated are set up by the \\db\\revolt.txt file which can be edited. This file uses province ID numbers which can either be downloaded via Wiki or seen on screen by using the showid cheat.

Puppets get 100% use of the manpower, IC, and resources in their (national) provinces. Puppets also give their puppet master any resources greater than 1000, either automatically via a direct connection with their puppet master or via convoys. Liberated countries get all of your finished technology research, but they need to have at least one port/airfield to get all the naval/air research accordingly. This rule is most probably true for rocket and nuclear tech trees too (build of rocket test site and nuclear reactor are prerequisite here).

When you are conquering another country, instead of annexing you can sometimes try via the diplomatic menu to create a negotiated peace which sets up a puppet. Countries in the three major alliances (Allies, Axis, Cominterm) will almost never accept a peace offer, instead you must annex them. If a country is not in these major alliances, you might instead try to puppet them via a negotiated peace rather than annexing them: if a country is puppeted via a negotiated peace, it retains it's remaining military units, while an annexed country loses all of it's armed forces.

## Colonies

There are a few tricky rules for colonies. Colonies give 10% of national manpower instead of 100%. Colonies are considered to be foreign for IC and resources unless they show up as national provinces: for the UK contrast their national provinces in India with colonies in Kenya. If the European powers want to liberate a country, they get a dissent hit; how big that dissent hit is controlled by the colonial_release file which is in your Doomsday \\db\\ folder or in your HOI2 \\db\\events\\ folder (different places in different games). Note that there are sometimes events which liberate colonies such as the UK liberating India, and these events would have their own parameters for dissent or other effects.

## \\db\\misc.txt

This folder has many game parameters for IC, TC, and combat. It can be edited to suit your preferences. If you want to edit it, first make a backup copy. Also by default this file and many others are write protected, so you often need to first change the properties so that you can edit it.
