let a=[0,10,20,30,40,50];

//for 
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}

//forEach
a.forEach((value,index,arr)=> {
    console.log(index,value,arr);
});

//forin  used for objects only
let obj={
    a:1,
    b:2,
    c:3
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        console.log(key,value);
    }
}


//forof only for ARRAYS
for (const value  of a) {
    console.log(value);
}
