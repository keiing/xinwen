function getmss(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = xhr.responseText;
            var arr = JSON.parse(result);
            var title = "";
            if(arr.length>0){
            if (arr[0].pid!= undefined) {
                if (result.length>0){
                    for (var i=0;i<arr.length;i++){
                        title += `<li><a href="logintj.html?pid=${arr[i].pid}">${arr[i].title}</a></li>`}
            } }else {
                    for (var i=0;i<arr.length;i++){title += `<li><a href="loginjs.html?pid=${arr[i].pid}">${arr[i].title}</a></li>`}
            }}else{
                title = `<h1>没有查找到该信息</h1>`
            }
            document.write(title);
            console.log(title);
        }
    }
    xhr.open("get","http://127.0.0.1:3000/index/selecttitle?title="+title.value,true);
    xhr.send();
}

