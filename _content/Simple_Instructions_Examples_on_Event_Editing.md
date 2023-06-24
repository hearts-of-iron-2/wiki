---
title: Simple_Instructions_Examples_on_Event_Editing
---


##  Goal and Disclaimer 

Editing events in HOI2 is an objective many of us have, but few of us
have the knowledge or skills to actually open up the files and do this.
What I intend to do here is show some very basic and simple ways to edit
the files necessary to modify event files. Here’s the disclaimer:

If you choose to modify event files you absolutely need to make a backup
copy of the files prior to starting to edit them. Changes to these files
can keep you from playing in multiplayer games and could cause your game
to not perform in the manner that you desire. Oh yeah…if you don’t know
how to backup your files… **DON’T EDIT THEM** If you have more than one
version of the game, first try the changes on the version you like less.
Another precaution, if you make any major changes to events, is to run a
virus scan that automatically shuts down the computer. Start that scan
just before you test your changes on a game. That way, if the game
freezes up completely, the virus scan will shut it down without your
having to shut the computer cold.

If you have questions that aren't answered by this guide, you should
head over to Paradox' HOI2 modding forum, where it's rarely trouble
finding the help you might be needing.

##  Getting Started at the Mundane 

I'm going to use Finland's event file (finland.txt in the event folder)
as the first example due to it's short nature and the fact that it has a
semi-complex event in it. The first lines you'll notice in the file are
the following:

Lines 1-5:

    #
    # HoI - Finland Events
    #
    #       written by Henrik Fåhraeus
    #

The first thing about these lines that you should note is the "#"
character. In programming event files in almost any circumstance, if you
put a "#" you are telling the program to ignore EVERYTHING that comes
after the "#". There are caveats, and we'll cover them later.

So we can see that Henrik, in the first 5 lines is telling the program
to ignore those 5 lines because he started the line off with the "#". So
what purpose do these 5 lines serve? Well the first thing is if you
start opening many event files to copy/paste/edit, it's always a good
idea to be able to see which file you are working on at any time. By
putting the purpose of the file

    # HoI - Finland Events

at the top of the file, we can quickly see where we are. It's just a
helpful reminder. In reality, the HOI2.exe couldn't care less about
these lines...but don't tell Henrik, he's probably proud of his work. ;)

Obviously you know that Henrik was the programmer of the finland.txt by
the this line

    #     written by Henrik Fåhraeus

A good and easy/quick programming practice is that anytime you modify a
file to put a new line under the line of the author with your name, the
date you COMPLETED the modification of the file and the event number
that you worked on. We haven't covered event number yet but stick with
me as they'll get clear in a second. You'll also notice that I said
completed. Why completed? Because quite frankly most folks don't care
how many times you open and modify a file, they just want to know when
it was finished and what you did.

Here is an example

    #
    # HoI - Finland Events
    #
    #       written by Henrik Fåhraeus
    #       modified by Chuck U. Farley - 01/14/2005 - 3200
    #

Got it? Good...one more thing before we move onward. You'll sometimes
come across empty lines. An empty line is basically 2 carriage returns.
Here's the finland.txt code that shows a blank line.

    #
    # HoI - Finland Events
    #
    #       written by Henrik Fåhraeus
    #

    #########################################################################

Line 6:  
See line 6? Notice how there is no "#". So what do you think the program
does with this line? Did you guess nothing? If so you get a cookie cause
this is what happens in the case of an empty line. It ignores it...looks
past it...cares nothing about it...

##  The Event Itself 

