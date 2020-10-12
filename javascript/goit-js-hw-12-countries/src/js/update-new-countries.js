import coutries from '../template/countries.hbs';
import ref from './reference';

function renderNewCountries(data) {
  ref.list.innerHTML = '';
  const markUp = coutries(data);
  return ref.list.insertAdjacentHTML('beforeend', markUp);
}

export default renderNewCountries;
