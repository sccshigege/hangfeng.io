/**
 * Created by Administrator on 2018/5/18.
 */
$(function () {
    /*var i=0;
    //var index=0;
    var t=setInterval(move,2000)
    function move() {
        i++;

        if(i>3)
        {
            i=0;
        }
        $(".banner .square span").eq(i).css({"background-color":"white"}).siblings().css({"background":"rgba(47,69,91, 0.5)"})
        $(".banner-img img").eq(i).fadeIn(500).siblings().fadeOut(500);

    };
    $(".banner .square span").click(function () {
        $(this).css({"background-color": "white" }).siblings().css({"background":"rgba(47,69,91, 0.5)"})
        var i=$(this).index();
        console.log(i.length);
        $(".banner-img img").eq(i).fadeIn(500).siblings().fadeOut(500);
    })*/
    var btn = $(".square>span");//获取小按钮
    var wimg = $(".bannerul li").width();//获取图片宽度
    //按钮点击事件
    $(btn[0]).addClass("current");//默认
    btn.click(function(){
        //赋class同时清除同类的class
        $(this).addClass("current").siblings().removeClass("current");
        var num = $(this).index();//index()不传递参数，返回this的索引值
        $(".bannerul").animate({left:-num * wimg + "px"},500);//动画
    });
    //轮播
    var t = setInterval(move,1000);//时间函数
    function move(){
        var num;
        btn.each(function(){ //遍历按钮
            if($(this).hasClass("current")){
                num = $(this).index()+1;//+1 不然返回1
                $(".bannerul").animate({left:-num * wimg + "px"},500);//动画

                if(num == btn.length){ //判断
                    $(".bannerul").animate({left:"0px"},0);
                    num=0;
                }
            }
        });
        $(btn[num]).addClass("current").siblings().removeClass("current");
    }
})