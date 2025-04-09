class PhoneDetailsPage {
    verifyPhoneTitle(phone) {
      cy.xpath("//h1[@class='device-details-header__heading']/span[@class='device-details-header__brand-name']").should('contain.text', phone);
    }
  
    selectColor(color) {
      cy.xpath(`//button[contains(@aria-label,'${color}')]`).should('be.visible').click();
      cy.xpath("//o2uk-color-picker-simple/preceding-sibling::div").should("contain.text", `${color}`).click();
    }
  
    scrollToTitle() {
      cy.xpath("//h1[@class='device-details-header__heading']").scrollIntoView().should('be.visible');
    }
  
    selectCapacity(capacity) {
      cy.xpath(`//div[contains(text(),'Capacity')]/following::o2uk-pills/div/button/div[contains(text(),'${capacity}')]`)
        .scrollIntoView()
        .should('be.visible')
        .click();
    }
  
    clickCustomizePlan() {
      cy.xpath("//p[text()='Customise your plan']").should('be.visible').click();
    }
  
    chooseFullPayment() {
      cy.xpath("//button[contains(text(),'pay for your device in full')]").should('be.visible').click();
    }
  
    selectUnlimitedData() {
      cy.xpath("//div[@class='mat-radio-label-content']/div/div[(text()='Unlimited')]").scrollIntoView().click();
    }
  
    confirmPlan() {
      cy.xpath("//button/span[text()=' Select this plan ']").scrollIntoView().should('be.visible').click();
    }
  }
  
  export default new PhoneDetailsPage();
  