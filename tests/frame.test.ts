import { test, expect } from '@playwright/test';

test("Interacting with frames", async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No.of frames: " + allframes.length);

   const myFrame = page.frame("firstFr")
//    if(myFrame!=null) {
//      await myFrame.fill("","")
//    }
   await myFrame?.fill("input[name='fname']","Minh");
   await myFrame?.fill("input[name='lname']","Vo");
   expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered")

   await page.waitForTimeout(3000);
   
})