---
title: General_Modding_FAQ
---
**Q** : What do I need to edit to make a new Country?  
**A** : Making a new country from scratch is alot of work. First you
would need to **Hearts of Iron 2\config\world_names.csv** and make
change the entry for one of the userdefined countries (U00 - U19) to
what you want your new country to be called. Now you take the tag for
the country you just named and place it in the list of selectable
nations in the [Scenario
File](/wiki/Modding_eug_files "Modding eug files") you wish to use it
in. Now you must make a [.inc
File](/wiki/Modding_inc_files "Modding inc files") for that nation. You
must also place an entry for that nation **Hearts of Iron
2\db\revolt.txt** that lists core provinces and the nations Capital.
Finally you must place a sheild in **Hearts of Iron 2\GFX\map\shields**
and a flag in **Hearts of Iron 2\GFX\map\flags**  
  
**Q** : What about Ministers and Leaders?  
**A** : You must make a [Minister
File](/wiki/Modding_minister_files "Modding minister files") and [Leader
File](/wiki/Modding_leader_files "Modding leader files") for that
country. Your tag is the User-Defined tag that you changed into your
country in world_names.csv  
  
**Q** : Where do the pictures for events go?  
**A** : Hearts of Iron 2\GFX\events_pics  
  
**Q** : How do I change the amount of provinces required to liberate a
nation  
**A** : Go to **Hearts of Iron 2\db\revolt.txt** , Search for the tag of
the country which you wish to change. The date and expiry date are the
years that the country becomes available to liberate and stops being
liberatable. The *minimum* field is the minimum amount of provinces
required the liberate that nation, the nation wil always get these
provinces upon being liberated and you will need all of them to liberate
it. The *extra* field is extra provinces that the nation can receive if
you control them. If you do not control them, then the liberated nation
will instead get national claims on them. The Capital is the liberated
nation's capital. intrinsic_gov_type means that only nations of that
type may liberate this nation. It also means that if a nation which this
liberatable nation has cores in/on is couped by that a governemnt of
that type, it will become this liberatable nation. You may comment
things out in revolt.txt  
  
**Q** : I see something like EVT_2200_DESC. What does that mean?  
**A** : I means that piece of text was exported to a config file, In
**Hearts of Iron 2\config** you export long pieces of text for easy use.
When looking for exported text, click on the corresponding .csv file to
the file you where modding. That is, Exported event text is in
event_text while exported tech text is in tech_names. You can also edit
and change game text with .csv files.  
You can export something of your choosing, in three easy steps:  
1. Determine what the export name is to be.  
2. Place that name, followed by a semi-colon.  
3. Place the text you want to export.  
A semi-colon after the exported text is the exported text that will be
used in different versions of the game. (IE: One semi-colon after the
exported text is the exported text that will be used in the French
version of Hoi, While the semi-colon after that is the version that will
be used in the German version.)  
  
**Q** : How do I change each countries Politcal Map-mode color?  
**A** : Go to **Hearts of Iron 2\db\country.csv** , Search for the tag
of the country you want to change, and change each color. Beware that
some colors are not what they see, For Example, Light green is more of a
Mint-white.  
  
**Q** : I made an Event Picture/Minister Photo/Leader Photo and it's all
streched out!  
**A** : It's too big. See [Modding
Graphics](/wiki/Modding_graphics "Modding graphics")  
  
**Q** : How do you add a new unit type?  
**A** : You don't. Unit types are hardcoded, apparently.
