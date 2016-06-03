$(document).ready(function() {
	$('.rec').click(function() {
		$('.rec').css('transform', 'rotateY(360deg)');
		setTimeout(function() {
			$('.rec').css('transform', 'rotateY(0deg)');
		}, 1000);
	}); //end .rec.click
}); // end .ready