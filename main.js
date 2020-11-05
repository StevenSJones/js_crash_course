const name = "Steven";
const age = 34;
//below is a template literal but it is a variable so I placed it at the top with the other variables.
const Hello = `My name is ${name} and I am ${age} years old.`;

// concatenation. This method does not change the existing strings, but returns a new string containing the text of the joined strings.
console.log(
  "My name is " +
    name +
    " and as of October 17th of 2020 I am " +
    age +
    " years old."
);

//concatenation using the concat function. This method does not change the existing strings, but returns a new string containing the text of the joined strings.
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

//the typeof method shows the type of data that you are dealing with. Meaning string, number, boolean, null or undefined.
console.log(typeof name);
console.log(typeof age);

//template literals or template strings. This is a feature that came along with ES6. Use this and not template literals.
console.log(`My name is ${name} and I am ${age} years old`);

//   a template literal made into a variable that is then logged to the console
console.log(Hello);
