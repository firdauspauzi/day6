
// playlist functions
const listVideo = document.querySelectorAll('.video-list .vid');
const mainVideo = document.querySelector('.main-video video');
const title = document.querySelector('.main-video .title');

listVideo.forEach(video =>{
    video.onclick = () =>{
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
            myVideo.currentTime = 0;
            playPauseIcon.className = "fas fa-play"
        }
    }
})






// video controls functions

const myVideo = document.getElementById("mainvid");

const playPauseIcon = document.getElementById("playPause");


document.getElementById("play").addEventListener("click", playPauseVid);

function playPauseVid(){
    if(myVideo.paused){
        myVideo.play();
        playPauseIcon.className = "fas fa-pause";
    }
    else{
        myVideo.pause();
        playPauseIcon.className = "fas fa-play";
    }
    
};

document.getElementById("stop").addEventListener("click", stopVid);

function stopVid(){
    myVideo.pause();
    myVideo.currentTime = 0;
};

document.getElementById("rwd").addEventListener("click", rwdVid);

function rwdVid(){
    myVideo.currentTime = myVideo.currentTime -= 1
};

document.getElementById("fwd").addEventListener("click", fwdVid);

function fwdVid(){
    myVideo.currentTime = myVideo.currentTime += 1;
};

var defaultVol = 0.5;

function volControl(vol){
    defaultVol += vol;
    document.getElementById("vid").volume = defaultVol;   
}