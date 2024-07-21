const { expect } = require('@playwright/test');

class HomePage {
    constructor(page) {
        this.page = page;
        this.searchBar = page.getByPlaceholder('pesquisa');
        this.searchButton = page.getByRole('button', { name: '' });
        //this.searchTDP = page.getByRole('link', { name: 'O Triunfo dos Porcos' });
    }


    async goto() {
        await this.page.goto('https://www.leyaonline.com/pt/');
    }


    async getSearch(value) {
        await this.searchBar.fill(value);
        await this.page.waitForTimeout(1000);
        await this.searchButton.click();
    };

    async validateSearch(pName) {
        //await expect(this.page.locator('//*@class="book-name">O Triunfo dos Porcos')).toHaveText(pName);

        //await expect(this.page.getByText(pName)).toContainText(pName);
        
        await expect(this.page.getByRole('link', { name: pName })).toContainText(pName);
    }

    async selectItem(pName) {
        


        //await this.page.getByRole('link', { name: pName }).click();

        const c = await this.page.getByRole('link', { name: pName });
        await c.waitFor();
        await c.click();
    }


    async searchValue(vName) {
        //await expect(this.page.getByText(vName)).toContainText(vName);

        await this.page.getByText(vName).isVisible();

    }



    async selectExactItem(pName) {


       //const l =
       await this.page.locator('[class=book-title]').innerText(pName);
       //logger.log("batata",info,l )
    }

    async validateAuthor(aName) {

        
        await this.page.locator('//*@class="nome_autor"'+aName);

    }


    async numberComparison(vName) {
        const l = await this.page.getByText(vName).isVisible();
        await expect(l).toBeTruthy();
    }
}

module.exports = { HomePage };