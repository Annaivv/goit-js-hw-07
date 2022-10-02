import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (galleryItem) => `<a class="gallery__item" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      alt="${galleryItem.description}"
    />
  </a>`
  )
  .join("");

list.innerHTML = markup;

console.log(markup);

var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
list.addEventListener("click", onItemClick);

function onItemClick(evt) {
  evt.preventDefault();
  let listItem = evt.target.classList.contains("gallery__image");
  if (listItem) {
    lightbox.show();
  }
}
