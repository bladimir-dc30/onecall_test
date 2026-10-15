Feature: Quote request

  Background:
    Given the quote request page is open

  @smoke
  Scenario Outline: Submit a quote request
    When I complete the quote request form with:
      | first name     | <firstName> |
      | last name      | <lastName>  |
      | email          | <email>     |
      | phone          | <phone>     |
      | company        | <company>   |
      | industry       | <industry>  |
      | service        | <service>   |
      | timeline       | <timeline>  |
      | monthly volume | <volume>    |
      | project details | <details>   |
    And I submit the quote request
    Then the submission confirmation should be displayed

    Examples:
      | firstName | lastName | email        | phone      | company | industry  | service                | timeline  | volume | details                 |
      | Bladimir  | Doumerc  | mail@mail.com | 5555555555 | company | ecommerce | Warehousing & Storage | immediate | 10000  | for testing purposes    |
