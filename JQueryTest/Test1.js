$(function(){
	$("#button_target").click(function(btn){
        $("#text_target").attr("value","Button clicked!");
        alert($("#text_target").attr("value"));
	});
})