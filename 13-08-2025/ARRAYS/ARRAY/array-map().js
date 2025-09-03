//we want to create an new arr from paretn arr with there square 
let arr=[0,1,2,3,4,5];
let newarr=[];
for(let i=0;i<6;i++){
    console.log(arr[i]);
    newarr.push(arr[i]*arr[i]); 
}
console.log(newarr);
//to make this came in one line we use map()

// let array=[0,1,2,3,4,5];
// let newarray= array.map((value)=>{
// return value*value;
// });
// console.log(newarray);

let array=[0,1,2,3,4,5];
let newarray= array.map(value=>value*value);
console.log(newarray);



//radha-radha