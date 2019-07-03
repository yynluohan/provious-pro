"use strict";
//页面刷新一次时执行getTimes()函数
window.onload=function() {
	getTimes();
}
//获取系统时间
function getTimes() {
	var time = new Date(),
	year = time.getFullYear(),
		month = getChreakTime(time.getMonth() + 1),
		date = getChreakTime(time.getDate()),
		hours = getChreakTime(time.getHours()),
		minutes = getChreakTime(time.getMinutes()),
		day = time.getDay(),
		dayStr;
function getChreakTime(v) {
	var s = v.toString();
	if (s.length > 1) {
		return s;
	} else {
		return '0' + s;
	}
}
switch(day) {
	case 0: dayStr = "星期天"; break;
	case 1: dayStr = "星期一"; break;
	case 2: dayStr = "星期二"; break;
	case 3: dayStr = "星期三"; break;
	case 4: dayStr = "星期四"; break;
	case 5: dayStr = "星期五"; break;
	case 6: dayStr = "星期六"; break;
	default: dayStr = "输入错误";
}
var valueTime = year + '/' + month + '/' + date + ' ' + hours + ':' + minutes + '<br>' + dayStr;
	document.getElementById("time").innerHTML = valueTime;
}



//此处为jquery
$(document).ready(function(){
	//设置鼠标移动或移出.dt1时.ol1的变化
	$(".dt1").mouseenter(function(){
		$(".ol1").show();
		$(this).css("background-color","#111");
	})
	$(".dt1").mouseleave(function(){
		$(".ol1").hide();
		$(this).css("background-color","#996633");
	})


	$(".dt2").mouseenter(function(){
		$(".ol2").show();
		$(this).css("background-color","#111");
	})
	$(".dt2").mouseleave(function(){
		$(".ol2").hide();
		$(this).css("background-color","#996633");
	})


	$(".dt3").mouseenter(function(){
		$(".ol3").show();
		$(this).css("background-color","#111");
	})
	$(".dt3").mouseleave(function(){
		$(".ol3").hide();
		$(this).css("background-color","#996633");
	})

	$(".dt4").mouseenter(function(){
		$(".ol4").show();
		$(this).css("background-color","#111");
	})
	$(".dt4").mouseleave(function(){
		$(".ol4").hide();
		$(this).css("background-color","#996633");
	})

	$(".dt5").mouseenter(function(){
		$(".ol5").show();
		$(this).css("background-color","#111");
	})
	$(".dt5").mouseleave(function(){
		$(".ol5").hide();
		$(this).css("background-color","#996633");
	})

	$(".dt6").mouseenter(function(){
		$(".ol6").show();
		$(this).css("background-color","#111");
	})
	$(".dt6").mouseleave(function(){
		$(".ol6").hide();
		$(this).css("background-color","#996633");
	})

	$(".ol1 li,.ol2 li,.ol3 li,.ol4 li,.ol5 li,.ol6 li").hover(
		function() {
			$(this).css("background-color","#456");
		},
		function() {
			$(this).css("background-color","#111")
		}
	)

});

// //读取文章
// var xhl = new XMLHttpRequest();
// xhl.onreadystatechange = function() {
//     if (xhl.readyState === 4) {//数据处理完成
//         if ((xhl.status >= 200 && xhl.status < 300) || xhl.status == 304) {//状态码在[200,300)之间或状态码为304都表示请求成功
//             alert(xhl.responseText);
//         } else {
//             alert("Error: " + xhl.status);
//         }
//     }
// }
//
// xhl.open("GET","./docx.javascript.docx");
// xhl.send();
