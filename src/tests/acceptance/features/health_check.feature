Feature: Health check API
  In order to monitor the API
  As a DevOps engineer
  I want to check the API's health

  Scenario: Checking API health
    When I make a GET request to "/health"
    Then I should receive a 200 OK response
