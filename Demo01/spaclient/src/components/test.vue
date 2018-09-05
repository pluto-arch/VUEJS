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
export default {
  name: 'HomeView',
  data () {
    return {
      products: [
        {id: 1, name: '1111', description: '2231122', price: 1234},
        {id: 2, name: '22222', description: '22222sda', price: 23},
        {id: 3, name: '3333', description: 'oooooo.', price: 456},
        {id: 4, name: '4444', description: 'asdas', price: 98765}
      ]
    }
  }
}
</script>

<style>
h1 {
  font-weight: normal;
}
</style>