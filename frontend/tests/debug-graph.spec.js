const { test, expect } = require('@playwright/test');

test('Debug graph rendering', async ({ page }) => {
  console.log('🔍 Debugging graph rendering...');
  
  // Navigate to project 5
  await page.goto('http://localhost:3000/#/project/5');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);
  
  // Check console logs for errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('❌ Console error:', msg.text());
    }
  });
  
  // Check if graph data is loaded
  const reactFlowExists = await page.locator('.react-flow').count();
  console.log(`📊 React Flow container: ${reactFlowExists}`);
  
  // Check for nodes
  const nodeCount = await page.locator('.react-flow__node').count();
  console.log(`📦 Visible nodes: ${nodeCount}`);
  
  // Check for loading states
  const loading = await page.locator('text="Loading graph"').count();
  console.log(`⏳ Loading state: ${loading > 0 ? 'YES' : 'NO'}`);
  
  // Check for empty state
  const empty = await page.locator('text="No graph data available"').count();
  console.log(`📭 Empty state: ${empty > 0 ? 'YES' : 'NO'}`);
  
  // Check connection status
  const connected = await page.locator('text="Real-time connected"').count();
  console.log(`🔗 Connected: ${connected > 0 ? 'YES' : 'NO'}`);
  
  // Take a full screenshot
  await page.screenshot({ 
    path: 'tests/screenshots/debug-full-page.png', 
    fullPage: true 
  });
  
  // If no visible nodes, check the React Flow viewport
  if (nodeCount === 0) {
    console.log('🔍 Checking for offscreen nodes...');
    
    // Try to fit view
    await page.locator('.react-flow__controls-fitview').click();
    await page.waitForTimeout(500);
    
    const nodesAfterFit = await page.locator('.react-flow__node').count();
    console.log(`📦 Nodes after fit view: ${nodesAfterFit}`);
    
    await page.screenshot({ 
      path: 'tests/screenshots/debug-after-fit.png', 
      fullPage: true 
    });
  }
  
  // Check the DOM for graph data
  const graphData = await page.evaluate(() => {
    // Check if re-frame state has data
    if (window.re_frame && window.re_frame.db) {
      return {
        hasReFrameDb: true,
        dbKeys: Object.keys(window.re_frame.db.app_db.val || {})
      };
    }
    return { hasReFrameDb: false };
  });
  
  console.log('📊 Graph data state:', JSON.stringify(graphData, null, 2));
});