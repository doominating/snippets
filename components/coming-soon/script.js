const countDate = new Date('May 26, 2020 00:00:00').getTime();

function toggle() {
  const newsletter = document.querySelector('.newsletter');
  newsletter.classList.toggle('active');
}

function countdown() {
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);

  document.getElementById('day').innerText = d;
  document.getElementById('hour').innerText = h;
  document.getElementById('minute').innerText = m;
  document.getElementById('second').innerText = s;
}
setInterval(function () {
  countdown();
}, 1000);
