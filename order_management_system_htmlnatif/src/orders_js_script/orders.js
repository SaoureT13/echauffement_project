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
    } else {
        const elem = document.getElementById("order-info");
        elem.remove();
    }

    const form = document.getElementById("form");
    form.action = id
        ? `http://localhost:3000/api/orders/${id}/customers/${authorId}`
        : `http://localhost:8000/api/orders`;
});
