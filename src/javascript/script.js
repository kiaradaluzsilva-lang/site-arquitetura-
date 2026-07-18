// ===============================
// MENU MOBILE
// ===============================

const menuButton = document.querySelector("#menu-button");
const menuIcon = menuButton.querySelector("i");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileLinks = document.querySelectorAll("#mobile-menu a");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {
        menuIcon.classList.remove("ri-menu-3-line");
        menuIcon.classList.add("ri-close-line");
    } else {
        menuIcon.classList.remove("ri-close-line");
        menuIcon.classList.add("ri-menu-3-line");
    }

});

document.querySelectorAll('nav a[href^="#"]').forEach(link => {

    link.addEventListener('click', e => {

        const target = document.querySelector(link.getAttribute('href'));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior: 'smooth'

            });

        }

    });

});

// Fecha o menu ao clicar em um link

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        menuIcon.classList.remove("ri-close-line");
        menuIcon.classList.add("ri-menu-3-line");
        menuButton.setAttribute(
            "aria-label",
            mobileMenu.classList.contains("active")
            ? "Fechar menu de navegação" 
            : "Abrir menu de navegação"
         );
        
    });

});

// Fecha o menu ao voltar para desktop

window.addEventListener("resize", () => {

    if (window.innerWidth > 900) {

        mobileMenu.classList.remove("active");

        menuIcon.classList.remove("ri-close-line");
        menuIcon.classList.add("ri-menu-3-line");

    }

});

// ======================
// FAQ
// ======================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {

        // Fecha os outros FAQs
        faqItems.forEach(otherItem => {

            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }

        });

        // Abre ou fecha o clicado
        item.classList.toggle('active');

    });

});