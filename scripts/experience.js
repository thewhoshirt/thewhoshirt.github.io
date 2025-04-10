$(document).ready( function() {
  // sets page theme
  var currentTheme = localStorage.getItem("theme");
    if (currentTheme == null){
        localStorage.setItem("theme","light")
    }
    if (currentTheme == "dark"){
        $("body").css({"backgroundColor":" #060c04","color":" #f9d864"});
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


  // creates the accordion sections
    $( "#accordion" ).accordion();

// just commented out for live server

    // var apikey = "AIzaSyBygxWHhXyl-m3c3fGEhQzpWtCbDvlmdgQ";
    // var url = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLTzMGnJjrsSyDJU9XClzZtuJ6GAIsvRk7&part=snippet&maxResults=5&order=date&type=video&key=${apikey}`
    // $.get(url, function(data){
    //     if(data.items && data.items.length > 0){
    //         var videoHtml = "";
    //         $.each(data.items, function(index,video){
    //             var videoId = video.id.videoId;
    //             var thumbnail = video.snippet.thumbnails.high.url;
    //             videoHtml += 
    //                 `<a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
    //                     <img src="${thumbnail}">    
    //                 </a>`
    //         });
    //         $("#videos").html(videoHtml);
    //     }
    //     else{
    //         $("#videos").html("<p>No videos found.</p>")
    //     }
    // })
});