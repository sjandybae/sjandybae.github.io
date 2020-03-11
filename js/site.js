$( document ).ready(function() {
    console.log( "hi!" );
    $("#creativeBio").hide();
    $("#technicalBio").hide();
    
    //$("#main").append("<div>jquery was here</div>")
    
    $("#homepageCreativeButton").click(function() {
        $("#technicalBio").hide();
        $("#creativeBio").show();
        $('html, body').animate({
            scrollTop: $("#creativeBio").offset().top
        }, 500);
    });
    $("#homepageTechnicalButton").click(function() {
        $("#creativeBio").hide();
        $("#technicalBio").show();
    });
});
