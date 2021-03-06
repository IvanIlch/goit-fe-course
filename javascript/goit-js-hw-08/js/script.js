import items from "./gallery-items.js";

// Task 1

const listRef = document.querySelector(".js-gallery");
const lightboxRef = document.querySelector(".lightbox");
const modalImgRef = document.querySelector(".lightbox__image");
const btnRef = document.querySelector(".lightbox__button");
const overlayRef = document.querySelector(".lightbox__content");

const createOneElem = (item, i) => {
  let index = 0;
  const listItemRef = document.createElement("li");
  listItemRef.classList.add("gallery__item");

  const listItemARef = document.createElement("a");
  listItemARef.classList.add("gallery__link");
  listItemARef.href = item.original;

  listItemRef.appendChild(listItemARef);

  const listItemAImgRef = document.createElement("img");
  listItemAImgRef.classList.add("gallery__image");
  listItemAImgRef.src = item.preview;
  listItemAImgRef.setAttribute("data-source", item.original);
  listItemAImgRef.setAttribute("data-index", index + i);
  listItemAImgRef.alt = item.description;
  listItemARef.appendChild(listItemAImgRef);
  return listItemRef;
};
const createDom = items.map((item, i) => createOneElem(item, i));
listRef.append(...createDom);

// Task 2

btnRef.addEventListener("click", removeClass);
overlayRef.addEventListener("click", closeOverlay);

listRef.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target;

  if (target.nodeName !== "IMG") {
    return;
  }
  modalImgRef.src = target.dataset.source;
  lightboxRef.classList.add("is-open");

  let index = Number(event.target.dataset.index);
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      if (index !== 0) {
        modalImgRef.src = items[index - 1].original;
        return (index -= 1);
      }
      return;
    } else if (event.key === "ArrowRight") {
      if (index < items.length - 1) {
        modalImgRef.src = items[index + 1].original;
        return (index += 1);
      }
      return;
    }
  });
});

function removeClass() {
  lightboxRef.classList.remove("is-open");
}
function closeOverlay(event) {
  if (event.currentTarget === event.target) {
    lightboxRef.classList.remove("is-open");
    modalImgRef.src = "";
  }
  return;
}
window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    removeClass();
  }
});
