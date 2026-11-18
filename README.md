# Catálogo de Produtos com Carrinho

Projeto prático de Programação Web I feito com Vue.js 3 e Vite. A página mostra produtos, permite buscar pelo nome e atualiza o contador do carrinho imediatamente após um clique.

## Tecnologias

- HTML e CSS
- JavaScript
- Vue.js 3 e Vite 6

## Funcionalidades e organização

- `src/components/ProductCard.vue`: componente que recebe nome, preço e imagem por `props` e emite `add-to-cart`.
- `src/App.vue`: lista de produtos, busca com `v-model` e `computed`, contador e evento do carrinho.
- `src/main.js`: ponto de entrada da aplicação.
- `src/style.css`: estilos globais e layout responsivo.
- `public/images/`: fotos locais dos produtos, em JPG.

O carrinho pedido na atividade é representado pelo **contador de itens**. Cada clique em “Adicionar ao Carrinho” acrescenta uma unidade.

## Como executar

1. Instale o Node.js 18 ou superior.
2. No terminal, dentro da pasta do projeto, execute `npm install`.
3. Execute `npm run dev` e abra o endereço mostrado no terminal (normalmente `http://localhost:5173/`).
4. Digite parte do nome de um produto no campo de busca e clique em “Adicionar ao Carrinho”.

Para gerar a versão de produção, execute `npm run build`. A pasta `dist/` é gerada automaticamente e não precisa ser enviada ao GitHub.

## Teste rápido

- Ao abrir, o contador mostra `0` e os cinco produtos aparecem.
- Ao clicar duas vezes no botão, o contador mostra `2` sem recarregar a página.
- Ao digitar `mouse`, apenas o Mouse sem fio aparece; ao apagar o texto, os cinco produtos voltam.

Os produtos e preços são exemplos para a atividade. Fotos usadas no catálogo:

- Vaso: [Linh Le / Unsplash](https://unsplash.com/photos/white-ceramic-vase-with-flower-a0rE64YJDA4).
- Cesto: [Vinícius Estevão / Pexels](https://www.pexels.com/photo/square-brown-wicker-basket-on-table-2113125/).
- Tábua: [Clay Banks / Unsplash](https://unsplash.com/photos/a-wooden-cutting-board-sitting-on-top-of-a-counter-uOnV307bZJw).
- Tigela: [Josh Withers / Unsplash](https://unsplash.com/photos/a-white-ceramic-bowl-sitting-on-top-of-a-white-table--iNP_kScIkY).
- Mouse: [Krunal Lakhatariya / Unsplash](https://unsplash.com/photos/a-black-computer-mouse-on-a-white-desk--0Wqx50_W7g).

Referências: [guia do Vue](https://vuejs.org/guide/quick-start.html) e [guia do Vite 6](https://v6.vite.dev/guide/).
