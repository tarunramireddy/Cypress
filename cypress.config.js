const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 20000, // 10 seconds for all commands

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('after:run', () => {});
      return config;
    },
  },

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true
  }
});
