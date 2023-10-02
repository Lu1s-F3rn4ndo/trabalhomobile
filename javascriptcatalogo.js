const products = [
    { name: "Produto 1", price: 19.99 },
    { name: "Produto 2", price: 29.99 },
    { name: "Produto 3", price: 39.99 },
    // Adicione mais produtos aqui
];

const productsContainer = document.getElementById("products");

function displayProducts() {
    productsContainer.innerHTML = "";
    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Preço: R$ ${product.price.toFixed(2)}</p>
        `;
        productsContainer.appendChild(productDiv);
    });
}

displayProducts();
