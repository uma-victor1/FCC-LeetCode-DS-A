function memoize(
  fn: (...params: number[]) => number
): (...params: number[]) => number {
  let called = true;
  let val;
  let argts;
  let exist = {};
  return function (...args) {
    if (called && argts?.toString() !== args.toString()) {
      argts = args;
      called = false;
      val = fn(...args);
      exist[args.toString()] = val;
      return val;
    }
    if (argts.toString() == args.toString()) {
      called = true;
      return val;
    } else {
      if (exist[args.toString()]) {
        return exist[args.toString()];
      }
      argts = args;
      called = false;
      val = fn(...args);
      exist[args.toString()] = val;
      return val;
    }
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
