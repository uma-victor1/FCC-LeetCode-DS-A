/**
 * Returns a function that when called, increments and returns the initial number provided.
 */
function createCounter(n: number): () => number {
  return function () {
    return n++;
  };
}
