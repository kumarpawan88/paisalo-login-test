import { test, expect, mergeExpects } from '@playwright/test';
import { isGeneratorObject } from 'util/types';

test('Load login page', async ({ page }) => {
  // 1. Navigate to the login page
  await page.goto('https://uat.paisalo.in:4016/');
  // 2. Fill in the login form
  await expect(page).toHaveTitle('Paisalo LOS')

await page.getByRole('button',{name: 'Login'}).click();
const errorMsg = page.getByText('Please fill in user name field');
await expect(errorMsg).toBeVisible();

});

test('wrong email', async ({ page }) => {
await page.goto('https://uat.paisalo.in:4016/');
await page.getByPlaceholder('example@paisalo.in').fill('qa3@pasalo.in');
await page.getByRole('button', { name: 'OTP' }).click();
const toastMessage = page.getByRole('alert').first();
await expect(toastMessage).toBeVisible();
await expect(toastMessage).toContainText('This Email Not Found');

});

test('Right email Wrong OTP Right Password', async ({ page }) => {
await page.goto('https://uat.paisalo.in:4016/');
await page.getByPlaceholder('example@paisalo.in').fill('qa3@paisalo.in');
await page.getByRole('button', { name: 'OTP' }).click();
const toastMessage = page.getByRole('alert').nth(1);
await expect(toastMessage).toBeVisible();
await expect(toastMessage).toContainText('OTP sent successfully to your email !!');
await page.getByPlaceholder('Enter OTP').fill('123654');
await page.getByPlaceholder('********').fill('Admin@123');
await page.getByRole('button', { name: 'Login' }).click();
await expect(toastMessage).toContainText('invalid otp !!!');
});

test('Right email Right OTP Wrong Password', async ({ page }) => {
await page.goto('https://uat.paisalo.in:4016/');
await page.getByPlaceholder('example@paisalo.in').fill('qa3@paisalo.in');
await page.getByRole('button', { name: 'OTP' }).click();
const toastMessage = page.getByRole('alert').nth(1);
await expect(toastMessage).toBeVisible();
await expect(toastMessage).toContainText('OTP sent successfully to your email !!');
await page.getByPlaceholder('Enter OTP').fill('123456');
await page.getByPlaceholder('********').fill('Admin@1234');
await page.getByRole('button', { name: 'Login' }).click();
const toastMessage2 = page.getByText('Credentials Not Matched !!');
await expect(toastMessage).toBeVisible();
await expect(toastMessage).toContainText('Credentials Not Matched !!');




})


test('Right email Right OTP Right Password', async ({ page }) => {
await page.goto('https://uat.paisalo.in:4016/');
await page.getByPlaceholder('example@paisalo.in').fill('qa3@paisalo.in');
await page.getByRole('button', { name: 'OTP' }).click();
const toastMessage = page.getByRole('alert').nth(1);
await expect(toastMessage).toBeVisible();
await expect(toastMessage).toContainText('OTP sent successfully to your email !!');
await page.getByPlaceholder('Enter OTP').fill('123456');
await page.getByPlaceholder('********').fill('Admin@123');
await page.getByRole('button', { name: 'Login' }).click();
await page.waitForURL('https://uat.paisalo.in:4016/branch/Dashboard');





})



