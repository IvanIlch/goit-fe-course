import fetchCountries from './js/fetchCountries';
import renderNewCountries from './js/update-new-countries';
import renderPreList from './js/update-pre-list';
import ref from './js/reference';
const debounce = require('lodash.debounce');
import './js/notification';
import PNotify from 'pnotify/dist/es/PNotify.js';
import './styles.scss';


ref.input.addEventListener('input', debounce(function (e) {
  e.preventDefault();
  let inputValue = e.target.value
  fetchCountries(inputValue).then(renderPreList);
  setTimeout(() => {
    if (ref.preList.childElementCount > 10) {
      PNotify.error('Необхідно зробити запит більш специфічним');
      ref.preList.classList.add('is-hidden')
    }
    if (ref.preList.childElementCount <= 10) {
      ref.preList.classList.remove('is-hidden')
    }
    if (ref.preList.childElementCount === 1) {
      fetchCountries(ref.preList.outerText).then(renderNewCountries);
            ref.preList.classList.add('is-hidden');

    }
  }, 600);
  ref.preList.addEventListener('click', e => {
    e.preventDefault();
    inputValue = e.target.outerText;
    ref.preList.innerHTML = '';
    ref.input.value = inputValue;
    fetchCountries(inputValue).then(renderNewCountries);
  })
}, 500));




 console.log(ref.preItem);


