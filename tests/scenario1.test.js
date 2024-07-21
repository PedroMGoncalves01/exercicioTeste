const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/example.page');

test.describe('Test group', () => {

  test('Scenario 1', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.getSearch('George');
    await homePage.validateSearch('O Triunfo dos Porcos');
    await homePage.selectItem('O Triunfo dos Porcos');
    await homePage.searchValue('Quinta Manor');

  });

});
