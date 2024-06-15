
document.addEventListener("DOMContentLoaded", function () {
  const inputElement = document.querySelector("#controls input");
  const createButton = document.querySelector("[data-create]");
  const destroyButton = document.querySelector("[data-destroy]");
  const boxesContainer = document.querySelector("#boxes");

  createButton.addEventListener("click", createBoxes);
  destroyButton.addEventListener("click", destroyBoxes);

  function createBoxes() {
    const amount = parseInt(inputElement.value);
    if (isNaN(amount) || amount < 1 || amount > 100) {
      alert("Please enter a valid number between 1 and 100.");
      return;
    }

    boxesContainer.innerHTML = ""; // Clear 

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = ""; // Clear all 
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
  }
});
