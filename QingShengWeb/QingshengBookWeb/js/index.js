var text;

window.onload=function(){

//var myw=window.innerWidth;
//var myh=window.innerHeight;
//alert("高"+myh+"宽"+myw);
//var w = document.documentElement.scrollWidth || document.body.scrollWidth;
//var h = document.documentElement.scrollHeight || document.body.scrollHeight;
//alert("高"+h+"宽"+w);


//var bg=document.getElementById("bg");
//bg.style.width=w;
//bg.style.height=h;


} 

function closemycontent()
{
	$('#mycontent').fadeOut(500);
	document.getElementById("mycontent").style.width="0px";
}

function openmycontent()
{
	
	$('#mycontent').fadeIn(200);
	document.getElementById("mycontent").style.width="100%";
}

function sign()
{
	
	$('#reg').fadeOut(0);
	$('#sign').fadeIn(200);
	openmycontent();
}


function reg()
{
	$('#sign').fadeOut(0);
	$('#reg').fadeIn(200);
	openmycontent();
}


function submitsign()
{
	openmytishiModal("登录成功！");
	$('#mysignli').fadeOut(0);
	$('#myregli').fadeOut(0);
	$('#mynameli').fadeIn(200);
	$('#mycontent').fadeOut(3000);
	setTimeout(closeopenmytishiModal,"1000");
}

function submitreg()
{
	openmytishiModal("注册成功！");
	$('#mytishiModal').modal();
	$('#mycontent').fadeOut(3000);
	setTimeout(closeopenmytishiModal,"1000");
}


function openmytishiModal(text)
{
	$('#mytishi').html(text);
	$('#mytishiModal').modal("show");
}

function closeopenmytishiModal()
{
	$('#mytishiModal').modal("hide");
}
