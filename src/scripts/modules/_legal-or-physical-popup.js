import * as $ from 'jquery';
import '../libs/jquery.magnific-popup.min.js'

$(document).ready(function() {
	$('.legal-or-physical-popup-link').magnificPopup({
		type: 'inline',
		preloader: false,
	});
});
