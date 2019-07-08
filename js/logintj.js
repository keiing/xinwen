(function chakan() {
    var urlParams = new URLSearchParams(location.search);
    var pid = urlParams.get("pid");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        var src;
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = xhr.responseText;
            var arr = JSON.parse(result);
            arr[0].pic != "null" ? src = `src` : src = `class.name=collapse`;
            console.log(arr[0].pic);
            my_title.innerHTML = arr[0].title;
            my_Source_picture.innerHTML = `<img src="${arr[0].Source_picture}"/>`;
            my_source.innerHTML = arr[0].source;
            my_comment.innerHTML = arr[0].comment;
            my_Release_time.innerHTML = arr[0].Release_time;
            my_details.innerHTML = arr[0].details;
            my_pic.innerHTML = `<img ${src}="${arr[0].pic}"/>`;
        }
    }
    xhr.open('get', 'http://127.0.0.1:3000/index/detail?pid=' + pid, true);
    xhr.send();
})();