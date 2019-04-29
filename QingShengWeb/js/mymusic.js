function closemean()
{
	  $('#musicmeancenter').fadeOut(500);
	  $('#musicmymean').css( {"width":"0px"}).fadeOut(2000);
	  $('#musiczhezhao').css( {"width":"0px"}).fadeOut(1000);
	  
}


function openmean()
{
	  $('#musiczhezhao').fadeIn(500).css( {"width":"100%"});
	  $('#musicmymean').fadeIn(1000).css( {"width":"200px"});
		$('#musicmeancenter').fadeIn(1000);
}

function initMusicList()
{
	//查询音乐列表json
    $.ajax(
	 {
		 type: "GET",//请求方式为get
     dataType: "json", //返回数据格式为json
		 url:"data/musiclist.json",
	     success:function(data)	
	     {  

	    	 $.each(data.musiclist,function(i,d){

	    		    // alert(d.musicName);

	    				$('#musiclist').append(
	    					"<li class=\"list-group-item\" style=\"font-size: 10px;\">"

		    				+" <button class=\"badge\" onclick=\"MusicListPlay("
		    				+i
		    				+")\">"
								+"<span class=\"glyphicon glyphicon-play\" aria-hidden=\"true\"></span>" 
								+"</button>" 
							  +"<input class=\"mymusicListName\" id=\"musicListName"
							  +i
							  +"\" type=\"text\" readonly=\"true\" value=\""
							  +d.musicName
							  +"\"/>"
							  +"<input id=\"musicListUrl"
							  +i
							  +"\" type=\"hidden\"" 
							  +"value=\""
							  +d.musicUrl
							  +"\"/>"
							  +"</li>"
	    				);
	    			    		 
	    	 });
         
	     },
		 error:function()
		 {
			alert("音乐列表查询失败！"); 
		 }
	 }
	 );
	 
}


var myMusicListId=0;
function MusicListPlay(myMusicListId)
{
	
	var musicListName=$("#musicListName"+myMusicListId).val();
	var musicListUrl=$("#musicListUrl"+myMusicListId).val();
	

//alert(musicListName);
//alert(musicListUrl);
//	alert("播放"+myMusicListId+"成功");

  document.getElementById("musicvoid").pause();
	document.getElementById("musicvoid").currentTime=0;	
	document.getElementById("jindutiao").style.width="0";
	document.getElementById("musicvoid").src=musicListUrl;
	document.getElementById("musicName").innerHTML=musicListName;
	document.getElementById("musicgechi").innerHTML="第"+myMusicListId+"首歌";
	window.clearInterval(timer1);
	
		
	//把字符串转为数字
	myMusicListId=parseInt(myMusicListId);
	//更新当前下标
	$("#musicindex").val(myMusicListId);
	
	startmusic();
	document.getElementById("musicvoid").play();

	
}


function getElementsByClassName(n) {

    var classElements = [],allElements = document.getElementsByTagName('div');//所有div

    for (var i=0; i< allElements.length; i++ )

   {

       if (allElements[i].className == n ) {

           classElements[classElements.length] = allElements[i];

        }

   }

  alert(classElements.length);

   return classElements;

}