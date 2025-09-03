//Given 5 boxes , Assign a random color and random background to each box using DOM concepts  
//we are asked for random color so we use math.random();
let random = Math.random();
console.log(random); 
//returns no. b/w 0 to 1 we have 5 boxes so it can be assigned into 5 parts 0.25,50,75 greater than it 
 let box = document.getElementsByClassName("box");
if(random<0.20){
    box[0].style.backgroundColor="blue";
}
else if (random> 0.20 && random <0.40){
     box[1].style.backgroundColor="green";
}
else if (random> 0.40 && random <0.60){
     box[2].style.backgroundColor="yellow";
}
else if (random> 0.60 && random <0.80){
     box[3].style.backgroundColor="aqua";
}

else{
     box[4].style.backgroundColor="red";
     box
}