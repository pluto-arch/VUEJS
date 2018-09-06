<template>
    <el-container>
        <el-aside class="my-aside">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
            <el-menu default-active="/admin/new" router  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                <el-menu-item index="/admin/new">
                    <i class="el-icon-menu"></i>
                    <span slot="title">New</span>
                </el-menu-item>
                <el-menu-item index="/admin/products">
                    <i class="el-icon-document"></i>
                    <span slot="title">Products</span>
                </el-menu-item>
                <el-menu-item index="/admin/Edit/1">
                    <i class="el-icon-setting"></i>
                    <span slot="title">Edit</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
<script>

export default {
    name: "admin",
    data () {
        return {
            isCollapse: true
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style scoped>

</style>

