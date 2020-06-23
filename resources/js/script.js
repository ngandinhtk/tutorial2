 //global console//
 $(document).ready(function () {

     /* ------- STICKY NAV ---- */
     $('.js--section-features').waypoint(function (direction) {
         if (direction == "down") {
             $('nav').addClass('sticky');
         } else {
             $('nav').removeClass('sticky')
         }
     }, {
         offset: '70px'
     })
     /* --Scroll on buttons */

     $('.js--scroll-to-plans').click(function () {
         $('html, body').animate({
             scrollTop: $('.js--section-plans').offset().top
         }, 1500)
     })

     $('.js--scroll-to-start').click(function () {
         $('html, body').animate({
             scrollTop: $('.js--section-features').offset().top
         }, 1500)
     })
     $('.js--scroll-to-home').click(function () {
         $('html, body').animate({
             scrollTop: $('.js--home').offset().top
         }, 1500)
     })


     /* ---------- mavigation smooth scroll ----------*/

     // Select all links with hashes
     $('a[href*="#"]').click(function (event) {
         // On-page links
         if (
             location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
             location.hostname == this.hostname
         ) {
             // Figure out element to scroll to
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             // Does a scroll target exist?
             if (target.length) {
                 // Only prevent default if animation is actually gonna happen
                 event.preventDefault();
                 $('html, body').animate({
                     scrollTop: target.offset().top
                 }, 1000, function () {
                     // Callback after animation
                     // Must change focus!
                     var $target = $(target);
                     $target.focus();
                     if ($target.is(":focus")) { // Checking if the target was focused
                         return false;
                     } else {
                         $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                         $target.focus(); // Set focus again
                     };
                 });
             }
         }
     });

     /* --------------animate on scroll ---------*/


     $('.js--wp-1').waypoint(function (direction) {
         $('.js--wp-1').addClass('animate__animated animate__fadeIn');
     }, {
         offset: '60%'

     });


     $('.js--wp-2').waypoint(function (direction) {
         $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
     }, {
         offset: '60%'

     });

     $('.js--wp-3').waypoint(function (direction) {
         $('.js--wp-3').addClass('animate__animated animate__fadeIn');
     }, {
         offset: '50%'

     });

     $('.js--wp-4').waypoint(function (direction) {
         $('.js--wp-4').addClass('animate__animated animate__bounce');
     }, {
         offset: '50%'

     });

     /* --------mobile nav-------------- */

     var name = $('.js--nav-icon ion-icon').attr('name')

     $('.js--nav-icon').click(function () {
         $('.main-nav').slideToggle(200);
         var icon = $('.js--nav-icon ion-icon');
         if (icon.attr('name') === name) {
             icon.removeAttr('name')
             icon.attr('name', 'close-outline');
         } else {
             icon.attr('name', 'filter-outline');
         }

     });



 });