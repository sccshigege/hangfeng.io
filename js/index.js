/**
 * Created by Administrator on 2018/5/17.
 */
$(function () {
    var i=0;
    var t=setInterval(move,2000)
    function  move() {
        i++;
        if (i>3) {
            i = 0;
        }
        $(".square span").eq(i).css({'background-color': 'white'}).siblings().css({'background': '#c3c3bc'});
        $(".background-img img").eq(i).fadeIn(500).siblings().fadeOut(500);
    };
         //index=$(".square span").index()+1;
        //$(".background-img").animate({left:-index * 1920 + "px"},500);



    $(".square span").click(function () {
        $(this).css({'background-color': 'white' }).siblings().css({'background':'#c3c3bc'})
        var i=$(this).index();

        $(".background-img img").eq(i).fadeIn(500).siblings().fadeOut(500);
    });
   /* $(".square span").mouseout(function () {
        i=$(this).index();

    })
*/

})
