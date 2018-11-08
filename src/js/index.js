define(['jquery', 'BScroll', 'handlebars'], function($, BScroll, Handlebars) {
    var myBScroll = new BScroll('.nav', {
        probeType: 2,
        scrollX: true
    });
    var myBScrol2 = new BScroll('.content', {
        probeType: 2,
        scrollX: true
    });
    $.ajax({
        url: '/api/getData',
        success: function(res) {
            res = JSON.parse(res);
            if (res.code === 0) {
                render(res);
            } else {
                alert('请求数据有误!');
            }
        }
    });

    function render(data) {
        //抓取模板数据
        var theTemplateScript = $('#pic').html();
        //编译模板
        var theTemplate = Handlebars.compile(theTemplateScript);
        //定义数据

        //把数据传到模板
        var theCompiledHtml = theTemplate(data);
        //更新数据
        $('.img').append(theCompiledHtml);
    }
})