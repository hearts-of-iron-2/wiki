---
title: Transport_Capacity
---


## Contents

-   [ 1 Transport Capacity ](#Transport_Capacity)
    -   [ 1.1 Technologies ](#Technologies)
    -   [ 1.2 What happen if my TC is overloaded (displayed in red)?
        ](#What_happen_if_my_TC_is_overloaded_.28displayed_in_red.29.3F)
    -   [ 1.3 Further Information ](#Further_Information)
        -   [ 1.3.1 Transport Capacity in HOI2 v1.3
            ](#Transport_Capacity_in_HOI2_v1.3)

#  Transport Capacity 

**Transport Capacity** (TC) is described in the TC tooltip rollover as
*trucks trains and river barges which are used to supply your armed
forces with fuel and supply.* TC is an abstract number as it is
primarily based upon Industrial Capacity. The various modifiers that
affect TC are shown in the tooltip:

*TC is a direct function of IC – each point of IC gives you 1.5 TC*

Note that IC for the TC calcuation is overall IC - it is not base IC.
Multiply your overall IC by the two modifiers (technology and minister)
and then by your infantry supply techs to get your Transport Capacity
number. Ex.: multiply overall modified IC of 349 by 1.5 and then by 1.3
if you have the three infantry supply techs to get 681 TC.

The tooltip then repeats the overall TC status by displaying Used TC and
Available TC. That line is followed by a list of modifiers that affect
the TC calculation:

-   *Technology Modifier on IC -\> TC*
-   *Minister Modifier on IC -\>TC*
-   *Fuel and Supply Transportation*
-   *Occupied Territory Maintenance*
-   *Redeployment Load*
-   *Partisan Activity*
-   *Undeployed Bases*

  
The net effect of these modifiers are calculated and shown as:

*== Current supply efficiency:* 100.00%

Also note that convoys used for oversea resources and units are NOT part
of the TC calculation. TC is very abstract as it is primarily based upon
Industrial capacity. If convoys were used for countries like
[Japan](/wiki/Japan "Japan") ,
[UK](/wiki/index.php?title=UK&action=edit&redlink=1 "UK (page does not exist)")
, and [USA](/wiki/USA "USA") as part of the TC calculation, that would
also severely handicap those countries that have to operate overseas and
make a difficult situation almost impossible to handle within the game.

##  Technologies 

Each of the following technology's has a positive +10% TC modifier:

-   [Rear Area Supply
    Dumps](/wiki/Infantry_Tech_Tree#Rear_Area_Supply_Dumps "Infantry Tech Tree") (1936)
    *note; some contries have this at the beginning of the 1936
    scenerio*
-   [Deep Logistic
    Organization](/wiki/Infantry_Tech_Tree#Deep_Logistic_Organization "Infantry Tech Tree")
    (1940)
-   [Frontline Supply
    Service](/wiki/Infantry_Tech_Tree#Frontline_Supply_Service "Infantry Tech Tree")
    (1942)
-   [Advanced Logistic
    Organization](/wiki/index.php?title=Advanced_Logistic_Organization&action=edit&redlink=1 "Advanced Logistic Organization (page does not exist)") (1945)
    -Armageddon-

##    What happen if my TC is overloaded (displayed in red)? 

Your troops will have lower [supply
efficiency](/wiki/index.php?title=Supply_efficiency&action=edit&redlink=1 "Supply efficiency (page does not exist)")
, they gain
[org](/wiki/index.php?title=Org&action=edit&redlink=1 "Org (page does not exist)")
slower and thier
[speed](/wiki/index.php?title=Speed&action=edit&redlink=1 "Speed (page does not exist)")
will be reduced.

##  Further Information 

Refer to the [Transport Capacity and Supply Efficiency
FAQ](/wiki/Transport_Capacity_and_Supply_Efficiency_FAQ "Transport Capacity and Supply Efficiency FAQ")
for more information.

###  Transport Capacity in HOI2 v1.3 

-   Partisan Activity greatly increased by a factor of 4x. You need to
    actively suppress partisans in order to improve your TC. \[# TC Load
    from partisans changed from 3.0 to 12.\]
-   Base Partisan levels no longer decrease in annexed territory.
    Partisan levels slowly rise in all non national territory.
    \[controlled by Nationalism settings in \db\misc.txt. \# Monthly
    Nationalism reduction was 0.2 and is changed to -0.002 for version
    1.3\]
-   Building garrison div and MP bde is the best way to suppress
    partisan activity. The more that partisans are suppressed, the
    better that your TC will be when you are conquering territory.
-   Occupied Territory Maintenance (OTM) decreases by 1/3. Less OTM but
    much higher Partisan Activity.
    -   \[These OTM and partisan factors are controlled by the
        \db\misc.txt file.\]
-   Accepting events like Vichy becomes even more important. Provinces
    acquired in events have only a 2% partisan activity base while in
    annexed territory the partisan activity base is much higher (24% for
    Germany). Partisan base level is 32% for Germany in occupied
    territory.
-   Both liberation and releasing colonies get dissent penalties in 1.3
    Dissent from liberation ranges from 0.5 for democracies to 5 for
    authoritarian governments (puppet part of the government slider).
    Note that only in Doomsday, the dissent hit for liberation is cut in
    half for smaller countries which have around 5 or fewer total
    Victory Points.
-   Releasing colonies gets a even larger dissent hit; this is
    controlled by the new \db\events\colonial_release file in 1.3
-   Dissent is about a 1.5x multiplier for partisans. Get rid of dissent
    immediately in order to reduce partisan effects on your TC.
