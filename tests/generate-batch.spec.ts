import { test, expect } from '@playwright/test';

test('Admin can generate a QR batch and sign out', async ({ page }) => {
  // ---- Login (direct URL) ----
  await page.goto('https://preview--beacon-link-pro.lovable.app/login');

  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.ADMIN_EMAIL ?? '');
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.ADMIN_PASSWORD ?? '');
  await page.getByRole('button', { name: /sign in/i }).click();

  // Confirm login succeeded
  const qrManagementLink = page.getByRole('link', { name: /qr management/i });
  await expect(qrManagementLink).toBeVisible({ timeout: 30_000 });

  // ---- Navigate to QR Management ----
  await qrManagementLink.click();

  // ---- Generate Batch ----
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: /lifeline tags/i }).click();

  await page.getByRole('spinbutton', { name: /number of boxes/i }).fill('1');
  await page.getByRole('button', { name: /generate batch/i }).click();

  // ---- Verify batch created (generic assertion) ----
  await expect(page.getByRole('table').first()).toContainText(/lifeline tags/i, { timeout: 30_000 });

  // ---- Sign out (open user menu first) ----
  await page.getByRole('button', { name: 'A', exact: true }).click();

  const signOut = page
    .getByRole('menuitem', { name: /sign out/i })
    .or(page.getByRole('link', { name: /sign out/i }))
    .or(page.getByRole('button', { name: /sign out/i }))
    .or(page.getByText(/sign out/i));

  await Promise.all([
    page.waitForURL(/\/login/i, { timeout: 30_000 }),
    signOut.first().click(),
  ]);

  await expect(page).toHaveURL(/\/login/i);
});
