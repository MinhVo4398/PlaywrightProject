import { expect, test } from "@playwright/test";

test("Interaction with inputs", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const messageInput = page.locator("//input[@id='user-message']")
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message")
    console.log('Before entering data: ' + await messageInput.inputValue());

    await messageInput.fill("Hi Minh");
    console.log('After entering data: ' + await messageInput.inputValue());
})

test("Sum", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const sum1input = page.locator("#sum1");
    const sum2input = page.locator("#sum2");

    const getSumBtn = page.locator("//button[normalize-space()='Get Sum']")
    let num1 = 121;
    let num2 = 456;
    await sum1input.fill(""+ num1); // string
    await sum2input.fill(""+ num2); // string
    await getSumBtn.click();
    const result = page.locator("#addmessage")
    console.log(await result.textContent());
    let expectedResult = num1 + num2;
    expect(result).toHaveText("" + expectedResult); // string

})

test("Checkbox",async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    const  singleCheckbox = page.locator("id=isAgeSelected")
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();
})