// import { parks } from "./const.js";

function loadParks() {
  fetch("../pages/templates/card.html")
    .then((response) => response.text())
    .then((data) => {
      const templateContainer = document.createElement("div");
      templateContainer.innerHTML = data;

      const template = templateContainer.querySelector("#cardTemplate").content;
      const ul = document.getElementById("parkList");

      const parks = JSON.parse(sessionStorage.getItem("parksValues"));

      parks.forEach((object) => {
        const card = template.cloneNode(true);

        card.querySelector(".parkTitle").textContent = object.name;

        if (object.images) {
          card.querySelector(".parkMainImage").src = object.images[0];
        } else {
          card.querySelector(".parkMainImage").src =
            "../img/No_Image_Available.jpg";
        }

        card.querySelector(".parkDescription").textContent = object.description;

        ul.appendChild(card);
      });
    });
}

function loadPark(value) {
  let mapIframe = document.getElementById("map");
  let parkTitle = document.getElementById("mapTitle");

  let iFrame = document.createElement("iframe");
  iFrame.src = value.url;
  iFrame.width = "450";
  iFrame.height = "350";
  iFrame.loading = "lazy";
  iFrame.referrerpolicy = "no-referrer-when-downgrade";

  if (mapIframe.firstChild) {
    mapIframe.removeChild(mapIframe.firstChild);
  }
  mapIframe.appendChild(iFrame);
  parkTitle.textContent = value.name;
}

export { loadParks };
