const Chart = require("chart.js/auto");

const labels = ["Epic 1", "Epic 2", "Epic 3", "Epic 4"];
const data = {
  labels: labels,
  datasets: [
    {
      axis: 'y',
      label: "Epic Chart",
      data: [
        {x: [0, 5], y: "Epic 1"},
        {x: [10, 20], y: "Epic 1"},
        {x: [20, 25], y: "Epic 2"}, 
        {x: [30, 55], y: "Epic 3"}, 
        {x: [60, 70], y: "Epic 4"}],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)"
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)"
      ],
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    indexAxis: 'y',
    y: {
      beginAtZero: false,
    }
  },
};


const ctx = document.getElementById("epicChart");
new Chart(ctx, config);