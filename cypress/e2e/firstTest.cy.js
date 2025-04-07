const { assert } = require("chai");

describe('First Test Suite', () => {

  // Test case 1
  it('first Test', () => {
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.url().should('include', 'automationpractice')
    .and('eq', 'http://www.automationpractice.pl/index.php')
   .and('not.include', 'automationpractice1');
    // cy.get("#search_query_top").type("tops{enter}");
    cy.get("#search_query_top").should('be.visible');
    cy.xpath("//input[@id='search_query_top']").type("tops{enter}");
    // cy.xpath("//a").should("have.length", 7);
    cy.xpath("//input[@id='search_query_top']").should('have.value', 'tops');
  })
 // Test case 2
it('Second Test', () => {
  cy.visit('http://www.automationpractice.pl/index.php');
  let txt = "My orders";

  cy.xpath("//a[@title='My orders']").then((x) =>{
    const txt = x.text();
    cy.log(txt);
    // expect(txt).to.equal("My orders");
    assert.equal(txt, "My orders", "Text is equal");
  })

  cy.get("a[title='My orders']").click();
})
})