
// Get the video
var video = document.getElementById("myVideo");


// Pause and play the video, and change the button text
function pauseVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}