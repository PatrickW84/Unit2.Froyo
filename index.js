//The user is prompted for Froyo flavors upon entering the website.
const userInputString = prompt(
  "What flavors would you like for your order? (separate flavors with a comma) ",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// The user's input string is split into an array of strings.

const stringArr = userInputString.split(",");
const stringCounts = {};

// const chooseFlavor = (string) => {
//   const Froyo = {
//     string: stringCounts,
//     strawberry: stringCounts,
//     coffee: stringCounts,
//   };

//   console.log(object.keys(Froyo));

//   console.log(object.values(Froyo));

//   function calculateNumber(flavor) {}
// };

// to do - A loop is used to iterate through the array of flavors.
for (let i = 0; i < stringArr.length; i++) {
  const str = stringArr[i];
  if (stringCounts[str]) {
    // If the string already exists in the counts object, increment its count
    stringCounts[str]++;
  } else {
    // If the string doesn't exist in the counts object, initialize its count to 1
    stringCounts[str] = 1;
  }
}
// Log the counts of each string
for (const [str, count] of Object.entries(stringCounts)) {
  console.log(`${str}: ${count}`);
}
// to do - An object is used to keep count of how many orders there are of each flavor

// to do - A table in the console lists how many of each flavor they have ordered.
console.table(stringCounts);
// The program correctly counts the number of each flavor in the user's input.

/**The logic for counting the frequencies of elements in an array is organized into a
function that returns an object. */

// Prompt => String => Array => Object => Table
