const cards = document.querySelectorAll(".skill-card");

const infoPanel = document.getElementById("infoPanel");
const panelTitle = document.getElementById("panelTitle");
const panelDescription = document.getElementById("panelDescription");
const closeBtn = document.getElementById("closeBtn");
const navLinks = document.querySelectorAll('a[href$=".html"], a[href^="./"], a[href^="/"]');
const FADE_OUT_CLASS = "fade-out";

window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove(FADE_OUT_CLASS);
});

/* OPEN PANEL */

if (cards.length && infoPanel && panelTitle && panelDescription) {
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const title = card.getAttribute("data-title");
            const description = card.getAttribute("data-description");

            panelTitle.textContent = title;
            panelDescription.textContent = description;
            infoPanel.classList.add("active");
        });
    });
}

/* CLOSE PANEL */

if (closeBtn && infoPanel) {
    closeBtn.addEventListener("click", () => {
        infoPanel.classList.remove("active");
    });
}

/* CLOSE WHEN CLICKING OUTSIDE */

if (infoPanel) {
    window.addEventListener("click", (e) => {
        if (e.target === infoPanel) {
            infoPanel.classList.remove("active");
        }
    });
}

/* SMOOTH PAGE TRANSITIONS */

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");

        if (!href || href.startsWith("mailto:") || href.startsWith("tel:") || link.target === "_blank" || /^https?:\/\//i.test(href)) {
            return;
        }

        if (href.startsWith("#")) {
            return;
        }

        e.preventDefault();
        document.body.classList.add(FADE_OUT_CLASS);

        setTimeout(() => {
            window.location.href = href;
        }, 380);
    });
});