$(function() {
    console.log("hello, michael");
    $("body").on("click", ".month-filter span", function(){
        let month = $(this).attr("month");
        $(".month-data").hide();
        $(".month-data").each(function(){
            let thisMonth = $(this).attr("month");
            if (thisMonth === month){
                $(this).show();
            }
        });
    })
});