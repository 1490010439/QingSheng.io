
var myrizhiID;
function tiaoZhuang(myrizhiID)
{
	//alert(myrizhiID);
	
	 window.location.href="rizhiInfo.html?"+myrizhiID;
	
}



function initRiZhiList()
{
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
	    		
	    		  if(i<5)
	    		  {
	    		  	$('#myrizhilistDiv1').append(	
					  "<a href=\"#\" class=\"list-group-item\" onclick=\"tiaoZhuang("
					  +d.rizhiID
		    		  +")\">"
					  +"<font style=\"font-size: 18px;\">"
					  +d.rizhiTextHead
					  +"</font>"
					  +"<div class=\"mylitext\">"
					  +"<span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\" style=\"color: #C4E3F3;\">"
					  +"<font> "
					  +d.rizhiAuthor
					  +"</font>"
					  +"</span>"
					  +"<span class=\"glyphicon glyphicon-thumbs-up\" aria-hidden=\"true\" style=\"color: #C4E3F3;margin-left: 10px;\">"
					  +"<font> "
					  +d.rizhiZang
					  +"</font>"
					  +"</span>"
					  +"<span class=\"glyphicon glyphicon-time\" aria-hidden=\"true\" style=\"color: #C4E3F3;margin-left: 10px;\">"
					  +"<font> "
					  +d.rizhiTime
					  +"</font>"
					  +"</span>"
					  +"</div>"
					  +"</a>"
		    		);
	    		  }
	    		  else
	    		  {
	    		  	$('#myrizhilistDiv2').append(	
					  "<a href=\"#\" class=\"list-group-item\" onclick=\"tiaoZhuang("
					  +d.rizhiID
		    		  +")\">"
					  +"<font style=\"font-size: 18px;\">"
					  +d.rizhiTextHead
					  +"</font>"
					  +"<div class=\"mylitext\">"
					  +"<span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\" style=\"color: #C4E3F3;\">"
					  +"<font> "
					  +d.rizhiAuthor
					  +"</font>"
					  +"</span>"
					  +"<span class=\"glyphicon glyphicon-thumbs-up\" aria-hidden=\"true\" style=\"color: #C4E3F3;margin-left: 10px;\">"
					  +"<font> "
					  +d.rizhiZang
					  +"</font>"
					  +"</span>"
					  +"<span class=\"glyphicon glyphicon-time\" aria-hidden=\"true\" style=\"color: #C4E3F3;margin-left: 10px;\">"
					  +"<font> "
					  +d.rizhiTime
					  +"</font>"
					  +"</span>"
					  +"</div>"
					  +"</a>"
	    		  	 );
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


function searchRiZhi()
{

	//查询日志列表json
    $.ajax(
	 {
		 type: "GET",//请求方式为get
         dataType: "json", //返回数据格式为json
		 url:"data/rizhilist.json",
	     success:function(data)	
	     {  
	     	
	     	var falg=0;
	     	
	     	$.each(data.rizhilist,function(i,d){
	     	 	var mysearchInput=$("#searchInput").val();
	     	 	if(d.rizhiTextHead==mysearchInput||d.rizhiAuthor==mysearchInput||d.rizhiTime==mysearchInput)
	     	 	{
	     	 		$('#mySearchDivResult').append(	
					  "<a href=\"#\" class=\"list-group-item\" onclick=\"tiaoZhuang("
					  +d.rizhiID
		    		  +")\">"
					  +"<font style=\"font-size: 18px;\">"
					  +d.rizhiTextHead
					  +"</font>"
					  +"<div class=\"mylitext\">"
					  +"<span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\" style=\"color: #C4E3F3;\">"
					  +"<font> "
					  +d.rizhiAuthor
					  +"</font>"
					  +"</span>"
					  +"<span class=\"glyphicon glyphicon-thumbs-up\" aria-hidden=\"true\" style=\"color: #C4E3F3;margin-left: 10px;\">"
					  +"<font> "
					  +d.rizhiZang
					  +"</font>"
					  +"</span>"
					  +"<span class=\"glyphicon glyphicon-time\" aria-hidden=\"true\" style=\"color: #C4E3F3;margin-left: 10px;\">"
					  +"<font> "
					  +d.rizhiTime
					  +"</font>"
					  +"</span>"
					  +"</div>"
					  +"</a>"
	    		  	);
	     	 		//alert("标题："+d.rizhiTextHead+"作者："+d.rizhiAuthor+"时间："+d.rizhiTime);
	     	 		falg=1;

	     	 	}

	     	});
	     
	       //没收到东西
	        if(falg==0)
	        {
	        	$('#mytishiModal').modal();
	        }
	        else//搜索到东西打开界面
	        {
	        	$('#myzhezhao').fadeIn(200);
	     	 	$('#mySearchDiv').fadeIn(500).css( {"height":"75%"});	
	        }
	     

	     },
		 error:function()
		 {
			alert("日志列表查询失败！"); 
		 }
	 }
	 );
}


function closeSearchDiv()
{
	$('#myzhezhao').fadeOut(200);
	$('#mySearchDiv').fadeOut(500).css( {"height":"0px"});
}


function tiaobaidu()
{
	 var mysearchInput=$("#searchInput").val();
	 window.location.href="https://www.baidu.com/s?word="+mysearchInput;
}
