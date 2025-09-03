//for loop
//i=0 initilization
//i<10 condition
//i++ updation
for(i=0; i<10 ;i++){
 console.log(i);
 }

//for in loop 
//object created 
let obj = {
    name: "harry",
    salary: 50000,
    car: "Maruti"
}

//for in loop created to print key and value(element)


for (const key in obj)   //const key is an box storing object named obj keys in it one by one 
    {
    const element = obj[key];   //box element created to store the value of keys ex when loop first started we get obj[name] which is harry gets stored in element
        console.log(key,element) // prints it 
    }
  // alternative method to print key value pair
for( const key in obj){
    console.log(key,obj[key]);// directly write the obj[key] it will get updated with the loop   
}
//only for printing keys 
for( const key in obj){
    console.log(key);
}


//for of loop used for array and strings to iterate them to get their character or items index by index or one by one similar to for in but used especially for array and strings 
//syntax for for of  
// for (const c for "name of the string or array" ){ console.log("hhh")}
for (const c of "harry") {
    console.log(c);
}

//while loop 
let a= 0;
while(a<6){
    console.log(a);
    a++;
}


//do while runs once independent of condition
let b=8;
do{
    console.log(b);
    b++;
}while(i<8)