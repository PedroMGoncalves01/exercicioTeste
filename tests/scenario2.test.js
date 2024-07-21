const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/example.page');

test.describe('Test group', () => {

  

  test('Scenario 2', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.getSearch('1984');
    await page.goto('https://www.leyaonline.com/pt/livros/romance/1984/')
    await homePage.numberComparison("9789722071550");
    await homePage.validateAuthor('George Orwell');

  })

});

