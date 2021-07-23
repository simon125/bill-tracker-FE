/* eslint-disable no-undef */

describe("Renders the homepage", () => {
  //   it("renders correctly", () => {
  //     cy.visit("/");
  //     // cy.get
  //   });

  it("allowed input to be used", () => {
    cy.visit("/");
    /* ==== Generated with Cypress Studio ==== */
    cy.wait(500);
    cy.get('[for="signIn"]').click();
    // cy.get("#signIn").check();
    cy.get('[for="signUp"]').click();
    // cy.get("#signUp").check();
    cy.get("#username").clear();
    cy.get("#username").type("test123");
    /* ==== End Cypress Studio ==== */
  });
});
