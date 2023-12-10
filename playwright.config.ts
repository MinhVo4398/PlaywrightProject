import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig ={
  testMatch:["tests/login.test.ts"],
  use: {
    headless: false,

    // Artifacts
   // screenshot: 'on',
   // video: 'on',
  },
}
  


export default config;

