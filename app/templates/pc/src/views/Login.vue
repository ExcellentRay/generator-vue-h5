<template>
  <div class="background-content">
    <div class="banner-background">
      <section style="padding-top: 180px;">
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="50px" class="demo-ruleForm login-container">
          <h3 class="title">系统登录</h3>
          <el-form-item style="margin-bottom: 5px;">
            <div class= "msg-wrap">
              <div v-if="errMsg !== ''" class="err-msg">
                <i class="fa fa-exclamation-circle"></i>
                {{errMsg}}
              </div>
            </div>
          </el-form-item>
          <el-form-item label='账号' prop="account">
            <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm2.password" auto-complete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
          </el-form-item>
        </el-form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // var
    return {
      logining: false,
      errMsg: '',
      ruleForm2: {
        account: '',
        password: ''
      },
      rules2: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      },
      checked: true
    };
  },
  methods: {
    handleSubmit2(ev) {

    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.banner-background {
  display: flex;
  justify-content: center;
}
.login-container {
  padding-top: 180px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box; // margin: 180px auto;
  width: 350px;
  padding: 22px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 10px auto 25px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
}

.footer-note {
  margin-top: 49px; // margin-top: 10%;
  // margin-bottom: 100px;
  width: 100%;
  padding: 25px 0;
  text-align: center;
  color: #FFF;
  font-size: 12px; // background-color: #323844;
}

.err-msg {
  position: relative;
  background: #ffebeb;
  color: #e4393c;
  border: 1px solid #faccc6;
  padding: 3px 10px 3px 3px;
  line-height: 15px;
  height: auto;
}

.msg-wrap {
  min-height: 25px;
  margin-top: 5px;
  margin-bottom: 10px;
  height: auto!important;
}
</style>
