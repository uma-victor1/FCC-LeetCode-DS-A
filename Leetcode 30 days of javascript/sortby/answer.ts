// https://leetcode.com/problems/sort-by/?envType=study-plan-v2&envId=30-days-of-javascript
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number;

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
  return [...arr].sort((a, b) => fn(a) - fn(b));
}
