//     BUISNESS NAME GENERATOR
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

// after this code runs we get the desired output but with small errors which are we get the output as
// FIRE
// GARMENTS
// BROS 
// undefined undefined undefined




function first(){
    let a=Math.random();
    if(a<0.3){
        return "CRAZY";
    }   
    else if(a<0.6){
        return "AMAZING";
    }
    else{
        return "FIRE";
    }
}
function second(){
    let b=Math.random();
    if(b<0.3){
        return "FOODS";
    }   
     else if(b<0.6){
        return "ENGINE";
    }
    else{
        return "GARMENTS";
    }
}
function third(){
    let c=Math.random();
    if(c<0.3){
        return "LIMITED";
    }   
     else if(c<0.6){
        return "BROS";
    }
    else{
        return "HUB";
    }
}


console.log(`${first()} ${second()} ${third()}`);

console.log(first()+" "+second()+" "+third());



   