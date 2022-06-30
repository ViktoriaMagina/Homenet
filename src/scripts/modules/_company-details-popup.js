import * as $ from 'jquery';
import '../libs/jquery.magnific-popup.min.js'

$(document).ready(function() {
	$('.company-details-popup-link').magnificPopup({
		type: 'inline',
		preloader: false,
	});
});

