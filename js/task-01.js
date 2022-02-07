const list = document.querySelector("#categories");
const items = list.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
items.forEach((node) => {
  const h2 = node.querySelector("h2");
  const nodeItems = node.querySelectorAll("li");
  console.log(` - category ${h2.textContent} (Elements: ${nodeItems.length})`);
});
