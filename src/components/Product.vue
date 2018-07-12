<template>
  <el-container>
    <el-header height="234px">
      <el-carousel :interval="5000" arrow="hover" height="100%" style="height:100%;">
        <el-carousel-item v-for="item in data.carousel" :key="item.picture">
          <div class="carouse-background" :style="{'background-image':'url('+item.picture+')'}"></div>
        </el-carousel-item>
      </el-carousel>
    </el-header>
    <el-main>
      <el-container>
        <el-header class="company-introduction-header">
          <el-row>
            <el-col :span="7" v-for="(item,index) in data.products" :key="index"  style="cursor:pointer;">
              <div @click="changeProduct(index)">{{$t(item.name)}}</div>
            </el-col>
          </el-row>
        </el-header>
        <el-main class="company-introduction-detail">
          <el-row>
            <el-col :span="6" v-for="(product,index) in list" :key="index">
              <el-card class="product-card" shadow="never" style="border:0;" body-style="padding:0;">
                <img :src="product.picture" class="image">
                <div>
                  <span>{{product.name}}</span>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-pagination @current-change="changePage" :current-page.sync="currentPage" :page-size="pageSize" layout="total, prev, pager, next" :total="pages"></el-pagination>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
  import ElHeader from "element-ui/packages/header/src/main";
  import ElMain from "element-ui/packages/main/src/main";

  export default {
    components: {
      ElMain,
      ElHeader
    },
    name: "product",
    data() {
      return {
        data: {
          carousel: [],
          products: [],
        },
        currentPage: 0,
        pages: 1,
        pageSize: 12,
        productIndex:0,
        list: []
      }
    },
    created: function () {
      const _this = this;
      this.$http.get('/static/product.json').then(function (res) {
        _this.data = res.data; // {carousel,}
        let products=_this.data.products[_this.productIndex].products;
        _this.pages = products.length;
        _this.currentPage = 1;
        _this.changePage();
      });
    },
    methods: {
      changeProduct:function(index){
        this.productIndex=index;
        this.currentPage=1;
        this.changePage();
      },
      changePage: function () {
        let products=this.data.products[this.productIndex].products;
        if (products.length <= this.pageSize) {
          this.list = products;
        } else {
          const startIndex = (this.currentPage - 1) * this.pageSize;
          const endIndex = (startIndex + this.pageSize < products.length) ? startIndex + this.pageSize : products.length;
          this.list = [];
          for (let i = startIndex; i < endIndex; i++) {
            this.list.push(products[i]);
          }
        }
      }
    }
  }
</script>

<style scoped>
  /*图片展示*/
  .carouse-background {
    width: 100%;
    height: 100%;
    background-repeat: round; /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
    background-size: cover; /* 设置背景颜色，背景图加载过程中会显示背景色 */
    background-color: #464646;
  }

  /*产品分类*/
  @media only screen and (min-width:374px){
    .company-introduction-header {
      border-bottom: 1px dashed #ccc;
      color: #2e2f2a;
      padding-top: 5px;
      font-size: 18px;
      text-shadow: 2px 8px 5px #a9aaa9;
      line-height: 36px;
    }
    .product-card{
      padding: 5px;
    }
    .image {
      width: 100%;
      border: 1px solid #dddddd;
    }
  }
  @media only screen and (min-width:767px){
    .company-introduction-header {
      border-bottom: 1px dashed #ccc;
      color: #2e2f2a;
      padding-top: 5px;
      font-size: 25px;
      text-shadow: 2px 8px 5px #a9aaa9;
      line-height: 36px;
    }
    .product-card{
      padding: 20px;
    }
    .image {
      width: 100%;
      border: 1px solid #dddddd;
    }
  }
  @media only screen and (min-width:1600px){
    .company-introduction-header {
      border-bottom: 1px dashed #ccc;
      color: #2e2f2a;
      padding-top: 5px;
      font-size: 30px;
      text-shadow: 2px 8px 5px #a9aaa9;
      line-height: 36px;
    }
    .product-card{
      padding: 50px;
    }
    .image {
      width: 100%;
      border: 1px solid #dddddd;
    }
  }

  .company-introduction-detail {
    /*align-self: center;*/
  }

</style>
