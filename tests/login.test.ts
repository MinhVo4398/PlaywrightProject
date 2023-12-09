import { chromium, test } from '@playwright/test'

test("Login test demo", async ({page}) => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(text(),'My account')]");
    await page.click("text=Login")
    

})