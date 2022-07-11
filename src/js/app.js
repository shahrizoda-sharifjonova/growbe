import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();
const dropbtn = document.querySelector('.dropbtn').addEventListener('click', (e)=>{
    myFunction()
})

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("active"); 
    const dropbtn = document.querySelector('.dropbtn')
    dropbtn.classList.toggle('active')
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('active')) {
            openDropdown.classList.remove('active')
            const dropbtn = document.querySelector('.dropbtn')
            dropbtn.classList.remove('active')
        }
      }
    }
}

const menu = document.querySelector('.menu');
const headerContent = document.querySelector('.header__content');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
  headerContent.classList.toggle('active')
  body.classList.toggle('hidden')
  menu.classList.toggle('active')
})

gsap.from('.intro__img', {
  opacity: 0,
  duration: 1.5,
  y: '40%',
  ease: "back"
})

gsap.from('.solution__img', {
  scrollTrigger: ".solution__img",
  opacity: 0,
  y: 200,
  duration: 1.5,
  ease: "back",
})

gsap.from('.cards__item', {
  scrollTrigger: ".cards__item",
  opacity: 0,
  y: 200,
  duration: 1.5,
  ease: "back",
  stagger: .2,
})


gsap.from('.why__item', {
  scrollTrigger: ".why__item",
  opacity: 0,
  y: 200,
  duration: 1.5,
  ease: "back",
  stagger: .2,
})


gsap.from('.possibilities__item', {
  scrollTrigger: ".possibilities__item",
  opacity: 0,
  x: 200,
  duration: 1.5,
  ease: "back",
  stagger: .3,
})


gsap.from('.possibilities__img', {
  scrollTrigger: ".possibilities__img",
  opacity: 0,
  x: -300,
  duration: 1.5,
  ease: "circ.out",
})

