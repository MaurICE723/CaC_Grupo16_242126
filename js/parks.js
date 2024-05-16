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
              document.getElementById("parkDescription").textContent =
                object.description;
              document.getElementById("parkLocation").src = object.url;

              let installations = object.installations || [];

              if (object.images) {
                document.getElementById("parkPicture").src = object.images[0];

                let imageGallery = document.getElementById("parkGalleryList");

                object.images.forEach((image) => {
                  let li = document.createElement("li");
                  let img = document.createElement("img");

                  img.src = image;

                  li.appendChild(img);
                  li.setAttribute("class","galleryItem");
                  imageGallery.appendChild(li);
                })


              } else {
                card.querySelector(".parkPicture").src =
                  "../img/No_Image_Available.jpg";
              }

              installations.forEach((value) => {
                let installation = document.getElementById("parkInstallations");

                let h4 = document.createElement("h4");
                h4.textContent = value;
                h4.setAttribute("class", "parkInstallation");

                installation.appendChild(h4);
              });
            });
        });

        card.querySelector(".parkTitle").textContent = object.name;

        if (object.images) {
          card.querySelector(".parkMainImage").src = object.images[0];
        } else {
          card.querySelector(".parkMainImage").src =
            "../img/No_Image_Available.jpg";
        }

        ul.appendChild(card);
      });
    });
}

export { loadParks };
