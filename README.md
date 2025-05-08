// Optional: Handle form field validation (built-in HTML5 'required' is used, but you can extend validation logic here)
form.addEventListener('submit', (e) => {
    const name = form.querySelector('[name="Name"]').value;
    const email = form.querySelector('[name="Email"]').value;
    const message = form.querySelector('[name="Message"]').value;

    if (!name || !email || !message) {
        e.preventDefault();
        msg.innerHTML = "Please fill all fields!";
        msg.style.color = "#e74c3c";  // Error message color
        setTimeout(() => msg.innerHTML = "", 5000);
    }
});
