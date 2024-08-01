const years = [2023, 2024];
const amounts = [1100000, 2100000];
const offeringBarColors = ["blue", "blue"];

new Chart("offeringChart", {
  type: "bar",
  data: {
    labels: years,
    datasets: [{
      backgroundColor: offeringBarColors,
      data: amounts
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 2500000,
          stepSize: 500000,
          callback: function(label, index, labels) {
            return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
        }
      }]
    }
  }
});
