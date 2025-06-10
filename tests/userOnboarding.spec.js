import { test, expect } from '@playwright/test';

import { login, logout } from '../workflows/AuthWorkflow'
import { signUpMenteePage } from '../workflows/SignUpWorkflow'

import MentoringPageObjects from '../objects/MentoringPageObjects';
import LoginPageObjects from '../objects/LoginPageObjects';
import HomePageObjects from '../objects/HomePageObjects';

import { validUser } from '../utils/testData';
import { faker } from '@faker-js/faker';

test.describe('User Onboarding', () => {
  /* SIGNUP */
  test('should register successfully as a mentee with valid data', async ({ page }) => {
    const homePage = new HomePageObjects(page);

    const menteeData = {
      name: faker.person.fullName(),
      whatsAppNumber: '62' + faker.string.numeric(8),
      email: faker.internet.email(),
      linkedIn: 'https://www.linkedin.com/in/' + faker.person.firstName(),
      campus: faker.location.city() + ' University',
      roleLevel: 'freshgrad',
      roleName: 'freshgrad',
      startDate: '122020',
      password: 'testpassword123'
    }

    await signUpMenteePage(page, menteeData);
    await page.waitForURL('/?welcome=true');

    await expect(homePage.popUpWelcomeClose).toBeVisible();
    await expect(homePage.popUpWelcomeStartExploring).toBeVisible();

  });

  /* LOGIN */
  test('should show error when email is empty', async ({ page }) => {
    const loginPage = new LoginPageObjects(page);

    await login(page, '', validUser.mentee[1].password);

    await expect(loginPage.emailValidation).toBeVisible()
    await expect(loginPage.emailValidation).toHaveText(/Missing email/);
  })

  test('should show error when password is empty', async ({ page }) => {
    const loginPage = new LoginPageObjects(page);

    await login(page, validUser.mentee[1].email, '');

    await expect(loginPage.passwordValidation).toBeVisible()
    await expect(loginPage.passwordValidation).toHaveText(/Missing password/);
  })

  test('should show error when both email and password are empty', async ({ page }) => {
    const loginPage = new LoginPageObjects(page);

    await login(page, '', '');

    await expect(loginPage.passwordValidation).toBeVisible()
    await expect(loginPage.emailValidation).toBeVisible()
    await expect(loginPage.passwordValidation).toHaveText(/Missing password/);
    await expect(loginPage.emailValidation).toHaveText(/Missing email/);

  })

  test('should login successfully with valid credentials', async ({ page }) => {
    const mentoringPage = new MentoringPageObjects(page);

    await login(page, validUser.mentee[1].email, validUser.mentee[1].password)

    await expect(mentoringPage.userDropdown).toBeVisible();
    await expect(mentoringPage.loginButton).toHaveCount(0);
    await expect(mentoringPage.registerButton).toHaveCount(0);
  });

  /* LOGOUT */
  test('should logout successfully after login', async ({ page }) => {
    const mentoringPage = new MentoringPageObjects(page);

    await login(page, validUser.mentee[0].email, validUser.mentee[0].password)

    await logout(page);

    await expect(mentoringPage.userDropdown).toHaveCount(0);
    await expect(mentoringPage.loginButton).toBeVisible();
    await expect(mentoringPage.registerButton).toBeVisible();
  })
})
