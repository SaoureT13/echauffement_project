import Swal from "sweetalert2";

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    console.log(params)
    const id = params.get("id");
    const name = params.get("name");
    const email = params.get("email");
    const address = params.get("address");
    const phone = params.get("phone");

    if (id) {
        const orderSection = document.getElementById("order-section");
        orderSection.remove();

        const title = (document.getElementById(
            "title"
        ).innerHTML = `Edit customer: ${id}`);
        const inputName = document.getElementById("name");
        const inputPhone = document.getElementById("phone");
        const inputEmail = document.getElementById("email");
        const inputAddress = document.getElementById("address");
        if (inputName) {
            inputName.value = name;
            inputPhone.value = phone;
            inputEmail.value = email;
            inputAddress.value = address;
        }
    }

    const form = document.getElementById("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const selectedProducts = formData.getAll("selectedProducts");
        const params = new URLSearchParams();

        for (const [key, value] of formData.entries()) {
            params.append(key, value);
        }

        params.append("method", "ajax");

        const xhr = new XMLHttpRequest();

        if (id) {
            xhr.open("POST", `http://localhost:3000/api/customers/${id}`, true);
        } else {
            xhr.open("POST", "http://localhost:8000/api/customers", true);
        }

        xhr.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
        );

        xhr.onload = function () {
            if (xhr.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: `Customer ${id ? "Updated" : "Added"} Successfully`,
                    text:
                        selectedProducts.length > 0
                            ? "Order has been successfully initialized too."
                            : "",
                    confirmButtonText: "Return to Customers Page",
                }).then(() => {
                    window.location.href = "http://localhost:5173/customers";
                });
            } else {
                const error = JSON.parse(xhr.response).description;
                Swal.fire({
                    icon: "error",
                    title: `${id ? "Update" : "Registration"} Customers Failed`,
                    text: `An error occurred while adding the customer.${
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
