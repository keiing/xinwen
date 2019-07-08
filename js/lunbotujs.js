    //获得img宽度
    var i = 0;
    var imgWidth = document.querySelector("#ul-imgs>img").clientWidth + 4;
    var liCount = document.querySelectorAll("#li-idxs>#li-qiehuan>img");
    //获取对应小图片数量
    var lilength = liCount.length;
    //获得需要移动的left的父元素
    var ulImgs = document.getElementById("ul-imgs");
    var liQiehuan = document.getElementById("li-qiehuan");
    // console.log(imgWidth)

    function moveo(to) {
        console.log(typeof (to), typeof (i))
        if (to == undefined) {
            Number(to) = eval(Number(i) + 1);
        }
        console.log(to, i)
        if (i == 0) {
            if (to > i) {} else {
                ulImgs.style.marginLeft = -imgWidth * lilength - 10 + "px";
                liQiehuan.style.marginTop = -30 * lilength + "px"
                moveTo(lilength - 1);
                return;
            }
        }
        i = Number(to);
        ulImgs.style.marginLeft = -i * imgWidth + "px";
        liQiehuan.style.marginTop = -30 * i + "px"
        if (i == lilength) {
            i = 0;
            ulImgs.style.marginLeft = 0;
            liQiehuan.style.marginTop = 0;
        }
        for (var li of liCount) {
            li.className = ""
        }
        liCount[i].className = "active";
    }

    function moveTo(to) {
        console.log(typeof (to), typeof (i))
        if (to == undefined) {
            Number(to) = eval(i + 1);
        }

        if (i == 0) {
            if (to > i) {} else {
                ulImgs.style.marginLeft = -imgWidth * lilength + 5 + "px";
                moveTo(lilength - 1);
                return;
            }
        }
        i = Number(to);
        ulImgs.style.marginLeft = -i * imgWidth + 5 + "px";
        if (i == lilength) {
            i = 0;
            ulImgs.style.marginLeft = 0;
        }
        for (var li of liCount) {
            li.className = ""
        }
        liCount[i].className = "active";
    }

    function move(n) {
        moveo(i + Number(n)); //才调用真正移动ul的方法
    }
    var btnLeft = document.getElementById("btn-left-indexlunbo");
    var btnRight = document.getElementById("btn-right-indexlunbo");
    btnLeft.onclick = function () {
        move(-1);
    }
    btnRight.onclick = function () {
        move(1)
    }
    liQiehuan.onmouseover = function (e) {
        if (event.target.nodeName == "IMG") {
            console.log(event.target.nodeName)
            var lisen = e.target.getAttribute("data-imglb");
            moveTo(lisen)
        }
    }