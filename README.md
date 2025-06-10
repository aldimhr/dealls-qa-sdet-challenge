# Dealls QA/SDET Challenge Submission


## Challenge 1: Automation Testing (Technical Skills)

### Test Strategy

#### Types of Testing Needed

__Functional Testing__ is done with the aim of ensuring that each application feature runs according to functional requirements.

__API Testing__ is done with the aim of testing API endpoints directly, without UI, to ensure correct response, performance, and security.

__UI (E2E)__ is done with the aim of testing applications from an end-user perspective (end-to-end) from UI to backend.

__Regression Testing__ is done with the aim of ensuring that new changes (features/fixes) do not break existing features that are already running.

__Negative Testing__ is done with the aim of test how the system handles incorrect input or invalid conditions.

__Boundary Testing__ is done with the aim of tests the minimum and maximum limits of allowed input.

__Cross-browser Testing__ is doen with the aim of ensures the application runs consistently across browsers (Chrome, Firefox, Safari, Edge, etc.).

__Performance Testing__ is done with the aim of tests how fast, stable, and responsive an application is when used by multiple users at once.

#### Key Areas of Focus

- Search and filters
- Authentication
- User role differences
- Rating/review system
- Mentor availability calendar
- Booking/rescheduling/canceling sessions

#### Environments

| Environment | Purpose |
|-------------|---------|
| Local       | For early testing     |
| Staging     | Full integration and realistic test data     |
| Production  | Smoke Test - Minimal, safe testing post-deployment     |

#### Assumptions

- Auth system already exists and is stable.
- Mentor data is dynamic and depends on a backend API.
- Test data can be seeded/reset for automated tests.

---

### High-Level Test Scenarios

#### User Onboarding
- Register as mentor or mentee
- Login and logout
- Forgot/reset password

#### Profile Setup
- Edit profile
- Upload profile picture
- Apply to become a mentor

#### Mentor Management (Mentor Role Only)
- Create/update mentor profile
- Add skills, bio, hourly rate
- Set and update availability calendar

#### Mentor Discovery (Mentee Side)
- Search by keyword
- Use filters (e.g., skills, rating, price)
- Handle empty result cases
- Pagination or infinite scroll of search results

#### Viewing Mentor Details
- View mentor’s public profile
- View availability calendar
- Time zone conversion for displayed slots

#### Booking a Session
- Pick available time slot
- Book a session
- Receive confirmation

#### Managing Bookings
- Cancel a booked session
- Reschedule an existing session
- Mentor responds to changes (accept/reschedule/reject)

#### Post-Session Experience
- Submit a review after session ends
- View aggregated/cumulative ratings

## Challenge 2: UI Automation (Cypress/Playwright)

### Tool Selection

- Framework: **Playwright**
- Language: **JavaScript**

---

### Automated Scenarios

**User Onboarding**
- Register as mentor or mentee
  - [x] Register as mentee with valid data

- Login and logout
  - [x] Login with empty email
  - [x] Login with empty password
  - [x] Login with empty email and password
  - [x] Login with valid credentials
  - [x] Logout after user logged in

---

### Code Structure

```
.github/
  └── workflows/
    └── playwright.yml
utils/
  └── testData.js
objects/
  └── HomePageObjects.js
  └── LoginPageObjects.js
  └── MentoringPageObjects.js
  └── SignUpPageObjects.js
workflows/
  └── AuthWorkflow.js
  └── SignUpWorkflow.js
tests/
  └── userOnboarding.spec.js
playwright.config.js

```

```
Explanation:

.github/
  GitHub-specific configurations (CI/CD workflows, templates).

utils/
  Reusable helper functions (API clients, data generators, custom assertions).

objects/
  Holds Page Object classes to abstract UI selectors and actions.

workflows/
  Contains test workflows (multi-step user journeys).

tests/
  Stores actual test scripts (test specs).

playwright.config.js
  Central configuration for Playwright (browsers, timeouts, reporters).

```



---

### How to Run Tests

```bash
# Install dependencies
pnpm install

# Playwright (GUI Mode)
pnpm exec playwright test --ui

# Playwright (Headless)
pnpm exec playwright test

# Playwright (Report)
pnpm exec playwright show-report

```

---

## Challenge 3: Exploratory Testing & Bug Investigation

## Notes
