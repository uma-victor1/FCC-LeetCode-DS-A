// https://leetcode.com/problems/sleep/?envType=study-plan-v2&envId=30-days-of-javascript
async function sleep(millis: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), millis);
  });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
