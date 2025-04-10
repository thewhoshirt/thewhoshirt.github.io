$(document).ready(function(){
    // sets page theme
    var currentTheme = localStorage.getItem("theme");
    if (currentTheme == null){
        localStorage.setItem("theme","light")
    };
    if (currentTheme == "dark"){
        $("body").css({"backgroundColor":" #060c04","color":" #f9d864"});
        $("#darkMode").css("display","none");
        $("#lightMode").css("display","block");
    };

    // toggles page theme with the button
    $("#theme").click(function(){
        currentTheme = localStorage.getItem("theme");
        if (currentTheme == "light"){
            currentTheme = localStorage.setItem("theme","dark");
            $("body").css({"backgroundColor":" #060c04","color":" #f9d864"})
            $("#darkMode").css("display","none");
            $("#lightMode").css("display","block");
        }
        else{
            currentTheme = localStorage.setItem("theme","light");
            $("body").css({"backgroundColor":" #f5f9dc","color":" #112f08"});
            $("#darkMode").css("display","block");
            $("#lightMode").css("display","none");
        };
    });

    // whisk animation
    // whisk animation
    $(".whisk").click(function animateTitle(){
        $(".whisk").animate({borderSpacing: +100 }, {
            step: function(now, fx) {$(this).css('transform','rotate('+now+'deg)');},duration:500},'linear')
            .animate({ borderSpacing: 0 }, {step: function(now,fx) {
              $(this).css('transform','rotate('+now+'deg)');   }, duration:500},'linear')
            .animate({ borderSpacing: +100 }, {step: function(now,fx) {
                $(this).css('transform','rotate('+now+'deg)');   }, duration:500},'linear')
            .animate({ borderSpacing: 0 }, {step: function(now,fx) {
                    $(this).css('transform','rotate('+now+'deg)');   }, duration:500},'linear')
            .animate({ borderSpacing: 0 }, {step: function(now,fx) {
                $(this).css('transform','rotate('+now+'deg)');   }, duration:500},'linear')
    });
    $(".whisk").click(function animateTitle(){
        $(".whisk").animate({borderSpacing: +100 }, {
            step: function(now, fx) {$(this).css('transform','rotate('+now+'deg)');},duration:500},'linear')
            .animate({ borderSpacing: 0 }, {step: function(now,fx) {
              $(this).css('transform','rotate('+now+'deg)');   }, duration:500},'linear')
            .animate({ borderSpacing: +100 }, {step: function(now,fx) {
                $(this).css('transform','rotate('+now+'deg)');   }, duration:500},'linear')
            .animate({ borderSpacing: 0 }, {step: function(now,fx) {
                    $(this).css('transform','rotate('+now+'deg)');   }, duration:500},'linear')
            .animate({ borderSpacing: 0 }, {step: function(now,fx) {
                $(this).css('transform','rotate('+now+'deg)');   }, duration:500},'linear')
    });
    // contact form validation
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
                minlength:"Please enter a valid phone number"
            },
            comment:{
                required:"Please let me know why you want to contact me"
            },
        }
    });
    
});

// google maps api
function initMap(){
    const center  = {lat: 51.49841, lng: -0.09988}
    
    
    const map = new google.maps.Map(document.getElementById("map"),{
        center: center,
        zoom: 12
    });
    
    
    // map locations info
    const locations = [ 
        { lat: 51.48549, lng: -0.16200, msg: "Restaurant Gordon Ramsay"},

        {lat: 51.49968 , lng: -0.15677 , msg:"Pétrus" },
         
        {lat: 51.51021, lng: -0.11946, msg: "Savoy Grill"}, 

        {lat: 51.51034, lng: -0.12066, msg: "The River Restaurant"},

        {lat: 51.51264, lng: -0.15097, msg: "Lucky Cat - Mayfair"},

        {lat: 51.50977, lng: -0.03747, msg: "Bread Street Kitchen & Bar - Limehouse"},

        {lat: 51.51087, lng: -0.13855, msg: "Heddon Street Kitchen"},

        {lat: 51.52397, lng: -0.07698, msg: "Pizza East - Shoreditch"},

        {lat: 51.51042, lng: -0.12075, msg: "Restaurant 1890"},

        {lat: 51.50349, lng: -0.010058, msg: "Street Pizza - Southwark"},

        {lat: 36.11591, lng: -115.17333, msg: " Hell's Kitchen - Ceaser's Palace, Las Vegas"}
        
    ]

    locations.forEach(loc =>{ 
        const marker = new google.maps.Marker({
        position: {lat: loc.lat, lng: loc.lng},
        map: map,
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<h4> ${loc.msg} </h4>`
        });

        marker.addListener("click", () =>{
            infoWindow.open(map, marker)
        });

    }) 
};