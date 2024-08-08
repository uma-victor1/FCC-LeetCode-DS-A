// https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript

type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
  return new Promise(async (resolve) => {
    resolve((await promise1) + (await promise2));
  });
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
