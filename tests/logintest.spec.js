import {test , expect} from 'playwright/test'

test('Login_Success', async ({ page }) => {
    // Open the page
    await page.goto ('https://practicetestautomation.com/practice-test-login/')
    // Fill in username
    await page.fill ('#username', 'student');
    // Fill in password
    await page.fill ('#password', 'Password123');
    // Click 'submit'
    await page.click ('text=Submit');
    // Verify the link after submit
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    // Check congratulations message
    await expect(page.getByText('Congratulations student. You successfully logged in!')).toBeVisible();
    // Log out after connection
    await page.click ('text=Log out')
})

test('Login_Fail_User', async ({ page }) => {
    // Open the page
    await page.goto ('https://practicetestautomation.com/practice-test-login/')
    // Wrong input for username
    await page.fill ('#username', 'incorrectUser');
    // Correct input for password
    await page.fill ('#password', 'Password123');
    // Click 'submit'
    await page.click ('text=Submit')
    // Check if the error message appears
    await expect(page.locator('#error')).toBeVisible();
    // Check if the error message is correct
    await expect(page.locator('#error')).toHaveText('Your username is invalid!');
})

test('Login_Fail_Password', async ({ page }) => {
    // Open the page
    await page.goto ('https://practicetestautomation.com/practice-test-login/')
    // Correct input for username
    await page.fill ('#username', 'student');
    // Wrong input for password
    await page.fill ('#password', 'incorrectPassword');
    // Click 'submit'
    await page.click ('text=Submit')
    // Check if the error message appears
    await expect(page.locator('#error')).toBeVisible();
    // Check if the error message is correct
    await expect(page.locator('#error')).toHaveText('Your password is invalid!');
})