let arr=[1,2,4,5,7];
console.log(arr);
console.log(arr.length);
arr.pop()  // removes the last element
console.log(arr); // prints the arr after elemnts removed
arr.push("PUSH"); //adds the new element
console.log(arr); //prints the arr after elemetns are added
arr.shift(); // removes the element from 0 index 
console.log(arr); // prints the arr after 0index element removed 
arr.unshift("UNSHIFT");
console.log(arr);
delete arr[0]; //deletes the value desired at our index and writes empty in it
console.log(arr);// the value empty is undefined 



let a1=[1,2];
let a2=[3,4];
let a3=[5,6];
a1.concat(a2,a3);  //a1+a2+a3
console.log(a1); // [1,2,3,4,5,6]


let sort=[7,9,8];
sort.sort();
console.log(sort);


let removesplice=[0,1,2,3,4,5,6];   
removesplice.splice(0,2);            //selects starting index 0 and removes 2 elements including the starting index also so 0 and 1 get removed
console.log(removesplice);  // new array gets printed
let addsplice=[0,1,2,3,4,5,6];
addsplice.splice(0,1,"ADDED");      //selects starting index 0 and removes 1 elements including the starting index also so 0 gets removed and added replaces it
console.log(addsplice);  //new array gets printed



let slice=[0,1,2,3,4,5,6];
console.log(slice.slice(0,2)); //creates another array from slice using index 0 taking 2 values including starting index also so [0,1] 2 values from index 0



// let string="harry";
// string.slice(0,2);
// console.log(string.slice(0,2));//creates another string from string var using index 0 taking 2 values including starting index also so ha 2 values from index 0 of harry to index 1


slice.reverse();  // reverses the orignal array
console.log(slice);


let join=[1,2,3];
console.log(join.join(" and "));  // replace  ,  with    and  

let m =[0,1,2,3,4,5,6];
console.log(m.slice(0,4)); // starting index 0 and 4 values from it 0,1,2,3

