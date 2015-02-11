


$(document).ready(function() {
	//$('body').mouseenter(function(){
	//	alert("works");
	//});
	var color = $('.okitem li').css('background-color');

	$('.okitem').click(function() {
		
		//$(this).css("background-color", (color == "red") ? "green": "")
		
		if(color == "green") {
      		$(this).css("background-color", "red");
			$(this).siblings().css('text-decoration', '');
		} else {
			$(this).css("background-color", "green");
			$(this).siblings().css('text-decoration', 'line-through');		}
    });	



});




// lkjkladjfl

