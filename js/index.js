(function getms() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = xhr.responseText;
            // console.log(result)
            if (result.length) {
                var arr = JSON.parse(result);

                var title = "";
                var datails = "";
                var piiic = "";
                var piic = "";
                var href = "";
                for (var i = 0; i < arr.length; i++) {
                    var src;
                    arr[i].pic !== "null" ? src = `src` : src = `class`;
                    title += `
                <li data-id="${arr[i].pid}" class="notopoenclass border-bottom row mb-3" style="min-width:600px;">
                <a class="${!arr[i].pic?"col-3":''}" href="detail.html?pid=${arr[i].pid}">
               
                    <${!!arr[i].pic ?'img':'any'} ${src}="${arr[i].pic}" style="${arr[i].pic!='null'?'width:10rem':''}">
                </a>
                <div class="col-9">
                <div class="row mt-lg-2 ml-0" style="min-width:160px;">
                <a class="col-12" href="detail.html?pid=${arr[i].pid}"><span class="font-size-1">${arr[i].title}</span></a>
                <div class="col-12 mt-3"><a class="mr-3" href="detail.html?pid=${arr[i].pid}#source"><span><img src="${arr[i].Source_picture}" alt=""/>${arr[i].source}</span></a>
                <a href="" class="mr-3"><span>${arr[i].comment}评论</span></a>
                <span>${arr[i].Release_time}小时前发布</span>
                </div>
                </div>
                </div>
                <img  class="notopenclass" data-id="${arr[i].pid}" src="http://127.0.0.1:3000/notopen.png"/>
                </li>
                `;
                    //有错误暂时写死
                    //piic+=`<div class="carousel-item w-100"><img class="w-100" src="${arr[i].pic}"/></div>`;
                    //piiic+=`<li data-target="#demo3" data-slide-to="${i+1}"><img class="w-100" ${src}="${arr[i].pic}"/></li>`;
                    //details=arr[i].details;
                    //pic1=`<a href="login.html?pid=${arr[0].pid}"><img src="${arr[0].pic}"></a>`;
                    //seq_recommended=arr[i].seq_recommended;
                }
                var html = "";
                for (var i = 0; i < 12; i++) {
                    while (html.length < 1336) {
                        var index = Math.round(Math.random() * arr.length);
                        if (html.indexOf(index) === -1) {
                            html += `
                <li class="col-3 p-0 m-0 my-1">
                <a href="detail.html?pid=${arr[index].pid}">
                <img width="100%" ${src}="${arr[index].pic}">
                </a></li>
                <li class="col-9 my-1">
                <a href="detail.html?pid=${arr[index].pid}">
                <span class="font-size-3">${arr[index].title}</span>
                </a></li>`;
                        }
                    }
                }
                //carous.innerHTML=piic;
                // indicato.innerHTML=piiic;
                //.innerHTML=pic;
                $("#my_title1").html(title);
                $("#rewen").html(html);
                //my_details1.innerHTML=details;
                //my_pic1.innerHTML=pic1;
                //my_pic.innerHTML=pic;
                //my_seq_recommended1.innerHTML=seq_recommended;
            } else {
                setTimeout(() => {
                    console.log("接受数据失败重新调用")
                    history.go()
                    getms()
                })
            }
        }
    }
    xhr.open('get', 'http://127.0.0.1:3000/index?translate=' + "tj", true);
    xhr.send();
})()