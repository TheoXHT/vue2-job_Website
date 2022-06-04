<template>
  <div>
    <!-- 主体 -->
    <div class="slip w">
      <a href="#">首页</a> > <a href="#">成都招聘网</a> >
      <a href="#">成都全职招聘</a>
    </div>

    <!-- 筛选框 -->
    <div class="filter w" style="height: 180px">
      <div class="filter_content w" style="85px">
        <dl class="clearfix" style="padding-top: 12px">
          <dt>职位：</dt>
          <dd>
            <ul class="ul_clearfix">
              <li>
                <!-- 全部路由 -->
                <router-link to="/Quanzhi" exact-active-class="link_active"
                  >全部</router-link
                >
              </li>
              <!-- 点击筛选 传递参数 -->
              <li v-for="title in filterlist" :key="title.index">
                <router-link
                  :to="{
                    path: '/Quanzhi/joblist',
                    query: { type: title, dataObj: joblists },
                  }"
                  exact-active-class="link_active"
                  >{{ title }}</router-link
                >
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="clearfix_"></div>
      <div class="filter_content w" style="85px">
        <dl class="clearfix" style="padding-top: 12px">
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
    <div class="filterbar w" v-if="$route.path === '/Quanzhi'">
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
    <div class="jzlists w" v-if="$route.path === '/Quanzhi'">
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
    <div class="j_w" v-if="$route.path == '/Quanzhi'">
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
        "超市/零售",
        "娱乐/影视",
        "教育培训",
        "餐饮",
        "审核录入",
        "销售",
        "物流/仓储",
        "家政/安保",
        "翻译",
        "普工/技工",
        "美容/美发",
        "司机",
        "人事/行政/财务",
        "广告/公关/媒介",
        "运动健身",
        "酒店/旅游/娱乐",
        "美术设计",
        "IT/互联网",
        "房产中介",
        "金融/保险",
        "编辑/出版/印刷",
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
          title: "前端开发工程师",
          desc: "美团前端开发工程师",
          type: "全职",
          location: "成都",
          need: 10,
          salary: "20k-30k",
          salary_num: 20000,
          salary_type: "月结",
          cpy: "美团",
          demand: "这里放招聘单位美团的要求",
          cpy_info: "美团公司/单位的介绍信息",
          onQuery: 5,
          remarkrate: 66,
          handleSpeed: "1-2",
          point: 5.0,
          type: "IT/互联网",
        },
        {
          title: "Java后端开发工程师",
          desc: "字节跳动后端开发工程师",
          type: "全职",
          location: "北京",
          need: 7,
          salary: "21k-30k",
          salary_num: 21000,
          salary_type: "月结",
          cpy: "字节跳动",
          demand: "这里放招聘单位字节跳动的要求",
          cpy_info: "字节跳动的介绍信息",
          onQuery: 5,
          remarkrate: 66,
          handleSpeed: "1-2",
          point: 5.0,
          type: "IT/互联网",
        },
        {
          title: "测试开发工程师",
          desc: "百度测试开发工程师",
          type: "全职",
          location: "上海",
          need: 7,
          salary: "16k-25k",
          salary_num: 16000,
          salary_type: "月结",
          cpy: "百度",
          demand: "这里放招聘单位百度的要求",
          cpy_info: "百度公司的介绍信息",
          onQuery: 5,
          remarkrate: 66,
          handleSpeed: "1-2",
          point: 5.0,
          type: "IT/互联网",
        },
        {
          title: "数据库管理员",
          desc: "海康威视数据库管理员",
          type: "全职",
          location: "成都",
          need: 12,
          salary: "17k-25k",
          salary_num: 17000,
          salary_type: "月结",
          cpy: "海康威视",
          demand: "这里放招聘单位海康威视的要求",
          cpy_info: "海康威视公司的介绍信息",
          onQuery: 5,
          remarkrate: 66,
          handleSpeed: "1-2",
          point: 5.0,
          type: "IT/互联网",
        },
        {
          title: "数据库管理员",
          desc: "百度数据库管理员",
          type: "全职",
          location: "成都",
          need: 12,
          salary: "14k-25k",
          salary_num: 14000,
          salary_type: "月结",
          cpy: "百度",
          demand: "这里放招聘单位百度的要求",
          cpy_info: "百度公司的介绍信息",
          onQuery: 5,
          remarkrate: 66,
          handleSpeed: "1-2",
          point: 5.0,
          type: "IT/互联网",
        },
        {
          title: "运维工程师",
          desc: "国企运维工程师",
          type: "全职",
          location: "成都",
          need: 12,
          salary: "15k-25k",
          salary_num: 15000,
          salary_type: "月结",
          cpy: "国企",
          demand: "这里放招聘单位国企的要求",
          cpy_info: "国企公司的介绍信息",
          onQuery: 5,
          remarkrate: 66,
          handleSpeed: "1-2",
          point: 5.0,
          type: "IT/互联网",
        },
        {
          title: "运维工程师",
          desc: "阿里运维工程师",
          type: "全职",
          location: "成都",
          need: 12,
          salary: "13k-25k",
          salary_num: 13000,
          salary_type: "月结",
          cpy: "阿里",
          demand: "这里放招聘单位阿里的要求",
          cpy_info: "阿里公司的介绍信息",
          onQuery: 5,
          remarkrate: 66,
          handleSpeed: "1-2",
          point: 5.0,
          type: "IT/互联网",
        },
        {
          title: "后端开发工程师",
          desc: "阿里后端开发工程师",
          type: "全职",
          location: "成都",
          need: 12,
          salary: "22k-25k",
          salary_num: 22000,
          salary_type: "月结",
          cpy: "阿里",
          demand: "这里放招聘单位阿里的要求",
          cpy_info: "阿里公司的介绍信息",
          onQuery: 5,
          remarkrate: 66,
          handleSpeed: "1-2",
          point: 5.0,
          type: "娱乐/影视",
        },
        {
          title: "超市收银员",
          desc: "超市收银员",
          type: "全职",
          location: "成都",
          need: 12,
          salary: "3k-5k",
          salary_num: 3000,
          salary_type: "月结",
          cpy: "超市",
          demand: "这里放招聘单位超市的要求",
          cpy_info: "超市公司的介绍信息",
          onQuery: 3,
          remarkrate: 65,
          handleSpeed: "3-5",
          point: 5.0,
          type: "超市/零售",
        },
        {
          title: "辅导员/教师",
          desc: "高校辅导员/教师",
          type: "全职",
          location: "成都",
          need: 12,
          salary: "7k-12k",
          salary_num: 7000,
          salary_type: "月结",
          cpy: "四川大学锦江学院",
          demand: "这里放招聘单位四川大学锦江学院的要求",
          cpy_info: "四川大学锦江学院公司的介绍信息",
          onQuery: 5,
          remarkrate: 33,
          handleSpeed: "1-2",
          point: 5.0,
          type: "教育培训",
        },
        {
          title: "后端开发工程师",
          desc: "阿里后端开发工程师",
          type: "全职",
          location: "成都",
          need: 12,
          salary: "15k-25k",
          salary_num: 15000,
          salary_type: "月结",
          cpy: "阿里",
          demand: "这里放招聘单位阿里的要求",
          cpy_info: "阿里公司的介绍信息",
          onQuery: 5,
          remarkrate: 66,
          handleSpeed: "1-2",
          point: 5.0,
          type: "IT/互联网",
        },
        {
          title: "摆烂开发工程师",
          desc: "阿里摆烂开发工程师",
          type: "全职",
          location: "成都",
          need: 12,
          salary: "10k-15k",
          salary_num: 10000,
          salary_type: "月结",
          cpy: "摆烂",
          demand: "这里放招聘单位阿里的要求",
          cpy_info: "阿里公司的介绍信息",
          onQuery: 5,
          remarkrate: 66,
          handleSpeed: "1-2",
          point: 5.0,
          type: "运动健身",
        },
        {
          title: "后端开发工程师",
          desc: "阿里后端开发工程师",
          type: "全职",
          location: "成都",
          need: 12,
          salary: "15k-25k",
          salary_num: 15000,
          salary_type: "月结",
          cpy: "阿里",
          demand: "这里放招聘单位阿里的要求",
          cpy_info: "阿里公司的介绍信息",
          onQuery: 5,
          remarkrate: 66,
          handleSpeed: "1-2",
          point: 5.0,
          type: "教育/培训",
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

<style scoped>
.link_active {
  color: #5b8fff !important;
}

.curPage {
  background-color: #5b8fff;
  color: #fff;
}
</style>