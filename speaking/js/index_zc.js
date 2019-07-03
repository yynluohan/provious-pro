function myCheck() {
			var form = document.getElementById("myForm");
			if(form.name.value == "") {
				alert("用户名不能为空");      //验证用户名是否为空
				form.name.focus();
				return false;
			}
			if(form.password1.value == "") {    //验证密码是否为空
				alert("密码不能为空");
				form.password1.focus();
				return false;
			}
			if(form.password2.value == "") {
				alert("第二个密码不能为空");   //验证第二个密码是否为空
				form.password2.focus();
				return false;
			}
			if(form.password2.value !== form.password.value) {   //验证两次输入的密码是否一致
				alert("两次输入的密码不同，请重新输入");
				form.password2.focus();
				return false;
			}
			if(form.name.value!==""&&form.name.value!=="") {
				var name = document.getElementById("name").value;
				var password1 = document.getElementById("password1").value;
				var password2 = document.getElementById("password2").value;
				if(password === password2) {
					var password = password;
					localStorage.setItem(name,password);
					alert("注册成功");location.href = "dl.html";
				}
			}

		}
