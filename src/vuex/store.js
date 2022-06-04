import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userName: '',
        userPwd: '',
        userPhone: '',
        isEnter: false,
        jobdetails: {},
        joblist: [],
        type: '',
        remark: [],
    },
    mutations: {
        setUser(state, valueObj) {
            // 传递用户信息
            this.state.userName = valueObj.userName
            this.state.userPwd = valueObj.userPwd
            this.state.userPhone = valueObj.userPhone
            this.state.isEnter = valueObj.isEnter
        },
        setJob(state, valueObj) {
            // 传递对象
            this.state.jobdetails = valueObj
        },
        // 传递工作信息
        setJoblist(state, valueArr, valuetype) {
            this.state.joblist = valueArr
            this.type = valuetype;
        },
        // 传递评论信息
        setRemark(state, valueArr) {
            this.remark = valueArr;
        }
    },
    actions: {}
})

