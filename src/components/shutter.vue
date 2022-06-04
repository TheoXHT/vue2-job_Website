<template>
  <div>
    <!-- 轮播图 -->
    <div class="showImg">
      <img
        @mouseover="changeInterval(true)"
        @mouseleave="changeInterval(false)"
        v-for="item in imgArr"
        :key="item.id"
        :src="item.url"
        alt="暂无图片"
        v-show="item.id === currentIndex"
      />
      //左侧按钮
      <div @click="clickIcon('up')" class="iconDiv icon-left">
        <i class="el-icon-caret-left"></i>
      </div>
      //右侧按钮
      <div @click="clickIcon('down')" class="iconDiv icon-right">
        <i class="el-icon-caret-right"></i>
      </div>
      //控制圆点
      <div class="banner-circle">
        <ul>
          <li
            @click="changeImg(item.id)"
            v-for="item in imgArr"
            :key="item.id"
            :class="item.id === currentIndex ? 'shutterActive' : ''"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      currentIndex: 0, //当前所在图片下标
      timer: null, //定时轮询
      imgArr: [
        { id: 0, url: require("../../static/images/shutter_1.jpg") },
        {
          id: 1,
          url: require("../../static/images/shutter_2.jpg"),
        },
        {
          id: 2,
          url: require("../../static/images/shutter_3.jpg"),
        },
        {
          id: 3,
          url: require("../../static/images/shutter_4.jpg"),
        },
      ],
    };
  },
  methods: {
    //开启定时器
    startInterval() {
      // 事件里定时器应该先清除在设置，防止多次点击直接生成多个定时器
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.currentIndex++;
        if (this.currentIndex > this.imgArr.length - 1) {
          this.currentIndex = 0;
        }
      }, 3000);
    },
    // 点击左右箭头
    clickIcon(val) {
      if (val === "down") {
        this.currentIndex++;
        if (this.currentIndex === this.imgArr.length) {
          this.currentIndex = 0;
        }
      } else {
        /* 第一种写法
					this.currentIndex--;
					if(this.currentIndex < 0){
						this.currentIndex = this.imgArr.length-1;
					} */
        // 第二种写法
        if (this.currentIndex === 0) {
          this.currentIndex = this.imgArr.length;
        }
        this.currentIndex--;
      }
    },
    // 点击控制圆点
    changeImg(index) {
      this.currentIndex = index;
    },
    //鼠标移入移出控制
    changeInterval(val) {
      if (val) {
        clearInterval(this.timer);
      } else {
        this.startInterval();
      }
    },
  },
  //进入页面后启动定时轮询
  mounted() {
    this.startInterval();
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
/* 清除li前面的圆点 */
li {
  list-style-type: none;
}
.showImg {
  position: relative;
  width: 1232px;
  height: 500px;
  margin: 50px auto;
  border-radius: 10px;
  overflow: hidden;
}
/* 轮播图片 */
.showImg img {
  width: 100%;
  height: 100%;
}

/* 箭头图标 */
.iconDiv {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  border: 1px solid #666;
  border-radius: 15px;
  background-color: rgba(193, 197, 197, 0.5);
  line-height: 30px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
}
.iconDiv:hover {
  background-color: white;
}
.icon-left {
  left: 10px;
}
.icon-right {
  right: 10px;
}

/* 控制圆点 */
.banner-circle {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
}
.banner-circle ul {
  margin: 0 50px;
  height: 100%;
  text-align: right;
}
.banner-circle ul li {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  border-radius: 7px;
  background-color: rgba(125, 125, 125, 0.8);
  cursor: pointer;
}
.shutterActive {
  background-color: rgb(25, 92, 250) !important;
}
</style>