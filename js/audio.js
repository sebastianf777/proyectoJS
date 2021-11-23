$(document).ready(function() {
    let audioElement = document.createElement('audio');
    
    let song = "1"
    audioElement.setAttribute('src', 'mp3/stay.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    // audioElement.addEventListener("canplay",function(){
    //     $("#length").text("Duration:" + audioElement.duration + " seconds");
    //     $("#source").text("Source:" + audioElement.src);
    //     $("#status").text("Status: Ready to play").css("color","green");
    // });
    
    // audioElement.addEventListener("timeupdate",function(){
    //     $("#currentTime").text("Current second:" + audioElement.currentTime);
    // });
    $('#next').click(function() {



    enemigosDerrotados >= 9 && song == 1 ? (audioElement.setAttribute('src', 'mp3/waiting.mp3'), audioElement.play(), song="2" ): null
    enemigosDerrotados >= 19 && song == 2 ? (audioElement.setAttribute('src', 'mp3/play-hard.mp3'), audioElement.play(), song="3" ): null
    enemigosDerrotados >= 29 && song == 3 ? (audioElement.setAttribute('src', 'mp3/high-hopes.mp3'), audioElement.play(), song="4" ): null
    })
    $('#empezar').click(function() {
         


         
       enemigosDerrotados == 0 ? audioElement.play() : null;
        // $("#status").text("Status: Playing");
    });
    $('#play').click(function() {
        audioElement.play();
        $("#pause").css("background", "linear-gradient(90deg, rgb(196, 1, 255) 0%, rgb(65, 1, 107) 100%)")
        $("#play").css("background", "linear-gradient(90deg, rgb(29, 4, 139) 0%, rgb(65, 1, 107) 100%)")

    });
    $('#pause').click(function() {
        audioElement.pause();
        $("#play").css("background", "linear-gradient(90deg, rgb(196, 1, 255) 0%, rgb(65, 1, 107) 100%)")
        $("#pause").css("background", "linear-gradient(90deg, rgb(29, 4, 139) 0%, rgb(65, 1, 107) 100%)")

    });
    
    // $('#restart').click(function() {
    //     audioElement.currentTime = 0;
    // });
});