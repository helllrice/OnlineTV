const btnRegister = document.getElementById('register-btn')

window.onload = function () {
    let preloader = document.getElementById('preload')
    preloader.style.display = 'none'
}

btnRegister.addEventListener('click', openModal, {once: true})

function openModal(e) {
   const div = document.createElement('div')
   div.classList.add('modal')
   document.querySelector('header').append(div)
   div.innerHTML = `
        <button class="close-btn">X</button>
        <h2 class="register-text">Registration</h2>
        <div class="form">
            <div class="form__item">
                <h2 class="register-form__text">Your E-mail</h2>
                <input type="text">
            </div>
            <div class="form__item">
                <h2 class="form__item-text">Your Login</h2>
                <input type="text">
            </div>
            <div class="form__item">
                <h2 class="form__item-text">Your Password</h2>
                <input type="text">
            </div>
            <div class="form__item">
                <h2 class="form__item-text">Сonfirm Password</h2>
                <input type="text">
            </div>
            <div class="form-buttons">
                <button class="register-create">Create Account</button>
                <button class="register-enter">Sign In</button>
            </div>
        </div>
   `
}

function closeModal(e) {
    
}



