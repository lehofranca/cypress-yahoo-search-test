const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://br.search.yahoo.com',
    specPattern: 'cypress/e2e/**/*.js',
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
})
