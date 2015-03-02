//this will create an alert after you click the button below//

$(document).ready(function(){
	$("#button").click(function(){
		alert("Are You Sure?");
	});
});


//trying to make the color change when the mouse hovers over the sentence//

$(document).ready(function(){
$("p").hover(function(){
	$("p").css("background-color", "blue");
	}, function(){
	$("p").css("background-color", "red");
	});
});

//Focus on button
$(document).ready(function(){
	$("input").focus(function(){
		$("span").css("display", "inline").fadeOut(2000);
	});
});

//time stamp
$(document).ready(function(){
	$("button").click(function(){
		$("span").text(event.timeStamp);
	});
});
