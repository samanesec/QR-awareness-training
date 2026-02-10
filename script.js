const btn = document.getElementById("loginBtn");
const user = document.getElementById("user");
const pass = document.getElementById("pass");

btn.addEventListener("click", () => {
  // Vi lagrer ikke innhold. Bare om feltene ble brukt.
  const attemptedLogin = (user.value.trim().length > 0) || (pass.value.trim().length > 0);

  // Legg attemptedLogin i URL-en til reveal-siden (true/false)
  // Dette gir dere en enkel måte å telle "forsøk" på uten å lagre data.
  window.location.href = `reveal.html?attempt=${attemptedLogin ? "1" : "0"}`;
});

