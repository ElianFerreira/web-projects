(() => {
  const btn = document.getElementById('btn-button');
  const mainLeft = document.querySelector('.main-left');
  const mainRight = document.querySelector('.main-right');

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    mainLeft.classList.toggle('active');
    mainRight.classList.toggle('active');
  });
})();
