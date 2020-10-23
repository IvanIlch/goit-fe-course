// import axios from 'axios'
// import refs from './reference'
// console.dir(axios);
const token = '18707708-cb3f56f935c295d167b648ce1';
axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
let page = 1;



const searchItem = async () => {

    const { data } = await axios.get(`/?q=${refs.input.value}&page=${page}&per_page=12`);
    return data;
}
// export default searchItem;
