

const menubutton = document.querySelector('.menubutton');
const menu = document.querySelector('.menu');

menubutton.addEventListener('click',() => {
    menu.classList.toggle('active')
})

menu.addEventListener('click',() => {
    menu.classList.toggle('active')
})

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta) return;
    if (st > lastScrollTop && st > navbarHeight){
        $('header').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up');
        }
    }
    lastScrollTop = st;
}