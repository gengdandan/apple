/**
 * Created by Administrator on 2016/8/25.
 */
//响应
var flag=true
$(".small-left").click(function(){
    if(flag){
        $(".small-one").css({"transform":"translate(0,7px) rotate(45deg)"})
        $(".small-two").css({"transform":"translate(0,-4px) rotate(-45deg)"})
        $(".menu").css({"height":400})
        $(".menu li a").each(function(index,obj){
            $(obj).css({
                "opacity":1,
                "transition": "all 0.4s ease "+index*0.2+"s"})
        })
        flag=false
    }else{
        $(".small-one").css({"transform":""})
        $(".small-two").css({"transform":""})
        $(".menu").css({"height":0})
        $(".menu li a").each(function(index,obj){
            $(obj).css({
                "opacity":0,
                "transition": "all 0.4s ease "+index*0.2+"s"})
        })
        flag=true
    }
})


//轮播
$(".banner:gt(0)").css({left:"100%"})
var next=0;
var now=0;
function lunbo(){
    next++;
    if(next>$(".banner").length-1){
        next=0
    }
    $(".banner").eq(now).stop().animate({left:"-100%"})
    $(".banner").eq(next).css({left:"100%"})
    $(".banner").eq(next).stop().animate({left:0})
    $(".btn li").eq(now).attr("id","")
    $(".btn li").eq(next).attr("id","active")
    now=next
}
var t=setInterval(lunbo,2000)
$(".banbox").hover(function(){
    clearInterval(t)
    $(".left-btn").css({opacity:"1"})
    $(".right-btn").css({opacity:"1"})
},function(){
    t=setInterval(lunbo,2000)
    $(".left-btn").css({opacity:"0"})
    $(".right-btn").css({opacity:"0"})
})
$(".left-btn").click(function(){
    lunbo()
})
$(".right-btn").click(function(){
    next--
    if(next<0){
        next=$(".banner").length-1
    }
    $(".banner").eq(now).stop().animate({left:"100%"})
    $(".banner").eq(next).css({left:"-100%"})
    $(".banner").eq(next).stop().animate({left:0})
    $(".btn li").eq(now).attr("id","")
    $(".btn li").eq(next).attr("id","active")
    now=next
})
$(".banbox .btn li").click(function(){
    index=$(".banbox .btn li").index(this)
    next=index
    $(".banner").eq(now).stop().animate({left:"100%"})
    $(".banner").eq(next).css({left:"-100%"})
    $(".banner").eq(next).stop().animate({left:0})
    $(".btn li").eq(now).attr("id","")
    $(".btn li").eq(next).attr("id","active")
    now=next
})


//底部响应
$(".small-zi1").each(function(index,obj){
    $(obj).click(function(){
        if(flag){
            if(index==0){
                $(".yc-zi").eq(index).css({
                    "height":240,
                })
            }
            if(index==1){
                $(".yc-zi").eq(index).css({
                    "height":300,
                })
            }
            if(index==2||index==3){
                $(".yc-zi").eq(index).css({
                    "height":60,
                })
            }
            if(index==4){
                $(".yc-zi").eq(index).css({
                    "height":90,
                })
            }
            if(index==5){
                $(".yc-zi").eq(index).css({
                    "height":120,
                })
            }
            if(index==6){
                $(".yc-zi").eq(index).css({
                    "height":150,
                })
            }
            $(".one-zi").eq(index).css({
                "color":"#333"
            })
            $(".two-zi").eq(index).css("transform","rotate(45deg)")
            flag=false
        }else{
            $(".yc-zi").eq(index).css({
                "height":0,
            })
            $(".one-zi").eq(index).css({
                "color":"#666"
            })
            $(".two-zi").eq(index).css("transform","rotate(0deg)")
            flag=true
        }
    })
})