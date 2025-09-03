//                                     STRINGS
console.log("THIS IS AN STRING TUTORIAL");
let a="harry";
//printing single char through index
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
//will show undefined as nothing present at this index
console.log(a[5]);
//to print the length of given string we use nameofstring(.)length a.length
console.log(a.length);

let myname="Harry";
let myfriend="Rohan";
console.log("My name is "+myname+" , My friend name is "+myfriend); // method 1
//Using template literals to avoid using + etc .
console.log(`My name is ${myname} , My friend name is ${myfriend} `);  // method 2    (preffered now)

//strings property and functions
let property="Ayush";
//using functions in string
console.log(property.toUpperCase());
console.log(property.toLowerCase());
console.log(property.slice(2)); //Slice function with only single index inputs starts taking from the given index like (2) is given then the printing will start from index 2  to  end . So we get ush as u stands at index 2
console.log(property.slice(1,3)); //starting index 1 included but ending index 3 not gets included in it the previous one to it gets included.
console.log(property.replace("Ay","Pi"));//1st one is inside the orginal which needs to be replaced another is 2nd which will replace it like Ay replaced by Pi
console.log(property.concat("Sugam"));// adds another string into it output will be like AyushSugam    
// also we can add another variable into it 
console.log(property.concat(property));// concat added variable  into it so output will be AyushAyush

//using property in string 
console.log(property.length);

