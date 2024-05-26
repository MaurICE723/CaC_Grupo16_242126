import { getId } from "./commons.js";
import { parkInstallationsCheckboxs } from "./const.js";

let imageUrls = [];


//Se ejecuta cuando se carga la pagina de sugerencias.  
function loadFormSugestions() {

  // agrega e evento para inluir la imagen indicada
  document.getElementById("addImage").addEventListener("click", () => {
    let imageUrlInput = document.getElementById("imageUrl");
    let imageUrl = imageUrlInput.value.trim();
    if (imageUrl !== "") {
      imageUrls.push(imageUrl);
      imageUrlInput.value = "";
      displayImages();
    }
  });

  // agrega el evento para el submit
  const form = document.getElementById("sugestionsForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateForm();
  });

  //Cargar el listado de caracteristicas del parque
  // el listado de caracteristicas viene desde las constantes, asi que puede varias, por lo que se carga dinamicamente. 
  let installationsList = document.getElementById("parkInstallations");

  parkInstallationsCheckboxs.forEach((value) => {
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = value.name; 
    input.name = "installations"; 

    installationsList.appendChild(input);

    let label = document.createElement("label");
    label.setAttribute("for", value.name);
    label.textContent = value.label;

    installationsList.appendChild(label);
  });
}

// carga la imagen en la mini galeria
function displayImages() {
  let gallery = document.getElementById("imageGallery");
  gallery.innerHTML = "";
  imageUrls.forEach(function (url) {
    let img = document.createElement("img");
    img.src = url;
    gallery.appendChild(img);
  });
}


//validaciones del formulario
function validateForm(event) {
  let name = document.getElementById("name").value;
  let radioButtons = document.querySelectorAll('input[name="type"]');
  let location = document.getElementById("location").value;

  let isValid = true;

  //Nombre
  if (!name) {
    document.getElementById("nameError").textContent =
      "Por favor, ingresa un nombre de parque";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  //Tipo de parque
  if (!Array.from(radioButtons).some(radioButton => radioButton.checked)) {
    document.getElementById("typeError").textContent =
      "Hay que seleccionar un tipo de parque";
    isValid = false;
  } else {
    document.getElementById("typeError").textContent = "";
  }

  //Ubicacion 
  if (!location ) {
    document.getElementById("locationError").textContent =
      "Se necesita la ubicacion del parque";
    isValid = false;
  } else {
    document.getElementById("locationError").textContent = "";
  }

  if (isValid) {
    sendInfo();
  }

  return isValid;
}


//Envia el formulario para cargar el parque en el home
function sendInfo() {
  let radioButtons = document.querySelectorAll('input[name="type"]');
  let selectedPark = Array.from(radioButtons).find(radioButton => radioButton.checked);

  const checkboxes = document.querySelectorAll('input[name="installations"]:checked');
  const selectedValues = Array.from(checkboxes).map(checkbox => checkbox.id);

  let newPark = {
    id: getId(),
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    url: document.getElementById("location").value,
    images: imageUrls ? imageUrls : [],
    type: selectedPark.value,
    installations: selectedValues

  };

  let parksList = JSON.parse(sessionStorage.getItem("parksValues"));

  // Agrega el parque a la lista
  parksList.push(newPark);

  // muestra la notificacion
  sessionStorage.setItem("parksValues", JSON.stringify(parksList));
  
  // muestra la notificacion de que se agregó exitosamente
  showNotification() ;
}


// activa el mensaje de la notificacion
function showNotification() {
  var notification = document.getElementById("notification");
  notification.classList.add("show");

  // Ocultar la notificación después de 3 segundos
  setTimeout(function(){
      notification.classList.remove("show");
  }, 3000);
}

export { loadFormSugestions, validateForm };
