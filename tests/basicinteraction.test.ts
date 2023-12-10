import {expect, test} from "@playwright/test";

test("", async ({page})=> {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const messageInput =  page.locator("//input[@id='user-message']")
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder","Please enter your Message")
    console.log(await messageInput.inputValue());

   await messageInput.fill("Hi Minh");
})