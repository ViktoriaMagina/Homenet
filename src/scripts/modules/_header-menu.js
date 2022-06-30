const headerBurgerBtn = document.querySelector('.header-top__btn')
const headerMenuBtn = document.querySelector('.header-menu__btn')

headerBurgerBtn.addEventListener('click', function(){
    const body = document.querySelector('body') 
    const headerMenu = document.querySelector('.header-menu') 
    headerMenu.classList.add('active')
    body.classList.add('hidden')
})
headerMenuBtn.addEventListener('click', function(){
    const body = document.querySelector('body') 
    const headerMenu = document.querySelector('.header-menu') 
    headerMenu.classList.remove('active')
    body.classList.remove('hidden')
})