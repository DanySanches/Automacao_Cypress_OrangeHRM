const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "kxudai",
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      env: {
        alterarDados: true // ou false
      }
    },

    video: true,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: false,
      html: true,
      json: true,
      timestamp: "mmddyyyy_HHMMss",
      charts: true,
      code: true,
      reportTitle: "Teste Orange HRM 🍊",
    },
    
  },
   testeIsolation:false,
});
