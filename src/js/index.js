import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

Splitting();

window.onload = function() {
  console.log("loaded");
  document.body.classList.remove("loading");
};