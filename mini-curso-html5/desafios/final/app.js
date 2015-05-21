var btnEnviar = document.getElementById('enviar');
var btnLimpar = document.getElementById('limpar');
var txtNome   = document.getElementById('txt-nome');

var nomes = [];
var tamanhoNomes = nomes.length;

if (localStorage['nomes'] != undefined) {
  nomes = JSON.parse(localStorage['nomes']);
}

btnEnviar.addEventListener('click', function() {
  nomes.push(txtNome.value);
  localStorage['nomes'] = JSON.stringify(nomes);
});

btnLimpar.addEventListener('click', function() {
  localStorage.clear();
  document.location.reload(true);
});

var galeria = document.getElementById('galeria');


for (var i = 0; i < nomes.length; i++) {
  galeria.innerHTML += '<li class="item-galeria"><img src=' + nomes[i] + ' class="foto-galeria"/></li>';
}