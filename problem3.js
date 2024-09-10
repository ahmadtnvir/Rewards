function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Input";
  }

  let numArr = [];
  for (const element of array) {
    if (typeof element === "number" && !isNaN(element)) {
      numArr.push(element);
    }
  }
  return numArr;
}
const functionArgument = deleteInvalids([NaN, 1, 12, 0, -1, undefined, null]);
// const functionArgument = deleteInvalids( ['1',{num:2},NaN]);
// const functionArgument = deleteInvalids([1,2,-3]);
// const functionArgument = deleteInvalids({ num: [1, 2, 3] });
// const functionArgument = deleteInvalids([
//   1,
//   null,
//   undefined,
//   18,
//   -19,
//   NaN,
//   "12",
//   [1, 2],
//   { ob: "lala" },
// ]);
// const functionArgument = deleteInvalids(33);
console.log(functionArgument);
