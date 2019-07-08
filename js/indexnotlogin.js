function get_index(n, index) {
    if (n !== null) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var inner;
                var result = xhr.responseText;
                var arr = JSON.parse(result);
                var title = "";
                var datails = "";
                var pic = "";
                var href = "";
                console.log(index);
                for (var i = 0; i < arr.length; i++) {
                    title += `
                <li data-id = "${arr[i].pid}" 
                class="notopoenclass border-bottom row mb-3" 
                style="min-width:600px;">
                    <a class="${arr[i].pic != "null"
                            ? "col-3" : ''}"  href="detail.html?pid=${arr[i].pid}">
                        <img src="${arr[i].pic}" 
                        style="${arr[i].pic != 'null' ? 'width:10rem' : ''}">
                    </a>
                    <div class="col-9" style="padding-left:40px">
                        <div class="row mt-lg-2 ml-0" style="min-width:160px;">
                            <a class="col-12" 
                                href="detail.html?pid=${arr[i].pid}">
                                <span class="font-size-1">${arr[i].title}</span>
                            </a>
                            <div class="col-12 mt-3"><a class="mr-3" href="detail.html?pid=${arr[i].pid}#source">
                                    <div>
                                        <img src="${arr[i].Source_picture}" alt=""/>
                                        <span>${arr[i].source}</span>
                            </div>
                    </a>
                    <a href="" class="mr-3">
                        <span>${arr[i].comment}评论</span>
                    </a>
                        <span>${arr[i].Release_time}小时前发布</span>
                        </div>
                        </div>
                </div>
                    <img class="notopenclass" data-id="${arr[i].pid}" src="http://127.0.0.1:3000/notopen.png"/>
                </li>
                `;
                }


                // document.getElementById("gengduo").addEventListener("click", (e) => {
                // e.preventDefault();
                // console.log(e.target.href);
                // if (e.target.nodeName != "UL") {
                // var $event = e.target;
                // juyu = $(e.target).attr("onclick").slice(-4, -2)
                // console.log(juyu);
                // inner = $event.attributes["href"];
                // n = null;
                // return inner;
                // inner = inner.split("=");
                // console.log(e.target.href.split("#"));
                // console.log(e.target.href);
                // var inner2 = e.target.href.split("#")[1];
                // document.getElementById(inner2).innerHTML = title;
                // inner = $($event).attr("href");
                // $(inner).html(title);
                // console.log(inner, $(inner).html())
                // }
                // })
                $(`#${index}>ul`).html(title);
            }
        }
        xhr.open('get', 'http://127.0.0.1:3000/index/indexjs?indexvalue=' + n, true);
        xhr.send();
    }
}