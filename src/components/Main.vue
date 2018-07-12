<template>
  <div class="hello">
    <el-carousel :interval="5000" arrow="hover">
      <el-carousel-item v-for="item in data.carousel" :key="item.picture">
        <img :src="item.picture" style="width: 100%;height: 100%;"/>
      </el-carousel-item>
    </el-carousel>
    <el-row>
      <el-col :span="6" v-for="(o, index) in 4" :key="o">
        <el-card style="border:0;" shadow="never">
          <img src="http://element-cn.eleme.io/static/hamburger.50e4091.png" class="image">
          <div>
            <span>好吃的汉堡</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" v-for="(o, index) in 2" :key="o">
        <el-row>
          <el-col :span="12">
            <el-card style="border:0;" shadow="never" body-style="padding-right:0;">
              <img src="http://element-cn.eleme.io/static/hamburger.50e4091.png" class="image">
              <div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card style="border:0;" shadow="never" body-style="padding-left:0;text-align: left;">
              <h3>这是标题</h3>
              <div>
                <span class="main-text-center">好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉的汉堡好吃的汉堡好吃的汉堡好吃的汉的汉堡好
                  吃的汉堡好吃的汉堡好吃的汉的汉堡好吃的汉堡堡好吃的汉堡好吃的汉的汉堡好吃的汉堡堡好吃的汉堡好吃的汉的汉堡好吃的汉堡好吃的汉堡好吃的汉
                  堡好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉的汉堡好吃的汉堡堡好吃的汉堡好吃的汉的汉堡好吃的汉堡堡好吃的汉堡好吃的汉的汉堡
                  堡好吃的汉堡好吃的汉的汉堡好吃的汉堡堡好吃的汉堡好吃的汉的堡好吃的汉堡好吃的汉的汉堡好吃的汉堡汉堡好吃的汉堡堡好吃的
                  堡好吃的汉堡好吃的汉的汉堡好吃的汉堡堡好吃的汉堡好吃的汉的汉堡好吃的汉堡汉堡好吃的汉的汉堡好吃的汉堡好吃的汉堡堡好吃的汉</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Main',
    data() {
      return {
        data: {
          carousel: []
        },
      }
    },
    created: function () {
      var _this = this;
      this.$http.get('/static/home.json').then(function (res) {
        _this.data = res.data; // {carousel,}
      });
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-text-center {
    width: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    right: 0;
    left: 75%;
    overflow: hidden;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }
</style>
