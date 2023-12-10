import { chromium, test } from '@playwright/test'

test("Login test demo", async ({ page }) => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();


    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(text(),'My account')]");
    //await page.click("text=Login")
    await page.click("'Login'")

    await page.fill("input[name='email']", "minh123@gmail.com")
    await page.fill("input[name='password']", "123456")
    await page.click("input[value='Login']");

    await page.waitForTimeout(5000);

    const newContext = await browser.newContext(); //  open a new browser  (don't share cache or cookies)

    const newPage = await newContext.newPage(); //  open a new browser
    await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")

    await newPage.waitForTimeout(5000);
})