So lets get started with a true event now that you understand a smidgen
of the basics. We're going to jump right into event 3200. What's event
3200? Well it's lines 7-44 of the finland.txt and it looks like this:

    #########################################################################
    #  The Winter War
    #########################################################################
    event = {
        id = 3200
        random = no
        country = FIN

        # Triggered by SOV 2620

        name = "EVT_3200_NAME"
        desc = "EVT_3200_DESC"
        style = 0
        picture = "Winter_War"

        action_a = {
            name = "ACTIONNAME3200A" # Let them come if they dare!
            ai_chance = 99
            command = { type = trigger which = 2621 } #SOV
            command = { type = chiefofstaff which = 29137 }
            command = { type = chiefofarmy which = 29145 }
            command = { type = domestic which = political_left value = -1 }
            command = { type = relation which = SOV value = -10 }
            command = { type = relation which = SWE value = 5 }
            command = { type = relation which = NOR value = 5 }
        }
        action_b = {
            name = "ACTIONNAME3200B" # Fold to Russian Pressure
            ai_chance = 1
            command = { type = secedeprovince which = SOV value = 145 }
            command = { type = secedeprovince which = SOV value = 146 }
            command = { type = domestic which = political_left value = 1 }
            command = { type = relation which = SOV value = 25 }
            command = { type = relation which = GER value = -15 }
            command = { type = relation which = SWE value = -10 }
            command = { type = trigger which = 2622 } #SOV
        }
    }

Looks kinda complicated doesn't it? While it is definitely fairly
readable and you can quickly get the idea of what Henrik is trying to
do, I'm still going to step through it line by line. But before I do
that we need to have a quick discussion of braces "{}" and parentheses
"()".

When you were in school and taking math, one of the things they taught
you early on was the algebraic order of operations. That is, 3-2\*4 =
3-(2\*4). It isn't (3-2)\*4 right? It's the same with programming. But
with programming, it's less obvious. It can be really hard to keep track
of all of those "()", "{}" and "\[\]". And just as in math, if you put
(3-2x4 with no "closing" parenthesis...you get...junk! Programming
DEMANDS that you put a closing parenthesis when you open a parenthesis,
or bracket, quotation-mark or other 'grouping' symbol. If you don't,
then your event or program will not work. So make sure you keep up with
them! :-)

Now back to the event and lines 7-9.  
Lines 7-9:  

    #########################################################################
    #  The Winter War
    #########################################################################

Lines 7-9 are additional header information similar to lines 1-5 that we
have already spoken about. You'll notice that lines 7 and 9 are
basically lots of "#" signs. Henrik didn't put all those "#" signs out
there because he really really didn't want the program to run the lines,
he basically did it so that you can readily tell when the event starts.
Like the first 5 lines it just gives you a marker as to where a certain
event starts and it makes for easy reading.

Now for a moment of religion in programming. I personally like it when
someone who modifies an event puts some details in the event header
about what they changed. Some people don't like it, some do. It's kind
of up to the modder.

Line 10:

