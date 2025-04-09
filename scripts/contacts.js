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
    $("#contactForm").validate({
        rules:{
            name:{
                required:true,
                minlength:3
            },
            email:{
                required:true,
                email:true,
            },
            phone:{
                reuired:true,
                minlength:10,
                maxlength:10
            },
            comment:{
                required:true,
            }
        },
        messages:{
            name:{
                required:"Please enter your name",
                minlength:"Name must be more than 3 characters"
            },
            email:{
                required:"Please enter your email",
                email:"Please enter a valid email address"
            },
            phone:{
                required:"Please enter your phone number",
                minlength:"Plese enter a valid phone number"
            },
            comment:{
                required:"Please let me know why you want to contact me"
            },
        }
    });
    
});