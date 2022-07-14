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

const block1 = document.querySelector('.solution1');
const block2 = document.querySelector('.solution2');
const block3 = document.querySelector('.solution3');
const block4 = document.querySelector('.solution4');

const desc1 = document.querySelector('.description1');
const desc2 = document.querySelector('.description2');
const desc3 = document.querySelector('.description3');
const desc4 = document.querySelector('.description4');

let activeBlock1 = false;
let activeBlock2 = false;
let activeBlock3 = false;
let activeBlock4 = false;

block1.addEventListener('click', () => {
    if (!activeBlock1) {
        block1.classList.add('active');
        block2.classList.remove('active');
        block3.classList.remove('active');
        block4.classList.remove('active');
        activeBlock1 = true;
        activeBlock2 = false;
        activeBlock3 = false;
        activeBlock4 = false;

        desc1.classList.add('active');
        desc2.classList.remove('active');
        desc3.classList.remove('active');
        desc4.classList.remove('active');
    }
});

block2.addEventListener('click', () => {
    if (!activeBlock2) {
        block2.classList.add('active');
        block1.classList.remove('active');
        block3.classList.remove('active');
        block4.classList.remove('active');
        activeBlock2 = true;
        activeBlock1 = false;
        activeBlock3 = false;
        activeBlock4 = false;

        desc2.classList.add('active');
        desc1.classList.remove('active');
        desc3.classList.remove('active');
        desc4.classList.remove('active');
    }
});

block3.addEventListener('click', () => {
    if (!activeBlock3) {
        block3.classList.add('active');
        block1.classList.remove('active');
        block2.classList.remove('active');
        block4.classList.remove('active');
        activeBlock3 = true;
        activeBlock1 = false;
        activeBlock2 = false;
        activeBlock4 = false;

        desc3.classList.add('active');
        desc1.classList.remove('active');
        desc2.classList.remove('active');
        desc4.classList.remove('active');
    }
});

block4.addEventListener('click', () => {
    if (!activeBlock4) {
        block4.classList.add('active');
        block1.classList.remove('active');
        block2.classList.remove('active');
        block3.classList.remove('active');
        activeBlock4 = true;
        activeBlock1 = false;
        activeBlock2 = false;
        activeBlock3 = false;

        desc4.classList.add('active');
        desc1.classList.remove('active');
        desc2.classList.remove('active');
        desc3.classList.remove('active');
    }
});

$(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});