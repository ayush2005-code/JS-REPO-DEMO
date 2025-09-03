alert("This is an faulty-calculator");
function calculator(){
let first =Number(prompt("ENTER YOUR FIRST NO."));
console.log(first);

let second=Number(prompt("ENTER YOUR SECOND NO."));
console.log(second);

let operation=prompt("ENTER YOUR OPERATION TO PERFORM");
console.log(operation);
let a=Math.random();
console.log(a);
alert("thisi is math.random()"+ a);
if(a<0.1){
   if(operation== "+"){
   let addition= first-second;
    alert("RESULT"+""+addition);
    console.log(first-second);
}
else if(operation== "-"){
   let subtraction= first/second;
    alert("RESULT"+""+subtraction);
     console.log(first/second);
}
else if(operation=="*"){
  let  multiplication = first+second;
    alert("RESULT"+""+multiplication);
     console.log(first+second);
}
else if(operation== "/"){
    division= first**second;
    alert("RESULT"+""+division);
     console.log(first**second);
}
}

else{

 if(operation== "+"){
   let addition= first+second;
    alert("RESULT"+""+addition);
    console.log(first+second);
}
else if(operation== "-"){
   let subtraction= first-second;
    alert("RESULT"+""+subtraction);
     console.log(first-second);
}
else if(operation=="*"){
  let  multiplication = first*second;
    alert("RESULT"+""+multiplication);
     console.log(first*second);
}
else if(operation== "/"){
    division= first/second;
    alert("RESULT"+""+division);
     console.log(first/second);
}
else{
    alert("wrong operation");
}
}

}

let i = 0;
for(i=0;i<12;i++){
calculator();
console.log(calculator());
}


