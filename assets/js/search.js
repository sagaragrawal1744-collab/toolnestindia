const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }

    });

});