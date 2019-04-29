function addRiZhi()
{
	var editor = UE.getEditor('contents');
    var mytext=editor.body.innerHTML;
    //console.log(editor);
	//console.log(mytext);
	var myTextHead=$("#myTextHead").val();
	var myAuthor=$("#myAuthor").val();
	
	$("#tishitext").html("\n标题:"+myTextHead+"\n作者:"+myAuthor+"\n内容:"+mytext);
	
	mytext=zhuangyi(mytext); 

	
	$('#mytishiModal').modal();
	

}
var str;
var sHtml;
function escape2Html(str) { 
 var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'}; 
 return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];}); 
} 


function html2Escape(sHtml) { 
 return sHtml.replace(/[<>&"]/g,function(c){return {'<':'<','>':'>','&':'&','"':'"'}[c];}); 
} 


function zhuangyi(str){
	 str = str.replace(/\\\"/g,'\\\\\*');
     str=str.replace(/\"/g,'\\"');
     //str = str.replace('&','\\&');

     //alert(str);
     //console.log(str);
     
     //$('<div>').text('<a>').html()
     // 结果：&lt;a&gt;
     
	//   var a=$('<div>').text('asdasdasd').html();
	//   alert(a);

	//$('<div>').html('&lt;a&gt;').text()
	//结果：<a>
	
	//	var b=$('<div>').text('asdasdasd').html();
	//  alert(b);
	return str;
}
