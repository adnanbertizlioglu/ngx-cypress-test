const { defineConfig } = require("cypress")

module.exports  = defineConfig({
  viewportHeight :1080,
  viewportWidth   : 1920,
  video : false,
  eporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },




  
  env : {
    username : "cytest@test.com",
    password : "welcome123"

  },

  retries: {
    runMode: 2,
    openMode:0
  },
  e2e: {
    baseUrl :"http://localhost:4200",
    excludeSpecPattern:["**/1-getting-started", "**/2-advanced-examples"],
    specPattern:"cypress/e2e/**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
