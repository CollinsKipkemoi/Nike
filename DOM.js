let lItem = document.querySelectorAll("li")
for(i=0;i<lItem.length;i++){

    lItem[i].style.color = 'green'
    /*
        - This type of styling is inline and cannot be applied to a list of items unless we loop
    */
    lItem[i].style.listStyle = "disc"
}
//CREATING AN ELEMENT
let ul = document.querySelector('ul')
let li = document.createElement('li')
li.innerText = 'Another list item'
ul.append(li)