/**
 * jQuery
 */
jQuery.noConflict();
(function ($) {
   $(function () {

      $(document).ready(function () {

         /**
          * GENERAL
          */

         // menu sticky scroll - fixed
         if ($('.main-header')[0]) {
            let scrollTop = $('.main-header .menu-bar').offset().top;

            $(window).scroll(function () {
               if (getWidth() > 768) {
                  if ($(window).scrollTop() > scrollTop) {
                     $('.main-header .menu-bar').addClass('fixed-top');
                     let altoHeader = $('.main-header .menu-bar').height();
                     //$('main').css('margin-top', altoHeader + 'px');
                  } else {
                     $('.main-header .menu-bar').removeClass('fixed-top');
                     $('main').removeAttr('style');
                  }
               }
            });
         }

         // scrool to
         $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            var target = $(this.getAttribute('href'));
            if (target.length) {
               $('html, body').stop().animate({
                  scrollTop: target.offset().top - 74
               }, 750)
            }
         });

         /**
          * HOME
          */
         // slider
         /*
         $('.owl-carousel-niveles').owlCarousel({
             loop: true,
             margin: 40,
             nav: true,
             dots: true,
             navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
             responsive: {
                 0: {
                     items: 1
                 },
                 600: {
                     items: 2
                 },
                 768: {
                     items: 3
                 }
             }
         })
         */

         // servicios
         $('.owl-servicios').owlCarousel({
            loop: false,
            margin: 42,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
               0: {
                  items: 1
               },
               600: {
                  items: 2
               },
               768: {
                  items: 3
               }
            }
         })

         // servicio galeria
         $('.owl-servicio-galeria').owlCarousel({
            loop: false,
            margin: 0,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            items: 1
         })

         // servicio galeria
         $('.owl-servicio-del-dia').owlCarousel({
            loop: false,
            margin: 0,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            items: 1
         })

         // agencias afiliadas
         $('.owl-agencias').owlCarousel({
            loop: false,
            margin: 40,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
               0: {
                  items: 1
               },
               600: {
                  items: 2
               },
               768: {
                  items: 3
               }
            }
         })


         /**
          * PAGES INNER
          */


         /**
          * IS MOBILE
          */
         if (getWidth() < 768) {
            /*
            let altoSliderNav;
            let altoSlider = $('.c-carousel-home .item img').height();
            altoSliderNav = (altoSlider / 2) - 25;
            */

            //$('.c-carousel-home .owl-carousel .owl-nav').css('top', altoSliderNav + 'px');

            // hover menu disabled
            //$('.nav-link.dropdown-toggle').attr('data-toggle', 'dropdown');
         }

         console.log('hola mundo');
      });

   });
})(jQuery);

function getWidth() {
   return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
   );
}

/**
 * JavaScript
 */
