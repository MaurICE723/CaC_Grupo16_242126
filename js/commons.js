// import { parks } from "./const.js";


//Obtendo un ID para el indice de los parques
function getId() {
  const parksObjects = JSON.parse(sessionStorage.getItem("parksValues"));
  const maxId = parksObjects.reduce((max, obj) => {
    return obj.id > max ? obj.id : max;
  }, 0);

  return maxId + 1;
}


// funcion que muestra el parque seleccionado
function selectPark(park) {
  const parks = JSON.parse(sessionStorage.getItem("parksValues"));

  let parkSelected;
  if (park === 0) {
    parkSelected = parks[parks.length - 1];
  } else if (park > 0 && park <= parks.length) {
    parkSelected = parks.find((obj) => obj.id === park) || parks[0];
  } else {
    parkSelected = parks[0];
  }

  const { name, description, url, images, installations, id, type } =
    parkSelected;

  fetch("../pages/templates/park.html")
    .then((response) => response.text())
    .then((parkData) => {
      sessionStorage.setItem("currentPark", id);
      document.getElementById("content").innerHTML = parkData;
      document.getElementById("parkName").textContent = name;

      let parkType = document.getElementById("parkType");

      switch (type) {
        case "parque":
          parkType.textContent = "Parque";
          parkType.setAttribute("class", "badge green");
          break;
        case "plaza":
          parkType.textContent = "Plaza";
          parkType.setAttribute("class", "badge blue");
          break;
        case "lugarHistorico":
          parkType.textContent = "Lugar historco";
          parkType.setAttribute("class", "badge yellow");
          break;
      }

      document.getElementById("parkDescription").textContent = description;
      document.getElementById("parkLocation").src = url;
      document.getElementById("prevButton").addEventListener("click", (e) => {
        e.preventDefault();
        selectPark(parseInt(sessionStorage.getItem("currentPark")) - 1);
      });
      document.getElementById("nextButton").addEventListener("click", (e) => {
        e.preventDefault();
        selectPark(parseInt(sessionStorage.getItem("currentPark")) + 1);
      });

      let perks = installations || null;

      if (images) {
        document.getElementById("parkPicture").src = images[0];

        let imageGallery = document.getElementById("parkGalleryList");

        images.forEach((image) => {
          let li = document.createElement("li");
          let img = document.createElement("img");

          img.src = image;
          img.onclick = () => {
            document.getElementById("parkPicture").src = image;
          };

          li.appendChild(img);
          li.setAttribute("class", "galleryItem");
          imageGallery.appendChild(li);
        });
      } else {
        document.getElementById("parkPicture").src =
          "../img/No_Image_Available.jpg";
      }

      let installation = document.getElementById("parkInstallations");
      if (perks) {
        installation.className = "parkSpecs";
        perks.forEach((value) => {

          let h4 = document.createElement("h4");
          h4.textContent = value;
          h4.setAttribute("class", "parkInstallation");

          installation.appendChild(h4);
        });

      } else {
        installation.className = "noneSpecs";
      }

    });
}

export { getId, selectPark };
