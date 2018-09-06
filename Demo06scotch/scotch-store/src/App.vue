<!--单文件组件-->
<template>
  <div id="app">
    <el-container style=" border: 1px solid #eee">
      <el-header>
        <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="/">Home</el-menu-item>
          <el-menu-item index="/cart">Cart</el-menu-item>
          <el-menu-item index="/admin">Index</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

  </div>

</template>

<script>
//export用于对外输出本模块（一个文件可以理解为一个模块）变量的接口
//import用于在一个模块中加载另一个含有export接口的模块。
//也就是说使用export命令定义了模块的对外接口以后，其他JS文件就可以通过import命令加载这个模块（文件）
export default {
  data () {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect (key) {
      //alert(key);
    }
  }
}
</script>

<style scoped>

</style>



<!--也允许传统的引入js/cs的方式-->
