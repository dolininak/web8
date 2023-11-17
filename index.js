window.addEventListener('DOMContentLoaded', function (event) {
console.log("DOM fully loaded and parsed");
$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:3,
        slidesToScroll:3,
        speed:1000,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }
        ]
    });
});
});