import { loadValues, loadPage } from "./script.js";
import { parks, members } from "./const.js";

function handleLoadPage() {

  let parksList = JSON.parse(sessionStorage.getItem("parksValues")) || [];

  parks.forEach(element => {
    parksList.push(element);
  });

  sessionStorage.setItem("parksValues", JSON.stringify(parksList));

  loadValues();
  loadPage();
}


// document.addEventListener("DOMContentLoaded", function() {
//   // Función para generar el listado inicial
//   function generarListado() {
//       // Obtener valores de sessionStorage
//       const elementos = JSON.parse(sessionStorage.getItem("elementos")) || [];
      
//       // Limpiar lista
//       const lista = document.getElementById("lista");
//       lista.innerHTML = "";

//       // Crear elementos de la lista
//       elementos.forEach(function(elemento) {
//           const li = document.createElement("li");
//           li.textContent = elemento;
//           lista.appendChild(li);
//       });
//   }

//   // Llamar a la función para generar el listado inicial
//   generarListado();

//   // Agregar evento al formulario para agregar elementos
//   const formulario = document.getElementById("formulario");
//   formulario.addEventListener("submit", function(event) {
//       event.preventDefault();
      
//       // Obtener el valor del nuevo elemento
//       const nuevoElemento = document.getElementById("nuevoElemento").value.trim();

//       if (nuevoElemento !== "") {
//           // Obtener valores actuales de sessionStorage
//           const elementos = JSON.parse(sessionStorage.getItem("elementos")) || [];

//           // Agregar el nuevo elemento
//           elementos.push(nuevoElemento);

//           // Guardar en sessionStorage
//           sessionStorage.setItem("elementos", JSON.stringify(elementos));

//           // Generar de nuevo el listado con el elemento añadido
//           generarListado();

//           // Limpiar el input
//           document.getElementById("nuevoElemento").value = "";
//       }
//   });
// });


document.body.onload = handleLoadPage;
