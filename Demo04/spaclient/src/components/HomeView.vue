<template>
    <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div style="border:1px solid red" v-for="product in this.products" v-bind:key="product.id" class="image-card" @click="displayDetails(product.id)">
            <span class="mdl-chip">
              <span class="mdl-chip__text">{{product.id}}</span>
            </span>
             <span class="mdl-chip">
              <span class="mdl-chip__text">{{product.name}}</span>
            </span>
             <span class="mdl-chip">
              <span class="mdl-chip__text">{{product.price}}</span>
            </span>
        </div>

        <button class="" v-on:click="counter += 1">加加</button>
        <p>按钮被点击了： {{ counter }} 次.</p>

      </div>
    </div>
    <router-link class="add-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" to="/post">
      <i class="material-icons">add</i>
    </router-link>
  </div>
</template>
<script>
import products from '../data'
export default {
    methods: {
      displayDetails (id) {
        //this.$router.push({name: 'detail', params: { id: id }})
        alert(id);
      }
    },
    data () {
      return {
        counter:0,
        'products': products.products
      }
    }
}
</script><style scoped>
  .add-picture-button {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 998;
  }
  .image-card {
    position: relative;
    margin-bottom: 8px;
  }
  .image-card__picture > img {
    width:100%;
  }
  .image-card__comment {
    position: absolute;
    bottom: 0;
    height: 52px;
    padding: 16px;
    text-align: right;
    background: rgba(0, 0, 0, 0.5);
  }
  .image-card__comment > span {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
</style>
