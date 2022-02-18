const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else {
        menuBtn.classList.remove('open');
        menuOpen = false
    }
});

const header = document.querySelector('.header');

window.onscroll = function(){
       var top = window.scrollY;
       if (top >= 100){
           header.classList.add('active');
       } else{
           header.classList.remove('active');
       }
    }