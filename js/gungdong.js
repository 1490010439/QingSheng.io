    // alert("屏幕工作区宽度"+window.screen.width);
	 // alert("屏幕可用工作区宽度"+window.screen.availWidth);
	 // alert("窗口宽度"+window.innerWidth);
	 // alert("网页可见区域宽"+document.body.clientWidth);
	 // alert(" 网页正文全文宽"+document.body.scrollWidth)
  
window.onload=function(){
		speed=50;
		var timer= window.setInterval(pd,speed);
}

var flage=0;

function pd()
{
	//滚轮当前高度
	var myheight=getScrollTop();
	//如果滚轮滚到底
	var a2=document.body.clientHeight-document.documentElement.clientHeight;
 

	
	if(myheight>=a2&&flage==0)
	{
		
		OpenToshi("正在加载");
		setTimeout(addDiv,2000);
	    flage=1;
	}
	
	//滚轮当前宽度
	var mywidth=window.innerWidth;
	
	if(mywidth<=600)
	{
		if(myheight>2200)
		{
			$("#myimg").attr('src',"img/phonebg2.jpg"); 
		}
		else if(myheight>1000)
		{
			$("#myimg").attr('src',"img/phonebg1.jpg"); 
		}
		else
		{
			$("#myimg").attr('src',"img/phonebg.jpg"); 	
		}
		
	

	}else
	{
		
		if(myheight>=0&&myheight<600)
		{
			$("#myimg").attr('src',"img/xinbg01.jpg"); 
		}
		else if(myheight>=600&&myheight<=2044)
		{
			$("#myimg").attr('src',"img/xinbg03.jpg"); 
		}
		else 
		{
			$("#myimg").attr('src',"img/xinbg6.jpg"); 
		}
		
		
		
	}

}


function addDiv()
{
	$("body").append("<div style=\"background:#FBFBFB;background-size:100% 100% ;width: 100%; height: 300px;\"><h4 id=\"jmeter\"></h4><div></div></div>");
    CloseToshi();
}

function getScrollTop()
 {
     var scrollTop=0;
     if(document.documentElement&&document.documentElement.scrollTop)
     {
         scrollTop=document.documentElement.scrollTop;
     }
     else if(document.body)
     {
         scrollTop=document.body.scrollTop;
     }
     return scrollTop;
	
 }
 
/********************
 * 取窗口可视范围的高度 
*******************/
 function getClientHeight()
 {
     var clientHeight=0;
     if(document.body.clientHeight&&document.documentElement.clientHeight)
     {
         var clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;        
    }
     else
     {
         var clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;    
    }
     return clientHeight;
 }
 /********************
 * 取文档内容实际高度 
*******************/
 function getScrollHeight()
 {
     return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
 }
 
