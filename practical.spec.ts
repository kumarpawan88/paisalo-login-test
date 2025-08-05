 import { test, expect } from '@playwright/test';
 test('Paisalo Login Page', async ({ page }) =>{
  // Navigate to the practical page  
 await page.goto('https://uat.paisalo.in:4016/', { waitUntil: 'load' });
 await page.locator('//input[@type="email"]').fill("Paisalo LOS")
    // Check the title of the page
    const title = await page.title();
    console.log(title);
    expect(title).toContain('Paisalo LOS');
    
    

     
});



class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

const pawan = new User('Pawan');
pawan.greet(); // Hello, Pawan!

//1. Modeling Real Entities
//You use classes to represent things like users, logins, test environments, or APIs.
//This encapsulates login logic in one place 💡
class Login {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  validate(): boolean {
    return this.email.includes('@') && this.password.length > 6;
  }
}


//2. Encapsulation of State + Behavior
//You can store data and control how it changes.
class TestTracker {
  private totalTests = 0;
  private passedTests = 0;

  recordResult(passed: boolean) {
    this.totalTests++;
    if (passed) this.passedTests++;
  }

  getSummary() {
    return `${this.passedTests}/${this.totalTests} tests passed`;
  }
}


//3. Inheritance and Reuse
//Create base test utilities and extend them:

class BaseTest {
  protected url: string;

  constructor(url: string) {
    this.url = url;
  }

  async navigate(page: any) {
    await page.goto(this.url);
  }
}

class LoginTest extends BaseTest {
  async testLogin(page: any) {
    await this.navigate(page);
    await expect(page).toHaveURL(this.url);
  }
}


//4. Organizing Complex Workflows
//Instead of scattered functions, you group related logic together:

class PlaywrightTestRunner {
  constructor(private browserType: string) {}

  async runTests() {
    console.log(`Running tests on ${this.browserType}`);
// setup and execution logic

}}


test('user can login successfully and see dashboard', async ({ page }) => {
  // Step 1: Go to login page
  await page.goto('https://your-app-url.com/login');

  // Step 2: Fill in credentials
  await page.fill('#email', 'user@example.com');
  await page.fill('#password', 'securepassword123');

  // Step 3: Submit login form
  await page.click('button[type="submit"]');

  // Step 4: Assert redirect to dashboard
  await expect(page).toHaveURL(/dashboard/);

  // Step 5: Assert welcome message is visible
  await expect(page.getByText('Welcome, Pawan')).toBeVisible();

  // Step 6: Assert auth token exists in cookies
  const cookies = await page.context().cookies();
  const authCookie = cookies.find(c => c.name === 'auth-token');
  expect(authCookie?.value).toBeDefined();
});

