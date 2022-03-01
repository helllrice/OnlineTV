const btnRegister = document.getElementById('register-btn')
const popup = document.getElementById('popup')
const closeBtn = document.getElementById('close-btn')
const singIn = document.getElementById('sing-in')
const formItems = document.querySelectorAll('.form__item:nth-child(3n+1)')
const createAccount = document.getElementById('create')
const registerText = document.getElementById('popup-title')
const loginText = document.getElementById('popup-login')
const popupInput = document.querySelectorAll('input')

window.onload = function () {
    let preloader = document.getElementById('preload')
    preloader.style.display = 'none'
}

btnRegister.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
singIn.addEventListener('click', entrance)
createAccount.addEventListener('click', create)

function openModal(e) {
   popup.style.display = 'block'
}

function closeModal(e) {
    popup.style.display = 'none'
}

function entrance (e) {
    for (let i = 0; i < formItems.length; i++) {
        formItems[i].style.display = 'none'
    }
    registerText.style.display = 'none'
    loginText.style.display = 'block'
}

function create(e) {
    for (let i = 0; i < formItems.length; i++) {
        formItems[i].style.display = 'block'
    }
    singIn.style.display = 'block'
    loginText.style.display = 'none'
    registerText.style.display = 'block'
    if(popupInput.values == '') {
        popupInput.style.border = '1px solid red'
    }
}





