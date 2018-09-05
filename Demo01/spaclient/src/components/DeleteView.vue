<template>
<a href="#" @click.prevent="deleteProduct">
  删除一个数据
</a>
</template>

<script>
import datalayer from '../datalayer'
export default {
  methods: {
  deleteProduct () {
    datalayer.deleteProduct(+this.$route.params.id)
    this.$router.push({name: 'HomeView'});
  }
}
}
</script>

<style>

</style>