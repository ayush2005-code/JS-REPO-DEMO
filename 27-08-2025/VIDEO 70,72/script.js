//Given 5 boxes , Assign a random color and random background to each box using DOM concepts  

//OUR FIRST STEP IS TO CREATE AN ARRAY FOR THOSE CLASS NAME box .

//S-1)CREATE AN VARIABLE FOR DOM GET STORED
let box = document.getElementsByClassName("box");
console.log(box);//this stores the html collection of class name box


//S-2)WE CANT ASSIGN COLOR TO AN COLLECTION IT IS IMPORTANT FOR US TO ASSIGN THEM COLOR ONE BY ONE 
//THIS IS DONE BY CONVERTING THE HTML COLLECTION INTO ARRAY
//TO CONVERT THEM INTO ARRAY WE USE Array.from(box);
let arraybox = Array.from(box);//html collection into array stored into a variable arraybox
console.log(arraybox); //shows the array 
//now we can access the elements of the array 

//S-3)IF WE WANT TO ACCESS ALL ELEMENTS AT ONCE WE USE name of array to be accessed .forEach(e=>{console.log(e)});
arraybox.forEach(value=>{
     value.style.backgroundColor=getRandomColor(); //this makes all element of the array one by one the assigned color but we want random color so we use the concept of rgb(x,y,z);
})

//S-4)THUS TO GENERATE A RANDOM COLOR WE CREATE AN FUNCTION RANDOMCOLOR()HAVING THREE VARIABLES IN IT EACH WILL BE ASSIGNED FOR RGB 
function getRandomColor(){
     let x = Math.floor(Math.random()*256); 
     let y= Math.floor(Math.random()*256);
     let z= Math.floor(Math.random()*256);
     return `rgb(${x},${y},${z})`       
}
//math.floor gives us integer not decimal values
//  if we write math.floor(math.random()) will give us only zero 0 
// thus rgb values shall be greater than zero 
// so we multiply by 250 or any other no. and to avoid decimal nos we use math.floor()



