// script.js

document.addEventListener('DOMContentLoaded', () => {
    const clocks = {
        'clock-ny': 'America/New_York',
        'clock-tokyo': 'Asia/Tokyo',
        'clock-london': 'Europe/London',
        'clock-seoul': 'Asia/Seoul',
        'clock-madrid': 'Europe/Madrid'
    };

    function updateClocks() {
        const now = new Date();
        for (const [clockId, timezone] of Object.entries(clocks)) {
            const localTime = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
            const timeString = localTime.toTimeString().split(' ')[0];
            document.querySelector(`#${clockId} .time`).textContent = timeString;

            // Actualiza el reloj analógico
            const hours = localTime.getHours() % 12;
            const minutes = localTime.getMinutes();
            const seconds = localTime.getSeconds();

            const hourHand = document.querySelector(`#${clockId} .hand.hour`);
            const minuteHand = document.querySelector(`#${clockId} .hand.minute`);
            const secondHand = document.querySelector(`#${clockId} .hand.second`);

            hourHand.style.transform = `rotate(${(hours * 30) + (minutes / 2)}deg)`;
            minuteHand.style.transform = `rotate(${(minutes * 6) + (seconds / 10)}deg)`;
            secondHand.style.transform = `rotate(${seconds * 6}deg)`;
        }
    }

    // Crear manecillas del reloj analógico
    function createClockHands(clockId) {
        const analogClock = document.querySelector(`#${clockId} .analog-clock`);
        ['hour', 'minute', 'second'].forEach(hand => {
            const handDiv = document.createElement('div');
            handDiv.classList.add('hand', hand);
            analogClock.appendChild(handDiv);
        });
    }

    Object.keys(clocks).forEach(createClockHands);

    // Actualiza el reloj cada segundo
    setInterval(updateClocks, 1000);

    // Actualiza los relojes inicialmente
    updateClocks();

    // Selector de zonas horarias
    document.getElementById('timezone-select').addEventListener('change', (event) => {
        const selectedTimezone = event.target.value;
        // Muestra solo el reloj seleccionado
        Object.keys(clocks).forEach(clockId => {
            document.getElementById(clockId).style.display = clocks[clockId] === selectedTimezone ? 'block' : 'none';
        });
    });
});
