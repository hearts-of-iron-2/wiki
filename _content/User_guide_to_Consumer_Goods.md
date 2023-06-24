---
title: User_guide_to_Consumer_Goods
---
 [Template:Anthology](/wiki/index.php?title=Template:Anthology&action=edit&redlink=1 "Template:Anthology (page does not exist)")

Assuming normal difficulty, the CG need for your country is determined as a fraction of your total net IC, modified by all production bonuses. Generally it can be seen as the middle number in the IC indicator in the upper right corner of the screen. The formula to compute Consumer goods need CGN is following:

CGN = CGF \* IC \* WT \* ME \* DPE 

where

*   Consumer goods fraction (CGF) - is equal to 0.2
*   War Time Modifier (WT) - is equal to 1 when your nation is in peace and 0.5 if you are at war.
*   Minister Effect (ME) - is (100% + sum of minister modifiers to CG need)/100% - I have seen it as low as 0.65 and as high as 1.1, but it depends on what ministers you ave available.
*   Domestic Policy Effect (DPE) - comes from your slider settings. It is computed as (100% + sum of all DP sliders modifiers to CG need)/100%. Available sliders that give such modifiers are Democracy (+20;-20), Free Trade (-20;+20), Interventionist (+10;+100). Thus the value of DPE is 0.7-2.4

What the numbers mean
---------------------

The modifiers gained from ministers and DP sliders are added separately and then multiplied. Thus the relative effect from ministers lowering the CG needs is greater if you are in peace, and have high Democracy, Free Trade and Isolationist. In an extreme case the net effect of minister - 20 % CG can be greater than that of + 10 % IC.