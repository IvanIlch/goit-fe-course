import * as basicLightbox from 'basiclightbox'



function showModal(e) {
    const ref = e.target.dataset.fullimg;
        const instance = basicLightbox.create(`
    <img src="${ref}" width="800" height="600">`)
 instance.show()

}
export default showModal;