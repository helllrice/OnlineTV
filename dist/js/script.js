const btnRegister=document.getElementById("register-btn"),popup=document.getElementById("popup"),closeBtn=document.getElementById("close-btn"),singUp=document.getElementById("sing-up"),formItems=document.querySelectorAll(".form__item");function openModal(e){popup.style.display="block"}function closeModal(e){popup.style.display="none"}function entrance(e){}window.onload=function(){let e=document.getElementById("preload");e.style.display="none"},btnRegister.addEventListener("click",openModal),closeBtn.addEventListener("click",closeModal),singUp.addEventListener("click",entrance);