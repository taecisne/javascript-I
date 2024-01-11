document.addEventListener('DOMContentLoaded', function () {
    // Capturando os elementos
    var titulo = document.getElementById('titulo');
    var listaNaoOrdenada = document.querySelector('ul');
    var link = document.getElementById('link');
    var listaOrdenada = document.getElementById('lista-ordenada');

    // Adicionando conteúdo aos elementos
    titulo.innerText = 'Título do Projeto';
    link.innerText = 'Visite Proz Educação';

    // Adicionando itens à lista não ordenada
    listaNaoOrdenada.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>';

    // Adicionando itens à lista ordenada com links
    listaOrdenada.innerHTML = '<li><a href="https://www.siteone.com">Link 1</a></li>' +
                              '<li><a href="https://www.sitetwo.com">Link 2</a></li>' +
                              '<li><a href="https://www.sitethree.com">Link 3</a></li>';
});
