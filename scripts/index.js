$(document).ready(function(){
    // sets page theme
    var currentTheme = localStorage.getItem("theme");
    if (currentTheme == null){
        localStorage.setItem("theme","dark")
    }
    if (currentTheme == "light"){
        $("body").css("backgroundColor","#f5f9dc")
    }

    // toggles page theme with the button
    $("#theme").click(function(){
        currentTheme = localStorage.getItem("theme");
        if (currentTheme == "light"){
            currentTheme = localStorage.setItem("theme","dark");
            $("body").css({"backgroundColor":" #060c04","color":" #f9d864"})
        }
        else{
            currentTheme = localStorage.setItem("theme","light");
            $("body").css({"backgroundColor":" #f5f9dc","color":" #112f08"})
        }
    });
});