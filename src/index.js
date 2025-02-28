// Simple math functions for testing
const calculator = require('./calculator');


// Generate a string to ensure the bundle has some size
const generateLoremIpsum = () => {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  return Array(100).fill(lorem).join(' ');
};
// ajskdfjksafjaklsdf;jklsdaf;jkljkdfkj
// Export functions
module.exports = {
  add: calculator.add,
  multiply: calculator.multiply,
  loremIpsum: generateLoremIpsum()
};
