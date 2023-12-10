import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig ={
  testMatch:["tests/recorded.test.ts"],
  use: {
    headless: false,

    // Artifacts
   // screenshot: 'on',
   // video: 'on',
  },
}
  


export default config;

