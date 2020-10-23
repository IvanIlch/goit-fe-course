const token = '18707708-cb3f56f935c295d167b648ce1';
export default {
    _value:'',
    page: 1,
    fetchItems () {
        return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this._value}&page=${this.page}&per_page=12&key=${token}`)
            .then(res => res.json())
            .then(({ hits }) => {
                this.page += 1;
                return hits
            })
            .catch(err => console.log(err));

    },
    resetPage() {
        this.page = 1;
    },
    scrollDown() {
        const scrollCount = document.documentElement.offsetHeight;
        const scrollHeight = window.innerHeight;
          
        window.scrollTo({
                top: (document.documentElement.offsetHeight - (document.documentElement.offsetHeight / this.page)),
                behavior: "smooth"
            });      
    },
    scrollUp() {
        window.scrollTo({
    top: 0,
    behavior: "smooth"
        })
    },
    get value() {
        return this._value
    },
    set value(searchName) {
        this._value = searchName
    }
}