// Always prefer query selectorAll (Node list) instead of get element by id or class cause of its flexibility it has directly access forEach() (Node list)
// where when we use get element by id or class we need to create using Array.from THEN WE USE foreach() (HTML Collection) 

 let element = document.querySelector(".container");
 console.log(element);
 //1)inner HTML 
 console.log("inner html shows the html inside the container having box and /n if used in the form of string ")
 console.log("element.innerHTML");
 console.log(element.innerHTML);
//2) outer HTML
console.log("outer html shows the html inside the container having box and /n if used, also returns itself like it will return container also in the form of string")

//3)inner text
console.log("inner text when used everything (except the element nodes div tag p tag etc but there content comes) comes in form of string in output") 
element.innertext;

//4)tag Name / node Name
console.log("when tag Name used it returns the name of the tag only");
console.log(element.tagName);
console.log("returns div as container is having div tag ");

console.log("when node Name used it returns the name of the node only");
console.log("A node can include various tags(elements) text attribute eventhough everything in DOM is treated as node even comment node is also there ");
console.log(element.nodeName);

