<template>
  <el-menu router :default-active="$route.path" class="el-menu-vertical-demo" background-color="#334157" text-color="#fff"
    active-text-color="#ffd04b" :collapse="showLeft">
    <!-- <el-menu default-active="2" :collapse="collapsed" collapse-transition router :default-active="$route.path" unique-opened class="el-menu-vertical-demo" background-color="#334157" text-color="#fff" active-text-color="#ffd04b"> -->
    <div class="logobox">
      <img class="logoimg" src="../assets/img/logo.png" alt="">
    </div>
    <el-menu-item index="/Home">
      <template slot="title">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </template>
    </el-menu-item>
    <el-submenu v-for="d in data" :key="'key-'+d.id" :index="'index'+d.id">
      <template slot="title">
        <i :class="d.icon"></i>
        <span>{{d.text}}</span>
      </template>
      <el-menu-item v-for="n in d.children" :key="'index-'+n.id" :index="n.url">
        {{n.text}}
      </el-menu-item>
    </el-submenu>

  </el-menu>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'LeftAside',
    props: ['showCollapsed'],
    data: function() {
      return {
        data: []
      }
    },
    computed: {
      showLeft: function() {
        return this.showCollapsed;
      }
    },
    created: function() {
      let url = 'http://localhost:8080/findAllUsers';
      axios.post(url, null).then(resp => {
        this.data = resp.data


      }).catch(error => {
        console.log(error);
      });

      this.$router.push({
        path: '/Home'
      });
    }
  }
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    border: none;
    text-align: left;
  }

  .el-menu-item-group__title {
    padding: 0px;
  }

  .el-menu-bg {
    background-color: #1f2d3d !important;
  }

  .el-menu {
    border: none;
  }

  .logobox {
    height: 40px;
    line-height: 40px;
    color: #9d9d9d;
    font-size: 20px;
    text-align: center;
    padding: 20px 0px;
  }

  .logoimg {
    height: 40px;
  }
</style>
