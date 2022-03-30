$(document).ready(function () {
    new SlimSelect({
        select: '#slim-select',
        showSearch: false,
    })
    

    setInterval(function() {
        var num = $("#gallery p").length;
        $(".form-file-count span").text(num + " из 10");
    }, 300)

    setInterval(function() {
        $(".form-file").each(function() {
            var num = $(this).find(".MultiFile-label .MultiFile-label").length;
            console.log(num);
            $(this).find(".form-file-count span").text(num + " из 10");
        });
        var elem = $('.MultiFile-remove');
        $('span').each(function () {
            if ($(this).text() == '') {
                $(this).closest(".MultiFile-label").remove();
            }
        })
    }, 300)

    $(".nofind__close").click(function() {
        $(".nofind").addClass("active")
    });

    $(".serv-overlay").click(function() {
        var title = $(this).closest(".service-card").attr("data-serv-title");
        var desc = $(this).closest(".service-card").attr("data-serv-desc");
        var FormId = $(this).closest(".service-card").attr("data-serv");
        $(".modal-title-js b").text(title);
        $(".modal-serv-text").text(desc);
        $(".serv-form-js").attr("data-serv-id", FormId);
        
    });

})