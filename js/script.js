$(document).ready(function(){

	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		navText: "",
		loop: true
	});
	
});

$(window).scroll(function() {

	if($(this).scrollTop() >= 300) {
		$(".header-top2").addClass("header-visible");
	}
	else{
		$(".header-top2").removeClass("header-visible");
	}

});