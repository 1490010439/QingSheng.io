
function OpenMaincontext()
{
	$("#startButton").fadeOut(100);
	$("#Maincontext").fadeIn(1000);
	
}

function OpenSilderMean()
{
	$("#ZhengZhao").fadeIn(50);
	$("#SilderMean").fadeIn(100).css({"width":"200px"});
}

function CloseSilderMean()
{
	$("#SilderMean").css({"width":"0px"}).fadeOut(500);
	$("#ZhengZhao").fadeOut(50);
	
}
var mytext;

function openmainDIV(mytext)
{
	//登录
	if(mytext==1)
	{
		CloseSilderMean();
		$("#mainIMG").fadeOut();
		$("#regform").fadeOut();
		$("#myfenlei").fadeOut();
		$("#mybookdesk").fadeOut();
		$("#mypaihan").fadeOut();
		$("#myjieyue").fadeOut();
		$("#mainDIV").css({'background':'url(./img/loginbg.gif)'});
		$("#mainDIV").fadeIn();
		$("#loginform").fadeIn();
	}
	
	if(mytext==2)
	{
		//注册
		CloseSilderMean();
		$("#mainIMG").fadeOut();
		$("#loginform").fadeOut();
		$("#myfenlei").fadeOut();
		$("#mybookdesk").fadeOut();
		$("#mypaihan").fadeOut();
		$("#myjieyue").fadeOut();
		$("#mainDIV").css({'background':'url(./img/regbg.gif)'});
		$("#mainDIV").fadeIn();
		$("#regform").fadeIn();
	}
	
	if(mytext==3)
	{
		//书架
		CloseSilderMean();
		$("#mainIMG").fadeOut();
		$("#loginform").fadeOut();
		$("#regform").fadeOut();
		$("#myfenlei").fadeOut();
		$("#mypaihan").fadeOut();
		$("#myjieyue").fadeOut();
		$("#mainDIV").css({'background':'#FFF'});
		$("#mainDIV").fadeIn();
		$("#mybookdesk").fadeIn();
		
	}
	if(mytext==4)
	{
		//分类
		CloseSilderMean();
		$("#mainIMG").fadeOut();
		$("#loginform").fadeOut();
		$("#regform").fadeOut();
		$("#mybookdesk").fadeOut();
		$("#mypaihan").fadeOut();
		$("#myjieyue").fadeOut();
		$("#mainDIV").css({'background':'#FFF'});
		$("#mainDIV").fadeIn();
		$("#myfenlei").fadeIn();
		
	}
	if(mytext==5)
	{
		//分类
		CloseSilderMean();
		$("#mainIMG").fadeOut();
		$("#loginform").fadeOut();
		$("#regform").fadeOut();
		$("#mybookdesk").fadeOut();
		$("#myfenlei").fadeOut();
		$("#myjieyue").fadeOut();
			$("#mainDIV").css({'background':'#FFF'});
		$("#mainDIV").fadeIn();
		$("#mypaihan").fadeIn();
		
	}
	if(mytext==6)
	{
		//分类
		CloseSilderMean();
		$("#mainIMG").fadeOut();
		$("#loginform").fadeOut();
		$("#regform").fadeOut();
		$("#mybookdesk").fadeOut();
		$("#mypaihan").fadeOut();
		$("#myfenlei").fadeOut();
		$("#mainDIV").css({'background':'url(./img/loginbg.gif)'});
		$("#mainDIV").fadeIn();
		$("#myjieyue").fadeIn();
		
	}
	
}

function login()
{
	OpenToshi("登录成功");
	setTimeout(openZhuYe,2000);
}

function reg()
{
	OpenToshi("注册成功");
	setTimeout(openZhuYe,2000);
}


function OpenToshi(mytext)
{
	$('#Toshi').removeClass('bounceOutDown');
	$('#Toshi').fadeIn();
	$("#ToshiText").html(mytext);
}

function CloseToshi()
{

	$('#Toshi').addClass('animated bounceOutDown');
	$("#Toshi").fadeOut();
}

function openZhuYe()
{
	CloseToshi();
	$("#mainDIV").fadeOut();
	$("#mainIMG").fadeIn();
}


function regyanzheng()
{
	var regUserID=$("#regUserID").val();
	var regUserPassword=$("#regUserPassword").val();
	var regUserPhone=$("#regUserPhone").val();
	var regYanZhengMa=$("#regYanZhengMa").val();
	
	$.trim(regUserID);
	$.trim(regUserPassword);
	$.trim(regUserPhone);
	$.trim(regYanZhengMa);
	
	
	if(regYanZhengMa==520)
	{
		CloseToshi();
	}
	else
	{
		OpenToshi("验证码错误！");
	}
	
	
	if(regYanZhengMa.length==0)
	{
		OpenToshi("验证码不能为空！");
	}
	
	if(regUserPhone.length==0)
	{
		OpenToshi("手机号不能为空！");
	}
	
	if(regUserPassword.length==0)
	{
		OpenToshi("密码不能为空！");
	}
	
	if(regUserID.length==0)
	{
		OpenToshi("账号/学号不能为空！");
	}
	
}

function loginyanzheng()
{
	var loginUserID=$("#loginUserID").val();
	var loginUserpassword=$("#loginUserpassword").val();
	
	$.trim(loginUserID);
	$.trim(loginUserpassword);
	
	if(loginUserpassword.length==0)
	{
		OpenToshi("密码不能为空！");
		
	}
	else
	{
		CloseToshi();
	}
	
	
	if(loginUserID.length==0)
	{
		OpenToshi("账号/学号不能为空！");
	}

	
}
