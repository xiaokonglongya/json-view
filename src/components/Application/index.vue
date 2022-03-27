<template>
  <n-message-provider>
    <Message />
    <slot></slot>
  </n-message-provider>
</template>
<script lang="ts" setup>
import Message from "./Message.vue";
</script>
