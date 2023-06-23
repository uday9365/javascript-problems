// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

var createCounter = function(n) {
  let integer = n;

  const increment = () => {
      integer++;
      return integer;
  };

  const decrement = () => {
      integer--;
      return integer;
  };

  const reset = () => {
      integer = n;
      return integer;
  };

  return{
      increment,
      decrement,
      reset
  }
};