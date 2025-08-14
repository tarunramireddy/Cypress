import HomePage from '../support/pages/HomePage';
import ShopPage from '../support/pages/ShopPage';
import PhoneDetailsPage from '../support/pages/PhoneDetailsPage';
import testData from '../fixtures/testData.json';

const { phone, color, capacity } = testData;
//Just adding iphone into cart by going through the shop page and selecting the phone from the list
// describe('Second Test Suite', () => {
//   it('Buy iPhone with custom plan', () => {
//     const url = Cypress.config('baseUrl');
//     cy.visit(url);
//     HomePage.acceptCookies();
//     HomePage.hoverShopLink();
//     HomePage.clickPhonesLink();

//     ShopPage.searchPhone(phone);

//     cy.wait(2000);
//     PhoneDetailsPage.verifyPhoneTitle(phone);
//     PhoneDetailsPage.selectColor(color);
//     cy.wait(2000);
//     PhoneDetailsPage.scrollToTitle();
//     PhoneDetailsPage.selectCapacity(capacity);
//     PhoneDetailsPage.clickCustomizePlan();
//     PhoneDetailsPage.chooseFullPayment();
//     PhoneDetailsPage.selectUnlimitedData();
//     PhoneDetailsPage.confirmPlan();
//   });
// });


// // describe('First Test Suite', () => {

// //   // Test case 1
// //   it('first Test', () => {
// //     cy.visit('http://www.automationpractice.pl/index.php')
// //     cy.url().should('include', 'automationpractice')
// //     .and('eq', 'http://www.automationpractice.pl/index.php')
// //    .and('not.include', 'automationpractice1');
// //     // cy.get("#search_query_top").type("tops{enter}");
// //     cy.get("#search_query_top").should('be.visible');
// //     cy.xpath("//input[@id='search_query_top']").type("tops{enter}");
// //     // cy.xpath("//a").should("have.length", 7);
// //     cy.xpath("//input[@id='search_query_top']").should('have.value', 'tops');
// //   })
// //  // Test case 2
// // it('Second Test', () => {
// //   cy.visit('http://www.automationpractice.pl/index.php');
// //   let txt = "My orders";

// //   cy.xpath("//a[@title='My orders']").then((x) =>{
// //     const txt = x.text();
// //     cy.log(txt);
// //     // expect(txt).to.equal("My orders");
// //     assert.equal(txt, "My orders", "Text is equal");
// //   })

// //   cy.get("a[title='My orders']").click();
// // })
// // })


describe('Second Test Suite', () => {

  it('Second Test', () => {
      cy.visit('http://www.o2.co.uk/');
      cy.xpath("//div[@id='onetrust-button-group-parent']/div/button[text()='Accept all cookies']").should('be.visible').click();
      // cy.xpath("//button[@aria-label='Close modal']").should('be.visible').click();
      cy.xpath("//a[@href='https://www.o2.co.uk/shop']").realHover();
      cy.xpath("//a[@href='https://www.o2.co.uk/shop/phones' and @data-testid='header']").should('be.visible').click();
      cy.xpath("//label[text()=' Search phones ']/following-sibling::input").type(`${phone}`);
      cy.xpath(`//div[contains(@class,'secondary-search')]/strong[contains(text(),'${phone}')]`).click();
      cy.wait(2000);
      cy.xpath("//h1[@class='device-details-header__heading']/span[@class='device-details-header__brand-name']").should('contain.text', phone);
      cy.xpath(`//button[contains(@aria-label,'${color}')]`).should('be.visible').click();
      // cy.xpath("//button[@aria-label='Pick colour Natural Titanium']").should('contain.text', 'Natural Titanium');
      cy.xpath("//o2uk-color-picker-simple/preceding-sibling::div").should("contain.text", `${color}`).click();
      cy.wait(2000);
      cy.xpath("//h1[@class='device-details-header__heading']")
      .scrollIntoView()
      .should('be.visible');
      cy.xpath(`//div[contains(text(),'Capacity')]/following::o2uk-pills/div/button/div[contains(text(),'${capacity}')]`).scrollIntoView().should('be.visible').click();
      cy.xpath("//p[text()='Customise your plan']").should('be.visible').click();
      cy.xpath("//button[contains(text(),'pay for your device in full')]").should('be.visible').click();
      cy.xpath("//div[@class='mat-radio-label-content']/div/div[(text()='Unlimited')]").scrollIntoView().click();
      cy.xpath("//button/span[text()=' Select this plan ']").scrollIntoView().should('be.visible').click();
  })

});