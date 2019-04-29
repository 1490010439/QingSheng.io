var photoId;

function openPhotoLiebiao()
{
	$("#myphotolunbo").fadeOut();
	$("#myliebiaocontrol").fadeOut();
	$("#mylunbocontrol").fadeIn();
	$("#myphotoliebiao").fadeIn();
	
}



function openPhotoLunbo()
{
	$("#myphotoliebiao").fadeOut();
	$("#mylunbocontrol").fadeOut();
	$("#myphotolunbo").fadeIn();
	$("#myliebiaocontrol").fadeIn();
}


function closemyphotodiv()
{
  $("#myphotodiv").fadeOut();
}


function openmyphotodiv(photoId)
{
  $("#myphotodiv").fadeIn();
}


var photoId=0;
function jinruphotoadd(photoId)
{
	//alert(photoalbumId);
	window.location.href="photoadd.html?"+photoId;
}
