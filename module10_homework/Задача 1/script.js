const btn = document.querySelector('.j-btn-test');
const iconOn = document.querySelector('.btn_icon.on');
const iconOff = document.querySelector('.btn_icon.off');
btn.addEventListener('click', () => {
  iconOn.classList.toggle('on');
  iconOn.classList.toggle('off');
  iconOff.classList.toggle('off');
  iconOff.classList.toggle('on');
});
btn.addEventListener('click', () => {
  btn.classList.toggle('btn--magic');
});