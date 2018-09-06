<template>
  <div class="HomeView">
    <div v-for="product in products" :key="product.id">
      {{ product.id }} - {{ product.name }} 
      <p>{{ product.description }}</p>{{ product.price }}
    <div>
        <router-link :to="{name: 'DetailsView', params: {id: product.id}}">详细</router-link>
        <router-link :to="{name: 'UpdateView', params: {id: product.id}}">编辑</router-link>
        <router-link :to="{name: 'DeleteView', params: {id: product.id}}">删除</router-link>
    </div>
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