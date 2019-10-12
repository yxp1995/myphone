<template>
  <div class="login-wrap">
    <van-nav-bar title="登录" />
    <van-cell-group>
      <van-field v-model="user.mobile" required clearable label="手机号" placeholder="请输入手机号" />
      <van-field v-model="user.code" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <van-button type="info" @click="handleLogin">登录</van-button>
  </div>
</template>

<script>
import axios from "axios";
import { login } from "../../api/user.js";
export default {
  data() {
    return {
      user: {
        mobile: "",
        password: ""
      }
    };
  },
  methods: {
    async handleLogin() {
      // const data = await login(this.user);
      // console.log(data);
    }
  }
};
</script>

<style>
.van-button--info {
  width: 100%;
  height: 60px;
  line-height: 60px;
}
</style>