const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");

nameInput.addEventListener("input", (event) => {
    if (event.currentTarget.value.length > 0) {
        nameOutput.textContent = event.currentTarget.value;
    } else {
        nameOutput.textContent = "Anonymous";
    };
  });