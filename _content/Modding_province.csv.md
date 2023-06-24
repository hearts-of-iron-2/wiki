##  Introduction 

The province.csv file is the place in the game where all province
information is stored. It can be found in the db folder and you can
alter it to change the terrain types in a province, create naval and air
bases, radar installations and other province data. Most importantly,
perhaps, this file can be modded to change the number of IC in the
province and add or subtract resources.

##    Hints & Warnings 

Don't forget that entries in the .INC files can modify the values in the
Province.csv file. Thus if one province has 3 IC in the Province.csv
file but another 2 IC are added in the .inc file then the resulting in
game value will be 5 IC.

In my experience, Lord Ederon's Interactive Hearts of Iron 2 Online Map
[\[1\]](http://www.ederon.net/hoi2iom.aspx) is an invaluable resource
when editing the province.csv file. In you need to know what province ID
corresponds with a province, zoom in to the region you're working on,
click "Province IDs" and you'll have a dynamic map of province ID
information.

##  Example 

Here’s how to do it, using the example of changing the number of IC in
Turkish provinces.

Find the file Province.csv in the db folder. **Before you do anything
else,** make sure you have a backup copy of the file (as you always do
when modding). Then right-click on the file and in the “properties” tab
uncheck the “read-only” option that is checked by default, and then open
the file and find the provinces that refer to the country you are
interested in modding.

To find out which ones these are, you can either use the “showid” cheat
with the game map or go to the country’s inc file in the scenarios
folders. In the example given here, you would go to turkey.inc in the
folder scenarios\1936 and you would find there the following lines:

    nationalprovinces = {
        409 408 437 438 439 441 442 443 448 440 449 447 446 445 450 1851 1852
        1853 1854 1855
        }

That gives you the province id numbers you need for the Province.csv
file.

In that file, the information for each province is entered according to
an established pattern, which is given at the very top:

    Id;Name;Area;Region;Continent;Climate;Terrain;SizeModifier;AirCapacity;Infrastructure;City;Beaches;
    Port Allowed;Port Seazone;IC;Manpower;Oil;Metal;Energy;Rare Materials;City XPos;City YPos;Army XPos;
    Army YPos;Port XPos;Port YPos;Beach XPos;Beach YPos;Beach Icon;Fort XPos;Fort YPos;AA XPos;AA YPos;
    Counter x;Counter Y;Terrain variant;Terrain x;Terrain Y;Terrain variant;Terrain x;Terrain Y;
    Terrain variant;Terrain x;Terrain Y;Terrain variant;Fill coord X;Fill coord Y;;;;;;

Now lets try to use this information. Take the example of province
\#409. The line for it in the province file is:

    409;PROV409;Bosporus;Anatolia;Europe;Mediterranean;Hills;;;60;;1;1;2464;1;1;0;2;1;1;17069;
    3517;17124;3517;17033;3611;17071;3610;6;17104;3577;17039;3532;17075;3536;;;;;;;;;;;17080;
    3528;-1;-1;;;;

The values are semicolon delimited. It means that each value is
separated by a semicolon. Using previous explanation, we can read it
easily:

-   409 = id
-   PROV409 = name
-   Bosporus = area
-   Anatolia = region
-   Europe = continent
-   Mediterranean = climate

and so on.

So, to alter the province’s values, go to the appropriate section of the
line and change the value. For example, IC is the 15th “unit” in the
line:

    409;PROV409;Bosporus;Anatolia;Europe;Mediterranean;Hills;;;60;;1;1;2464;1;1;0;2;1;1;17069;
    3517;17124;3517;17033;3611;17071;3610;6;17104;3577;17039;3532;17075;3536;;;;;;;;;;;17080;

To add more IC to that province, simply replace the highlighted number
with another number. Say we want to change the IC to 99. We need to
change the line into:

    409;PROV409;Bosporus;Anatolia;Europe;Mediterranean;Hills;;;60;;1;1;2464;99;1;0;2;1;1;17069;
    3517;17124;3517;17033;3611;17071;3610;6;17104;3577;17039;3532;17075;3536;;;;;;;;;;;17080;

Save the province.csv file and you are ready to go.

If you do add a large amount of IC to a country, you might also want to
think about adding more resources too, because those extra IC will eat
through the existing resources more rapidly, just as the IC you build
in-game do. Resources can be added at will to provinces, using the same
method just described for IC.
