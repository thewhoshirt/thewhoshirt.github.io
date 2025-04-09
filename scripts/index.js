$(document).ready(function(){
    // sets page theme
    var currentTheme = localStorage.getItem("theme");
    if (currentTheme == null){
        localStorage.setItem("theme","light");
        $("#lightMode").css("display","block");
        $("#darkMode").css("display","none");
    };
    if (currentTheme == "dark"){
        $("body").css({"backgroundColor":" #060c04","color":" #f9d864"});
        $("#darkMode").css("display","block");
        $("#lightMode").css("display","none");
    };

    // toggles page theme with the button
    $("#theme").click(function(){
        currentTheme = localStorage.getItem("theme");
        if (currentTheme == "light"){
            currentTheme = localStorage.setItem("theme","dark");
            $("body").css({"backgroundColor":" #060c04","color":" #f9d864"});
           $("#darkMode").css("display","block");
           $("#lightMode").css("display","none");
        }
        else{
            currentTheme = localStorage.setItem("theme","light");
            $("body").css({"backgroundColor":" #f5f9dc","color":" #112f08"})
            $("#darkMode").css("display","none");
            $("#lightMode").css("display","block");
        }
    });

     // animating title knife
     $(".knife").click(function animateTitle(){
        $(".knife").animate({ left:"100", borderSpacing: +50 }, {
            step: function(now,fx) {$(this).css('transform','rotate('+now+'deg)');},
            duration:3000},'linear')
             .animate({ left:"300", borderSpacing: 0 }, {
            step: function(now,fx) {
              $(this).css('transform','rotate('+now+'deg)');  
            },
            duration:3000
        },'linear').animate({top:"+=50"},3000).animate({top:"-=50"},3000,animateTitle)
    });
});