type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

/**
 * Creates a counter object with the specified initial value.
 * The counter object allows incrementing, decrementing, and resetting the count.
 *
 * @param init - The initial value for the counter.
 * @returns A Counter object with increment, decrement, and reset methods.
 */
function createCounter2(init: number): Counter {
  let currentCount = init;
  return {
    increment: () => ++currentCount,
    decrement: () => --currentCount,
    reset: () => {
      currentCount = init;
      return currentCount;
    },
  };
}
