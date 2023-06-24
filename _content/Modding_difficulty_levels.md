Open the file /db/difficuly.csv and change the values which you want.

The first line VERYEASY;EASY;NORMAL;HARD;VERYHARD is just a comment, so
no point in changing that. The next 2 sections are the ones that matter,
subsequent sections are not used. The numbers are percentage
penalties/bonuses for each setting

I find that the difference between the difficulty levels is too big so I
create 2 new levels  
1) half way between Normal and Hard  
2) half way between Hard and VeryHard  
and delete the 2 easy levels which I never want.

Since VERYEASY;EASY;NORMAL;HARD;VERYHARD will always be the options
displayed when creating a new game, you have to remember which option
corresponds to which difficulty level.

I do not have the original settings any more as I use StonyRoad which I
think modified the settings, so for StonyRoad I use the following

HUMAN;;;;;;;X  
INDUSTRY;0;-7;-15;-23;-30;;X  
RESOURCES;0;-15;-30;-45;-60;;X  
MANPOWER;0;-10;-20;-30;-40;;X  
RESEARCH;0;-5;-10;-15;-20;;X  
ORGANISATION;0;-5;-10;-15;-20;;X COMBAT;0;-5;-10;-15;-20;;X  
MOVE_SPEED;0;-3;-5;-7;-10;;X  
DISSENT;0;-15;-30;-45;-60;;X  
DIPLOMACY;0;-10;-20;-30;-40;;X  
INTELLIGENCE;0;-3;-5;-7;-10;;X  

AI;;;;;;;X  
INDUSTRY;0;7;15;23;30;;X  
RESOURCES;0;15;30;45;60;;X  
MANPOWER;0;10;20;30;40;;X  
RESEARCH;0;5;10;15;20;;X  
ORGANISATION;0;10;20;30;40;;X  
COMBAT;10;7;5;2;0;;X  
MOVE_SPEED;0;2;5;7;10;;X  
DISSENT;0;5;10;15;20;;X  
DIPLOMACY;0;5;10;15;20;;X  
INTELLIGENCE;0;5;10;15;20;;X  

The following table shows the option to choose for the new difficulty
settings

     Select     gets a standard difficulty of 
    Very Easy    Normal
    Easy         Normal-Hard
    Normal       Hard
    Hard         Hard-VeryHard
    Very Hard    Very Hard
