# 🎭 Playwright Screenshot System for AI Development

## Why This is AMAZING for AI Agents

As an AI agent, I can't normally see the UI I'm working on - it's like coding blindfolded! This Playwright setup changes everything by letting me:

- **Actually SEE what I'm building** instead of guessing
- **Debug layout issues instantly** with real screenshots  
- **Test different UI states** (expanded sidebars, modals, etc.)
- **Verify changes work correctly** before calling it done
- **Develop WAY faster** with visual feedback

## 🚀 Quick Start

### Prerequisites
The setup is already done! Playwright is installed and configured.

### Take a Screenshot Right Now
```bash
cd frontend
node take-screenshot.js
```

That's it! You'll get:
- `app-current.png` - Current state of the app
- `app-expanded.png` - App with expanded sidebar (if possible)

### View the Screenshots
```bash
# Read the screenshots with the Read tool
```

## 📁 What's Already Set Up

### Files Created:
- `playwright.config.js` - Playwright configuration
- `take-screenshot.js` - Quick screenshot script 
- `tests/screenshot.spec.js` - Full test suite
- Screenshots saved to frontend root directory

### Dependencies Installed:
- `playwright` - Browser automation
- `@playwright/test` - Testing framework

## 🛠 How to Use as an AI Agent

### 1. Quick Visual Check
```bash
node take-screenshot.js
```
Then use the Read tool to view the generated PNG files.

### 2. Test Specific Features
Edit `take-screenshot.js` to:
- Navigate to different routes
- Click different elements  
- Test various UI states
- Take multiple screenshots

### 3. Debug Layout Issues
```javascript
// Example: Test responsive design
await page.setViewportSize({ width: 1920, height: 1080 });
await page.screenshot({ path: 'desktop.png' });

await page.setViewportSize({ width: 375, height: 667 });
await page.screenshot({ path: 'mobile.png' });
```

### 4. Compare Before/After Changes
```bash
# Before making changes
node take-screenshot.js
mv app-current.png before.png

# Make your changes to the code
# After changes
node take-screenshot.js
mv app-current.png after.png

# Now compare before.png and after.png
```

## 📚 Advanced Usage

### Custom Screenshot Script
Create your own script for specific testing:

```javascript
const { chromium } = require('playwright');

async function customTest() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Your custom test logic here
  await page.goto('http://localhost:3000/your-route');
  
  // Test specific interactions
  await page.click('your-selector');
  await page.waitForTimeout(500);
  
  await page.screenshot({ path: 'custom-test.png' });
  
  await browser.close();
}
```

### Full Test Suite
```bash
# Run all tests (includes screenshots)
npx playwright test

# Run with browser visible (for debugging)
npx playwright test --headed
```

### Screenshots in Different States
```javascript
// Test different sidebar sections
const sections = ['Agents', 'Tickets', 'Documents'];

for (const section of sections) {
  await page.click(`button[title="${section}"]`);
  await page.waitForTimeout(500);
  await page.screenshot({ path: `sidebar-${section.toLowerCase()}.png` });
}
```

## 🎯 Pro Tips for AI Agents

### 1. Always Screenshot After Major Changes
```bash
# After editing components
node take-screenshot.js
# Then read the images to verify your changes worked
```

### 2. Test Edge Cases
```javascript
// Test empty states
await page.evaluate(() => localStorage.clear());

// Test with lots of data
await page.evaluate(() => {
  // Inject test data
});

// Test error states
await page.route('**/api/**', route => route.fulfill({
  status: 500,
  body: 'Server Error'
}));
```

### 3. Document Visual Bugs
When you spot issues, take screenshots and note:
- What you expected to see
- What actually appears
- Steps to reproduce

### 4. Verify Responsive Design
```javascript
const viewports = [
  { width: 1920, height: 1080, name: 'desktop' },
  { width: 768, height: 1024, name: 'tablet' },
  { width: 375, height: 667, name: 'mobile' }
];

for (const viewport of viewports) {
  await page.setViewportSize(viewport);
  await page.screenshot({ path: `${viewport.name}.png` });
}
```

## 🏆 Success Stories

**Before Playwright**: 
- "The icons look too small" → Make random changes → "Still looks wrong"
- Endless back-and-forth guessing

**With Playwright**:
- Take screenshot → See exact issue → Make precise fix → Verify with screenshot ✅
- 10x faster development cycle!

## 🚨 Important Notes

- **Backend must be running**: Ensure `http://localhost:3001/health` responds
- **Frontend must be compiled**: Run `npx shadow-cljs compile app` first
- **Screenshots are gitignored**: They're for development, not committing
- **Headless by default**: No browser windows pop up (unless using `--headed`)

## 🔧 Troubleshooting

### "Connection refused"
```bash
# Check if backend is running
curl http://localhost:3001/health

# Start backend if needed
cd ../backend && node server.js
```

### "Page didn't load"
```bash
# Compile frontend
npx shadow-cljs compile app

# Or watch for changes
npx shadow-cljs watch app
```

### "Element not found"
Update selectors in the script - the UI might have changed.

---

**Remember**: You now have SUPERPOWERS! 🦸‍♂️ Use screenshots liberally to build amazing UIs with confidence.

*Created with ❤️ by an AI agent who got tired of coding blindfolded*