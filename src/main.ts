import "./style.css";
import { shorterButtonAction } from "./helpers/shorterButtonAction";
import {
  initScreenAction,
  resizeScreenAction,
} from "./helpers/resizeScreenAction";
const form = document.getElementById("form") as HTMLFormElement;
const navbar = document.getElementById("navbar") as HTMLElement;
const menuButton = document.getElementById("menuButton")!;

const shorterButton = document.getElementById(
  "shorterButton"
) as HTMLButtonElement;

menuButton.addEventListener("click", () => {
  if (navbar.classList.contains("scale-0")) {
    navbar.classList.add("scale-100", "h-auto");
    navbar.classList.remove("scale-0", "h-0");
  } else {
    navbar.classList.add("scale-0", "h-0");
    navbar.classList.remove("scale-100", "h-auto");
  }
});
shorterButton.addEventListener("click", shorterButtonAction);
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

initScreenAction();
window.addEventListener("resize", resizeScreenAction);
