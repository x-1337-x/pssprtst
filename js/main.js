function toggleBurger(el) {
	el.classList.toggle('change');
}

$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		slideSpeed: 800,
		items: 1,
		responsiveClass: true,
		nav: false,
		loop: true,
		dots: true,
		autoplay: true
		// animateIn: true,
		// animateOut: true
	});
});
