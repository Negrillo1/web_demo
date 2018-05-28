function checkf(){
	var username = myform.username.value;
	var password = myform.password.value;
	var a = "aaa";
	var b = "bbb";
	if(username==""||username==null){
		document.getElementById("username").style.border=" 1px solid red";
		alert("用户名不能为空");
	}
	else if(password==""||username==null)
	{
		document.getElementById("password").style.border=" 1px solid red";
		alert("密码不能为空");
	}
	else if(username==a&&password==b){
		window.location.href="index.html";
	}
	else{
		alert("用户名或密码错误，请重新输入！！");
	}
}
function resgister(){
	window.location.href="register.html";
}
function resetborder(){
	document.getElementById('password').style.border=" 1px solid #DDDDDD";
	document.getElementById('username').style.border=" 1px solid #DDDDDD";
}