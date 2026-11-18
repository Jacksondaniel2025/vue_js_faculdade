<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }
})

const emit = defineEmits(['add-to-cart'])

const formattedPrice = computed(() => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
}).format(props.price))
</script>

<template>
  <article class="product-card">
    <img :src="image" :alt="'Foto de ' + name" width="320" height="240" loading="lazy">
    <div class="product-info">
      <h3>{{ name }}</h3>
      <p class="price">{{ formattedPrice }}</p>
      <button type="button" @click="emit('add-to-cart')">Adicionar ao Carrinho</button>
    </div>
  </article>
</template>
