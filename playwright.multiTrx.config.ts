import { PlaywrightTestConfig } from '@playwright/test';
import baseConfig from './playwright.base.config';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  ...baseConfig,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'junit',
  reporter: [
    ['./index.ts', {
      outputFile: {
        folder: "./playwright-test-reports",
        prefirx: "trxFrom",
      }
    }],
  ],
};

export default config;
