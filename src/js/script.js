const btnRegister = document.getElementById('register-btn')

window.onload = function () {
    let preloader = document.getElementById('preload')
    preloader.style.display = 'none'
}

btnRegister.addEventListener('click', openModal)

function openModal(e) {
   const div = document.createElement('div')
   div.classList.add('modal')
   document.querySelector('header').append(div)
}



