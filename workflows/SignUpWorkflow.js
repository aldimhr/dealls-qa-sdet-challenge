import { expect } from '@playwright/test';
import SignUpPageObjects from "../objects/SignUpPageObjects";

export async function signUpMenteePage(page, data) {
  const signUpPage = new SignUpPageObjects(page);

  // redirect to signup page
  await signUpPage.goto();
  await signUpPage.signUpButtonMentee.click();

  // fill name
  await signUpPage.menteeFullName.fill(data.name)
  await signUpPage.menteeSubmitButton.click();

  // fill user background
  await signUpPage.menteeJobSeekingStatus.click();
  await signUpPage.menteeJobSeekingStatusOptions.activelyLooking.click();
  await signUpPage.menteeWhatsAppNumber.fill(data.whatsAppNumber);
  await signUpPage.menteeEmail.fill(data.email)
  await signUpPage.menteeLinkedInUrl.fill(data.linkedIn)
  await signUpPage.menteeCampus.fill(data.campus)
  await signUpPage.menteeCampus.press('Enter')
  await signUpPage.menteeExperienceLevel.click();
  await signUpPage.menteeExperienceLevelOptions.freshgrad.click();
  await signUpPage.menteeSubmitButton.click();

  // set cv
  await signUpPage.menteeSkipCV.click();
  await signUpPage.menteeSubmitButton.click();

  // set experience
  await signUpPage.menteePerusahaan.fill(data.campus);
  await signUpPage.menteePerusahaan.press('Enter');
  await signUpPage.menteeRoleLevel.fill(data.roleLevel);
  await signUpPage.menteeRoleLevel.press('Enter');
  await signUpPage.menteeRoleName.fill(data.roleName);
  await signUpPage.menteeRoleName.press('Enter');
  await signUpPage.menteeStartDate.fill(data.startDate);
  await signUpPage.menteeCheckBoxCurrentStatus.check();
  await signUpPage.menteeSubmitButton.click();

  // set specialization
  await expect(signUpPage.menteeRelevantRoleForm).toBeVisible();
  await signUpPage.menteeSubmitButton.click();

  // set password
  await signUpPage.menteePassword.fill(data.password);
  await signUpPage.menteePasswordConfirmation.fill(data.password);
  await signUpPage.menteeCheckBoxPrivacyPolicy.check();
  await signUpPage.menteeSubmitButton.click();
}

export async function signUpMentorPage(page) {
  const signUpPage = new SignUpPageObjects(page);

  await signUpPage.goto();
  await signUpPage.signUpButtonMentor.click();
}