// const { assert } = require("chai");

// describe('First Test Suite', () => {

//   // Test case 1
//   it('first Test', () => {
//     cy.visit('http://www.automationpractice.pl/index.php')
//     cy.url().should('include', 'automationpractice')
//     .and('eq', 'http://www.automationpractice.pl/index.php')
//    .and('not.include', 'automationpractice1');
//     // cy.get("#search_query_top").type("tops{enter}");
//     cy.get("#search_query_top").should('be.visible');
//     cy.xpath("//input[@id='search_query_top']").type("tops{enter}");
//     // cy.xpath("//a").should("have.length", 7);
//     cy.xpath("//input[@id='search_query_top']").should('have.value', 'tops');
//   })
//  // Test case 2
// it('Second Test', () => {
//   cy.visit('http://www.automationpractice.pl/index.php');
//   let txt = "My orders";

//   cy.xpath("//a[@title='My orders']").then((x) =>{
//     const txt = x.text();
//     cy.log(txt);
//     // expect(txt).to.equal("My orders");
//     assert.equal(txt, "My orders", "Text is equal");
//   })

//   cy.get("a[title='My orders']").click();
// })
// })


describe('Second Test Suite', () => {

  it('Second Test', () => {
      cy.visit('http://www.o2.co.uk/');
      cy.xpath("//div[@id='onetrust-button-group-parent']/div/button[text()='Accept all cookies']").should('be.visible').click();
      // cy.xpath("//button[@aria-label='Close modal']").should('be.visible').click();
      cy.xpath("//a[@href='https://www.o2.co.uk/shop']").realHover();
      cy.xpath("//a[@href='https://www.o2.co.uk/shop/phones' and @data-testid='header']").should('be.visible').click();
      let phone = "iPhone 15 Pro Max";
      cy.xpath("//label[text()=' Search phones ']/following-sibling::input").type(`${phone}`);
      cy.xpath(`//div[contains(@class,'secondary-search')]/strong[contains(text(),'${phone}')]`).click();
      cy.wait(2000);
      cy.xpath("//h1[@class='device-details-header__heading']/span[@class='device-details-header__brand-name']").should('contain.text', phone);
      cy.xpath("//button[@aria-label='Pick colour Natural Titanium']").should('be.visible').click();
      // cy.xpath("//button[@aria-label='Pick colour Natural Titanium']").should('contain.text', 'Natural Titanium');
      cy.wait(2000);
      cy.xpath("//h1[@class='device-details-header__heading']")
      .scrollIntoView()
      .should('be.visible');
      cy.xpath("//div[contains(text(),'Capacity')]/following::o2uk-pills/div/button/div[contains(text(),'1TB')]").scrollIntoView().should('be.visible').click();
      cy.xpath("//p[text()='Customise your plan']").should('be.visible').click();
      cy.xpath("//button[contains(text(),'pay for your device in full')]").should('be.visible').click();
      cy.xpath("//div[@class='mat-radio-label-content']/div/div[(text()='Unlimited')]").scrollIntoView().click();
      cy.xpath("//button/span[text()=' Select this plan ']").scrollIntoView().should('be.visible').click();
  })

});