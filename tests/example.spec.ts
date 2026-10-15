import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://astroflow.wingflows.com/');
  await page.getByRole('link', { name: 'Request Quote' }).nth(1).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('bladimir');
  await page.getByRole('textbox', { name: 'First Name *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('doumerc');
  await page.getByRole('textbox', { name: 'Email Address *' }).click();
  await page.getByRole('textbox', { name: 'Email Address *' }).fill('mail');
  await page.getByRole('textbox', { name: 'Email Address *' }).press('Alt+@');
  await page.getByRole('textbox', { name: 'Email Address *' }).fill('mail@mail.com');
  await page.getByRole('textbox', { name: 'Phone Number *' }).click();
  await page.getByRole('textbox', { name: 'Phone Number *' }).fill('5555555555');
  await page.getByRole('textbox', { name: 'Company Name *' }).click();
  await page.getByRole('textbox', { name: 'Company Name *' }).fill('company');
  await page.getByLabel('Industry *').selectOption('ecommerce');
  await page.getByRole('checkbox', { name: 'Warehousing & Storage' }).click();
  await page.getByLabel('Timeline *').selectOption('immediate');
  await page.getByRole('textbox', { name: 'Estimated Monthly Volume' }).click();
  await page.getByRole('textbox', { name: 'Estimated Monthly Volume' }).fill('10000');
  await page.getByRole('textbox', { name: 'Project Details *' }).click();
  await page.getByRole('textbox', { name: 'Project Details *' }).fill('for testing purposes');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Submit Request' }).click();
});
