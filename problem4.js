// function password(obj) {
//   const objValues = Object.values(obj);
//   const birthYearValue = objValues[1];
//   const str = birthYearValue.toFixed(0);
//   if (typeof obj !== "object") {
//     return "invalid";
//   } else if (
//     !Object.keys(obj).includes("name") ||
//     !Object.keys(obj).includes("birthYear") ||
//     !Object.keys(obj).includes("siteName")
//   ) {
//     return "key missing";
//   } else if (str.length !== 4) {
//     return "Birth Year is not valid.";
//   }
//   const siteFirstLetter = obj.siteName[0].toUpperCase();
//   const siteRemainingLetters = obj.siteName.slice(1);
//   const fullSiteName = `${siteFirstLetter}${siteRemainingLetters}`;

//   return `${fullSiteName}#${obj.name}@${obj.birthYear}`;
// }
// const passwordInfo = password({
//   name: "maisha",
//   birthYear: 2002,
// });
// // const passwordInfo = password({
// //   name: "toky",
// //   birthYear: 200,
// //   siteName: "Facebook",
// // });
// // const passwordInfo = password({
// //   name: "rahat",
// //   birthYear: 2002,
// //   siteName: "Facebook",
// // });
// // const passwordInfo = password({
// //   name: "bob",
// //   birthYear: 1999,
// //   siteName: "google",
// // });
// console.log(passwordInfo);

function password(obj) {
  // Validate input is an object
  if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
    return "Invalid";
  }

  // Validate required keys exist
  if (
    !Object.keys(obj).includes("name") ||
    !Object.keys(obj).includes("birthYear") ||
    !Object.keys(obj).includes("siteName")
  ) {
    return "Kye Missing!";
  }

  // Convert birthYear to string and validate length
  const birthYearStr = obj.birthYear.toString();
  if (birthYearStr.length !== 4) {
    return "Birth Year is not valid.";
  }

  // Capitalize the first letter of siteName
  const siteFirstLetter = obj.siteName[0].toUpperCase();
  const siteRemainingLetters = obj.siteName.slice(1);
  const fullSiteName = `${siteFirstLetter}${siteRemainingLetters}`;

  // Return the password format
  return `${fullSiteName}#${obj.name}@${obj.birthYear}`;
}

const passwordInfo = password({
  name: "bob",
  birthYear: 1999,
  siteName: "google",
});
console.log(passwordInfo);
