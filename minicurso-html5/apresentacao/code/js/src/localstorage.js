var $texto = document.querySelector('#texto');
var $btnLimpar = document.querySelector('#limpar');
var $btnAdicionar = document.querySelector('#adicionar');

$btnAdicionar.addEventListener('click', function() {
  localStorage.setItem('dados', $texto.innerHTML);
});

$btnLimpar.addEventListener('click', function() {
  localStorage.clear();
  document.location.reload(true);
});

if (localStorage.getItem('dados')) {
  console.log(localStorage.getItem('dados'));
}