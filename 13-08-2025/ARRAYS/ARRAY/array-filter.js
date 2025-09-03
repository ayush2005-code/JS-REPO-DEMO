let arr=[0,1,2,3,4,5,6,7,8];  // array created  
const greater_than_two = (valueofarray)=>{   // function created using arrow function 
    if(valueofarray>2){            //condition for new array elements   //if value of array > 2 than it returns true              
        return true;      // returns true when condition becomes true
   
    }
    else{
        return false;
    } 
}
console.log(arr.filter(greater_than_two)); //we use filter and insert the greater_than_two function in it
//now filter function calls the function and checkst the condition 
// after the condition is satisified and returns true the value gets printed in new array.


//the arrow function works accordingly normally it has normal parameters as in a normal function
//  but when array present than arrow function has 3 parameters in it value of arr,index of arr,arr 
//as we had arr so the valueofarr is taken 


