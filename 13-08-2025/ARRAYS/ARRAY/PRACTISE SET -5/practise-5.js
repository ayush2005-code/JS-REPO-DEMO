    // PRACTISE SET -5 
    //(1)CREATE AN ARRAY OF NUMBERS AND TAKE INPUT FROM THE USER TO ADD NUMBERS TO THIS ARRAY
    // let array=[0,1,2,3,4,5];
    // function arrayfunction(){
    // let primary=Number(prompt("NO. OF TIMES YOU WANT TO ADD ELEMENTS IN ARRAY"));
    // for(let i =0;i<primary;i++){
    // let first=Number(prompt("WRITE THE NO. YOU WANT TO INSERT INTO THE ARRAY GREATER THAN 5"));
    // console.log(first);
    // if(first>5){
    // array.push(first);
    // console.log(array);}
    // else{
    //     alert(`Wrong Input ${first}`);
    //     console.log("wrong input");
    //     i--;    
    // };};};
// arrayfunction();



// (2) KEEP ADDING ARRAY UNTILL 0 IS ADDED IN IT (1)
//LOGIC FOR IT WILL BE
//FIRST==0 THEN LOOP BREAK; 


//(3) FILTER FOR  NUMBERS  DIVISIBLE  BY 10 FROM A GIVEN ARRAY
// let arr=[0,5,10,20,25,30,35,40,45,50];
// const gate = ( (value)=>{
//     if(value%10==0){
//         return true;
//     }
//     return false;
// } 
// );
// console.log(arr.filter(gate));


//(4)CREATE AN ARRAY OF SQUARE OF GIVEN NUMBERS 
//   let newarr=[0,1,2,3,4,5];
//   const contain=((value)=>{
//     return value*value;
//   });
//   console.log(newarr.map(contain));


  //(5)Use reduce to calculate factorial of a given number,from an array of first n natural numbers.
   let a=6;
   let arr=[]
   for(let i=1;i<=a;i++){
         arr.push(i);
   }
   console.log(arr);  

  const factorial=((accumalator,currentvalue)=>{
             return accumalator*currentvalue;
  });

  console.log(arr.reduce(factorial));

 



