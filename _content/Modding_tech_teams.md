## Contents

-   [ 1 Introduction ](#Introduction)
-   [ 2 Basic Structure ](#Basic_Structure)
    -   [ 2.1 ID ](#ID)
    -   [ 2.2 Name ](#Name)
    -   [ 2.3 Picture ](#Picture)
    -   [ 2.4 Skill level ](#Skill_level)
    -   [ 2.5 Start and Endyear ](#Start_and_Endyear)
    -   [ 2.6 Specialities ](#Specialities)

##  Introduction 

One of the most interesting new features in HoI2 is the new research
system and one integral part of this are the tech teams. They outline
the historical strengths and weaknesses of a country and add a lot of
flavour. In best Paradox tradition they are totally modable.

You can find the tech team files in the */db/tech/teams/* subfolder.
They are saved in Paradox' usual csv format and can be easily edited
with a text editor or Excel.

##  Basic Structure 

The first line in each file isn't of much interest, only the country tag
needs to be adapted to the country you are currently working on. The
following lines list the tech teams.

Example:

    314;Supermarine;T314;9;1930;1970;aeronautics;technical_efficiency;artillery;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;x

###  ID 

Each tech team needs to have a unique ID which is a unsigned integer.
The files that come with the game have their IDs structed following a
simple principle: At first there is a number for each country (e.g. 3
for the UK or 76 for Afghanistan). This is followed by a two-digit
number counting the tech teams.

###  Name 

The names of the tech teams have to be written directly into the csv
file as they aren't language specific.

###  Picture 

The next column is the name of the picture for the tech team without the
".bmp" extension. These pictures are stored in the *gfx/interface/pics/*
subfolder. They use a quasi-greyscale (just copy the palette of a tech
team picture coming with the game) palette and are 96x96 pixels in size.
All the pictures that come with the game have a white margin of one
pixel around them, but his margin isn't necessary. (the picture doesn´t
have to be exactly 96x96 pixels, a **small** deviation is allowed)

###  Skill level 

The skill level is used to specify the overall quality of your research
team. The research teams in the game range from skill 1 to 9, but it is
possible to assign higher skills. Note that the skill determines the
cost of the research team. Though you could change the skill to higher
than 10 in the files, in-game it seems 10 is the highest you can go.

###  Start and Endyear 

The start- and endyears are pretty straightforward. The team will become
available on January 1st of the start year and will stop to be available
on January 1st of the endyear.

###  Specialities 

The next columns are filled with the [component
types](/wiki/List_of_Component_Types "List of Component Types") that the
team is specialized in. Only the first five are actually used by the
game. These specializations half the time need for developping a
component of this type.

When you are making new research teams for an unmodded tech tree you
should notice a few things:

-   Technical_efficiency is a very potent specialization as it is used
    for ships, tanks and aircraft and is almost always of a relatively
    high difficulty and double time so that it counts as much for this
    tech as two normal matching specializations.
-   Electronics is used for a lot of stuff, including almost every
    single vehicle, ship and aircraft. Giving a team electronics and
    technical_efficiency should be well considered as it will often make
    the team the best one for all three of these vital parts of the tech
    tree.

As a final point, be sure to add an blank new line by pressing enter if
you are using a text editor. Otherwise the game will not recognize your
new tech team.
