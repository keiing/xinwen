function get_index(n, index) {
    var urlhttp = "http://127.0.0.1:3000/"
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
                <li data-id="${arr[i].pid}" class="notopoenclass border-bottom row ml-0 mb-3" style="min-width:600px;">
                <a class="${!arr[i].pic ? "col-3" : ''}" href="detail.html?pid=${arr[i].pid}">
                    <${!!arr[i].pic ? 'img' : 'any'} src="${urlhttp}${arr[i].pic}" style="${arr[i].pic != 'null' ? 'width:10rem' : ''};">
                </a>
                <div class="col-9">
                <div class="row mt-lg-2" style="min-width:160px;">
                <a class="col-12" href="detail.html?pid=${arr[i].pid}"><span class="font-size-1">${arr[i].title}</span></a>
                <div class="col-12 mt-3 pt-2 pl-3 align-items-center"><a class="mr-3" href="detail.html?pid=${arr[i].pid}#source">
                <span class="pr-4"><img style="width:25px;" src="${urlhttp}${arr[i].Source_picture}" alt=""/>${arr[i].source}</span></a>
                <a href="" class="mr-3"><span class="pr-3">${arr[i].comment}评论</span></a>
                <span>${arr[i].Release_time}小时前发布</span>
                </div>
                </div>
                </div>
                <img  class="notopenclass" data-id="${arr[i].pid}" src="${urlhttp}tubiao/shanchutubiao.png"/>
                </li>
                `;
                    //有错误暂时写死
                    //piic+=`<div class="carousel-item w-100"><img class="w-100" src="${arr[i].pic}"/></div>`;
                    //piiic+=`<li data-target="#demo3" data-slide-to="${i+1}"><img class="w-100" src="${arr[i].pic}"/></li>`;
                    //details=arr[i].details;
                    //pic1=`<a href="login.html?pid=${arr[0].pid}"><img src="${arr[0].pic}"></a>`;
                    //seq_recommended=arr[i].seq_recommended;
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