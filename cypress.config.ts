import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    }
  },
  env: {
    BASE_URL: 'http://localhost:5173/effortless'
  }
});
