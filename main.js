const text = document.querySelector('.text');
const progressBar = document.querySelector('.progress-bar');

text.textContent = 'Mês do consumidor '.repeat(1500);

calculationProgressBar();

document.addEventListener('scroll', calculationProgressBar);

function calculationProgressBar() {
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const percent = (window.pageYOffset / height) * 100;

  progressBar.style.width = percent + '%';
}