<template>
  <div>
    <!-- 主体 -->
    <div class="slip w">
      <a href="#">首页</a> > <a href="#">成都招聘网</a> >
      <a href="#">成都兼职招聘</a>
    </div>

    <!-- 筛选框 -->
    <div class="filter w" style="height: 108px">
      <div class="filter_content w">
        <dl class="clearfix" style="height: 10px">
          <dt>职位：</dt>
          <dd>
            <ul class="ul_clearfix">
              <li>
                <router-link to="/Jianzhi" exact-active-class="link_active"
                  >全部</router-link
                >
              </li>
              <!-- 点击筛选 传递参数 -->
              <li v-for="title in filterlist" :key="title.index">
                <router-link
                  :to="{
                    path: '/Jianzhi/joblist',
                    query: { type: title, dataObj: joblists },
                  }"
                  exact-active-class="link_active"
                  >{{ title }}</router-link
                >
              </li>
            </ul>
          </dd>
        </dl>
        <br />
        <dl class="clearfix">
          <dt>地区：</dt>
          <dd>
            <ul class="ul_clearfix">
              <li><a href="#" style="color: #5b8fff">不限</a></li>
              <li v-for="title in area_title" :key="title.index">
                <a href="###">{{ title }}</a>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>

    <!-- 下栏筛选框 -->
    <div class="filterbar w" v-if="$route.path === '/Jianzhi'">
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

    <!-- 默认显示全部信息列表 -->
    <div class="jzlists w" v-if="$route.path === '/Jianzhi'">
      <!-- v-for遍历循环 -->
      <div
        class="jzlists_item"
        v-for="joblist in job_filterlists.slice(gopre, gonext)"
        :key="joblist.index"
      >
        <div class="jzlists_txt">
          <div class="jzlists_title">
            <h3>
              <router-link
                :to="{
                  name: 'Jobdetails',
                  query: { dataObj: JSON.stringify(joblist) },
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

    <!-- 显示信息列表 -->
    <router-view></router-view>

    <!-- 分页 -->
    <div class="j_w" v-if="$route.path == '/Jianzhi'">
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
      filterlist: [
        "简单易做",
        "室内推荐",
        "演艺达人",
        "特色职位",
        "体力达人",
        "优秀青年",
        "跑腿办事",
        "专业技能",
        "其他",
      ],
      area_title: [
        "锦江区",
        "青羊区",
        "金牛区",
        "武侯区",
        "成华区",
        "龙泉驿区",
        "新都区",
        "郫都区",
        "温江区",
        "双流区",
        "青白江区",
        "新津区",
      ],
      joblists: [
        {
          title: "餐厅服务员",
          desc: "兼识餐厅服务员",
          type: "兼职",
          location: "成都",
          need: 10,
          salary: "4k-5k",
          salary_num: 4000,
          salary_type: "日结",
          cpy: "兼识餐厅",
          demand: "这里放餐厅兼识X的要求",
          cpy_info: "餐厅兼识X公司/单位的介绍信息",
          onQuery: 4,
          remarkrate: 32,
          handleSpeed: "2-4",
          point: 5.0,
          type: "体力达人",
        },
        {
          title: "搬砖能手",
          desc: "兼识搬砖能手",
          type: "兼职",
          location: "成都",
          need: 10,
          salary: "5k-6k",
          salary_num: 5000,
          salary_type: "日结",
          cpy: "兼识工地",
          demand: "这里放工地兼识X的要求",
          cpy_info: "工地兼识X公司/单位的介绍信息",
          onQuery: 4,
          remarkrate: 32,
          handleSpeed: "2-4",
          point: 5.0,
          type: "体力达人",
        },
        {
          title: "餐厅服务员",
          desc: "兼识餐厅服务员",
          type: "兼职",
          location: "成都",
          need: 10,
          salary: "4k-5k",
          salary_num: 4000,
          salary_type: "日结",
          cpy: "兼识餐厅",
          demand: "这里放餐厅兼识X的要求",
          cpy_info: "餐厅兼识X公司/单位的介绍信息",
          onQuery: 4,
          remarkrate: 32,
          handleSpeed: "2-4",
          point: 5.0,
          type: "体力达人",
        },
        {
          title: "跑腿儿服务员",
          desc: "兼识跑腿儿服务员",
          type: "兼职",
          location: "成都",
          need: 10,
          salary: "7k-8k",
          salary_num: 7000,
          salary_type: "日结",
          cpy: "兼识跑腿儿",
          demand: "这里放跑腿儿兼识X的要求",
          cpy_info: "跑腿儿兼识X公司/单位的介绍信息",
          onQuery: 4,
          remarkrate: 32,
          handleSpeed: "2-4",
          point: 5.0,
          type: "跑腿办事",
        },
        {
          title: "送货人员服务员",
          desc: "兼识送货人员服务员",
          type: "兼职",
          location: "成都",
          need: 10,
          salary: "2k-3k",
          salary_num: 2000,
          salary_type: "日结",
          cpy: "兼识送货人员",
          demand: "这里放送货人员兼识X的要求",
          cpy_info: "送货人员兼识X公司/单位的介绍信息",
          onQuery: 4,
          remarkrate: 32,
          handleSpeed: "2-4",
          point: 5.0,
          type: "简单易做",
        },
        {
          title: "餐厅服务员",
          desc: "兼识餐厅服务员",
          type: "兼职",
          location: "成都",
          need: 10,
          salary: "4k-5k",
          salary_num: 4000,
          salary_type: "日结",
          cpy: "兼识餐厅",
          demand: "这里放餐厅兼识X的要求",
          cpy_info: "餐厅兼识X公司/单位的介绍信息",
          onQuery: 4,
          remarkrate: 32,
          handleSpeed: "2-4",
          point: 5.0,
          type: "体力达人",
        },
        {
          title: "餐厅服务员",
          desc: "兼识餐厅服务员",
          type: "兼职",
          location: "成都",
          need: 10,
          salary: "4k-5k",
          salary_num: 4000,
          salary_type: "日结",
          cpy: "兼识餐厅",
          demand: "这里放餐厅兼识X的要求",
          cpy_info: "餐厅兼识X公司/单位的介绍信息",
          onQuery: 4,
          remarkrate: 32,
          handleSpeed: "2-4",
          point: 5.0,
          type: "体力达人",
        },
        {
          title: "餐厅服务员",
          desc: "兼识餐厅服务员",
          type: "兼职",
          location: "成都",
          need: 10,
          salary: "4k-5k",
          salary_num: 4000,
          salary_type: "日结",
          cpy: "兼识餐厅",
          demand: "这里放餐厅兼识X的要求",
          cpy_info: "餐厅兼识X公司/单位的介绍信息",
          onQuery: 4,
          remarkrate: 32,
          handleSpeed: "2-4",
          point: 5.0,
          type: "体力达人",
        },
        {
          title: "餐厅服务员",
          desc: "兼识餐厅服务员",
          type: "兼职",
          location: "成都",
          need: 10,
          salary: "4k-5k",
          salary_num: 4000,
          salary_type: "日结",
          cpy: "兼识餐厅",
          demand: "这里放餐厅兼识X的要求",
          cpy_info: "餐厅兼识X公司/单位的介绍信息",
          onQuery: 4,
          remarkrate: 32,
          handleSpeed: "2-4",
          point: 5.0,
          type: "体力达人",
        },
        {
          title: "餐厅服务员",
          desc: "兼识餐厅服务员",
          type: "兼职",
          location: "成都",
          need: 10,
          salary: "4k-5k",
          salary_num: 4000,
          salary_type: "日结",
          cpy: "兼识餐厅",
          demand: "这里放餐厅兼识X的要求",
          cpy_info: "餐厅兼识X公司/单位的介绍信息",
          onQuery: 4,
          remarkrate: 32,
          handleSpeed: "2-4",
          point: 5.0,
          type: "体力达人",
        },
        {
          title: "餐厅服务员",
          desc: "兼识餐厅服务员",
          type: "兼职",
          location: "成都",
          need: 10,
          salary: "4k-5k",
          salary_num: 4000,
          salary_type: "日结",
          cpy: "兼识餐厅",
          demand: "这里放餐厅兼识X的要求",
          cpy_info: "餐厅兼识X公司/单位的介绍信息",
          onQuery: 4,
          remarkrate: 32,
          handleSpeed: "2-4",
          point: 5.0,
          type: "体力达人",
        },
        {
          title: "餐厅服务员",
          desc: "兼识餐厅服务员",
          type: "兼职",
          location: "成都",
          need: 10,
          salary: "4k-5k",
          salary_num: 4000,
          salary_type: "日结",
          cpy: "兼识餐厅",
          demand: "这里放餐厅兼识X的要求",
          cpy_info: "餐厅兼识X公司/单位的介绍信息",
          onQuery: 4,
          remarkrate: 32,
          handleSpeed: "2-4",
          point: 5.0,
          type: "体力达人",
        },
        {
          title: "肯德基服务员",
          desc: "兼识肯德基服务员",
          type: "兼职",
          location: "成都",
          need: 10,
          salary: "3k-4k",
          salary_num: 3000,
          salary_type: "日结",
          cpy: "兼识餐厅",
          demand: "这里放餐厅兼识X的要求",
          cpy_info: "餐厅兼识X公司/单位的介绍信息",
          onQuery: 4,
          remarkrate: 32,
          handleSpeed: "2-4",
          point: 5.0,
          type: "简单易做",
        },
      ],
      job_filterlists: [],
      sortId: 0,
      Page: 1,
      gopre: 0,
      gonext: 10,
    };
  },
  mounted() {
    this.job_filterlists = this.joblists;
  },
  computed: {
    pages() {
      return Math.ceil(this.job_filterlists.length / 10);
    },
  },
  methods: {
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
  },
};
</script>

<style>
.link_active {
  color: #5b8fff !important;
}

.curPage {
  background-color: #5b8fff;
  color: #fff;
}
</style>