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
    

    $('#empezar').click(function() {
         
         enemigosDerrotados >= 10 && song == 1 ? (audioElement.setAttribute('src', 'mp3/waiting.mp3'), audioElement.play(), song="2" ): null
         enemigosDerrotados >= 20 && song == 2 ? (audioElement.setAttribute('src', 'mp3/play-hard.mp3'), audioElement.play(), song="3" ): null
         
       enemigosDerrotados == 0 ? audioElement.play() : null;
        // $("#status").text("Status: Playing");
    });
    $('#play').click(function() {
        audioElement.play();
    });
    $('#pause').click(function() {
        audioElement.pause();
    });
    
    // $('#restart').click(function() {
    //     audioElement.currentTime = 0;
    // });
});