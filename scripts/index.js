$(document).ready(function(){
    // sets page theme
    var currentTheme = localStorage.getItem("theme");
    if (currentTheme == null){
        localStorage.setItem("theme","dark")
    }
    if (currentTheme == "light"){
        $("body").css("backgroundColor","#f2f2f2")
    }

    // toggles page theme with the button
    $("#theme").click(function(){
        currentTheme = localStorage.getItem("theme");
        if (currentTheme == "dark"){
            currentTheme = localStorage.setItem("theme","light");
            $("body").css("backgroundColor","#f2f2f2")
        }
        else{
            currentTheme = localStorage.setItem("theme","dark");
            $("body").css("backgroundColor","slategray")
        }
    });
});