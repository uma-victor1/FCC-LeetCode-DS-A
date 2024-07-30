function createHelloWorld(): () => string {
  return function (...args): string {
    return "Hello World";
  };
}
