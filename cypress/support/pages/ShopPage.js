class ShopPage {
    searchPhone(phone) {
      cy.xpath("//label[text()=' Search phones ']/following-sibling::input").type(phone);
      cy.xpath(`//div[contains(@class,'secondary-search')]/strong[contains(text(),'${phone}')]`).click();
    }
  }
  
  export default new ShopPage();
  