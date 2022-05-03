const { test, expect, chromium } = require('@playwright/test');

test('basic test', async () => {
  const browser = await chromium.launchPersistentContext("/browserContext/", {})
  const page = await browser.newPage();
  await page.goto('https://dora-test.explorelearning.cloud/');
  //await page.goto('https://localhost:62527/');
  await page.pause();
  //const title = page.locator('text=Centres');
  //await page.pause();
  await page.click('text=Centres');
  await page.pause();

  const centres = await page.locator('div:has-text("Aberdeen") >> nth=3');
  await page.pause();
  await page.click('text=Aberdeen');
  await page.pause();
  await page.click('text="Add Prospect"');
  await page.pause();
  await expect(centres).toHaveText('Aberdeen');
});