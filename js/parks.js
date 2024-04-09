import { parks } from "./const.js";

function loadParks() {
  let ul = document.getElementById("parkList");

  parks.forEach((object) => {
    let li = document.createElement("li");
    // let link = document.createElement("a");

    li.textContent = object.name;
    li.onclick = () => {
      loadPark(object);
    };
    ul.appendChild(li);
  });
}

function loadPark(value) {
  let mapIframe = document.getElementById("map");
  let parkTitle = document.getElementById("mapTitle");

  let iFrame = document.createElement("iframe");
  iFrame.src = value.url;
  iFrame.width = "450";
  iFrame.height = "350";
  iFrame.loading = "lazy";
  iFrame.referrerpolicy = "no-referrer-when-downgrade";

  if (mapIframe.firstChild) {
    mapIframe.removeChild(mapIframe.firstChild);
  }
  mapIframe.appendChild(iFrame);
  parkTitle.textContent = value.name;
}

export { loadParks };
