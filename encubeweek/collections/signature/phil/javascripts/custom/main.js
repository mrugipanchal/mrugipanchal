/*
* PHIL - Signature Edition | Premium Web Template from Designova
* Copyright (C) 2015 Designova
* This is a premium product. For licensing queries please contact info@designova.net
*/

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {


//Detecting viewpot dimension
  var vH = $(window).height();
  var vW = $(window).width();


//Adjusting Intro Components Spacing based on detected screen resolution
  $('.fullwidth').css('width',vW);
  $('.fullheight').css('height',vH);
  $('.halfwidth').css('width',vW/2);
  $('.halfheight').css('height',vH/2);


        //Mobile Only Navigation (multi level)
                $('ul.slimmenu').slimmenu({
                    resizeWidth: '1200',
                    collapserTitle: '',
                    easingEffect: 'easeInOutQuint',
                    animSpeed: 'medium',
                });

                $('.slimmenu li a:not(.sub-collapser)').on('click',function(){
                            $('ul.slimmenu').removeClass('expanded').slideUp();
                });

//PRELOADER
$('body').addClass('preloader-running'); 
$('#mastwrap').css('visibility','hidden');
$(window).load(function() { 
  $("#status").fadeOut(); 
  $("#preloader").delay(1000).fadeOut(1000); 
  $('body').removeClass('preloader-running'); 
  $('body').addClass('preloader-done'); 
  $("#mastwrap").delay(1000).css('visibility','visible'); 
});

//NAVIGATION (Main & Mobile in one)
        $("#nav-mobile").html($("#nav-main").html());
        $("#nav-trigger span").on('click', function() {
            if ($("nav#nav-mobile ul").hasClass("expanded")) {
                $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
                $(this).removeClass("open");
            } else {
                $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
                $(this).addClass("open");
            }
        });

//CAROUSEL
$('.intro-carousel').owlCarousel({
    margin:0,
    loop:true,
    autoWidth:true,
    items:4,
    nav:true,
    dots:false,
    navText:false
    });

$('.intro-carousel .item').on( "mouseenter", function() {
    $('.intro-carousel .item img').stop().animate({
      opacity: 0.15
      }, 500, function() {
      // Animation complete.
    });
    $(this).find('img').stop().animate({
      opacity: 1
      }, 500, function() {
      // Animation complete.
    });
});
$('.intro-carousel .item').on( "mouseleave", function() {
    $('.intro-carousel .item img').stop().animate({
      opacity: 1
      }, 500, function() {
      // Animation complete.
    });
});

        

//ISOTOPE
        
        //ISOTOPE GLOBALS
        var $container1 = $('.works-container');


        //ISOTOPE INIT
        $(window).load(function() {

           //checking if all images are loaded
            $container1.imagesLoaded( function() {

                //init isotope once all images are loaded
                $container1.isotope({
                    // options
                    itemSelector: '.works-item',
                    layoutMode: 'masonry',
                    transitionDuration: '0.8s'
                });


                //forcing a perfect masonry layout after initial load
                setTimeout(function() {
                $container1.isotope('layout');
                }, 100);


                // triggering filtering
                $('.works-filter li a').on('click', function() {
                    $('.works-filter li a').removeClass('active');
                    $(this).addClass('active');

                    var selector = $(this).attr('data-filter');
                    $('.works-container').isotope({
                        filter: selector
                    });
                    setTimeout(function() {
                        $container1.isotope('layout');
                    }, 700);
                    return false;
                });


                //Isotope ReLayout on Window Resize event.
                $(window).on('resize', function() {
                    $container1.isotope('layout');
                });

                //Isotope ReLayout on device orientation changes
                window.addEventListener("orientationchange", function() {
                    $container1.isotope('layout');
                }, false);

            });

        });




//VENOBOX
    $('.venobox, .image-lightbox-link').venobox({
        numeratio: true,
        infinigall: true
    });   
        

   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

