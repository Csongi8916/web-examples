const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];
const offeringBarColors = ["red", "green","blue","orange","brown"];

new Chart("offeringChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: offeringBarColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});