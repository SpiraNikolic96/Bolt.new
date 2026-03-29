const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test.describe('Login Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
  });

  test('should login successfully with valid credentials', async () => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    const isSuccessful = await loginPage.isLoginSuccessful();
    expect(isSuccessful).toBeTruthy();

    const isLogoutVisible = await loginPage.isLogoutButtonVisible();
    expect(isLogoutVisible).toBeTruthy();
  });

  test('should fail to login with invalid username', async () => {
    await loginPage.login('invaliduser', 'SuperSecretPassword!');

    const isFailed = await loginPage.isLoginFailed();
    expect(isFailed).toBeTruthy();
  });

  test('should fail to login with invalid password', async () => {
    await loginPage.login('tomsmith', 'invalidpassword');

    const isFailed = await loginPage.isLoginFailed();
    expect(isFailed).toBeTruthy();
  });

  test('should fail to login with empty credentials', async () => {
    await loginPage.login('', '');

    const isFailed = await loginPage.isLoginFailed();
    expect(isFailed).toBeTruthy();
  });

  test('should logout successfully after login', async () => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    const isLogoutVisible = await loginPage.isLogoutButtonVisible();
    expect(isLogoutVisible).toBeTruthy();

    await loginPage.logout();

    const flashMessage = await loginPage.getFlashMessage();
    expect(flashMessage).toContain('You logged out of the secure area!');
  });
});
