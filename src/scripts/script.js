const preloader = document.querySelector('.preloader')
const loading = document.querySelector('.loading')

window.addEventListener('load', () => {
    loading.classList.toggle('finished')
    preloader.classList.toggle('done')
})