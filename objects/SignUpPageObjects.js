export default class SignUpPageObjects {
  constructor(page) {
    this.page = page;

    this.signUpButtonMentee = page.locator('a[href="/onboarding?step=1"]');
    this.signUpButtonMentor = page.locator('a[href="/mentor/onboarding?step=1"]');

    /* MENTEE SIGN-UP OBJECTS */

    // common
    this.menteeSubmitButton = page.locator('button[type="submit"]');

    // name
    this.menteeFullName = page.locator('#fullName');

    // background
    // this.menteeJobSeekingStatus = page.locator('input#jobSearchStatus');
    this.menteeJobSeekingStatus = page.locator('div.ant-form-item').filter({ hasText: 'Job Seeking Status' });
    this.menteeJobSeekingStatusOptions = {
      activelyLooking: page.locator('div[name="Actively looking for the next 3 months "]'),
      hired: page.locator('div[name="Hired, but open for opportunities"]'),
      notOpen: page.locator('div[name="Not open for opportunities"]'),
    }
    this.menteeWhatsAppNumber = page.locator('input#whatsapp');
    this.menteeEmail = page.locator('input#email');
    this.menteeLinkedInUrl = page.locator('input#linkedInUrl');
    this.menteeCampus = page.locator('input#campus');
    this.menteeExperienceLevel = page.locator('input#eligibility');
    this.menteeExperienceLevelOptions = {
      freshgrad: page.locator('div[title="Freshgrad"]')
    }

    // cv
    this.menteeSkipCV = page.getByRole('button', { name: /Skip for now, my CV is not ready/i });
    this.menteeUploadCV = page.getByRole('button', { name: /Upload your CV in PDF/i });

    // current and past experience
    this.menteePerusahaan = page.locator('input#companyName');
    this.menteeRoleLevel = page.locator('input#roleLevel');
    this.menteeRoleName = page.locator('input#roleName');
    this.menteeStartDate = page.locator('input#startDate');
    this.menteeEndDate = page.locator('input#endDate');
    this.menteeCheckBoxCurrentStatus = page.locator('input[type="checkbox"]');

    // specialization
    this.menteeRelevantRoleForm = page.locator('form#relevant-role-form');
    this.menteeSpecialization = page.locator('input[id^="rc_select_"]');
    this.menteeSpecializationOptions = {
      it: page.locator('div[title="IT & Engineering"]')
    }
    this.menteeRelevantRoleOptions = {
      fullStackDev: page.locator('label:has-text("Full-Stack Developer") input[type="checkbox"]'),
    }

    // password
    this.menteePassword = page.locator('input#password')
    this.menteePasswordConfirmation = page.locator('input#passwordConfirmation')
    this.menteeCheckBoxPrivacyPolicy = page.locator('input#checkPrivacyPolicy')
  }

  async goto() {
    await this.page.goto('/sign-up')
  }
}