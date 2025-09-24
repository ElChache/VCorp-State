const { test, expect } = require('@playwright/test');

test('Take full page screenshot of app', async ({ page }) => {
  // Navigate to the main page
  await page.goto('http://localhost:3000');
  
  // Wait for the page to load completely
  await page.waitForLoadState('networkidle');
  
  // Wait for React to render
  await page.waitForTimeout(2000);
  
  // Take a screenshot
  await page.screenshot({ 
    path: 'screenshot-full.png', 
    fullPage: true 
  });
  
  console.log('Screenshot saved as screenshot-full.png');
});

test('Test sidebar expansion', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  
  // Try to navigate to a project first
  const projects = await page.locator('text="Test VCorp Project"').count();
  if (projects > 0) {
    await page.click('text="Test VCorp Project"');
    await page.waitForTimeout(1000);
  }
  
  // Take initial screenshot
  await page.screenshot({ path: 'screenshot-initial.png' });
  
  // Click on Agents icon to expand sidebar
  await page.click('button[title="Agents"]');
  await page.waitForTimeout(500);
  
  // Take screenshot with expanded sidebar
  await page.screenshot({ path: 'screenshot-expanded.png' });
  
  console.log('Screenshots saved: screenshot-initial.png, screenshot-expanded.png');
});