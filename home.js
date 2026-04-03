const HOME_THEME_KEY = "theme";

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem(HOME_THEME_KEY) ||
    (window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  applyHomeTheme(savedTheme);
  document.getElementById("themeToggle")?.addEventListener("click", toggleHomeTheme);
});

function applyHomeTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  localStorage.setItem(HOME_THEME_KEY, theme);

  const toggle = document.getElementById("themeToggle");
  if (toggle) toggle.innerHTML = theme === "dark" ? "&#9728;&#65039;" : "&#127769;";

  const themeMeta = document.getElementById("themeColorMeta");
  if (themeMeta) themeMeta.setAttribute("content", theme === "dark" ? "#0f1117" : "#f4f6fb");
}

function toggleHomeTheme() {
  applyHomeTheme(document.body.classList.contains("dark") ? "light" : "dark");
}
