import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { URLS, CREDENTIALS } from '../data/Constants'

test('User logs correctly', async ({ page }) => {
    await page.goto(URLS.SAUCEDEMOURL);
    const loginPage = new LoginPage(page);
    await loginPage.submitLoginForm(CREDENTIALS.SAUCEDEMOUSER,CREDENTIALS.SAUCEDEMOPASS)

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});