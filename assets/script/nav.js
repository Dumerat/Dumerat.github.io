const returnButton = document.getElementById("nav-triangle")
const mainMenuButton = document.getElementById("nav-circle")
const weWillSeeLaterButton = document.getElementById("nav-square")

mainMenuButton.addEventListener("click", () =>
{
    AppBackground.style.display = "none"
    AppContent.innerHTML = ""
    // const appAssets = Array.from(AppContent.attributes);
    // appAssets.forEach(attribute => AppContent.removeAttribute(attribute.name));
});

returnButton.addEventListener("click", () => //for now this s*ck we'll see later
{
    AppBackground.style.display = "none"
    AppContent.innerHTML = ""
});