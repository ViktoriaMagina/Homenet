import * as $ from 'jquery';
import '../libs/jquery.magnific-popup.min.js'

$(document).ready(function() {
	$('.gratitude-resume-popup-link').magnificPopup({
		type: 'inline',
		preloader: false,
	});
});
