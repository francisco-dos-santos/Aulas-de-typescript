const links= document.querySelectorAll('.link');
console.log(links)

links.forEach((link) =>{
  if(link instanceof HTMLElement){
    pintarElemento(link)
    // console.log(link.__proto__.__proto__)
  }
})

function pintarElemento(element:HTMLElement){
  element.style.color='red';
  element.style.border='2px solid blue';
}


const dados=[1,3,5,6];
const arrayLinks = Array.from(links);

const anchorLinks = arrayLinks.filter(
  (anchor) => anchor instanceof HTMLAnchorElement
);

console.log(anchorLinks)

