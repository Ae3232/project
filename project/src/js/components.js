function doScrolling(elementY, duration) { 
	var startingY = window.pageYOffset;
	var diff = elementY - startingY;
	var start;
	
	window.requestAnimationFrame(function step(timestamp) {
		if (!start) start = timestamp;
		var time = timestamp - start;
		var percent = Math.min(time / duration, 1);

		window.scrollTo(0, startingY + diff * percent);
		if (time < duration) {
			window.requestAnimationFrame(step);
		}
	})
}

document.addEventListener('DOMContentLoaded', () => {
	let button = document.querySelector('.js-arrow');

	document.addEventListener('click', (button) => {
		doScrolling(window.innerHeight, 400);
	});
});