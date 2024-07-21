# Playwright Test Framework

This project is a test framework using Playwright and the Page Object Pattern.

## Project Structure

playwright-test-framework/
├── tests/
│ ├── example.test.js
├── pages/
│ ├── example.page.js
├── utils/
│ ├── helpers.js
├── playwright.config.js
├── package.json
├── .gitignore
├── README.md


## Setup

1. **Clone the repository**
   ```sh
   git clone <repository-url>
   cd playwright-test-framework


2. **Install dependencies**
npm install


Running the test: 
npm test


Writing Tests
1. **Create a Page Object**

Create a new file in the pages directory for the page you want to test. For example, pages/newpage.page.js.

javascript

class NewPage {
  constructor(page) {
    this.page = page;
    // Define selectors
  }

  async goto() {
    await this.page.goto('https://newpage.com');
  }

  // Define actions
}

module.exports = { NewPage };
2. **Write a Test**

Create a new file in the tests directory for your tests. For example, tests/newpage.test.js.

javascript

const { test, expect } = require('@playwright/test');
const { NewPage } = require('../pages/newpage.page');


  test('should perform some actions', async ({ page }) => {
    const newPage = new NewPage(page);
    await newPage.goto();
    // Add assertions
  });
