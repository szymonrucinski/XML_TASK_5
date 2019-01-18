var play_button = document.getElementById("pokretlo_x5F_czerwone");
var boost = document.getElementById("pokretlo_x5F_zolte");


var audio = new Audio('audio.wav');
var audio2 = new Audio('audio2.wav');
var mainsong = new Audio('mainsong.mp3');

var property = document.getElementById("przycisk_x5F_1");
var property2 = document.getElementById("przycisk_x5F_5");
var checker2 = true;



property.addEventListener("click", function () {

    console.log("Pedalll");
    audio.play();

});



property2.addEventListener("click", function () {
    if (checker2 == true) {
        console.log("Pedalll2");
        audio2.play();


    }
    else if (checker2 == false) {
        audio2.pause();
        audio2.currentTime = 0
        checker2 = false;
    }

});





play_button.addEventListener("click", function () {
    if (mainsong.paused) {
        mainsong.play();
    }
    else
        {mainsong.pause();}

});



boost.addEventListener("click", function () {

    if (checker2 == true && mainsong.played) {
        mainsong.playbackRate = 2;
        checker2=false;

    }
    else if (checker2 == false) {
        mainsong.pause();
        mainsong.playbackRate =1;
        mainsong.play();
        checker2 = true;
    }





});