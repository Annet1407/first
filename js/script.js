

// SERVECES:
let stcard = document.querySelectorAll(".stcard"), rotate;
for(let i = 0; i < stcard.length; i++){
    rotate = Math.random() * 5 * (Math.round(Math.random()) ? 1 : -1);
    stcard[i].style.transform = "rotate("+ rotate +"deg)";
}

// STAGE:
        var swiper = new Swiper('.blog-slider', {
            effect: 'fade',
            loop: true,
            mousewheel: {
                invert: false,
            },
            autoHeight: true,
            pagination: {
                el: '.blog-slider__pagination',
                clickable: true,
            }
        });




// ADVANTAGES:
        