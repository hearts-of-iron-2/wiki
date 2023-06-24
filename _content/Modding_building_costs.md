---
title: "Modding_building_costs"
---

Editing the cost for buildings is very simple! If you want to know how,
please keep reading:

First you open a file called building_costs in the C:\Program
Files\Paradox Interactive\Hearts of Iron 2\db Directory.

Once you open the file, then you see all the buildings that you can
build in hoi2.

For example, say we want to mod the land fort...

You should see something like this:

    landfort = {
          cost      = 5
          buildtime     = 120
          manpower  = 0
          size      = 1
    }

As you can see, it's rather simple...

Here is what each value represents:

cost  
How much IC it costs while building

buildtime  
How many days it takes until completion

manpower  
How much manpower it costs to create.

size  
How big it becomes upon completion. This would determine the capacity of
a airbase or a naval base.

**NOTE!** As always when modding, make sure to have a backup of the
original file in case you really mess things up!
