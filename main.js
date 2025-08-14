let flag = document.getElementById('flag');
let playBtn = document.getElementById(`play-btn`);
let stopBtn = document.getElementById(`stop-btn`);
let anthem = document.getElementById('anthem')
function startHosting() {
  anthem.play();
  flag.style.animation = `hoist 52s ease-in-out forwards`;
}

function stopHosting() {
  location.reload();
}
