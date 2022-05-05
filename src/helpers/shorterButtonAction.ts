import { shorterLink } from "./shorterLink";

const linkText = document.getElementById("linkText") as HTMLInputElement;
const shorterButton = document.getElementById(
  "shorterButton"
) as HTMLButtonElement;
const linksReducedElementsContainer = document.getElementById(
  "linksReducedElementsContainer"
) as HTMLDivElement;
const errorMssg = document.getElementById("errorMssg") as HTMLParagraphElement;

export const shorterButtonAction = () => {
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
};
