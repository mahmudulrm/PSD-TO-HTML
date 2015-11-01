
(function ( $ ) {

    $.fn.scroll_navi = function(options) {
        
        var defaults = {
            speed        : 1000
        };
        
        var settings = $.extend( {}, defaults, options );
        
        return this.each( function() {
            var win = $( window );
            var elem = $( this );
            var elem_a = "#"+elem.attr("id")+" a";
            var wh = win.height();
            wh=wh-(wh-200);
            elem.css("top","px");
            
            $(elem_a).click(function(event){
				var link_outerpage = $(this).attr("data-outerpage");
				if(link_outerpage=='true')
				{
					console.log("this is outerpage link");	
				}
				else{
                event.preventDefault();
					var link_add = $(this).attr("href");
					var pos = $(link_add).offset().top;
					$('html, body').animate({scrollTop: pos}, settings.speed);
					
				}
            });
            
            win.scroll(function() {
                var topvalue = win.scrollTop();
                if(wh<=(topvalue-200))
                {
                    $(elem).css({"position":"fixed","top":"0px","opacity":".9","z-index":"999"});
					$('.header_area').addClass('stick');
					$('.header_area').addClass('stick');
					$('.slicknav_menu').addClass('ab');
					$('.ab').css({"position":"fixed","top":"0px","opacity":".9", "z-index":"999"});
					
				}
                else if(wh<=topvalue|| wh<=topvalue-198)
				{
                    $(elem).css({"position":"relative","top":"px","opacity":".9"});
					$('.header_area').addClass('slow_motion');				
					$('.ab').addClass('slow_motion');				
					$('.slow_motion').css({"position":"relative","top":"px","opacity":".9"});		
					
                
				}else{
                    $(elem).css({"position":"relative","top":"px","opacity":"100","z-index": "999"});
												
					$('.header_area').removeClass('stick');	
					$('.header_area').removeClass('slow_motion');							
					$('.slicknav_menu').removeClass('ab');	
					$('.slicknav_menu').removeClass('slow_motion');	
					$('.slicknav_menu').css({"position":"relative","top":"px","opacity":"100","z-index":"999",});
					
                }
            });
            
        });
    };
 
}( jQuery ));
