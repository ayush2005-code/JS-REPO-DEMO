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


//THERE IS AN MAJOR CHANGE IN LOGIC WHEN WE say a<0.33 it means less than 0.33 and 
// also i write
//  else if a<0.66 it means less than 0.66 but also includes value less than 0.33 right
//so our logic was including 0.33 se less values also in else if a>0.66 
//so we use else if(a<0.66 && a>=0.33) making the values in b/w 0.33 and 0.66 


let a =Math.random();
if(a<0.33){
    first ="CRAZY";
}
else if(a<0.66 && a>=0.33){
    first ="AMAZING";
}
else{
    first ="FIRE";
}


if(a<0.33){
    second ="ENGINE";
}
else if(a<0.66 && a>=0.33){
    second ="FOOD";
}
else{
    second ="GAREMENTS";
}


if(a<0.33){
    third ="LIMITED";
}
else if(a<0.66 && a>=0.33){
    third="BROS";
}
else{
    third="HUB";
}

console.log(`${first} ${second} ${third}`);




