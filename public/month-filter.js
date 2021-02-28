$(function() {
    $("body").on("click", ".filter > div", function(){
        if (!$(this).hasClass("active")) {
            $(".active").removeClass("active");
            $(this).addClass("active");
            let filters = $(this).attr("filters");
            $("div[filterGroup='" + filters + "']").addClass("active");
        }
    })
});