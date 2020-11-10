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
let str = "Hello";
str += " ";
str += "World";
str; // 'Hello World'

//3 Concatenation using the Array#join() function creates a new string from concatenating all elements in an array. The first parameter to join() is called the separator. By default, the separator is a single comma ','.
["Hello", " ", "World"].join(""); // 'Hello World'

// You can pass in any separator you want. Separators make Array#join() the preferred choice for concatenating strings if you find yourself repeating the same character over and over again. For example, you can use ' ' as the separator to join an array of words:
["Twas", "the", "night", "before", "Christmas"].join(" ");

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

//template literals or template strings. This is a feature that came along with ES6. Use this and not concatenation.
console.log(`My name is ${name} and I am ${age} years old`);

//a template literal made into a variable that is then logged to the console
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
console.log(str.substring(3, 8));

// Using the substring AND toUpperCase methods below
console.log(str.substring(3, 8).toLocaleUpperCase());

// Using the split method method to split a string into an array separated by letter below:
console.log(str.split(""));

// Using the split method to split a group of strings into an array separated with a comma in between below:
const tech = "computers, software, hardware, code";

console.log(tech.split(", "));

//comments are shown with two // for single line comments
/* comments that are meant to span multiple lines are shown with /* and a corresponding */

//=====================================================
//arrays = variables that hold multiple values, they are zero based in every language so they start with 0 and proceed to 1, etc. You can manipulate arrays when they are expressed as a const variable because the data will be manipulated and not reassigned.
const fruits = [
  "apples",
  "oranges",
  "pears",
  "bananas",
  "pomegranates",
  "plantains",
  "raspberries",
  "strawberries",
  "grapes",
  "cherries",
];

//below I am printing out a the 5th item in the array, as arrays start with 0
console.log(fruits[4]);

// I added to the end of the array and because the array is NOT reassigned but instead manipulated
fruits[10] = "mangoes";

console.log(fruits);

//Another way to add to the end of an array and because the array is NOT reassigned but instead manipulated
fruits.push("papayas");

console.log(fruits);

//unshift is used to add to the beginning of an array
fruits.unshift("jackfruits");

console.log(fruits);

//pop is used to take the last item out of an array
fruits.pop();

console.log(fruits);
//to check if something is an array use isArray method
console.log(Array.isArray(fruits));
// use the indexOf method to find the location of an item in an array (also called  the index number).
console.log(fruits.indexOf("raspberries"));

//Object literals - A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces. Object literals encapsulate data, enclosing it in a tidy package. This minimizes the use of global variables which can cause problems when combining code.

const Person = {
  FirstName: "Steven",
  LastName: "Jones",
  Age: 34,
  Hobbies: [
    "coding",
    "writing",
    "fighting",
    "hockey",
    "drawing",
    "eating",
    "gaming",
    "watching movies",
  ],
  Address: {
    Street: "1600 Main st",
    City: "Boston",
    State: "MA",
  },
};
//I used log method to print the person object to the console.
console.log(Person);

//I used log method to print specific values from the object to the console.
console.log(Person.FirstName, Person.LastName);

//I used the . operator to print out other values to the console.
console.log(Person.Hobbies[1], Person.Address.City, Person.Hobbies[5]);
//or...
console.log(Person.Address.City);
console.log(Person.Hobbies[5]);

//destructuring - Part of ES6. The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
const {
  FirstName,
  LastName,
  Address: { City },
} = Person;

console.log(FirstName, LastName, City);

//to add to the object literal you can use the dot operator as well
Person.Email = "ssjones.code@gmail.com";

console.log(Person);

//when dealing with an array of objects we can give the objects in the array an id.
const todos = [
  {
    id: 1,
    text: "drink protein",
    isCompleted: false,
  },
  {
    id: 2,
    text: "walk Penny",
    isCompleted: false,
  },
  {
    id: 3,
    text: "watch movie",
    isCompleted: false,
  },
];

//to access a specific value from a specific item in the array we use dot notation
console.log(todos[2].text);

//JSON - used to send data to a server
//JSON.stringify is a method on the JSON object (todos in the case below) that make the JSON object readable
const todoJSON = JSON.stringify(todos);
//the console log will send this to the console and it will show "Array(3)" because I have three arrays in the object above called todos.
console.log(todos);
//===========================================
//for loops:
//instead of writing what we have below which is redundant and not dry (dry is an acronym that stands for Dont Repeat Yourself)

const cars = [""];

cars[0] = "Astin Martin";
cars[1] = "porshe";
cars[2] = "Alpha Romeo";
cars[3] = "bmw";
cars[4] = "Lexus";
cars[5] = "Mercedes";
//this code changes the 4th item in the array; bmw, to uppercase ONLY in the console log
console.log(cars[3].toUpperCase());
//this code changes the 4th item in the array: cars, to uppercase in the array itself.
cars[3] = cars[3].toUpperCase();

console.log(cars);

//==============================================

//while statements
//The JavaScript while statement creates a loop that executes a block of code as long as the test condition evaluates to true . ... If the expression evaluates to true , the while statement executes the statement . If the expression evaluates to false , execution continues with the statement after the while loop.
let i = 0;
while(i < cars.length){
    console.log(`While loop cars: ${cars[i]}`);
    i++;
}

//for loop
//this loop runs for the entire length of the cars array which is better than inserting a number in the place of the length because the for loop will automatically adjust to a new length (using the array.length method) if the length changes whereas a coder would need to go back in and insert the new length any place that there is a for loop iterating over the cars array if the length changed and we had a number in the place of length.
for (i = 0; i < cars.length; i++) {
  console.log(
    JSON.stringify(cars[i]),
    Array.isArray(cars),
    cars.indexOf(cars[i]),
    typeof cars
  );
}
//using a template literal in a for loop to iterate over an array
for (let i = 0; i < cars.length; i++) {
  console.log(`For loop cars: ${cars[i]}`);
}
//===========================================

for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}
//same as this but the latter is less verbose and therefor better.
//In the for of loop the firts variable (todo in this case) could be anything BUT should be related to the array that is mentioned after the of portion of the loop (in this case our array is todos).
for(let todo of todos){
console.log(todo.text);
//no need for (todo[i].text in the above statement!)
} 

//===============================================
//high order array methods
//forEach() -I am using forEach to iterate over each item in the todos array and then print out the todo text from the todos array
todos.forEach(function(todo){
console.log(todo.text);
});





