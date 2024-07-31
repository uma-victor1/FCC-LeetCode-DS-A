type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

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

/**
 * const counter = createCounter2(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
