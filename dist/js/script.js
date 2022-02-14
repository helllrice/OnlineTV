const btnRegister=document.getElementById("register-btn");function openModal(t){const e=document.createElement("div");e.classList.add("modal"),document.querySelector("header").append(e),e.innerHTML=`
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
   `}function closeModal(t){}window.onload=function(){let t=document.getElementById("preload");t.style.display="none"},btnRegister.addEventListener("click",openModal,{once:!0});