var Sound = new Audio();
Sound.src = "Sound.mp3";

function PlaySound(){
  snd.currentTime = 0;
  Sound.play();
}
