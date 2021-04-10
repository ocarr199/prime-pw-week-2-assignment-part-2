// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// declare a variable "name" and set it equal to "Dane"
// check if name is equal to mary. Dane is not equal to mary so
// console.log "How do you do?"
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// declare variable "secret"
// declare variable code and set equal to 123
// check if code equals 123, if so set secret equal to "super" and set code equal
to code*2
// check if code is greater than 250, if so set secret equal to "duper"
// console.log secret


//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//declare variable isStudent and set equal to true. declare variable age and
// set equal to 34. declare variable zip and set equal to 55407
//check if isStudent is true and if zip is less than 80000, if so console log
// "You're a student on the west coast!" if not move on to next conditionals
// check if isStudent is false or age is less than 30 if so console.log
// "What are your hobbies?" if not move on to next conditional
// check if isStudent is true if so console.log "Welcome to Prime!" if not
// console log "How About the weather?"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}

FIX colorOne is set to red but the instructions say set it to blue,
colorTwo is set to red but the instructions say set it to red. The instructions
say set both colorOne and colorTwo two purple but only colorOne is.

let colorOne = 'blue';
let colorTwo = 'red';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple'
}

*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}

FIX the directions say "check if temp is higher than 39 and if time is greater
 or equal to  4" but the code checks if temp is higher than 39 OR if time
 is greater than or equal to 4 || should be replaced with &&

 let temp = 40;
 const time = 4;

 if (temp > 39 && time >= 4) {
   console.log('throw away the food!');
 }
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}


FIX the instructions say to check if age is greater than or equal to minAge and
if so allow entry but the code says to console log "no entry" in that case


let age = 21;
const minAge = 21;

if(minAge <= age) {
console.log('enter');
} else {
  console.log('no entry');
}
*/
