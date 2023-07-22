---
title: AI_Behaviour
---
::: mw-parser-output
[Template:Anthology](/wiki/index.php?title=Template:Anthology&action=edit&redlink=1 "Template:Anthology (page does not exist)"){.new}

::: {#toc .toc aria-labelledby="mw-toc-heading" role="navigation"}
::: {.toctitle dir="ltr" lang="en"}
## Contents {#mw-toc-heading}

[ ]{.toctogglespan}
:::

-   [[ 1 ]{.tocnumber} [ AI Capabilities ]{.toctext}](#AI_Capabilities)
    -   [[ 1.1 ]{.tocnumber} [ Strengths ]{.toctext}](#Strengths)
    -   [[ 1.2 ]{.tocnumber} [ Weaknesses ]{.toctext}](#Weaknesses)
-   [[ 2 ]{.tocnumber} [ AI Houserules ]{.toctext}](#AI_Houserules)
-   [[ 3 ]{.tocnumber} [ AI File Documentation
    ]{.toctext}](#AI_File_Documentation)
-   [[ 4 ]{.tocnumber} [ AI Types ]{.toctext}](#AI_Types)
    -   [[ 4.1 ]{.tocnumber} [ Garrison AI ]{.toctext}](#Garrison_AI)
    -   [[ 4.2 ]{.tocnumber} [ Invasion AI ]{.toctext}](#Invasion_AI)
    -   [[ 4.3 ]{.tocnumber} [ Front AI ]{.toctext}](#Front_AI)
        -   [[ 4.3.1 ]{.tocnumber} [ Front Distribution
            ]{.toctext}](#Front_Distribution)
        -   [[ 4.3.2 ]{.tocnumber} [ Front Odds Calculations
            ]{.toctext}](#Front_Odds_Calculations)
        -   [[ 4.3.3 ]{.tocnumber} [ Expeditionary Forces
            ]{.toctext}](#Expeditionary_Forces)
    -   [[ 4.4 ]{.tocnumber} [ Naval AI ]{.toctext}](#Naval_AI)
    -   [[ 4.5 ]{.tocnumber} [ Air AI ]{.toctext}](#Air_AI)
    -   [[ 4.6 ]{.tocnumber} [ Construction AI
        ]{.toctext}](#Construction_AI)
    -   [[ 4.7 ]{.tocnumber} [ Diplomacy AI ]{.toctext}](#Diplomacy_AI)
:::

## [ AI Capabilities ]{#AI_Capabilities .mw-headline}

For the most part, the AI plays by the exact same rules as the player.
Any exceptions to this rule are done to make it possible for the AI to
have a chance to compete against a human, especially in the areas of
intuition and planning. For example, the planning necessary to conduct a
successful amphibious invasion is extraordinarily complex, thus it was
necessary to not have range limitations on AI navies. Similarly, since
the AI is certain to be incapable of anticipating tactical movements and
maneuvers, the ability to see all troops is a necessary step to level
the playing field. This is a way of ensuring to keep the player
\"honest\": e.g. any unescorted transports are sure to be attacked as a
result, in addition to single HQ units sure to being bombed.

### [ Strengths ]{#Strengths .mw-headline}

-   General Tactics: No fog of war: able to see all units
-   Navy: All ships have an unlimited range
-   Air force: The range of aircraft are based on any allied controlled
    airport; as opposed to being a function of the airport that aircraft
    is currently based in.
-   Army: Forces will regain organization as they move (for the player
    units lose organization while moving)

### [ Weaknesses ]{#Weaknesses .mw-headline}

1.  General Tactics: Only uses the intelligence system for tech team and
    production delays (DD & ARMA only)
2.  General Tactics: Very poor at executing or defending against
    encirclements
3.  General Tactics: Does not give sufficient priority to protecting
    supply lines
4.  General Tactics: Poor execution of amphibious landings
5.  General Tactics: Does not co-ordinate unit arrival for offensives;
    thus small groups of units arrive over time, making AI extremely
    vulnerable to counter-attacks
6.  General Tactics: After losing a province, the AI will continue to
    trickle in units so long as it still controls the province,
    potentially creating a [verdun
    effect](http://en.wikipedia.org/wiki/Battle_of_Verdun){.external
    .text rel="nofollow"}
7.  General Tactics: Does not use nuclear weapons, build reactors, nor
    respond to their use appropriately ( [Further
    Reading](/wiki/Nuclear_Weapons#Game_shortfalls "Nuclear Weapons") )
8.  Air Force: Rebases most aircraft immediately after a game is loaded
9.  Air Force: Does not properly defend bombers
10. Air Force: Uses fighters only for perimeter defense. Does not use
    fighters in response to enemy bombing of land units, navies, or
    strategic attacks.
11. Navy: Does not break away from losing naval engagements.
12. Economy: Imperfect trading decisions
13. Production: Does not properly utilize serial runs of units
14. Production: Does not always build most effective units

## [ AI Houserules ]{#AI_Houserules .mw-headline}

Exploiting AI weaknesses is known as being
[gamey](/wiki/Gamey_tactics "Gamey tactics") or unfair to the AI. For
this reason, some players use \"house rules\" to ensure better gameplay
balance and challenge:

-   Save/Reload: No matter how badly a battle unfolds, refrain from
    going back to a saved game.
-   Slow Down: Since the AI adjusts slowly to deep penetrations, have a
    \"cooling off\" period of a few days for your units.
-   No Pause: do not use the pause button during battle, do not slow
    down time during battle: allow yourself to have a slow response time
    to changing conditions, to give the AI a chance
-   No Spamming: No massive infantry spamming, no massive CAS
    death-star, no cruizer-zerg spamming, no factory spamming
-   Acceptall cheat: Often, the AI won\'t accept a peace deal that it
    truly should. Thus, use this cheat to *save* the AI from its own
    stupidity, only when not accepting peace mean certain and quick
    annexation.
-   Unit diversity: make an army with a diversity of units, with
    brigades.
-   Military Control: do not take military control of allies.
-   Aircraft: do not use ground attack missions
-   Historical: stick to historical events at least until 1939, if not
    until 1941.
-   Research: do not research doctrines until units are at war, and no
    doctrine switching.

## [ AI File Documentation ]{#AI_File_Documentation .mw-headline}

the file ../ai/ai_file_doc.txt lists some very basic information on the
contents of the .ai files used by the game.

switch = \[yes/no\]
:   The default value is yes. If set to no, the AI will not
    automatically be changed to an AI file created for specific behavior
    that may be appropriate to the current game year. Changing the AI
    can be event scripted, which may make this command useful under
    appropriate conditions. Starting with Doomsday, ai_switches are no
    longer used, the AI_XXX.ai event files are the only ones used now.

```{=html}
<!-- -->
```

flags = { }
:   described as \"Inter-Agent distribution variables\". These appear to
    be variables that multiple AI files are aware of when they are set.

```{=html}
<!-- -->
```

claim_acceptance = \[percentage value\]
:   Modifies the chance that the country for which the AI is being
    defined will accept a \"demand claim\" diplomatic action.

```{=html}
<!-- -->
```

demand_claims = { \[country tag list\] }
:   Countries that the AI will attempt to demand claims of if they
    control any core provinces.

```{=html}
<!-- -->
```

liberate = { \[country tag list\] }
:   countries that will be liberated as puppets if the AI controls its
    territory.

## [ AI Types ]{#AI_Types .mw-headline}

Basically, there are several different AI definitions.

-   Involved with the Placement of Ground Troops
    -   Garrison AI
    -   Invasion AI
    -   Front AI
-   Involved with Naval and Air Forces
    -   Naval AI
    -   Air AI
-   Involved with the non-tactical portion of the game
    -   Construction AI
    -   Diplomacy AI

### [ Garrison AI ]{#Garrison_AI .mw-headline}

### [ Invasion AI ]{#Invasion_AI .mw-headline}

The Invasion AI is in charge of invading beaches. It pulls troops from
the Garrison AI always, \*never\* the Front AI. The invasion AI takes
into account troops currently on the beach when it invades.

### [ Front AI ]{#Front_AI .mw-headline}

When troops are in a province with an enemy adjacent, these troops
become part of the Front AI and are used to defend the border against
the enemy.

Don\'t confuse front ratio with combat odds. Combat Odds are calculated
using forces from all hexes near the target hex. Front Ratio is what the
AI tries to strive on a hex per hex basis against his opponent.

When the AI shuffles his troops around a lot is because with a 4.0
ratio, every hex on his front is SCREAMING for more troops so he keeps
shuffling everything. With a 1.0 or 1.2 range he settles down and digs
in. Results have been VERY promising and has made it harder on the betas
to advance against the enemy.

#### [ Front Distribution ]{#Front_Distribution .mw-headline}

Defensive
:   AI tries to keep an even line but will place heavier concentrations
    where he sees VP areas and bases

```{=html}
<!-- -->
```

Offensive
:   The AI will mass troops in mainly pocketed areas where the enemy is
    week to prepare for attacks. Careful AI has a tendency to leave
    holes in his line

```{=html}
<!-- -->
```

Reactive
:   AI will shift his forces to where the enemy is mainly concentrated
    at. If you use this in conjunction with the max front ratio the
    results are pretty decent for shoving the enemy aside.

```{=html}
<!-- -->
```

OP_Defensive
:   Just like Defensive but the AI will look at how many retreat routes
    he has from the hex and will put less troops into it based on the
    retreat routes.

```{=html}
<!-- -->
```

Even
:   Keeps a solid line front and tries to make each hex have equal
    amount of divisions

#### [ Front Odds Calculations ]{#Front_Odds_Calculations .mw-headline}

In HoI2 v1.2, the AI now evaluates the penalties of different terrains
and weather automatically, so all the parameters are set to 1.0. This
way, one does not have to worry about the parameters being inappropriate
in different weather conditions:

    strength = 1.0 organisation = 1.0 soft_attack = 1.0 hard_attack = 1.0 ground_defense = 1.0 dig_in = 1.0 # Against defender frozen_attack = 1.0 snow_attack = 1.0 blizzard_attack = 1.0 storm_attack = 1.0 muddy_attack = 1.0 jungle_attack = 1.0 mountain_attack = 1.0 swamp_attack = 1.0 forest_attack = 1.0 hill_attack = 1.0 urban_attack = 1.0 river = 1.0 

The modder can change any of these variables, and they will still work,
however, it is not recommended, since the AI reads straight from the
modifier files.

#### [ Expeditionary Forces ]{#Expeditionary_Forces .mw-headline}

HOI2 v1.0 - 1.3: The AI doesn\'t give expeditionary forces to human
countries, they only give to other AI countries. In addition,
expeditionary forces can only go to the country that controls the front,
which is normally the largest power on that front.

HOI2DD & ARMA: The AI regularly provides expeditionary forces to human
controlled nations, much to the dismay of most players! :)

### [ Naval AI ]{#Naval_AI .mw-headline}

### [ Air AI ]{#Air_AI .mw-headline}

### [ Construction AI ]{#Construction_AI .mw-headline}

### [ Diplomacy AI ]{#Diplomacy_AI .mw-headline}

Please note that the Diplomatic AI is unable to annex a country if the
money is under zero.

Lack of money seems to sleep the diplomatic AI, which could be
problematic for proper triggering of the AI.

For example, Germany lacking money would be unable to annex Poland (even
if it has been fully conquered) hence the next AI couldn\'t trigger as
one of the condition for triggering is not exists = POL.

In that case, since Poland has not been annexed, the next AI won\'t
trigger
:::
