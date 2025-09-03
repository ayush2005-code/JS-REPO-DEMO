//                             PRACTISE SET 4  
//(1)What will the following  print  in Java Script ?  
// console.log("har\"".length);
console.log("har\"".length);   //   (\) this is  escape sequence character  which makes the " print in between

//(2)Explore the includes , Starts with  ends with functions of a string 

let text = "JavaScript is awesome!";
// includes() → checks if a substring exists anywhere  //used for searching purpose of word inside the string
console.log(text.includes("JavaScript")); // true JavaScript present in the string 
console.log(text.includes("Python"));     // false not present

// startsWith() → checks if the string begins with a substring   mentioned
console.log(text.startsWith("JavaScript")); // true starts with JavaScript
console.log(text.startsWith("awesome"));    // false not present

// endsWith() → checks if the string ends with a substring      mentioned 
console.log(text.endsWith("awesome!")); // true ends with awesome
console.log(text.endsWith("JavaScript")); // false not present

//(3)Write a program to convert  a given string into lower case
let abc="LETS GOO...";
console.log(abc.toLowerCase());


//(4)Extract the amount of this string 
// Please give Rs 1000
let string="Please give Rs 1000";
console.log(string.slice(15));


//(5)Try changing the 4th character of a given string  were you able to do it?
let change="AYUSH";
console.log(change.replace("S","H"));