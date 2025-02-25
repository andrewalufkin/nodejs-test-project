const fs = require('fs');
const path = require('path');
const http = require('http');

const distPath = path.join(__dirname, 'dist');
const bundlePath = path.join(distPath, 'bundle.js');

console.log('Checking for artifact creation...');

// Check for dist directory and bundle.js
if (fs.existsSync(distPath)) {
  console.log('✓ dist directory exists');
  
  if (fs.existsSync(bundlePath)) {
    const stats = fs.statSync(bundlePath);
    console.log(`✓ bundle.js exists (${stats.size} bytes)`);
  } else {
    console.error('✗ bundle.js does not exist');
    process.exit(1);
  }
} else {
  console.error('✗ dist directory does not exist');
  process.exit(1);
}

// Check if server is running
const PORT = process.env.PORT || 3000;
const options = {
  hostname: 'localhost',
  port: PORT,
  path: '/',
  method: 'GET',
  timeout: 5000
};

console.log(`Checking if server is running on port ${PORT}...`);

const req = http.request(options, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    try {
      const response = JSON.parse(data);
      
      if (res.statusCode === 200 && response.status === 'ok') {
        console.log('✓ Server is running');
        console.log(`✓ Response: ${JSON.stringify(response)}`);
        console.log('Artifact verification successful!');
        process.exit(0);
      } else {
        console.error('✗ Server returned unexpected response');
        process.exit(1);
      }
    } catch (error) {
      console.error('✗ Error parsing server response:', error.message);
      process.exit(1);
    }
  });
});

req.on('error', (error) => {
  console.error(`✗ Server check failed: ${error.message}`);
  console.error('Make sure the server is running with "npm start"');
  process.exit(1);
});

req.on('timeout', () => {
  console.error('✗ Server check timed out');
  req.destroy();
  process.exit(1);
});

req.end();