<template>
  <div class="wrap">
    <div class="home-content">
      <div
        class="home-content-item"
        @click="jumpNews(item)"
        v-for="item in itemData"
        :key="item"
      >
        <img class="home-content-item-icon" :src="item.logo" preview-disabled />
        <div class="home-content-item-word">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getBanner, getNews, getHomeCategory } from "@/api/home";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const itemData = ref();
const router = useRouter();
onMounted(() => {
  getHomeCategoryData();
});
const getHomeCategoryData = async () => {
  itemData.value = await getHomeCategory();
};
const jumpNews = (item) => {
  router.push({ path: "/firm", query: { categotyId: item.id } });
};
</script>
<style lang="less" scoped>
.wrap {
  padding: 40px 0;
  width: 1200px;
  margin: 0 auto;
}
.home {
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    &-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &-icon {
        margin: 0 auto;
        @size: 54px;
        display: b;
        width: @size;
        height: @size;
        border-radius: 100%;
        &:hover {
          background-color: @thems-color;
          transition: all 0.3s;
          filter: brightness(100);
        }
      }

      &-word {
        width: 120px;
        margin-top: 10px;
        text-align: center;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #415184;
        line-height: 22px;
      }
    }
  }
}
</style>
