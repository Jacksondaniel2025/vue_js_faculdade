# Catálogo de Produtos com Carrinho

Projeto prático de Programação Web I feito com Vue.js 3. A página mostra objetos para casa, permite buscar pelo nome e atualiza o contador do carrinho imediatamente após um clique.

## Tecnologias

- HTML e CSS
- JavaScript
- Vue.js 3 carregado por CDN

## Funcionalidades e organização

- `product-card.js`: componente reutilizável que recebe nome, preço e imagem por `props` e emite `add-to-cart` ao clicar no botão.
- `app.js`: lista de produtos, contador do carrinho e filtro de busca calculado com `computed`.
- `index.html`: usa `v-model` no campo de busca e mostra os cards filtrados.
- `style.css`: layout responsivo para computador, tablet e celular.
- `images/`: fotos locais dos produtos, em JPG.

O carrinho pedido na atividade é representado pelo **contador de itens**. Cada clique em “Adicionar ao Carrinho” acrescenta uma unidade.

## Como executar

1. Abra `index.html` em um navegador com acesso à internet, necessário para carregar o Vue.js pelo CDN.
2. Digite parte do nome de um produto no campo de busca.
3. Clique em “Adicionar ao Carrinho” e observe o contador no cabeçalho.

Não há instalação, servidor ou etapa de compilação.

## Teste rápido

- Ao abrir, o contador mostra `0` e os quatro produtos aparecem.
- Ao clicar duas vezes no botão, o contador mostra `2` sem recarregar a página.
- Ao digitar `cesto`, apenas o Cesto de Palha aparece; ao apagar o texto, os quatro produtos voltam.

Os produtos e preços são exemplos para a atividade. Fotos usadas no catálogo:

- Vaso: [Linh Le / Unsplash](https://unsplash.com/photos/white-ceramic-vase-with-flower-a0rE64YJDA4).
- Cesto: [Vinícius Estevão / Pexels](https://www.pexels.com/photo/square-brown-wicker-basket-on-table-2113125/).
- Tábua: [Clay Banks / Unsplash](https://unsplash.com/photos/a-wooden-cutting-board-sitting-on-top-of-a-counter-uOnV307bZJw).
- Tigela: [Josh Withers / Unsplash](https://unsplash.com/photos/a-white-ceramic-bowl-sitting-on-top-of-a-white-table--iNP_kScIkY).

Referência de execução via CDN: [documentação oficial do Vue](https://vuejs.org/guide/quick-start.html#using-vue-from-cdn).

