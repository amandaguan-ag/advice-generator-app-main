document.getElementById("dice-button").addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const adviceSlip = data.slip;
      document.getElementById("advice-id").textContent = adviceSlip.slip_id;
      document.getElementById("advice-text").textContent = adviceSlip.advice;
    })
    .catch((error) => {
      console.error("Error fetching advice:", error);
    });
});
