$( document ).ready(function() {
    $('.section_testimonials__wrapper').owlCarousel({
        loop:true,
        margin:10,
        dots: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

var input1;
$('.input1').on('change', function () {
    input1 = $(this).val();
    console.log(input1);
});
});