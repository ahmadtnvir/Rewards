function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid";
  }

  const lastLetter = name[name.length - 1];
  const alphabets = ["A", "y", "i", "e", "o", "u", "w"];
  // const alphabets = "Ayieouw";

  if (
    alphabets.includes(lastLetter.toLowerCase()) ||
    alphabets.includes(lastLetter.toUpperCase())
  ) {
    return "Good Name!";
  }
  return "Bad Name!";
}
// const selectName = checkName("RAFEE");
const selectName = checkName("Salman");
// const selectName = checkName("Jhankar");
// const selectName = checkName(199);
// const selectName = checkName(['Rashed']);
// const selectName = checkName("Rasheda");
console.log(selectName);
