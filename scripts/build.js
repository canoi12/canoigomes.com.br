$("#site-header").load("/partials/header.html", function(response, status, xhr) {
    if (status === "success") {
        console.log("External HTML loaded successfully!");
        const buttons = ['home', 'resume', 'projects', 'decentralize'];
            for (let i in buttons) {
                // console.log(buttons[i])
                let name = buttons[i]
                const btn = document.getElementById(name + '_button');
                // console.log(btn);
                if (btn) btn.innerHTML = sidebar_texts[lang][name]
            }
        // Further actions after the content is in the DOM
    } else if (status === "error") {
        console.error("Error loading external HTML: " + xhr.status + " " + xhr.statusText);
    }
});
console.log("Header loaded");

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

function toggleNavMenu() {
    navShow = !navShow;
    navDiv.style.display = navShow ? 'block' : 'none';
}

function loadHash() {
    const hash = window.location.hash.substring(1); // tira o # do começo
    if (!hash) {
        // openPage("home");
    } else {
        // openPage(hash);
    }
}