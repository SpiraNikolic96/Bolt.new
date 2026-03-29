const { test, expect } = require('@playwright/test');
const DynamicLoadingPage = require('../pages/DynamicLoadingPage');

test.describe('Dynamic Loading Tests', () => {
  let dynamicLoadingPage;

  test.beforeEach(async ({ page }) => {
    dynamicLoadingPage = new DynamicLoadingPage(page);
  });

  test('should load hidden element (Example 1)', async () => {
    await dynamicLoadingPage.navigateToExample1();

    await dynamicLoadingPage.clickStart();
    await dynamicLoadingPage.waitForLoadingToComplete();

    const isVisible = await dynamicLoadingPage.isFinishMessageVisible();
    expect(isVisible).toBeTruthy();

    const message = await dynamicLoadingPage.getFinishMessage();
    expect(message).toBe('Hello World!');
  });

  test('should load rendered element (Example 2)', async () => {
    await dynamicLoadingPage.navigateToExample2();

    await dynamicLoadingPage.clickStart();
    await dynamicLoadingPage.waitForLoadingToComplete();

    const isVisible = await dynamicLoadingPage.isFinishMessageVisible();
    expect(isVisible).toBeTruthy();

    const message = await dynamicLoadingPage.getFinishMessage();
    expect(message).toBe('Hello World!');
  });

  test('should wait for dynamic content using helper method (Example 1)', async () => {
    await dynamicLoadingPage.navigateToExample1();

    const message = await dynamicLoadingPage.waitForDynamicContent();
    expect(message).toBe('Hello World!');
  });

  test('should wait for dynamic content using helper method (Example 2)', async () => {
    await dynamicLoadingPage.navigateToExample2();

    const message = await dynamicLoadingPage.waitForDynamicContent();
    expect(message).toBe('Hello World!');
  });

  test('should verify loading indicator appears and disappears (Example 1)', async ({ page }) => {
    await dynamicLoadingPage.navigateToExample1();

    await dynamicLoadingPage.clickStart();

    const loadingIndicator = page.locator('#loading');
    await expect(loadingIndicator).toBeVisible();
    await expect(loadingIndicator).toBeHidden({ timeout: 10000 });

    const finishMessage = page.locator('#finish h4');
    await expect(finishMessage).toBeVisible();
    await expect(finishMessage).toHaveText('Hello World!');
  });

  test('should verify loading indicator appears and disappears (Example 2)', async ({ page }) => {
    await dynamicLoadingPage.navigateToExample2();

    await dynamicLoadingPage.clickStart();

    const loadingIndicator = page.locator('#loading');
    await expect(loadingIndicator).toBeVisible();
    await expect(loadingIndicator).toBeHidden({ timeout: 10000 });

    const finishMessage = page.locator('#finish h4');
    await expect(finishMessage).toBeVisible();
    await expect(finishMessage).toHaveText('Hello World!');
  });
});
