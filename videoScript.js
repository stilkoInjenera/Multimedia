
// Get the video
var video1 = document.getElementById("myVideo1");
var video2 = document.getElementById("myVideo2");
var video3 = document.getElementById("myVideo3");
var bt1 = document.getElementById("bt1");
var bt2 = document.getElementById("bt2");
var bt3 = document.getElementById("bt3");

// Pause and play the video, and change the button text
function pauseVideo(video) {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}