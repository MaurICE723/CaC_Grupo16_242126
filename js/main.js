import { loadValues, loadPage } from "./script.js";

function handleLoadPage() {
  loadValues();
  loadPage();
}

document.body.onload = handleLoadPage;
