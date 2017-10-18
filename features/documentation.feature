Feature: Example feature
  As a development of iColabora
  I want to be able to build some test in JS
  So that i can upgrade my skills in this languages

  Scenario: Login Turbina
    Given I am on the Turbina webapp
    When I fill my username as "caio.granero" 
    And my password as "123"
    And press login button
    Then I should see "Dashboards - Turbina" as title page 