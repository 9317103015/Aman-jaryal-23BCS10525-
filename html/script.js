const products = [
  { name: "T-Shirt", category: "clothing" },
  { name: "Jeans", category: "clothing" },
  { name: "Headphones", category: "electronics" },
  { name: "Smartphone", category: "electronics" },
  { name: "Novel", category: "books" },
  { name: "Cookbook", category: "books" }
];

const productListEl = document.getElementById("product-list");
const categorySelect = document.getElementById("category");

function renderProducts(category) {
  productListEl.innerHTML = "";
  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  filtered.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-item";
    div.textContent = product.name;
    productListEl.appendChild(div);
  });
}

categorySelect.addEventListener("change", (e) => {
  renderProducts(e.target.value);
});

// Initial render (show all products)
renderProducts("all");
