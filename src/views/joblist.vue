<template>
  <div>
    <div class="filterbar w">
      <div class="checkfilter">
        <div class="ck_left">身份要求 <i></i></div>

        <label for="">
          <input type="checkbox" />
          校园筛选
        </label>
      </div>

      <div class="sortfilter">
        <a href="#" @click="getSort(2)" :class="{ cur: sortId == 2 }"
          >工资最高</a
        >
        <a href="#" @click="getSort(1)" :class="{ cur: sortId == 1 }"
          >最新发布</a
        >
        <a href="#" @click="getSort(0)" :class="{ cur: sortId == 0 }"
          >推荐排序</a
        >
      </div>
    </div>

    <!-- 信息列表 -->
    <div class="jzlists w">
      <!-- v-for遍历循环 -->
      <div
        class="jzlists_item"
        v-for="joblist in job_filterlists"
        :key="joblist.index"
      >
        <div class="jzlists_txt">
          <div class="jzlists_title">
            <h3>
              <router-link
                :to="{
                  name: 'Jobdetails',
                  query: { dataObj: joblist },
                }"
                >{{ joblist.title }}</router-link
              >
            </h3>
            <h5>急需</h5>
          </div>
          <!-- 清除浮动 -->
          <div class="clearfix_"></div>
          <ul class="jzlist_field">
            <li><span>工作时间：</span>{{ joblist.type }}工作</li>
            <li><span>工作类型：</span>{{ joblist.desc }}</li>
            <li><span>工作地点：</span>{{ joblist.location }}</li>
            <li><span>招聘人数：</span>{{ joblist.need }}人</li>
          </ul>
        </div>

        <div class="jzlists_btn"><a href="#">报名参加</a></div>
        <div class="jzlists_salary">
          <span class="money"
            ><em>{{ joblist.salary }}</em
            >元/月</span
          >
          <span>{{ joblist.salary_type }}</span>
        </div>
      </div>
    </div>

    <!-- 分页 -->
    <div class="j_w">
      <div class="pageBox">
        <ul class="pageLink j_clearfix">
          <li>
            <a
              href="###"
              class="next"
              @click="changePage(-1)"
              v-if="this.Page != 1"
              ><span>上一页</span></a
            >
          </li>
          <li v-for="(number, index) of pages" :key="index">
            <a
              :class="{ curPage: number == Page }"
              @click="changetoPage(number)"
              ><span>{{ number }}</span></a
            >
          </li>
          <li>
            <a href="###" class="next" @click="changePage(0)"
              ><span>下一页</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      joblist: [],
      job_filterlists: [],
      sortId: 0,
      Page: 1,
      gopre: 0,
      gonext: 10,
    };
  },
  created() {
    this.getquery();
    this.getfilter();
  },
  computed: {
    pages() {
      return Math.ceil(this.job_filterlists.length / 10);
    },
  },
  mounted() {
    // 存放参数数据到浏览器上
    this.$store.commit("setJoblist", this.joblist, this.$route.query.type);
  },
  methods: {
    getquery() {
      // 取到路由带过来的参数
      let routerquery = this.$route.query.dataObj;
      console.log("打印传递的路由参数", routerquery);
      if (routerquery) {
        // 将数据放在当前组件的数据内
        // console.log("routerquery不为空 将请求数据赋予当前组件", routerquery);
        this.joblist = routerquery;
      } else {
        this.joblist = this.$store.state.joblist;
      }
    },
    getSort(val) {
      if (this.sortId != val) {
        this.sortId = val;
        // 调用排序函数
        console.log("调用筛选函数");
      }
    },
    getSort(val) {
      if (this.sortId != val) {
        this.sortId = val;
        // 调用排序函数
        console.log("调用筛选函数");
        let key;
        if (val == 0) {
          key = "recommend";
        } else if (val == 1) {
          key = "new";
        } else if (val == 2) {
          key = "salary_num";
        }
        this.sortKey(this.job_filterlists, key);
      }
    },
    sortKey(array, key) {
      return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return x > y ? -1 : x < y ? 1 : 0;
      });
    },
    getfilter() {
      let queryType = this.$route.query.type;
      //   遍历数据 将符合条件的数据放置数组中
      this.job_filterlists = [];
      for (let i = 0; i < this.joblist.length; i++) {
        if (this.joblist[i].type == queryType) {
          this.job_filterlists.push(this.joblist[i]);
        }
      }
      //   console.log("筛选数组", this.job_filterlists);
      //   console.log("职业数组", this.joblist);
    },
    changetoPage(val) {
      this.Page = val;
      if (val == 1) {
        this.gonext = 10;
        this.gopre = 0;
      } else if (val == this.pages) {
        this.gopre = (this.pages - 1) * 10;
        this.gonext = this.job_filterlists.length;
      } else {
        this.gopre = (val - 1) * 10;
        this.gonext = val * 10;
      }
    },
    changePage(val) {
      if (val == 0 && this.Page < this.pages) {
        this.Page++;
        if (this.Page == this.pages) {
          this.gonext = this.job_filterlists.length;
        } else this.gonext += 10;
        this.gopre += 10;
      } else if (val == -1 && this.Page > 1) {
        this.Page--;
        if (this.Page == 1) {
          this.gopre = 0;
        } else this.gopre -= 10;
        if (this.gonext == this.job_filterlists) {
          this.gonext = this.job_filterlists - (this.job_filterlists % 10);
        }
      }
    },
  },
  watch: {
    "$route.query.type": {
      immediate: true,
      handler(newV, oldV) {
        console.log("type被改变了", newV, oldV);
        // 调用函数更新filter
        this.getfilter();
      },
    },
  },
};
</script>

<style>
</style>