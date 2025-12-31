// dialog.js
const EMAIL = "michael@a-kuehn.dev";

const copyBtn = document.getElementById("copy-mail");
const openMailBtn = document.getElementById("open-mail");
const toast = document.getElementById("toast");

function showToast(text) {
  if (!toast) {
    alert(text); 
    return;
  }
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1400);
}

function fallbackCopy(text) {
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(EMAIL);
    showToast("E-Mail copied ✔");
  } catch {
    fallbackCopy(EMAIL);
    showToast("E-Mail copied ✔");
  }
}

function openMailClient() {
  const subject = encodeURIComponent("Kontakt über a-kuehn.dev");
  const body = encodeURIComponent(
    "Hi Michael,\n\n" +
    "ich melde mich wegen …\n\n" +
    "Name:\n" +
    "Firma:\n" +
    "Telefon (optional):\n\n" +
    "Viele Grüße\n"
  );

  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}

if (copyBtn) {
  copyBtn.addEventListener("click", copyEmail);
}

if (openMailBtn) {
  openMailBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openMailClient();
  });
}
// Portfolio
const portfolioBtn = document.getElementById("portfolio-soon");

portfolioBtn.addEventListener("click", () => {
  showToast("Portfolio in progress");
});