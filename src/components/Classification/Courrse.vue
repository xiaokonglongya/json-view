<template>
  <div class="course">
    <div
      class="course-item"
      v-for="item in menus"
      :key="item._key"
      @click.stop="openMenu(item)"
    >
      <img class="course-item-icon icon" :src="item.icon" alt="icon" />
      {{ item.name }}
    </div>
  </div>
</template>
<script setup lang="ts">
import allIcon from "@/assets/components/classification/courrse/all.png";
import localIcon from "@/assets/components/classification/courrse/local.png";
import { getLocalUserPermission } from "@/utils/accountPermission";
import { useRouter } from "vue-router";
const router = useRouter();
const menus = [
  {
    name: "全国课程",
    _key: "all",
    icon: allIcon,
  },
  {
    name: "本地课程",
    _key: "local",
    icon: localIcon,
  },
];

const openMenu = (item) => {
    const localPermise = getLocalUserPermission()
    switch(item._key){
      case  'all' :  router.push('/firm')
    }

};
</script>
<style lang="less" scoped>
.course {
  display: flex;
  justify-content: center;
  &-item {
    width: 520px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f7f7f7;
    font-size: 22px;
    color: @thems-color;
    position: relative;
    transition: background-color 0.5s;

    &:hover {
      background: @thems-color;
      color: #fff;
      cursor: grab;
      .icon {
        filter: grayscale(100%) brightness(1000%);
      }
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 2px;
      height: 20px;
      background: @thems-color;
      top: calc(50% - 1px);
      right: -1px;
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
    &-icon {
      @size: 40px;
      width: @size;
      height: @size;
      fill: inherit;
    }
  }
}
</style>
