import { After, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { QuoteRequestPage } from '../../pages/QuoteRequestPage';
import { CustomWorld } from './world';

setDefaultTimeout(30_000);

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch();
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  this.quoteRequestPage = new QuoteRequestPage(this.page);
});

After(async function (this: CustomWorld) {
  await this.browser?.close();
});
