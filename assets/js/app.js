const toolGrid = document.getElementById("tool-grid");

fetch("data/tools.json")
  .then(response => response.json())
  .then(data => {

    data.forEach(tool => {

      const card = document.createElement("div");

      card.classList.add("card");

      card.innerHTML = `
        <h2>${tool.icon}</h2>
        <h3>${tool.name}</h3>
        <p>${tool.category}</p>
      `;

      card.addEventListener("click", () => {
        window.location.href = tool.url;
      });

      toolGrid.appendChild(card);

    });

  });
  const hamburger =
document.getElementById("hamburger");

const navLinks =
document.getElementById("nav-links");

if(hamburger){
    hamburger.addEventListener(
        "click",
        () => {
            navLinks.classList.toggle(
                "active"
            );
        }
    );
}