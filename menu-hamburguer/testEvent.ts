const btnMenu = document.getElementById('btn-mobile');

function handleMenuHamburguer(event:PointerEvent){
  const nav = document.getElementById('nav');
  const button = event.currentTarget;

  if(button instanceof HTMLElement && nav){
    const active = nav.classList.contains('active');
    if(!active){
      nav.classList.add('active')
      btnMenu?.setAttribute('aria-label', 'Fechar Menu');
      btnMenu?.setAttribute('aria-expanded','true')
    }else{
      nav.classList.remove('active');
      btnMenu?.setAttribute('aria-label', 'Abrir Menu');
      btnMenu?.setAttribute('aria-expanded','false');
    }
  }
}


btnMenu?.addEventListener('pointerdown', handleMenuHamburguer)