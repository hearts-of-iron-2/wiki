## Contents

-   [ 1 Introduction ](#Introduction)
    -   [ 1.1 Allowed brigades ](#Allowed_brigades)
    -   [ 1.2 Changing the units stats ](#Changing_the_units_stats)
    -   [ 1.3 Editing Naval units ](#Editing_Naval_units)
    -   [ 1.4 Editing Air Units ](#Editing_Air_Units)
    -   [ 1.5 Editing Brigades ](#Editing_Brigades)

##  Introduction 

Don't think that tank is fast enough for you? Want carriers with more
range? Then as with just about every other part of Hearts of Iron,
Change it!. In order to get started first you want to head to Paradox
Interactive\Hearts of Iron 2\db\units\\ **divisions** and pick which
divison you want to edit.

###  Allowed brigades 

Once you pick a file, You should see something like this.

Example:

    #allowed_brigades =  artillery
    allowed_brigades =  anti_tank       
    allowed_brigades =  anti_air        
    #allowed_brigades =  rocket_artillery
    allowed_brigades =  sp_artillery    
    allowed_brigades =  sp_rct_artillery
    allowed_brigades =  tank_destroyer  
    allowed_brigades =  light_armor_brigade
    allowed_brigades =  heavy_armor 
    #allowed_brigades =  super_heavy_armor
    allowed_brigades =  armored_car
    allowed_brigades =  engineer            
    #allowed_brigades =  police

This decides which brigades the unit can or can't use. In order to deny
units certain brigades you can either comment them out with a \#. Or
remove the line completely. If you want to allow a unit a brigade it
can't use normally, remove the \# or add the line as needed.

Note that there is also a cag brigade type that is used for carriers.

###  Changing the units stats 

Alright, Here's the meat. After you have set which brigades you want,
it's time to edit the actual unit. You should see something like this

Example:

    # 0 - Great War Tank
    model = {
        cost                    = 16
        buildtime               = 180
        manpower                = 7
        maxspeed                = 8
        defaultorganisation     = 30
        morale                  = 30
        defensiveness           = 5
        toughness               = 7
        softness                = 30
        suppression             = 1
        airdefence              = 1
        softattack              = 9
        hardattack              = 2
        airattack               = 1
        transportweight         = 30
        supplyconsumption       = 2
        fuelconsumption         = 4
        speed_cap_art           = 8
        speed_cap_eng           = 8
        speed_cap_at            = 8
        speed_cap_aa            = 8
        upgrade_time_factor = 1.0
        upgrade_cost_factor = 1.0
    }

Now, I will run down what each function does.

------------------------------------------------------------------------

Cost: This is the IC cost of the unit

Buildtime: This is how long it takes the unit to build

Manpower: This is how much manpower the unit requires to build

Maxspeed: This is how fast the unit can go in optimal conditions(IE Good
terrain, Infra, Non-enemy land, etc.)

Defualtorganisation: This is the units default organization without the
org bonus gained from researching doctrines

Morale: This is the units default morale, like organization, this is
without the bonus from research

Defensiveness: This is the units defense against attacks

Toughness: This is the units defense while on the attack

Softness: This is the units defense from "Soft Attacks" like infantry
fire

Suppression: This is the units ability to suppress paritisans

Airdefence: This is the units defense against air attacks

Softattack: This is how much "Soft" damage the unit does. Units like
infantry and calvary will take this type of damage

Hardattack: This is how much "Hard" damage the unit does. This damage
effects tanks and mechanized infantry

Airattack: This is how much damage the units can do against planes. This
is usually used against tactical bombers

Transportweight: This is the units drain on TC

Supplyconsumption: This is how many supplies the unit drains daily

Fuelconsumption: This is how much oil the unit drains daily

Speed_cap_art: This is the units maximum speed while an artillery
brigade is attached

Speed_cap_eng: This is the units maximum speed while an engineer brigade
is attached

Speed_cap_at: This is the units maximum speed while an anti-tank brigade
is attached

Speed_cap_aa: This is the units maximum speed while an anti-air brigade
is attached

Upgrade_time_factor: This is amount of time it takes to upgrade a unit.
I believe the actual time is based on half the amount of time it took to
build the unit. By changing this you can make it half the normal half
value by making it 0.5, Or make it twice the normal half value by making
it 2.0

Upgrade_cost_factor: This is ic cost it takes to upgrade the unit. I
think it's similar to the upgrade time system. I don't know what the
actual amount is(I'm going to ballpark 1/3 the normal cost) but changing
this will work the same way as changing the time. You can double,
triple, or halve the normal amount of time(which I'm guessing is 1/3).
Hope this wasn't too confusing :P

------------------------------------------------------------------------

###  Editing Naval units 

Changing Naval unit attributes is pretty much the same as editing land
units, except they have a few different values.

Example:

    # 0 - Great War Carrier
    model = {
        cost                        = 5
        buildtime                   = 547
        defaultorganisation         = 30
        morale                      = 30
        manpower                    = 1
        maxspeed                    = 18
        surfacedetectioncapability  = 1
        airdetectioncapability      = 2
        subdetectioncapability      = 1
        visibility                  = 100
        seadefence                  = 8
        airdefence                  = 1
        seaattack                   = 1
        subattack                   = 1
        airattack                   = 1
        shorebombardment            = 0
        transportcapability         = 0
        range                       = 2000
        supplyconsumption           = 0.9
        fuelconsumption             = 1
        distance                    = 0.14
    }

I'll now go over the different values

------------------------------------------------------------------------

Surfacedetectioncapability: This is the units ability to detect enemy
ships in an adjacent sea province

Airdetectioncapability: This is the units ability to detect enemy planes
in an adjacent province

Subdetectioncapability: This is the units ability to detect enemy
submarines in an adjacent sea province

Visibility: This is the units ability to remain unseen by an enemy naval
unit in an adjacent sea province

Seadefence: This is the units defense against attacks from enemy ships

Seaattack: This is the units attack power against enemy ships

Subattack: This is the units attack power against enemy subs

Shorebombardment: This is the units shore bombardment attack strenght,
the higher it is, the more they can help units that are making
amphibious attacks, or just plain attacking the land province your ships
are next to.

Range: This is the units range

Distance: This is the distance the unit can try to close or keep away
from enemy ships(This is without bonuses from doctrines or a good
admiral)

------------------------------------------------------------------------

Also note that if you want the sea unit you are editing to be able to
use CAGs, Add allowed_brigades = cag to the top of the file.

###  Editing Air Units 

Much like Naval units, Air units have some different values from land
units.

Example:

    # 0 - Interwar Bomber
    model = {
        cost                        = 11
        buildtime                   = 160
        defaultorganisation         = 30
        morale                      = 30
        manpower                    = 2
        maxspeed                    = 180
        surfacedetectioncapability  = 1
        airdetectioncapability      = 0
        surfacedefence              = 3
        airdefence                  = 1
        airattack                   = 1
        strategicattack             = 3
        softattack                  = 6
        hardattack                  = 2
        navalattack                 = 1
        range                       = 400
        supplyconsumption           = 1.5
        fuelconsumption             = 3
        upgrade_time_factor = 1.0
        upgrade_cost_factor = 1.0
     }

As usual, Here are what each value means

------------------------------------------------------------------------

Surfacedetectioncapability: This is the air units ability to detect
ships

Airdetectioncapability: This is the air units ability to detect other
air units

Surfacedefence: This is the air units ability to defend against attacks
from ships(Think Naval Bombers)

Airdefence: This is the air units ability to defend against attacks from
other air units or land units

Airattack: This is the air units attack power against other air units

Strategicattack: This is the air units attack power when using strategic
bombing attacks

Softattack: This is the air units attack power when bombing infantry and
other soft units

Hardattack: This is the air units attack power when bombing tanks and
other hard units

Navalattack: This is the air units attack power when bombing ships

Range: This is the air units range

------------------------------------------------------------------------

###  Editing Brigades 

In order to edit Brigades you want to head to Interactive\Hearts of Iron
2\db\units\\ **Brigades** . Editing Brigades is alot more simpler then
editing units, as there's alot less values to edit.

Example:

    model = {
        cost                = 10
        buildtime           = 120
        manpower            = 2 
        defensiveness       = 8
        toughness           = 2
        maxspeed            = -4
        softness            = -20
        hardattack          = 8
        softattack          = 7
        supplyconsumption   = 1.5
        fuelconsumption     = 5
        upgrade_time_factor = 0.5
        upgrade_cost_factor = 1.0
    }

------------------------------------------------------------------------

As you can see, alot of these are the same values as land units. When
attaching a brigade, these values are added to the original unit as a
sort of "bonus". You may be wondering about the negative modifiers.
Those are used in cases where the brigade would hinder the unit. In this
case it would be the Heavy Tanks slowing down the rest of the unit.  

However, not all negative values are bad. For example, having a negative
modifier on the softness value would make the unit take less damage from
"Soft" attacks. Also, Be careful when assigning negative values, not
every value can be negative, *supplyconsumption* and *cost* are some
good examples of these values.

The CAG brigades (which are limited to carriers only) also have some
extra values that are the same as naval unit values. These are:

-   Sea attack
-   Sub attack
-   Shorebombardment
-   Distance
-   Airdetection
-   Subdetection
-   Airdefense
-   Surfacedetection

All of these work in the same way as their Naval counterparts.

------------------------------------------------------------------------
