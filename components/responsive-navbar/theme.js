const themeList = ['dark', 'light', 'solar'];

const themeMap = {
  dark: 'light',
  light: 'solar',
  solar: 'dark',
};

const theme = getCurrentTheme();

const bodyClass = document.body.classList;
bodyClass.add(theme);

function getNextTheme() {
  const currentIndex = themeList.indexOf(getCurrentTheme());
  const nextIndex = currentIndex + 1;
  if (nextIndex >= themeList.length) {
    return themeList[0];
  }
  return themeList[nextIndex];
}

function getCurrentTheme() {
  return localStorage.getItem('theme') || getInitialTheme();
}

function getInitialTheme() {
  const initial = Object.keys(themeMap)[0];
  localStorage.setItem('theme', initial);
  return initial;
}

function changeTheme(theme) {
  const current = getCurrentTheme();
  bodyClass.replace(current, theme);
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const next = getNextTheme();
  changeTheme(next);
}

document.getElementById('themeButton').onclick = toggleTheme;
