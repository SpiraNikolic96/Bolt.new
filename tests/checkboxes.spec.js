const { test, expect } = require('@playwright/test');
const CheckboxesPage = require('../pages/CheckboxesPage');

test.describe('Checkboxes Tests', () => {
  let checkboxesPage;

  test.beforeEach(async ({ page }) => {
    checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.navigateToCheckboxesPage();
  });

  test('should verify initial state of checkboxes', async () => {
    const isCheckbox1Checked = await checkboxesPage.isCheckbox1Checked();
    const isCheckbox2Checked = await checkboxesPage.isCheckbox2Checked();

    expect(isCheckbox1Checked).toBeFalsy();
    expect(isCheckbox2Checked).toBeTruthy();
  });

  test('should check and uncheck checkbox 1', async () => {
    await checkboxesPage.checkCheckbox1();
    let isChecked = await checkboxesPage.isCheckbox1Checked();
    expect(isChecked).toBeTruthy();

    await checkboxesPage.uncheckCheckbox1();
    isChecked = await checkboxesPage.isCheckbox1Checked();
    expect(isChecked).toBeFalsy();
  });

  test('should check and uncheck checkbox 2', async () => {
    const initialState = await checkboxesPage.isCheckbox2Checked();
    expect(initialState).toBeTruthy();

    await checkboxesPage.uncheckCheckbox2();
    let isChecked = await checkboxesPage.isCheckbox2Checked();
    expect(isChecked).toBeFalsy();

    await checkboxesPage.checkCheckbox2();
    isChecked = await checkboxesPage.isCheckbox2Checked();
    expect(isChecked).toBeTruthy();
  });

  test('should toggle checkbox 1 multiple times', async () => {
    const initialState = await checkboxesPage.isCheckbox1Checked();

    await checkboxesPage.toggleCheckbox1();
    let currentState = await checkboxesPage.isCheckbox1Checked();
    expect(currentState).toBe(!initialState);

    await checkboxesPage.toggleCheckbox1();
    currentState = await checkboxesPage.isCheckbox1Checked();
    expect(currentState).toBe(initialState);
  });

  test('should toggle checkbox 2 multiple times', async () => {
    const initialState = await checkboxesPage.isCheckbox2Checked();

    await checkboxesPage.toggleCheckbox2();
    let currentState = await checkboxesPage.isCheckbox2Checked();
    expect(currentState).toBe(!initialState);

    await checkboxesPage.toggleCheckbox2();
    currentState = await checkboxesPage.isCheckbox2Checked();
    expect(currentState).toBe(initialState);
  });

  test('should check both checkboxes simultaneously', async () => {
    await checkboxesPage.checkCheckbox1();
    await checkboxesPage.checkCheckbox2();

    const isCheckbox1Checked = await checkboxesPage.isCheckbox1Checked();
    const isCheckbox2Checked = await checkboxesPage.isCheckbox2Checked();

    expect(isCheckbox1Checked).toBeTruthy();
    expect(isCheckbox2Checked).toBeTruthy();
  });
});
