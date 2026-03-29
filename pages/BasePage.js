class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async getTitle() {
    return await this.page.title();
  }

  async waitForElement(selector, options = {}) {
    await this.page.waitForSelector(selector, options);
  }

  async click(selector) {
    await this.page.click(selector);
  }

  async fill(selector, text) {
    await this.page.fill(selector, text);
  }

  async getText(selector) {
    return await this.page.textContent(selector);
  }

  async isVisible(selector) {
    return await this.page.isVisible(selector);
  }

  async isChecked(selector) {
    return await this.page.isChecked(selector);
  }

  async check(selector) {
    await this.page.check(selector);
  }

  async uncheck(selector) {
    await this.page.uncheck(selector);
  }
}

module.exports = BasePage;
