import * as $ from 'jquery';
import '../libs/jquery.magnific-popup.min.js'

$(document).ready(function() {
	$('.choose-tariff-popup-link').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#fio',
	});
});

