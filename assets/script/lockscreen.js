displayApp = document.getElementById("main-app");
displayApp.style.display = "none"
const rightPass = "1321"
//bloc pour crée le login screen
unlockDeviceDisplay = document.createElement("div");
const mainDisplay = document.querySelector("main");
unlockDeviceDisplay.setAttribute("id","unlock-device");
mainDisplay.appendChild(unlockDeviceDisplay);
unlockDeviceDisplay.insertAdjacentHTML("beforeend", `<i id="lock-icon" class="fa-sharp fa-solid fa-lock"></i>`)

const lock = document.getElementById("lock-icon");
lock.addEventListener("click", passwordDisplay);

function passwordDisplay() //crée la modale
{
    mainDisplay.insertAdjacentHTML('beforeend', '<div id="pass-modal"><div id="pass-modal-content"></div></div>');
    modalContent = document.getElementById("pass-modal-content");
    const modal = document.getElementById("pass-modal");
    for(i=0; i <= 8; i++)
    {
        modalContent.insertAdjacentHTML('beforeend',`<div class="pass-number pass-number-value" data-Id="${i+1}">${i+1}</div>`);
    }
    modalContent.insertAdjacentHTML('beforeend',`<div class="pass-number" id="delete-number"><i class="fa-solid fa-delete-left"></i></div><div class="pass-number pass-number-value" data-Id="0">0</div><div class="pass-number" id="test-password"><i class="fa-solid fa-check"></i></div>`);
    modalContent.insertAdjacentHTML('beforebegin', `<input type="password" maxlength="4" id="pass-preview">`);
    modalContent.insertAdjacentHTML('beforeend', `<div id="pass-annonce"></div>`);
    //bloc pour la saisie du mot de passe
    passwordNumber = document.querySelectorAll(".pass-number-value");
    const passwordPreview = document.getElementById("pass-preview");
    passwordNumber.forEach(function(pass) 
    {
        pass.addEventListener("click", function(event) 
        {
            passwordPreview.value += pass.getAttribute("data-Id");
            if (passwordPreview.value.length >= 4) {
                passwordPreview.value = passwordPreview.value.slice(0, 4);
            }
            event.preventDefault();
        });
    });
    document.getElementById("delete-number").addEventListener("click",() => 
    {
        if (passwordPreview.value)
        {
            passwordPreview.value = passwordPreview.value.slice(0, -1);
        }
    })
    document.getElementById("test-password").addEventListener("click", () => 
    {
        if(passwordPreview.value === rightPass)
        {
            document.getElementById("open-draw").style.marginTop ="-150%"
            Unlocked();
            passwordPreview.value = ""
        }
        else
        {
            passwordPreview.value = ""
            const wrongPassEnter = document.getElementById("pass-annonce")
            wrongPassEnter.textContent ="Code incorrect";
            wrongPassEnter.style.animationName = "wrong-pass"
            setTimeout(function()
            {
                wrongPassEnter.textContent ="";
                wrongPassEnter.style.animationName = ""
            }, 2000);
        }
    });
    window.onclick = function(event) 
    {
        if (event.target === modal) 
        {
            modal.style.display = "none";
            passwordPreview.value = ""
            lock.removeEventListener("click", passwordDisplay);
        }
    }
    lock.onclick = function() {
        modal.style.display = "flex";
    }
}

function Unlocked() //si le mot de passe est valide
{
    document.getElementById("pass-modal").style.display = "none"
    unlockDeviceDisplay.style.display = "none"
    displayApp.style.display = "flex"
    displayApp.style.animationName = "screen-show"
}