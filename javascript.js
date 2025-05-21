document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    const contactInfo = document.querySelector(".contact-info");
    if (contactInfo) {
        contactInfo.addEventListener("click", () => {
            alert("Entre em contato conosco pelo email: codecrewsupport@gmail.com");
        });
    }

    document.querySelectorAll("nav a").forEach(link => {
        link.title = `Ir para ${link.textContent}`;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
    const container2 = document.querySelector(".container2");
    if (container2) {
        container2.classList.add("fade-in");
    }
});