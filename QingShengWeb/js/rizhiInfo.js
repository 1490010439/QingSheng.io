

function initRiZhi()
{
	
//	var mytexthead=$("#mytexthead").text();
//	var myrizhiauthor=$("#myrizhiauthor").text();
//	var myrizhitext=$("#myrizhitext").text();
//	var myrizhizang=$("#myrizhizang").text();
//	var myrizhitime=$("#myrizhitime").text();
//	alert(mytexthead);	
//	alert(myrizhiauthor);
//	alert(myrizhitext);
//	alert(myrizhizang);
//	alert(myrizhitime);
	

	//查询日志列表json
    $.ajax(
	 {
		 type: "GET",//请求方式为get
         dataType: "json", //返回数据格式为json
		 url:"data/rizhilist.json",
	     success:function(data)	
	     {  
	    	 $.each(data.rizhilist,function(i,d){
	    		//alert(d.rizhiTextHead);
	    		
	    		 var myURL=window.location.href;
				 var myrizhiid=myURL.split("?")[1];
				    //alert(myrizhiid);
				    
				    if(myrizhiid==d.rizhiID)
				    {
							$("#mytexthead").text(d.rizhiTextHead);
							$("#myrizhiauthor").text(d.rizhiAuthor);
							$("#myrizhitext").text(d.rizhiText);
							$("#myrizhizang").text(d.rizhiZang);
							$("#myrizhitime").text(d.rizhiTime);									    	
				    }
	    	
	    		
	    					
	    	 });
         
	     },
		 error:function()
		 {
			alert("日志列表查询失败！"); 
		 }
	 }
	 );
	 
}
