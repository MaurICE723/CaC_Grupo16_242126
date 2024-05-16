import { getId } from "./commons.js";
import { parkInstallationsCheckboxs } from "./const.js";

let imageUrls = [];

function loadFormSugestions() {
  document.getElementById("addImage").addEventListener("click", () => {
    var imageUrlInput = document.getElementById("imageUrl");
    var imageUrl = imageUrlInput.value.trim();
    if (imageUrl !== "") {
      imageUrls.push(imageUrl);
      imageUrlInput.value = "";
      displayImages();
    }
  });

  const form = document.getElementById("sugestionsForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateForm();
  });

  //Cargar el listado de caracteristicas del parque
  let installationsList = document.getElementById("parkInstallations");

  parkInstallationsCheckboxs.forEach((value) => {
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = value.name; 
    input.name = value.name; 

    installationsList.appendChild(input);

    let label = document.createElement("label");
    label.setAttribute("for", value.name);
    label.textContent = value.label;

    installationsList.appendChild(label);
  });
}

function displayImages() {
  var gallery = document.getElementById("imageGallery");
  gallery.innerHTML = "";
  imageUrls.forEach(function (url) {
    var img = document.createElement("img");
    img.src = url;
    gallery.appendChild(img);
  });
}

function validateForm(event) {
  var name = document.getElementById("name").value;
  // var email = document.getElementById("email").value;
  // var message = document.getElementById("message").value;

  var isValid = true;

  if (name == "") {
    document.getElementById("nameError").textContent =
      "Por favor, ingresa un nombre de parque";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // if (email == "") {
  //   document.getElementById("emailError").textContent =
  //     "Por favor, ingresa tu email";
  //   isValid = false;
  // } else {
  //   document.getElementById("emailError").textContent = "";
  // }

  // if (message == "") {
  //   document.getElementById("messageError").textContent =
  //     "Por favor, ingresa tu mensaje";
  //   isValid = false;
  // } else {
  //   document.getElementById("messageError").textContent = "";
  // }

  if (isValid) {
    sendInfo();
  }

  return isValid;
}

function sendInfo() {
  let newPark = {
    id: getId(),
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    url: document.getElementById("location").value,
    images: [document.getElementById("imageUrl").value],
  };

  let parksList = JSON.parse(sessionStorage.getItem("parksValues"));

  parksList.push(newPark);

  sessionStorage.setItem("parksValues", JSON.stringify(parksList));
}

export { loadFormSugestions, validateForm };
