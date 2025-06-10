export default class HomePageObjects {
  constructor(page) {
    // popup welcome
    this.popUpWelcomeClose = page.locator('button[type="button"][aria-label="Close"]')
    this.popUpWelcomeStartExploring = page.getByRole('button', { name: 'Start Exploring' })
  }
}