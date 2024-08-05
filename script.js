// Añadir debajo de las funciones existentes

document.addEventListener('DOMContentLoaded', () => {
    // ... código existente ...

    let alarmTime = null;
    let alarmTimeout = null;

    function checkAlarm() {
        const now = new Date();
        const currentTimeString = now.toTimeString().split(' ')[0];

        if (currentTimeString === alarmTime) {
            alert('¡Alarma!');
            clearAlarm();
        }
    }

    function setAlarm(event) {
        event.preventDefault();
        const alarmInput = document.getElementById('alarm-time');
        alarmTime = alarmInput.value + ':00';
        document.getElementById('alarm-status').textContent = `Alarma configurada para las ${alarmInput.value}`;
        if (alarmTimeout) {
            clearTimeout(alarmTimeout);
        }
        alarmTimeout = setTimeout(checkAlarm, 1000);
    }

    function clearAlarm() {
        document.getElementById('alarm-status').textContent = '';
        alarmTime = null;
        if (alarmTimeout) {
            clearTimeout(alarmTimeout);
        }
    }

    document.getElementById('alarm-form').addEventListener('submit', setAlarm);

    // Actualizar los relojes cada segundo
    setInterval(updateClocks, 1000);
});
