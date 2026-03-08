document.addEventListener('DOMContentLoaded', () => {
    
    // Configuração do Gráfico de Retenção e Churn
    const ctxLine = document.getElementById('retentionChart').getContext('2d');
    
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar'],
            datasets: [{
                label: 'Taxa de Retenção (%)',
                data: [95, 94.5, 96, 97, 96.5, 96.8],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true,
                tension: 0.3
            }, {
                label: 'Churn Rate (%)',
                data: [5, 5.5, 4, 3, 3.5, 3.2],
                borderColor: '#ef4444',
                borderDash: [5, 5],
                fill: false,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            }
        }
    });

    // Configuração do Gráfico de NPS (Donut)
    const ctxPie = document.getElementById('npsChart').getContext('2d');
    
    new Chart(ctxPie, {
        type: 'doughnut',
        data: {
            labels: ['Promotores', 'Passivos', 'Detratores'],
            datasets: [{
                data: [65, 20, 15],
                backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
                hoverOffset: 10,
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
});