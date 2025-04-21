import Swal from "sweetalert2";

document.addEventListener("DOMContentLoaded", () => {
    Swal.fire({
        icon: "info",
        title: "Notice",
        text: "You can only add or delete product on order. If you want to update quantity of product in order, go to orders list page.",
        confirmButtonText: "OK",
    });

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const author = params.get("author");
    const date = params.get("date");
    const status = params.get("status");
    const authorId = params.get("authorId");

    if (id) {
        const title = (document.getElementById(
            "title"
        ).innerHTML = `Edit order`);

        document.getElementById("title-2").innerHTML = `Edit product an order`;

        const orderId = document.getElementById("order-id");
        const authorElement = document.getElementById("author");
        const inputDate = document.getElementById("date");
        const inputStatus = document.getElementById("status");
        if (orderId) {
            orderId.innerText = `#${id}`;
            authorElement.innerText = author;
            inputDate.innerText = date;
            inputStatus.innerText = status;
        }

        const selectCustomerComponent = document.getElementById(
            "select-customer-component"
        );
        selectCustomerComponent.remove();
        const statusSelection = document.getElementById("status-selection");
        statusSelection.remove();
    }

    const form = document.getElementById("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const productIds = formData.getAll("productIds");
        const params = new URLSearchParams();

        for (const [key, value] of formData.entries()) {
            params.append(key, value);
        }

        params.append("method", "ajax");

        const xhr = new XMLHttpRequest();

        if (id) {
            xhr.open(
                "POST",
                `http://localhost:3000/api/orders/${id}/customers/${authorId}`,
                true
            );
        } else {
            xhr.open("POST", "http://localhost:8000/api/orders", true);
        }

        xhr.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
        );

        xhr.onload = function () {
            if (xhr.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: `Order ${id ? "Updated" : "Added"} Successfully`,
                    confirmButtonText: "Return to Orders Page",
                }).then(() => {
                    window.location.href = "http://localhost:5173/orders";
                });
            } else {
                const error = JSON.parse(xhr.response).description;
                Swal.fire({
                    icon: "error",
                    title: `${id ? "Update" : "Add"} Order Failed`,
                    text: `An error occurred while create the order.${
                        error ? `Error: ${error}` : ""
                    }`,
                });
            }
        };

        xhr.onerror = function () {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "An error occurred while connecting to the server.",
            });
        };

        xhr.send(params.toString());
    });
});
