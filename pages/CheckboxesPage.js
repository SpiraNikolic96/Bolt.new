const BasePage = require('./BasePage');

class CheckboxesPage extends BasePage {
  constructor(page) {
    super(page);
    this.url = 'https://the-internet.herokuapp.com/checkboxes';
    this.checkboxesContainer = '#checkboxes';
    this.checkbox1 = '#checkboxes input:nth-of-type(1)';
    this.checkbox2 = '#checkboxes input:nth-of-type(2)';
  }

  async navigateToCheckboxesPage() {
    await this.navigate(this.url);
  }

  async isCheckbox1Checked() {
    return await this.isChecked(this.checkbox1);
  }

  async isCheckbox2Checked() {
    return await this.isChecked(this.checkbox2);
  }

  async checkCheckbox1() {
    const isChecked = await this.isCheckbox1Checked();
    if (!isChecked) {
      await this.check(this.checkbox1);
    }
  }

  async uncheckCheckbox1() {
    const isChecked = await this.isCheckbox1Checked();
    if (isChecked) {
      await this.uncheck(this.checkbox1);
    }
  }

  async checkCheckbox2() {
    const isChecked = await this.isCheckbox2Checked();
    if (!isChecked) {
      await this.check(this.checkbox2);
    }
  }

  async uncheckCheckbox2() {
    const isChecked = await this.isCheckbox2Checked();
    if (isChecked) {
      await this.uncheck(this.checkbox2);
    }
  }

  async toggleCheckbox1() {
    await this.click(this.checkbox1);
  }

  async toggleCheckbox2() {
    await this.click(this.checkbox2);
  }
}

module.exports = CheckboxesPage;
