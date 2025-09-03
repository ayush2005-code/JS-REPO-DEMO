 var a =50;   //   can be changed in console or here
var b=15;     //  once changed can be changed again but each time value gets updated with that number

const c=50;    //cannot be changed error gets shown if tried to change 
const d=5;     //cannot be changed error gets shown if tried to change 

let e=50;    //can be changed specifically there the value gets changed globally it won't
let f=10;   //can be changed specifically there the value gets changed globally it won't

{
    let e=10;
   let f=40;                         //           (1)
    console.log(e+f);             //these all values are limited till the bracket{} afterwards the globally assigned value is used
}

console.log(e+f);                      //           (2)



// in  (1)  the value  will be 50  this is local limited
//in  (2)   the value will be 60 this is globally not limited