// Load Saved Theme When Page Opens
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  const savedColor = localStorage.getItem("bgColor");

  if (savedTheme === "dark") {
    document.body.style.background = "#111";
    document.body.style.color = "white";
  }

  if (savedColor) {
    document.body.style.background = savedColor;
  }
};

// Toggle Dark/Light Mode
function toggleTheme() {
  const isDark = document.body.style.background === "rgb(17, 17, 17)" || document.body.style.background === "#111";

  if (isDark) {
    document.body.style.background = "";
    document.body.style.color = "";
    localStorage.setItem("theme", "light");
  } else {
    document.body.style.background = "#111";
    document.body.style.color = "white";
    localStorage.setItem("theme", "dark");
  }
}

// Change Background Color Permanently
function changeBgColor(color) {
  document.body.style.background = color;
  localStorage.setItem("bgColor", color);
}

// Background Music
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) music.play();
  else music.pause();
}
