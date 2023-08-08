// const TYPE_NUMBER = 'number';

function sum(a, b) {
  // First check if a and b exist (zero is an allowed value), then check their types are correct
  if ((a || a === 0)
        && (b || b === 0)
        && typeof (a) === 'number'
        && typeof (b) === 'number'
  ) {
    return a + b;
  }
  // If there's anything wrong with the input data, return false
  return false;
}

module.exports = sum;
