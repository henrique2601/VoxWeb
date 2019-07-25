var slides = $('.slide');
slides.first().before(slides.last());


function timeout() {
    setTimeout(function () {
        slides = $('.slide');
		var activeSlide = $('.active');
		slides.last().after(slides.first());
		activeSlide.removeClass('active').next('.slide').addClass('active');
        timeout();
    }, 3000);
}

timeout();