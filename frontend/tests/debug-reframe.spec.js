const { test, expect } = require('@playwright/test');

test('Debug re-frame events manually', async ({ page, request }) => {
  console.log('🔍 Debugging re-frame events...');
  
  // Navigate to project 5
  await page.goto('http://localhost:3000/#/project/5');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  
  // Get initial state
  const initialState = await page.evaluate(() => {
    if (window.re_frame && window.re_frame.db) {
      const db = window.re_frame.db.app_db.val || {};
      return {
        hasGraph: !!db.graph,
        projectId: db['selected-project-id'],
        currentView: db['current-view']
      };
    }
    return { error: 'No re-frame' };
  });
  
  console.log('📊 Initial state:', JSON.stringify(initialState, null, 2));
  
  // Get the actual API data we should be loading
  const apiResponse = await request.get('http://localhost:3001/api/projects/5/initial-data');
  const apiData = await apiResponse.json();
  console.log(`📡 API has ${apiData.collections?.length || 0} collections, ${apiData.jobs?.length || 0} jobs`);
  
  // Manually dispatch the success event with real data
  console.log('🔄 Manually dispatching :graph/initial-data-loaded...');
  
  const manualDispatch = await page.evaluate((data) => {
    if (window.re_frame && window.re_frame.core) {
      try {
        // Dispatch the success event with API data
        window.re_frame.core.dispatch(['graph/initial-data-loaded', data]);
        return { success: true };
      } catch (e) {
        return { error: e.toString() };
      }
    }
    return { error: 'No re-frame.core' };
  }, apiData);
  
  console.log('🔄 Manual dispatch result:', JSON.stringify(manualDispatch, null, 2));
  
  // Wait and check state again
  await page.waitForTimeout(1000);
  
  const afterDispatch = await page.evaluate(() => {
    if (window.re_frame && window.re_frame.db) {
      const db = window.re_frame.db.app_db.val || {};
      return {
        hasGraph: !!db.graph,
        graphKeys: db.graph ? Object.keys(db.graph) : [],
        collections: db.graph?.collections ? Object.keys(db.graph.collections).length : 0,
        jobs: db.graph?.jobs ? Object.keys(db.graph.jobs).length : 0,
        loading: db.graph?.loading
      };
    }
    return { error: 'No re-frame db' };
  });
  
  console.log('📊 After manual dispatch:', JSON.stringify(afterDispatch, null, 2));
  
  // Check if nodes are now visible
  await page.waitForTimeout(1000);
  const nodeCount = await page.locator('.react-flow__node').count();
  console.log(`👁️ Visible nodes after dispatch: ${nodeCount}`);
  
  // Take screenshot
  await page.screenshot({ 
    path: 'tests/screenshots/after-manual-dispatch.png', 
    fullPage: true 
  });
  
  console.log('✅ Manual re-frame debugging complete!');
});