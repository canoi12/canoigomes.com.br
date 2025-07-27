var title = document.getElementById('home-title');

if (title) {
    title.innerHTML = home_texts[lang].title
}

var text = document.getElementById('home-text-1');
if (text) {
    text.innerHTML = home_texts[lang].text
}
