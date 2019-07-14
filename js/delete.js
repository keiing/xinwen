$(function () {
    if (document.querySelectorAll(".notopoenclass")) {
        console.log("找到了111")
    } else {
        console.log("2222meizhaodao")
    }
    var open = document.querySelectorAll("#my_title1 .notopoenclass");
    console.log(open)
    if (open.length != 0) {
        open = open[0].parentElement;
        open.onclick = function (e) {
            var btn = this;
            var len = btn.children.length;
            var id = e.target.dataset.id
            if (e.target.nodeName == "IMG") {
                for (var i = 0; i < len; i++) {
                    if (btn.children[i].dataset.id == id) {
                        if (confirm(`是否确定本次删除此条新闻`)) {
                            // console.log(id, i)
                            btn.children[i].remove();
                            return;
                        }
                    }
                }
                return;
            }
        }
        $("#my_tab_1").children().on("click", function (e) {
            var _this = $(this);
            var id1 = _this.children().attr("data-id");
            var eid = e.target.dataset.id
            var len = _this.children().length;
            if (e.target.nodeName == "IMG") {
                for (var i = 0; i < len; i++) {
                    if (eid == id1) {
                        if (confirm(`是否确定本次删除此条新闻`)) {
                            // console.log(id, i)
                            _this.children().remove();
                            return;
                        }
                    }
                }
            }
        })
        $("#my_tab_12").children().on("click", function (e) {
            var _this = $(this);
            var id1 = _this.children().attr("data-id");
            var eid = e.target.dataset.id
            var len = _this.children().length;
            if (e.target.nodeName == "IMG") {
                for (var i = 0; i < len; i++) {
                    if (eid == id1) {
                        if (confirm(`是否确定本次删除此条新闻`)) {
                            // console.log(id, i)
                            _this.children().remove();
                            return;
                        }
                    }
                }
            }
        })
    } else {
        new Promise((resolve, reject) => {
            var open = document.querySelector("#my_title1");
            var open1 = open.children;
            setTimeout(() => {
                resolve(open1);
            }, 500)
        }).then((open) => {
            open = open[0].parentElement;
            open.onclick = function (e) {
                var btn = this;
                var len = btn.children.length;
                var id = e.target.dataset.id
                if (e.target.nodeName == "IMG") {
                    for (var i = 0; i < len; i++) {
                        if (btn.children[i].dataset.id == id) {
                            if (confirm(`是否确定本次删除此条新闻`)) {
                                // console.log(id, i)
                                btn.children[i].remove();
                                return;
                            }
                        }
                    }
                    return;
                }
            }
            $("#my_tab_1").children().on("click", function (e) {
                var _this = $(this);
                var id1 = _this.children().attr("data-id");
                var eid = e.target.dataset.id
                var len = _this.children().length;
                if (e.target.nodeName == "IMG") {
                    for (var i = 0; i < len; i++) {
                        if (eid == id1) {
                            if (confirm(`是否确定本次删除此条新闻`)) {
                                // console.log(id, i)
                                _this.children().remove();
                                return;
                            }
                        }
                    }
                }
            })
            $("#my_tab_12").children().on("click", function (e) {
                var _this = $(this);
                var id1 = _this.children().attr("data-id");
                var eid = e.target.dataset.id
                var len = _this.children().length;
                if (e.target.nodeName == "IMG") {
                    for (var i = 0; i < len; i++) {
                        if (eid == id1) {
                            if (confirm(`是否确定本次删除此条新闻`)) {
                                // console.log(id, i)
                                _this.children().remove();
                                return;
                            }
                        }
                    }
                }
            })
        })
    }
    $("#my_tab_2").on("click", function (e) {
        console.log(e.target)
    })
})