const nav = document.querySelector('nav')
const navMenu = document.getElementById('nav-menu')


navMenu.addEventListener('click', event => {
    nav.classList.toggle('active')  
    navMenu.classList.toggle('active')  
})