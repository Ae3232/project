$(document).ready(function() {

	// mobile_menu //

	$('.header_btn').on('click', function() {
        $(this).toggleClass('close');
        $('.header_navigation').slideToggle('500');
    });
	$(window).on("load resize",function(event){
	 	var windowSize = $(window).width();
		if (windowSize < 1024) {
			$('.header_navigation').hide();
			$('.header_navigation-item').unbind('mouseenter mouseleave');
			$('.header_btn').removeClass('close');
			$('.header_navigation-item').not(".binded").addClass("binded").click(function () {
				$(this).children().first().toggleClass('open');
		        $(this).children().next().slideToggle();
		    });
		}
		else if (windowSize > 1024) {
			$('.header_submenu').attr("style", "");
			$('.header_navigation').show();
			$('.header_navigation-link').removeClass('open');
			$('.header_navigation-item').removeClass("binded").hover(function() {
				$(this).children().first().toggleClass('open');
		        $(this).children().next().toggleClass('hover');
		    });
		}
	});

	// submenu_close //

	var submenu = $(".header_submenu");

	$(document).mouseup('load resize', function (e) {
        if (!submenu.is(e.target)
            && submenu.has(e.target).length === 0) { 
            submenu.removeClass('hover')
        }
    });
    $(document).keydown(function(e){
        if (e.keyCode == 27) {
            submenu.removeClass('hover')
        }
    });
}); 