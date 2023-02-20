let fontSizeInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
console.log(fontSizeInput.value);


fontSizeInput.addEventListener("input", (event) => {
    text.style.fontSize = `${event.currentTarget.value}px`;
    document.body.append(text);
  });