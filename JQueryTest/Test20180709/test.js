$(function(){
	$("#test_div button:eq(0)").click(function(){
		$("#test_div>input").attr("value","you find me!");
	});
	$("#test_div button:eq(1)").click(function(){
		$("#test_div input").attr("value","you find me again!");
	});
	
});