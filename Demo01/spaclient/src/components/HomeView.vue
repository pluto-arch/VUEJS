<template>
  <div class="HomeView">
    <div v-for="product in products" :key="product.id">
      {{ product.id }} - {{ product.name }} 
      <p>{{ product.description }}</p>
      {{ product.price }}
    </div>
  </div>
</template>

<script>
import datalayer from '../datalayer'
export default {
  name: 'home-view',
  data () {
    return {
      products: []
    }
  },
  created () {
    this.products = datalayer.getProducts()
  }
}
</script>

<style>
h1 {
  font-weight: normal;
}
</style>