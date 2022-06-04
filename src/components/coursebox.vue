<template>
  <div>
    <div class="box w">
      <div class="box-hd">
        <h3 id="jinpintuijian">{{ courseInfo.outTitle }}</h3>
        <a href="#">查看全部</a>
      </div>
      <div class="box-bd">
        <ul class="clearfix">
          <li v-for="(id, index) in 10" :key="index">
            <router-link to="/CV">
              <img :src="courseInfo.imgUrl" alt="" />
              <h4>{{ courseInfo.inTitle }}</h4>
              <div class="info">
                <span>{{ courseInfo.payWay }}</span> •
                {{ courseInfo.learningP }}人正在学习
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="clearfix_"></div>
  </div>
</template>

<script>
export default {
  props: {
    courseInfo: {
      type: Object,
    },
  },
};
</script>

<style>

</style>