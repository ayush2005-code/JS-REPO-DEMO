//                                     (PRACTISE SET 1)
// (1)CREATE A VARIABLE OF TYPE STRING AND TRY TO ADD A NUMBER TO IT.
var a="practise";
var b=10;
//adding a+b we got practise10;

//(2) use type of operator to find the data type of the string in the last question

console.log(typeof a);
//we got output string



//(3) create a const object in java script can u change it to hold a number later ?
const obj={
    name:"ayush",
    "job code":5600,
}
console.log(obj);

obj.name = 25;               //this is changing the property in obj from string to number 
console.log(obj);        // this is the output {name: 25, job code: 5600} but this is not what asked only name changed

//the obj is holding multiple primitve data types we were asked to make the obj hold a no. instead of it which is not possible


//(4)try to add a new key to the const obj in problem 3 were u able to do it 

obj.salary="600crore";
console.log(obj);         // output {name: 25, job code: 5600, salary: '600crore'}




//(5) write a js program to create a word-meaning dictionary of 5 words 

var deforestation="cutting of trees at large scale";
var afforestation="planting of treees at large scale";
var condensation="conversion of vapour into liquid";
var evaporation="conversion of liquid into vapour";
var watercycle="cycle formed through evaporation and condensation";


//another method can be

const dictionary = {
  deforestation: "cutting of trees at large scale",
  afforestation: "planting of trees at large scale",
  condensation: "conversion of vapour into liquid",
  evaporation: "conversion of liquid into vapour",
  watercycle: "cycle formed through evaporation and condensation"
};

console.log(dictionary);
console.log("Meaning of evaporation:", dictionary.evaporation);  //tells us specifically about the evaporation dictionary mai jao or evaporation k andar jo hai likho 
// meaning of evaporation sirf print hoyega 





