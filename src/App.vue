<script setup>
import { computed, ref } from 'vue'
import ProductCard from './components/ProductCard.vue'

const search = ref('')
const cartCount = ref(0)

const products = [
  { id: 1, name: 'Vaso de Cerâmica', price: 54.90, image: '/images/vaso.jpg' },
  { id: 2, name: 'Cesto de Palha', price: 42.00, image: '/images/cesto.jpg' },
  { id: 3, name: 'Tábua de Madeira', price: 69.90, image: '/images/tabua.jpg' },
  { id: 4, name: 'Tigela de Cerâmica', price: 36.00, image: '/images/tigela.jpg' },
  { id: 5, name: 'Mouse sem fio', price: 59.90, image: '/images/mouse.jpg' }
]

const filteredProducts = computed(() => {
  const term = search.value.trim().toLocaleLowerCase('pt-BR')
  return products.filter(product =>
    product.name.toLocaleLowerCase('pt-BR').includes(term)
  )
})

function addToCart() {
  cartCount.value += 1
}
</script>

<template>
  <header class="site-header">
    <div class="header-content">
      <p class="brand">casa <span>&amp;</span> trama</p>
      <p class="cart-count" aria-live="polite">Itens no carrinho: <strong>{{ cartCount }}</strong></p>
    </div>
  </header>

  <main>
    <section class="intro" aria-labelledby="page-title">
      <div class="intro-content">
        <p class="eyebrow">OBJETOS PARA CASA</p>
        <h1 id="page-title">Um detalhe novo<br>muda o ambiente.</h1>
        <p>Peças simples para casa e para o trabalho do dia a dia.</p>
      </div>
    </section>

    <section class="page-content" aria-labelledby="products-title">
      <div class="section-heading">
        <div>
          <p class="section-label">CATÁLOGO</p>
          <h2 id="products-title">Escolha seus favoritos</h2>
        </div>
        <div class="search-field">
          <label for="product-search">Buscar pelo nome</label>
          <input id="product-search" v-model="search" type="search" placeholder="Ex.: vaso, cesto, mouse">
        </div>
      </div>

      <div v-if="filteredProducts.length" class="product-grid">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :name="product.name"
          :price="product.price"
          :image="product.image"
          @add-to-cart="addToCart"
        />
      </div>
      <p v-else class="empty-message">Nenhum produto encontrado.</p>
    </section>
  </main>
</template>
