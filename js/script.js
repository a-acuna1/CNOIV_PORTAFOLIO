document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("typewriter-title");
    if(title) {
        const text = title.innerText;
        title.innerText = "";
        let i = 0;
        const typeInterval = setInterval(() => {
            // AQUI ESTA EL CAMBIO: Usamos innerHTML para forzar el espacio
            title.innerHTML += text.charAt(i); 
            i++;
            if(i >= text.length) clearInterval(typeInterval);
        }, 50);
    }

    const logs = document.getElementById('live-logs');
    if(logs) {
        setInterval(() => {
            const r = Math.random();
            if(r > 0.9) { logs.textContent = "SCANNING..."; logs.style.color = "#ffaa00"; }
            else if (r > 0.8) { logs.textContent = "UPDATING..."; logs.style.color = "#00ea77"; }
            else { logs.textContent = "OK"; logs.style.color = "#00A859"; }
        }, 2500);
    }

    const ctx = document.getElementById('skillsRadar');
    if(ctx) {
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: [
                    'Ciberseguridad & CTFs', 
                    'Redes & Networking (CCNA)', 
                    'Servidores e Infraestructura', 
                    'Respuesta a Incidentes',
                    ['Análisis de Vulnerabilidades'] 
                ],
                datasets: [{
                    label: 'Nivel Técnico',
                    data: [85, 90, 85, 85, 90], 
                    backgroundColor: 'rgba(0, 168, 89, 0.2)', 
                    borderColor: '#00ea77',
                    pointBackgroundColor: '#000000',
                    pointBorderColor: '#00ea77',
                    pointHoverBackgroundColor: '#00ea77',
                    pointHoverBorderColor: '#ffffff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: { color: 'rgba(159, 170, 165, 0.2)' }, 
                        grid: { color: 'rgba(159, 170, 165, 0.2)' }, 
                        pointLabels: { 
                            color: '#9faaa5', 
                            font: { family: 'Rajdhani', size: 12, weight: 'bold' } 
                        },
                        ticks: {
                            display: false, 
                            max: 100,
                            min: 0
                        }
                    }
                },
                plugins: {
                    legend: { display: false } 
                }
            }
        });
    }
});
