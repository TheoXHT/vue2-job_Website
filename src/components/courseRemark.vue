<template>
  <div>
    <!-- 评论框 -->
    <div class="comment_box w">
      <div class="input_remark_box">
        <div class="input_user_head">
          <img :src="comment.imgUrl" />
        </div>
        <input class="text_input" type="text" v-model="comment.cmt" />
        <button class="text_btn" @click="sentComment">发布</button>
      </div>
      <div class="comment_list_box">
        <div
          class="comment_lists clearFix"
          v-for="(item, index) in remarks"
          :key="index"
        >
          <div class="comment_item_left">
            <!-- 头像 -->
            <img :src="comment.imgUrl" />
            <!-- 用户名 -->
            <p>{{ item.name }}</p>
          </div>

          <div class="comment_item_right">
            <p>{{ item.cmt }}</p>
          </div>
          <div class="comment_details">
            <a href="###" @click="deleteComment(index)">删除评论</a>
            <p>{{ item.date | dateFormat }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remarks: [],
      comment: {
        name: "",
        cmt: "",
        imgUrl: require("../../static/images/defaultTx.jpg"),
      },
    };
  },
  created() {
    // 更新评论信息
    let objArr = this.$store.state;
    this.remarks = objArr.remark;
    console.log("打印用户姓名", objArr.userName);
    if (objArr.userName != "") {
      this.comment.name = objArr.userName;
    } else {
      this.comment.name = "游客";
    }
  },
  methods: {
    deleteComment(index) {
      for (let i = 0; i < this.remarks.length; i++) {
        if (i == index) {
          this.remarks.splice(i, 1);
        }
      }
    },
    // 发送评论
    sentComment() {
      if (this.comment.cmt != "") {
        console.log(this.comment.cmt, this.comment.name);
        var sentArr = {
          name: this.comment.name,
          cmt: this.comment.cmt,
          date: new Date(),
          imgUrl: this.comment.imgUrl,
        };
        this.remarks.push(sentArr);
        this.comment.cmt = "";
      }
    },
  },
  mounted() {
    // 存放评论数据到浏览器上
    this.$store.commit("setRemark");
  },
};
</script>

<style>
</style>