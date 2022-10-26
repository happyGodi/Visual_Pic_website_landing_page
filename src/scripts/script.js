const preloader = document.querySelector('.preloader')
const loading = document.querySelector('.loading')
const cards = document.querySelectorAll('.card')
const cardContents = document.querySelectorAll('.card__content')
const navbar = document.querySelector('.navbar')
const border = document.querySelector('.border')
const hamburger = document.querySelector('.hamburger')
const landing = document.querySelector('.landing')
const left = document.querySelector('.bLeft')

window.addEventListener('load', () => {
    loading.classList.toggle('finished')
    preloader.classList.toggle('done')
})

hamburger.addEventListener('click', () => {
    landing.classList.toggle('disapear')
    navbar.classList.toggle('show')
    left.classList.toggle('screen')
    setTimeout(() => {
        border.classList.toggle('onScreen')
    }, 800);
})

cards.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
        let i = index
        cardContents[index].classList.add('hovered')
        cards.forEach((c, index) => { if (index !== i) c.classList.add('greyed') })
    })
})
cards.forEach((card, index) => {
    card.addEventListener('mouseleave', () => {
        let i = index
        cardContents[index].classList.remove('hovered')
        cards.forEach((c, index) => { if (index !== i) c.classList.remove('greyed') })
    })
})