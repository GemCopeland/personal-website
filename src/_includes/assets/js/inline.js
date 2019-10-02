// Add class so that we can style skip links
function handleFirstTab(e) {
  if (e.keyCode === 9) {
    // the "I am a keyboard user" key
    document.documentElement.classList.add("is-tabbing");
    document.documentElement.classList.remove("is-not-tabbing");
    window.removeEventListener("keydown", handleFirstTab);
  }
}
window.addEventListener("keydown", handleFirstTab);
