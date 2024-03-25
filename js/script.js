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
      loadPage('pages/about.html');
    },
  },
  {
    label: "Boton C",
    onAction: "Apretaste boton C",
  },
  {
    label: "Boton D",
    onAction: "Apretaste boton D",
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