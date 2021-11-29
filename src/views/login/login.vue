<template>
  <div class="background">
    <a-row class="title">
      <a-col :xs="24">你好，欢迎登陆</a-col>
      <a-col :xs="24">{{name}}后台
        <smile-two-tone spin class="smile" />
      </a-col>
    </a-row>
    <a-row class="buttonRow">
      <a-col :xs="24">
        <a-button class="loginBtn"
                  block
                  type="primary"
                  @click="login"
        >登陆</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import {SmileTwoTone} from "@ant-design/icons-vue";
import {useRouter} from "vue-router";
import baseConfig from "@/config/baseConfig";
import {ref} from "vue";
const name = ref(baseConfig.projectName)
const router = useRouter()

function login(){
  console.log("点击登陆")
  router.push('/index')
}
</script>

<style scoped lang="scss">
.flex{
  display: flex;
  align-items: center;
  justify-content: center;
}
.smile{font-size: 2rem}
.background{
  width: 100vw;
  height: 100vh;
  background: #2c3e50;
  @extend .flex;
  flex-direction: column;
  .title{
    font-size: 2rem;
    color: antiquewhite;
  }
  .buttonRow{
    width: 30vw;
    max-width: 240px;
    min-width: 140px;
    margin-top: 20px;
  }
}
</style>