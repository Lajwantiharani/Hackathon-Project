const trackingForm = document.getElementById("trackingForm");
const orderDetails = document.getElementById("orderDetails");

trackingForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const orderId = document.getElementById("orderId").value.trim();
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const order = orders.find((o) => o.orderId === orderId);

  if (!order) {
    alert("❌ Order not found!");
    orderDetails.style.display = "none";
    return;
  }

  // Fill details dynamically
  document.getElementById("detailOrderId").textContent = order.orderId;
  document.getElementById("detailFarmer").textContent = order.farmer;
  document.getElementById("detailBuyer").textContent = order.buyer;
  document.getElementById("detailItem").textContent = order.item;
  document.getElementById("detailQty").textContent = order.quantity;
  document.getElementById("detailPrice").textContent = order.price;

  orderDetails.style.display = "block";

  // Reset progress
  document.querySelectorAll(".progress-step").forEach((step) => {
    step.classList.remove("active");
  });

  // Activate correct steps
  for (let i = 1; i <= order.status; i++) {
    document.getElementById("step" + i).classList.add("active");
  }
});
