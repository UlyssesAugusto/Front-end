/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show Menu */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu Hidden */
if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //Quando clicamos em cada link de navegação, removemos o menu de exibição.
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD SHADOW HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    //Adiciona uma classe se o deslocamento inferior for maior que 50 no viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                    : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)

