<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{name}}</h1>
    <login></login>
  </div>
</template>
<script lang="ts" setup>
import login from './login/login.vue';
import {ref} from "vue";

const name = ref("袁培祥")
</script>