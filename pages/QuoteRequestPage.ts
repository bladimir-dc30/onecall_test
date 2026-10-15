import type { Page } from 'playwright';

export interface QuoteRequestData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  service: string;
  timeline: string;
  monthlyVolume: string;
  projectDetails: string;
}

export class QuoteRequestPage {
  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    const baseUrl = process.env.BASE_URL ?? 'https://astroflow.wingflows.com/';

    await this.page.goto(baseUrl);
    await this.page.getByRole('link', { name: 'Request Quote' }).nth(1).click();
    await this.page.waitForLoadState('networkidle');
  }

  async completeForm(data: QuoteRequestData): Promise<void> {
    await this.page
      .getByRole('textbox', { name: 'First Name *' })
      .fill(data.firstName);
    await this.page
      .getByRole('textbox', { name: 'Last Name *' })
      .fill(data.lastName);
    await this.page
      .getByRole('textbox', { name: 'Email Address *' })
      .fill(data.email);
    await this.page
      .getByRole('textbox', { name: 'Phone Number *' })
      .fill(data.phone);
    await this.page
      .getByRole('textbox', { name: 'Company Name *' })
      .fill(data.company);
    await this.page.getByLabel('Industry *').selectOption(data.industry);
    await this.page.getByRole('checkbox', { name: data.service }).check();
    await this.page.getByLabel('Timeline *').selectOption(data.timeline);
    await this.page
      .getByRole('textbox', { name: 'Estimated Monthly Volume' })
      .fill(data.monthlyVolume);
    await this.page
      .getByRole('textbox', { name: 'Project Details *' })
      .fill(data.projectDetails);
  }

  async submit(): Promise<string> {
    const dialogPromise = this.page
      .waitForEvent('dialog', { timeout: 10_000 })
      .then(async (dialog) => {
        const message = dialog.message();
        await dialog.dismiss();
        return message;
      });

    await this.page.getByRole('button', { name: 'Submit Request' }).click();

    return dialogPromise;
  }
}
