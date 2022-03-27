<template>
  <Application>
    <transition-group>
      <router-view></router-view>
    </transition-group>
  </Application>
</template>
<script lang="ts" setup>
import Application from "./components/Application/index.vue";
</script>
<style lang="less">
</style>
