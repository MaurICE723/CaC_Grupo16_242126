import { members } from "./const.js";

function loadMembers() {
  fetch("../pages/templates/member.html")
    .then((response) => response.text())
    .then((data) => {
      const templateContainer = document.createElement("div");
      templateContainer.innerHTML = data;

      const template =
        templateContainer.querySelector("#memberTemplate").content;
      const ul = document.getElementById("membersList");

      members.forEach((object) => {
        const member = template.cloneNode(true);

        // nombre del integrante
        member.querySelector(".memberName").textContent = object.name;

        // caracteristicas
        
        let memberCharsList = object.perks;
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
            "../img/No_Image_Available.jpg";
        }

        // descripcion
        member.querySelector(".memberDescription").textContent =
          object.description;

        ul.appendChild(member);
      });
    });
}

export { loadMembers };
