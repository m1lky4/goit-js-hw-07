import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
let markup = '';
galleryItems.map((elem,i) => {

    markup += `<li class="gallery__item"><a class="gallery__link" href="${galleryItems[i].original}"><img class="gallery__image" src="${galleryItems[i].preview}" alt="${galleryItems[i].description}"/></a></li>`;
})

gallery.insertAdjacentHTML('afterbegin', markup);
let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt',
  captionDelay: 250});
