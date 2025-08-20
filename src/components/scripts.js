export function toggleTheme() {
  console.log('Toggle theme clicked');
  document.body.classList.toggle("darkmode");

  const isDark = document.body.classList.contains("darkmode");
  localStorage.setItem("darkmode", isDark ? "enabled" : "disabled");
}

export function applySavedTheme() {
  const savedTheme = localStorage.getItem("darkmode");
  console.log('Saved theme:', savedTheme);
  if (savedTheme === "enabled") {
    document.body.classList.add("darkmode");
  }
}