const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Capture console logs
  const logs = [];
  page.on('console', msg => {
    console.log('BROWSER LOG:', msg.text());
    logs.push(msg.text());
  });
  
  await page.goto('http://localhost:3000');
  
  // Wait for projects to load
  await page.waitForTimeout(2000);
  
  // Select project 8
  try {
    await page.selectOption('select', '8');
    await page.click('button:has-text("Select Project")');
    console.log('Selected project 8');
  } catch (e) {
    console.log('Error selecting project:', e.message);
  }
  
  // Wait for graph to load
  await page.waitForTimeout(5000);
  
  // Take screenshot
  await page.screenshot({ path: 'tests/screenshots/project-selected-debug.png' });
  
  console.log('=== ALL LOGS ===');
  logs.forEach(log => console.log('LOG:', log));
  
  await browser.close();
})();