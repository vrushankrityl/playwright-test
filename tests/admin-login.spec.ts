import { test, expect } from '@playwright/test';

test('Admin can log in successfully', async ({ page }) => {
  await page.goto('https://preview--beacon-link-pro.lovable.app/login');

  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.ADMIN_EMAIL!);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.ADMIN_PASSWORD!);
  await page.getByRole('button', { name: /sign in/i }).click();

  await expect(page.getByRole('link', { name: /qr management/i })).toBeVisible();
});






/*import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://preview--beacon-link-pro.lovable.app/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('admin@traqr.info');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Admin@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'QR Management' }).click();
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'Aura Tags (20 QR codes)' }).click();
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'LifeLine Tags (15 QR codes)' }).click();
  await page.getByRole('combobox').click();
  await page.getByText('Product PlanLifeLine Tags (15 QR codes)Number of BoxesTotal products will be:').click();
  await page.getByRole('option', { name: 'Explorer (2 QR codes)' }).click();
  await page.getByRole('spinbutton', { name: 'Number of Boxes' }).click();
  await page.getByRole('spinbutton', { name: 'Number of Boxes' }).fill('10');
  await page.getByRole('spinbutton', { name: 'Number of Boxes' }).press('Enter');
  await page.getByRole('spinbutton', { name: 'Number of Boxes' }).fill('20');
  await page.locator('div').filter({ hasText: /^Day of Month$/ }).click();
  await page.getByRole('tab', { name: 'Boxes' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export CSV' }).click();
  const download = await downloadPromise;
  await page.getByRole('tab', { name: 'Products' }).click();
  await page.getByRole('tab', { name: 'Printing' }).click();
  await page.getByRole('tab', { name: 'Products' }).click();
  await page.getByRole('row', { name: '#3 B1768584153599 KidSafe' }).getByRole('checkbox').check();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Download QR (1)' }).click();
  const page1 = await page1Promise;
  await page.getByText('BatchBoxesProductsPrintingOffersTrack').click();
  await page.getByRole('tab', { name: 'Offers' }).click();
  await page.getByRole('row', { name: 'Christmas Explorer 10% OFF 01' }).getByRole('switch').click();
  await page.getByRole('row', { name: 'Christmas Explorer 10% OFF 01' }).getByRole('switch').click();
  await page.getByRole('tab', { name: 'Track' }).click();
  await page.getByRole('textbox', { name: 'Enter Product ID or QR Code ID' }).click();
  await page.getByRole('textbox', { name: 'Enter Product ID or QR Code ID' }).click();
  await page.getByRole('textbox', { name: 'Enter Product ID or QR Code ID' }).fill('B1765291301370-P0067');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('Not Found').click();
  await page.getByRole('link', { name: 'Partner Management' }).click();
  await page.getByRole('row', { name: 'Test - Vrushank' }).getByRole('checkbox').click();
  await page.getByRole('button', { name: 'Blacklist (1)' }).click();
  await page.getByText('Error').click();
  await page.getByText('new row for relation "').click();
  await page.getByRole('tab', { name: 'Agents' }).click();
  await page.getByRole('row', { name: 'Nagbhai nagbhai@gmail.com 99' }).getByRole('checkbox').click();
  await page.getByRole('button', { name: 'Blacklist (1)' }).click();
  await page.getByRole('link', { name: 'Sales & Orders' }).click();
  await page.getByText('JanOct02468').click();
  await page.locator('.recharts-rectangle').first().click();
  await page.getByRole('link', { name: 'Box Orders' }).click();
});*/