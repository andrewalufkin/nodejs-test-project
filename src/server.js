const express = require('express');
const calculator = require('./calculator');

const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Root endpoint - health check
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Calculator endpoint
app.post('/calculate', (req, res) => {
  const { operation, a, b } = req.body;
  
  if (!a || !b || isNaN(Number(a)) || isNaN(Number(b))) {
    return res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers' });
  }
  
  const numA = Number(a);
  const numB = Number(b);
  
  let result;
  switch (operation) {
    case 'add':
      result = calculator.add(numA, numB);
      break;
    case 'multiply':
      result = calculator.multiply(numA, numB);
      break;
    default:
      return res.status(400).json({ error: 'Operation must be "add" or "multiply"' });
  }
  
  res.json({
    operation,
    a: numA,
    b: numB,
    result
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Export for testingg