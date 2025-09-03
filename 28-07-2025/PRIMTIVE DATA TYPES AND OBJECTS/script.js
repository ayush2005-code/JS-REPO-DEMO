// 2 type of data types 
//(1) PRIMITIVE DATA TYPE (PRE-DEFINED DATA TYPE)
// 7 TYPES OF PRIMITVE DATA TYPES 

let x="harry bhai";
let y=22;
let z=3.55;
const p=true;
let q=undefined;
let r=null;

console.log (typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);
//string number number boolean undefined object this output 
//but r is shown as an object why this is an mistake  but cant be changed as major old codes are written on this base



//(2) OBJECTS (USER-DEFINED DATA TYPES CAN INCLUDE PRIMITIVE DATA TYPES IN IT)
let o = {                                       //this is an object containing primitive-data-types in it 
    "name": "harry",                   //   (,) necessary to use everytime
    "job code": 5600,
}
console.log(o);              //prints  {name:harry,job code:5600}


o.salary="100crores";              //    adds salary in object o 
console.log(o);                // prints  {name:'harry',job code:5600,salary:'100crores'}


o.salary="500 crores";           // changes the salary nthing else 
console.log(o);                      // prints  {name:'harry',job code:5600,salary:'500crores'}

