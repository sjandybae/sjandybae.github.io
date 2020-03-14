$( document ).ready(function() {
    $("#bioSection").hide();
    $("#creativeBio").hide();
    $("#technicalBio").hide();
    
    //$("#main").append("<div>jquery was here</div>")
    
    $("#homepageCreativeButton").click(function() {
        $("#bioSection").show();
        $("#technicalBio").hide();
        $("#creativeBio").show();
        $('html, body').animate({
            scrollTop: $("#bioSection").offset().top - $(".navbar.sticky-top").outerHeight()
        }, 500);
    });
    $("#homepageTechnicalButton").click(function() {
        $("#bioSection").show();
        $("#creativeBio").hide();
        $("#technicalBio").show();
        $('html, body').animate({
            scrollTop: $("#bioSection").offset().top - $(".navbar.sticky-top").outerHeight()
        }, 500);
    });
    
    $("#creativeButton").click(function() {
        $(".skill.c").toggleClass("active");
    });
    $("#technicalButton").click(function() {
        $(".skill.t").toggleClass("active");
    });
});
