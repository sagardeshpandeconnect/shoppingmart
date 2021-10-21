
// ================================
//         Show Products
// ================================

fetch('products.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(data) {
    const productsContainer = document.querySelector(".products-container");
    for (i = 0; i < data.length; i++) {
        const produtcsDiv = document.createElement("div");
        produtcsDiv.innerHTML = `<article>
        <a href="details.html"><img class="product-image" src=${data[i].image} alt=""></a>
        <a href="details.html">
            <h4>${data[i].title}</h4>
        </a>
        <div class="rating">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-half-line"></i>
        </div>
        <p>$${data[i].price}</p>
        </article>`;
        productsContainer.appendChild(produtcsDiv);
    }
}
// ================================
//         Menu Toggle
// ================================
let menuItems = document.getElementById("menu_items");
menuItems.style.maxHeight = "0px";

function menuToggle() {
    if (menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight = "200px";

    }
    else {
        menuItems.style.maxHeight = "0px";
    }
}
// ================================
//         For Details Page
// ================================
var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("small_img");

smallImg[0].onclick = function () {
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    productImg.src = smallImg[3].src;
}
// ================================
//         Account Form
// ================================
