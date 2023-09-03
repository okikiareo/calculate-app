let mode = localStorage.getItem('calc-mode');
let button = document.querySelector('[data-toggle]')

function pickTheme() {
  if (mode == 'dark') {
    paleTheme();
    mode = localStorage.getItem('calc-mode');
  } else {
    darkTheme();
    mode = localStorage.getItem('calc-mode');
  }
}

function darkTheme() {
  button.src = 'images/icon_moon.svg';
  document.body.classList.add('dark');
  localStorage.setItem('calc-mode', 'dark');
}

function paleTheme() {
    button.src = 'images/icon_sun.svg';
    document.body.classList.remove('dark');
    localStorage.setItem('calc-mode', null);
  }
  
  window
  .addEventListener('DOMContentLoaded', () => {
    mode == 'dark' ? darkTheme() : paleTheme();
  });
  
  button
  .addEventListener('click', () => pickTheme());
  function paleTheme() {
    button.src = 'images/icon_sun.svg';
    document.body.classList.remove('dark');
    localStorage.setItem('calc-mode', null);
  }
  
  window
  .addEventListener('DOMContentLoaded', () => {
    mode == 'dark' ? darkTheme() : paleTheme();
  });
  
  button
  .addEventListener('click', () => pickTheme());
function paleTheme() {
  button.src = 'images/icon_sun.svg';
  document.body.classList.remove('dark');
  localStorage.setItem('calc-mode', null);
}

window
.addEventListener('DOMContentLoaded', () => {
  mode == 'dark' ? darkTheme() : paleTheme();
});

button
.addEventListener('click', () => pickTheme());
function paleTheme() {
  button.src = 'images/icon_sun.svg';
  document.body.classList.remove('dark');
  localStorage.setItem('calc-mode', null);
}

window
.addEventListener('DOMContentLoaded', () => {
  mode == 'dark' ? darkTheme() : paleTheme();
});

button
.addEventListener('click', () => pickTheme());
function paleTheme() {
  button.src = 'images/icon_sun.svg';
  document.body.classList.remove('dark');
  localStorage.setItem('calc-mode', null);
}

window
.addEventListener('DOMContentLoaded', () => {
  mode == 'dark' ? darkTheme() : paleTheme();
});

button
.addEventListener('click', () => pickTheme());
function paleTheme() {
  button.src = 'images/icon_sun.svg';
  document.body.classList.remove('dark');
  localStorage.setItem('calc-mode', null);
}

window
.addEventListener('DOMContentLoaded', () => {
  mode == 'dark' ? darkTheme() : paleTheme();
});

button
.addEventListener('click', () => pickTheme());
function paleTheme() {
  button.src = 'images/icon_sun.svg';
  document.body.classList.remove('dark');
  localStorage.setItem('calc-mode', null);
}

window
.addEventListener('DOMContentLoaded', () => {
  mode == 'dark' ? darkTheme() : paleTheme();
});

button
.addEventListener('click', () => pickTheme());
function paleTheme() {
  button.src = 'images/icon_sun.svg';
  document.body.classList.remove('dark');
  localStorage.setItem('calc-mode', null);
}

window
.addEventListener('DOMContentLoaded', () => {
  mode == 'dark' ? darkTheme() : paleTheme();
});

button
.addEventListener('click', () => pickTheme());
function paleTheme() {
  button.src = 'images/icon_sun.svg';
  document.body.classList.remove('dark');
  localStorage.setItem('calc-mode', null);
}

window
.addEventListener('DOMContentLoaded', () => {
  mode == 'dark' ? darkTheme() : paleTheme();
});

button
.addEventListener('click', () => pickTheme());