$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.navbar').toggleClass('active');
		$('body').toggleClass('lock');
	});
});