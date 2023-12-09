import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig ={
  testMatch:["tests/login.test.ts"],
  
};

export default config;

