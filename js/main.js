var showCase = function() {

	$('.showcase p').hide();
	$('.showcase').click(function() {
		$('p', this).slideToggle(400);
	});
};

$(document).ready(showCase);