$(document).ready( function() {
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

  // creates the accordion sections
    $( "#accordion" ).accordion();

    var apikey = "AIzaSyBygxWHhXyl-m3c3fGEhQzpWtCbDvlmdgQ";
    var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=Microsoft&maxResults=5&order=relevance&type=video&key=${apikey}`
    $.get(url, function(data){
        if(data.items && data.items.length > 0){
            var videoHtml = "";
            $.each(data.items, function(index,video){
                var videoId = video.id.videoId;
                var thumbnail = video.snippet.thumbnails.high.url;
                videoHtml += 
                    `<a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
                        <img src="${thumbnail}">    
                    </a>`
            });
            $("#videos").html(videoHtml);
        }
        else{
            $("#videos").html("<p>No videos found.</p>")
        }
    })
});