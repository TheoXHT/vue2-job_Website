<template>
  <div>
    <!-- 轮播图 -->
    <Shutter></Shutter>

    <!-- 导航栏 -->

    <div class="goods w">
      <a href="#jinpintuijian">
        <h3>精品推荐</h3>
      </a>
      <ul>
        <li><a href="#hulianwang">IT互联网</a></li>
        <li><a href="#sheji">设计创作</a></li>
        <li><a href="#dianshang">电商营销</a></li>
        <li><a href="#yingyu">商务英语</a></li>
        <li><a href="#sheyin">摄影绘制</a></li>
      </ul>
      <a href="#" class="mod">修改兴趣</a>
    </div>

    <courseboxVue :courseInfo="totalInfo.box1"></courseboxVue>
    <courseboxVue :courseInfo="totalInfo.box2"></courseboxVue>
    <courseboxVue :courseInfo="totalInfo.box3"></courseboxVue>
    <courseboxVue :courseInfo="totalInfo.box4"></courseboxVue>
    <courseboxVue :courseInfo="totalInfo.box5"></courseboxVue>
  </div>
</template>

<script>
import Shutter from "../components/shutter.vue";
import courseboxVue from "../components/coursebox.vue";
export default {
  components: {
    Shutter,
    courseboxVue,
  },
  data() {
    return {
      totalInfo: {
        box1: {
          outTitle: "精品推荐",
          inTitle: "HTML/CSS/JS精品系列教程",
          payWay: "免费",
          learningP: "666666",
          imgUrl: require("../../static/images/jinpin.jpg"),
        },
        box2: {
          outTitle: "IT互联网",
          inTitle: "前端框架学习",
          payWay: "免费",
          learningP: "999999",
          imgUrl: require("../../static/images/IT.jpg"),
        },
        box3: {
          outTitle: "设计创作",
          inTitle: "Adobe设计全家桶学习",
          payWay: "收费",
          learningP: "123456",
          imgUrl: require("../../static/images/design.jpg"),
        },
        box4: {
          outTitle: "电商营销",
          inTitle: "淘宝/京东电商视频课学习",
          payWay: "免费",
          learningP: "200000",
          imgUrl: require("../../static/images/onlineshop.jpg"),
        },
        box5: {
          outTitle: "商务英语",
          inTitle: "2022年商务实用英语教程",
          payWay: "收费",
          learningP: "123456",
          imgUrl: require("../../static/images/IT.jpg"),
        },
      },
    };
  },
};
</script>

<style>
</style>