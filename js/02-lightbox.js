import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

gallery.innerHTML = galleryItems.map((elem) => {

  return `<li class="gallery__item"><a class="gallery__link" href="${elem.original}"><img class="gallery__image" src="${elem.preview}" alt="${elem.description}"/></a></li>`;
}).join('');


let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt',
  captionDelay: 250});
