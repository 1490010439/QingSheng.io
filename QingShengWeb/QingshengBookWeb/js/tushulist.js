//window.onload(function()
//{
//	$('#test td').onClick(function(){
//		alert("1");
//	});
//});

var text;
function openmytishiModal(text)
{
	$('#mytishi').html(text);
	$('#mytishiModal').modal("show");
}

function closeopenmytishiModal()
{
	$('#mytishiModal').modal("hide");
}

function myxiugai()
{

	
	openmytishiModal("前往修改？<br/><br/><button class=\"mybutton\" style=\"width: 70px;height: 20px; \" >确认</button>");
	
	
	var a=$('table :checked').parents('tr');
	console.log(a);

}

function mydelete()
{
	openmytishiModal("删除成功！");
}


function myshousuo()
{
	openmytishiModal("没有搜到任何东西！！");
}