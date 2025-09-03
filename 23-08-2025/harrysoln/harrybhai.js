let userinput=Number(prompt("Type the no. for which factorial needed"));
if(userinput==0){
        alert("factorial of 0 is 1");
}
else{
alert(`inputted no. is ${userinput}`);
function factorial(parameter){
let array= Array.from(Array(parameter+1).keys()).slice(1,);
  

const factorialnew=(accumalator,current)=>{
        return accumalator*current;
     }

      let print=array.reduce(factorialnew);
     alert(print);
}
}

factorial(userinput);

    