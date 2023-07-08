---
title: Technology_Formula
---
 The formula to calculate the number of days required is calculated using the following logic:

*   Each component is given a progress bar, with the percent completed at zero percent, and the total percent of the component as 100%. For Double-timed components, the total percent is doubled (to 200%).

*   Rocketry components are given a bonus from the size of the rocket site in the country (there should be only one such site). This bonus is calculated with the formula:

Component\_Bonus = Rocket\_Site\_Size \* 5

*   Nuclear components are given a bonus from the size of the nuclear reactor in the country (there should be only one such reactor). This bonus is calculated with the formula:

Component\_Bonus = Nuclear\_Reactor\_Size \* 5

*   Each component is then compared with the tech team researching it, to see if the tech team has specialties that match the component type. The formula used to determine this is:

 If Component\_Match(Current\_Component, Tech\_Team\_Index) Then Daily\_Increase = (Base\_Increase\_Matched / ((2 + Min(TECHS(Current\_Component).Difficulty, 3)) \* 10)) + ((3 \* (TECH\_TEAMS(Tech\_Team\_Index).Skill + Bonus\_Level - 1)) / (2 + Min(TECHS(Current\_Component).Difficulty, 3))) Else Daily\_Increase = ((Base\_Increase\_Unmatched / ((2 + Min(TECHS(Current\_Component).Difficulty, 3)) \* 10)) + ((3 \* (TECH\_TEAMS(Tech\_Team\_Index).Skill + Bonus\_Level \* 2 - 1)) / (2 + Min(TECHS(Current\_Component).Difficulty, 3)))) / 2 End If Early\_Research\_Penalty = 0 Do Until Percent\_Complete >= Percent\_Total If Start\_Year < TECHS(Tech\_Application\_Index).Historical\_Year Then Early\_Research\_Penalty = Min(Early\_Research\_Mod \* Min((Time\_Difference(Start\_Day, Start\_Month, Start\_Year, 1, 1, TECHS(Tech\_Application\_Index).Historical\_Year) - Total\_Days - 1), 0), Max\_Early\_Research\_Penalty) End If If Not Have\_Blueprint Then Percent\_Complete = Percent\_Complete + Daily\_Increase \* (1 + Early\_Research\_Penalty) \* Research\_Mod \* (1 + Difficulty\_Mod) Else Percent\_Complete = Percent\_Complete + Daily\_Increase \* (1 + Early\_Research\_Penalty) \* Research\_Mod \* (1 + Difficulty\_Mod) \* Blueprint\_Bonus End If Total\_Days = Total\_Days + 1 If Total\_Days > 9999 Then Exit For 'To avoid infinite loops Loop Next Current\_Component Calculate\_Research\_Time = Total\_Days End Function 

The values for the parameters can be found in the misc.txt file in the db directory. Default in HoI2 1.3 the value for Max\_Early\_Research\_Penalty is 0.9, Early\_Research\_Mod is 0.0015