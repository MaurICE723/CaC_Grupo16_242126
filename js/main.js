import { loadButtons, loadPage } from "./menuButtons.js";
import { parks } from "./const.js";

/** *
 * Por fines prácticos las funciones estan declaradas en inglés. 
 * 
 * Este es el punto de entrada de la logica aplicada a este proyecto. 
*/


// genero la carga inicial cuando se carga el body
function handleFirstLoad() {
  // cargo la botonera
  loadButtons();

  //cargo la pagina inicial
  if (!sessionStorage.getItem("page")) {
    sessionStorage.setItem("page", "home");
  }

  //cargo el listado de parques en la sesion. 
  sessionStorage.setItem("parksValues", null);

  //limpio los parques cuando inicia, sino los va sumando cada vez que se recarga la pagina
  let parksList = JSON.parse(sessionStorage.getItem("parksValues")) || [];

  parks.forEach((element) => {
    parksList.push(element);
  });

  sessionStorage.setItem("parksValues", JSON.stringify(parksList));

  // cargo la pagina inicial
  loadPage();
}

document.body.onload = handleFirstLoad;
