<template>
  <div>
    <!-- 连接条 -->
    <div class="slip w">
      <router-link to="/home">首页</router-link> > <a href="#">招聘公司</a> >
      <a href="#">{{ jobdetails.cpy }}</a>
    </div>

    <!-- 公司信息 -->
    <div class="main w">
      <div class="detail_top">
        <div class="cpy_img">
          <img src="../../static/images/cpy.png" alt="" />
        </div>

        <div class="cpy_info">
          <div class="cpy_title">
            <h2>{{ jobdetails.cpy }}</h2>
          </div>
          <ul class="cpy_desc">
            <li>
              <b>{{ jobdetails.onQuery }}个</b><span>在招职位</span>
            </li>
            <li>
              <b>{{ jobdetails.remarkrate }}%</b><span>消息回复率</span>
            </li>
            <li>
              <b>{{ jobdetails.handleSpeed }}天</b><span>报名处理速度</span>
            </li>
            <li>
              <b>{{ jobdetails.point }}</b
              ><span>评分</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="cpy_nav">
        <ul class="nav_list">
          <li class="nav_item">
            <span
              @click="changeInfoType(1)"
              :class="{ cpy_info_active: this.tap_cpyinfo === true }"
              >单位信息</span
            >
          </li>
          <li class="nav_item">
            <span
              @click="changeInfoType(0)"
              :class="{ cpy_info_active: this.tap_jobinfo === true }"
              >招聘职位</span
            >
          </li>
        </ul>
      </div>

      <div class="detail_main">
        <!-- 招聘单位基本信息 -->

        <div class="left_part" v-if="tap_cpyinfo">
          <div class="content">
            <div class="d_title">
              <h3>单位基本信息</h3>
              <i class="h_bottom"></i>
            </div>

            <div class="bottom_info">
              <div class="information">{{ jobdetails.cpy_info }}</div>
            </div>
          </div>
        </div>

        <!-- 招聘信息 -->
        <div class="left_part" v-if="tap_jobinfo">
          <div class="content">
            <div class="d_title">
              <h3>招聘信息</h3>
              <i class="h_bottom"></i>
            </div>
            <div class="bottom_info">
              <div class="information">{{ jobdetails.demand }}</div>
            </div>
          </div>
        </div>

        <div class="right_part">
          <div class="right_content">
            <div class="title">
              <i></i>
              <h3>最新招聘</h3>
              <router-link to="/home">查看全部在招职位</router-link>
            </div>
            <!-- 推荐列表 -->
            <div class="newjob" style="overflow: hidden">
              <dl>
                <dt></dt>
                <dd>
                  <p class="p1"><a href="#">高薪招聘人才</a></p>
                  <p class="p2">
                    <span class="addr">成都</span>
                    <span class="pway">月结</span>
                  </p>
                  <p class="p3">
                    <span class="salary">
                      <em>5k-10k</em>
                      元/月
                    </span>
                  </p>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="clearfix_"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tap_jobinfo: true,
      tap_cpyinfo: false,
      jobdetails: {},
    };
  },
  created() {
    this.getquery();
  },
  methods: {
    changeInfoType(v) {
      console.log("changeInfoType函数调用");
      if (v == 0) {
        this.tap_cpyinfo = false;
        this.tap_jobinfo = true;
      } else if (v == 1) {
        this.tap_cpyinfo = true;
        this.tap_jobinfo = false;
      }
    },
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
  watch: {
    // 监测路由变化,只要变化了就调⽤获取路由参数⽅法将数据存储本组件即可
    $route: "getquery",
  },
};
</script>

<style>
.cpy_info_active::before {
  content: "";
  position: absolute;
  /* bottom: -16px; */
  top: 40px;
  left: 20px;
  z-index: 999;
  height: 4px;
  width: 60px;
  background-color: #5b8fff;
}
</style>