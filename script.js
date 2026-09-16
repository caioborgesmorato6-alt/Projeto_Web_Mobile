// Menu responsivo do Conecta Cidade.

const menuBtn = document.getElementById("menu-btn");
const menuNavegacao = document.getElementById("menu-navegacao");

menuBtn.addEventListener("click", function () {
    menuNavegacao.classList.toggle("menu-aberto");

    const menuEstaAberto = menuNavegacao.classList.contains("menu-aberto");

    menuBtn.setAttribute("aria-expanded", menuEstaAberto);

    if (menuEstaAberto) {
        menuBtn.innerHTML = "✕";
        menuBtn.setAttribute("aria-label", "Fechar menu");
    } else {
        menuBtn.innerHTML = "☰";
        menuBtn.setAttribute("aria-label", "Abrir menu");
    }
});

const linksMenu = menuNavegacao.querySelectorAll("a");

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        menuNavegacao.classList.remove("menu-aberto");
        menuBtn.innerHTML = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Abrir menu");
    });
});
