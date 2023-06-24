---
title: Modding_colorscales.csv
---
 Contents
--------

*   [1 Introduction](#Introduction)
*   [2 Basic Structure](#Basic_Structure)
*   [3 Meaning of the lines](#Meaning_of_the_lines)
*   [4 Examples of R,G,B Values](#Examples_of_R.2CG.2CB_Values)
*   [5 Colour Palette](#Colour_Palette)
*   [6 Colour Assignments](#Colour_Assignments)

Introduction
------------

colorscales.csv allows you to change the colours shown on the map -- the political map, the terrain map, any map. However, it does not let you **assign** colours to the various aspects of each map. We'll explain more on this later.

Basic Structure
---------------

Here is the typical structure of one of the entries in a colorscales.csv file.

Black;;; red;green;blue;index 120;120;120;0 60;60;60;29 40;40;40;50 10;10;10;64 

Two things to note about this -- _do not_ play with the first two lines, the hard returns or the semi-colons. These elements are vital to the structure of the file.

Meaning of the lines
--------------------

The first line (Black;;;, in this case), represents the "name" of the colour that is being represented. Thus, the name of this colour is "Black". 'NOTE': this, however does not mean that the colour will be black! Often times the name of the colour in colorscales.csv will not correspond to its appearance in-game. For example, Bulgaria is turquoise in the game, however, in actually it uses the colour named "LightBrown". Take note of this clearly.

The first three numbers in each line represent an R,G,B (red, green, blue) value from '1 to 255'. This represents how much of each of the three primary colours to add to that specific shade.

The last number in the line represents the index, which ranges from 0 to 64. 0 represents the middle of the province, usually the brightest colour on the map. 64 represents the edge of the province, or the darker colour. The first line 'must' have an index of 0 and the last line 'must' have an index of 64. The two lines in between must be in ascending order in between 0 and 64.

Basically what is happening is that as you go from the middle of the province to the edge, the index number is counting up from 0 to 64. We'll illustrate how to use this later.

Examples of R,G,B Values
------------------------

To somebody who has used a graphic editor, this will be very straight forward.

Let's see what the Red used for the Soviet Union's values are:

dark red;;; red;green;blue;index 255;0;64;0 220;0;64;13 180;0;64;24 76;0;64;64 

Which will produce this red:

[File:Darkred.png](/wiki/index.php?title=Special:Upload&wpDestFile=Darkred.png "File:Darkred.png")

Notice that the first column of values are very high, from 76-255, while the values in the green column are all 0, and the value in the blue column are 64. This combination will produce a red that predominates.

To produce a French blue, we can use these values:

blue;;; red;green;blue;index 255;255;255;0 255;255;255;0 170;180;195;0 90;90;130;64 

Note here that the first two values are listed as '255;255;255;0'. This means that they are thrown away and not used. The bottom two values, all have the blue column in very high numbers. However, note that the third line all has numbers above 170. When red, green and blue are all very high numbers, this produces a very light colour. Since blue is the highest, however, it will predominate:

[File:Blue.png](/wiki/index.php?title=Special:Upload&wpDestFile=Blue.png "File:Blue.png")

Another example will be brown, as found in Austria and Sinkiang:

brown;;; red;green;blue;index 179;182;130;0 180;132;80;20 155;111;66;50 150;105;64;64 

These values are harder to interpret, since brown is not red, green or blue. Brown is actually a dark orange, which would put it in between red and green, and we see in the bottom linethat red and green values are the highest. At the top line all the columns are equally high, and this produces a pale brown. Therefore at the edges of the province we expect to see a pronounced brown colour, while in the middle is a much more pale shade of brown:

[File:Brown.png](/wiki/index.php?title=Special:Upload&wpDestFile=Brown.png "File:Brown.png")

Colour Palette
--------------

There are 26 colours defined in colorscales.csv, but only about 23 are actually usable. Here is a list of them (Bold means that it holds a special purpose):

<table width="100%"><tbody><tr><td>Black</td><td><b>Green</b></td><td><b>Orange</b></td></tr><tr><td>light blue</td><td>light grey</td><td><b>light brown</b></td></tr><tr><td><b>dark yellow</b></td><td><b>yellow</b></td><td><b>dark grey</b></td></tr><tr><td>light yellow</td><td><b>grey</b></td><td><b>dark green</b></td></tr><tr><td>blue</td><td><b>light red</b></td><td><b>white</b></td></tr><tr><td>dark brown</td><td><b>red</b></td><td><b>light green</b></td></tr><tr><td>light orange</td><td>brown</td><td>dark blue</td></tr><tr><td>dark red</td><td><b>dark orange</b></td><td><b>water</b></td></tr><tr><td><b>border</b></td><td><b>border outline</b></td></tr></tbody></table>

Colour Assignments
------------------

Unfortunately, some color slots are hard-coded to correspond to map modes. For example, the "white" slot will always be used for snow, no matter what color "white" actually is (i.e., using the "white" slot for a nice shade of Russian red would make snow red on the weather map).

Here is a list of all the different colour Assignments:

| Terrain Mapmode |
| --- |
| Colour | Used For |
| Orange | Clear |
| DarkGray | Urban |
| Green | Forest |
| DarkGreen | Jungle |
| Yellow | Desert |
| LightGreen | Marsh |
| DarkOrange | Hills |
| Gray | Mountains |
| Weather Mapmode |
| Colour | Used For |
| White | Snow |
| Brown | Mud |
| Economic Mapmode |
| Colour | Used For |
| Green | Has at least one industry |
| DarkGreen | Has no industry |
| Supply Mapmode |
| Colour | Used For |
| Green | In Supply |
| Red | Out of Supply |
| ??? | Seazone with a Convoy |
| Partisan Mapmode |
| Colour | Used For |
| Green | Negligible or no partisan activity |
| ??? | Moderate or severe partisan activity is marked as shades of red |
| VP Mapmode |
| Colour | Used For |
| Green | Friendly province with a few Victory Pionts |
| Dark Green | Friendly province with many Victory Points |
| Yellow | Neutral province with a few Victory Points |
| DarkYellow | Neutral province with many Victory Points |
| Red | Enemy province with a few Victory Points |
| LightRed | Enemy province with many Victory Points |

NOTE: Attempting to apply the color "Water" to a nation can sometimes produce odd results. I attempted to make Canada "Water" but instead got the color used in the "LightOrange" slot.

Areas and regions also use these hardcoded slots, though I am not aware if you can define which area uses which slot. I am sure it is possible, but I am unsure of the location.