const name = 'Steven';
const age = 34;

// concatenation. This method does not change the existing strings, but returns a new string containing the text of the joined strings.
console.log('My name is ' + name + ' and as of October 17th of 2020 I am ' + age + ' years old.');

//concatenation using the concat function. This method does not change the existing strings, but returns a new string containing the text of the joined strings.
function concatFunction() {
    var str1 = 'My name is ' + name ;
    var str2 = ' and as of October 17th of 2020 I am ' + age + ' years old.';
    var res = str1.concat(str2);
    document.getElementById("demo").innerHTML = res;
  }
