import './styles.scss';
const refs = {
  body: document.querySelector(`body`),
  btnStart: document.querySelector(`button[data-action="start"]`),
  btnStop: document.querySelector(`button[data-action="stop"]`),
};
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const min = 0;
const max = colors.length;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeTheme = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      refs.body.style.backgroundColor =
        colors[randomIntegerFromInterval(min, max)];
    }, 1000);
  },

  stop() {
    this.isActive = false;
    clearInterval(this.intervalId);
    refs.body.style.backgroundColor = '';
  },
};

refs.btnStart.addEventListener('click', changeTheme.start.bind(changeTheme));
refs.btnStop.addEventListener('click', changeTheme.stop.bind(changeTheme));