Yippee for us cause we are now at the start of our event. Line 10 shows
us the start of the event.

    event = {

Gee...somehow I'm just not giddy with excitement. Anyway now that we see
the "start" of the event let's move onto the meat.

Lines 11-13:

    id = 3200
    random = no
    country = FIN

Line 11 is critical....I mean absolutely critical like in breathing
critical. You cannot have 2 events with the same id number. And I don't
mean just in the finland.txt file. You cannot have 2 events named 3200
in ANY of the files in the events folder. If you somehow end up with the
same event id twice, it's just not going to work. Period. So be very
careful when making new events that you don't duplicate event id's. Line
12 is easy to understand.

    random = no

All you are telling the program is that this event cannot be "fired" or
run randomly. By this I mean that the program will not just arbitrarily
decide that it's going to run this event anytime it wants. In order for
this event to fire it has to either be triggered by another event (we'll
get to triggering in a minute) or it has to be fired/run during a
specific timeframe. If you want to create an event or have an event fire
at random times during the course of your game, just change the "no" to
"yes" and it will. Finally line 13 is a limiter on which country this
particular event can be run against.

    country=FIN

In this case this event can only be run for Finland and in the event
that this event is "triggered" it will only run against Finland. So if
you decide to run this via the F12 cheat (i.e. event 3200) and you are
any country other than Finland, you don't get any of the benefits. I
think....need to verify that tonight but I'm fairly positive.

So let's move onto the next set of lines

  
Lines 14, 15, 16:  
Now we're down to wonderful line 14...which happens to be blank, so
we'll do the big skip to line \#15. Line \#15 is a thing of absolute
wonder.

    #Triggered by SOV 2620

Of wonder? Why yes...it's a note...which is a great thing in
programming. Henrik has left us a wonderful note in his code that simply
states that this particular event is only fired/triggered by event 2620
contained in the ussr.txt event file (yes he put SOV and not
ussr.txt...bad Henrik...no cookie for you). By the way, in
programmer-speak, such notes are called "comments".

Since this event had the "random = no" and from a quick look...no dates
for when it kicked off, a casual programmer would have had no idea when
or where this event got kicked off. Thanks to Henrik, we now know when
this event will be used. So maybe we'll give him a cookie after all.
Also he put SOV because this is the country for which USSR is identified
by the game. All countries in the game have 3 letter tags which identify
that country to the game script.

Note that line 16 is also blank. It is purely a matter of personal taste
and style, whether and how, a programmer formats comments. But, whatever
the style, it is ever so \_good\_ to \*have\* comments!

Lines 17-19:

    name = "EVT_3200_NAME"
    desc = "EVT_3200_DESC"
    style = 0
    picture = "Winter_War"

  
Next we have this

    action_a = {
            name = "ACTIONNAME3200A" # Let them come if they dare!

  
Every single event in the game has at least one choice. Even events
which only have the "OK" option still have that one choice. That means
that whenever you make or modify an event you have to put at least one
choice in it otherwise the event will not fire.

You start by writing what it is. If it only has one choice, then this
would be the first choice: action_a. If its the second choice you write
action_b of course in order to have an action_b you have to have an
action_a. It's kind of like building blocks. You can have, I believe, an
unlimited number of actions (although the most i have ever seen was 6).
Next, you have that plain old {which tells the game that there is
content it has to read coming up and to get ready to read it.

As far as spacing goes, to my knowledge, it does not matter how much
spacing you put between the bracket and the "name". For the events I do
for my HoI 2 modification, "the ALEXIS Project", I have action_a = {

                                             name = ******

as compared to what we see above where there is some spacing between the
bracket and the name the line below it. It does not really matter how
much spacing you put. It differs from modder to modder.

Next, you have the name of the choice which is shown by name = . Then
you have to put ACTIONNAME\*\*\*\*A or ACTIONNAME\*\*\*\*B etc.etc.
after the name which is telling the game that this is a choice for that
specific event denoted by the \*\*\*\* or in a real event the number. If
you mess this up by putting a different event number you are in big
trouble because your event will not fire correctly.

Next you type a \# sign which tells the game that this is what the event
choice should be displayed as in the game. If you goof this part up your
event will come up as EVENT_3200. With the choice being ACT_NAME_3200A,
or something like that. It wont be pretty, the event will still show and
work in game as long as the number is correct, but it wont be "clean"
and will surely not look professional.

Now you come to the last tiny bit of information you need to tell the
game before you can begin telling the game what to make the event do.
The ai_chance, its simple enough, when this event is fired by a country
being played by the AI what chance should it have for picking this
option? In this particular choice the AI will 99% of the time pick the
first option and 1% of the time pick the second option. Its actually
quite simple as is all of HoI 2 Programming, once you get the hang of
it ;).

Next you come to the juicy stuff which tells the game what the choice
should do. There are at least a hundred different commands all available
on this site under commands. You merely have to type command = { Put in
what you want the event to do or one of the things you want the event to
do and close your bracket }Make sure you always close the bracket.

The 'type' part of the command is merely a necessity which will in a few
spaces tell the game what type of command this is. For example typing
'trigger' will tell the game to trigger an event which = \*\*\*\* which
is ironically how the script in game works. After typing the event
number press space once and type a } and you're ready to go down to the
next line and do another command!

The event command page will tell you what each command does and from my
POV it is self explanatory although if the previous author wishes to
come back, revise my work and type up what each line does i will not
hold a grudge ;).

-   Note

You can only do one command to a line and always must do (regardless of
what the command is)

command = { type =

that is the only similar part amongst all commands.

After you're done typing the commands, just enter a brace on the next
line. This tells the game that this event is finished, and that nothing
after this applies to this event.

In my experience, an event will often be missing a brace, and so it will
not work. So make sure you double, triple, even quadruple check your
braces to make sure that they are all where they need to be and are all
braces.
