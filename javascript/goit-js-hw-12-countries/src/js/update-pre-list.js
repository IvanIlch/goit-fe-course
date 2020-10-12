import coutries from '../template/pre-list-of-countries.hbs';
import ref from './reference';
function renderPreList(data) {
      ref.preList.innerHTML = '';
    const markUp = coutries(data);
    return ref.preList.insertAdjacentHTML('beforeend', markUp)
    
}
export default renderPreList