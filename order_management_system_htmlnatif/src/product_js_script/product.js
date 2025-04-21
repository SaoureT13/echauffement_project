import "../style.css";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const name = params.get("name");
const price = params.get("price");
const stock = params.get("stock");
const categoryId = params.get("categoryId");
let categories = null;

const previewName = document.getElementById("previewName");
const previewPrice = document.getElementById("previewPrice");
const previewStock = document.getElementById("previewStock");
const previewCategory = document.getElementById("previewCategory");

if (id) {
    const title = (document.getElementById(
        "title"
    ).innerHTML = `Edit product id: ${id}`);
    const inputName = document.getElementById("name");
    const inputPrice = document.getElementById("price");
    const inputStock = document.getElementById("stock");
    if (inputName) {
        inputName.value = name;
        inputPrice.value = price;
        inputStock.value = stock;

        previewName.innerText = name;
        previewPrice.innerText = price;
        previewStock.innerText = stock;
    }
}

function fetchCategories() {
    try {
        let xhr = new XMLHttpRequest();

        xhr.open("GET", "http://localhost:3000/api/categories");

        xhr.send();

        xhr.onload = function () {
            if (xhr.status !== 200) {
                alert(`Error ${xhr.status}: ${xhr.statusText}`);
            } else {
                categories = JSON.parse(xhr.response).data;
                const categorySelect =
                    document.getElementById("categorySelect");
                categories.forEach((category) => {
                    const optionElement = document.createElement("option");
                    optionElement.value = category.id;
                    optionElement.textContent = category.title;
                    // console.log(category.id + ": " + categoryId)
                    if (
                        categoryId &&
                        parseInt(category.id) === parseInt(categoryId, 10)
                    ) {
                        optionElement.selected = true;

                        previewCategory.innerText = category.title;
                    }

                    categorySelect.appendChild(optionElement);
                });
            }
        };
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

fetchCategories();

const form = document.getElementById("form");
form.action = id
    ? `http://localhost:3000/api/products/${id}`
    : "http://127.0.0.1:8000/api/products";

form.addEventListener("input", (event) => {
    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) {
        if (key === "name") {
            previewName.innerText = value;
        }
        if (key === "price") {
            previewPrice.innerText = `$${value}`;
        }
        if (key === "stock") {
            previewStock.innerText = value;
        }
        if (key === "category_id") {
            const selectedCategory = categories.find(
                (category) => category.id === value
            );
            if (selectedCategory) {
                previewCategory.innerText = selectedCategory.title;
            }
        }
    }
});
