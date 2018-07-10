$(function(){
	$("#button_target").click(function(btn){
        $("#text_target").attr("value","Button clicked!");
        alert($("#text_target").attr("value"));
	});
	$("#test_button").click(function(){
		// if($("#test_div>input").length>0)
		// 	alert(1);
		// else
		// 	alert(2);
		alert(1);
		$("#test_div").child("input").value="123";
	});
})