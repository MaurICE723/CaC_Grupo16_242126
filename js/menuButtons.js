import { loadParks } from "./parks.js";
import { loadMembers } from "./members.js";
import { loadFormSugestions } from "./sugestions.js";

//Defino los botones
const botones = [
  {
    label: "Home",
    onAction: () => {
      document.title = "Pagina de proyecto integrador";
      sessionStorage.setItem("page", "home");
      loadPage();
    },
  },
  {
    label: "Acerca de. . . ",
    onAction: () => {
      document.title = "Acerca de...";
      sessionStorage.setItem("page", "about");
      loadPage();
    },
  },
  {
    label: "Sugerencias",
    onAction: () => {
      document.title = "Sugerencias";
      sessionStorage.setItem("page", "sugestions");
      loadPage();
    },
  },
];

//Al cargar inicialmente se cargan los botones del menú
function loadButtons() {
  var typeButtonsMenu = document.getElementById("botonera");
  botones.forEach(function (objeto) {
    var button = document.createElement("button");
    button.textContent = objeto.label;
    button.onclick = objeto.onAction;
    typeButtonsMenu.appendChild(button);
  });

  var typeListMenu = document.getElementById("dropdownContent");
  botones.forEach(function (objeto) {
    var button = document.createElement("li");
    button.textContent = objeto.label;
    button.onclick = objeto.onAction;
    typeListMenu.appendChild(button);
  });

  document.getElementById("homeTitle").addEventListener("click", (e) => {
    document.title = "Pagina de proyecto integrador";
    sessionStorage.setItem("page", "home");
    loadPage();
  });

  document
    .getElementById("dropdownImage")
    .addEventListener("click", function () {
      const dropdownContent = document.getElementById("dropdownContent");
      dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
    });

  document.addEventListener("click", function (event) {
    const dropdownContent = document.getElementById("dropdownContent");
    const isClickInside = document
      .querySelector(".dropdown")
      .contains(event.target);

    if (!isClickInside) {
      dropdownContent.style.display = "none";
    }
  });
}


// Carga el contenido de la pagina segun el boton que se haya oprimido
function loadPage() {
  let pageValue = sessionStorage.getItem("page");

  fetch(`pages/${pageValue}.html`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
      switch (pageValue) {
        case "home":
          loadParks();
          break;
        case "about":
          loadMembers();
          break;
        case "sugestions":
          loadFormSugestions();
          break;
      }
    })
    .catch((error) => console.error("Error al cargar el contenido:", error));
}

export { loadButtons, loadPage };
