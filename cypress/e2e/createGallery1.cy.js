describe("Login and create Gallery - Gallery App", () => {
  before(() => {});

  beforeEach(() => {
    // cy.request({
    //   url: "https://gallery-api.vivifyideas.com/api/auth/login",
    //   method: "POST",
    //   body: {
    //     email: "peraperic12345@gmail.com",
    //     password: "pera12345",
    //   },
    // })
    //   .its("body")
    //   .then((resp) => {
    //     let respToken = resp.access_token;
    //     let tokenType = resp.token_type;
    //     expect(respToken).to.be.a("string");
    //     expect(tokenType).eq("bearer");

    //       window.localStorage.setItem("token", respToken);
    //   });
    cy.login();
  });

  it("Successfully login and open new Gallery page", () => {
    cy.url().should("not.include", "/login");

    cy.visit("/create");

    cy.get("#title").type("Brownie Gallery");
    cy.get("#description").type("Brownie Gallery description");
    cy.get("[type='url']").type(
      "https://www.simplyrecipes.com/thmb/w52xKYdM2peskIGtntk3i4202sU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SimplyRecipes_CosmicBrownies_LEAD_5-01ab51e01a644e87becbdec1a7a3b67c.jpg"
    );

    cy.get(".btn-custom").contains("Submit").click();
  });
});
