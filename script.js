const btn = document.getElementById("loginBtn");
const user = document.getElementById("user");
const pass = document.getElementById("pass");

btn.addEventListener("click", () => {
  const attemptedLogin =
    user.value.trim().length > 0 || pass.value.trim().length > 0;

  // Umami event logging
  if (window.umami) {
    umami.track(
      attemptedLogin ? "login_attempt_input" : "login_attempt_no_input"
    );
  }

  window.location.href = "reveal.html?attempt=" + (attemptedLogin ? "1" : "0");
});
