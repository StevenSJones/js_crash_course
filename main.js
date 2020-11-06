const name = "Steven";
const age = 34;

//1 concatenation using + . This method does not change the existing strings, but returns a new string containing the text of the joined strings.
console.log(
  "My name is " +
    name +
    " and as of October 17th of 2020 I am " +
    age +
    " years old."
);

// ===================================================
// keeping the variable with the code that it is used with in lieu of placing it atop the code.

//2 concatenation using +=. In the code below I am declaring a string with the value 'Hello' and where str += '' is a shorthand for str = str + '' THEN below that we add 'World' to the Just created 'Hello' string to create 'Hello World'. 
let str = 'Hello';
str += ' ';
str += 'World';
str; // 'Hello World'

//3 Concatenation using the Array#join() function creates a new string from concatenating all elements in an array. The first parameter to join() is called the separator. By default, the separator is a single comma ','.
['Hello', ' ', 'World'].join(''); // 'Hello World'

// You can pass in any separator you want. Separators make Array#join() the preferred choice for concatenating strings if you find yourself repeating the same character over and over again. For example, you can use ' ' as the separator to join an array of words:
['Twas', 'the', 'night', 'before', 'Christmas'].join(' ');

//4 concatenation using the concat function. This method does not change the existing strings, but returns a new string containing the text of the joined strings.
// DO NOT USE ON ARRAYS AS IT WILL CAUSE ERRORS.
function concatFunction1() {
  const str1 = "My name is " + name;
  const str2 = " and as of October 17th of 2020 I am " + age + " years old.";
  const res = str1.concat(str2);
  document.getElementById("concat1").innerHTML = res;
}

function concatFunction2() {
  const str1 = "Hello ";
  const str2 = "world!";
  const str3 = " I hope Luna is going to be";
  const str4 = " alright!";
  const res = str1.concat(str2, str3, str4);
  document.getElementById("concat2").innerHTML = res;
}


// =====================================================
// keeping the variable with the code that it is used with in lieu of placing it atop the code.
//below is a variable for a template literal 
const Hello = `My name is ${name} and I am ${age} years old.`;


//template literals or template strings. This is a feature that came along with ES6. Use this and not template literals.
console.log(`My name is ${name} and I am ${age} years old`);

//   a template literal made into a variable that is then logged to the console
console.log(Hello);

//====================================================

//the typeof method shows the type of data that you are dealing with. Meaning string, number, boolean, null or undefined.
console.log(typeof name);
console.log(typeof age);

//using the length property below
console.log(name.length);
console.log(str);
console.log(str.length);

//using the toUpperCase method below
console.log(name.toUpperCase());
console.log(str.toUpperCase());

//using the toLowerCase method below
console.log(name.toLowerCase());
console.log(str.toLowerCase());

// Using the substring method below which breaks the string in question into a substring and takes in the starting and ending point as parameters
console.log(str.substring(3,8));

// Using the substring AND toUpperCase methods below
console.log(str.substring(3,8).toLocaleUpperCase());

// Using the split method method to split a string into an array separated by letter below:
console.log(str.split(('')))

// Using the split method to split a group of strings into an array separated with a comma in between below:
const tech = 'computers, software, hardware, code';

console.log(tech.split((', ')));

//comments are shown with two // for single line comments 
/* comments that are meant to span multiple lines are shown with /* and a corresponding */

//arrays = variables that hold multiple values, they are zero based in every language so they start with 0 and proceed to 1, etc. You can manipulate arrays when they are expressed as a const variable because the data will be manipulated and not reassigned. 
const fruits = ['apples', 'oranges', 'pears', 'bananas', 'pomegranates', 'plantains', 'raspberries', 'strawberries', 'grapes', 'cherries'];

//below I am printing out a the 5th item in the array, as arrays start with 0
console.log(fruits[4]);

// I added to the end of the array and because the array is NOT reassigned but instead manipulated  
fruits[10] = 'mangoes';

console.log(fruits);

//Another way to add to the end of an array and because the array is NOT reassigned but instead manipulated  
fruits.push('papayas');

console.log(fruits);

//unshift is used to add to the beginning of an array
fruits.unshift('jackfruits');

console.log(fruits);

//pop is used to take the last item out of an array
fruits.pop();

console.log(fruits);





