import refs from './js/reference'
// import searchItem from './js/apiServiceAxios'
import apiService from './js/apiServiceFetch'
import { renderNewImg, renderShowMore } from './js/updateNewItem'
import { debounce } from "debounce";
import showModal from './js/modalLiteBox'
import notification from './js/notication'
import lazyLoad from './js/io'
import 'toastify-js/src/toastify.css'
import './styles.css';


refs.input.addEventListener('input', debounce(function (e) {
  e.preventDefault();
  refs.button.classList.add('is-hidden')
    apiService.value = e.target.value;
    refs.list.innerHTML = '';
    apiService.resetPage();
  apiService.fetchItems().then(data => {
    renderNewImg(data)
    refs.button.classList.remove('is-hidden')
    refs.buttonToUp.classList.remove('is-hidden')
  });
    refs.body.classList.add('back-color')
  
}, 1000));

refs.button.addEventListener('click', (e) => {
    e.preventDefault();
    const inputValue = refs.input.value;
    apiService.fetchItems(inputValue).then(data => {
      renderShowMore(data);
      apiService.scrollDown();
    });
    notification('Підгружаю 12 картинок', '45deg, rgba(255,0,0,1) 0%, rgba(5,193,255,1) 83%, rgba(0,0,0,1) 100%');
});

refs.buttonToUp.addEventListener('click', apiService.scrollUp)
refs.list.addEventListener('click', (e) => {
    e.preventDefault();
    showModal(e);
    notification('Відкриваю модалку', '45deg, rgba(0,255,0,1) 0%, rgba(255,0,0,1) 100%');

})

lazyLoad();
