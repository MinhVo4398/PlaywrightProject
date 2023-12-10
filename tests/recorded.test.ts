import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
     await page.goto('https://ecommerce-playground.lambdatest.io/');
     await page.hover("//a[@data-toggle='dropdown']//span[contains(text(),'My account')]");
     await page.click("'Login'")
 
     await page.fill("input[name='email']", "minh123@gmail.com")
     await page.fill("input[name='password']", "123456")
     await page.click("input[value='Login']");

     await page.click("//a[normalize-space()='Edit your account information']")
     await page.waitForTimeout(5000);

     await page.locator("//input[@id='input-firstname']").click();
     await page.locator("//input[@id='input-firstname']").fill("minhvo");

     await page.locator('text=Continue').click();
     await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');

     // click logout
     await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
     await page.locator('span:has-text("Logout")').click();
     await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/logout1');


});