type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

/**
 * Returns an object with two methods, 'toBe' and 'notToBe', that compare the input value with another value.
 * If the input value is equal to the other value, 'toBe' returns true; otherwise, it throws an error.
 * If the input value is not equal to the other value, 'notToBe' returns true; otherwise, it throws an error.
 *
 * @param val The value to be compared with another value
 * @returns An object with 'toBe' and 'notToBe' methods for comparison
 */
function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (anotherVal: any): any => {
      if (val === anotherVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (anotherVal: any): any => {
      if (val !== anotherVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
