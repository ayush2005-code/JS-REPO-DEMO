//                          FUNCTIONS 
//WHY USED???
//Used when the code becomes repetetive 
//syntax  function  function-name(parameters){//work to be done}

function functionname(parameter){
                       //
    console.log(parameter);   // to print
}
functionname("argument");

//another method PREFFERED ONE 
function functioncolor(color){
    return color;                  //has the arguments in it then called by the function("red") returning it the value red getting stored in store and gets printed through console.log(store);
}
store=functioncolor("red");  // store is an global var created and not recommened use let var const with it 
console.log(store);

function sum(a,b){
    return a+b;
}
let contain = sum(9,1);
console.log(contain);


