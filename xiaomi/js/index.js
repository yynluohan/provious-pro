"use strict";
//头部导航条影藏栏
$(function(){
  $("#header-midden .list1").hover(
    function(){
      $("#nav-hidden1").slideDown("fast");
    },
    function(){
      $("#nav-hidden1").slideUp("fast");
  })

  $("#header-midden .list2").hover(
      function(){
        $("#nav-hidden2").slideDown("fast");
      },
      function(){
        $("#nav-hidden2").slideUp("fast");
  })

  $("#header-midden .list3").hover(
      function(){
        $("#nav-hidden3").slideDown("fast");
      },
      function(){
        $("#nav-hidden3").slideUp("fast");
  })
  $("#header-midden .list4").hover(
      function(){
        $("#nav-hidden4").slideDown("fast");
      },
      function(){
        $("#nav-hidden4").slideUp("fast");
  })
//主体左边列表
  $("#catery-list li").hover(
    function(){
      $(this).css("background-color","#e63935");
    },
    function(){
      $(this).css("background-color"," rgba(9,11,14,0.6)");
    }
  )
//分类模块
  $("#item-list div,#peijian-list div").hover(
    function(){
      $(this).css("background-color","#f5dff5");
      $(this).css("box-shadow","0 0 5px #456");
    },
    function(){
      $(this).css("background-color","#fff");
      $(this).css("box-shadow","1px 1px 0px #fff");
    }
  )
//搭配模块
  $("#dapei-list div").hover(
    function(){
      $(this).css("background-color","#d1f5e4");
      $(this).css("box-shadow","0 0 5px #456");
    },
    function(){
      $(this).css("background-color","#fff");
      $(this).css("box-shadow","1px 1px 0px #fff");
    }
  )
//热销模块
  $("#rexiao-list div").hover(
    function(){
      $(this).css("box-shadow","0 0 5px #456");
    },
    function(){
      $(this).css("box-shadow","0 0 0 #fff");
    }
  )
});
//图片轮播
window.setInterval("lunbo()","2500");   //两秒执行一次luobo()函数
    var a = 1;
    var b = 0;
	function lunbo(){
  	var x = document.getElementsByClassName("img").length-1; //获取图片最大的索引号
  	var images = document.getElementsByClassName("img");

  	var color = document.getElementsByClassName("buttom");     //对数字按钮进行同步
  	var list = document.getElementsByClassName("buttom").length-1; //获取数字按钮的最大索引号
    for(var i = 1; i<= 4; i++){              //依次隐藏图片
      images[i].style.display = "none";
    }
    for(var j = 0; j<=4; j++){      //依次将数字按钮的的背景颜色设置为白色
      color[j].style.backgroundColor = "#fff";
    }
    b = b + 1;
  	if(a > 4||b > 4){
  		a = 0;
      b = 0;
  	}
    if(a === b){     //当图片的索引值等于数字按钮的数值相等时，将按钮的背景颜色设置为红色
      color[b].style.backgroundColor = "#f61137";
    }
    images[a].style.display = "block";
  	a = a + 1;

}
