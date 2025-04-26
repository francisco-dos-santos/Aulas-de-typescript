
const link = document.getElementById('origamid');

if(link instanceof HTMLAnchorElement){
  link.href= link.href.replace('http://', 'https://');
}

const video = document.querySelector("#video");

if(video instanceof HTMLVideoElement){
  console.log(video.volume) 
}