Vue.component("my-header", {
    name: "my-header",
    template: `
    <div class="row">
    <div class="text-none col-8 m-0 p-0" id="app">
    <a href="http://localhost:8080/index.html" target="_parent">下载APP</a>
    <a href="#" target="_blank" class="pd-2">北京天气</a>
    <a href="#">北京 多云11°/23°<span><embed src="img/header/icon-arrow-down.svg" type="">
        </span>{{mydate}}</a>
    </div>
    <div class="col-4 m-0 p-0 text-right">
    <a href="#" target="_blank">投诉侵权</a>
    <a href="#" target="_blank">头条产品</a>
    </div>
    </div>`,
    data() {
        return {}
    },
    methods: {},
    computed: {},
    props: ["mydate"]
});