---
title: Modding_minister_files
---

::: mw-parser-output
::: {#toc .toc aria-labelledby="mw-toc-heading" role="navigation"}
::: {.toctitle dir="ltr" lang="en"}

## Contents {#mw-toc-heading}

[ ]{.toctogglespan}
:::

- [[ 1 ]{.tocnumber} [ Introduction ]{.toctext}](#Introduction)
- [[ 2 ]{.tocnumber} [ Getting Started ]{.toctext}](#Getting_Started) - [[ 2.1 ]{.tocnumber} [ The Ruling Cabinet
  ]{.toctext}](#The_Ruling_Cabinet) - [[ 2.2 ]{.tocnumber} [ ID ]{.toctext}](#ID) - [[ 2.3 ]{.tocnumber} [ Start(Designation)
  ]{.toctext}](#Start.28Designation.29) - [[ 2.4 ]{.tocnumber} [ Name ]{.toctext}](#Name) - [[ 2.5 ]{.tocnumber} [ Pool ]{.toctext}](#Pool) - [[ 2.6 ]{.tocnumber} [ Ideology ]{.toctext}](#Ideology) - [[ 2.7 ]{.tocnumber} [ Personality ]{.toctext}](#Personality) - [[ 2.8 ]{.tocnumber} [ Loyalty ]{.toctext}](#Loyalty) - [[ 2.9 ]{.tocnumber} [ Picturename ]{.toctext}](#Picturename) - [[ 2.10 ]{.tocnumber} [ Further Notes
  ]{.toctext}](#Further_Notes)
  :::

## [ Introduction ]{#Introduction .mw-headline}

Editing Ministers is pretty easy, In \\Hearts of Iron 2\\db You will
find a folder called ministers. In this file are the ministers for each
country.

Don\'t quite fancy Stanley Baldwin a Prince of Terror? Think Hjalmar
Schacht should be a Laissez Faire Capitalist? Keep reading to find out
how to make it so.

## [ Getting Started ]{#Getting_Started .mw-headline}

The first line in each minister file is just a contents key, the only
thing that needs to be changes is the country tag which should be
adapted to the country you are currently working on. Below is an example
of the first line in a file.

Example:

    BHU;Ruling Cabinet - Start;Name;Pool;Ideology;Personality;Loyalty;Picturename;x

In this example, I am editing Bhutan\'s ministers. Replace the BHU tag
with the country you are working on(Assuming it\'s a Custom Country) or
just open the file for the country you are working on.

Also note that as with the Leaders and Tech team files, each field of
information is seperated by a semi-colon(;).

### [ The Ruling Cabinet ]{#The_Ruling_Cabinet .mw-headline}

The first ten ministers after the content key line will be the ministers
that will be ruling the country at gamestart. The ones after the
;Replacements;;;;;;;x line are available replacement ministers.

Note that Heads of State and Heads of Government may only be changes by
events or slider alterations.

Example:

    GER;Ruling Cabinet - Start;Name;Pool;Ideology;Personality;Loyalty;Picturename;Country 1;Head of State;Adolf Hitler;NA;NS;Powerhungry Demagogue;High;M1;x 2;Head of Government;Rudolf Hess;NA;NS;Silent Workhorse;High;M40;x 3;Foreign Minister;Constantin von Neurath;NA;FA;Great Compromiser;High;M3;x 4;Minister of Armament;Werner von Blomberg;NA;NS;Infantry Proponent;High;M4;x 5;Minister of Security;Wilhelm Frick;NA;NS;Prince of Terror;High;M5;x 6;Head of Military Intelligence;Wilhelm Canaris;NA;FA;Dismal Enigma;Medium;M6;x 7;Chief of Staff;Ludwig Beck;NA;PA;School of Manoeuvre;High;M7;x 8;Chief of Army;Werner von Fritsch;NA;PA;Armoured Spearhead Doctrine;High;M8;x 9;Chief of Navy;Erich Raeder;NA;NS;Decisive Naval Battle Doctrine;High;M9;x 10;Chief of Air Force;Hermann Göring;NA;NS;Army Aviation Doctrine;Very High;M10;x ;Replacements;;;;;;;x

### [ ID ]{#ID .mw-headline}

The first part of each line is the ministers ID field. Each minister
needs to have a unique ID. Otherwise the game will give you an error
message upon loading a scenario.

Example:

    1;Head of State;Adolf Hitler;NA;NS;Powerhungry Demagogue;High;M1;x

### [ ]{#Start(Designation)} [ Start(Designation) ]{#Start.28Designation.29 .mw-headline}

This is the Ministers Job. Below is an example and a list of alternative
Jobs.

Example:

    1;Head of State;Adolf Hitler;NA;NS;Powerhungry Demagogue;High;M1;x

Example:

    Head of State Head of Government Foreign Minister Minister of Armament Minister of Security Head of Military Chief of Staff Chief of Army Chief of Navy Chief of Air Force

### [ Name ]{#Name .mw-headline}

Next is the name of the minister, Unless the poor guy/girl was born
without a name, You will need to write their name in this field.

Example:

    1;Head of State;Adolf Hitler;NA;NS;Powerhungry Demagogue;High;M1;x

### [ Pool ]{#Pool .mw-headline}

This is the year each minister becomes available, Ministers with NA in
this field are available from the very start.

Example:

    1;Head of State;Adolf Hitler;NA;NS;Powerhungry Demagogue;High;M1;x 77;Minister of Armament;Hjalmar Schacht;37;NS;Administrative Genius;Medium;M14;x

### [ Ideology ]{#Ideology .mw-headline}

This is what Ideology the minister is. Countries can only select
ministers which have their Ideology or a similar one. (IE: Germany can
only have PA, NS, or FA Ministers if they are National Socialist)

Example:

    Fascist Ideologies NS - National Socialist PA - Paternal Autocrat FA - Fascist

Example:

    Democratic Ideologies SC - Social Conservative SD - Social Democrat SL - Social Liberal ML - Market Liberal

Example:

    Communist Ideologies ST - Stalinist LWR - Left wing Radical LE - Leninist

Example:

    1;Head of State;Adolf Hitler;NA;NS;Powerhungry Demagogue;High;M1;x

### [ Personality ]{#Personality .mw-headline}

This is the trait the minister has, Here you assign them what trait you
think best fits them(or not). Below is a list of traits, You can find
their effects on the wiki:
[Minister_Traits](/wiki/Minister_Traits "Minister Traits")

Head of state Example:

    Powerhungry Demagogue Stern Imperialist Barking Buffoon Benevolent Gentleman Insignificant Layman Autocratic Charmer Weary Stiffneck Ruthless Powermonger Pig-headed Isolationist Popular Figurehead Die-hard Reformer

Head of Government Example:

    Political Protege Flamboyant Tough Guy Backroom Backstabber Silent Workhorse Smiling Oilman Naive Optimist Corporate Suit Old General Old Air Marshal Happy Amateur Old Admiral Ambitious Union Boss

Foreign Minister Example:

    Iron Fisted Brute General Staffer Ideological Crusader Great Compromiser Apologetic Clerk Biased Intellectual The Cloak N Dagger Schemer

Minister of Armament Example:

    Military Entrepreneur Laissez Faires Capitalist Air Superiority Proponent Strategic Air Proponent Administrative Genius Tank Proponent Corrupt Kleptocrat Resource Industrialist Battle Fleet Proponent Air to Sea Proponent Theoretical Scientist Air to Ground Proponent Infantry Proponent Submarine Proponent

Minister of Security Example:

    Compassionate Gentleman Man of the People Prince of Terror Crime Fighter Silent Lawyer Back Stabber Efficient Sociopath

Head of Military Intelligence Example:

    Industrial Specialist Political Specialist Dismal Enigma Naval Intelligence Specialist Technical Specialist Logistics Specialist

Chief of Staff Example:

    School of Fire Support School of Manoeuvre School of Defence School of Psychology School of Mass Combat

Chief of Army Example:

    Guns and Butter Doctrine Armoured Spearhead Doctrine Decisive Battle Doctrine Static Defence Doctrine Elastic Defense Doctrine

Chief of Navy Example:

    Base Control Doctrine Open Seas Doctrine Decisive Naval Battle Doctrine Power Projection Doctrine Indirect Approach Doctrine

Chief of Air Force Example:

    Carpet Bombing Doctrine Naval Aviation Doctrine Air Superiority Doctrine Army Aviation Doctrine Vertical Envelopement Doctrine

Example:

    1;Head of State;Adolf Hitler;NA;NS;Powerhungry Demagogue;High;M1;x

### [ Loyalty ]{#Loyalty .mw-headline}

This supposedly represents the ministers chance of being killed by a
random event. Not sure if this is implemented or not.

Example:

    1;Head of State;Adolf Hitler;NA;NS;Powerhungry Demagogue;High;M1;x

### [ Picturename ]{#Picturename .mw-headline}

This is the ministers picture, The coresponding .bmps can be found in
Hearts of Iron 2\\GFX\\Interface\\pics. If you are creating a new
picture, It should be 36 x 50 pixels.

Example:

    1;Head of State;Adolf Hitler;NA;NS;Powerhungry Demagogue;High;M1;x

### [ Further Notes ]{#Further_Notes .mw-headline}

Apparently, at least in the version of Doomsday that I have, there are
some leaders that ship with too long of names to be used. For example,
German leader number 49 will not become head of government, even through
event. However, if his name is shortened, all of a sudden the game stops
ignoring his existence. So if you\'re having a problem with a leader you
added not showing up in game, at all, then you might try using a shorter
version of their name.
:::
