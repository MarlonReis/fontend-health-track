
const createChart = (component, typeChat, dataChart) => {
    new Chart(component, {
        type: typeChat,
        data: dataChart,
        options: {}
    });
}

(() => {
    let ctxWalk = document.getElementById('chart-walk').getContext('2d');
    let ctxHeartbeat = document.getElementById('chart-heartbeat').getContext('2d');
    let ctxAttendance = document.getElementById('chart-attendance').getContext('2d');
    let ctxPeopleWeight = document.getElementById('people-weight').getContext('2d');

    createChart(ctxWalk, 'line', {
        labels: ['16h00', '16h30', '17h00', '17h30'],
        datasets: [{
            label: 'Desempenho',
            fill: true,
            borderColor: '#2CDA9D',
            data: [0, 3, 5, 2]
        }]
    });

    createChart(ctxHeartbeat, 'line', {
        labels: ['16h00', '16h05', '16h10', '16h15'],
        datasets: [{
            label: 'Batimentos',
            fill: true,
            lineTension: 0,
            borderColor: '#2CDA9D',
            data: [180, 110, 160, 85]
        }]
    });

    createChart(ctxAttendance, 'bar', {
        labels: ['Jan', 'Fev', 'Mar', 'Abr'],
        datasets: [{
            label: 'Atendimentos',
            fill: true,
            borderWidth: 2,
            borderColor: '#2CDA9D',
            data: [180, 110, 160, 200]
        }]
    });

    createChart(ctxPeopleWeight, 'bar', {
        labels: ['Jan', 'Fev', 'Mar', 'Abr'],
        datasets: [{
            label: 'Peso',
            fill: true,
            borderWidth: 2,
            borderColor: '#2CDA9D',
            data: [160, 152, 148, 130]
        }]
    });
})();