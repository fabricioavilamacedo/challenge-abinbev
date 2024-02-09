const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //baseUrl: 'https://front.serverest.dev/login'
      //specPattern: 'cypress/e2e/api/**/*.api.cy.js'
      
    },
  },
});
