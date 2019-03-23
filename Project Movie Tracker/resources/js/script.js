$(document).add(function() {
    
    /* For the sticky navigation  */
    
   $('.js--section-features').waypoint(function(direction){
       if (direction == "down"){
           $('nav').addClass('sticky');
       }
       else{
           $('nav').removeClass('sticky');
       }
   }, {
       offset: '60px;'
   });
    
   
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });
    
    /*    Navigation Scroll   */
    
    $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        target.focus(); // Setting focus
        if (target.is(":focus")){ // Checking if the target was focused
          return false;
        } else {
          target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          target.focus(); // Setting focus
        };
        return false;
      }
    }
  });
});
    
    /* animations on scroll  */
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    /*     Mobile nav    */
    
    $('.js--mobile-nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('js--mobile-nav-icon i');
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    })
    
});