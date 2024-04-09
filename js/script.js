import { loadParks} from './parks.js'

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
    label: "Contacto",
    onAction: () => {
      document.title = "Contacto";
      sessionStorage.setItem("page", "contacto");
      loadPage();
      loadForm();
    },
  },
  {
    label: "Boton D",
    onAction: () => {
      alert("Apretaste el botón D");
    },
  },
];

function loadValues () {
  var elementoBotonera = document.getElementById("botonera");

  botones.forEach(function (objeto) {
    var button = document.createElement("button");
    button.textContent = objeto.label;
    button.onclick = objeto.onAction;
    elementoBotonera.appendChild(button);
  });

  let pageValue = sessionStorage.getItem("page");

  if (!pageValue) {
    document.title = "Pagina de proyecto integrador";
    sessionStorage.setItem("page", "home");
  }

}


function loadPage() {
  let pageValue = sessionStorage.getItem("page");

  fetch(`pages/${pageValue}.html`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
      if(pageValue == "home"){
        loadParks();

      }
    })
    .catch((error) => console.error("Error al cargar el contenido:", error));

}

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var isValid = true;

  if (name == "") {
    document.getElementById("nameError").textContent =
      "Por favor, ingresa tu nombre";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  if (email == "") {
    document.getElementById("emailError").textContent =
      "Por favor, ingresa tu email";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  if (message == "") {
    document.getElementById("messageError").textContent =
      "Por favor, ingresa tu mensaje";
    isValid = false;
  } else {
    document.getElementById("messageError").textContent = "";
  }

  if (isValid) {
    sendInfo();
  }

  return isValid;
}

function sendInfo(event) {
  event.preventDefault();
  var formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    interests: [],
  };

  var checkboxes = document.querySelectorAll(
    'input[name="interests[]"]:checked'
  );
  checkboxes.forEach(function (checkbox) {
    formData.interests.push(checkbox.value);
  });

  localStorage.setItem("formValues", JSON.stringify(formData));

  return true;
}

function loadForm() {
  var formData = JSON.parse(localStorage.getItem("formValues"));
  if (formData) {
    document.getElementById("name").value = formData.name || "";
    document.getElementById("email").value = formData.email || "";
    document.getElementById("message").value = formData.message || "";
    document.querySelector(
      'input[name="gender"][value="' + (formData.gender || "") + '"]'
    ).checked = true;
    if (formData.interests) {
      formData.interests.forEach(function (interest) {
        document.querySelector(
          'input[name="interests[]"][value="' + interest + '"]'
        ).checked = true;
      });
    }
  }
}


export {loadValues, loadPage  };