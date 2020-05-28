(() => {
    let ctx = document.getElementById('chart-walk').getContext('2d');
    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['16h00', '18h00', '18h15', '21h00'],
            datasets: [{
                label: 'Desempenho',
                fill: false,
                borderColor: 'rgb(44,218, 157)',
                data: [0, 3, 5, 2]
            }]
        },
        options: {}
    });
})();