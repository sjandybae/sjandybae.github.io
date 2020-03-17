$( document ).ready(function() {
    $("#bioSection").hide();
    $("#creativeBio").hide();
    $("#technicalBio").hide();
    
    //$("#main").append("<div>jquery was here</div>")
    
    var firstClick = true;
    
    $("#homepageCreativeButton").click(function() {
        if (firstClick) {
            $("#bioSection").slideDown(500);
            $('html, body').animate({
                scrollTop: $("#bioSection").offset().top - $(".navbar.sticky-top").outerHeight()
            }, 500, function() {
                $("#creativeBio").slideDown();                
            });
            firstClick = false;
        }
        else {
            $('html, body').animate({
                scrollTop: $("#bioSection").offset().top - $(".navbar.sticky-top").outerHeight()
            }, 500);
            $("#technicalBio").fadeOut(600, function() {
                $("#creativeBio").fadeIn(600);
            });
        }
    });
    $("#homepageTechnicalButton").click(function() {
        if (firstClick) {
            $("#bioSection").slideDown(500);
            $('html, body').animate({
                scrollTop: $("#bioSection").offset().top - $(".navbar.sticky-top").outerHeight()
            }, 500, function() {
                $("#technicalBio").slideDown();                
            });
            firstClick = false;
        }
        else {
            $("#bioSection").slideDown();
            $('html, body').animate({
                scrollTop: $("#bioSection").offset().top - $(".navbar.sticky-top").outerHeight()
            }, 500);
            $("#creativeBio").fadeOut(600, function() {
                $("#technicalBio").fadeIn(600);
            });
        }
    });
    
    $("#creativeButton").click(function() {
        $(".skill.c").toggleClass("active");
    });
    $("#technicalButton").click(function() {
        $(".skill.t").toggleClass("active");
    });
});
