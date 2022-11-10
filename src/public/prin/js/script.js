viewLogo = document.getElementById('view-logo');

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        viewLogo.style.transform = "scale(1)";
    }else if(scroll < 500){
        viewLogo.style.transform = "scale(0)";
    }

}

const chatBtn = document.querySelector('#support');
const chatBtnX = document.querySelector('#support-x');
const popup = document.querySelector('.chat-popup');

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})

chatBtnX.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})

const elementChat = document.querySelector('#chat-popup');
elementChat.classList.add('animate__animated', 'animate__bounceOutLeft');

elementChat.addEventListener('animationend', () => {
  // do something
});