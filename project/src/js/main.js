$(document).ready(function() {
	$(".intro_arrow").click(function() {
	    $([document.documentElement, document.body]).animate({
	        scrollTop: $(".sorting").offset().top
	    }, 700);
	});
});