let song = document.getElementById('music');

function play() {
  song.play();
}
function pause() {
  song.pause();
}
function retroceder() {
  song.currentTime -= 15;
}

function avancar() {
  song.currentTime += 15;
}

