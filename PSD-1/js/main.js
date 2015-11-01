
$(document).ready(function(){
	$('#nav').slicknav();
	 $("#responsive-video").fitVids();
	 $("#videobcg").css({display: "block"});
$(function () {
    $('.logo_menu, .slicknav_menu').stickyNavbar({
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
});
	 
	 
	 
	 
	$('.s').counterUp({
            delay: 5,
            time: 5000
        });
	
	$( ".single_price" ).hover(
	function() {  $(this).addClass('h') ;
	 $('.single_price').removeClass('active') ;
}),


$( ".single_price" ).mouseleave(function() {
  $('.single_price').removeClass('h') ;
  $(this).addClass('active') ;
}),

$( ".read_more_batton" ).click(function() {
	$(".single_time_line_area:nth-child(6)").css({display: "block"});
	$(".single_time_line_area:nth-child(7)").css({display: "block"});
}),

	$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "fade",
	controlNav: false,
	prevText: "<i class='fa fa-chevron-left'></i>",           
	nextText: "<i class='fa fa-chevron-right'></i>",  
    
  });
});

     
    $("#corsal_area").owlCarousel({
     
    autoPlay: 3000, //Set AutoPlay to 3 seconds
     items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
		
		navigation : true,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		pagination	:false,
     
    });
     
  $(".carsal").owlCarousel({
     
    autoPlay: 3000, //Set AutoPlay to 3 seconds
     items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
		pagination	:true,
     
    });
     
  $(".client_carsal_area").owlCarousel({
     
    autoPlay: 3000, //Set AutoPlay to 3 seconds
     items : 4,
        itemsDesktop : [1199,6],
		itemsTablet	:[768,4],
        itemsDesktopSmall : [979,6],
		pagination	:false,
     
    });

	
 

	  
	  });
	  
	 
  	 

