function login(username, password) {
    return username === "admin" && password === "1234";
}

// Browser functionality
if (typeof document !== "undefined") {
    const form = document.getElementById("loginForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const result = login(username, password);

            document.getElementById("result").textContent =
                result ? "Login Successful" : "Login Failed";
        });
    }
}

// Export for Jest
if (typeof module !== "undefined") {
    module.exports = login;
}
