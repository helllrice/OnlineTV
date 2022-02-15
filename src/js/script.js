const btnRegister = document.getElementById('register-btn')
const popup = document.getElementById('popup')
const closeBtn = document.getElementById('close-btn')
const singUp = document.getElementById('sing-up')
const formItems = document.querySelectorAll('.form__item')

window.onload = function () {
    let preloader = document.getElementById('preload')
    preloader.style.display = 'none'
}

btnRegister.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
singUp.addEventListener('click', entrance)

function openModal(e) {
   popup.style.display = 'block'
}

function closeModal(e) {
    popup.style.display = 'none'
}

function entrance (e) {
    
}



