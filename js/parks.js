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

        card.querySelector(".card").addEventListener("click", function () {

          fetch("../pages/templates/park.html")
            .then((response) => response.text())
            .then((parkData) => {
              document.getElementById("content").innerHTML = parkData;

              document.getElementById("parkName").textContent = object.name;
              // document.getElementById("parkDescription").textContent =
              //   object.description;
              document.getElementById("parkPicture").src = object.images[0];
            });
        });

        card.querySelector(".parkTitle").textContent = object.name;

        if (object.images) {
          card.querySelector(".parkMainImage").src = object.images[0];
        } else {
          card.querySelector(".parkMainImage").src =
            "../img/No_Image_Available.jpg";
        }

        // card.querySelector(".parkDescription").textContent = object.description;

        ul.appendChild(card);
      });
    });
}

export { loadParks };
