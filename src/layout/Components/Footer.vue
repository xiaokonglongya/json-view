<template>
  <div class="footer">
    <div class="footer-center">
      <div class="footer-center-item">
        <span class="line-one" v-for="item in lineOne" :key="item">{{
          item
        }}</span>
      </div>
      <div class="footer-center-item">
        <span class="line-two" v-for="item in lineTwo" :key="item">{{
          item
        }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const lineOne = ref([
  "关于我们",
  "用户协议",
  "隐私协议",
  "侵权协议",
  "企业服务",
  "帮助中心",
  "联系我们",
]);
const lineTwo = ref([
  "网上有害信息举报专区",
  "不良信息举报电话：40083000355",
  "举报邮箱：huayun@huaweicloud.com",
  "联系电话：40083000355",
]);
</script>
<style lang="less" scoped>
.footer {
  background-color: #191919;
  height: 200px;
  color: #666666;
  &-center {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    &-item {
      // flex: 1;
      display: flex;
      align-items: center;
    }
    .line-one {
      margin-right: 50px;
    }
    .line-two {
      padding: 0 20px;
      position: relative;
      &:after {
        position: absolute;
        right: 0;
        top: calc(50% - 5px);
        display: block;
        content: "";
        height: 10px;
        width: 1px;
        background-color: #666666;
      }

      &:first-child {
        padding-left: 0;
      }
      &:last-child{
        &::after{
          display: none;
        }
      }
    }
  }
}
</style>
