import refs from './reference'
import item from './templates/item.hbs'


function renderNewImg(data) {
    const markUp = item(data);
  return refs.list.insertAdjacentHTML('beforeend', markUp);
}
function renderShowMore(data) {
  const markUp = item(data);
  return refs.list.insertAdjacentHTML('beforeend', markUp);
}

export {renderNewImg, renderShowMore};