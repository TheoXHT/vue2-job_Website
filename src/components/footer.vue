<template>
  <div>
    <!-- 页脚顶部栏 -->
    <div class="footer_topbar" v-if="$route.meta.showTopBar">
      <div class="w">
        <div class="item item_1">
          <h2>频道介绍：</h2>
          <p>
            我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息
          </p>
        </div>

        <div class="item friend_link">
          <div class="item_links">
            <h3>成都招聘相关热门城市:</h3>
            <a href="#">上海招聘</a>
            <a href="#">北京招聘</a>
            <a href="#">广州招聘</a>
            <a href="#">杭州招聘</a>
            <a href="#">杭州招聘</a>
            <a href="#">杭州招聘</a>
            <a href="#">杭州招聘</a>
            <a href="#">杭州招聘</a>
            <a href="#">杭州招聘</a>
            <a href="#">杭州招聘</a>
            <a href="#">杭州招聘</a>
            <a href="#">杭州招聘</a>
            <a href="#">杭州招聘</a>
            <img src="../../static/images/xia_black.png" alt="" />
          </div>
        </div>

        <div class="item friend_link">
          <div class="item_links">
            <h3>成都招聘职位推荐:</h3>
            <a href="#">成都传单派发招聘</a>
            <a href="#">成都问卷调查招聘</a>
            <a href="#">成都服务员招聘</a>
            <a href="#">成都实习生招聘</a>
            <a href="#">成都促销导购招聘</a>
            <a href="#">成都促销导购招聘</a>
            <a href="#">成都促销导购招聘</a>
            <img src="../../static/images/xia_black.png" alt="" />
          </div>
        </div>

        <div class="item">
          <div class="item_links">
            <h3>成都招聘网周边城市:</h3>
            <a href="#">成都招聘</a>
            <a href="#">成都招聘</a>
            <a href="#">成都招聘</a>
            <a href="#">成都招聘</a>
            <a href="#">成都招聘</a>
            <a href="#">成都招聘</a>
            <a href="#">成都招聘</a>
            <a href="#">成都招聘</a>
            <a href="#">成都招聘</a>
            <a href="#">成都招聘</a>
            <a href="#">成都招聘</a>
            <a href="#">成都招聘</a>
            <img src="../../static/images/xia_black.png" alt="" />
          </div>
        </div>

        <div class="item">
          <div class="item_links">
            <h3>手机版</h3>
            <a href="#" style="font-size: 14px">兼职教育招聘网</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <div class="footer" :class="{ ms_footer: $route.meta.changeStyle }">
      <div class="footer_top_back" v-if="$route.meta.showTopBack">
        <div class="footer_top w">
          <div class="many_links">
            <h4>热门城市：</h4>
            <ul>
              <li><a href="#">成都招聘</a></li>
              <li><a href="#">成都招聘</a></li>
              <li><a href="#">上海招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
            </ul>

            <img src="../../static/images/xia.png" alt="" />
          </div>
          <div class="many_links">
            <h4>热门城市：</h4>
            <ul>
              <li><a href="#">成都招聘</a></li>
              <li><a href="#">成都招聘</a></li>
              <li><a href="#">上海招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
              <li><a href="#">北京招聘</a></li>
            </ul>
            <img src="../../static/images/xia.png" alt="" />
          </div>
        </div>
      </div>

      <div class="footer_content w">
        <!-- 左侧logo -->
        <a href="#" class="footer_logo">
          <img src="../../static/images/logo.jpg" alt="" />
        </a>
        <!-- 右侧底部导航条 -->
        <ul>
          <li>
            关于我们
            <ul>
              <li><a href="#">公司简介</a></li>
              <li><a href="#">公司历程</a></li>
              <li><a href="#">加入我们</a></li>
              <li><a href="#">联系我们</a></li>
              <li><a href="#">渠道招商</a></li>
            </ul>
          </li>
          <li>
            <a href="#">创培生</a>
          </li>
          <li>
            公司资讯
            <ul>
              <li><a href="#">公司新闻</a></li>
              <li><a href="#">工作技巧</a></li>
            </ul>
          </li>
          <li>
            帮助中心
            <ul>
              <li><a href="#">有偿服务</a></li>
            </ul>
          </li>
          <li>
            <a href="#">网站地图</a>
          </li>
          <li>
            <ul>
              <a href="#">电子营业执照</a>
              <li><a href="#">人力资源服务许可证</a></li>
              <li><a href="#">ICP证</a></li>
              <li><a href="#">个人隐私协议</a></li>
              <li><a href="#">用户协议</a></li>
              <li><a href="#">服务规则和举报制度</a></li>
            </ul>
          </li>
        </ul>

        <!-- 微信扫码   -->
        <div class="ft_wxlink">
          <span class="title">扫描关注公众号</span>
          <img src="../../static/images/ewm.jpg" alt="" />
        </div>

        <!-- 客服热线 -->

        <div class="hotline">
          <span class="title first">客服热线</span>
          <span class="phone">4000-6666-233</span>
          <span class="title">合作邮箱</span>
          <span class="email">
            <a href="mailto:1051489768@qq.com">JY@website.com</a>
          </span>
          <span class="title">违法和不良信息举报电话：0831-5201314</span>
          <span class="title">违法和不良信息举报邮箱：jubao@website.com</span>
        </div>
      </div>

      <p class="copyright">
        ©2021-20XX™ 兼识教育平台服务有限公司 &nbsp;<a
          target="_blank"
          href="#"
          rel="nofollow"
          >京ICP备15058772号</a
        >
        <a target="_blank" href="#" rel="nofollow"
          >京公网安备11066666666666号</a
        >
        联系电话：010-57317000 <a href="#" target="_blank">网上有害信息举报</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ms_footer {
  margin-top: 100px;
  height: 337px;
}
</style>