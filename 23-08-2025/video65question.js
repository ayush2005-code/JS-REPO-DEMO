    //WRITE A PROGRAM  TO CALCULATE FACTORIAL OF A NO. USING REDUCE  AND USING FOR LOOPS
    
    //USING REDUCE METHOD 
    let a=Number(prompt("Enter your Number"));
    let array=[];
    for(let i =1;i<=a;i++){
        array.push(i);
    }
    alert(array);
    let store=1;
     for(let j=0;j<array.length;j++){
         store=store*array[j];
    }

    alert(store);

    
    // const factorial=(accumalator,current)=>{
    //     return accumalator*current;
    // }
    
    // alert(array.reduce(factorial));

   

