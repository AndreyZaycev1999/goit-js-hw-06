const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liListRef = ingredients.map((name) => {
  const liRef = document.createElement('li');
  liRef.textContent = name;
  return liRef;
});

const ulIng = document.querySelector('#ingredients');
ulIng.append(...liListRef);