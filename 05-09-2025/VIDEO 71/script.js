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


//5)hidden property
     // element.hidden="true"; hides the div container and its content with it 






     //similarly we can change inner html of an element so we can change it using 

     let node = document.querySelector(".box");
     node.innerHTML="the content is changed";

     //thus the content gets changed in first box


//(*)  ATTRIBUTE-METHODS
  // to check whether the following element has require attribute we use the:- 
  //(1)hasAttribute(name)
  node.hasAttribute("style");
  //returns false 

  //if div.box style:display:"flex";
  // then we use node.hasAttribute("style");
  //it will return true; as it is present 

  //(2)getAttribute(name)
  //tells us about the attribute and its content in it
  node.getAttribute("style");
  //returns the content inside it for eg:-
  //if div.box style:display:"flex"; then 
  //node.getAttribute("style"); returns 
  // display:"flex";

  //(3)setAttribute(name,value)
  //if we dont like any attribute content we can replace it 
  node.setAttribute("style","display:inline");
  //dynamically the style attribute display property gets replaced by inline 
  //it works as check for the first box having style attribute and replace
  //its display:flex property by inline property;

  //(4)removeAttribute(name)
  //removes the attribute from the given element 

  //(5)element.attributes
  //gets us collection of attributes present on a element 



  //(*)data --> attribute 
  //we can create our own attribute by using data-nameofattribute
  //for which we need to use keyword "data-"
  //this gets stored in dataset and can be accessed 
  //using element.dataset all these attributes are stored in key value pairs like objects 
  node.dataset
  //returns DOMStringMap {createdby: 'ayush'} createdby is key and value is ayush 
