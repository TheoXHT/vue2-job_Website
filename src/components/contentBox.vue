<template>
  <!-- main_content -->
  <div>
    <div class="main_content w">
      <div class="item_box">
        <div class="item_head">
          <div class="head_left">
            <!-- 数据 -->
            <h1>{{ boxInfo.title.name }}</h1>
            <h4>{{ boxInfo.title.des }}</h4>
          </div>
          <div class="head_right">
            <a href="#" class="more">
              <!-- 头部数据 -->
              {{ boxInfo.title.more }}<span> > </span>
            </a>

            <ul class="head_recommend">
              <!-- 循环遍历头部推荐数据 -->
              <li v-for="list in boxInfo.head_recommend" :key="list.index">
                <a href="#">{{ list }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="item_content w">
          <ul class="item_ul aa-parent">
            <!-- 向前后切换箭头 -->
            <span class="tapPrior aa-dropdown" @click="nextJobs(0)"
              ><a href="###"></a
            ></span>
            <span class="tapNext aa-dropdown" @click="nextJobs(1)"
              ><a href="###"></a
            ></span>
            <!-- v-for 循环 -->
            <li
              class="aa-parent"
              v-for="list in boxInfo.jobList.slice(preindex, rearindex)"
              :key="list.index"
            >
              <router-link
                :to="{
                  name: 'Jobdetails',
                  query: { dataObj: JSON.stringify(list) },
                }"
              >
                <h4>{{ list.title }}</h4>
                <p>{{ list.desc }}</p>
                <ul>
                  <li>{{ list.type }}</li>
                  <li>{{ list.location }}</li>
                  <li class="last">招聘{{ list.need }}人</li>
                </ul>
                <br />
                <div class="salary">
                  <h4>
                    {{ list.salary
                    }}<span
                      >元/{{
                        boxInfo.title.name == "高薪全职" ? "月" : "小时"
                      }}</span
                    >
                  </h4>
                  <h5>{{ list.salary_type }}</h5>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preindex: 0,
      rearindex: 4,
    };
  },
  props: {
    boxInfo: {
      type: Object,
    },
  },
  methods: {
    nextJobs(value) {
      if (value == 0 && this.preindex - 4 >= 0) {
        // 切换到前一页
        this.preindex -= 4;
        this.rearindex -= 4;
      } else if (
        value == 1 &&
        this.rearindex + 4 <= Object.keys(this.boxInfo.jobList).length
      ) {
        // 切换到下一页
        this.preindex += 4;
        this.rearindex += 4;
      }
    },
  },
};
</script>

<style>
.main_content {
  background: #fff;
  margin: 30px auto;
  height: 310px;
  /* overflow: hidden; */
  /* 310 */
}
</style>