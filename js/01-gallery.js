import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (galleryItem) => `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`
  )
  .join("");

list.innerHTML = markup;

const instance = basicLightbox.create(`
    <img src="" width="800" height="600">
`);

list.addEventListener("click", function (event) {
  event.preventDefault();
});

list.addEventListener("click", onItemClick);

function onItemClick(evt) {
  let listItem = evt.target.classList.contains("gallery__image");
  if (listItem) {
    const instance = basicLightbox.create(`
        <img src=${evt.target.dataset.source} width="800" height="600">
    `);

    instance.show();
    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        instance.close();
      }
    });
  }
}
