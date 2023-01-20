console.clear()
let ul = document.querySelector('ul')
console.log(ul.parentElement);
console.log(ul.parentNode);

//To get to the parent element we use 
/**
 * .parentElement
 * .parentNode
 * .parentNode.parentNode - grand parent
 */
console.log(document.documentElement); //logs to the console the root of the document
console.log(ul.childNodes[1])//this returns even text nodes and comment nodes
console.log(ul.firstElementChild);
/*
Those that return even text nodes and comments:

childNodes
firstChild
lastChild
nextSibling
previousSibling

Those that don't return text nodes and comments:

children
firstElementChild
lastElementChild
nextElementSibling
previousElementSibling
*/

//EVENT LISTENERS
