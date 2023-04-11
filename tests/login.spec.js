import { test, expect } from '@playwright/test';

test('Usuario puede logarse correctamente', async ({ page }) => {
    //Entrar en la web
    await page.goto('https://www.saucedemo.com/');

    //Introducir el usuario
    await page.locator('[data-test="username"]').fill('standard_user');

    //Introducir la contraseña
    await page.locator('[data-test="password"]').fill('secret_sauce');

    //Hacer click en el botón de login
    await page.locator('[data-test="login-button"]').click();

    //Comprobar que la URL es correcta
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});