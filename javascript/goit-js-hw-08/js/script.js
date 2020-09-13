import items from "./gallery-items.js";
// Task 1

const listRef = document.querySelector(".js-gallery");

const createOneElem = (item) => {
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
  listItemAImgRef.alt = item.description;
  listItemARef.appendChild(listItemAImgRef);

  return listItemRef;
};
const createDom = items.map((item) => createOneElem(item));

listRef.append(...createDom);
// Task 2
const lightboxRef = document.querySelector(".lightbox");
const modalImgRef = document.querySelector(".lightbox__image");
const btnRef = document.querySelector(".lightbox__button");
const overlayRef = document.querySelector(".lightbox__content");

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
