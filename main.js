const daysElement = document.getElementById("days")
const hoursElement = document.getElementById("hours")
const minsElement = document.getElementById("mins")
const secondElement = document.getElementById("second")


const newYears = "1 Jan 2021";

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.abs(Math.floor(totalSeconds / 3600 / 24));

    const hours = Math.abs(Math.floor(totalSeconds / 3600) % 24);

    const mins = Math.abs(Math.floor(totalSeconds / 60) % 60);
    
    const seconds = Math.abs(Math.floor(totalSeconds) % 60);

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minsElement.innerHTML = mins;
    secondElement.innerHTML = seconds;
    
}

countDown();

setInterval(countDown, 1000);