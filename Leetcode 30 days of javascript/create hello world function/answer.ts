/**
 * Returns a function that when called, returns the string "Hello World".
 */
function createHelloWorld(): () => string {
  return function (...args): string {
    return "Hello World";
  };
}
