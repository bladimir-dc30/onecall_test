# OneCall Playwright BDD Tests

This project contains browser automation tests written with Playwright, Cucumber.js, TypeScript, and the Page Object Model (POM).

## Requirements

- Node.js 20 or later
- npm (included with Node.js)
- Internet access to install packages, download the browser, and reach the test website

The BDD scenario uses Chromium. Playwright installs a project-compatible browser version in the setup steps below.

## Setup

1. Clone the repository and move into the project directory:

   ```bash
   git clone <repository-url>
   cd <repository-directory>/onecall_test
   ```

   If you already have the project files, open a terminal in the `onecall_test` directory.

2. Install the dependencies from the lockfile:

   ```bash
   npm ci
   ```

3. Install the Chromium browser used by the BDD tests:

   ```bash
   npx playwright install chromium
   ```

   On Linux, if browser system libraries are missing, install them with:

   ```bash
   npx playwright install --with-deps chromium
   ```

## Run the tests

Run the Cucumber BDD scenario:

```bash
npm test
```

The following command runs the same BDD suite:

```bash
npm run test:bdd
```

Run the original Playwright Test spec:

```bash
npm run test:playwright
```

Run Playwright in headed mode:

```bash
npm run test:playwright -- --headed
```

## Test website

The quote request scenario opens `https://astroflow.wingflows.com/` by default. To use another environment, set `BASE_URL` before running the BDD tests:

```bash
BASE_URL=https://example.com npm test
```

In PowerShell:

```powershell
$env:BASE_URL = "https://example.com"
npm test
```

The scenario submits the quote request form on the configured website. Use a test environment and test data when possible.

## Project structure

```text
features/
  quote-request.feature                 # Gherkin feature and scenario outline
  step-definitions/
    quote-request.steps.ts               # Cucumber step definitions
  support/
    hooks.ts                             # Browser setup and cleanup
    world.ts                             # Scenario state and page object
pages/
  QuoteRequestPage.ts                    # Page Object Model
tests/
  example.spec.ts                        # Original Playwright Test spec
cucumber.js                              # Cucumber paths and TypeScript setup
playwright.config.ts                     # Playwright Test configuration
tsconfig.json                            # TypeScript compiler settings
package.json                             # Commands and dependencies
package-lock.json                        # Locked dependency versions
```

The feature uses a `Background` to open the quote request page and a `Scenario Outline` to provide its form values through an `Examples` table. Cucumber loads the TypeScript step definitions and support files through `cucumber.js`.

## Generated output

- Playwright HTML reports are written to `playwright-report/`.
- Playwright test results are written to `test-results/`.
- Cucumber prints its results in the terminal.
