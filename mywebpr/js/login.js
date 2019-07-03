"use strict";
var myForm = document.getElementById("myForm");
function myCheck() {
  var name = document.getElementById("username");
  var p_word = document.getElementById("password");
  //检验用户名是否为空
  if(name.value === "") {
    alert("用户名不能为空");
    name.focus();
    return false;
  }
  //检测密码是否为空
  if(p_word.value === "") {
    alert("密码不能为空");
    p_word.focus();
    return false;
  }
  if(name.value !== "" && p_word.value !== "" ) {
    var name = name.value;
    var password = p_word.value;
    for(var i= 0; i < localStorage.length; i++){
      if(localStorage.key(i) === String(name)){
        var result_password = localStorage.getItem(name);
        if(String(password) === result_password) {         //将数字转化为字符串，因为web存储键/值都是字符串
          alert("登录成功");
          location.href="./index.html";
        }else{
          p_word.focus();
          alert("用户名或密码输入不正确，请重新输入");
          return false;
        }
      }
    }
  }
}
var zuce_but = document.getElementById("but2");
zuce_but.onclick = function() {
  location.href = "./zc.html";
}
