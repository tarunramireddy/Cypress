describe('Second Test Suite', () => {

    it('Second Test', () => {
        cy.visit('http://www.o2.co.uk/');
        cy.xpath("//div[@id='onetrust-button-group-parent']/div/button[text()='Accept all cookies']").should('be.visible').click();
        cy.xpath("//button[@aria-label='Close modal']").should('be.visible').click();
        cy.xpath("//a[@href='https://www.o2.co.uk/shop']").realHover();
        cy.xpath("//a[@href='https://www.o2.co.uk/shop/phones' and @data-testid='header']").should('be.visible').click();
        let phone = "iPhone 14 Pro Max";
        cy.xpath("//label[text()=' Search phones ']/following-sibling::input").type(`${phone}`);
        cy.xpath(`//div[contains(@class,'secondary-search')]/strong[contains(text(),'${phone}')]`).click();
        cy.wait(2000);

    })

});