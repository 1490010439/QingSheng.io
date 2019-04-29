
var mytext;
function OpenToshi(mytext)
{
	$('#myWebToshi').removeClass('bounceOutDown');
	$('#myWebToshi').fadeIn();
	$("#myWebToshiText").html(mytext);
}

function CloseToshi()
{

	$('#myWebToshi').addClass('animated bounceOutDown');
	$("#myWebToshi").fadeOut();
}
