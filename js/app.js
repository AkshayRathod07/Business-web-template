$(document).ready(function(){
    $(Window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 200) {
            $('.navbar-custom').addClass('nav-sticky');
        }else{
            $('.navbar-custom').removeClass('nav-sticky');

        }
    });

    // sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx){
           
           if ($(this).attr("data-background")){
               $(this).css("background-image", "url(" + $(this).data("background") + ")");
           }
    });
   


    // owel
    $(".team-members").owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:true,
        autoplay:true,
        dots: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    // owel testomonials
    $(".testomonials").owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:true,
        autoplay:true,
        dots: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    // accordian-box - FAQ
    $(".accordian-container").click(function () {
        $(".accordian-container").children(".body").slideUp();
        $(".accordian-container").removeClass("active");
        $("accordian-container")
        .children(".head")
        .children("span")
        .children("i")
        .removeClass('fa-angle-down')
        .addClass('fa-angle-up');


        $(this).children(".body").slideDown();
        $(this).addClass("active");
        $(this)
        .children(".head")
        .children("span")
        .children("i")
        .removeClass('fa-angle-down')
        .addClass('fa-angle-up')
    })




});



