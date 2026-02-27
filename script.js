// Background Music
let music = document.getElementById("bgMusic");
function toggleMusic() {
  if (music.paused) music.play();
  else music.pause();
}

// Dark / Light Mode
let darkMode = true;
function toggleTheme() {
  if (darkMode) {
    document.body.style.background = "#111";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "";
    document.body.style.color = "";
  }
  darkMode = !darkMode;
}

// Change Background Color
function changeBgColor(color){
  document.body.style.background = color;
}
