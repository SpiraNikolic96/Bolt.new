const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.url = 'https://the-internet.herokuapp.com/login';
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.loginButton = 'button[type="submit"]';
    this.successMessage = '#flash';
    this.errorMessage = '#flash';
    this.logoutButton = 'a[href="/logout"]';
  }

  async navigateToLoginPage() {
    await this.navigate(this.url);
  }

  async login(username, password) {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async getFlashMessage() {
    await this.waitForElement(this.successMessage);
    return await this.getText(this.successMessage);
  }

  async isLogoutButtonVisible() {
    return await this.isVisible(this.logoutButton);
  }

  async logout() {
    await this.click(this.logoutButton);
  }

  async isLoginSuccessful() {
    const message = await this.getFlashMessage();
    return message.includes('You logged into a secure area!');
  }

  async isLoginFailed() {
    const message = await this.getFlashMessage();
    return message.includes('Your username is invalid!') || message.includes('Your password is invalid!');
  }
}

module.exports = LoginPage;
