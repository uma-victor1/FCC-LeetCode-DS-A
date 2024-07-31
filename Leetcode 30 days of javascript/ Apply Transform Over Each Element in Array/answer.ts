function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  // declare empty array to hold transform
  let transformedArray = [];
  // after each transform push transformed value to new array
  for (let i = 0; i < arr.length; i++) {
    //@ts-ignore
    transformedArray.push(fn(arr[i], i));
  }
  // return transformed array
  return transformedArray;
}
