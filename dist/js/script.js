const btnRegister=document.getElementById("register-btn"),popup=document.getElementById("popup"),closeBtn=document.getElementById("close-btn"),singIn=document.getElementById("sing-in"),formItems=document.querySelectorAll(".form__item:nth-child(3n+1)"),createAccount=document.getElementById("create"),registerText=document.getElementById("popup-title"),loginText=document.getElementById("popup-login"),popupInput=document.querySelectorAll("input");function openModal(e){popup.style.display="block"}function closeModal(e){popup.style.display="none"}function entrance(e){for(let e=0;e<formItems.length;e++)formItems[e].style.display="none";registerText.style.display="none",loginText.style.display="block"}function create(e){for(let e=0;e<formItems.length;e++)formItems[e].style.display="block";singIn.style.display="block",loginText.style.display="none",registerText.style.display="block",""==popupInput.values&&(popupInput.style.border="1px solid red")}window.onload=function(){let e=document.getElementById("preload");e.style.display="none"},btnRegister.addEventListener("click",openModal),closeBtn.addEventListener("click",closeModal),singIn.addEventListener("click",entrance),createAccount.addEventListener("click",create);