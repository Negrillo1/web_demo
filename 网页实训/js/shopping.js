
function cal(){
	var price = 999;
	var sum_1 = 0;
	var sum_2 = 0;
	var num = document.getElementById("num").value;
	var price_2 = document.getElementById("price_2").value;
	sum_1 = num*price;
	sum_2 = num*price+parseFloat(price_2);
	document.getElementById("price_1").value=sum_1.toString();
	document.getElementById("price_sum").value=sum_2.toString();
}
function deleted(){
	if(confirm("确定要删除吗？")){
		document.getElementById("left").style.display="none";
	}
	document.getElementById("price_1").value=0;
	document.getElementById("tr_sum").style.display="none";
}
function fav(){
	window.location.href="fav.html";
}