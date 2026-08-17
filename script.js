const WHATSAPP_NUMBER = "5561999999999";
const WHATSAPP_MESSAGE = "Olá, gostaria de conversar sobre meu projeto de arquitetura.";

document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}

document.querySelectorAll(".faq-item").forEach(item => {
  const button = item.querySelector("button");
  button.addEventListener("click", () => {
    document.querySelectorAll(".faq-item").forEach(other => {
      if (other !== item) other.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});
