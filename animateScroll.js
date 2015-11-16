// Sunmock Yang Nov. 2015

// To do:
// - animate
// - easing
// - padding

function animateScroll(element, easing) {
	var top = element.getBoundingClientRect().top;

	console.log(element);
	window.scrollTo(0, top);
}
