@addcontact

Feature: As a user, I  should be able to create a contact

Scenario: Create a new contact
 Given user logs in
    And I select add contact
    And I fill details
    And I create contact
    Then contact should be added
   