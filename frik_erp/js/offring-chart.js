const offers = [1, 2, 3, 4, 5];

const values = [
  [500000, 1000000, 1300000, 4000000, 100000], // new
  [1000000, 2000000, 100000, 3000000, 200000], // sent
  [3000000, 4000000, 900000, 1500000, 2800000], // accepted
  [1800000, 0, 2000000, 10000, 0], // rejected
  [2000000, 100000, 2500000, 1500000, 3500000] // modified
];

const data = {
  labels: offers,
  datasets: [
    {
      label: 'Új',
      data: values[0],
      backgroundColor: 'orange',
      stack: 'Stack 0',
    },
    {
      label: 'Kiküldve',
      data: values[1],
      backgroundColor: 'blue',
      stack: 'Stack 1',
    },
    {
      label: 'Elfogadva',
      data: values[2],
      backgroundColor: 'green',
      stack: 'Stack 2',
    },
    {
      label: 'Elutasítva',
      data: values[3],
      backgroundColor: 'red',
      stack: 'Stack 3',
    },
    {
      label: 'Módosítva',
      data: values[4],
      backgroundColor: 'yellow',
      stack: 'Stack 4',
    },
  ]
};

new Chart("incomingChart", {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      },
      yAxes: [{
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 4000000,
          stepSize: 500000,
          callback: function(label, index, labels) {
            return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
        }
      }]
    },
  }
});
