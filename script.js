function openAdminMode() {
    let password = prompt("Enter Admin Password:");
    if (password === "0100110110") {
        window.location.href = "admin.html";
    } else {
        alert("Incorrect password!");
    }
}

