/// <reference types="Cypress" />

describe("login via API", () => {
  it("Successful login via API", () => {
    cy.request({
      url: "https://gallery-api.vivifyideas.com/api/auth/login",
      method: "POST",
      body: {
        email: "peraperic12345@gmail.com",
        password: "pera12345",
      },
    })
      .its("body")
      .then((resp) => {
        let respToken = resp.access_token;
        let tokenType = resp.token_type;
        expect(respToken).to.be.a("string");
        expect(tokenType).eq("bearer");
      });
  });
});
