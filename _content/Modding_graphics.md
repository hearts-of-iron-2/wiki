---
title: Modding_graphics
---
 Contents
--------

*   [1 Grayscale pictures in HoI2](#Grayscale_pictures_in_HoI2)
*   [2 Some troubleshooting advice](#Some_troubleshooting_advice)
*   [3 SKIF (Scytth & Kristoff Icons Factory)](#SKIF_.28Scytth_.26_Kristoff_Icons_Factory.29)
*   [4 DMP (Design Mod Projekt)](#DMP_.28Design_Mod_Projekt.29)

Grayscale pictures in HoI2
--------------------------

The grayscale pictures in HoI2 like the leader, minister or techteam pictures are not really grayscale pictures. Instead the first two colors are reserved for transparency. See the picture for an example. The left picture uses a normal grayscale palette, the right picture uses a grayscale palette were the first two colours are reserved for transparency.

[Same picture without and with correct palette](/wiki/index.php?title=Special:Upload&wpDestFile=Greyscale_transparency.png "File:Greyscale transparency.png")

The easiest way to handle transparency problems is by just using one picture which comes with the vanilla game (and thus has the right palette) as a template for your graphics. Just prepare your graphic with a normal grayscale palette and when it is finished, copy & paste it into the your picked template picture. Then save the picture under a new name and you are done.

You should also note that all the grayscale pictures have a white margin of one pixel width. This margin isn't necessary, but it usually increases the contrast.

Some troubleshooting advice
---------------------------

Right now this will only be a truobleshooting section, because you'll really need to know quite a bit about graphics before you can make your own graphics to a degree.

The important things to know are these:

*   Try to get a good graphics editing program. It's extraordinarily hard to do things like blend and create colour gradients with Paint.

*   Learn about the different graphic types BMP, JPG and GIF, their advantages and disadvantages. Especially BMP, because that is the graphic that Paradox uses 100% of the time. A very basic image format description can be found at [WikiPedia:Graphics\_file\_format Wikipedia](http://en.wikipedia.org/wiki/Graphics_file_format_Wikipedia "wikipedia:Graphics file format Wikipedia") .

**In-game, my graphic looks roughly like what I did, but it's all in funny colours!**

*   You have the wrong palette. In the GFX\\palette directory, you'll find the palettes used for most of the graphics. You have to either change these palettes or adopt them yourself in order to get your graphics looking right.

See [Modding Palettes](/wiki/Modding_Palettes "Modding Palettes") for more detail.

**In-game, my graphic is in all random coloured dots and looks NOTHING like the graphic that i made!**

[Screwed up Image File](/wiki/index.php?title=Special:Upload&wpDestFile=Problem1.gif "File:Problem1.gif")

*   If it looks something like the picture above, then your issue is that the size is incorrect. You'll need to change the graphic to the right size.

**Why do some of my graphics have bright green or bright pink borders around them?**

*   Paradox has two values for .bmp information. Bright green (RGB color 0,255,0) signifies transparent data. Information in this color will be clear, allowing you to see items behind the image such as skins. Bright pink (RGB color 255,0,255) signifies opaque data. Information in this color will function as a dark screen, such as can be seen in the diplomacy screen. Note that if you change these colors they will appear on screen.

**In-game, my province images aren't showing up.**

*   Province images will ONLY appear in provinces with urban terrain. To change a province into urban terrain, you'll need to edit the province.csv file.

**Where do I get the HoI2 Skin Template?**

*   Right here: [https://forum.paradoxplaza.com/forum/index.php?threads/hoi2-skin-template.180563/](https://forum.paradoxplaza.com/forum/index.php?threads/hoi2-skin-template.180563/)

SKIF (Scytth & Kristoff Icons Factory)
--------------------------------------

A fantastic little graphics touch-up to the in game unit icons.

[Paradox Interactive Forums SKIF Thread](https://forum.paradoxplaza.com/forum/index.php?threads/skif-icons-for-hoi2-dd.236771/)

[SKIF Website](http://www.star.net.pl/~scytth/hoi2/page/index.html)

  

DMP (Design Mod Projekt)
------------------------

A big Modproject with alot of new sprites and graphics for alot of countries.

[DMP Website](https://www.designmodproject.de/)