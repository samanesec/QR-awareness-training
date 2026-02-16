const btn = document.getElementById("loginBtn");
const user = document.getElementById("user");
const pass = document.getElementById("pass");

btn.addEventListener("click", () => {
  const attemptedLogin =
    user.value.trim().length > 0 || pass.value.trim().length > 0;

  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-F738RE1812"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-F738RE1812');
</script>

  // Umami event logging (kun adferd)
  if (window.umami) {
    umami.track(
      attemptedLogin ? "login_attempt_input" : "login_attempt_no_input"
    );
  }

  window.location.href = `reveal.html?attempt=${attemptedLogin ? "1" : "0"}`;
});
