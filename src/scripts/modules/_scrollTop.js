import * as $ from 'jquery'

$(function(){
    $(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#header').addClass('fixed');
			$('#wrapper').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
			$('#wrapper').removeClass('fixed');
		}
	});
    $('#scrollToTop').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
})

