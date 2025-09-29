// Sales (Farmer Earnings vs Buyer Savings)
const ctx1 = document.getElementById("salesChart").getContext("2d");
new Chart(ctx1, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Farmer Earnings ($)",
        data: [500, 800, 1200, 1500, 1300, 1700],
        borderColor: "#2e7d32",
        backgroundColor: "rgba(46, 125, 50, 0.3)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Buyer Savings ($)",
        data: [200, 400, 600, 700, 650, 900],
        borderColor: "#66bb6a",
        backgroundColor: "rgba(102, 187, 106, 0.3)",
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: { legend: { position: "top" } },
  },
});

// Donations (Food given to NGOs)
const ctx2 = document.getElementById("donationChart").getContext("2d");
new Chart(ctx2, {
  type: "pie",
  data: {
    labels: ["Tomatoes", "Rice", "Potatoes", "Wheat", "Other"],
    datasets: [
      {
        label: "Donations (kg)",
        data: [120, 90, 60, 150, 70],
        backgroundColor: [
          "#2e7d32",
          "#66bb6a",
          "#81c784",
          "#a5d6a7",
          "#c8e6c9",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: { legend: { position: "right" } },
  },
});

// Barter Transactions
const ctx3 = document.getElementById("barterChart").getContext("2d");
new Chart(ctx3, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Barter Deals",
        data: [10, 14, 20, 18, 22, 25],
        backgroundColor: "#43a047",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true },
    },
  },
});
