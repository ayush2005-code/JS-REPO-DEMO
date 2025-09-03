//works once 

/*contain=prompt("enter a no.");
console.log(contain);

if(contain%2==0){
    alert("number is correct");
}
else{alert("try again");   
} */

// to make it work untill correct no. entered we use function 

function repeat(){                           //name of the function 
contain=prompt("enter a no.");               //prompt takes input from user contain is a variable to store it and to compare
console.log(contain);                      // printing contani
if(contain%2==0){
    alert("number is correct");
}
else{alert("try again");
   repeat();                             // calls function on else again and the function calls itself from start this works untill entered no. %2==0
}
}

repeat();                                  // outside bracket to call the function for once 