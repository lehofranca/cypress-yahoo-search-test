const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.uol.com.br', // usado só quando não passar URL completa, o que garante que eu consiga atender a cobertura dos dois testes, incluindo com url de origem do Yahoo no primeiro.
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 60000,
    chromeWebSecurity: false,
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    }
  }
})
