<template>
  <div>
    <!-- 面包屑 -->
    <div class="slip w">
      <a href="#">兼识教育</a> > <a href="#">IT互联网</a> >
      <a href="#">HTML/CSS/JS/Vue 网站开发</a> >
      <a href="#" style="color: #5b8fff">小白零基础系列课程，从入门到入土</a>
    </div>

    <!-- 视频盒子 -->
    <div class="video_box w">
      <!-- 左边视频播放 -->
      <div class="left_part">
        <!-- video -->
        <!-- 设置空间 循环 自动播放 -->
        <video src="../../static/video/video2.mp4" controls loop></video>
      </div>

      <!-- 右边视频任务框 -->
      <div class="right_part">
        <ol class="task_list">
          <!-- 大列表 -->
          <li class="sub_selection">
            <h4 class="sub_title">课程前导</h4>
            <ol>
              <!-- 大列表里面的小列表分支 -->
              <li class="task_item">
                <div class="task_item__pre">
                  <span class="task_item__type">录播</span>
                </div>
                <div class="task_item__tt">
                  <h5 class="task_item_text">课程前导</h5>
                  <span class="task_time">10分钟</span>
                </div>
              </li>
            </ol>
          </li>

          <!-- 列表 -->
          <li class="sub_selection">
            <h4 class="sub_title">课前须知及[编辑器]使用方法</h4>
            <ol>
              <!-- 大列表里面的小列表分支 -->
              <li class="task_item">
                <div class="task_item__pre">
                  <span class="task_item__type">录播</span>
                </div>
                <div class="task_item__tt">
                  <h5 class="task_item_text">课前须知及[编辑器]使用方法</h5>
                  <span class="task_time">9分钟</span>
                </div>
              </li>
            </ol>
          </li>

          <!-- 列表 -->
          <li class="sub_selection">
            <h4 class="sub_title">HTML初级标签/高级标签</h4>
            <ol>
              <!-- 小列表 -->
              <li class="task_item">
                <div class="task_item__pre">
                  <span class="task_item__type">录播</span>
                </div>
                <div class="task_item__tt">
                  <h5 class="task_item_text">HTML初级篇-基础标签</h5>
                  <span class="task_time">12分钟</span>
                </div>
              </li>

              <!-- 小列表 -->
              <li class="task_item">
                <div class="task_item__pre">
                  <span class="task_item__type">录播</span>
                </div>
                <div class="task_item__tt">
                  <h5 class="task_item_text">HTML高级篇-高级标签</h5>
                  <span class="task_time">20分钟</span>
                </div>
              </li>
            </ol>
          </li>
        </ol>
      </div>
      <div class="clearfix_"></div>

      <div class="video_bottom">
        <div class="btn_go">
          <button class="go">立即报名</button>
        </div>
        <div class="course_info">
          <div class="course_title">
            <h3>2021最新HTML+CSS零基础入门</h3>
            <span>免费</span>
          </div>
          <div class="course_hts">
            <span class="hts_item">
              最近在学<span class="item_data">6666人</span>
            </span>
            <span class="hts_item">
              视频热度<span class="item_data">2333度</span>
            </span>
            <span class="hts_item">
              总体评分<span class="item_data">9999分</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <courseRemarkVue></courseRemarkVue>
  </div>
</template>

<script>
import courseRemarkVue from "../components/courseRemark.vue";
export default {
  components: {
    courseRemarkVue,
  },
};
</script>

<style>
</style>