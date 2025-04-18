
require('cypress-xpath');
import 'cypress-real-events/support';
import 'cypress-mochawesome-reporter/register';
const addContext = require('mochawesome/addContext');

afterEach(function () {
  const title = this.currentTest.title;
  const status = this.currentTest.state;

  // Replace illegal characters for filenames
  const cleanTitle = title.replace(/[/\\?%*:|"<>]/g, '-').replace(/ /g, '-');
  const fileName = `${status.toUpperCase()}_${cleanTitle}`;

  // Take screenshot
  cy.wait(100).then(() => {
    cy.screenshot(fileName, { capture: 'runner' });

    // Normalize the spec path (Windows support)
    const specFileName = Cypress.spec.name.replace(/\\/g, '/');
    const screenshotPath = `cypress/screenshots/${specFileName}/${fileName}.png`;

    // Add screenshot to HTML report
    addContext({ test: this }, screenshotPath);
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore errors from O2 frontend
  return false;
});

