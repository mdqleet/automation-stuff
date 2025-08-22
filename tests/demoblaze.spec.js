// Importăm funcțiile principale din Playwright Test
const { test, expect } = require('@playwright/test');

// Testul 1: verificăm titlul homepage-ului
test('Homepage title should contain STORE', async ({ page }) => {
  // Navigăm către site-ul DemoBlaze
  await page.goto('https://demoblaze.com/index.html');

  // Verificăm că titlul paginii conține "STORE"
  await expect(page).toHaveTitle(/STORE/);
});

// Testul 2: dam click pe categoria phones
test('Click on the phones category', async ({ page }) => {
 //Selectam categoria
  await page.goto('https://demoblaze.com/index.html');

  await page.click('text=Phones');

  await page.waitForTimeout(10000);
});

// Testul 3: dăm click pe primul produs și verificăm detaliile
test('Click on first product should open product details', async ({ page }) => {
  // Navigăm către site-ul DemoBlaze
  await page.goto('https://demoblaze.com/index.html');

  await page.click('text=Phones');

  // Dăm click pe primul produs (selector CSS pentru link-ul produsului)
  await page.click('a.hrefch');

  // Selectăm containerul detaliilor produsului și verificăm că este vizibil
  const productDetail = page.locator('#tbodyid');
  await expect(productDetail).toBeVisible();

});
