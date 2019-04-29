    // alert("屏幕工作区宽度"+window.screen.width);
	 // alert("屏幕可用工作区宽度"+window.screen.availWidth);
	 // alert("窗口宽度"+window.innerWidth);
	 // alert("网页可见区域宽"+document.body.clientWidth);
	 // alert(" 网页正文全文宽"+document.body.scrollWidth)
  
function myonlode()
{
	if(window.innerWidth>768)
	{
	  setInterval("test()",1000); 
	}
	else
	{

	}
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
 

function test(){
	  //var yueqiu=document.getElementById("yueqiu");
	  //var curren_rorate =yueqiu.style.transform;

	  if (getScrollTop()>=300)
	  { 
	  	
	  	
	    $('#mytubg').css( {"position":"fixed","top":"0px"});
		$('#mydm').css( {"position":"relative","top":"60px"});
	
		//yueqiu.style.transform='rotateY('+(curren_rorate + 90)+'deg)';
	    //$('#textbg').fadeOut(1000);
	  }
	  else
	  {
	  
	    $('#mytubg').css( {"position":"relative","top":"0px"});
		$('#mydm').css( {"position":"absolute","top":"100px"});
		//$('#textbg').fadeIn(1000);
		//yueqiu.style.transform= 'rotateY('+(curren_rorate + 90)+'deg)';
	  }
	  
	  

}
