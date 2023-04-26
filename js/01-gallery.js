import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

gallery.innerHTML  = galleryItems.map((elem) => {
    
   return `<li class="gallery__item"><a class="gallery__link" href="${elem.original}"><img class="gallery__image" src="${elem.preview}" data-source="${elem.original}" alt="${elem.description}"/></a></li>`;
}).join('');

gallery.addEventListener('click', onLinkClick);
function onLinkClick(e) {
    
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    } 
        

    const instance = basicLightbox.create(`
     <img src=${e.target.dataset.source}>
    `, {
        onClose: function () {
            document.removeEventListener('keydown', onEscapePress);
        }
    });
    instance.show();
    
    document.addEventListener('keydown', onEscapePress);
    function onEscapePress(e) {
        if (e.key === 'Escape') {
            instance.close();
        }   
    }
}


 
    

  


