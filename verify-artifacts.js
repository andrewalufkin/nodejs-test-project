const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');
const bundlePath = path.join(distPath, 'bundle.js');

console.log('Checking for artifact creation...');

if (fs.existsSync(distPath)) {
  console.log('✓ dist directory exists');
  
  if (fs.existsSync(bundlePath)) {
    const stats = fs.statSync(bundlePath);
    console.log(`✓ bundle.js exists (${stats.size} bytes)`);
    console.log('Artifact verification successful!');
    process.exit(0);
  } else {
    console.error('✗ bundle.js does not exist');
    process.exit(1);
  }
} else {
  console.error('✗ dist directory does not exist');
  process.exit(1);
}
