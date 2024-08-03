// https://leetcode.com/problems/function-composition/submissions/?source=submission-ac
type F = (x: number) => number;

function compose(functions: F[]): F {
  // we can call the function by index()
  // loop backwards with forloop
  // get value of last index function pass to next iteration. (how to do this?)
  return function (x) {
    let state = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      state = functions[i](state);
    }
    return state;
  };
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
