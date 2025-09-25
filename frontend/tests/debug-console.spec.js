const { test, expect } = require('@playwright/test');

test('Debug console errors and graph data', async ({ page }) => {
  console.log('🔍 Debugging console errors...');
  
  // Capture console errors
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
      console.log('❌ Console error:', msg.text());
    }
  });
  
  // Navigate to project 5
  await page.goto('http://localhost:3000/#/project/5');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);
  
  // Check graph data in re-frame
  const graphData = await page.evaluate(() => {
    // Access re-frame subscriptions if available
    if (window.re_frame && window.re_frame.db) {
      const db = window.re_frame.db.app_db.val || {};
      return {
        hasGraph: !!db.graph,
        collections: db.graph?.collections ? Object.keys(db.graph.collections).length : 0,
        jobs: db.graph?.jobs ? Object.keys(db.graph.jobs).length : 0,
        loading: db.graph?.loading,
        hasData: !!db.graph?.collections && !!db.graph?.jobs
      };
    }
    return { error: 'No re-frame db found' };
  });
  
  console.log('📊 Graph data:', JSON.stringify(graphData, null, 2));
  console.log('❌ Total console errors:', errors.length);
  
  // Take screenshot for debugging
  await page.screenshot({ 
    path: 'tests/screenshots/debug-console.png', 
    fullPage: true 
  });
});