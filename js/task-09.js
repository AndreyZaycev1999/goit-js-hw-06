function getRandomHexColor() {
  console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector('.color');
const btn = document.querySelector('.change-color');

const handleClick = () => {
  console.log('klick');
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  color.textContent = getRandomHexColor();
};
  

btn.addEventListener("click", handleClick);
