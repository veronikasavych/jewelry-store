const products = [
    {id: 1, name: "Браслет Pearl Rose", price: 450, img: "assets/img/sample1.jpg"},
    {id: 2, name: "Сережки Silver Drops", price: 390, img: "assets/img/sample2.jpg"},
    {id: 3, name: "Кольє Crystal Shine", price: 520, img: "assets/img/sample3.jpg"},
];

function renderProducts(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = products
        .map(p => `
            <div class="product-card">
                <img src="${p.img}" width="150"/>
                <h3>${p.name}</h3>
                <p>${p.price} грн</p>
                <a href="product.html?id=${p.id}">Переглянути</a>
            </div>
        `)
        .join("");
}

renderProducts("popular-products");
renderProducts("all-products");
