// **Equal to (=)** is an assignment operator, which sets the variable on the left of the = to the value of the expression that is on its right. This operator assigns lvalue to rvalue.

// **Double equals (==)** is a comparison operator which transforms the operands having the same type before comparison. Meaning, when you compare string with a number JavaScript converts any string to a number. An empty string is always converted to zero. A string with no numeric value is converted to NaN (Not a Number), which returns false.

// **Triple equals (===)**  is a strict equality comparison operator in JavaScript, which returns false for the values which are not of a similar type. This operator performs type casting for equality. If we compare 2 with "2" using ===, then it will return a false value.

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
    isCompleted: true,
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
while (i < cars.length) {
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

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}
//same as this but the latter is less verbose and therefor better.
//In the for of loop the firts variable (todo in this case) could be anything BUT should be related to the array that is mentioned after the of portion of the loop (in this case our array is todos).
for (let todo of todos) {
  console.log(todo.text);
  //no need for (todo[i].text in the above statement!)
}

//===============================================
//high order array methods
//forEach() -I am using forEach to iterate over each item in the todos array and then print out the todo text from the todos array
todos.forEach(function (todo) {
  console.log(todo.text);
});

//map() - returns a new array containing what is specified. In this case it returns a new array with the name todoText that contains the todo text of the todos array
const todoText = todos.map(function (todo) {
  return todo.text;
});

console.log(todoText);

//filter method - The filter() method creates an array filled with all array elements that pass a test (provided as a function).
//with just the filter I got back the entire object of the todo that passed the test of "isCompleted".
//with the map function added on, I got back just the text as asked for where I: return todo.text.
const todoCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoCompleted);

//==================================================
//conditionals
// Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.

// There are multiple different types of conditionals in JavaScript including:

// “If” statements: where if a condition is true it is used to specify execution for a block of code.
// “Else” statements: where if the same condition is false it specifies the execution for a block of code.
// “Else if” statements: this specifies a new test if the first condition is false.
const x = 11;

if (x === 10) {
  console.log("x is equal to 10!");
} else if (x < 10) {
  console.log("x is less then 10");
} else {
  console.log("x is greater than 10");
}

//=======================================
//logical operators

//multiple conditions with the OR (||)operator
const z = 11;
const y = 10;

if (z > 5 || y < 10) {
  console.log("z is more than 5 OR y is more than 10");
}

const t = 3;
const v = 16;

if (t > 5 && v < 10) {
  console.log("t is more than 5 AND v is more than 10");
} else {
  console.log(
    "At least one of the following are not true: t is more than 5 AND v is more than 10"
  );
}

//ternary operator (?)
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.

const s = 10;

const color = s > 10 ? "red" : "blue";

console.log(color);
//=========================================
//switch statements
//The switch statement executes a block of code depending on different cases. The switch statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions. ... The switch statement is often used together with a break or a default keyword (or both).
const r = 20;

const theColor = r > 10 ? "yellow" : "black";

switch (theColor) {
  case "yellow":
    console.log("The color is yellow");
    break;
  case "black":
    console.log("The color is black");
    break;
  default:
    console.log("color is neither yellow nor black");
    break;
}

//===================================================
//functions

// A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

//this is the function expression
function addNums(num1, num2) {
  console.log(num1 + num2);
}
//function invocation (calling the function)
addNums(3, 6);
//=======

//this is the function expression with default values set in the expression
function addNums(num3 = 57, num4 = 78) {
  console.log(num3 + num4);
}
//function invocation (calling the function)
addNums();
//=======

//this is the function expression with a return (this is how it will likely be used in future instances).
function multiplyNumbers(num5, num6) {
  return num5 * num6;
}
//function invocation (calling the function) with the call in a console.log so that it can be printed to the console.
console.log(multiplyNumbers(37, 63));
//=======

//arrow function with console log in the function itself
const divideNumbers = (num7, num8) => console.log(num7 / num8);

//function invocation (calling the function)
divideNumbers(100, 5);
//=======

//arrow function with return in the function. The word return logically would go after the fat arrow but if you place it there you will get an "unwxpected token error". So no need for the return word itself.
const divide = (num9, num10) => num9 / num10;

//function invocation (calling the function) with the call in a console.log so that it can be printed to the console.
console.log(divide(100, 20));
//======

//fat arrow function with a forEach method that console.logs out my todos from the array called todo
todos.forEach((todo) => console.log(todo));
//=====================================================
//function expression
const additionOfNums = function (o, q) {
  return o + q;
};
console.log(additionOfNums(6, 3));
//the same function that is above but in arrow function form
const furtherAdditionOfNums = (n, p) => n + p;

console.log(furtherAdditionOfNums(12, 13));
//======================================================
//OOP - Object Oriented Programming

//constructor functions with prototypes
//constructors use capital letters to indicate that they are indeed a constructor
//prototypes use new as keyword
//below is a custon House constructor that creates a House object

// function House(color, floors, garage, buildDate) {
//   this.color = color;
//   this.floors = floors;
//   this.garage = garage;
  //below I created a Date object using a constructor
  // this.buildDate = new Date(buildDate);
  //below I am creating the function getBuildDate and defining what buildDate is.
  // this.getBuildDate = () => this.buildDate.getFullYear();
  //below I am defining a new method called getColorAndGarage. It is a fuunction that returns the color and garage using template strings on this ocassion.
//   this.getColorAndGarage = () => `${this.color} ${this.garage}`;
// }



//to create a prototype you type constructor.prototype.method then fat arrow and this.method.
//The below code would replace line 436 and therefor remove the function from the constructor so that the function can be used in more instances and every object created with the constructor does NOT have to include the function(so it improves modularity in your code).
// House.prototype.getBuildDate = () => this.buildDate.getFullYear();

//The below code would replace line 438
// House.prototype.getColorAndGarage = () => `${this.color} ${this.garage}`;

//constructor functions with ES6 classes
//syntactic sugar
class House {
  constructor(color, floors, garage, buildDate) {
    this.color = color;
    this.floors = floors;
    this.garage = garage;
    //below I created a Date object using a constructor
    this.buildDate = new Date(buildDate);
  }
  getBuildDate(){
    return this.buildDate.getFullYear();
  }
  getColorAndGarage() {
    return `${this.color} ${this.garage}`;
  }
}
//instantiate object
const house1 = new House("yellow", "2", "true", "5-8-1979");
const house2 = new House("pink", "1", "true", "7-19-2010");
const house3 = new House("blue", "3", "false", "10-17-1986");

//accessing the different parts of the object
console.log(house1);
console.log(house2.color);
console.log(house3.garage);
//below I use the getBuildDate method created above
console.log(house1.getBuildDate());
//below I use the getColorAndGarage method created above
console.log(house2.getColorAndGarage());