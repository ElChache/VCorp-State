const { test, expect } = require('@playwright/test');

test('Debug complete data flow from API to re-frame', async ({ page, request }) => {
  console.log('🔍 Debugging complete data flow...');
  
  // Step 1: Test backend API directly
  console.log('\n📡 Step 1: Testing backend API...');
  const apiResponse = await request.get('http://localhost:3001/api/projects/5/initial-data');
  const apiData = await apiResponse.json();
  
  console.log(`📡 API Response status: ${apiResponse.status()}`);
  console.log(`📊 API Data - Collections: ${apiData.collections?.length || 0}, Jobs: ${apiData.jobs?.length || 0}`);
  
  if (apiResponse.status() !== 200) {
    console.log('❌ API endpoint not working!');
    return;
  }
  
  // Step 2: Check frontend navigation and initial load
  console.log('\n🌐 Step 2: Loading frontend...');
  
  // Capture network requests
  const requests = [];
  page.on('request', req => {
    if (req.url().includes('initial-data')) {
      console.log(`📥 Frontend making request: ${req.method()} ${req.url()}`);
      requests.push(req);
    }
  });
  
  // Capture responses  
  page.on('response', resp => {
    if (resp.url().includes('initial-data')) {
      console.log(`📤 Response: ${resp.status()} ${resp.url()}`);
    }
  });
  
  // Capture console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log(`❌ Console error: ${msg.text()}`);
    }
  });
  
  // Navigate to project 5
  await page.goto('http://localhost:3000/#/project/5');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);
  
  console.log(`📥 Frontend API requests made: ${requests.length}`);
  
  // Step 3: Check re-frame state
  console.log('\n🔍 Step 3: Checking re-frame state...');
  
  const reframeState = await page.evaluate(() => {
    if (window.re_frame && window.re_frame.db) {
      const db = window.re_frame.db.app_db.val || {};
      return {
        hasReFrameDb: true,
        hasGraph: !!db.graph,
        graphKeys: db.graph ? Object.keys(db.graph) : [],
        collections: db.graph?.collections ? Object.keys(db.graph.collections).length : 0,
        jobs: db.graph?.jobs ? Object.keys(db.graph.jobs).length : 0,
        loading: db.graph?.loading,
        selectedProjectId: db['selected-project-id'],
        currentView: db['current-view'],
        fullDb: db
      };
    }
    return { hasReFrameDb: false };
  });
  
  console.log('📊 re-frame state:', JSON.stringify(reframeState, null, 2));
  
  // Step 4: Check if the project view component mounted properly
  console.log('\n🏗️ Step 4: Checking component mounting...');
  
  const componentState = await page.evaluate(() => {
    // Check if project-main component is mounted
    const projectMain = document.querySelector('.main-section') || document.querySelector('[class*="project"]');
    const graphComponent = document.querySelector('.react-flow');
    const connectionStatus = document.querySelector('[title*="Real-time"]') || document.querySelector('text*="connected"');
    
    return {
      hasProjectMain: !!projectMain,
      hasGraphComponent: !!graphComponent, 
      hasConnectionStatus: !!connectionStatus,
      url: window.location.href,
      hash: window.location.hash
    };
  });
  
  console.log('🏗️ Component state:', JSON.stringify(componentState, null, 2));
  
  // Step 5: Manual trigger of data loading
  console.log('\n🔄 Step 5: Manually triggering data load...');
  
  const manualLoad = await page.evaluate(() => {
    if (window.re_frame && window.re_frame.core) {
      try {
        // Try to manually dispatch the load event
        window.re_frame.core.dispatch(['graph/load-initial-data', 5]);
        return { dispatched: true };
      } catch (e) {
        return { error: e.toString() };
      }
    }
    return { noReFrame: true };
  });
  
  console.log('🔄 Manual load result:', JSON.stringify(manualLoad, null, 2));
  
  // Wait a bit more and check again
  await page.waitForTimeout(2000);
  
  const finalState = await page.evaluate(() => {
    if (window.re_frame && window.re_frame.db) {
      const db = window.re_frame.db.app_db.val || {};
      return {
        collections: db.graph?.collections ? Object.keys(db.graph.collections).length : 0,
        jobs: db.graph?.jobs ? Object.keys(db.graph.jobs).length : 0,
        loading: db.graph?.loading
      };
    }
    return {};
  });
  
  console.log('📊 Final state after manual trigger:', JSON.stringify(finalState, null, 2));
  
  // Take screenshot for debugging
  await page.screenshot({ 
    path: 'tests/screenshots/debug-data-flow.png', 
    fullPage: true 
  });
  
  console.log('✅ Debug complete! Check the logs above for issues.');
});