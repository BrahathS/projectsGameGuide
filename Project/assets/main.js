
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



//DARK MODE ANIMATION

function toggleMenu(){
  const menuToggle = document.querySelector('.toggle')
  menuToggle.classList.toggle('active')
  localStorage.setItem("toggle", "dark");
}

// dark mode and light mode 
function colourSchemeShift(){
  document.body.classList.toggle("dark")
  
}
let darkMode = localStorage.getItem("darkMode")

