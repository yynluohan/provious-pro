"use strict";
function check(){
  var myForm = document.getElementById("myForm");
  var name = document.getElementById("username");
  var p_word1 = document.getElementById("password1");
  var p_word2 = document.getElementById("password2");
    //检验用户名是否为空
  if(name.value === "") {
    alert("用户名不能为空");
    name.focus();
    return false;
  }
    //检测密码是否为空
  if(p_word1.value === "") {
    alert("密码不能为空");
    p_word1.focus();
    return false;
  }
    //检验第二个密码是否为空
  if(p_word2.value === "") {
    alert("请再次确认密码");
    p_word2.focus();
    return false;
  }
    //检验两次输入的密码是否一致
  if(p_word1.value !== p_word2.value) {
   alert("两次输入的密码不一致，请重新输入");
    p_word2.focus();
    return false;
  }
    //如果两次输入的密码一致，则储存起来
  if((name.value !== "" )&& ( p_word1.value !== "" )&& (p_word1.value !== "")) {
  	var name = name.value;
  	var password1 = p_word1.value;
  	var password2 = p_word2.value;
  	if(password1 == password2){
  		var password3=password1;
  		localStorage.setItem(name,password3);
  		alert("注册成功");location.href = dl.html;
  	}
	}

}
