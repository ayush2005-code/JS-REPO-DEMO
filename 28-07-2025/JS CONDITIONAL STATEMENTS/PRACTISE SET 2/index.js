                                     // PRACTISE SET (2)
//(1) using logical operators to find whether the age of a person lies between 10 and 20? 
let age=15;
if(age>10 && age<20){
    console.log("person lies between 10 and 20")
}
else(
    console.log("person doesnt lies b/w 10 and 20")
)


//(2)Demonstrate the use of switch case statements in Java Script 
    //used like else if but more precisely  where switch is used and(_______) inside the bracket desired value is inserted in it
    //further case are used each having similar but different values and when they are found the case is runned if no case foud there is an default value.
switch (5) {
        case 1:
        console.log("this is case 1")
        break;
         case 2:
        console.log("this is case 2")
        break;
         case 3:
        console.log("this is case 3")
        break;
         case 4:
        console.log("this is case 4")
        break;
         case 5:
        console.log("this is case 5")
        break;

    default:
        console.log("no case found")
        break;
}


//(3)Write a Java Script progrma to find whether a number is divisible 2 and 3
let no=6;
if(no%2==0 && no%3==0){
    console.log("number is divisible 2 and 3");
}
else{
    console.log("number is not divisible 2 and 3")
}



//(4)Write a Java Script progrma to find whether a number is divisible by 2 either 3
let number=4;
if(number%2==0 || number%3==0){
    console.log("no.is divisible by either 2 or 3")
}
else{
    console.log("no. is not divisible by either 2 or 3")
}


//(5)Print "You can Drive"  or "You cannot Drive" based on age being greater than 18 using ternary operator

let AGE=21;
AGE=AGE>18 ? console.log("You can Drive") : console.log("You cannot Drive")