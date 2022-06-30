import * as $ from 'jquery';
import './modules/_header-menu'
import './modules/_legal-or-physical-popup';
import './libs/jquery.magnific-popup.min.js'
import './modules/_scrollHeader';
import './modules/_scrollTop';

$(document).ready(function() {
	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/php/mail.php", //Change
			data: th.serialize()
		}).done(function() {
            $('.gratitude-application-popup-link').magnificPopup({
                type: 'inline',
                preloader: false,
            });
            $('.gratitude-application-popup-link').trigger('click');
            $('#application-close').click(function(){
                $('.mfp-close').trigger('click');
            })
			setTimeout(function() {
				th.trigger("reset");
			}, 500);
		});
		return false;
	});

});