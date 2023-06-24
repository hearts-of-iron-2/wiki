---
title: Battle_mechanics_and_formulas
---


## Contents

-   [ 1 Evaluation of battle ](#Evaluation_of_battle)
-   [ 2 Probability of events ](#Probability_of_events)
-   [ 3 Softness ](#Softness)
-   [ 4 Battle winning ability ](#Battle_winning_ability)
-   [ 5 External links ](#External_links)

##  Evaluation of battle 

The description how battle is evaluated step by step *(NOTE: not
finished)*

-   Army A (composed of units A1,A2...) attacks army D (of D1, D2..)
-   all modifiers (ground, weather, river crossing, encirclement, ESE,
    command ..) are evaluated
-   combat events such as Surprise and Breakthrough are evaluated where
    applicable
-   Every unit of army A randomly chooses a unit to target from B and
    *vice versa*
-   All units targeting unit D1 sum their attack values (see softness)

if the attack_sum = Attack_1+Attack_2... \> Defence_1 than D1 gets
2\*attack_sum - defence_1 hits else (i.e attack_sum \< Defence_1 ) D1
gets just attack_sum of hits

-   In each round of the battle the organisation of the unit is
    decreased by the number of hits it takes
-   If organisation of a unit reaches zero ( 0 ), the unit stops
    attacking
-   The army loses the battle as soon as no units can fight *(? - or
    below 5 org maybe)*

##  Probability of events 

-   Breakthrough
-   Surprise

##  Softness 

![{\displaystyle {\text{attack}}={\text{hardattack}}\cdot
(1-{\text{softness}})+{\text{softattack}}\cdot
{\text{softness}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/d7d78f5fefccb8311b85d8f5566f78b8356dbfa4)

##  Battle winning ability 

In the approximation that attack affect just morale, the battle value of
soldiers could be evaluated as:

![{\displaystyle {\text{BWA}}={\text{attack}}\cdot
{\text{organisation}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/c5eafe106944d5bec620ff024ece6c3d6435fafd)

attack affects the rate in which unit will lower the organisation of
enemy organisation determines the time the unit can withstand a given
attack (time under constant attack deceasing its ORG)

more info: [The Paradox Art of
War](http://oldforum.paradoxplaza.com/forum/blog.php?15522-The-Paradox-Art-of-War)

  

##  External links 

-   Theokrat's: [A general
    expression](https://forum.paradoxplaza.com/forum/index.php?threads/296740/page-5#post-7239838 "forum:296740/page-5")  
    for computing combat efectivness of units, it's specialised to
    Infantry vs. Militia discussion
-   Theokrat's: [On statistical fluctuations and
    Defensiveness/Toughness](https://forum.paradoxplaza.com/forum/index.php?threads/312784 "forum:312784")  
    discussion of importaince of Defensiveness/Toughness based on
    Multiple targeting effects.
