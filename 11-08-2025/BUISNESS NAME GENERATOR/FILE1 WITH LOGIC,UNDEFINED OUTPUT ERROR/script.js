//           BUISNESS NAME GENERATOR 
// USE COMBINING THE FOLLOWING ADJECTIVES,SHOP NAME,ANOTHER WORD 
// ADJECTVES ARE :-
// CRAZY 
// AMAZING
// FIRE 

// SHOP NAME:-
// ENGINE 
// FOODS
// GARMENTS

// ANOTHER WORD:-
// LIMITED
// BROS
// HUB

function first(){
    let a=Math.random();
    if(a<0.3){
        console.log(`CRAZY`);
    }   
     else if(a<0.6){
        console.log(`AMAZING`);
    }
    else{
        console.log(`FIRE`);
    }
}
function second(){
    let b=Math.random();
    if(b<0.3){
        console.log(`FOODS`);
    }   
     else if(b<0.6){
        console.log(`ENGINE`);
    }
    else{
        console.log(`GARMENTS`);
    }
}
function third(){
    let c=Math.random();
    if(c<0.3){
        console.log(`LIMITED`);
    }   
     else if(c<0.6){
        console.log(`BROS`);
    }
    else{
        console.log(`HUB`);
    }
}

 let result =first() ; let result1=second(); let result2= third();   //calling all functions
//  console.log(`${first()} ${second()} ${third()}`);
//output becomes for this is:-
// AMAZING
// GARMENTS
// HUB


// console.log(`${first()} ${second()} ${third()}`);
//output becomes for this is:-
// AMAZING
// FOODS
// HUB
// undefined undefined undefined 

// why this output lets see the reason 

// outerconsole.log(`${first()} ${second()}`) 
//WHY OUTERCONSOLE as console is outside printing fucntion and inside the crazy word etc.
// runs as first() runs prints crazy and returns undefined which gets stored as outerconsole.log(${second()} ${undefined})then 
// second function runs prints engine then returns undefined which gets stored as outerconsole.log(${undefined()} ${undefined})after
// which these two get printed so where the out put becomes CRAZY //next line due to new function engine //next line due to function udnefind undefined


//lets try it without template literals ``
// console.log(first()+second()+third()); 

//similar to the above one we get output as :-
// CRAZY
// ENGINE
// HUB
// Nan    // why ??????

// as similar to the second solution the undefined values get printed at last
//  as function gets called then undefined values get printed at last as once when all functions get called
//  but as there is an + operator in bw
// so we get undefined+undefined+undefined = Nan so gets printed at last 



// the real solution for this will be that we dont use console.log inside the function instead we use return type for function 
// this will solve 2 problems :-
//PROBLEM (1)
 // CRAZY
 // ENGINE
 // HUB

// to:-
// CRAZY ENGINE HUB 

// PROBLEM(2)
// Nan wont get Printed 
// also not The 
// undefined undefined undefined



// so solution will be:-


// function first(){
//     let a=Math.random();
//     if(a<0.3){
//         return "CRAZY";
//     }   
//     else if(a<0.6){
//         return "AMAZING";
//     }
//     else{
//         return "FIRE";
//     }
// }
// function second(){
//     let b=Math.random();
//     if(b<0.3){
//         return "FOODS";
//     }   
//      else if(b<0.6){
//         return "ENGINE";
//     }
//     else{
//         return "GARMENTS";
//     }
// }
// function third(){
//     let c=Math.random();
//     if(c<0.3){
//         return "LIMITED";
//     }   
//      else if(c<0.6){
//         return "BROS";
//     }
//     else{
//         return "HUB";
//     }
// }

// console.log(`${first()} ${second()} ${third()}`)



   


