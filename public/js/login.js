const loginForm = document.querySelector("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  try {
    // Next step: authenticate using Supabase
    console.log("Login attempt submitted");

    // Do not redirect until authentication succeeds.
  } catch (error) {
    console.error(error);
    alert("Unable to sign in. Please try again.");
  }
});