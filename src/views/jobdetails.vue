<template>
  <div>
    <!-- 主体 -->
    <div class="slip w">
      <router-link to="/home">首页</router-link> >
      <a href="###">{{ jobdetails.location }}招聘网</a> >
      <a href="###">{{ jobdetails.location }}兼职招聘</a> >
      <a href="###">{{ jobdetails.title }}</a>
    </div>

    <!-- 信息框 -->
    <div class="main w">
      <div class="left_content">
        <!-- 盒子一 -->
        <div class="content1">
          <div class="content_title">
            <div class="title_name">
              <h2>{{ jobdetails.title }}</h2>
            </div>
            <div class="salary">
              <span class="salary_left">
                <b>{{ jobdetails.salary }}</b> 元/月
              </span>
              <div class="salary_tips">
                <span>{{ jobdetails.salary_type }}</span>
                <i class="divide"></i>
                <span>{{ jobdetails.desc }}</span>
                <i class="divide"></i>
                <span>10 人</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 盒子二 -->
        <div class="content2_3">
          <div class="m_title">
            <h3>职位信息</h3>
            <i class="bottom_divide"></i>
          </div>

          <div class="info">
            <ul class="info_tips">
              <li>性别不限</li>
              <li>18-45岁</li>
            </ul>
            <!-- 清楚浮动 -->
            <div class="clearfix_"></div>
            <div class="details">
              <p>{{ jobdetails.demand }}</p>
            </div>
          </div>
        </div>

        <!-- 盒子三 -->

        <div class="content2_3">
          <div class="m_title">
            <h3>工作地点</h3>
            <i class="bottom_divide"></i>
          </div>

          <div class="info">
            <div class="work_location">
              <div class="area">{{ jobdetails.location }} &nbsp;</div>
            </div>
          </div>
        </div>

        <!-- 其他链接 -->
        <div class="otherlinks">
          <div class="m_title">
            <h3>其他感兴趣的内容</h3>
            <a href="#" class="more_links">更多职位 ></a>
          </div>

          <div class="otherlists">
            <div class="list_item">
              <div class="list_title">
                <div class="title_box">
                  <h3><a href="#">兼职PS修图设计类临时工</a></h3>
                  <h5>急需</h5>
                </div>
                <!-- 清除浮动 -->
                <div class="clearfix_"></div>
                <ul class="list_field">
                  <li><span>工作时间：</span>12.10~1.31</li>
                  <li><span>工作类型：</span>临时工</li>
                  <li><span>工作地点：</span>四川大学锦江学院</li>
                  <li><span>招聘人数：</span>10人</li>
                </ul>
              </div>
              <div class="list_salary">
                <span class="money"><em>300</em>元/天</span>
                <span>日结</span>
              </div>
              <div class="list_salary"></div>
            </div>
            <div class="clearfix_"></div>
          </div>
        </div>
      </div>

      <!-- 右边信息框 -->
      <div class="right_content">
        <div class="cpy_info">
          <div class="info_pic">
            <router-link
              :to="{
                name: 'CpyInfo',
                query: { dataObj: JSON.stringify(jobdetails) },
              }"
            >
              <!-- 这里放图片 -->
              <img src="../../static//images/school.jpg" alt="" />
            </router-link>
          </div>

          <div class="cpy_name">
            <router-link
              :to="{
                name: 'CpyInfo',
                query: { dataObj: JSON.stringify(jobdetails) },
              }"
              >{{ jobdetails.cpy }}</router-link
            >
          </div>

          <div class="cpy_link">
            <router-link
              :to="{
                name: 'CpyInfo',
                query: { dataObj: JSON.stringify(jobdetails) },
              }"
              >查看该单位全部信息 ></router-link
            >
          </div>
        </div>
      </div>
      <!-- 清除浮动 -->
      <div class="clearfix_"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      jobdetails: {},
    };
  },
  created() {
    this.getquery();
  },
  methods: {
    getquery() {
      // 取到路由带过来的参数
      let routerquery = JSON.parse(this.$route.query.dataObj);
      // console.log(
      //   "打印输出路由带过来的参数",
      //   JSON.stringify(routerquery),
      //   "缓存存放的参数",
      //   this.$store.state.jobdetails
      // );
      if (Object.keys(routerquery).length) {
        // 将数据放在当前组件的数据内
        // console.log("routerquery不为空 将请求数据赋予当前组件", routerquery);
        this.jobdetails = routerquery;
      } else {
        this.jobdetails = this.$store.state.jobdetails;
      }
    },
  },
  mounted() {
    // 存放参数数据到浏览器上
    this.$store.commit("setJob", JSON.stringify(this.jobdetails));
  },
  watch: {
    // 监测路由变化,只要变化了就调⽤获取路由参数⽅法将数据存储本组件即可
    $route: "getquery",
  },
};
</script>
<style>
</style>