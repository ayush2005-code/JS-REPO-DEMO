//(1)DOM BY CLASSNAME
let htmlclasscollection = document.getElementsByClassName("box"); // returns html collection of classes with name box 
//they can be accesed through classstore[i];
console.log(htmlclasscollection);

//(2)DOM BY ID
 let idstore=document.getElementById("newbox");
 idstore.style.backgroundColor="green";

//(3)DOM BY QUERY SELECTOR
let htmlquerycollection =  document.querySelectorAll("div")     // returns html collection of div with div
//they can be accesed through classstore[i];
console.log(htmlquerycollection);    
//accesing all the collection through for each loop 

 htmlquerycollection.forEach(arrayvalue =>{
    arrayvalue.style.backgroundColor="blue";
})


//to access particular element we use only queryselector not using all with it

let querystore= document.querySelector(".container");
querystore.style.backgroundColor="red";


//(4)DOM BY TAG NAME 

let nodelisttagcollection = document.getElementsByTagName("div"); // only show the list not work like html collection as array 



//DOM FEATURES FOR TRUE FALSE 
//(1)matches  returns true or false based on search 
nodelisttagcollection[3].matches("#newbox");
console.log(nodelisttagcollection[3].matches("#newbox"));
//retuns true 

nodelisttagcollection[2].matches("#newbox");
console.log(nodelisttagcollection[2].matches("#newbox"));
//returns false 


//(2)closest returns the element to be found which can be the element itself or its ancestor or parent 

nodelisttagcollection[2].closest("#newbox");
console.log(nodelisttagcollection[2].closest("#newbox"));
//gives null why???
//it checks nodelisttagcollection[2] which is box with BOX2 and checks itself it has that id then
//  it checks it has any parent with same id if both dont get access then returns null

nodelisttagcollection[2].closest(".container");
console.log(nodelisttagcollection[2].closest(".container"));
// returns container  
//returns container cause nodelisttagcollection[2] is BOX2 it checks itself with that id 
// when not found it goes to its parent then the class contaner matches and gets returns

//SIMILAR EXAMPLE 
nodelisttagcollection[2].closest("html");
//will return the whole html 
console.log(nodelisttagcollection[2].closest("html"));  



//(3)contains returns true or false based on
//  if one element contains another 
// for example container contains box also the same element can also contain itself so it gives true 
// else returns false

console.log(document.querySelector(".container").contains(nodelisttagcollection[0]));
//as we know the container contains itself and nodelisttagcollection[0] is itself the container thus returns

//but what if we write that container contains the <body></body> itself this is false so it will return false 
console.log(document.querySelector(".container").contains(document.body));
//need to write document.body in contains


