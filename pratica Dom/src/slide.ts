export default class Slide{
  container;
  slides;
  controls;
  time
  index:number;
  slide:Element
  constructor(container:Element, slides:Element[],controls:Element,time:number=5000){
    this.container=container;
    this.slides=slides;
    this.controls=controls;
    this.time=time;

    this.index=0
    this.slide=this.slides[this.index]
    this.init()

    console.log(slides)
  }
  hide(el:Element){
    el.classList.remove('active')
  }
  show(index:number){
    this.index=index
    this.slide=this.slides[this.index]
    this.slides.forEach(this.hide)
    this.slide.classList.add("active")
  }
  next(){
    const next= (this.index +1) < this.slides.length?this.index +1:0
    this.show(next)
    console.log(this.index)
  }
  prev(){
    const prev=this.index > 0?this.index -1 :this.slides.length - 1
    this.show(prev)
    console.log(this.index)
  }

  private addControls(){
    const prevButton=document.createElement('button')
    const nextButton=document.createElement('button')
    this.controls.appendChild(prevButton)
    this.controls.appendChild(nextButton)

    prevButton.innerText="anterior"
    nextButton.innerText='proximo'

    prevButton.addEventListener('pointerup', ()=> this.prev())
    nextButton.addEventListener('pointerup', ()=>this.next());
  }

  private init(){
    this.addControls()
    this.show(this.index)
  }
}