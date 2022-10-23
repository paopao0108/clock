const date = new Date();
var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
var second = document.querySelector('.second');
// 秒针和分针每次旋转的角度为 6deg；时针每次旋转的角度为 30deg
const degree = 6;

setInterval(() => {
  const date = new Date();
  // 获取到的小时区间为：0-23，而表盘的数值最大为 12， 因此需要除以12取余
  let hh = (date.getHours() % 12) * 30;
  let mm = date.getMinutes() * degree;
  let ss = date.getSeconds() * degree;
  hour.style.transform = `rotateZ(${hh}deg)`;
  minute.style.transform = `rotateZ(${mm}deg)`;
  second.style.transform = `rotateZ(${ss}deg)`;
}, 100);
