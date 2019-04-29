function closemean()
{
		$('#mymeancenter').fadeOut(200);
	  $('#mymean').css( {"width":"0px"}).fadeOut(2000);
	  $('#zhezhao').css( {"width":"0px"}).fadeOut(1000);

}


function openmean()
{
	 
	  $('#zhezhao').fadeIn(500).css( {"width":"100%"});
	  $('#mymean').fadeIn(1000).css( {"width":"150px"});
	  $('#mymeancenter').fadeIn(200);
}
