import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig ={
  //testMatch:["tests/basicinteraction.test.ts"],
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  retries: 0,
  reporter:[["dot"],["json",{
    outputFile:"jsonReport/jsonReport.json"
  }], ["html", {
    open: "always"
  }]]
};
  


export default config;

