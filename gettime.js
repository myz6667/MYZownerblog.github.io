setInterval(function(){
    var NowTime = new Date();
    dateArea = document.querySelector(".date");
    dateArea.innerHTML = "当前时间：" + NowTime.toLocaleString();
},1); 