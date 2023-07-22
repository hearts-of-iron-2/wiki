---
title: Modding_inc_files
---

::: mw-parser-output
Like all modding - **Make Backups**

Okay, now on to the .inc files. For the purposes of this page, I\'ll be
using the persia.inc file out of the 1936 scenario folder. The path is
/scenarios/1936/persia.inc (if you want to change things to see their
effect in game . First, at the top, you\'ll see something like this

    province = { id = 1492 anti_air = 2 naval_base = { size = 3 current_size = 3 } air_base = { size = 1 current_size = 1 } }

This section of the .inc file will edit a particular province in the
map. In this case, province id #1492 is be altered to include AA guns
level 2, a naval base at level 3, and a small air base (level 1). If you
changed any of these numbers (up to a maximim of 10), those buildings
would be at that level when you started up the game. In this case,
however, you can specificy the maximum size (naval_base size = 3} and
have the current_size be less than that. Basically, you can use this
feature to give the feeling of having recently conquered that province
(as normal in the game)

But what if we wanted to make a change here? Add some much needed IC to
Persia? There are two ways. I prefer the first, but let me show both
ways to the same end.

     ic = { size = 50 current_size = 50 }

or

     ic = 50

Both of these would create a whopping 50 factories in province id #1492.
This can theoretically be done with any part of the province\'s
characteristics (resources, land forts, etc), up to their logical
maximums (10 for AA, bases, etc\_. You could set the max size (the size
characteristic) to 50 and then the current_size to 0 and force it to
work its way back up to full capacity. But that\'s just playing with
numbers.

Mind you, there is a subtle difference between the two syntaxes, and the
same applies equally to other province improvements like infrastructure,
naval bases, air bases, etc. The first variant **defines** the new size
of the specified installation type, the second variant **modifies** the
size.

What does this mean? Well, if you would use the first syntax on province
1184 (Tokyo) instead of province 1492 in this example, then Tokyo would
simply end up with 50 IC in the scenario. If you would use the second,
simpler syntax, then those 50 IC would be added to any IC already
present. Tokyo receives 20 IC from the province.csv file, so it would
end up with 70 IC in the scenario.

This also works cumulatively in the scenario files. If you would (by
mistake for example) create two province sections for the same province,
both having ic = 50 as contents, then that province would end up with
50 + 50 + province.csv default value = 100+ IC. If you had used the more
elaborate syntax, then the province still ends up with 50 ic, no matter
how often it\'s repeated in the scenario setup.

One extra note. If you want to use this syntax to override or adjust the
province infrastructure, be advised that the size and current_size
values must be specified as values between 0.0 and 1.0, which deviates
from the representation in the province.csv file. In the province.csv
file, infrastructure is represented as a percentage value ranging from
10 through 100.

On to more important things.

After all the province alterations (some files like the US have plenty
of them\_ for the campaign, you\'ll come to what looks like a normal
header.

    country = { tag = PER

If you want to make this country a puppet of another, or grant military
control to another, then add\

     control = GER

For military control of Persia to Germany (any nation\'s tag can be
used), and

     puppet = GER

For Persia to be a puppet of Germany (agian, any nation\'s tag

This will be followed by

     # Resource Reserves energy = 1000 metal = 1000 ...

and so on. Editing these increases the reserves a country starts with.
Next is

     capital = 1502

Which is the capital of Persia

     manpower = 96

The amount of available manpower, and finally

    policy = { date = { year = 0 month = january day = 0 } democratic = 3 political_left = 4 freedom = 3 free_market = 5 professional army = 3 defense_lobby = 5 interventionism = 5

These are the locations of the sliders of that particular country. While
1 is all the way to the right, 10 is all the way to the left. I figure
you understand how to manipulate these.

Next come three \"province\" sections - owned, controlled and national.
This is where you can really cause some problems.

Any changes to the first two will cause problems. Why? Lets say you add
province #1 to the owned and controlled list. Now both Persia and
Denmark both own and control the same province. That can\'t happen. So
if you change this by adding or subtracting a province, make sure that
change is reflected elsewhere. In this case, if you add province #1, you
would need to go into the Denmark .inc file and remove it there. Those
wanting to make some of the revolt.txt nations start in existance will
need to make sure of this.

National provinces, however, do not cause this problem. Many nations can
claim the same lands. Heck, what are most wars fought over, if not
resources?

Generally, You would see the diplomacy section.

    diplomacy = { relation = { tag = AFG value = 25 } relation = { tag = DEN value = 50 } relation = { tag = ENG value = 25 } relation = { tag = IRQ value = 125 } relation = { tag = SAU value = 100 } relation = { tag = SOV value = -20 } relation = { tag = SWE value = 50 } relation = { tag = TUR value = -50 } }

You can use these to set that country\'s relations upon scenario load.
If you want them to start off with military access to a certain country,
add access = yes after the relation value but before the closing
bracket, like so:

    relation = { tag = SOV value = -20 access = yes }

To give military access to the Soviet Union.

If you want that country to start with a guarantee of independence for
another country, add guaranteed = { day = NA month = NA year = NA }
Replacing the NA\'s with the day, month, and year respectively, like so

    relation = { tag = AFG value = 25 guaranteed = { day = 1 month = january year = 1936 }

And now Persia is guaranteed independence by Afghanistan.

Next, comes the Techs (I\'m not going to type this out, its pretty
basic. Adding other Tech IDs here will give the country those techs to
start out with. Simple, eh?

Now comes the biggest part. And this can be a toughie. The first part of
it looks like this\...

     landunit = { location = 1502 name = "Lasgar Parsi" id = { type = 16600 id = 1 } division = { id = { type = 16600 id = 2 } name = "1. Dastebandi Sarbaze Piyade" type = infantry extra = artillery } .... }

This is the land units that Persia will have when starting the campaign.
Note two big things. First the \"type\" ID. This ID **must** be unique
compared to all the countries in the campaign. I know that 5000+ (tested
through 5050) will not conflict with any other nations, but that is only
if you are creating new nations. Next is the id. This must be unique
among the nations units. Notice that the unit has a 1, then the division
has 2. The other division (not seen here) has a 3. If we were to copy
these units (from landunit down to the last bracket) we would only need
to change the ID numbers to 4, 5, and 6, and they would appear in the
game.

But, at the bottom is another unit, or so it seems. Notice the \'#\'s?
These are basically the comments for the language HoI uses (like // in
C). This means the parser will skip these when reading this. If we were
to remove these, Persia would start off with a Destroyer in province
1497 (based there also).

Well, I think that about covers it. If I run across something more
useful, I\'ll edit this. And feel free to edit this yourself. I know
there are things I\'ve missed. Hope this helps!

\--
[Tux](/wiki/index.php?title=User:Tux_the_Penguin&action=edit&redlink=1 "User:Tux the Penguin (page does not exist)"){.new}
03:46, 5 May 2005 (CEST)
:::
