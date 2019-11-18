<template>
  <div class="div-main">
    <!--面包屑-->
    <el-breadcrumb separator="/" style="margin-bottom: 10px;">
      <el-breadcrumb-item :to="{ path: '/Main' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a>书本管理</a></el-breadcrumb-item>
    </el-breadcrumb>


    <!--2.搜索栏-->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="书本名称">
        <el-input v-model="bookname" placeholder="请输入书本名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="query()" icon="el-icon-search">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="dialogFormVisible=true" icon="el-icon-plus">新增</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="result" style="width: 100%;" :border="true" max-height="400">
      <el-table-column prop="id" label="ID" min-width="40" align="center"></el-table-column>
      <el-table-column prop="text" label="标题" min-width="100"></el-table-column>
      <el-table-column prop="sort" label="内容" min-width="30"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  export default {
    name: 'BookList',
    data() {
      return {
        bookname: null,
        result: []
      }
    },
    created:function(){

        let url = 'http://localhost:8080/findAllUsers';
        axios.post(url, null).then(resp => {
          this.result=resp.data;
        }).catch(error => {
          console.log(error);
        });

    }
  }
</script>


<style>
  .div-main {
    margin: 15px;
  }
</style>
