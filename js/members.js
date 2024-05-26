import { members } from "./const.js";

//carga el listado de miembros
function loadMembers() {
  //Obtengo el template para los miembros
  fetch("../pages/templates/member.html")
    .then((response) => response.text())
    .then((data) => {
      //cargo el template
      const templateContainer = document.createElement("div");
      templateContainer.innerHTML = data;

      const template =
        templateContainer.querySelector("#memberTemplate").content;
      const ul = document.getElementById("membersList");

      //recorro los datos de los integrantes de las constantes
      members.forEach((object) => {
        const member = template.cloneNode(true);

        // nombre del integrante
        member.querySelector(".memberName").textContent = object.name || "- - Missing in Action - -";

        // caracteristicas
        let memberCharsList = object.perks || [];
        let charasteristics = member.querySelector(".memberCharacteristics");

        memberCharsList.forEach(function (perk) {
          let perkLi = document.createElement("li");
          perkLi.textContent = perk;

          charasteristics.appendChild(perkLi);
        });

        // foto del integrante
        if (object.picture) {
          member.querySelector(".memberPicture").src = object.picture;
        } else {
          member.querySelector(".memberPicture").src =
            "../img/Missing_In_Action.png";
        }

        // descripcion
        member.querySelector(".memberDescription").textContent =
          object.description || " - - Missing in action - - ";

        ul.appendChild(member);
      });
    });
}

export { loadMembers };
