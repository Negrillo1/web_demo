function show(id){
	document.getElementById(id).style.display="block";
}
function noshow(id){
	document.getElementById(id).style.display="none";
}
$(document).ready(function(){
	$("#li_1").mouseenter(function(){
		show("menu_1");
	})
	$("#li_1").mouseleave(function(){
		noshow("menu_1");
	})
	$("#menu_1").mouseenter(function(){
		show("menu_1");
	})
	$("#menu_1").mouseleave(function(){
		noshow("menu_1");
	})
	$("#li_2").mouseenter(function(){
		show("menu_2");
	})
	$("#li_2").mouseleave(function(){
		noshow("menu_2");
	})
	$("#menu_2").mouseenter(function(){
		show("menu_2");
	})
	$("#menu_2").mouseleave(function(){
		noshow("menu_2");
	})
	$("#li_3").mouseenter(function(){
		show("menu_3");
	})
	$("#li_3").mouseleave(function(){
		noshow("menu_3");
	})
	$("#menu_3").mouseenter(function(){
		show("menu_3");
	})
	$("#menu_3").mouseleave(function(){
		noshow("menu_3");
	})
	$("#li_4").mouseenter(function(){
		show("menu_4");
	})
	$("#li_4").mouseleave(function(){
		noshow("menu_4");
	})
	$("#menu_4").mouseenter(function(){
		show("menu_4");
	})
	$("#menu_4").mouseleave(function(){
		noshow("menu_4");
	})
	$("#li_5").mouseenter(function(){
		show("menu_5");
	})
	$("#li_5").mouseleave(function(){
		noshow("menu_5");
	})
	$("#menu_5").mouseenter(function(){
		show("menu_5");
	})
	$("#menu_5").mouseleave(function(){
		noshow("menu_5");
	})
	$("#li_6").mouseenter(function(){
		show("menu_6");
	})
	$("#li_6").mouseleave(function(){
		noshow("menu_6");
	})
	$("#menu_6").mouseenter(function(){
		show("menu_6");
	})
	$("#menu_6").mouseleave(function(){
		noshow("menu_6");
	})
})