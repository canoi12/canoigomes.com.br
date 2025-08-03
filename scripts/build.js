console.log("Testando")
$("#site-header").load("/partials/header.html");

function updateNavMenu() {
    if (!navDiv) navDiv = document.getElementById('nav-menu');
    let x = window.matchMedia('screen and (max-width: 719px)');
    if (!x.matches) {
        navShow = true;
        navDiv.style.display = 'block';
    } else {
        navShow = false;
        navDiv.style.display = 'none';
    }
}

function loadHash() {
    const hash = window.location.hash.substring(1); // tira o # do começo
    if (!hash) {
        // openPage("home");
    } else {
        // openPage(hash);
    }
}