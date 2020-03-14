var Sound = new Audio();
Sound.src = "Sound.mp3";

function PlaySound(){
  Sound.currentTime = 0;
  Sound.play();
}
