import './styles.scss';
const refs = {
  days: document.querySelector(`span[data-value="days"]`),
  hours: document.querySelector(`span[data-value="hours"]`),
  mins: document.querySelector(`span[data-value="mins"]`),
  secs: document.querySelector(`span[data-value="secs"]`),
};

const changeTime = {
  intervalId: null,
  start() {
    this.intervalId = setInterval(() => {
      const targetDate = new Date('Oct 17, 2020').getTime();
      const currentDate = Date.now();
      const delta = targetDate - currentDate;

      const days = pad(Math.floor(delta / (1000 * 60 * 60 * 24)));
      const hours = pad(
        Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      const mins = pad(Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((delta % (1000 * 60)) / 1000));
      refs.days.textContent = days;
      refs.hours.textContent = hours;
      refs.mins.textContent = mins;
      refs.secs.textContent = secs;
    }, 1000);
  },
  stop() {
    clearInterval(intervalId);
  },
};
function pad(value) {
  return String(value).padStart(2, '0');
}
changeTime.start();
