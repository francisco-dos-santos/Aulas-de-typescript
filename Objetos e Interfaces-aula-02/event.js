"use strict";
//const button = document.querySelector('button');
//function handleClick(event:MouseEvent){
//  console.log(event.pageX)
//}
//button?.addEventListener('click',handleClick);
//function ativarMenu(event:Event){
//  console.log(event.type)
//  if(event instanceof MouseEvent){
//    console.log(event.pageX)
//  }
//  if(event instanceof TouchEvent){
//    console.log(event.touches[0].pageX)
//  }
//}
//document.documentElement.addEventListener('mousedown', ativarMenu)
//document.documentElement.addEventListener('touchstart', ativarMenu)
//window.addEventListener('keydown', ativarMenu)
//const button =document.querySelector('button');
//function handleClick(this:HTMLButtonElement, event:MouseEvent){
//  console.log(this);
//}
//button?.addEventListener('click',handleClick)
const button = document.querySelector('button');
function handleClick(event) {
    if (event.currentTarget instanceof HTMLElement) {
        console.log(event.currentTarget.innerText);
    }
}
button?.addEventListener('click', handleClick);
