var stack = ''

$(document).ready(function() {
	$(".time").text(get_time())
	var num = Math.floor(Math.random() * 50)
	$('body').css("background-image", "url('./img/i (" + num + ").jpg')");

	$(".hi").keydown(function(e) {
		var value = String.fromCharCode(e.keyCode);
		alert(value)
		$(".time").animate({
			left: '-50%',
		}, 500);
	});
});
