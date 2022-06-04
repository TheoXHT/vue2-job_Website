<template>
  <div>
    <!-- 头部导航栏 -->
    <div class="header" :class="{ ms_Bg: $route.meta.changeStyle === true }">
      <div class="header_content w">
        <a href="###" class="logo_box">
          <img src="../../static/images/logo.png" alt="" />
          <h3 :class="{ ms_text_head: $route.meta.changeStyle }">兼识</h3>
        </a>
        <a
          href="###"
          class="location"
          :class="{ ms_text_head: $route.meta.changeStyle }"
        >
          成都 <em>∨</em>
        </a>
        <ul class="top_links" :class="{ ms_text: $route.meta.changeStyle }">
          <li>
            <router-link to="/home" active-class="highlight">首页</router-link>
          </li>
          <li>
            <router-link to="/Quanzhi" active-class="highlight"
              >全职</router-link
            >
          </li>
          <li>
            <router-link to="/Jianzhi" active-class="highlight"
              >兼职</router-link
            >
          </li>
          <li class="last">
            <router-link to="OnlineCourse" active-class="highlight"
              >教育</router-link
            >
          </li>
          <!-- <li class="last"><a href="###">关于我们</a></li> -->
        </ul>

        <!-- 返回顶部框 -->
        <aside class="up_box"><a href="#top">^</a></aside>

        <!-- 登录 -->
        <a
          href="###"
          class="login"
          @click="
            {
              {
                user_account.isEnter == false ? showlogin() : ok();
              }
            }
          "
          :class="{ ms_text_head: $route.meta.changeStyle }"
          >{{
            user_account.isEnter == true
              ? "欢迎，" + user_account.id
              : "注册登录"
          }}</a
        >

        <!-- 兼识小程序 -->
        <a
          href="###"
          class="wxlink"
          :class="{ ms_text_head: $route.meta.changeStyle }"
        >
          兼识小程序
        </a>

        <!-- 我要招聘 -->
        <a href="###" class="btn_top" v-if="!$route.meta.changeStyle"
          >我要招聘</a
        >

        <!-- 搜索框 -->
        <button type="submit" class="top_btn" v-if="$route.meta.changeStyle">
          搜索
        </button>
        <input type="text" class="top_input" v-if="$route.meta.changeStyle" />
      </div>
    </div>
    <div class="empty" v-if="!$route.meta.changeStyle"></div>

    <!-- 登录窗口 -->
    <div class="login_box" v-if="loginstatus">
      <!-- 头部 -->
      <div class="login_top w">
        <h2>登录</h2>
        <!-- 关闭按钮 -->
        <a href="###" @click="closeLogin()"
          ><span><img src="../../static/images/close.png" /></span
        ></a>
      </div>

      <!-- 登录框 -->
      <div
        class="login_content w"
        :class="{ phoneLoginStyle: phone_login === true }"
      >
        <div class="login_body">
          <div class="login_header">
            <span>
              <a
                href="###"
                class="login_headerTextColor"
                @click="changeToPhoneLogin(false)"
                :class="{ activelaber: this.account_login === true }"
                >密码登录</a
              >
            </span>
            <span
              ><a
                href="###"
                class="login_headerTextColor"
                @click="changeToPhoneLogin(true)"
                :class="{ activelaber: this.phone_login === true }"
                >手机号登录</a
              ></span
            >
          </div>
          <!-- 账号登录 -->
          <form action="###" v-if="account_login">
            <div class="login_passwd">
              <div class="reg_input">
                <i class="name_ico"></i>
                <input
                  type="text"
                  class="input_phone"
                  placeholder="请输入账号"
                  v-model="user_account.id"
                />
              </div>
              <div class="pwd_input">
                <i class="name_ico"></i>
                <input
                  type="text"
                  class="input_phone"
                  placeholder="请输入登录密码"
                  v-model="user_account.password"
                />
              </div>
              <div class="code">
                <input
                  type="text"
                  class="cd_input"
                  placeholder="输入图片验证码"
                  v-model="PIN"
                />
                <span class="yzm_img">
                  <img src="../../static/images/yzm.jpg" alt="" />
                </span>
              </div>
              <!-- 切换验证码 切换密码s -->
              <div class="change_code">
                <a href="###">看不清，换一个</a>
              </div>
              <div class="forget_code">
                <a href="###">设置密码/忘记密码</a>
              </div>
              <!-- 登录框 -->
              <div class="login_btn">
                <input
                  type="submit"
                  @click="userLogin"
                  value="登录"
                  class="btn_css"
                />
              </div>
              <!-- 注册 -->
              <div class="reg_box">
                还没有账号？
                <a href="###" @click="toRegister">去注册</a>
              </div>
            </div>
          </form>
          <!-- 手机号登录 -->
          <form action="###" v-if="phone_login">
            <div class="login_passwd">
              <!-- 手机号输入 -->
              <div class="reg_input">
                <i class="name_ico"></i>
                <input
                  type="text"
                  class="input_phone"
                  placeholder="请输入手机号"
                  v-model="user_account.phone"
                />
              </div>
              <div class="code">
                <input type="text" class="cd_input" placeholder="填写验证码" />
                <button type="button" class="code_btn">获取验证码</button>
              </div>
              <div class="login_btn">
                <input
                  type="submit"
                  @click="userLogin"
                  value="登录"
                  class="btn_css"
                />
              </div>
              <!-- 注册 -->
              <div class="reg_box">
                还没有账号？
                <a href="###" @click="toRegister">去注册</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- 注册窗口 -->
    <div class="login_box" v-if="registerstatus">
      <div class="register_top">
        <h2>注册</h2>
        <!-- 关闭按钮 -->
        <a href="###" @click="closeLogin()"
          ><span><img src="../../static/images/close.png" /></span
        ></a>
      </div>
      <div class="register_content w">
        <div class="register_body">
          <form action="###">
            <div class="register_passwd">
              <div class="reg_input">
                <i class="name_ico"></i>
                <input
                  type="text"
                  class="input_phone"
                  placeholder="请输入手机号"
                  v-model="user_parameter.phone"
                />
              </div>
              <!-- 填写验证码框 -->
              <div class="code">
                <input type="text" class="cd_input" placeholder="填写验证码" />
                <button type="button" class="code_btn">获取验证码</button>
              </div>
              <!-- 输入密码框 -->
              <div class="pwd_input">
                <i class="name_ico"></i>
                <input
                  type="text"
                  class="input_phone"
                  placeholder="请输入登录密码"
                  v-model="user_parameter.password"
                />
              </div>
              <!-- 协议授权框 -->
              <div class="agreement">
                <input type="checkbox" />我已阅读并同意
                <a href="###">《兼识XX协议》</a>
              </div>
              <!-- 登录框 -->
              <div class="register_btn">
                <input
                  type="submit"
                  @click="userRegister"
                  value="注册"
                  class="btn_css"
                />
              </div>
              <!-- 注册 -->
              <div class="reg_box">
                已有账号？
                <a href="###" @click="toLogin">去登录</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- 登录界面的背景遮罩 -->
    <div class="mask" style="height: 4039px" v-if="mash_show"></div>
    <!-- <backToTopVue></backToTopVue> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_account: {
        id: "",
        password: "",
        phone: "",
        isEnter: false,
      },
      user_parameter: {
        id: "",
        password: "",
        phone: "",
      },
      loginstatus: false,
      registerstatus: false,
      account_login: true,
      phone_login: false,
      mash_show: false,
      PIN: "",
    };
  },
  created() {
    let userArr = this.$store.state;
    this.islogin = userArr.isEnter;
    this.user_account.id = userArr.userName;
    this.user_account.password = userArr.userPwd;
    this.user_account.phone = userArr.userPhone;
    this.user_account.isEnter = userArr.isEnter;
  },
  methods: {
    showlogin() {
      this.loginstatus = true;
      this.mash_show = true;
    },
    closeLogin() {
      this.loginstatus = false;
      this.registerstatus = false;
      this.mash_show = false;
    },
    toLogin() {
      this.registerstatus = false;
      this.loginstatus = true;
    },
    toRegister() {
      this.registerstatus = true;
      this.loginstatus = false;
    },
    changeToPhoneLogin(value) {
      if (value == true) {
        this.phone_login = true;
        this.account_login = false;
      } else {
        this.phone_login = false;
        this.account_login = true;
      }
    },
    userRegister() {
      if (this.user_parameter.phone === "") {
        alert("请输入手机号");
      } else if (this.user_parameter.password === "") {
        alert("请输入密码");
      } else {
        alert("注册成功，转到登录界面");
        this.user_parameter.id = this.user_parameter.phone;
        this.registerstatus = false;
        this.loginstatus = true;
      }
    },
    userLogin() {
      console.log(this.$store.state);
      console.log("登录中");
      if (this.user_account.id === "") {
        alert("请输入用户名");
      } else if (this.user_account.password === "") {
        alert("请输入密码");
      } else if (this.PIN === "") {
        alert("请输入验证码");
      } else if (this.PIN.toLowerCase() != "aeks") {
        alert("验证码错误");
      } else if (
        this.user_account.id == this.user_parameter.id &&
        this.user_account.password == this.user_parameter.password &&
        this.PIN === "aeks"
      ) {
        // 输入正确 保存全局登录信息
        let arr = {
          userName: this.user_account.id,
          userPwd: this.user_account.password,
          userPhone: this.user_account.phone,
          isEnter: true,
        };
        // 用户数据存储到浏览器上
        this.$store.commit("setUser", arr);
        this.loginOver();
      }
      console.log(this.$store.state);
    },
    loginOver() {
      this.$router.push({
        path: `/home`,
      });
      setTimeout(function () {
        location.reload();
      }, 100);
    },
  },
};
</script>

<style >
.phoneLoginStyle {
  height: 380px;
}

.activelaber {
  color: #5b8fff;
  font-size: 20px;
  font-weight: 700;
}

.mask {
  position: absolute;
  background-color: #000;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  filter: alpha(opacity=30);
  opacity: 0.3;
  z-index: 99;
  position: fixed !important;
}

.ms_Bg {
  background: white !important;
  position: static;
}

.ms_text_head {
  color: black !important;
}

.ms_text > li > a {
  color: black;
}

.ms_text li::after {
  background: black !important;
}
</style>