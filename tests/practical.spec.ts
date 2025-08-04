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