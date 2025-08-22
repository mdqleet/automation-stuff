import {test , expect} from 'playwright/test'

test('Login_Success', async ({ page }) => {
    // Deschide pagina
    await page.goto ('https://practicetestautomation.com/practice-test-login/')
    // Input pentru field-ul 'username'
    await page.fill ('#username', 'student');
    // Input pentru field-ul 'password
    await page.fill ('#password', 'Password123');
    // Click 'submit'
    await page.click ('text=Submit');
    // Verifica link-ul dupa submit
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    // Verifica mesajul de felcicitari dupa connect
    await expect(page.getByText('Congratulations student. You successfully logged in!')).toBeVisible();
    // Click Log out dupa conectare
    await page.click ('text=Log out')
})

test('Login_Fail_User', async ({ page }) => {
    // Deschide pagina
    await page.goto ('https://practicetestautomation.com/practice-test-login/')
    // Input gresit pt field-ul 'username'
    await page.fill ('#username', 'incorrectUser');
    // Input corect pt field-ul 'password'
    await page.fill ('#password', 'Password123');
    // Click 'submit'
    await page.click ('text=Submit')
    // Verifica mesajul de fail (daca apare)
    await expect(page.locator('#error')).toBeVisible();
    // Verifica mesajul de fail (daca e corect)
    await expect(page.locator('#error')).toHaveText('Your username is invalid!');
})

test('Login_Fail_Password', async ({ page }) => {
    // Deschide pagina
    await page.goto ('https://practicetestautomation.com/practice-test-login/')
    // Input corect pt field-ul 'username'
    await page.fill ('#username', 'student');
    // Input gresit pt field-ul 'password'
    await page.fill ('#password', 'incorrectPassword');
    // Click 'submit'
    await page.click ('text=Submit')
    // Verifica mesajul de fail (daca apare)
    await expect(page.locator('#error')).not.toBeVisible();
    // Verifica mesajul de fail (daca e corect)
    await expect(page.locator('#error')).toHaveText('Your password is invalid!');
})