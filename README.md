# Playwright Automation Framework

A professional end-to-end testing framework built with Playwright and JavaScript, implementing the Page Object Model (POM) design pattern.

## Features

- **Page Object Model (POM)** architecture for maintainable test code
- **Multiple browser support** (Chromium, Firefox, WebKit)
- **HTML reporting** with screenshots and videos on failure
- **Parallel test execution** for faster test runs
- **GitHub Actions CI/CD** integration
- **Mobile testing** support (Chrome & Safari)
- **Automatic retries** in CI environment
- **Comprehensive test coverage** for Login, Checkboxes, and Dynamic Loading scenarios

## Project Structure

```
playwright-automation-framework/
├── pages/                      # Page Object Model classes
│   ├── BasePage.js            # Base page with common methods
│   ├── LoginPage.js           # Login page object
│   ├── CheckboxesPage.js      # Checkboxes page object
│   └── DynamicLoadingPage.js  # Dynamic loading page object
├── tests/                      # Test specifications
│   ├── login.spec.js          # Login test scenarios
│   ├── checkboxes.spec.js     # Checkboxes test scenarios
│   └── dynamic-loading.spec.js # Dynamic loading test scenarios
├── .github/
│   └── workflows/
│       └── playwright.yml     # GitHub Actions workflow
├── playwright.config.js       # Playwright configuration
├── package.json              # Project dependencies
└── README.md                 # This file
```

## Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/SpiraNikolic96/Bolt.new.git
cd Bolt.new
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (see the browser)
```bash
npm run test:headed
```

### Run tests in UI mode (interactive)
```bash
npm run test:ui
```

### Run tests on specific browser
```bash
npm run test:chrome
npm run test:firefox
npm run test:webkit
```

### Run specific test file
```bash
npx playwright test tests/login.spec.js
```

### Run tests with tag
```bash
npx playwright test --grep @smoke
```

## Viewing Test Reports

After running tests, view the HTML report:
```bash
npm run report
```

The report will open automatically in your browser, showing:
- Test results with pass/fail status
- Screenshots of failures
- Videos of failed tests
- Execution time and traces

## Test Scenarios

### Login Tests
- Successful login with valid credentials
- Failed login with invalid username
- Failed login with invalid password
- Failed login with empty credentials
- Logout functionality

### Checkboxes Tests
- Verify initial checkbox states
- Check and uncheck individual checkboxes
- Toggle checkboxes multiple times
- Check multiple checkboxes simultaneously

### Dynamic Loading Tests
- Wait for hidden elements to appear (Example 1)
- Wait for rendered elements (Example 2)
- Verify loading indicators
- Test dynamic content loading with helper methods

## Page Object Model

The framework uses POM for better maintainability:

### BasePage
Contains common methods used across all pages:
- `navigate(url)` - Navigate to URL
- `click(selector)` - Click element
- `fill(selector, text)` - Fill input field
- `getText(selector)` - Get element text
- `isVisible(selector)` - Check visibility
- `waitForElement(selector)` - Wait for element

### Page Classes
Each page extends BasePage and contains:
- Page-specific selectors
- Page-specific methods
- Business logic for that page

## Configuration

The `playwright.config.js` file contains:
- **Test directory**: `./tests`
- **Parallel execution**: Enabled
- **Retries**: 2 in CI, 0 locally
- **Reporters**: HTML, List, JSON
- **Screenshots**: On failure
- **Videos**: On failure
- **Trace**: On first retry
- **Projects**: Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari

## CI/CD with GitHub Actions

The project includes a GitHub Actions workflow (`.github/workflows/playwright.yml`) that:
- Runs on push to main/master branches
- Runs on pull requests
- Tests across Chromium, Firefox, and WebKit
- Uploads test reports and artifacts
- Retains reports for 30 days

### Triggering CI manually
Go to the Actions tab in GitHub and click "Run workflow"

## Best Practices

1. **Page Objects**: Keep page logic separate from test logic
2. **Selectors**: Use stable selectors (ID, data-testid)
3. **Waits**: Use Playwright's auto-waiting instead of hard waits
4. **Independence**: Tests should be independent and run in any order
5. **Cleanup**: Use `beforeEach` and `afterEach` for setup/teardown
6. **Assertions**: Use meaningful assertions with clear error messages

## Troubleshooting

### Tests failing locally but passing in CI
- Ensure browsers are installed: `npx playwright install`
- Check Node.js version matches CI

### Timeout errors
- Increase timeout in `playwright.config.js`
- Check network connectivity
- Verify target website is accessible

### Element not found
- Check if selector is correct
- Ensure page is fully loaded
- Add explicit waits if needed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests to ensure they pass
5. Submit a pull request

## License

MIT

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Page Object Model](https://playwright.dev/docs/pom)
- [GitHub Actions](https://docs.github.com/en/actions)

## Author

Spira Nikolic

## Support

For issues and questions, please open an issue in the GitHub repository.
