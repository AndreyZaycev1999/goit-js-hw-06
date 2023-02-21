const list = document.querySelector("#categories");
const items = document.querySelectorAll(".item");
console.log("Number of categories: " + list.children.length);

for (let index = 0; index < list.children.length; index++) {
    const header = items[index].children[0].textContent;
    const item = items[index].children[1].children.length;
    console.log('');
    console.log(header);
    console.log(item);
}
