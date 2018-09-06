<template>
  <div class="hello" style="border:1px solid red;">
    <button @click="toggle">Click me</button>
    <p id="text" v-show="isShown">Lorem ipsum dolor sit amet,...</p>

    <hr />

    <ul>
      <li v-for="product in products" v-bind:key="product.id">{{product.name}}</li>
    </ul>

    <div v-for="product in products" :key="product.id">
      <a @click='test'>{{ product.name }}</a>
    </div>
    <template v-for="product in products">
      <div class="card" v-bind:key="product.id">
        <!--为了使Vue更容易修补，建议您使用key指令为列表中的每个节点提供唯一标识符：-->
        <div :style="{color:'red',backgroundColor:bgcolor}" class="card-header">{{product.id}}</div>
        <div class="card-content">{{product.name}}</div>
      </div>
    </template>

    <hr />
    <div :class="{active:isShown}">这里使用动态class【:class="{active:isShow}"】</div>
    <hr/>
  </div>
</template>

<script>




export default {
  name: "HelloWorld",
  data () {
    return {
      isShown: false, // Control property
      isAuth: false,
      products: [{ id: 1, name: "iPhone7" }, { id: 2, name: "iPhone6" }],
      bgcolor: 'rgb(0,0,255)'
    };
  },
  methods: {
    toggle () {
      // Toggles control property
      this.isShown = !this.isShown;
    },
    test () {
      alert(1111);
    }
  },
  created: function () {
    /*生命周期钩子函数，就是一个vue实例被生成后调用这个函数 */
    /*一般可以在created函数中调用ajax获取页面初始化所需的数据。 */
    //alert(this.isAuth);//this指向vue实例
    this.isShown = true;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    background-color: aqua;
    text-align: right;
}
.card {
    color: blueviolet;
}
</style>
