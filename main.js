let div2 = document.querySelector(".div2")
let lgreen = document.querySelector(".lgreen")
let red = document.querySelector(".red")
let blue = document.querySelector(".blue")
function bl() {
    div2.style.background = 'url(./photos/blue.png)'
    div2.style.backgroundRepeat = 'no-repeat'
    div2.style.backgroundSize = 'contain'
}
function r() {
    div2.style.background = 'url(./photos/red.png)'
    div2.style.backgroundRepeat = 'no-repeat'
    div2.style.backgroundSize = 'contain'
}
function lg() {
    div2.style.background = 'url(./photos/lgreen.png)'
    div2.style.backgroundRepeat = 'no-repeat'
    div2.style.backgroundSize = 'contain'
}
blue.addEventListener("mouseover",bl)
red.addEventListener("mouseover",r)
lgreen.addEventListener("mouseover",lg)
// console.log(lgreen);
