

			

$(document).ready(function(){
	$('#nav').slicknav();
	 $("#responsive-video").fitVids();
	 
	$(document).ready(function() {
	$('#nav').onePageNav();
});
  $('.paralax_area').parallax("50%", 0.1);
   
   $(".map_batton_s").click(function(){
    $('.map_area').removeClass('hide').addClass('show');
    $('.map_batton_s').addClass('h');
    $('.map_batton_h').addClass('h');
   // $('.map_batton_h').css({"transform":"translateX(-100%)"});
  });
  $(".map_batton_h").click(function(){
    $('.map_area').removeClass('show').addClass('hide');
    $('.map_batton_s').removeClass('h');
    $('.map_batton_h').removeClass('h');
	// $('.map_batton_h').css({"transform":"translateX(0%)"});
  });
  
  
  
$(function () {
    $.scrollUp({
	scrollText: '<i class="fa fa-angle-up"></i>',
	});
	});

    $('.container').addClass('animatedParent');          
        
       $('.four_img').addClass('animated swing');        
	 $('.progest_big').addClass('animated swing');          
   $('.single_header h2').addClass('animated rollIn');          
   $('.single_service h3').addClass('animated wobble');
});

				var revapi;

				jQuery(document).ready(function() {

					   revapi = jQuery('.fullwidthbanner-container').revolution(
						{
							delay:9000,
							startwidth:1170,
							startheight:500,
							hideThumbs:10,
							fullWidth:"on",
							forceFullWidth:"on"

						});

				});	//ready
