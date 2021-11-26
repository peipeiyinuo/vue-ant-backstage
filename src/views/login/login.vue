<template>
  <div class="background">
    <a-row class="title">
      <a-col>你好，欢迎登陆{{}}后台</a-col>
      <smile-two-tone spin class="smile" />
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import {SmileTwoTone} from "@ant-design/icons-vue";

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
}
</style>