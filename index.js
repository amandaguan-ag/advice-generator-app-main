document.getElementById("dice-button").addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const adviceSlip = data.slip || data; 
      if (
        adviceSlip &&
        (adviceSlip.slip_id || adviceSlip.id) &&
        adviceSlip.advice
      ) {
        document.getElementById("advice-id").textContent =
          adviceSlip.slip_id || adviceSlip.id;
        document.getElementById("advice-text").textContent = adviceSlip.advice;
      } else {
        console.error(
          "Error: slip_id or advice not found in the response",
          adviceSlip
        );
      }
    })
    .catch((error) => {
      console.error("Error fetching advice:", error);
    });
});
