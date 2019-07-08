
jQuery.fn.Navibar=function(){
    $parent=this
   .addClass("dspl-none")
}
jQuery.fn.Navbar=function(){
    //获取到他爸爸
    $parent=this
    //然后给他爸爸添加tabs属性
    .addClass("tabs");

    var $tabs=$(".tabs").children();
    $tabs.click(function(e){
      var $a=$(e.target);
      var id=$a.attr("nav-ids");
      var $id=$(`#${id}`);
      if($a.is("[nav-tab=nav]")){
        $id.addClass("active")
        .siblings().removeClass("active");
        $a.parent().addClass("active")
        .siblings().removeClass("active");
        }
    })
}