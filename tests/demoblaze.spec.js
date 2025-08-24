// Importing functions from Playwright
const { test, expect } = require('@playwright/test');

// T1 - Verify the title of the page
test('Homepage_Title', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await expect(page).toHaveTitle(/STORE/);
});

// T2 - Click the 'Phones' category
test('Click_Phones', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.click('text=Phones');
});

// T3 - Click on the first product and locate details
test('Click_Product', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.click('text=Phones');
  await page.click('a.hrefch');
  const productDetail = page.locator('#tbodyid');
  await expect(productDetail).toBeVisible();
});

// T4 - Log In/Log Out
test('Accounts', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html')
  await page.click('id=login2')
  await page.fill('id=loginusername', 'pavanol')
  await page.fill('id=loginpassword', 'test@123')
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.click('id=logout2')
})

// T4 - Add products in cart and order
test('Products', async ({ page }) => {

  await page.goto ('https://demoblaze.com/index.html')

  await page.getByRole('link', { name: 'Monitors' }).click()
  await page.getByRole('link', { name: 'Apple monitor 24' }).click();
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.once('dialog', async dialog => {
  console.log(dialog.message());  
  await dialog.accept();
  });
  await page.goBack();
  await page.goBack();


  await page.getByRole('link', { name: 'Nexus 6' }).click();
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.once('dialog', async dialog => {
  console.log(dialog.message());  
  await dialog.accept();
  });
  await page.goBack();
  await page.goBack();

  await page.getByRole('link', { name: 'Cart'}).click();
  await page.getByRole('button', { name: 'Place Order'}).click();

  await page.fill('#name', 'Andrew Smith');
  await page.fill('#country', 'Alaska');
  await page.fill('#city', 'Alaska')
  await page.fill('#card', '4444 4444 4444 4441')
  await page.fill('#month', 'March')
  await page.fill('#year', '2027')
  await page.getByRole('button', { name: 'Purchase'}).click();
  await expect(page.getByText('Thank you for your purchase!')).toBeVisible();
});
