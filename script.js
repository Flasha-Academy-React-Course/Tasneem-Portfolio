// Theme Toggle
const themeButton = document.getElementById("themeButton");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "Light Mode";
}

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeButton.textContent = "Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        themeButton.textContent = "Dark Mode";
    }
});


// Projects Filter
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedCategory = button.getAttribute("data-filter");

        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach(function (card) {
            const cardCategory = card.getAttribute("data-category");

            if (selectedCategory === "all" || cardCategory === selectedCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});


// Contact Form Validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    if (message.length < 10) {
        formMessage.textContent = "Message must be at least 10 characters.";
        return;
    }

    formMessage.textContent = "Your message was sent successfully!";
    contactForm.reset();
});


// Project Modal
const modal = document.getElementById("projectModal");
const closeModal = document.getElementById("closeModal");
const modalButtons = document.querySelectorAll(".modal-button");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");
const modalCategory = document.getElementById("modalCategory");

modalButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const card = button.closest(".project-card");

        modalTitle.textContent = card.querySelector("h3").textContent;
        modalDescription.textContent = card.querySelector(".project-content p").textContent;
        modalCategory.textContent = card.querySelector(".category").textContent;
        modalTech.textContent = Array.from(card.querySelectorAll(".tech-tags span"))
            .map(function (tag) {
                return tag.textContent;
            })
            .join(", ");

        modal.classList.add("show");
    });
});

closeModal.addEventListener("click", function () {
    modal.classList.remove("show");
});

modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});
