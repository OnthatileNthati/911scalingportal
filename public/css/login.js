const loginForm = document.querySelector("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    try {
        console.log("Login attempt submitted");
    } catch (error) {
        console.error("Error during login attempt, Please try again");
    }
});

