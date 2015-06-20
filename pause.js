var player = document.getElementById('movie_player');

setTimeout(function () { //as it is asynchronous  
    if (player.classList.contains("playing-mode")) {
        player.pauseVideo();
    } else if(player.classList.contains("paused-mode")) {
        player.playVideo();
    }
}, 50);