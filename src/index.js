// Simple example module: exports add and greet functions
function add(a, b) {
  return a + b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = { add, greet };

if (require.main === module) {
  // Run a small demo when executed directly
  console.log(greet('World'));
}
