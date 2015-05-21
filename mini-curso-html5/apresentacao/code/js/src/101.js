var text = 'Lorem ipsum';
var age = 1;
var money = 2.5;

var list = ['banana', 'maçã', 'melancia', 'abacate', 'limões'];

var booleano = true;

var pessoa = {
  nome: 'Gandalf',
  idade: 300,

  getNome: function(){
    return this.nome
  },
  getIdade: function(){
    return this.idade
  },
  setNome: function(nome){
    this.nome = nome;
  },
  setIdade: function(idade){
    this.idade = idade;
  }
};


if(condição){

}
else if(){
  
}
else{

}

// (condição) ? verdadeiro : falso;
var ternario = 1 > 2 ? 'Claro' : 'Jamais';

switch(idade){
  case 5:
    // whatever;
  break;

  case 10:
    // whatever;
  break;

  case 19:
    // whatever;
  break;

  default:
    // whatever;
  break;
}

for (var i = 1; i <= 10; i++) {
  console.log('Tabuada 5 x ' + i + ': ' + 5 * i);
};


while(list.length > 3){
  list.shift();
  console.log(list);
}

do{
  console.log('Poupança: ' + money);
  money += 0.5;
} while(money < 10);

function adcionaFruta(arr, fruta){
  arr.push(fruta);

  console.log(arr);
}