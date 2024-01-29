/// <reference types="Cypress" />

const locators = require("../fixtures/locators.json");
import { registerPage } from "../page_objects/registerPage";

describe("Registration functionality - Gallery App", () => {
  it.only("Unsuccessful registration - invalid email address", () => {
    cy.visit("/register");

    //ASERTACIJE
    // provera da li smo na ispravnoj adresi
    cy.url().should("contain", "/register");
    //provera da li je neki tekst tacan
    cy.get("h1").should("have.text", "Register");
    cy.get("label").eq(0).should("have.text", "First Name");
    cy.get("label").eq(1).should("have.text", "Last Name");
    //primer negativne asertacije - NE SADRZI
    // cy.url().should("not.contain", "/register");

    // hvatanje elemenata preko ID-ja === #vrednost ID-ja
    cy.get(locators.registrationPage.firstNameInputField).type("Marko");
    cy.get(locators.registrationPage.lastNameInputField).type("Djuric");
    cy.get(locators.registrationPage.emailInputField).type(
      "markoqa13+223@gmail.com"
    );
    cy.get(locators.registrationPage.passwordInputField).type("Marko123");
    cy.get(locators.registrationPage.passwordConfirmationInputField).type(
      "Marko123"
    );

    // hvatanje elemenata preko klase === .nazivKlase
    cy.get(locators.registrationPage.termsCheckBox).check();

    // hvatanje elementa pomocu taga + vrednost nekog njegovog propertija
    // cy.get('a[role="button "]');

    // hvatanje elemenata preko html tag-a
    cy.get(locators.registrationPage.submitButton).click();

    cy.get(".alert").should("have.text", "The email has already been taken.");

    // cy.url().should("not.contain", "/register");
  });

  it("Unsuccessful registration - password too short", () => {
    cy.visit("/register");

    cy.get(locators.registrationPage.firstNameInputField).type("Marko");
    cy.get(locators.registrationPage.lastNameInputField).type("Djuric");
    cy.get(locators.registrationPage.emailInputField).type(
      "markoqa13+2231@gmail.com"
    );
    cy.get(locators.registrationPage.passwordInputField).type("Marko");
    cy.get(locators.registrationPage.passwordConfirmationInputField).type(
      "Marko"
    );
    cy.get(locators.registrationPage.termsCheckBox).check();
    cy.get(locators.registrationPage.submitButton).click();
  });

  it("Unsuccessful registration - wrong password confirmation", () => {
    cy.visit("/register");

    cy.get(locators.registrationPage.firstNameInputField).type("Marko");
    cy.get(locators.registrationPage.lastNameInputField).type("Djuric");
    cy.get(locators.registrationPage.emailInputField).type(
      "markoqa13+22322@gmail.com"
    );
    cy.get(locators.registrationPage.passwordInputField).type("Marko123");
    cy.get(locators.registrationPage.passwordConfirmationInputField).type(
      "Marko1232"
    );
    cy.get(locators.registrationPage.termsCheckBox).check();
    cy.get(locators.registrationPage.submitButton).click();
  });

  it.only("Successful registration", () => {
    cy.visit("/register");

    registerPage.firstNameInputField.type("Marko");
    registerPage.lastNameInputField.type("Djuric");
    registerPage.emailInputField.type("markoqa13+22322@gmail.com");
    registerPage.passwordInputField.type("Marko123");
    registerPage.passwordConfirmationInputField.type("Marko123");
    registerPage.termsCheckBox.check();
    registerPage.submitButton.click();

    cy.wait(3000);

    cy.get("a").contains("Logout");
  });
});
