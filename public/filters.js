$(function() {
    $("body").on("click", ".filter > div", function(){
        if ($(this).hasClass("clear-all")) {
            $("div[filtergroup='by-month'] .month-data").addClass("active");
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
            $("div[filtergroup='" + filters + "']").addClass("active");
        }
    });
});