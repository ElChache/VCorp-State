const { test, expect } = require('@playwright/test');

test('Test real-time graph functionality', async ({ page }) => {
  console.log('🧪 Testing real-time graph with project 5...');
  
  // Navigate directly to project 5
  await page.goto('http://localhost:3000/#/project/5');
  
  // Wait for the page to load and WebSocket to connect
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000); // Give time for ClojureScript to initialize
  
  // Check if the graph component is present
  const graphComponent = await page.locator('.react-flow').count();
  console.log(`📊 React Flow component found: ${graphComponent > 0 ? 'YES' : 'NO'}`);
  
  // Check for WebSocket connection indicator
  const connectionStatus = await page.locator('text="Real-time connected"').count();
  console.log(`🔗 WebSocket connected: ${connectionStatus > 0 ? 'YES' : 'NO'}`);
  
  // Check for graph nodes
  const nodes = await page.locator('.react-flow__node').count();
  console.log(`📦 Graph nodes found: ${nodes}`);
  
  // Check for graph edges  
  const edges = await page.locator('.react-flow__edge').count();
  console.log(`🔗 Graph edges found: ${edges}`);
  
  // Take screenshot of the graph
  await page.screenshot({ 
    path: 'tests/screenshots/screenshot-graph.png', 
    fullPage: true 
  });
  
  console.log('📸 Graph screenshot saved as screenshot-graph.png');
  
  // If we have nodes, try clicking one
  if (nodes > 0) {
    await page.locator('.react-flow__node').first().click();
    await page.waitForTimeout(1000);
    
    // Check if modal opened
    const modals = await page.locator('[role="dialog"]').count();
    console.log(`🪟 Modal opened on node click: ${modals > 0 ? 'YES' : 'NO'}`);
  }
  
  // Basic assertions
  expect(graphComponent).toBeGreaterThan(0);
  console.log('✅ Real-time graph test completed!');
});

test('Test WebSocket real-time updates', async ({ page, request }) => {
  console.log('🔄 Testing WebSocket real-time updates...');
  
  // Navigate to project 5
  await page.goto('http://localhost:3000/#/project/5');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  
  // Trigger a test event via API
  console.log('📡 Sending test event...');
  const response = await request.post('http://localhost:3001/api/test/emit-event', {
    data: {
      projectId: 5,
      eventData: {
        type: 'document_status_changed',
        document_id: 1,
        new_status: 'done',
        old_status: 'in_progress'
      }
    }
  });
  
  console.log(`📡 Test event response: ${response.status()}`);
  
  // Wait for real-time update
  await page.waitForTimeout(1000);
  
  // Take another screenshot to compare
  await page.screenshot({ 
    path: 'tests/screenshots/screenshot-after-update.png', 
    fullPage: true 
  });
  
  console.log('📸 Post-update screenshot saved');
  console.log('✅ WebSocket real-time update test completed!');
});