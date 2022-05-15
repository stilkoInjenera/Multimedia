var cover = document.getElementById("cover");
var carousel = document.getElementById("carouselExampleCaptions");
var pressed=false;
function ActivatePlayer(){
    if(pressed==false){
        cover.classList.add("hidden");
        carousel.style.visibility="visible";
        LoadVideo(video1);
    }
    pressed=true;
}
