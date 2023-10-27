"use strict"

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
    scrollFunction();
};

let button = document.getElementById('scrollbutton');

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}


let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('a3');
let a4 = document.getElementById('a4');
let a5 = document.getElementById('a5');

let viewall = document.getElementById('viewall');
let catwalk = document.getElementById('catwalk');
let advertisement = document.getElementById('advertisement');
let fashionista = document.getElementById('fashionista');
let mphoto = document.getElementById('mphoto');

function functionviewall() {
    a1.style.color = '#f09473'
    a2.style.color = 'rgb(22, 22, 22)'
    a3.style.color = 'rgb(22, 22, 22)'
    a4.style.color = 'rgb(22, 22, 22)'
    a5.style.color = 'rgb(22, 22, 22)'
    viewall.style.display = 'block'
    catwalk.style.display = 'none'
    advertisement.style.display = 'none'
    fashionista.style.display = 'none'
    mphoto.style.display = 'none'
}
function functioncatwalk() {
    a1.style.color = 'rgb(22, 22, 22)'
    a2.style.color = '#f09473'
    a3.style.color = 'rgb(22, 22, 22)'
    a4.style.color = 'rgb(22, 22, 22)'
    a5.style.color = 'rgb(22, 22, 22)'
    catwalk.style.display = 'block'
    viewall.style.display = 'none'
    advertisement.style.display = 'none'
    fashionista.style.display = 'none'
    mphoto.style.display = 'none'
}
function functionadvertisement() {
    a1.style.color = 'rgb(22, 22, 22)'
    a3.style.color = '#f09473'
    a2.style.color = 'rgb(22, 22, 22)'
    a4.style.color = 'rgb(22, 22, 22)'
    a5.style.color = 'rgb(22, 22, 22)'
    catwalk.style.display = 'none'
    viewall.style.display = 'none'
    advertisement.style.display = 'block'
    fashionista.style.display = 'none'
    mphoto.style.display = 'none'
}
function functionfashionista() {
    a1.style.color = 'rgb(22, 22, 22)'
    a4.style.color = '#f09473'
    a2.style.color = 'rgb(22, 22, 22)'
    a3.style.color = 'rgb(22, 22, 22)'
    a5.style.color = 'rgb(22, 22, 22)'
    catwalk.style.display = 'none'
    viewall.style.display = 'none'
    advertisement.style.display = 'none'
    fashionista.style.display = 'block'
    mphoto.style.display = 'none'
}
function functionmphoto() {
    a4.style.color = 'rgb(22, 22, 22)'
    a5.style.color = '#f09473'
    a2.style.color = 'rgb(22, 22, 22)'
    a3.style.color = 'rgb(22, 22, 22)'
    a1.style.color = 'rgb(22, 22, 22)'
    catwalk.style.display = 'none'
    viewall.style.display = 'none'
    advertisement.style.display = 'none'
    fashionista.style.display = 'none'
    mphoto.style.display = 'block'
}

$(function(){
    $({Counter: 0}).animate({Counter: 28},{
        duration: 1000,
        easing: 'linear',
        step: function() {
            $('#number1').text(Math.ceil(this.Counter))
        }
    })
    $({Counter: 0}).animate({Counter: 124},{
        duration: 1000,
        easing: 'linear',
        step: function() {
            $('#number2').text(Math.ceil(this.Counter))
        }
    })
    $({Counter: 0}).animate({Counter: 76},{
        duration: 1000,
        easing: 'linear',
        step: function() {
            $('#number3').text(Math.ceil(this.Counter))
        }
    })
    $({Counter: 0}).animate({Counter: 500},{
        duration: 1000,
        easing: 'linear',
        step: function() {
            $('#number4').text(Math.ceil(this.Counter))
        }
    })
})