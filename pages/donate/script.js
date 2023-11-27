let burger_nav = document.querySelector('.burger-navigation'),
    layout = document.querySelector('.grey-layout')

let open_menu = () => {
    burger_nav.classList.add('open-nav')
    layout.style.display = 'block'
    console.log('Its works')
}

let close_menu = () => {
    burger_nav.classList.remove('open-nav')
    layout.style.display = 'none'
}