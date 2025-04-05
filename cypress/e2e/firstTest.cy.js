describe('First Test Suite', () => {

  // Test case 1
  it('first Test', () => {
    cy.visit('http://www.automationpractice.pl/index.php');
    // cy.get("#search_query_top").type("tops{enter}");
    cy.xpath("//input[@id='search_query_top']").type("tops{enter}");
  })
 // Test case 2
it('Second Test', () => {
  cy.visit('http://www.automationpractice.pl/index.php');
  cy.get("a[title='My orders']").click();
})
})