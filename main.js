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