// We have two arrays of objects.
// all objects contain IDs
// joined array should only contain unique keys i.e no duplicate
// if two objects share an Id, merge the objects properties into single object
//If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

// sort in ascending order frist before returning

function join(arr1, arr2) {
  let joinedArray = arr1.slice();
  let arr1Keys = [];
  arr1.forEach((obj) => arr1Keys.push(obj["id"]));

  arr2.forEach((obj, i) => {
    if (arr1Keys.includes(obj["id"])) {
      console.log(arr1, "arr1");

      let arr1obj = joinedArray.filter((item) => item.id == obj.id)[0];
      // compare which object to select beween the two and what properties to select

      if (
        Object.keys(arr1obj).sort().toString() ==
        Object.keys(obj).sort().toString()
      ) {
        joinedArray.splice(
          joinedArray.findIndex((item) => item.id == obj.id),
          1,
          obj
        );
      } else {
        // If a key only exists in one object, that single key-value pair should be included in the object.
        joinedArray.push(obj);
      }
    } else {
      joinedArray.push(obj);
    }
  });

  return joinedArray;
}

join(
  [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 },
  ],
  [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 },
  ]
);
