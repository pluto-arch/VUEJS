<template>
    <el-container>
        <el-header>
            <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                <el-menu-item index="/admin/new">New</el-menu-item>
                <el-menu-item index="/admin/products">Products</el-menu-item>
                <el-menu-item index="/admin/edit/1">Edit</el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive" />
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive" />
        </el-main>
    </el-container>
</template>
<script>

export default {
    name: "admin",
    data () {
        return {
            isCollapse: true,
            activeIndex: "/admin/new"
        }
    },
    methods: {

    }
}
</script>
<style scoped>
</style>

