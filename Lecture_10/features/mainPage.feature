Feature: Main page

Scenario: Visit main page
  Given User is on the "Main" page
  When User waits for 1 seconds
  Then User prints to the console custom parameter: date