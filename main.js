// زبان پیش‌فرض
let currentLang = "fa";

// لود محتوای چندزبانه
async function loadLanguage(lang) {
    const response = await fetch(`./lang/${lang}.json`);
    const data = await response.json();

    document.querySelectorAll("[data-key]").forEach((el) => {
        const key = el.getAttribute("data-key");
        if (data[key]) el.textContent = data[key];
    });

    currentLang = lang;
    localStorage.setItem("site-lang", lang);
}

// تغییر زبان با دکمه‌ها
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("site-lang") || "fa";
    loadLanguage(savedLang);

    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang");
            loadLanguage(lang);
        });
    });
});
