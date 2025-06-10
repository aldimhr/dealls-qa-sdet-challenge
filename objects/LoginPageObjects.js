export default class LoginPageObjects {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#basic_email');
    this.passwordInput = page.locator('#basic_password');
    this.loginButton = page.locator('button[type=submit]');
    this.emailValidation = page.locator('#basic_email_help .ant-form-item-explain-error');
    this.passwordValidation = page.locator('#basic_password_help .ant-form-item-explain-error');
  }

  async goto() {
    await this.page.goto('/sign-in');
  }
}