---
title: Modding_leader_files
---
## Contents

-   [ 1 Introduction ](#Introduction)
-   [ 2 Getting Started ](#Getting_Started)
-   [ 3 Fields Details ](#Fields_Details)
    -   [ 3.1 Name ](#Name)
    -   [ 3.2 ID ](#ID)
    -   [ 3.3 Country ](#Country)
    -   [ 3.4 Ranking Years ](#Ranking_Years)
    -   [ 3.5 Ideal Rank ](#Ideal_Rank)
    -   [ 3.6 Maximum Skill ](#Maximum_Skill)
    -   [ 3.7 Traits ](#Traits)
    -   [ 3.8 Skill ](#Skill)
    -   [ 3.9 Experience ](#Experience)
    -   [ 3.10 Loyalty ](#Loyalty)
    -   [ 3.11 Type ](#Type)
    -   [ 3.12 Picture ](#Picture)
    -   [ 3.13 Start Year ](#Start_Year)
    -   [ 3.14 End Year ](#End_Year)

##  Introduction 

Don't quite have enough Leaders to lead your armies? Well, Why not
create some more?

##  Getting Started 

You can find leader files in Paradox Interactive\Hearts of Iron
2\db\leaders  

The leader files are divided into multiple files based on the country.
These files are saved using Comma Separated Values format. Csv files use
a special character to separate fields. In Paradox games, it is semi
colon (;).

In the first line of each files you will see something like this:

Example:

    Name;ID;Country;Rank 3 Year;Rank 2 Year;Rank 1 Year;Rank 0 Year;Ideal Rank;
    Max Skill;Traits;Skill;Experience;Loyalty;Type;Picture;Start Year;End Year;x

This is not a part of leader data. It is there mainly to provide
guidance for you so that you will understand the order of the fields.

##  Fields Details 

###  Name 

Each Leader needs a name, it does not have to be unique but it will help
you to differentiate him from other leaders. A caveat, make sure the
name does not contain semi-color(;) or a colon(:).

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

###  ID 

Each Leader needs to have a unique ID. Without one, the game will give
you an error message when loading a scenario.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

###  Country 

You need to set the country tag for the leader. A tag is 3 characters
string that the game uses to easily differentiate countries. For example
France has the FRA tag.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

###  Ranking Years 

This is the date your leader was assigned each rank. This is used to
determine the rank of the leader upon loading a campaign.  
For example, if you wish to make Rommel a Field Marshall in the 1936
campaign, you will need to change his rank 0 to 1936 or lower.  
  
0 = Field Marshall  
1 = General  
2 = Lt. General  
3 = Mj. General  
Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

###  Ideal Rank 

An Ideal rank will give a leader an increased speed in gaining
experience while his rank is lower than the specified one.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

###  Maximum Skill 

This field sets the maximum skill that a leader can have.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

###  Traits 

This field contains the traits of the leader. Please read [leader
traits](/wiki/Leader_Traits "Leader Traits") for more information.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

In this case, the leader has the offensive doctrine, defensive doctrine
and trickster traits.

###  Skill 

This is the leader's Skill. Each skill point provides a 2% bonus on
troop strength in battle.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

###  Experience 

This field sets the leader's experience. The default is 0.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

###  Loyalty 

This field supposedly represents the leader's chance of being killed
randomly. Currently it is not used.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

###  Type 

This is the leader's line of work.  
0 = Land Leader  
1 = Sea Leader  
2 = Air Leader

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

###  Picture 

This is the leader's in-game picture, The coresponding .bmp must be put
in Hearts of Iron 2\GFX\Interface\pics. Assuming you have already placed
a picture file named "NAPO.bmp" in that folder, you can assign the
picture to the leader by placing the filename (minus file extension) in
the field.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

###  Start Year 

On January 1st of this year, the leader will enter the country's
service.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

###  End Year 

This is when the Leader "dies". As of 1.2, the leader may die in that
year and subsequent years if he is engaged in battle.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x
