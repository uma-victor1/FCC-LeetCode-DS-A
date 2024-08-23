// https://leetcode.com/problems/array-prototype-last/?envType=study-plan-v2&envId=30-days-of-javascript
// interface Array<T> {
//   last(): T | -1;
//   groupBy(fn: (item: T) => string): Record<string, T[]>;
// }

// Array.prototype.last = function () {
//   if (!this.length) return -1;
//   return this[this.length - 1];
// };

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

Array.prototype.groupBy = function (fn) {
  let grouped = {};
  this.forEach(
    (item, i) =>
      (grouped[fn(item)] = this.filter(
        (item) => Object.keys(item).toString() == fn(item)
      ))
  );
  // Array.from(this, )

  return grouped;
};

console.log([1, 2, 3].groupBy((it) => String(it > 2)));
