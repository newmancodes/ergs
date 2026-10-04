import { expect, test } from '@playwright/test'

test('home page loads and counter increments', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: /get started/i })).toBeVisible()

  const counter = page.getByRole('button', { name: /count is/i })
  await expect(counter).toHaveText(/count is 0/i)
  await counter.click()
  await expect(counter).toHaveText(/count is 1/i)
})
