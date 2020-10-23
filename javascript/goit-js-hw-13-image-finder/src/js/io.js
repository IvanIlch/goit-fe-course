import refs from './reference'
import apiService from './apiServiceFetch'
import { renderNewImg, renderShowMore } from './updateNewItem'

const lazyLoad = () => {
    const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
apiService.fetchItems(refs.input.value).then(renderShowMore);
    }
  })
}
const options = {
  rootMargin: '400px',
}
const io = new IntersectionObserver(onEntry, options);
io.observe(refs.button);
}

export default lazyLoad;