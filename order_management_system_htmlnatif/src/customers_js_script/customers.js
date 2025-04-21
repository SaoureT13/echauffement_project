document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const name = params.get("name");
    const email = params.get("email");
    const address = params.get("address");
    const phone = params.get("phone");

    if (id) {
        const form = document.getElementById("form");
        form.action = id
            ? `http://localhost:3000/api/customers/${id}`
            : "http://localhost:8000/api/customers";

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
});
