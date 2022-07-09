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