import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('the quote request page is open', async function (this: CustomWorld) {
  await this.getQuoteRequestPage().open();
});

When(
  'I complete the quote request form with:',
  async function (this: CustomWorld, dataTable: DataTable) {
    const formData = dataTable.rowsHash();

    await this.getQuoteRequestPage().completeForm({
      firstName: formData['first name'],
      lastName: formData['last name'],
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      industry: formData.industry,
      service: formData.service,
      timeline: formData.timeline,
      monthlyVolume: formData['monthly volume'],
      projectDetails: formData['project details'],
    });
  },
);

When('I submit the quote request', async function (this: CustomWorld) {
  this.submissionMessage = await this.getQuoteRequestPage().submit();
});

Then(
  'the submission confirmation should be displayed',
  function (this: CustomWorld) {
    expect(this.submissionMessage).toBeTruthy();
  },
);
