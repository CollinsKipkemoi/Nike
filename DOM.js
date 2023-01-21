//TODO: EVENT PROPAGATION
//TODO: EVENT DELEGATION
// * Need to check it out
// !Really fast 
// ?Today maybe

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
//(i). click
let h1 = document.querySelector('button')
function change() {
    h1.style.color = 'green'
    document.querySelector('div').style.boxShadow = '0px 0px 25px white'
   
}
h1.addEventListener('click',change)

//(ii). mouseover()
let div = document.querySelector('.div')
function border() {
    div.style.border = '1px solid red'
    div.style.boxShadow = '0px 0px 50px white'
}
div.addEventListener('mouseover',border)

//(iii). click()
let btn = document.querySelector('button')
let sixth = document.querySelector('ul').lastElementChild
let btn1 = document.querySelector(".btn1")
function name() {
    sixth.style.display = 'none'
    btn1.style.display = "block"
}
btn.addEventListener('click',name)
//another example
let div3 = document.querySelector(".div3")
let btn3 = document.querySelector(".btn3")
let lrm = document.querySelector(".lrm")

function disp(e) {
    console.log(e);
    btn3.textContent = "Clicked!!"
}
btn3.addEventListener("click",disp,true)

// TODO: EVENT PROPAGATION
/**
 * Two methods:
 * *bubbling - here the events are first captured by the inner most elements then propagated to the outermost elements
 * *capturing - The events are first captured by the outermost elements then propagated to the inner elements 
 */