<template>
  <div class="app">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="less" scoped>
.app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  .content {
    flex: 1;
  }
}
</style>
