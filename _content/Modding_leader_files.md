---
title: Modding_leader_files
---

::: mw-parser-output
::: {#toc .toc aria-labelledby="mw-toc-heading" role="navigation"}
::: {.toctitle dir="ltr" lang="en"}

## Contents {#mw-toc-heading}

[ ]{.toctogglespan}
:::

- [[ 1 ]{.tocnumber} [ Introduction ]{.toctext}](#Introduction)
- [[ 2 ]{.tocnumber} [ Getting Started ]{.toctext}](#Getting_Started)
- [[ 3 ]{.tocnumber} [ Fields Details ]{.toctext}](#Fields_Details) - [[ 3.1 ]{.tocnumber} [ Name ]{.toctext}](#Name) - [[ 3.2 ]{.tocnumber} [ ID ]{.toctext}](#ID) - [[ 3.3 ]{.tocnumber} [ Country ]{.toctext}](#Country) - [[ 3.4 ]{.tocnumber} [ Ranking Years
  ]{.toctext}](#Ranking_Years) - [[ 3.5 ]{.tocnumber} [ Ideal Rank ]{.toctext}](#Ideal_Rank) - [[ 3.6 ]{.tocnumber} [ Maximum Skill
  ]{.toctext}](#Maximum_Skill) - [[ 3.7 ]{.tocnumber} [ Traits ]{.toctext}](#Traits) - [[ 3.8 ]{.tocnumber} [ Skill ]{.toctext}](#Skill) - [[ 3.9 ]{.tocnumber} [ Experience ]{.toctext}](#Experience) - [[ 3.10 ]{.tocnumber} [ Loyalty ]{.toctext}](#Loyalty) - [[ 3.11 ]{.tocnumber} [ Type ]{.toctext}](#Type) - [[ 3.12 ]{.tocnumber} [ Picture ]{.toctext}](#Picture) - [[ 3.13 ]{.tocnumber} [ Start Year ]{.toctext}](#Start_Year) - [[ 3.14 ]{.tocnumber} [ End Year ]{.toctext}](#End_Year)
  :::

## [ Introduction ]{#Introduction .mw-headline}

Don\'t quite have enough Leaders to lead your armies? Well, Why not
create some more?

## [ Getting Started ]{#Getting_Started .mw-headline}

You can find leader files in Paradox Interactive\\Hearts of Iron
2\\db\\leaders\

The leader files are divided into multiple files based on the country.
These files are saved using Comma Separated Values format. Csv files use
a special character to separate fields. In Paradox games, it is semi
colon (;).

In the first line of each files you will see something like this:

Example:

    Name;ID;Country;Rank 3 Year;Rank 2 Year;Rank 1 Year;Rank 0 Year;Ideal Rank; Max Skill;Traits;Skill;Experience;Loyalty;Type;Picture;Start Year;End Year;x

This is not a part of leader data. It is there mainly to provide
guidance for you so that you will understand the order of the fields.

## [ Fields Details ]{#Fields_Details .mw-headline}

### [ Name ]{#Name .mw-headline}

Each Leader needs a name, it does not have to be unique but it will help
you to differentiate him from other leaders. A caveat, make sure the
name does not contain semi-color(;) or a colon(:).

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

### [ ID ]{#ID .mw-headline}

Each Leader needs to have a unique ID. Without one, the game will give
you an error message when loading a scenario.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

### [ Country ]{#Country .mw-headline}

You need to set the country tag for the leader. A tag is 3 characters
string that the game uses to easily differentiate countries. For example
France has the FRA tag.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

### [ Ranking Years ]{#Ranking_Years .mw-headline}

This is the date your leader was assigned each rank. This is used to
determine the rank of the leader upon loading a campaign.\
For example, if you wish to make Rommel a Field Marshall in the 1936
campaign, you will need to change his rank 0 to 1936 or lower.\
\
0 = Field Marshall\
1 = General\
2 = Lt. General\
3 = Mj. General\
Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

### [ Ideal Rank ]{#Ideal_Rank .mw-headline}

An Ideal rank will give a leader an increased speed in gaining
experience while his rank is lower than the specified one.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

### [ Maximum Skill ]{#Maximum_Skill .mw-headline}

This field sets the maximum skill that a leader can have.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

### [ Traits ]{#Traits .mw-headline}

This field contains the traits of the leader. Please read [leader
traits](/wiki/Leader_Traits "Leader Traits") for more information.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

In this case, the leader has the offensive doctrine, defensive doctrine
and trickster traits.

### [ Skill ]{#Skill .mw-headline}

This is the leader\'s Skill. Each skill point provides a 2% bonus on
troop strength in battle.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

### [ Experience ]{#Experience .mw-headline}

This field sets the leader\'s experience. The default is 0.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

### [ Loyalty ]{#Loyalty .mw-headline}

This field supposedly represents the leader\'s chance of being killed
randomly. Currently it is not used.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

### [ Type ]{#Type .mw-headline}

This is the leader\'s line of work.\
0 = Land Leader\
1 = Sea Leader\
2 = Air Leader

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

### [ Picture ]{#Picture .mw-headline}

This is the leader\'s in-game picture, The coresponding .bmp must be put
in Hearts of Iron 2\\GFX\\Interface\\pics. Assuming you have already
placed a picture file named \"NAPO.bmp\" in that folder, you can assign
the picture to the leader by placing the filename (minus file extension)
in the field.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

### [ Start Year ]{#Start_Year .mw-headline}

On January 1st of this year, the leader will enter the country\'s
service.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

### [ End Year ]{#End_Year .mw-headline}

This is when the Leader \"dies\". As of 1.2, the leader may die in that
year and subsequent years if he is engaged in battle.

Example:

    Napoleon;328328;FRA;1789;1807;1811;1813;0;9;22;9;0;5;0;NAPO;1789;1815;x

:::
