import {selectPark} from "./commons.js";

function loadParks() {
  fetch("../pages/templates/card.html")
    .then((response) => response.text())
    .then((data) => {
      const templateContainer = document.createElement("div");
      templateContainer.innerHTML = data;

      const template = templateContainer.querySelector("#cardTemplate").content;
      const ul = document.getElementById("parkList");

      const parks = JSON.parse(sessionStorage.getItem("parksValues"));

      parks.forEach(({ id, name, images }) => {
        const card = template.cloneNode(true);
        card.querySelector(".card").addEventListener("click", function () {
              selectPark(parseInt(id));
        });

        card.querySelector(".parkTitle").textContent = name;

        if (images) {
          card.querySelector(".parkMainImage").src = images[0];
        } else {
          card.querySelector(".parkMainImage").src =
            "../img/No_Image_Available.jpg";
        }

        ul.appendChild(card);
      });
    });
}

export { loadParks };
