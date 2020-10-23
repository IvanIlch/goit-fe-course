import Toastify from 'toastify-js'

function notification(text, color) {
    Toastify({
  text: text,
  duration: 3000, 
  close: true,
  gravity: "top", // `top` or `bottom`
  position: 'right', // `left`, `center` or `right`
  backgroundColor: `linear-gradient(${color})`,

  onClick: function(){} // Callback after click
}).showToast();
}
export default notification;