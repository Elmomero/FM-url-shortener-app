import "./style.css";
import { shorterLink } from "./helpers/shorterLink";
const form = document.getElementById("form") as HTMLFormElement;
const errorMssg = document.getElementById("errorMssg") as HTMLParagraphElement;
const navbar = document.getElementById("navbar") as HTMLElement;
const menuCont = document.getElementById("menu-cont") as HTMLDivElement;
const smenu1 = document.getElementById("smenu-1") as HTMLDivElement;
const smenu2 = document.getElementById("smenu-2") as HTMLDivElement;
const menuButton = document.getElementById("menuButton")!;
const linksReducedElementsContainer = document.getElementById(
  "linksReducedElementsContainer"
) as HTMLDivElement;

const shorterButton = document.getElementById(
  "shorterButton"
) as HTMLButtonElement;
const linkText = document.getElementById("linkText") as HTMLInputElement;

menuButton.addEventListener("click", () => {
  if (navbar.classList.contains("scale-0")) {
    navbar.classList.add("scale-100", "h-auto");
    navbar.classList.remove("scale-0", "h-0");
  } else {
    navbar.classList.add("scale-0", "h-0");
    navbar.classList.remove("scale-100", "h-auto");
  }
});
shorterButton.addEventListener("click", () => {
  if (linkText.value) {
    shorterButton.innerText = "loading...";
    shorterButton.disabled = true;
    shorterLink(linkText.value).then((data) => {
      shorterButton.innerText = "Shorten it!";
      shorterButton.disabled = false;
      if (data?.short_link && data.original_link) {
        const reducedLinkContainer = document.createElement("div");
        reducedLinkContainer.classList.add(
          "bg-White",
          "p-6",
          "flex",
          "flex-col",
          "justify-between",
          "rounded-2xl",
          "mb-8"
        );

        const originalLinkP = document.createElement("p");
        originalLinkP.classList.add(
          "text-VeryDarkBlue",
          "text-2xl",
          "p-4",
          "break-words"
        );
        originalLinkP.textContent = data.original_link;

        const reducedLinkP = document.createElement("p");
        reducedLinkP.classList.add("text-Cyan", "text-2xl", "p-4");
        reducedLinkP.textContent = data.short_link;

        const buttonCopy = document.createElement("button");
        buttonCopy.classList.add(
          "rounded-lg",
          "bg-Cyan",
          "text-2xl",
          "border-none",
          "text-White",
          "p-4",
          "focus:bg-DarkViolet",
          "copyClipboard"
        );
        buttonCopy.innerText = "Copy";

        const divRightContainer = document.createElement("div");
        divRightContainer.classList.add("flex", "flex-col");

        linksReducedElementsContainer.prepend(reducedLinkContainer);

        reducedLinkContainer.appendChild(originalLinkP);
        reducedLinkContainer.appendChild(divRightContainer);

        divRightContainer.appendChild(reducedLinkP);
        divRightContainer.appendChild(buttonCopy);

        buttonCopy.addEventListener("click", () => {
          if (reducedLinkP.textContent)
            navigator.clipboard.writeText(reducedLinkP.textContent);
        });
        buttonCopy.addEventListener("focus", () => {
          document
            .querySelectorAll<HTMLButtonElement>(".copyClipboard")
            .forEach((button) => {
              button.innerText = "Copy";
            });
          buttonCopy.innerText = "Copied!";
        });

        errorMssg.innerText = "";
        linkText.classList.remove("border-2", "border-Red");
      } else {
        errorMssg.innerText = "Please add a valid link";
        linkText.classList.add("border-2", "border-Red");
      }
    });
  } else {
    errorMssg.innerText = "Please add a link";
    linkText.classList.add("border-2", "border-Red");
  }
  linkText.value = "";
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

if (window.screen.width >= 768) {
  menuButton.classList.add("hidden");
  navbar.classList.remove("mt-28", "left-0", "h-0", "scale-0", "px-8");
  navbar.classList.add("right-0", "[width:75vw]");
  menuCont.classList.remove("bg-DarkViolet", "flex-col", "py-8");
  menuCont.classList.add("bg-White", "items-center", "pt-2", "justify-between");
  smenu1.classList.remove("flex-col");
  for (let i = 0; i < smenu1.children.length; i++) {
    smenu1.children[i].classList.remove("text-3xl");
    smenu1.children[i].classList.add("mr-5", "text-2xl");
  }
  smenu2.classList.remove(
    "flex-col",
    "mt-3",
    "border-t-2",
    "border-GrayishViolet"
  );
  for (let i = 0; i < smenu2.children.length; i++) {
    smenu2.children[i].classList.remove("text-3xl");
    smenu2.children[i].classList.add("mr-5", "text-2xl");
  }
}
window.addEventListener("resize", () => {
  if (window.screen.width >= 768) {
    menuButton.classList.add("hidden");
    navbar.classList.remove("mt-28", "left-0", "h-0", "scale-0", "px-8");
    navbar.classList.add("right-0", "[width:75vw]");
    menuCont.classList.remove("bg-DarkViolet", "flex-col", "py-8");
    menuCont.classList.add(
      "bg-White",
      "items-center",
      "pt-2",
      "justify-between"
    );
    smenu1.classList.remove("flex-col");
    for (let i = 0; i < smenu1.children.length; i++) {
      smenu1.children[i].classList.remove("text-3xl");
      smenu1.children[i].classList.add("mr-3", "text-2xl");
    }
    smenu2.classList.remove(
      "flex-col",
      "mt-3",
      "border-t-2",
      "border-GrayishViolet"
    );
    for (let i = 0; i < smenu2.children.length; i++) {
      smenu2.children[i].classList.remove("text-3xl");
      smenu2.children[i].classList.add("mr-3", "text-2xl");
    }
  } else {
    menuButton.classList.remove("hidden");
    navbar.classList.add("mt-28", "left-0", "h-0", "scale-0", "px-8");
    navbar.classList.remove("right-0", "[width:75vw]");
    menuCont.classList.add("bg-DarkViolet", "flex-col", "py-8");
    menuCont.classList.remove(
      "bg-White",
      "items-center",
      "pt-2",
      "justify-between"
    );
    smenu1.classList.add("flex-col");
    for (let i = 0; i < smenu1.children.length; i++) {
      smenu1.children[i].classList.add("text-3xl");
      smenu1.children[i].classList.remove("mr-3", "text-2xl");
    }
    smenu2.classList.add(
      "flex-col",
      "mt-3",
      "border-t-2",
      "border-GrayishViolet"
    );
    for (let i = 0; i < smenu2.children.length; i++) {
      smenu2.children[i].classList.add("text-3xl");
      smenu2.children[i].classList.remove("mr-3", "text-2xl");
    }
  }
});
