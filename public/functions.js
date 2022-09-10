
 // HAMBURGER MENU 
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //toggle nav with click
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //burger animation
        burger.classList.toggle('toggle');

    });
}
navSlide();


//NEWS PAGE JS

const sl = gsap.timeline({defaults: {ease: "power1.out"}});

sl.to(".text", {y: "0%", duration: 1, stagger: 0.25 })
sl.to(".slide", {y: "-100%", duration: 1.5, delay: 0.5})
sl.to(".start", {y: "-100%", duration: 1}, "-=1")




// MODAL BUTTON POP UP 
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


//DARK MODE ANIMATION

// function toggleMenu(){
//   const menuToggle = document.querySelector('.toggle')
//   menuToggle.classList.toggle('active')
// }

// dark mode and light mode 
function colourSchemeShift(){
  document.body.classList.toggle("dark")
}
let darkMode = localStorage.getItem("darkMode")
