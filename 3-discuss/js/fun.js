function topFunction() {
    var timer  = null;
    backTop.onclick = function(){
        cancelAnimationFrame(timer);
        //获取当前毫秒数
        var startTime = +new Date();
        //获取当前页面的滚动高度
        var b = document.body.scrollTop || document.documentElement.scrollTop;
        var d = 500;
        var c = b;
        timer = requestAnimationFrame(function func(){
            var t = d - Math.max(0,startTime - (+new Date()) + d);
            document.documentElement.scrollTop = document.body.scrollTop = t * (-c) / d + b;
            timer = requestAnimationFrame(func);
            if(t == d){
                cancelAnimationFrame(timer);
            }
        });
    }
}
function jump() {
    window.alert("对不起，请先登录再进行操作！");
}
function getRandomInt() {
    document.getElementById("yzm").value = Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
}
function loginSuccess() {
    window.alert("注册成功！");
}
function checkPhone(){
    var phone = document.getElementById('phone').value;
    if(!(/^1[3456789]\d{9}$/.test(phone))){
        alert("手机号码有误，请重填");
        return false;
    }
    return true
}