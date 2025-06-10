export default class MentoringPageObjects {
  constructor(page) {
    this.page = page;
    this.userDropdown = page.locator('#dropdown-area');
    this.logoutButton = page.getByRole('menuitem', { name: 'Keluar' });
    this.loginButton = page.locator('#dealls-navbar-login-btn');
    this.registerButton = page.locator('#dealls-navbar-register-btn');
  }
}