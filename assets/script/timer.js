// Heures et date du téléphone
let hours = 22
let minutes = 30
let battery = 60
const intervalTime = setInterval(NewMinute, 600) //60000 for one minutes
const timer = document.getElementById("local-time")
const date = document.getElementById("date")
const subdate = document.getElementById("sub-date")
const batteryDisplay = document.getElementById("battery-left")
let i = 0
subdate.textContent = `Jeudi, 12 octobre 2023`
NewMinute()


function NewMinute()
{
    minutes++
    if(minutes === 60) {minutes = 0; hours++}
    if(hours === 24) {NewDay()};
    hours %= 24;
    const minuteLittleZero = minutes <= 9 ? '0' : ''; //pour le petit 0 de 0 à 9 minutes
    const hoursLittleZero = hours <= 9 ? '0' : ''; //pour le petit 0 de 0 à 9 heures
    timer.innerHTML = `${hoursLittleZero}${hours}:${minuteLittleZero}${minutes}`;
    date.innerHTML = `${hoursLittleZero}${hours}:${minuteLittleZero}${minutes}`;
    i++
    if(i%2 === 0) {battery--}
    const batteryLittleZero = battery <= 9 ? '0' : '';
    batteryDisplay.innerHTML = `${batteryLittleZero}${battery}%`
    if(battery === 0) {clearInterval(intervalTime)}
}

function NewDay()
{
    subdate.textContent =`Vendredi, 13 octobre 2023`
}