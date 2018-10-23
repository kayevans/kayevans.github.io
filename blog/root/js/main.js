$(function(){
    console.log('jquery started');
    // SHOW BACK TO TOP ARROW 
    $(window).scroll(function(){
        // if the page scrolls more than 800 px
        if ($(this).scrollTop() > 800) {
        // fade in the arrow slowly
            $('.back-to-top').fadeIn('slow');
        } else {
        // else fade out faster
            $('.back-to-top').fadeOut(50);
        }
    });
    // ENABLE BACK TO TOP FUNCTION 
    $('.back-to-top').click(function() {  
        $('body,html').animate({
            // upon clicking, will return to top of the page in 500 milliseconds
        scrollTop : 0 }, 500);
            // prevents from showing button once scrolls back up to top of page 
        return false;
    });
    
});