const BasePage = require('./BasePage');

class DynamicLoadingPage extends BasePage {
  constructor(page) {
    super(page);
    this.baseUrl = 'https://the-internet.herokuapp.com/dynamic_loading';
    this.example1Url = 'https://the-internet.herokuapp.com/dynamic_loading/1';
    this.example2Url = 'https://the-internet.herokuapp.com/dynamic_loading/2';
    this.startButton = '#start button';
    this.loadingIndicator = '#loading';
    this.finishMessage = '#finish h4';
  }

  async navigateToDynamicLoadingPage() {
    await this.navigate(this.baseUrl);
  }

  async navigateToExample1() {
    await this.navigate(this.example1Url);
  }

  async navigateToExample2() {
    await this.navigate(this.example2Url);
  }

  async clickStart() {
    await this.click(this.startButton);
  }

  async waitForLoadingToComplete() {
    await this.waitForElement(this.loadingIndicator, { state: 'visible' });
    await this.waitForElement(this.loadingIndicator, { state: 'hidden' });
  }

  async isFinishMessageVisible() {
    return await this.isVisible(this.finishMessage);
  }

  async getFinishMessage() {
    await this.waitForElement(this.finishMessage, { state: 'visible' });
    return await this.getText(this.finishMessage);
  }

  async waitForDynamicContent() {
    await this.clickStart();
    await this.waitForLoadingToComplete();
    return await this.getFinishMessage();
  }
}

module.exports = DynamicLoadingPage;
