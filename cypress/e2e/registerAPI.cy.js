/// <reference types="Cypress" />

describe("Register via API", () => {
  it("Successful register via API", () => {
    cy.request({
      url: "https://gallery-api.vivifyideas.com/api/auth/register",
      method: "POST",
      body: {
        email: "marra123lp+@gmail.com",
        first_name: "Mara",
        last_name: "Maric",
        password: "bolonjeze14",
        password_confirmation: "bolonjeze14",
        terms_and_conditions: true,
      },
    }).its("body").then((resp) => {
        let respToken = resp.access_token;
        let tokenType = resp.token_type;
        expect(respToken).to.be.a("string");
        expect(tokenType).eq("bearer");
      });
  });
});
