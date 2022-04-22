const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const newYears = '1 jan 2023';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const Totalseconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(Totalseconds / 3600 / 24);
    const hours = Math.floor(Totalseconds / 3600) % 24;
    const minutes = Math.floor(Totalseconds / 60) % 60;
    const seconds = Math.floor(Totalseconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secsEl.innerHTML = formatTime(seconds);
    console.log();
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}
// Initial call
countdown();

setInterval(countdown, 1000);
