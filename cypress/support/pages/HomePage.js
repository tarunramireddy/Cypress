class HomePage {
    acceptCookies() {
      cy.xpath("//div[@id='onetrust-button-group-parent']/div/button[text()='Accept all cookies']").should('be.visible').click();
    }
  
    hoverShopLink() {
      cy.xpath("//a[@href='https://www.o2.co.uk/shop']").realHover();
    }
  
    clickPhonesLink() {
      cy.xpath("//a[@href='https://www.o2.co.uk/shop/phones' and @data-testid='header']").should('be.visible').click();
    }
  }
  
  export default new HomePage();
  