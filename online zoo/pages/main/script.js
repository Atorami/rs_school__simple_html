let burger_nav = document.querySelector('.burger-navigation'),
    layout = document.querySelector('.grey-layout'),
    body = document.querySelector('body')

let open_menu = () => {
    burger_nav.classList.add('open-nav')
    layout.style.display = 'block'
    console.log('Its works')
}

let close_menu = () => {
    burger_nav.classList.remove('open-nav')
    layout.style.display = 'none'
}

let backstage_slider = document.querySelector('.backstage__slider'),
    card_list = document.querySelector('.card-list'),
    cards = document.querySelectorAll('.card'),
    next_btn = document.querySelector('.next-btn'),
    prev_btn = document.querySelector('.prev-btn')

let orderClassArr = ['order1', 'order2', 'order3', 'order4', 'order5', 'order6', 'order7']

next_btn.addEventListener('click', clickAnimLeft, false)
prev_btn.addEventListener('click', clickAnimRight, false)


function clickAnimLeft(event){
    event.preventDefault()

    card_list.classList.add('animated-left')
    
    card_list.addEventListener('animationend', () => {
        card_list.classList.remove('animated-left')
    })

    let shuffled = orderClassArr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    cards.forEach((card, i)=>{
        card.classList.remove(`${card.classList[1]}`)
        card.classList.add(`${shuffled[i]}`)
    })

}
function clickAnimRight(event){
    event.preventDefault()

    card_list.classList.add('animated-right')

    let shuffled = orderClassArr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    cards.forEach((card, i)=>{
        card.classList.remove(`${card.classList[1]}`)
        card.classList.add(`${shuffled[i]}`)
    })

    card_list.addEventListener('animationend', () => {
        card_list.classList.remove('animated-right')
    })
}





let mediaQuares320 = window.matchMedia('(max-width: 639px)'),
    mediaQuares640 = window.matchMedia('(max-width: 999px)'),
    mediaQuares1000 = window.matchMedia('(max-width: 1599px)'),
    mediaQuares1600 = window.matchMedia('(min-width: 1600px)');


[...document.querySelector('#t-card-list').children].forEach(card=>{
    card.addEventListener('click', showWindow)
})

let empty_card = document.querySelector('#t-card-item_empty'),
    t_cross = document.querySelector('.t-cross')


t_cross.addEventListener('click', closeWindow)
layout.addEventListener('click', closeWindow)

function showWindow(){
    layout.style.display = 'block'
    layout.style.background = 'none'
    t_cross.style.display = 'block'
    empty_card.style.display = 'block'
    empty_card.style.zIndex = 11
    // body.style.overflow = 'hidden'
    empty_card.style.height = '391px'
    empty_card.style.width = '267px'

    if(mediaQuares640.matches){
        empty_card.style.top = '0'
        empty_card.style.left = '25%'
        t_cross.style.top = '0'
        t_cross.style.left = '470px'
    }
    if(mediaQuares1000.matches){
        empty_card.style.top = '0'
        empty_card.style.left = '34%'
        t_cross.style.top = '0'
        t_cross.style.left = '630px'
    }

   
    if(mediaQuares320.matches){
        empty_card.style.height = '340px'
        empty_card.style.width = '265px'
        empty_card.style.top = '0'
        empty_card.style.left = '0'
        t_cross.style.top = '-20px'
        t_cross.style.left = '280px'
    }

    
    let img = this.children[0].children[0].src,
        name = this.children[0].children[1].children[0].innerHTML,
        country = this.children[0].children[1].children[1].children[0].innerHTML,
        time =  this.children[0].children[1].children[1].children[1].innerHTML,
        descr = this.children[1].children[0].innerHTML

        empty_card.children[0].children[0].src = img
        empty_card.children[0].children[1].children[0].innerHTML = name
        empty_card.children[0].children[1].children[1].children[0].innerHTML = country
        empty_card.children[0].children[1].children[1].children[1].innerHTML = time
        empty_card.children[1].children[0].innerHTML = descr
}

function closeWindow(){
    layout.style.display = 'none'
    t_cross.style.display = 'none'
    empty_card.style.display = 'none'
}


if (mediaQuares1600.matches || mediaQuares1000.matches) {

    let thumb = document.querySelector('#t-input-range'),
        wrapper = document.querySelector('#t-card-list'),
        card = document.querySelector('.t-card-item');
  
    thumb.addEventListener('input', changeTestimonial)
}


  
  