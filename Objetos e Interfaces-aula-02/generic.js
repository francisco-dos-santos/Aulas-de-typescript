"use strict";
/*function extrairText<T extends HTMLElement>(el:T){
  return{
    text:el.innerText,
    el
  }
}

const ancor =document.querySelector('a');
if(ancor){
  console.log(extrairText(ancor).el.href);
}
*/
/*function $<Tipo extends Element>(selector:string): Tipo | null{
  return document.querySelector(selector)
}

const ancor= $<HTMLAnchorElement>('a')?.href;
*/
const ancor = document.querySelector('.link');
if (ancor instanceof HTMLVideoElement) {
    console.log(ancor.volume);
}
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
/*
async function handleData(){
  try{
    const pc = await getData<Notebook>('https://api.origamid.dev/json/notebook.json')
    console.log(pc.nome)
  }catch(e){
    console.log(e,'error no servidor');
  }
}

handleData()
*/ 
