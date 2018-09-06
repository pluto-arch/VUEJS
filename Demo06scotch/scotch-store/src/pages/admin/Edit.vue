<template>
    <div id="edit">
        <div>
            <h1>后台返回的数据为：</h1>
            <!-- <h1>{{$route.params.id}}</h1>获取路由参数 -->

            <el-table :data="datas" style="width: 100%">
                 <el-table-column prop="bID" label="编号" width="180">
                </el-table-column>
                <el-table-column prop="bcategory" label="内容" width="180">
                </el-table-column>
                 <el-table-column prop="bCreateTime" label="创建时间">
                </el-table-column>
            </el-table>


        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            title: '',
            datas:[]
        }
    },
    created () {
        this.$ajax({
            method: 'get',
            url: 'http://localhost:8020/api/Blog/GetBlogs'          
        }).then((result) => {            
            //this.title=result.data;
            this.datas=result.data;
            console.log(this.datas);
        }).catch((err) => {
            alert(err);
        });
    },
}
</script>
<style scoped>
</style>
