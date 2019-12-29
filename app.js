const heaven = document.querySelector('.heaven');
const nav = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li');

function navSlide(){
  nav.classList.toggle('nav-active');
  navLinks.forEach(function(link,index){
    if(link.style.animation){
      link.style.animation = '';
    }else{
      link.style.animation = `navLinkFade 0.3s ease forwards ${index/7+0.5}s`;
    }
  });
  heaven.classList.toggle('rotate');
}

heaven.addEventListener('click', navSlide);
