import * as $ from 'jquery';
import './modules/_header-menu'
import './modules/_legal-or-physical-popup';
import './libs/jquery.magnific-popup.min.js';
import './modules/_scrollHeader';
import './modules/_scrollTop';

const fileInput = document.querySelector('#file')
const fileInputFake = document.querySelector('.application-vacancy-popup__file-input-fake')

fileInput.addEventListener('change', function(){
	if( this.value ){
		fileInputFake.innerText = 'Файл выбран'
	} else {
		fileInputFake.innerText = 'Файл не выбран'
	}
  });

$(document).ready(function() {
    $('.application-vacancy-popup-link').magnificPopup({
        type: 'inline',
        preloader: false,
    });
	$('.gratitude-resume-popup-link').magnificPopup({
		type: 'inline',
		preloader: false,
	});
	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/php/mail.php", //Change
			data: th.serialize()
		}).done(function() {
            $('.mfp-close').trigger('click');
            $('.gratitude-resume-popup-link').trigger('click');
			setTimeout(function() {
				th.trigger("reset");
			}, 500);
		});
		return false;
	});

});

