const name = 'Steven';
const age = 34;

// concatenation. This method does not change the existing strings, but returns a new string containing the text of the joined strings.
console.log('My name is ' + name + ' and as of October 17th of 2020 I am ' + age + ' years old.');

//concatenation using the concat function. This method does not change the existing strings, but returns a new string containing the text of the joined strings.
function concatFunction1() {
    const str1 = 'My name is ' + name ;
    const str2 = ' and as of October 17th of 2020 I am ' + age + ' years old.';
    const res = str1.concat(str2);
    document.getElementById("concat1").innerHTML = res;
  }

  function concatFunction2() {
    const str1 = 'Hello ';
    const str2 = 'world!';
    const str3 = ' I hope Luna is going to be';
    const str4 = ' alright!';
    const res = str1.concat(str2, str3, str4);
    document.getElementById("concat2").innerHTML = res;
  }