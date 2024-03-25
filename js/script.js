let botones = [
  {
    label: "Boton A",
    onAction: "Apretaste boton A",
  },
  {
    label: "Boton B",
    onAction: "Apretaste boton B",
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

function cargarValores() {
  var elementoBotonera = document.getElementById("botonera");

  botones.forEach(function (objeto) {
    var button = document.createElement("button");
    button.textContent  = objeto.label;
    button.onclick  = () => {
      alert(objeto.onAction);
    };
    elementoBotonera.appendChild(button);
  });
}
