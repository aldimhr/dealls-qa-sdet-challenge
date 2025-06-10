import LoginPageObjects from "../objects/LoginPageObjects"
import MentoringPageObjects from "../objects/MentoringPageObjects"

export async function login(page, email, password) {
  const loginPage = new LoginPageObjects(page);

  await loginPage.goto();

  await loginPage.emailInput.fill(email);
  await loginPage.passwordInput.fill(password);
  await loginPage.loginButton.click();
}

export async function logout(page) {
  const mentoringPage = new MentoringPageObjects(page);

  await mentoringPage.userDropdown.click();
  await mentoringPage.logoutButton.click();
}
