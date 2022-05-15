var cover = document.getElementById("cover");
var carousel = document.getElementById("carouselExampleCaptions");
function ActivatePlayer(){
    cover.classList.add("hidden");
    carousel.style.visibility="visible";
    LoadVideo(video1);
}