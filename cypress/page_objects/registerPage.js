class RegistrationPage {
  get firstNameInputField() {
    return cy.get("#first-name");
  }
  get lastNameInputField() {
    return cy.get("#last-name");
  }
  get emailInputField() {
    return cy.get("#email");
  }
  get passwordInputField() {
    return cy.get("#password");
  }
  get passwordConfirmationInputField() {
    return cy.get("#password-confirmation");
  }
  get termsCheckBox() {
    return cy.get(".form-check-input");
  }
  get submitButton() {
    return cy.get("button");
  }
}
export const registerPage = new RegistrationPage();
