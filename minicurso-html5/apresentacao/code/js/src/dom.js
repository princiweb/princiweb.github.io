$(function() {
      // -- ID
      // console.log( $('#box') );
      // console.log( document.getElementById('box') );

      // -- Classe
      // console.log( $('.box') );
      // console.log( document.getElementsByClassName('box') );

      // -- Tag
      // console.log( $('div') );
      // console.log( document.getElementsByTagName('div') );

      // -- Apenas um
      // console.log( $('.box').get(0) );
      // console.log( document.querySelector('.box') );

      // -- Pseudo elementos
      // console.log( $('.box:first-child') );
      // console.log( document.querySelectorAll('.box:first-child') );

      //
      // -- Eventos
      // $(document).on('click', function(event) {
      //   console.log(event);
      // });
      // document.addEventListener('click', function(event) {
      //   console.log(event);
      // });

      var elem = document.querySelector('#box');

      // -- Texto
      // $(elem).text('lorem');
      // elem.textContent = 'lorem';

      // -- HTML - Se não passar valor traz o valor atual
      // $(elem).html('<p>lorem</p>');
      // elem.innerHTML = '<p>lorem</p>';

      // -- Append
      // $(elem).append('<p>lorem</p>');
      // elem.innerHTML += '<p>lorem</p>';

      // -- Valor input
      // $(elem).val();
      // document.querySelector(elem).value;

      // -- Pegar atributo
      // console.log( $(elem).attr('width') );
      // console.log( elem.getAttribute('width') );

      // -- Definir atributo
      // $(elem).attr('width', '400');
      // elem.setAttribute('width', '400');

      // -- Remover atributo
      // $(elem).removeAttr('width');
      // elem.removeAttribute('width');

      // -- Adicionar classe
      // $(elem).addClass('selected');
      // elem.classList.add('selected');

      // -- Remover classe
      // $(elem).removeClass('selected');
      // elem.classList.remove('selected');

      // -- Toggle class
      // $(elem).toggleClass('selected');
      // elem.classList.toggle('selected');

      // -- Toggle class
      // $(elem).toggleClass('selected');
      // elem.classList.toggle('selected');

      // -- Contém classe?
      // if ( $(elem).hasClass('box') ) {
      //   console.log('possui');
      // }
      // if ( elem.classList.contains('box') ) {
      //   console.log('possui');
      // }



      // -- CSS
      // $(elem).css({
      //   'background': '#F60',
      //   'height': '300'
      // });
      // elem.style.background = '#F60';
      // elem.style.height = '300';
    });

    // document.addEventListener('DOMContentLoaded', function() {});