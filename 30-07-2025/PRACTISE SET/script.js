//                                 PRACTISE SET 3 

// (1)Write a program to print the marks  of a student in an object using for loop 
// obj={harrry : 98 , rohan:70 , aakash:7}
let obj={
    harry:98,
    rohan:70,
    aakash:7
}

console.log(obj.aakash);
console.log(obj.rohan);
console.log(obj.harry);



//(2)Write the program in Q1 using for in loop 

for (const key in obj) {
        console.log(key,obj[key])  ;
}

// this comes under fucntions


//(3)Write a program to print "try again" until the user enters the correct no.
let a= 3;
if(a%2==0){
    console.log("given no. is even");
 }
 else{
    console.log("try again")
 }

 //(4) Write a function to print the mean of 5 numbers 

function mean(b,c,d,e,f){
   return( b+c+d+e+f )/5;
 }
 let storebox = mean(4,6,5,3,2);
console.log(storebox);
//alternative way 
//first place i thought to write mean(1,2,3,4,5) then console.log(mean) but result will get calculated but wont show as return value gets calculated but as we didnt print then it wont show
 console.log(mean(1,2,3,4,5));


 //this is to understand the function printing
 /*#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

int main() {
    add(2, 3); // ❌ This does NOT show anything on screen

    cout << add(2, 3); // ✅ Now the return value is shown
}
*/



