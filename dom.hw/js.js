let first = document.querySelector(".first-p");
function abc() {
    first.style.color = "blue";
}   

 let second = document.querySelector(".second");
 function secDiv(){
     second.style.borderRadius = "30px";
 }


 let third = document.querySelector(".third");
 function bodyBg(){
    third.style.backgroundColor = "aliceblue";
}
let fourth = document.querySelector(".fourth");
function rnd() {
    fourth.style.backgroundColor = `rgb(${rndBg()}, ${rndBg()}, ${rndBg()})`; 
}
function rndBg() {
    return Math.floor(Math.random() * 255);     
}
let fifth = document.querySelector(".fifth");
function fontFam() {
    fifth.style.fontFamily = "monospace";
}