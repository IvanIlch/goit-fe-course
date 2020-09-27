const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
  input: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.input.addEventListener('change', changeTheme);
const theme = localStorage.getItem('theme');
refs.body.classList.add(theme);

function changeTheme(e) {
  if (e.target.checked) {
    if (refs.body.classList.contains(Theme.LIGHT)) {
      refs.body.classList.remove(Theme.LIGHT);
    }
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    if (refs.body.classList.contains(Theme.DARK)) {
      refs.body.classList.remove(Theme.DARK);
    }
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function changeCheckBox() {
  if (theme === Theme.DARK) {
    refs.input.checked = true;
    return (refs.input.checked = true);
  }
  refs.input.checked = false;
  return (refs.input.checked = false);
}
changeCheckBox();
