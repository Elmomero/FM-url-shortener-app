const menuButton = document.getElementById("menuButton")!;
const navbar = document.getElementById("navbar") as HTMLElement;
const menuCont = document.getElementById("menu-cont") as HTMLDivElement;
const smenu1 = document.getElementById("smenu-1") as HTMLDivElement;
const smenu2 = document.getElementById("smenu-2") as HTMLDivElement;

export const resizeScreenAction = () => {
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
};

export const initScreenAction = () => {
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
};
