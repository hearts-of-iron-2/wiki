---
title: "Technology_Formula"
---

The formula to calculate the number of days required is calculated using
the following logic:

-   Each component is given a progress bar, with the percent completed
    at zero percent, and the total percent of the component as 100%. For
    Double-timed components, the total percent is doubled (to 200%).

&nbsp;

-   Rocketry components are given a bonus from the size of the rocket
    site in the country (there should be only one such site). This bonus
    is calculated with the formula:

Component_Bonus = Rocket_Site_Size \* 5

-   Nuclear components are given a bonus from the size of the nuclear
    reactor in the country (there should be only one such reactor). This
    bonus is calculated with the formula:

Component_Bonus = Nuclear_Reactor_Size \* 5

-   Each component is then compared with the tech team researching it,
    to see if the tech team has specialties that match the component
    type. The formula used to determine this is:

&nbsp;

        If Component_Match(Current_Component, Tech_Team_Index) Then
          Daily_Increase = (Base_Increase_Matched / ((2 + Min(TECHS(Current_Component).Difficulty, 3)) * 10)) + ((3 * (TECH_TEAMS(Tech_Team_Index).Skill + Bonus_Level - 1)) / (2 + Min(TECHS(Current_Component).Difficulty, 3)))
        Else
          Daily_Increase = ((Base_Increase_Unmatched / ((2 + Min(TECHS(Current_Component).Difficulty, 3)) * 10)) + ((3 * (TECH_TEAMS(Tech_Team_Index).Skill + Bonus_Level * 2 - 1)) / (2 + Min(TECHS(Current_Component).Difficulty, 3)))) / 2
        End If
            
        Early_Research_Penalty = 0
        Do Until Percent_Complete >= Percent_Total
          If Start_Year < TECHS(Tech_Application_Index).Historical_Year Then
            Early_Research_Penalty = Min(Early_Research_Mod * Min((Time_Difference(Start_Day, Start_Month, Start_Year, 1, 1, TECHS(Tech_Application_Index).Historical_Year) - Total_Days - 1), 0), Max_Early_Research_Penalty)
          End If
          
          If Not Have_Blueprint Then
            Percent_Complete = Percent_Complete + Daily_Increase * (1 + Early_Research_Penalty) * Research_Mod * (1 + Difficulty_Mod)
          Else
            Percent_Complete = Percent_Complete + Daily_Increase * (1 + Early_Research_Penalty) * Research_Mod * (1 + Difficulty_Mod) * Blueprint_Bonus
          End If
          
          Total_Days = Total_Days + 1
          
          If Total_Days > 9999 Then Exit For 'To avoid infinite loops
        Loop    
      Next Current_Component
      
      Calculate_Research_Time = Total_Days
    End Function

The values for the parameters can be found in the misc.txt file in the
db directory. Default in HoI2 1.3 the value for
Max_Early_Research_Penalty is 0.9, Early_Research_Mod is 0.0015
The formula to calculate the number of days required is calculated using
the following logic:

-   Each component is given a progress bar, with the percent completed
    at zero percent, and the total percent of the component as 100%. For
    Double-timed components, the total percent is doubled (to 200%).

&nbsp;

-   Rocketry components are given a bonus from the size of the rocket
    site in the country (there should be only one such site). This bonus
    is calculated with the formula:

Component_Bonus = Rocket_Site_Size \* 5

-   Nuclear components are given a bonus from the size of the nuclear
    reactor in the country (there should be only one such reactor). This
    bonus is calculated with the formula:

Component_Bonus = Nuclear_Reactor_Size \* 5

-   Each component is then compared with the tech team researching it,
    to see if the tech team has specialties that match the component
    type. The formula used to determine this is:

&nbsp;

        If Component_Match(Current_Component, Tech_Team_Index) Then
          Daily_Increase = (Base_Increase_Matched / ((2 + Min(TECHS(Current_Component).Difficulty, 3)) * 10)) + ((3 * (TECH_TEAMS(Tech_Team_Index).Skill + Bonus_Level - 1)) / (2 + Min(TECHS(Current_Component).Difficulty, 3)))
        Else
          Daily_Increase = ((Base_Increase_Unmatched / ((2 + Min(TECHS(Current_Component).Difficulty, 3)) * 10)) + ((3 * (TECH_TEAMS(Tech_Team_Index).Skill + Bonus_Level * 2 - 1)) / (2 + Min(TECHS(Current_Component).Difficulty, 3)))) / 2
        End If
            
        Early_Research_Penalty = 0
        Do Until Percent_Complete >= Percent_Total
          If Start_Year < TECHS(Tech_Application_Index).Historical_Year Then
            Early_Research_Penalty = Min(Early_Research_Mod * Min((Time_Difference(Start_Day, Start_Month, Start_Year, 1, 1, TECHS(Tech_Application_Index).Historical_Year) - Total_Days - 1), 0), Max_Early_Research_Penalty)
          End If
          
          If Not Have_Blueprint Then
            Percent_Complete = Percent_Complete + Daily_Increase * (1 + Early_Research_Penalty) * Research_Mod * (1 + Difficulty_Mod)
          Else
            Percent_Complete = Percent_Complete + Daily_Increase * (1 + Early_Research_Penalty) * Research_Mod * (1 + Difficulty_Mod) * Blueprint_Bonus
          End If
          
          Total_Days = Total_Days + 1
          
          If Total_Days > 9999 Then Exit For 'To avoid infinite loops
        Loop    
      Next Current_Component
      
      Calculate_Research_Time = Total_Days
    End Function

The values for the parameters can be found in the misc.txt file in the
db directory. Default in HoI2 1.3 the value for
Max_Early_Research_Penalty is 0.9, Early_Research_Mod is 0.0015
