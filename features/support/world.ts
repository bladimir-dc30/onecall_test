import { World, setWorldConstructor } from '@cucumber/cucumber';
import type { Browser, BrowserContext, Page } from 'playwright';
import { QuoteRequestPage } from '../../pages/QuoteRequestPage';

export class CustomWorld extends World {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;
  quoteRequestPage?: QuoteRequestPage;
  submissionMessage?: string;

  getQuoteRequestPage(): QuoteRequestPage {
    if (!this.quoteRequestPage) {
      throw new Error('The quote request page has not been initialized.');
    }

    return this.quoteRequestPage;
  }
}

setWorldConstructor(CustomWorld);
