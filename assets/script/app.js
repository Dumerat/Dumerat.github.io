const appSelector = document.querySelectorAll(".app-all");
const AppBackground = document.getElementById("app-background");
const AppContentContainer = document.getElementById("app-content");
AppContentContainer.classList.add("customized-content");
const AppContent = document.querySelector(".customized-content");
const addStyle = document.createElement("style");
document.head.appendChild(addStyle)
appSelector.forEach(app =>

    {
        app.addEventListener("click", function()
        {
            switch (app.id) {
                case "bitcoin-app":
                    console.log("bitcoin");
                    break;
                case "steam-app":
                    console.log("Steam app clicked");
                    break;
                case "youtube-app":
                        youtube();
                        break;
                case "calc-app":
                        calc();
                        break;
                case "linkedin-app":

                        break;
                case "instagram-app":

                    break;
                case "github-app":

                    break;
                case "google-app":

                        break;
                case "facebook-app":

                        break;
                case "random-app":

                        break;
                case "document-app":

                    break;
                case "reddit-app":

                    break;
                case "discord-app":

                        break;
                case "spotify-app":

                        break;
                case "twitch-app":

                        break;
                case "twitter-app":

                    break;
                case "phone-app":

                    break;
                case "message-app":

                        break;
                case "photo-app":

                        break;
                case "contact-app":

                        break;
                default:
                    break;
            }
        });
    });

function calc()
{
    AppBackground.style.display = "block"
    AppContent.style.color = "white"
    AppContent.style.fontSize = "2em"
    calcGen()
}

function youtube()
{
    AppBackground.style.display = "block"

    AppContent.style.fontSize = "2em"
    AppContent.textContent = "test2"
}