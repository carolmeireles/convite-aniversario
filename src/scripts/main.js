
const eventDate = new Date('Aug 30, 2025, 18:30:00');
const eventTimestamp = eventDate.getTime();

const counter = setInterval(function() {
    const now = new Date();
    const timestamp = now.getTime();
    const eventGap = eventTimestamp - timestamp;

    const day = 1000 * 60 * 60 * 24;
    const hour = 1000 * 60 * 60;
    const minutes = 1000 * 60;

    const eventDays = Math.floor(eventGap / day);
    const eventHours = Math.floor((eventGap % day) / hour);
    const eventMinutes = Math.floor((eventGap % hour) / minutes);
    const eventSeconds = Math.floor((eventGap % minutes) / 1000);

    const contador = document.getElementById('contador');
    contador.innerHTML = `${eventDays} : ${eventHours} : ${eventMinutes} : ${eventSeconds}`;

    if(eventGap < 0) {
        clearInterval(counter);
        contador.innerHTML = '000 : 00 : 00 : 00';
    }
})