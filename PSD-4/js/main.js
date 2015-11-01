$(document).ready(function(){
	$('#nav').slicknav();
	 $("#responsive-video").fitVids();
	
	 $('.paralax_area').parallax("50%", 0.1);
		  
	$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "fade",
	controlNav: false,
	prevText: "<i class='fa fa-chevron-left'></i>",           
	nextText: "<i class='fa fa-chevron-right'></i>",  
    
  });
});

var nav = $('.progress-bar');
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >500) {  
            
			$('.progress-bar.progress-bar-info.m75').css({"width":"75%"});
			$('.progress-bar.progress-bar-info.m67').css({"width":"67%"});
			$('.progress-bar.progress-bar-success.m85').css({"width":"85%"});
			$('.progress-bar.progress-bar-success.m72').css({"width":"72%"});
			$('.progress-bar.progress-bar-warning').css({"width":"60%"});
        } 
        else  {
         
			$('.progress-bar.progress-bar-info.m75').css({"width":"0%"});
			$('.progress-bar.progress-bar-info.m67').css({"width":"0%"});
			$('.progress-bar.progress-bar-success.m85').css({"width":"0%"});
			$('.progress-bar.progress-bar-success.m72').css({"width":"0%"});
			$('.progress-bar.progress-bar-warning').css({"width":"0%"});
        }
        
		
		
    });



});



$(function () {
    $('.log_menu , .slicknav_menu').stickyNavbar({
    activeClass: "active",          // Class to be added to highlight nav elements
    sectionSelector: "scrollto",    // Class of the section that is interconnected with nav links
    animDuration: 250,              // Duration of jQuery animation
    startAt: 0,                     // Stick the menu at XXXpx from the top of the this() (nav container)
    easing: "linear",               // Easing type if jqueryEffects = true, use jQuery Easing plugin to extend easing types - gsgd.co.uk/sandbox/jquery/easing
    animateCSS: true,               // AnimateCSS effect on/off
    animateCSSRepeat: false,        // Repeat animation everytime user scrolls
    cssAnimation: "fadeInDown",     // AnimateCSS class that will be added to selector
    jqueryEffects: false,           // jQuery animation on/off
    jqueryAnim: "slideDown",        // jQuery animation type: fadeIn, show or slideDown
    selector: "li",                  // Selector to which activeClass will be added, either "a" or "li"
    mobile: false,                  // If false nav will not stick under 480px width of window
    mobileWidth: 240,               // The viewport width (without scrollbar) under which stickyNavbar will not be applied (due usability on mobile devices)
    zindex: 9999,                   // The zindex value to apply to the element: default 9999, other option is "auto"
	stickyModeClass: "sticky",      // Class that will be applied to 'this' in sticky mode
    unstickyModeClass: "unsticky"   // Class that will be applied to 'this' in non-sticky mode
  });
  
  
  

    $(".carsal").owlCarousel({
    autoPlay : 3000,
    stopOnHover : true,
    navigation:true,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	paginationSpeed : 1000,
    goToFirstSpeed : 2000,
    singleItem : true,
    autoHeight : true,
    transitionStyle:"fade"
    });
     
 


});

 

				