(function () {
    var genduo1;
    // $("#gengduo1").click(function (event) {
    //     event = event ? event : window.event;
    //     var obj = event.srcElement ? event.srcElement : event.target;
    //     $obj = $(obj);
    // })
    document.getElementById("gengduo2").addEventListener("click", function (event) {
        genduo1 = $("#gengduo1").attr("onclick");
        event = event ? event : window.event;
        var obj = event.srcElement ? event.srcElement : event.target;
        var $obj = $(obj);
        var event = $(event.target);
        var onbl = $obj.attr("onclick");
        var bl = event.html();
        event.html($("#gengduo1").html());
        $obj.attr("onclick", genduo1);
        $("#gengduo1").html(bl);
        $("#gengduo1").attr("onclick", onbl);
    })
})()