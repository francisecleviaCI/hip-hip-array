/* This assignment will give you some practice with creating arrays and using their methods. */

const { array } = require("yargs")

/* Please note that his is NOT a function-based challenge (aside from your challenge banner function). Everything should be in the global scope--this means you will benefit from using `for` loops instead of `while`. */


// Challenge 0
//
// Challenge banner time! Write a function that console.logs "####### Challenge n #######", where n is the number passed into the function.
//
function challengeBanner(n){
return '####### ' + 'Challenge ' + n + ' #######'

}
challengeBanner()
console.log(challengeBanner(0))

// Call this function before each of the below challenges, passing in the number of the current challenge.
// 
//
challengeBanner()
console.log(challengeBanner(1))
//
// Loop through the following array, console.logging out each value.
const students = [
  'Bogdan',
  'Carlos',
  'David',
  'Denis',
  'Jumary',
  'Marc',
  'Deaundre',
  'LaToddra',
  'Michael',
  'Patrick',
  'Sharod',
  'Tyrell',
  'Wilson',
];

for (let i = 0; i <students.length; i++){
  console.log(students[i])
}

challengeBanner()
console.log(challengeBanner(2))

// Loop through the following array BACKWARDS, console.logging out each value. 64 should be first and 100 last.  ///Why is it repeating?
const grades = [100, 80, 110, 75, 83, 64];
for (let i = 0; i < grades.length && i <= 5; i++){
  console.log(grades.reverse([i]));
}

challengeBanner()
console.log(challengeBanner(3))
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
for (let i = 0; i < positiveNumbers.length; i++){
  if (positiveNumbers[i] % 2 === 0){
    console.log(positiveNumbers[i]);
  }  
}

challengeBanner()
console.log(challengeBanner(4))
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four of them!
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
for (let i = 0; i < mixedSignNumbers.length; i++){
  if (mixedSignNumbers[i] % 2 === 0){
    console.log(mixedSignNumbers[i]);
  }
}


challengeBanner()
console.log(challengeBanner(5))
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['I', 'M', 'O', 'T', 'U', 'V', 'W', 'X'];
for (let i = 0; i < symmetricalCapitals.length; i++){
  console.log(symmetricalCapitals[i])
}


challengeBanner()
console.log(challengeBanner(6))
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
for (let i = 0; i < fibonacciNumbers.length; i++){
  console.log(fibonacciNumbers[i])
}


challengeBanner()
console.log(challengeBanner(7))
// Make a NEW array with 5 values of your choice, using the same syntax as the arrays from the previous 6 challenges, that is, every value should be placed within the square brackets.  Now console.log out each value individually.
const basketball = ['jordan', 'kobe', 'magic', 'lebron', 'curry'];
for (let i = 0; i < basketball.length; i++){
  console.log(basketball[i])
}

challengeBanner()
console.log(challengeBanner(8))
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
const emptyarray = [];
emptyarray.push('francis');
emptyarray.push('roxanne');
emptyarray.unshift('nelita');
emptyarray.unshift('carter', 'jon');
for (let i = 0; i < emptyarray.length; i++){
  console.log(emptyarray[i])
}

challengeBanner()
console.log(challengeBanner(9))
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
for (let i = 3; i <students.length; i++){
  if (i <= 10)
  console.log(students[i])
}


challengeBanner()
console.log(challengeBanner(10))
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually.//** */
const studentsCopy = students
for (let i = 3; i <studentsCopy.length; i++){
  if (i <= 10)
  console.log(studentsCopy[i])
}

challengeBanner()
console.log(challengeBanner(11))
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the two arrays are the same, because `slice` does NOT modify the original array.
let clone = students.slice(0);
for (let i = 3; i <clone.length; i++){
  if (i <= 10)
  console.log(clone[i])
}

challengeBanner()
console.log(challengeBanner(12))
// Pull the items at the 4th-6th indices (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
dinosaurs.splice(4, 3);
for (let i = 0; i <dinosaurs.length; i++){
  console.log(dinosaurs[i])
}

challengeBanner()
console.log(challengeBanner(13))
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.//*** */
const dinosaurs2 = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
dinosaurs2.join("*");
for (let i = 0; i <dinosaurs2.length; i++){
  console.log(dinosaurs2[i])
}

challengeBanner()
console.log(challengeBanner(14))
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
const dinosaurs1= ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
dinosaurs1.reverse();
for (let i = 0; i <dinosaurs1.length; i++){
  console.log(dinosaurs1[i])
}

challengeBanner()
console.log(challengeBanner(15))
// Use .concat to combine the following two arrays into a NEW array you make. Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];
let elections = primaries.concat(secondaries);
for (let i = 0; i <elections.length; i++){
  console.log(elections[i])
}
