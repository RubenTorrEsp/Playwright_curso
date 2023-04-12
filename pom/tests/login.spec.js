import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import dotenv from 'dotenv'
dotenv.config()

test('User logs correctly', async ({ page }) => {
    await page.goto(process.env.SAUCEDEMOURL);
    const loginPage = new LoginPage(page);
    await loginPage.submitLoginForm(process.env.SAUCEDEMOUSER,process.env.SAUCEDEMOPASS)

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});