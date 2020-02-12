$(document).ready(function(){
	$(window).scroll(function(e){
		if($(this).scrollTop()>450) {
			$('.header_nav_wrp').attr("style", "height: 60px");
			$('.header_logo').attr("style", "font-size: 27px");
		} else {
			$('.header_nav_wrp').attr("style", "height: 80px");
			$('.header_logo').attr("style", "font-size: 37px");
		}
	});	
});