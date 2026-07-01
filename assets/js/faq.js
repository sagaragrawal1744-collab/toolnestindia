document.querySelectorAll(".faq-question")
.forEach(button => {
    button.addEventListener("click", () => {
        button.nextElementSibling.classList.toggle("show-answer");
    });
});