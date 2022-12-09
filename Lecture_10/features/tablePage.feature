Feature: Table page

Scenario: Validate table data
  Given User is on the "Table" page
  When User recives table data
  Then User validates that row № 1 table contains data:
  | Last Name | First Name | Email            | Due    | Web Site              | Action      |
  | Smith	    | John       | jsmith@gmail.com | $50.00 | http://www.jsmith.com | edit delete |