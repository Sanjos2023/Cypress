/// <reference types="Cypress" />
const locators = require("../fixtures/locators.json");

describe("Login functionality - Gallery App", () => {
  it("Successfull login", () => {
    cy.visit("/login");
    // cy.url().should("contain", "/login");
    // cy.get("h1").should("have.text", "Please login");
    // cy.get("label").eq(0).should("have.text", "Email");
    // cy.get("label").eq(1).should("have.text", "Password");
    cy.get(locators.loginPage.emailInputField).type("peraperic12345@gmail.com");
    cy.get(locators.loginPage.passwordInputField).type("pera12345");
    // cy.get("button").should("have.text", "Submit");
    cy.get(locators.loginPage.submitButton).click();
    // cy.get("a").contains("Logout").click();

    // cy.url().should("not.contain", "/register");
    // cy.get("h1").should("not.contain", "Register");

    //cy.get('a[role="button "]').click();
  });
});
/// <reference types="Cypress" />

describe("Login functionality - Gallery App", () => {
  it("Successfull login", () => {
    cy.visit("/login");
    // cy.url().should("contain", "/login");
    // cy.get("h1").should("have.text", "Please login");
    // cy.get("label").eq(0).should("have.text", "Email");
    // cy.get("label").eq(1).should("have.text", "Password");
    cy.get(locators.loginPage.emailInputField).type("peraperic12345@gmail.com");
    cy.get(locators.loginPage.passwordInputField).type("pera12345");
    // cy.get("button").should("have.text", "Submit");
    cy.get(locators.loginPage.submitButton).click();
    // cy.get("a").contains("Logout").click();

    // cy.url().should("not.contain", "/register");
    // cy.get("h1").should("not.contain", "Register");

    //cy.get('a[role="button "]').click();
  });
});
