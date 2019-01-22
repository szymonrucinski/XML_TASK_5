var play_button = document.getElementById("pokretlo_x5F_czerwone");
var boost = document.getElementById("pokretlo_x5F_zolte");

var audio1 = new Audio('audio1.wav');
var audio2 = new Audio('audio2.wav');
var audio3 = new Audio('audio3.wav');
var audio4= new Audio('audio4.wav');
var audio5 = new Audio('audio5.wav');
var audio6 = new Audio('audio6.wav');
var audio7 = new Audio('audio7.wav');
var audio8 = new Audio('audio8.wav');
var audio9 = new Audio('audio9.wav');
var audio10 = new Audio('audio10.mp3');
var audio11 = new Audio('audio11.wav');
var audio12 = new Audio('audio12.wav');


var mainsong = new Audio('mainsong.mp3');
mainsong.volume=0.9;

var button1 = document.getElementById("przycisk_x5F_1");
var button2 = document.getElementById("przycisk_x5F_2");
var button3 = document.getElementById("przycisk_x5F_3");
var button4 = document.getElementById("przycisk_x5F_4");
var button5 = document.getElementById("przycisk_x5F_5");
var button6 = document.getElementById("przycisk_x5F_6");
var button7 = document.getElementById("przycisk_x5F_7");
var button8 = document.getElementById("przycisk_x5F_8");
var button9 = document.getElementById("przycisk_x5F_9");
var button10 = document.getElementById("przycisk_x5F_10");
var button11 = document.getElementById("przycisk_x5F_11");
var button12 = document.getElementById("przycisk_x5F_12");


var checkerboost = true;

var checker1 = true;
var checker2 = true;
var checker3 = true;
var checker4 = true;
var checker5 = true;
var checker6 = true;
var checker7 = true;
var checker8 = true;
var checker9 = true;
var checker10 = true;
var checker11 = true;
var checker12 = true;


button1.addEventListener("click", function () {
    if (checker1 == true) {
        console.log("Pedalll2");
        audio1.play();
        audio1.loop=true;
        checker1=false;


    }
    else if (checker1 == false) {
        audio1.pause();
        audio1.currentTime = 0;
        checker1 = true;
    }

});


button2.addEventListener("click", function () {
    if (checker2 == true) {
        console.log("Pedalll2");
        audio2.play();
        audio2.loop=true;
        checker2=false;

    }
    else if (checker2 == false) {
        audio2.pause();
        audio2.currentTime = 0;
        checker2 = true;
    }

});

button3.addEventListener("click", function () {
    if (checker3== true) {
        console.log("Pedalll2");
        audio3.playbackRate = 2;
        audio3.play();
        audio3.loop=true;
        checker3=false;

    }
    else if (checker3 == false) {
        audio3.pause();
        audio3.currentTime = 0;
        checker3 = true;
    }

});


button4.addEventListener("click", function () {
    if (checker4== true) {
        console.log("Pedalll2");
        audio4.playbackRate = 2;
        audio4.play();
        audio4.loop=true;
        checker4=false;

    }
    else if (checker4 == false) {
        audio4.pause();
        audio4.currentTime = 0;
        checker4 = true;
    }

});


button5.addEventListener("click", function () {
    if (checker5== true) {
        console.log("audio5");
        audio5.play();
        audio5.loop=true;
        checker5=false;

    }
    else if (checker5 == false) {
        audio5.pause();
        audio5.currentTime = 0;
        checker5 = true;
    }

});

button6.addEventListener("click", function () {
    if (checker6== true) {
        console.log("Pedalll2");
        audio6.play();
        audio6.loop=true;
        checker6=false;

    }
    else if (checker6 == false) {
        audio6.pause();
        audio6.currentTime = 0;
        checker6 = true;
    }

});

button7.addEventListener("click", function () {
        audio7.play();
    audio7.currentTime=0;



});

button8.addEventListener("click", function () {
    audio8.play();
    audio8.currentTime=0;

});

button9.addEventListener("click", function () {
    audio9.play();
    audio9.currentTime=0;
});


button10.addEventListener("click", function () {
    audio10.play();
    audio10.currentTime=0;
});

button11.addEventListener("click", function () {
    audio11.play();
    audio11.currentTime=0;
});



button12.addEventListener("click", function () {
    audio12.play();
    audio12.currentTime=0;
    button7.fill(red);

});






play_button.addEventListener("click", function () {
    if (mainsong.paused) {
        mainsong.play();
    }
    else
        {mainsong.pause();}

});



boost.addEventListener("click", function () {

    if (checkerboost == true && mainsong.played) {
        mainsong.playbackRate = 2;
        checkerboost=false;

    }
    else if (checkerboost == false) {
        mainsong.pause();
        mainsong.playbackRate =1;
        mainsong.play();
        checkerboost = true;
    }





});