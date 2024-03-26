let botones = [
  {
    label: "Home",
    onAction: () => {
      window.location = "index.html";
    },
  },
  {
    label: "Acerca de. . . ",
    onAction: () => {
      document.title = "Acerca de...";
      loadPage('pages/about.html');
    },
  },
  {
    label: "Contacto",
    onAction: () => {
      document.title = "Contacto";
      loadPage('pages/contacto.html');
    }
  },
  {
    label: "Boton D",
    onAction: () => {
      alert('Apretaste el btón D');
    }
  },
];

function loadValues() {
  var elementoBotonera = document.getElementById("botonera");

  botones.forEach(function (objeto) {
    var button = document.createElement("button");
    button.textContent  = objeto.label;
    button.onclick  = objeto.onAction;
    elementoBotonera.appendChild(button);
  });
}

function loadPage(archivo) {
  fetch(archivo)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    })
    .catch((error) =>
      console.error("Error al cargar el contenido:", error)
    );

}


function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  var isValid = true;

  if (name == "") {
      document.getElementById('nameError').textContent = "Por favor, ingresa tu nombre";
      isValid = false;
  } else {
      document.getElementById('nameError').textContent = "";
  }

  if (email == "") {
      document.getElementById('emailError').textContent = "Por favor, ingresa tu email";
      isValid = false;
  } else {
      document.getElementById('emailError').textContent = "";
  }

  if (message == "") {
      document.getElementById('messageError').textContent = "Por favor, ingresa tu mensaje";
      isValid = false;
  } else {
      document.getElementById('messageError').textContent = "";
  }

  return isValid;
}