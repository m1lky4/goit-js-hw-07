import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
let markup = '';
galleryItems.map((elem,i) => {
    
    markup += `<li class="gallery__item"><a class="gallery__link" href="${galleryItems[i].original}"><img class="gallery__image" src="${galleryItems[i].preview}" data-source="${galleryItems[i].original}" alt="${galleryItems[i].description}"/></a></li>`;
})

gallery.insertAdjacentHTML('afterbegin', markup);

gallery.addEventListener('click', onLinkClick);
let source = '';
function onLinkClick(e) {
    
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    } else {
        source = e.target.dataset.source;
    }
    
    const instance = basicLightbox.create(`
     <img src=${source}>
    `)
    instance.show();
  
    document.addEventListener('keydown', (e) => {
       
       if (e.key === 'Escape') {
            instance.close();
        }
    })
};
  


