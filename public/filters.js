$(function() {
    $("body").on("click", ".filter > div", function(){
        if ($(this).hasClass("clear-all")) {
            $(".active").removeClass("active");
            $("div[filterGroup='all-time']").addClass("active");
            $("div[filters='all-time']").addClass("active");
            $("div[filterGroup='by-month'] .month-data").addClass("active");
            return;
        }
        if (!$(this).hasClass("active")) {
            if ($(this).parent().hasClass("main-filter")) {
                $(".main-filter .active, .main-group.active").removeClass("active");
            } else {
                $(this).closest(".main-group").find(".active").removeClass("active");
            }
            $(this).addClass("active");
            let filters = $(this).attr("filters");
            $("div[filterGroup='" + filters + "']").addClass("active");
        }
    });
});