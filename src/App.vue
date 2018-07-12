<template>
  <div id="app">
    <el-container>
      <!--------------------------导航---------------------------------->
      <el-header height="100%">
        <div class="search">
          <div class="lang" @click="changeLanguage('CN')">{{$t('menu.chinaName')}}</div>
          <div class="lang" @click="changeLanguage('EN')">{{$t('menu.engName')}}</div>
          <div class="lang" @click="changeLanguage('EN')">切换主题</div>
        </div>
        <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#ffffff" text-color="#000" :router="true" active-text-color="#ffd04b">
          <el-menu-item index="/" style="cursor:pointer;"><a href="#"><img src="./assets/logo.png" style="height: 100%;"/></a></el-menu-item>
          <el-menu-item index="/">{{$t('menu.home')}}</el-menu-item>
          <el-submenu index="product">
            <template slot="title">{{$t("menu.product")}}</template>
            <el-menu-item index="product-1">{{$t('menu.product-1')}}</el-menu-item>
            <el-menu-item index="product-2">{{$t('menu.product-2')}}</el-menu-item>
            <el-submenu index="product-3">
              <template slot="title">{{$t('menu.product-3')}}</template>
              <el-menu-item index="product-3-1">{{$t('menu.product-3-1')}}</el-menu-item>
              <el-menu-item index="product-3-2">{{$t('menu.product-3-2')}}</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="culture">{{$t('menu.culture')}}</el-menu-item>
          <el-menu-item index="join">{{$t('menu.join')}}</el-menu-item>
          <el-menu-item index="about">{{$t('menu.about')}}</el-menu-item>
        </el-menu>
      </el-header>

      <!--------------------------主要内容body---------------------------------->
      <el-main style="padding:1px;">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>

      <!--------------------------底部说明---------------------------------->
      <el-footer style="text-align: center;">
        <p>{{$t('foot.logoText')}}</p>
        <p>{{$t('foot.phone')}} {{$t('foot.tel')}}</p>
        <p>{{$t('foot.depEmail')}}</p>
        <p>冀ICP备100186号 版权所有: 邯郸科而勃紧固件有限公司@2010</p>
      </el-footer>

    </el-container>
  </div>
</template>

<script>
  import ElMain from "element-ui/packages/main/src/main";

  export default {
    components: {ElMain},
    name: 'App',
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      changeLanguage(lang) {
        this.$i18n.locale = lang;
      }
    }
  }
</script>

<style>
  /*-----------------------------导航样式--------------------------*/
  .el-menu-demo {
    padding-left: 5px;
    border-bottom: 0;
  }

  .el-menu--horizontal > .el-menu-item {
    padding-left: 2%;
    padding-right: 2%;
  }

  .el-menu--horizontal > .el-submenu {
    padding-left: 2%;
    padding-right: 2%;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .search {
    display: flex;
    position: fixed;
    z-index: 3;
    right: 0;
  }

  .search > .lang {
    margin: auto 10px 0 10px;
    cursor: pointer;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
