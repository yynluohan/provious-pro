	$(function() {
		$("#left1 ul li,#left2 ul li,#dongtai ul li").hover(
			function(){
				$(this).css("background-color","#456");
			},                                             //设置#left1中li颜色变化
			function(){                  
				$(this).css("background-color","#111");
			}
		);
		$("#midden1-1 span").mouseenter(function(){        
			$("#dongtai").show()
		});
		$("#dongtai ul").mouseleave(function(){
			$("#dongtai").hide()
		});
		$(".li2").hover(                    //设置鼠标移动或离开时，ol2的展示与隐藏
			function(){
				$(".iten2").show()
			},
			function(){
				$(".iten2").hide()
			}
		);
		$(".li3").hover(                  //设置鼠标移动或离开时，ol3的展示与隐藏
			function(){
				$(".iten3").show()
			},
			function(){
				$(".iten3").hide()
			}
		);
		$(".li4").hover(                 //设置鼠标移动或离开时，ol4的展示与隐藏 
			function(){
				$(".iten4").show()
			},
			function(){
				$(".iten4").hide()
			}
		);
		$(".li5").hover(                 //设置鼠标移动或离开时，ol4的展示与隐藏 
			function(){
				$(".iten5").show()
			},
			function(){
				$(".iten5").hide()
			}
		);
		$(".iten1 li,.iten2 li,.iten3 li,.iten4 li,.iten5 li").hover(       //设置鼠标移动（或离开）到ol中li时显示的颜色
			function(){
				$(this).css("background-color","#456")
			},
			function(){
				$(this).css("background-color","#111")
			}
		);		
	});
	//保存数据（关于用户发表的动态）  
	function save(){  
		var sitename = document.getElementById("input_text").value; 
		var siteurl = document.getElementById("input_biaoti").value; 
		localStorage.setItem(sitename, siteurl);
		alert("发表成功");
	}
	//显示发表的信息（以表格的形式展示）
	function loadAll(){  
		var list = document.getElementById("speak");  
		if(localStorage.length>0){  
		var result = "<table style='width:730px;font:14px 楷体;color:#ccffff';overflow-y: auto>";  
		result += "<tr><td>内容</td><td>标题/说明</td></tr>";  
		for(var i = 0; i < localStorage.length; i++){  
			var sitename = localStorage.key(i);  
			var siteurl = localStorage.getItem(sitename);  
			result += "<tr><td>"+sitename+"</td><td>"+siteurl+"</td></tr>";  
		}  
		result += "</table>";  
		list.innerHTML = result;  
		}
		else{  
			list.innerHTML="数据为空……";  
		}  
	}
	//当页面重新加载的时候，调用loadAll()函数
	window.onload=function() {
		loadAll();
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
		document.getElementById("times").innerHTML = valueTime;
	}

