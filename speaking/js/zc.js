function myCheck(myForm) {
	var myForm = document.getElementById("form");
	if(myForm.name.value == "") {
		alert("用户名不能为空");      //验证用户名是否为空
		myForm.name.focus();
		return false;
	}
	if(myForm.password.value == "") {    //验证密码是否为空
	    alert("密码不能为空");
		myForm.password.focus();
		return false;
	}
	if(myForm.password2.value=="") {
		alert("第二个密码不能为空");   //验证第二个密码是否为空
		myForm.password2.focus();
		return false;
	}
	if(myForm.password2.value !== myForm.password.value) {   //验证两次输入的密码是否一致
		alert("两次输入的密码不同，请重新输入");
		myForm.password2.focus();
		return false;
	}
	if(myForm.name.value !== ""&&myForm.name.value !== "") {
		var name = document.getElementById("name").value;
		var password = document.getElementById("password").value;
		var password2 = document.getElementById("password2").value;
		if(password == password2){
			var password3=password;
			localStorage.setItem(name,password3);
			alert("注册成功");location.href="dl.html";
		}
	}
			
}	
		