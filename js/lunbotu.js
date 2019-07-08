//引入之后轮播无法播放已经换方法
$(function () {
    $.ajax({
        url: "indexlunbo.html",
        type: "get",
        success: function (html) {
            //转换成节点
            $(html).replaceAll("#lunbotu111");
            $(`<link rel="stylesheet" href="css/indexlunbo.css">`)
                .appendTo("head")
            $(`<script src="js/lunbotujs.js"></script>`).appendTo("head")
        }
    });

})