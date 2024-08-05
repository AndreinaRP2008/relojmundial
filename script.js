function updateTime() {
    const peruTimeElement = document.getElementById('peru-time');
    const koreaTimeElement = document.getElementById('korea-time');
    const spainTimeElement = document.getElementById('spain-time');

    const now = new Date();

    // Hora en Perú (UTC-5)
    const peruTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Lima' }));
    peruTimeElement.textContent = peruTime.toLocaleTimeString();

    // Hora en Corea (UTC+9)
    const koreaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
    koreaTimeElement.textContent = koreaTime.toLocaleTimeString();

    // Hora en España (UTC+1)
    const spainTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Madrid' }));
    spainTimeElement.textContent = spainTime.toLocaleTimeString();
}

// Actualizar cada segundo
setInterval(updateTime, 1000);

// Llamar a la función para mostrar la hora inmediatamente
updateTime();
