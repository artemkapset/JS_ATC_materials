Feature: Search

Scenario: Search book
  Given User is on the "Main" page
  When User selects category 'Books' on Main page
    And User searches item with name 'Paper Towns by John Green' on Main page
  Then User validates that element 'productName' is dispalyed with text 'Paper Towns by John Green' on Product page  

  