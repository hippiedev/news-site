const article = document.querySelector('article');
const fontSizeSelector = document.querySelector('.fontsize');
const fontOptionsDisplay = document.querySelector('.font-options');
const smallFontOption = document.querySelector('#small_text');
const mediumFontOption = document.querySelector('#medium_text');
const largeFontOption = document.querySelector('#large_text');

//toggle font options display
fontSizeSelector.addEventListener("click", () => {
    fontOptionsDisplay.classList.toggle("active");
})

// display small font size
smallFontOption.addEventListener("click", () => {
    article.style.fontSize = "18px";
    article.style.lineHeight = "30px";
})

// display medium font size
mediumFontOption.addEventListener("click", () => {
    article.style.fontSize = "20px";
    article.style.lineHeight = "32px";
})

// display large font size

largeFontOption.addEventListener("click", () => {
    article.style.fontSize = "22px";
    article.style.lineHeight = "34px";
})

