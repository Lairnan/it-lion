var timeoutval = 1500;

$(window).on('load', function () {
	window.setTimeout(function() {
	    $('body').addClass('loaded_hiding');
	    window.setTimeout(function() {
	    	$('body').addClass('loaded');
	    	$('body').removeClass('loaded_hiding');
	    	$('body').removeClass('fixed');
	    }, 200);
	}, timeoutval+200);
});
$(document).ready(function() {
	var progressbar = $('#progressbar'),
		max = progressbar.attr('max'),
		time = timeoutval/max,
		value = progressbar.val();
	var loading = function() {
		value += 1;
		addValue = progressbar.val(value);
		$('.progress-value').html(value + '%');
		if (value == max) {
			clearInterval(animate);
		}};
	var animate = setInterval(function() {
		loading();
	}, time);
});

$(window).on("scroll", function() {
	if ($(window).scrollTop() > 125) $('.hblock').addClass('fixed');
	else $('.hblock').removeClass('fixed');
});