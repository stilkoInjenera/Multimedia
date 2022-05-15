
// Get the video
var video1 = document.getElementById("myVideo1");
var video2 = document.getElementById("myVideo2");
var video3 = document.getElementById("myVideo3");
var bt1 = document.getElementById("bt1");
var bt2 = document.getElementById("bt2");
var bt3 = document.getElementById("bt3");
var activeVideo=video1;

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };
//function to delay the stop of videos
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//when the site loads
video1.pause();
video2.pause();
video2.currentTime=0;
video3.pause();
video3.currentTime=0;

//Execute when the video starts
function LoadVideo(video) {
  video.currentTime = 0;
  if (video.paused) {
    video.play();
  }
  activeVideo=video;
}
function StopVideo(video) {
  if (!video.paused) {
    video.pause();
  }
}

// Pause and play the video
function pauseVideo(video) {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function ChangeVideos(active, btnId){
  if(active){
    switch(btnId){
      case "bt1":LoadVideo(video1);return;
      case "bt2":LoadVideo(video2);return;
      case "bt3":LoadVideo(video3);return;
    }
  }
  switch(btnId){
    case "bt1":StopVideo(video1);return;
    case "bt2":StopVideo(video2);return;
    case "bt3":StopVideo(video3);return;
  }
}

document.addEventListener("keyup", (e) => {
  if(carousel.style.visibility=="visible"){
    let lastPressed=String(e.key);
    console.log(lastPressed);
    if(lastPressed==" "){
      pauseVideo(activeVideo);
      return;
    }
    if(lastPressed=="a"){
      activeVideo.currentTime-=10;
      return;
    }
    if(lastPressed=="d"){
      activeVideo.currentTime+=10;
      return;
    }
    if(lastPressed=="s"){
      activeVideo.volume-=0.1;
      return;
    }
    if(lastPressed=="w"){
      activeVideo.volume+=0.1;
      return;
    }
    if(lastPressed=="m"){
      if(activeVideo.volume==0){
        activeVideo.volume=1;
        return;
      }
      activeVideo.volume=0;
      return;
    }
  }
});

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
  // Use traditional 'for loops' for IE 11
  for(const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          console.log('The ' + mutation.attributeName + ' attribute was modified.');
          let currentClassState = mutation.target.classList.contains("active");
          console.log(currentClassState);
          ChangeVideos(currentClassState, mutation.target.id);
      }
  }
};
// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);
// Start observing the target node for configured mutations
observer.observe(bt1, config);
observer.observe(bt2, config);
observer.observe(bt3, config);